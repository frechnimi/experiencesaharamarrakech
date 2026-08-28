/**
 * Main Application Logic
 * Brand: Expérience Sahara Marrakech (Marrakech Sahara Experience)
 * Contact: Ayman (+212 649 252 133 / aymanelmelouly@gmail.com)
 */

let currentLang = localStorage.getItem("morocco_tours_lang") || "fr";
let currentCurrency = localStorage.getItem("morocco_tours_curr") || "EUR";
let searchKeyword = "";
let searchCategory = "";

const WHATSAPP_PHONE = "212649252133";
const COMPANY_EMAIL = "Experiencesaharamarrakech@gmail.com";

document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initCurrency();
  reloadCatalogData();
  renderAllServices();
  setupEventListeners();
});

function reloadCatalogData() {
  SERVICES_DATA = getStoredServices();
  RESERVATIONS_DATA = getStoredReservations();
}

/* --------------------------------------------------------------------------
   1. Language & Currency Management
   -------------------------------------------------------------------------- */

function initLanguage() {
  const langSelect = document.getElementById("lang-select");
  if (langSelect) {
    langSelect.value = currentLang;
  }
  applyTranslations(currentLang);
}

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem("morocco_tours_lang", lang);
  
  const html = document.documentElement;
  if (lang === "ar") {
    html.setAttribute("dir", "rtl");
    html.setAttribute("lang", "ar");
  } else {
    html.setAttribute("dir", "ltr");
    html.setAttribute("lang", lang);
  }

  applyTranslations(lang);
  renderAllServices();
}

function applyTranslations(lang) {
  const dict = TRANSLATIONS[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });
}

function initCurrency() {
  const currSelect = document.getElementById("curr-select");
  if (currSelect) {
    currSelect.value = currentCurrency;
  }
}

function setCurrency(curr) {
  if (!CURRENCY_RATES[curr]) return;
  currentCurrency = curr;
  localStorage.setItem("morocco_tours_curr", curr);
  renderAllServices();
}

function formatPrice(amountEUR) {
  const currInfo = CURRENCY_RATES[currentCurrency] || CURRENCY_RATES.EUR;
  const converted = Math.round(amountEUR * currInfo.rate);
  
  if (currInfo.position === "after") {
    return `${converted} ${currInfo.symbol}`;
  }
  return `${currInfo.symbol}${converted}`;
}

/* --------------------------------------------------------------------------
   2. Rendering Services (4 Sections)
   -------------------------------------------------------------------------- */

function renderAllServices() {
  reloadCatalogData();
  renderExcursionsSection();
  renderCircuitsSection();
  renderIntercitySection();
  renderAirportSection();
}

function filterServicesByQuery(list) {
  if (!searchKeyword && !searchCategory) return list;

  return list.filter((item) => {
    if (searchCategory && item.section !== searchCategory && item.category !== searchCategory) {
      return false;
    }
    if (searchKeyword) {
      const q = searchKeyword.toLowerCase();
      const title = (item.title[currentLang] || item.title.fr || item.title.en || "").toLowerCase();
      const overview = (item.overview[currentLang] || item.overview.fr || item.overview.en || "").toLowerCase();
      const dest = (item.destination || "").toLowerCase();
      return title.includes(q) || overview.includes(q) || dest.includes(q);
    }
    return true;
  });
}

// 1. Excursions Privées
function renderExcursionsSection() {
  const container = document.getElementById("excursions-grid");
  if (!container) return;

  const dict = TRANSLATIONS[currentLang];
  let items = SERVICES_DATA.filter((s) => s.section === "excursions");
  items = filterServicesByQuery(items);

  if (items.length === 0) {
    container.innerHTML = `<div class="empty-msg"><i class="fa fa-info-circle"></i> Aucun résultat dans cette catégorie.</div>`;
    return;
  }

  container.innerHTML = items.map((item) => renderServiceCardHTML(item, dict)).join("");
}

