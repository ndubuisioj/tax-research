const sources = [
  {
    id: "pub-463",
    kind: "IRS",
    category: "IRS PUBLICATION · BUSINESS EXPENSES",
    title: "Publication 463 — Travel, Gift, and Car Expenses",
    description: "IRS guidance on business meals, travel expenses, recordkeeping, and substantiation.",
    url: "https://www.irs.gov/publications/p463",
    tags: "business meals meal deduction substantiation travel gifts records publication 463"
  },
  {
    id: "pub-587",
    kind: "IRS",
    category: "IRS PUBLICATION · HOME OFFICE",
    title: "Publication 587 — Business Use of Your Home",
    description: "IRS guidance on the business use of a home, qualifying tests, and expense methods.",
    url: "https://www.irs.gov/publications/p587",
    tags: "home office business use home deduction exclusive regular use publication 587",
    topics: "home office home use"
  },
  {
    id: "irs-estimated",
    kind: "IRS",
    category: "IRS TOPIC · PAYMENTS",
    title: "Estimated taxes",
    description: "IRS overview of who may need to pay estimated tax and the general payment schedule.",
    url: "https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes",
    tags: "estimated tax quarterly payments underpayment self employed individuals",
    topics: "estimated tax quarterly payments"
  },
  {
    id: "pub-501",
    kind: "IRS",
    category: "IRS PUBLICATION · FILING STATUS",
    title: "Publication 501 — Dependents, Standard Deduction, and Filing Information",
    description: "IRS guidance covering filing status, dependents, and the standard deduction.",
    url: "https://www.irs.gov/publications/p501",
    tags: "filing status dependent standard deduction qualifying person publication 501",
    topics: "filing status dependents standard deduction"
  }
];

const scenarios = [
  {
    topic: "BUSINESS EXPENSES",
    title: "A working lunch",
    facts: "A sole proprietor meets a prospective client at a restaurant. They discuss a potential project, the proprietor pays for both meals, and keeps the receipt with the date, attendees, and business purpose. The meal is not lavish or extravagant.",
    question: "Which authorities would you check to analyze whether and how much of the expense may be deductible?",
    answer: "Review Publication 463 for IRS guidance on business meals and substantiation. Verify the applicable Code provisions, exceptions, and tax-year rules before reaching a conclusion.",
    sourceIds: ["pub-463"]
  },
  {
    topic: "BUSINESS USE OF HOME",
    title: "The spare room",
    facts: "A self-employed consultant works from a spare room used regularly for client calls and project work. Family members also use the room to store personal items.",
    question: "What authority would you consult before deciding whether the space qualifies for a home-office deduction?",
    answer: "Consult Publication 587 for IRS guidance on qualifying-use tests and expense methods, then verify the applicable Code provisions and exceptions. The personal storage fact may matter to the exclusive-use analysis, so gather more detail before reaching a conclusion.",
    sourceIds: ["pub-587"]
  },
  {
    topic: "ESTIMATED TAX",
    title: "A strong first quarter",
    facts: "A freelancer expects net self-employment income this year and has no wage withholding. Income arrives unevenly, with most client payments expected late in the year.",
    question: "Which sources would you review to analyze estimated tax obligations and timing?",
    answer: "Use the IRS estimated-tax guidance to review payment timing and safe-harbor calculations, then verify the applicable Code provisions, exceptions, and tax-year rules. Uneven income may make the annualized-income method relevant; check the current forms and instructions.",
    sourceIds: ["irc-6654", "irs-estimated"]
  }
];

const sourceList = document.querySelector("#source-list");
const savedList = document.querySelector("#saved-list");
const queryInput = document.querySelector("#research-query");
const savedIds = new Set(JSON.parse(localStorage.getItem("fieldwork-saved-sources") || "[]"));
let activeScenario = 0;

function normalized(value) {
  return value.toLowerCase().trim().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ");
}

function matchesSource(source, query) {
  if (!query) return true;
  const terms = normalized(query).split(" ").filter(Boolean);
  const haystack = normalized(`${source.title} ${source.category} ${source.description} ${source.tags} ${source.topics || ""}`);
  return terms.every((term) => haystack.includes(term));
}

