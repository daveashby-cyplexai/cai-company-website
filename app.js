const DATA_PATHS = {
  llms: "data/llm_features.json",
  content: "data/content_index.json",
  team: "data/team_directory.json"
};

const BOOTSTRAP_DATA = window.COMPANY_HUB_BOOTSTRAP || {};

const state = {
  llms: [],
  content: [],
  team: {
    people: [],
    ownerships: []
  },
  showTips: true,
  filters: {
    search: "",
    provider: "all",
    status: "all"
  }
};

const byId = (id) => document.getElementById(id);

function cloneData(data) {
  return JSON.parse(JSON.stringify(data));
}

async function loadJson(path, key) {
  const cacheBuster = `v=${Date.now()}`;
  try {
    const response = await fetch(`${path}${path.includes("?") ? "&" : "?"}${cacheBuster}`);
    if (!response.ok) {
      throw new Error(`Unable to load ${path}`);
    }
    return response.json();
  } catch (error) {
    if (BOOTSTRAP_DATA[key]) {
      return cloneData(BOOTSTRAP_DATA[key]);
    }
    throw error;
  }
}

function uniqueSorted(items) {
  return [...new Set(items)].sort((a, b) => a.localeCompare(b));
}

function matchesSearch(model, query) {
  if (!query) return true;
  const haystack = [
    model.provider,
    model.product,
    model.category,
    model.status,
    ...(model.capabilities || []),
    ...(model.best_for || []),
    ...(model.limitations || []),
    ...(model.integrations || []),
    ...(model.recommended_use_cases || [])
  ].join(" ").toLowerCase();

  return haystack.includes(query.toLowerCase());
}

function statusClass(status) {
  if (status === "Production Ready") return "blue";
  if (status === "Experimental") return "gold";
  return "rose";
}

function renderMetrics() {
  byId("metricDocs").textContent = state.content.length;
  byId("metricModels").textContent = state.llms.length;
  byId("metricUpdates").textContent = state.llms.reduce((sum, model) => {
    return sum + (model.recent_updates?.length || 0);
  }, 0);
}

function personById(id) {
  return state.team.people.find((person) => person.id === id);
}

function renderActivityList() {
  const needsReviewDocs = state.content.filter((item) => item.status === "Needs Review").length;
  const productionReadyModels = state.llms.filter((model) => model.status === "Production Ready").length;
  const needsReviewModels = state.llms.filter((model) => model.status === "Needs Review").length;
  const recentUpdates = state.llms.reduce((sum, model) => sum + (model.recent_updates?.length || 0), 0);

  const items = [
    {
      label: "Docs needing review",
      value: needsReviewDocs,
      tone: "rose",
      detail: "SOPs, FAQs, training, how-tos, or knowledge entries that still need a human pass before they should be treated as final."
    },
    {
      label: "Production-ready AI profiles",
      value: productionReadyModels,
      tone: "blue",
      detail: "LLM profiles currently marked ready for normal team use."
    },
    {
      label: "AI profiles needing review",
      value: needsReviewModels,
      tone: "gold",
      detail: "AI tool profiles that exist, but still need official source checks or internal approval."
    },
    {
      label: "Updates captured",
      value: recentUpdates,
      tone: "lime",
      detail: "Recent capability notes stored in the dashboard. These become more useful once the newsletter pipeline is active."
    }
  ];

  byId("activityList").innerHTML = items.map((item) => `
    <article class="activity-item ${item.tone} has-tip" tabindex="0" data-tip="${item.detail}">
      <span>${item.value}</span>
      <div>
        <strong>${item.label}</strong>
        <p>${item.detail}</p>
      </div>
    </article>
  `).join("");
}

function renderQuickGrid() {
  const cards = [
    {
      title: "Find Current SOPs",
      text: "Use the SOP Library for approved operating procedures with owners and review dates.",
      href: "#sops",
      label: "Operations"
    },
    {
      title: "Check LLM Capabilities",
      text: "Compare OpenAI, Claude, Gemini, and Perplexity by role, strength, limitation, and readiness.",
      href: "#llm-dashboard",
      label: "AI Systems"
    },
    {
      title: "Start Training",
      text: "Use role-based learning paths and recurring practice materials for onboarding and upskilling.",
      href: "#training",
      label: "Enablement"
    }
  ];

  byId("quickGrid").innerHTML = cards.map((card) => `
    <a class="quick-card has-tip" href="${card.href}" data-tip="${card.text}">
      <span>${card.label}</span>
      <div>
        <h3>${card.title}</h3>
        <p>${card.text}</p>
      </div>
    </a>
  `).join("");
}

function renderProviderFilter() {
  const providers = uniqueSorted(state.llms.map((model) => model.provider));
  const select = byId("providerFilter");
  select.innerHTML = `<option value="all">All providers</option>${providers.map((provider) => `
    <option value="${provider}">${provider}</option>
  `).join("")}`;
}

function filteredModels() {
  return state.llms.filter((model) => {
    const providerMatch = state.filters.provider === "all" || model.provider === state.filters.provider;
    const statusMatch = state.filters.status === "all" || model.status === state.filters.status;
    return providerMatch && statusMatch && matchesSearch(model, state.filters.search);
  });
}