// 2. Circuits Privés
function renderCircuitsSection() {
  const container = document.getElementById("circuits-grid");
  if (!container) return;

  const dict = TRANSLATIONS[currentLang];
  let items = SERVICES_DATA.filter((s) => s.section === "circuits");
  items = filterServicesByQuery(items);

  if (items.length === 0) {
    container.innerHTML = `<div class="empty-msg"><i class="fa fa-info-circle"></i> Aucun résultat dans cette catégorie.</div>`;
    return;
  }

  container.innerHTML = items.map((item) => renderServiceCardHTML(item, dict)).join("");
}

// 3. Transferts Inter-Villes
function renderIntercitySection() {
  const container = document.getElementById("intercity-grid");
  if (!container) return;

  const dict = TRANSLATIONS[currentLang];
  let items = SERVICES_DATA.filter((s) => s.section === "intercity");
  items = filterServicesByQuery(items);

  if (items.length === 0) {
    container.innerHTML = `<div class="empty-msg"><i class="fa fa-info-circle"></i> Aucun résultat dans cette catégorie.</div>`;
    return;
  }

  container.innerHTML = items.map((item) => renderServiceCardHTML(item, dict)).join("");
}

// 4. Transferts Aéroport
function renderAirportSection() {
  const container = document.getElementById("airport-grid");
  if (!container) return;

  const dict = TRANSLATIONS[currentLang];
  let items = SERVICES_DATA.filter((s) => s.section === "airport");
  items = filterServicesByQuery(items);

  if (items.length === 0) {
    container.innerHTML = `<div class="empty-msg"><i class="fa fa-info-circle"></i> Aucun résultat dans cette catégorie.</div>`;
    return;
  }

  container.innerHTML = items.map((item) => renderServiceCardHTML(item, dict)).join("");
}

