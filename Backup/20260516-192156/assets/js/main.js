const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });
}

const currentPage = document.body.dataset.page;
const navLinks = document.querySelectorAll("[data-nav-link]");

navLinks.forEach((link) => {
  if (link.dataset.navLink === currentPage) {
    link.setAttribute("aria-current", "page");
  }
});

const publicationData = window.PUBLICATIONS_DATA || [];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderPublicationItem(item) {
  const journalMeta = [item.journal, item.year].filter(Boolean).join(" · ");
  const doiMarkup = item.doi
    ? `<a class="publication-item__meta-link" href="https://doi.org/${escapeHtml(item.doi)}" target="_blank" rel="noreferrer">DOI</a>`
    : "";
  const pmidMarkup = item.pmid
    ? `<span class="publication-item__meta-link">PMID ${escapeHtml(item.pmid)}</span>`
    : "";
  const extraMeta = [doiMarkup, pmidMarkup].filter(Boolean).join(" <span aria-hidden=\"true\">•</span> ");

  return `
    <article class="publication-item page-card">
      <p class="publication-item__meta">${escapeHtml(journalMeta)}</p>
      <h3><a class="publication-item__title-link" href="${escapeHtml(item.href)}" target="_blank" rel="noreferrer">${escapeHtml(item.title)}</a></h3>
      <p class="type-body">${escapeHtml(item.authors)}</p>
      ${extraMeta ? `<p class="publication-item__submeta">${extraMeta}</p>` : ""}
    </article>
  `;
}

const homePublicationList = document.querySelector("[data-publications-home]");
if (homePublicationList && publicationData.length) {
  homePublicationList.innerHTML = publicationData.slice(0, 3).map(renderPublicationItem).join("");
}

const allPublicationList = document.querySelector("[data-publications-all]");
if (allPublicationList && publicationData.length) {
  allPublicationList.innerHTML = publicationData.map(renderPublicationItem).join("");
}