function renderSources(query = queryInput.value) {
  const matches = sources.filter((source) => matchesSource(source, query));
  sourceList.replaceChildren();
  document.querySelector("#results-heading").textContent = query ? query.trim().replace(/\b\w/g, (letter) => letter.toUpperCase()) : "All sources";
  document.querySelector("#result-count").textContent = `${matches.length} ${matches.length === 1 ? "SOURCE" : "SOURCES"}`;
  document.querySelector("#empty-state").hidden = matches.length > 0;

  for (const source of matches) {
    const item = document.createElement("article");
    item.className = "source-item";
    const type = document.createElement("span");
    type.className = "source-type";
    type.textContent = source.kind;
    const body = document.createElement("div");
    const category = document.createElement("p");
    category.className = "source-category";
    category.textContent = source.category;
    const link = document.createElement("a");
    link.className = "source-title";
    link.href = source.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = source.title;
    const description = document.createElement("p");
    description.className = "source-description";
    description.textContent = source.description;
    body.append(category, link, description);
    const save = document.createElement("button");
    save.type = "button";
    save.className = `save-button${savedIds.has(source.id) ? " is-saved" : ""}`;
    save.textContent = savedIds.has(source.id) ? "★" : "☆";
    save.setAttribute("aria-label", `${savedIds.has(source.id) ? "Remove" : "Save"} ${source.title}`);
    save.setAttribute("aria-pressed", String(savedIds.has(source.id)));
    save.addEventListener("click", () => toggleSaved(source.id));
    item.append(type, body, save);
    sourceList.append(item);
  }
}

function renderSaved() {
  savedList.replaceChildren();
  document.querySelector("#saved-count").textContent = String(savedIds.size);
  if (savedIds.size === 0) {
    const empty = document.createElement("p");
    empty.className = "saved-empty";
    empty.textContent = "References you save will be collected here.";
    savedList.append(empty);
    return;
  }
  for (const source of sources.filter((item) => savedIds.has(item.id))) {
    const row = document.createElement("div");
    row.className = "saved-item";
    const link = document.createElement("a");
    link.href = source.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = source.title;
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "saved-remove";
    remove.setAttribute("aria-label", `Remove ${source.title} from saved sources`);
    remove.textContent = "×";
    remove.addEventListener("click", () => toggleSaved(source.id));
    row.append(link, remove);
    savedList.append(row);
  }
}

function toggleSaved(id) {
  if (savedIds.has(id)) savedIds.delete(id);
  else savedIds.add(id);
  localStorage.setItem("fieldwork-saved-sources", JSON.stringify([...savedIds]));
  renderSources();
  renderSaved();
}

function switchView(name) {
  const isResearch = name === "research";
  document.querySelector("#research-view").hidden = !isResearch;
  document.querySelector("#research-view").classList.toggle("is-visible", isResearch);
  document.querySelector("#practice-view").hidden = isResearch;
  document.querySelector("#practice-view").classList.toggle("is-visible", !isResearch);
  document.querySelectorAll("[data-view]").forEach((button) => {
    const active = button.dataset.view === name && button.classList.contains("nav-link");
    button.classList.toggle("is-active", active);
    if (button.classList.contains("nav-link")) {
      if (active) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    }
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderScenario() {
  const scenario = scenarios[activeScenario];
  document.querySelector("#scenario-number").textContent = `SCENARIO ${String(activeScenario + 1).padStart(2, "0")} / ${String(scenarios.length).padStart(2, "0")}`;
  document.querySelector("#scenario-topic").textContent = scenario.topic;
  document.querySelector("#scenario-title").textContent = scenario.title;
  document.querySelector("#scenario-facts").textContent = scenario.facts;
  document.querySelector("#scenario-question").textContent = scenario.question;
  document.querySelector("#scenario-answer").textContent = scenario.answer;
  const links = document.querySelector("#scenario-links");
  links.replaceChildren();
  for (const source of scenario.sourceIds.map((id) => sources.find((item) => item.id === id))) {
    const link = document.createElement("a");
    link.href = source.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = source.title;
    links.append(link);
  }
  document.querySelector("#answer-panel").hidden = true;
  document.querySelector("#reveal-answer").hidden = false;
  document.querySelector("#next-scenario").hidden = true;
}

document.querySelector("#search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  renderSources();
});

document.querySelectorAll(".topic-chip").forEach((button) => {
  button.addEventListener("click", () => {
    queryInput.value = button.dataset.query;
    renderSources();
  });
});

document.querySelectorAll("[data-view]").forEach((button) => {
  button.addEventListener("click", () => switchView(button.dataset.view));
});

document.querySelector("#reveal-answer").addEventListener("click", () => {
  document.querySelector("#answer-panel").hidden = false;
  document.querySelector("#reveal-answer").hidden = true;
  document.querySelector("#next-scenario").hidden = false;
});

document.querySelector("#next-scenario").addEventListener("click", () => {
  activeScenario = (activeScenario + 1) % scenarios.length;
  renderScenario();
});

renderSources();
renderSaved();
renderScenario();