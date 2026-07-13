const DATA_FILES = {
  client: "data/session-client.json",
  admin: "data/session-admin.json",
  presentation: "data/session-presentation.json",
  remoteClient: "data/client.json",
  remoteAdmin: "data/admin.json",
  global: "data/global.json",
  session: "data/session.json",
  validations: "data/validations-sebastien.json"
};

const STATUS_CLASSES = {
  "ANALYSE": "status-analysis",
  "EN COURS": "status-progress",
  "MODIFIÉ NON TESTÉ": "status-progress",
  "TESTÉ LOCALEMENT": "status-tested",
  "VALIDÉ TECHNIQUEMENT": "status-tested",
  "VALIDATION SÉBASTIEN NÉCESSAIRE": "status-waiting",
  "TEST CONNECTÉ": "status-tested",
  "NON VALIDÉ": "status-waiting",
  "À CONNECTER": "status-progress",
  "HORS PÉRIMÈTRE": "status-analysis",
  "À VALIDER PAR SÉBASTIEN": "status-waiting",
  "BLOQUÉ": "status-blocked",
  "ANNULÉ ET RESTAURÉ": "status-blocked"
};

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>'"]/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  })[char]);
}

function formatPercent(value) {
  const number = Number(value) || 0;
  return `${number.toLocaleString("fr-FR", { maximumFractionDigits: 1 })} %`;
}

function statusClass(status) {
  const normalized = String(status || "").toUpperCase().replaceAll("_", " ");
  return STATUS_CLASSES[normalized] || "status-analysis";
}

async function fetchJson(path) {
  const response = await fetch(`${path}?t=${Date.now()}`, { cache: "no-store" });
  if (!response.ok) throw new Error(`${path}: HTTP ${response.status}`);
  return response.json();
}

function renderStream(name, data) {
  const section = document.querySelector(`[data-stream="${name}"]`);
  if (!section) return;

  section.querySelector(".progress-label").textContent = formatPercent(data.progression);
  section.querySelector(".progress-track span").style.width = `${Math.max(0, Math.min(100, Number(data.progression) || 0))}%`;
  section.querySelector(".stream-meta").innerHTML = [
    `<span>Branche : ${escapeHtml(data.branche)}</span>`,
    `<span>Dernière tâche : ${escapeHtml(data.derniereTacheTerminee || "Aucune")}</span>`,
    `<span>Preview : ${escapeHtml(data.previewUrl || "locale uniquement")}</span>`,
    `<span>Reste estimé : ${escapeHtml(data.tempsRestantEstime)}</span>`
  ].join("");

  const rows = (data.taches || []).map(task => {
    const testCount = (task.testsReussis || []).length;
    const failedCount = (task.testsEchoues || []).length;
    return `<tr>
      <td><span class="task-title">${escapeHtml(task.titre)}</span><span class="task-id">${escapeHtml(task.id)} · ${escapeHtml(task.descriptionExacte)}</span></td>
      <td><span class="status ${statusClass(task.statut)}">${escapeHtml(task.statut)}</span></td>
      <td>${formatPercent(task.progression)}<br><small>Technique ${formatPercent(task.validationTechnique)} · Sébastien ${formatPercent(task.validationSebastien)}</small></td>
      <td>${testCount} réussi(s) · ${failedCount} échoué(s)</td>
      <td>${escapeHtml(task.prochaineAction)}</td>
    </tr>`;
  });
  section.querySelector("tbody").innerHTML = rows.join("") || '<tr><td colspan="5">Aucune tâche enregistrée.</td></tr>';
}