function renderModels() {
  const models = filteredModels();
  const grid = byId("modelGrid");

  if (!models.length) {
    grid.innerHTML = `<article class="content-card"><h3>No matching systems</h3><p>Try clearing a filter or searching for another workflow.</p></article>`;
    return;
  }

  grid.innerHTML = models.map((model) => `
    <article class="model-card has-tip" tabindex="0" data-tip="Use this card to decide when ${model.product} is the right tool, what it is good at, and what still needs review.">
      <div class="model-topline">
        <div>
          <h3>${model.product}</h3>
          <span class="model-role">${model.provider} / ${model.category}</span>
        </div>
        <span class="tag ${statusClass(model.status)}">${model.status}</span>
      </div>
      <div class="tag-row">
        ${(model.best_for || []).slice(0, 3).map((item) => `<span class="tag">${item}</span>`).join("")}
      </div>
      <ul class="capability-list">
        ${(model.capabilities || []).slice(0, 4).map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <p><strong>Known limits:</strong> ${(model.limitations || ["Needs validation"]).join("; ")}</p>
      <p class="model-role">Last verified: ${model.last_verified}</p>
    </article>
  `).join("");
}

function renderUpdates() {
  const updates = state.llms.flatMap((model) => {
    return (model.recent_updates || []).map((update) => ({
      ...update,
      provider: model.provider,
      product: model.product
    }));
  }).sort((a, b) => b.date.localeCompare(a.date));

  byId("lastVerified").textContent = updates[0] ? updates[0].date : "Pending";
  byId("updateFeed").innerHTML = updates.slice(0, 8).map((update) => `
    <article class="update-card has-tip" tabindex="0" data-tip="A captured update about this AI tool. Review status tells the team whether it is approved or still needs checking.">
      <strong>${update.product}: ${update.title}</strong>
      <small>${update.date} / ${update.review_status}</small>
      <p>${update.summary}</p>
      <span class="source-chip">${update.source_type}</span>
    </article>
  `).join("");
}

function renderContentLists() {
  const lists = document.querySelectorAll(".content-list");
  lists.forEach((list) => {
    const category = list.dataset.category;
    const entries = state.content.filter((item) => item.category === category);
    list.innerHTML = entries.map((item) => `
      <article class="content-card has-tip" tabindex="0" data-tip="This ${item.category} entry has an owner, review date, version, and status so the team knows whether it is current.">
        <div class="content-topline">
          <h3>${item.title}</h3>
          <span class="tag ${statusClass(item.status)}">${item.status}</span>
        </div>
        <p>${item.summary}</p>
        <footer>
          <span class="doc-meta">Owner: ${item.owner}</span>
          <span class="doc-meta">Review: ${item.review_date}</span>
          <span class="doc-meta">v${item.version}</span>
        </footer>
      </article>
    `).join("");
  });
}

function renderTeamDirectory() {
  const chart = byId("orgChart");
  const ownershipList = byId("ownershipList");
  if (!chart || !ownershipList) return;

  const leadership = state.team.people.filter((person) => !person.reports_to);
  const reportsByManager = state.team.people.reduce((groups, person) => {
    if (!person.reports_to) return groups;
    groups[person.reports_to] = groups[person.reports_to] || [];
    groups[person.reports_to].push(person);
    return groups;
  }, {});

  const personCard = (person, level = "member") => `
    <article class="person-card ${level} has-tip" tabindex="0" data-tip="${person.tooltip}">
      <div>
        <span class="avatar">${person.initials}</span>
      </div>
      <div>
        <h3>${person.name}</h3>
        <p>${person.role}</p>
        <div class="tag-row">
          ${(person.owns || []).slice(0, 3).map((item) => `<span class="tag">${item}</span>`).join("")}
        </div>
      </div>
    </article>
  `;

  chart.innerHTML = leadership.map((leader) => `
    <div class="org-group">
      ${personCard(leader, "leader")}
      <div class="report-grid">
        ${(reportsByManager[leader.id] || []).map((person) => personCard(person)).join("")}
      </div>
    </div>
  `).join("");

  ownershipList.innerHTML = state.team.ownerships.map((item) => {
    const owner = personById(item.owner_id);
    return `
      <article class="ownership-item has-tip" tabindex="0" data-tip="${item.description}">
        <span>${item.area}</span>
        <strong>${owner ? owner.name : "Unassigned"}</strong>
        <p>${item.description}</p>
      </article>
    `;
  }).join("");
}

function bindFilters() {
  byId("searchInput").addEventListener("input", (event) => {
    state.filters.search = event.target.value.trim();
    renderModels();
  });

  byId("providerFilter").addEventListener("change", (event) => {
    state.filters.provider = event.target.value;
    renderModels();
  });

  byId("statusFilter").addEventListener("change", (event) => {
    state.filters.status = event.target.value;
    renderModels();
  });
}

function bindHelpToggle() {
  const toggle = byId("helpToggle");
  toggle.addEventListener("change", (event) => {
    state.showTips = event.target.checked;
    document.body.classList.toggle("tips-off", !state.showTips);
  });
}

function bindNavHighlight() {
  const navLinks = [...document.querySelectorAll(".nav-list a")];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  }, { rootMargin: "-35% 0px -55% 0px", threshold: [0.05, 0.2, 0.5] });

  sections.forEach((section) => observer.observe(section));
}

async function init() {
  const [llmData, contentData, teamData] = await Promise.all([
    loadJson(DATA_PATHS.llms, "llms"),
    loadJson(DATA_PATHS.content, "content"),
    loadJson(DATA_PATHS.team, "team")
  ]);

  state.llms = llmData.models;
  state.content = contentData.items;
  state.team = teamData;

  renderMetrics();
  renderActivityList();
  renderQuickGrid();
  renderProviderFilter();
  renderModels();
  renderUpdates();
  renderContentLists();
  renderTeamDirectory();
  bindFilters();
  bindHelpToggle();
  bindNavHighlight();
}

init().catch((error) => {
  document.body.innerHTML = `
    <main class="section-band">
      <h1>Unable to load the Company Hub</h1>
      <p>${error.message}</p>
      <p>Open this through a local web server so the JSON data files can load correctly.</p>
    </main>
  `;
});