function renderServiceCardHTML(item, dict) {
  const title = item.title[currentLang] || item.title.fr || item.title.en;
  const duration = item.durationText ? (item.durationText[currentLang] || item.durationText.fr || item.durationText.en) : "";
  const overview = item.overview ? (item.overview[currentLang] || item.overview.fr || item.overview.en) : "";
  const badgeText = item.badge ? (item.badge[currentLang] || item.badge.fr || item.badge.en) : "";
  const formattedPrice = formatPrice(item.priceEUR);

  return `
    <div class="service-card">
      <div class="service-thumb">
        <img src="${item.image}" alt="${title}" loading="lazy" />
        ${badgeText ? `<span class="service-badge">${badgeText}</span>` : ""}
        <span class="capacity-pill"><i class="fa fa-users"></i> ${dict.capacity_badge || "Jusqu'à 7 pers."}</span>
      </div>
      <div class="service-body">
        <div class="service-meta">
          <span><i class="fa fa-clock"></i> ${duration}</span>
          <span><i class="fa fa-car-side"></i> ${dict.private_service || "100% Privé"}</span>
        </div>
        <h3 class="service-title">${title}</h3>
        <p class="service-desc">${overview}</p>
        <div class="service-footer">
          <div class="service-price-wrap">
            <span class="service-price-label">${dict.from_price || "Tarif global véhicule"}</span>
            <div class="service-price-amount">${formattedPrice}</div>
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <button class="btn-action-view" onclick="openServiceModal('${item.id}')">
              ${dict.view_details_btn || "Détails"}
            </button>
            <button class="btn-action-wa" onclick="sendDirectWhatsApp('${item.id}')">
              <i class="fab fa-whatsapp"></i> ${dict.book_wa_btn || "WhatsApp"}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   3. Modals & WhatsApp Booking Actions
   -------------------------------------------------------------------------- */

function openServiceModal(serviceId) {
  const item = SERVICES_DATA.find((s) => s.id === serviceId);
  if (!item) return;

  const dict = TRANSLATIONS[currentLang];
  const modal = document.getElementById("service-modal");
  const modalBody = document.getElementById("service-modal-body");
  if (!modal || !modalBody) return;

  const title = item.title[currentLang] || item.title.fr || item.title.en;
  const duration = item.durationText ? (item.durationText[currentLang] || item.durationText.fr || item.durationText.en) : "";
  const overview = item.overview ? (item.overview[currentLang] || item.overview.fr || item.overview.en) : "";
  const formattedPrice = formatPrice(item.priceEUR);

  const includedHTML = (item.included || []).map((inc) => {
    const text = inc[currentLang] || inc.fr || inc.en;
    return `<li><i class="fa fa-check-circle"></i> ${text}</li>`;
  }).join("");

  const excludedHTML = (item.excluded || []).map((exc) => {
    const text = exc[currentLang] || exc.fr || exc.en;
    return `<li><i class="fa fa-times-circle"></i> ${text}</li>`;
  }).join("");

  modalBody.innerHTML = `
    <div class="modal-hero">
      <img src="${item.image}" alt="${title}" />
      <div class="modal-hero-overlay">
        <h2 class="modal-hero-title">${title}</h2>
        <div class="modal-hero-meta">
          <span><i class="fa fa-clock"></i> ${duration}</span>
          <span><i class="fa fa-users"></i> ${dict.capacity_badge || "Véhicule privé 7 places"}</span>
          <span><i class="fa fa-star" style="color: #fbbf24;"></i> ${item.rating} (${item.reviewsCount} avis)</span>
        </div>
      </div>
    </div>
    <div class="modal-content">
      <p style="font-size: 1.05rem; line-height: 1.7; margin-bottom: 1.5rem; white-space: pre-line;">
        ${overview}
      </p>

      <div class="modal-inc-exc-grid">
        <div>
          <h4 style="font-size: 1.05rem; color: var(--primary); margin-bottom: 0.75rem;">
            <i class="fa fa-check" style="color: #10b981;"></i> ${dict.modal_included_title || "Inclus dans la prestation"}
          </h4>
          <ul class="inc-list">
            ${includedHTML}
          </ul>
        </div>
        <div>
          <h4 style="font-size: 1.05rem; color: var(--primary); margin-bottom: 0.75rem;">
            <i class="fa fa-times" style="color: #ef4444;"></i> ${dict.modal_excluded_title || "Non inclus"}
          </h4>
          <ul class="exc-list">
            ${excludedHTML}
          </ul>
        </div>
      </div>

      <div class="modal-inquiry-box" style="background: #fdfaf3; border: 2px solid var(--gold); border-radius: 12px; padding: 1.5rem;">
        <div>
          <div style="font-size: 0.8rem; color: var(--gold-hover); text-transform: uppercase; font-weight: 700;">
            ${dict.from_price || "Tarif global par véhicule"}
          </div>
          <div style="font-size: 1.9rem; font-weight: 800; color: var(--primary);">
            ${formattedPrice} <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: normal;">(Jusqu'à 7 pers.)</span>
          </div>
          <p style="font-size: 0.85rem; color: #475569; margin-top: 0.3rem;">
            <i class="fa fa-lock" style="color: #10b981;"></i> ${dict.modal_payment_notice || "Zéro paiement en ligne. Confirmation directe sur WhatsApp avec Ayman."}
          </p>
        </div>

        <button class="btn btn-primary" onclick="sendDirectWhatsApp('${item.id}')" style="background: #25d366; border-color: #25d366; box-shadow: 0 4px 15px rgba(37,211,102,0.3); font-size: 1rem; padding: 0.85rem 1.5rem;">
          <i class="fab fa-whatsapp" style="font-size: 1.3rem;"></i> ${dict.modal_send_whatsapp || "Réserver sur WhatsApp (0649252133)"}
        </button>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("service-modal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

function sendDirectWhatsApp(serviceId) {
  const item = SERVICES_DATA.find((s) => s.id === serviceId);
  if (!item) return;

  const title = item.title[currentLang] || item.title.fr || item.title.en;

  // Log in reservations
  const newRes = {
    id: `RES-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`,
    clientName: "Client Web (WhatsApp Direct)",
    email: "En attente",
    phone: "WhatsApp Direct",
    tourId: item.id,
    tourName: title,
    travelDate: "À convenir",
    travelers: 4,
    hotelStyle: "Véhicule Privé (Jusqu'à 7 pers.)",
    totalPriceEUR: item.priceEUR,
    status: "pending",
    createdAt: new Date().toISOString().split("T")[0],
    notes: `Prestation: ${item.section.toUpperCase()}`
  };
  RESERVATIONS_DATA.unshift(newRes);
  saveStoredReservations(RESERVATIONS_DATA);

  const message = `Bonjour Ayman (*Expérience Sahara Marrakech*)! 👋\nJe souhaite réserver la prestation suivante:\n🚗 *Service:* ${title}\n👥 *Capacité:* Véhicule privé (jusqu'à 7 personnes)\n💰 *Tarif indicatif:* ${item.priceEUR} € (${item.priceMAD || item.priceEUR * 10.8} DH)\n\nMerci de me donner vos disponibilités pour finaliser la réservation !`;
  
  const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, "_blank");
}

/* --------------------------------------------------------------------------
   4. Custom Form & Search Handlers
   -------------------------------------------------------------------------- */

function handleCustomQuoteSubmit(e) {
  e.preventDefault();
  const form = e.target;

  const serviceType = form.querySelector("#custom-service-type").value || "Excursion";
  const departure = form.querySelector("#custom-departure").value || "Marrakech";
  const destination = form.querySelector("#custom-destination").value || "";
  const travelDate = form.querySelector("#custom-date").value || "À préciser";
  const passengers = form.querySelector("#custom-passengers").value || "2";
  const name = form.querySelector("#custom-name").value || "Client";
  const phone = form.querySelector("#custom-phone").value || "";
  const notes = form.querySelector("#custom-notes").value || "";

  const newRes = {
    id: `RES-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`,
    clientName: name,
    email: "WhatsApp Lead",
    phone: phone,
    tourId: "custom-transfer",
    tourName: `${serviceType}: ${departure} → ${destination}`,
    travelDate: travelDate,
    travelers: passengers,
    hotelStyle: "Véhicule Privé",
    totalPriceEUR: 100,
    status: "pending",
    createdAt: new Date().toISOString().split("T")[0],
    notes: `Trajet: ${departure} vers ${destination}. Notes: ${notes}`
  };
  RESERVATIONS_DATA.unshift(newRes);
  saveStoredReservations(RESERVATIONS_DATA);

  const message = `🇲🇦 *Demande de Devis - Expérience Sahara Marrakech* 🇲🇦\n` +
    `----------------------------------------\n` +
    `👤 *Nom:* ${name}\n` +
    `📱 *Téléphone:* ${phone}\n` +
    `🚗 *Prestation:* ${serviceType}\n` +
    `📍 *Départ:* ${departure}\n` +
    `🏁 *Destination:* ${destination}\n` +
    `📅 *Date:* ${travelDate}\n` +
    `👥 *Passagers:* ${passengers} personnes\n` +
    `📝 *Remarques:* ${notes}\n` +
    `----------------------------------------\n` +
    `Bonjour Ayman, merci de me confirmer le tarif et la disponibilité !`;

  const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, "_blank");
}