function renderGlobal(data) {
  const taskProgress = data.sessionTaskProgress;
  const maturity = data.sectionMaturity;
  const proven = data.provenProgress;
  const technical = data.technicalValidation;
  const sebastien = data.sebastienValidation;
  const operational = data.globalOperationalReadiness;
  const tests = data.tests;

  document.querySelector("#session-percent").textContent = formatPercent(taskProgress.value);
  document.querySelector("#session-progress-source").textContent = taskProgress.source;
  document.querySelector("#session-workstreams").textContent = `${data.sessionWorkstreams.completed} / ${data.sessionWorkstreams.total}`;
  document.querySelector("#section-maturity").textContent = `${maturity.client} / ${maturity.admin} / ${maturity.presentation}`;
  document.querySelector("#proven-progress").textContent = `${proven.evidencedChanges} / ${proven.totalChanges}`;
  document.querySelector("#technical-validation").textContent = `${technical.succeededControls} / ${technical.expectedSuccessfulControls}`;
  document.querySelector("#sebastien-validation").textContent = `${sebastien.completed} / ${sebastien.total}`;
  document.querySelector("#operational-readiness").textContent = formatPercent(operational.percent);
  document.querySelector("#operational-source").textContent = operational.source;
  document.querySelector("#tests-passed").textContent = tests.succeeded;
  document.querySelector("#tests-summary").textContent = `${tests.total} contrôles, ${tests.historicalAnomalies} anomalies historiques`;
  document.querySelector("#remaining-hours").textContent = `${data.remainingEstimate.quantifiedHours} h`;
  document.querySelector("#remaining-days").textContent = `${Number(data.remainingEstimate.quantifiedWorkdays).toLocaleString("fr-FR", { maximumFractionDigits: 1 })} j à ${data.remainingEstimate.workdayHours} h/j`;

  document.querySelector("#external-body").innerHTML = (data.connexionsExternes || []).map(item => `<tr>
    <td>${escapeHtml(item.module)}</td>
    <td><span class="status ${statusClass(item.statut)}">${escapeHtml(item.statut)}</span></td>
    <td>${escapeHtml(item.preuve)}</td>
  </tr>`).join("");

  document.querySelector("#timeline").innerHTML = (data.historique || []).map(item => `<li>
    <time datetime="${escapeHtml(item.date)}">${escapeHtml(item.date)}</time>
    <strong>${escapeHtml(item.titre)}</strong><br>${escapeHtml(item.detail)}
  </li>`).join("");
}

function renderGlobalPlan(items) {
  document.querySelector("#global-plan-body").innerHTML = items.map(item => `<tr>
    <td><strong>${escapeHtml(item.name)}</strong><br><small>${escapeHtml(item.summary)}</small></td>
    <td>${formatPercent(item.progress)}</td>
    <td>${formatPercent(item.maturity)}</td>
    <td>${escapeHtml(item.hoursRemaining)} h</td>
    <td>${escapeHtml(item.activeWork?.label || "Aucun travail déclaré")}</td>
  </tr>`).join("");
}

function renderSession(data) {
  document.querySelector("#session-start").textContent = data.heureDebut;
  document.querySelector("#session-end").textContent = data.heureLimite;
  document.querySelector("#current-task").textContent = data.tacheActuelle;
  document.querySelector("#footer-branch").textContent = data.resumeBranches;
}

function renderValidations(data) {
  document.querySelector("#validation-body").innerHTML = data.validations.map(item => `<tr>
    <td>${escapeHtml(item.section)}</td>
    <td><strong>${escapeHtml(item.decision)}</strong></td>
    <td>${escapeHtml(item.raison)}</td>
    <td>${escapeHtml(item.impact)}</td>
    <td>${escapeHtml(item.recommandation)}</td>
  </tr>`).join("");
}

async function refresh() {
  const button = document.querySelector("#refresh-button");
  const dot = document.querySelector("#connection-dot");
  const text = document.querySelector("#connection-text");
  button.disabled = true;
  text.textContent = "Actualisation";

  try {
    const [client, admin, presentation, remoteClient, remoteAdmin, global, session, validations] = await Promise.all(
      Object.values(DATA_FILES).map(fetchJson)
    );
    renderStream("client", client);
    renderStream("admin", admin);
    renderStream("presentation", presentation);
    renderGlobalPlan([remoteClient, remoteAdmin]);
    renderGlobal(global);
    renderSession(session);
    renderValidations(validations);
    dot.className = "connection-dot online";
    text.textContent = "Données synchronisées";
    document.querySelector("#last-refresh").textContent = new Date().toLocaleString("fr-FR");
  } catch (error) {
    console.error(error);
    dot.className = "connection-dot offline";
    text.textContent = "Données indisponibles";
  } finally {
    button.disabled = false;
  }
}

document.querySelector("#refresh-button").addEventListener("click", refresh);
refresh();
setInterval(refresh, 30000);
