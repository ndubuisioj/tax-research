const sources = [
  {
    id: "irc-274",
    kind: "IRC",
    category: "PRIMARY AUTHORITY · DEDUCTIONS",
    title: "26 U.S.C. § 274 — Disallowance of certain entertainment, etc., expenses",
    description: "Statutory limits and substantiation rules for meals, entertainment, and certain other expenses.",
    url: "https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section274&num=0&edition=prelim",
    tags: "business meals meal deduction substantiation entertainment section 274 50 percent 274(k) 274(n)"
  },
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
    id: "irc-162",
    kind: "IRC",
    category: "PRIMARY AUTHORITY · TRADE OR BUSINESS",
    title: "26 U.S.C. § 162 — Trade or business expenses",
    description: "The general deduction rule for ordinary and necessary expenses paid or incurred in carrying on a trade or business.",
    url: "https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section162&num=0&edition=prelim",
    tags: "business meals expense deduction ordinary necessary business trade section 162"
  },
  {
    id: "ecfr-1-274",
    kind: "REG",
    category: "TREASURY REGULATION · SUBSTANTIATION",
    title: "26 C.F.R. § 1.274-5 — Substantiation requirements",
    description: "Regulatory requirements for substantiating certain expenses, including amount, time, place, and business purpose.",
    url: "https://www.ecfr.gov/current/title-26/section-1.274-5",
    tags: "business meals meal deduction substantiation records regulation 1.274-5 time place amount purpose"
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
    id: "irc-280a",
    kind: "IRC",
    category: "PRIMARY AUTHORITY · HOME OFFICE",
    title: "26 U.S.C. § 280A — Business use of home",
    description: "Statutory limits and exceptions for deductions related to the use of a dwelling unit.",
    url: "https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section280A&num=0&edition=prelim",
    tags: "home office business use home deduction section 280A dwelling unit",
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
    id: "irc-6654",
    kind: "IRC",
    category: "PRIMARY AUTHORITY · ESTIMATED TAX",
    title: "26 U.S.C. § 6654 — Failure by individual to pay estimated income tax",
    description: "Statutory addition to tax for underpayment of estimated tax by individuals, with exceptions and rules.",
    url: "https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section6654&num=0&edition=prelim",
    tags: "estimated tax quarterly payments underpayment penalty section 6654",
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
  },
  {
    id: "irc-2",
    kind: "IRC",
    category: "PRIMARY AUTHORITY · FILING STATUS",
    title: "26 U.S.C. § 2 — Definition of surviving spouse, head of household, and other individuals",
    description: "Statutory definitions for filing statuses, including head of household and surviving spouse.",
    url: "https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section2&num=0&edition=prelim",
    tags: "filing status head of household surviving spouse section 2",
    topics: "filing status"
  }
];

const scenarios = [
  {
    topic: "BUSINESS EXPENSES",
    title: "A working lunch",
    facts: "A sole proprietor meets a prospective client at a restaurant. They discuss a potential project, the proprietor pays for both meals, and keeps the receipt with the date, attendees, and business purpose. The meal is not lavish or extravagant.",
    question: "Which authorities would you check to analyze whether and how much of the expense may be deductible?",
    answer: "Start with IRC § 162 for the general trade-or-business deduction rule. Then check IRC § 274(k) for the business-meal conditions and § 274(n) for the applicable percentage limitation and exceptions. Publication 463 explains the IRS's recordkeeping guidance; the facts and any statutory exceptions still need to be verified for the relevant tax year.",
    sourceIds: ["irc-162", "irc-274", "pub-463"]
  },
  {
    topic: "BUSINESS USE OF HOME",
    title: "The spare room",
    facts: "A self-employed consultant works from a spare room used regularly for client calls and project work. Family members also use the room to store personal items.",
    question: "What authority would you consult before deciding whether the space qualifies for a home-office deduction?",
    answer: "Begin with IRC § 280A and its limits and exceptions for business use of a dwelling. Consult Publication 587 for IRS guidance on qualifying-use tests and expense methods. The personal storage fact may matter to the exclusive-use analysis, so gather more detail before reaching a conclusion.",
    sourceIds: ["irc-280a", "pub-587"]
  },
  {
    topic: "ESTIMATED TAX",
    title: "A strong first quarter",
    facts: "A freelancer expects net self-employment income this year and has no wage withholding. Income arrives unevenly, with most client payments expected late in the year.",
    question: "Which sources would you review to analyze estimated tax obligations and timing?",
    answer: "Review IRC § 6654 for the individual estimated-tax addition to tax, exceptions, and payment rules. Then use the IRS estimated-tax guidance to identify the applicable payment schedule and safe-harbor calculations for the tax year. Uneven income may make the annualized-income method relevant; verify the current forms and instructions.",
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
    link.textContent = source.kind === "IRC" ? source.title.match(/§\s*\d+/)?.[0] || source.title : source.title;
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