function handleSearchSubmit(e) {
  e.preventDefault();
  const form = e.target;
  searchKeyword = form.querySelector("#search-keywords").value.trim();
  searchCategory = form.querySelector("#search-category").value;

  renderAllServices();

  const sec = document.getElementById("services-container");
  if (sec) {
    sec.scrollIntoView({ behavior: "smooth" });
  }
}

function resetSearch() {
  searchKeyword = "";
  searchCategory = "";
  const form = document.getElementById("search-form");
  if (form) form.reset();
  renderAllServices();
}

function setupEventListeners() {
  const langSelect = document.getElementById("lang-select");
  if (langSelect) {
    langSelect.addEventListener("change", (e) => setLanguage(e.target.value));
  }

  const currSelect = document.getElementById("curr-select");
  if (currSelect) {
    currSelect.addEventListener("change", (e) => setCurrency(e.target.value));
  }

  const searchForm = document.getElementById("search-form");
  if (searchForm) {
    searchForm.addEventListener("submit", handleSearchSubmit);
  }

  const customForm = document.getElementById("custom-quote-form");
  if (customForm) {
    customForm.addEventListener("submit", handleCustomQuoteSubmit);
  }

  const mobileToggle = document.getElementById("mobile-nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => navMenu.classList.remove("active"));
    });
  }

  const serviceModal = document.getElementById("service-modal");
  if (serviceModal) {
    serviceModal.addEventListener("click", (e) => {
      if (e.target === serviceModal) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}
