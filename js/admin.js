/**
 * Expérience Sahara Marrakech - Admin & Management Portal
 * Controller for Ayman (+212 649 252 133 / aymanelmelouly@gmail.com)
 */

let adminLang = localStorage.getItem("morocco_tours_lang") || "fr";
let reservationsFilter = "all";
let reservationsSearch = "";
let servicesCategoryFilter = "all";
let servicesSearch = "";

document.addEventListener("DOMContentLoaded", () => {
  initAdminLanguage();
  refreshDashboard();
  setupAdminEventListeners();
});

function initAdminLanguage() {
  const langSelect = document.getElementById("admin-lang-select");
  if (langSelect) {
    langSelect.value = adminLang;
    langSelect.addEventListener("change", (e) => {
      adminLang = e.target.value;
      localStorage.setItem("morocco_tours_lang", adminLang);
      document.documentElement.setAttribute("dir", adminLang === "ar" ? "rtl" : "ltr");
      document.documentElement.setAttribute("lang", adminLang);
      refreshDashboard();
    });
  }
}

function refreshDashboard() {
  SERVICES_DATA = getStoredServices();
  RESERVATIONS_DATA = getStoredReservations();

  renderKPIs();
  renderReservationsTable();
  renderServicesTable();
  populateServiceSelectOptions();
}

/* --------------------------------------------------------------------------
   1. KPI Metrics Overview
   -------------------------------------------------------------------------- */

function renderKPIs() {
  const totalBookingsEl = document.getElementById("kpi-total-bookings");
  const revenueEl = document.getElementById("kpi-revenue");
  const pendingEl = document.getElementById("kpi-pending");
  const activeServicesEl = document.getElementById("kpi-active-tours");

  const totalBookings = RESERVATIONS_DATA.length;
  const totalRevenue = RESERVATIONS_DATA
    .filter((r) => r.status === "confirmed" || r.status === "completed")
    .reduce((sum, r) => sum + (Number(r.totalPriceEUR) || 0), 0);

  const pendingCount = RESERVATIONS_DATA.filter((r) => r.status === "pending").length;
  const activeServicesCount = SERVICES_DATA.filter((s) => s.status !== "draft").length;

  if (totalBookingsEl) totalBookingsEl.textContent = totalBookings;
  if (revenueEl) revenueEl.textContent = `${totalRevenue.toLocaleString()} € (~${Math.round(totalRevenue * 10.8).toLocaleString()} DH)`;
  if (pendingEl) pendingEl.textContent = pendingCount;
  if (activeServicesEl) activeServicesEl.textContent = activeServicesCount;
}

/* --------------------------------------------------------------------------
   2. Reservation Management Table
   -------------------------------------------------------------------------- */

function renderReservationsTable() {
  const tbody = document.getElementById("reservations-tbody");
  if (!tbody) return;

  let list = [...RESERVATIONS_DATA];

  if (reservationsFilter !== "all") {
    list = list.filter((r) => r.status === reservationsFilter);
  }

  if (reservationsSearch) {
    const q = reservationsSearch.toLowerCase();
    list = list.filter((r) =>
      r.clientName.toLowerCase().includes(q) ||
      r.tourName.toLowerCase().includes(q) ||
      (r.phone && r.phone.toLowerCase().includes(q)) ||
      r.id.toLowerCase().includes(q)
    );
  }

  if (list.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align: center; padding: 2rem; color: #64748b;">
          <i class="fa fa-folder-open" style="font-size: 2rem; margin-bottom: 0.5rem; display: block; color: var(--gold);"></i>
          Aucune réservation trouvée.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = list.map((res) => {
    const cleanPhone = res.phone ? res.phone.replace(/[^0-9]/g, "") : "";
    const waMsg = encodeURIComponent(
      `Bonjour ${res.clientName}! 👋\nIci Ayman de *Expérience Sahara Marrakech* concernant votre réservation:\n✨ *Prestation:* ${res.tourName}\n📅 *Date:* ${res.travelDate}\n👥 *Passagers:* ${res.travelers}\n💵 *Tarif indicatif:* ${res.totalPriceEUR} € (~${Math.round(res.totalPriceEUR * 10.8)} DH)\n\nJe suis à votre disposition sur WhatsApp pour convenir de l'heure et du lieu de prise en charge !`
    );
    const waUrl = cleanPhone ? `https://wa.me/${cleanPhone}?text=${waMsg}` : "#";

    return `
      <tr>
        <td><strong>${res.id}</strong></td>
        <td>
          <div style="font-weight: 700; color: var(--primary);">${res.clientName}</div>
          <div style="font-size: 0.8rem; color: #64748b;">${res.email || ""}</div>
          <div style="font-size: 0.78rem; color: #25d366; font-weight: 600;">${res.phone || ""}</div>
        </td>
        <td>
          <div style="font-weight: 600;">${res.tourName}</div>
          <div style="font-size: 0.78rem; color: #64748b;">${res.hotelStyle || "Véhicule Privé"}</div>
        </td>
        <td>${res.travelDate}</td>
        <td><span style="font-weight: 700;">${res.travelers}</span> pers.</td>
        <td style="font-weight: 800; color: var(--primary);">${res.totalPriceEUR} €</td>
        <td>
          <select onchange="updateReservationStatus('${res.id}', this.value)" style="padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.82rem; font-weight: 600;">
            <option value="pending" ${res.status === 'pending' ? 'selected' : ''}>⏳ En attente</option>
            <option value="confirmed" ${res.status === 'confirmed' ? 'selected' : ''}>✅ Confirmée</option>
            <option value="completed" ${res.status === 'completed' ? 'selected' : ''}>🎉 Terminée</option>
            <option value="cancelled" ${res.status === 'cancelled' ? 'selected' : ''}>❌ Annulée</option>
          </select>
        </td>
        <td>
          <div class="action-btn-group">
            ${cleanPhone ? `<a href="${waUrl}" target="_blank" class="btn-action wa" title="Contacter le client sur WhatsApp"><i class="fab fa-whatsapp"></i></a>` : ""}
            <button class="btn-action edit" onclick="viewReservationDetails('${res.id}')" title="Détails"><i class="fa fa-eye"></i></button>
            <button class="btn-action delete" onclick="deleteReservation('${res.id}')" title="Supprimer"><i class="fa fa-trash"></i></button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

function updateReservationStatus(resId, newStatus) {
  const index = RESERVATIONS_DATA.findIndex((r) => r.id === resId);
  if (index !== -1) {
    RESERVATIONS_DATA[index].status = newStatus;
    saveStoredReservations(RESERVATIONS_DATA);
    refreshDashboard();
    showToast(`Statut mis à jour : ${newStatus}`);
  }
}

function deleteReservation(resId) {
  if (confirm(`Supprimer la réservation ${resId} ?`)) {
    RESERVATIONS_DATA = RESERVATIONS_DATA.filter((r) => r.id !== resId);
    saveStoredReservations(RESERVATIONS_DATA);
    refreshDashboard();
    showToast("Réservation supprimée.");
  }
}

function viewReservationDetails(resId) {
  const res = RESERVATIONS_DATA.find((r) => r.id === resId);
  if (!res) return;

  alert(
    `📋 Détails de la Réservation [${res.id}]\n` +
    `----------------------------------------\n` +
    `Client: ${res.clientName}\n` +
    `Téléphone: ${res.phone}\n` +
    `Email: ${res.email}\n` +
    `Prestation: ${res.tourName}\n` +
    `Date de voyage: ${res.travelDate}\n` +
    `Passagers: ${res.travelers}\n` +
    `Tarif: ${res.totalPriceEUR} € (~${Math.round(res.totalPriceEUR * 10.8)} DH)\n` +
    `Statut: ${res.status.toUpperCase()}\n` +
    `Notes: ${res.notes || 'Aucune'}`
  );
}

/* --------------------------------------------------------------------------
   3. Services & Grille Tarifaire Management
   -------------------------------------------------------------------------- */

function renderServicesTable() {
  const tbody = document.getElementById("tours-tbody");
  if (!tbody) return;

  let list = [...SERVICES_DATA];

  if (servicesCategoryFilter !== "all") {
    list = list.filter((s) => s.section === servicesCategoryFilter || s.category === servicesCategoryFilter);
  }

  if (servicesSearch) {
    const q = servicesSearch.toLowerCase();
    list = list.filter((s) => {
      const title = (s.title.fr || s.title.en || "").toLowerCase();
      const sec = (s.section || "").toLowerCase();
      return title.includes(q) || sec.includes(q);
    });
  }

  tbody.innerHTML = list.map((item) => {
    const title = item.title.fr || item.title.en;
    const duration = item.durationText ? (item.durationText.fr || item.durationText.en) : "";
    const isDraft = item.status === "draft";
    const sectionLabels = {
      excursions: "1. Excursion Privée",
      circuits: "2. Circuit Désert",
      intercity: "3. Inter-Villes",
      airport: "4. Navette Aéroport"
    };

    return `
      <tr>
        <td>
          <img src="${item.image}" alt="" style="width: 50px; height: 50px; border-radius: 8px; object-fit: cover;" />
        </td>
        <td>
          <div style="font-weight: 700; color: var(--primary);">${title}</div>
          <div style="font-size: 0.78rem; color: #64748b;">Capacité: ${item.capacity || "Jusqu'à 7 pers."} | ID: ${item.id}</div>
        </td>
        <td><span class="badge badge-completed">${sectionLabels[item.section] || item.section}</span></td>
        <td>${duration}</td>
        <td>
          <div style="display: flex; align-items: center; gap: 0.3rem;">
            <input type="number" value="${item.priceEUR}" style="width: 75px; padding: 0.25rem; font-weight: 700; border: 1px solid var(--border-color); border-radius: 4px;" onchange="quickUpdateServicePrice('${item.id}', this.value)" /> €
            <span style="font-size: 0.8rem; color: #64748b;">(~${Math.round(item.priceEUR * 10.8)} DH)</span>
          </div>
        </td>
        <td>
          <button class="badge ${isDraft ? 'badge-cancelled' : 'badge-confirmed'}" style="border: none; cursor: pointer;" onclick="toggleServiceStatus('${item.id}')">
            ${isDraft ? 'Inactif' : 'Actif'}
          </button>
        </td>
        <td>
          <div class="action-btn-group">
            <button class="btn-action delete" onclick="deleteService('${item.id}')" title="Supprimer"><i class="fa fa-trash"></i></button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

function quickUpdateServicePrice(serviceId, newPriceEUR) {
  const index = SERVICES_DATA.findIndex((s) => s.id === serviceId);
  if (index !== -1) {
    const val = Number(newPriceEUR);
    SERVICES_DATA[index].priceEUR = val;
    SERVICES_DATA[index].priceMAD = Math.round(val * 10.8);
    saveStoredServices(SERVICES_DATA);
    showToast("Tarif mis à jour en temps réel.");
  }
}

function toggleServiceStatus(serviceId) {
  const index = SERVICES_DATA.findIndex((s) => s.id === serviceId);
  if (index !== -1) {
    SERVICES_DATA[index].status = SERVICES_DATA[index].status === "draft" ? "active" : "draft";
    saveStoredServices(SERVICES_DATA);
    renderServicesTable();
    renderKPIs();
    showToast("Statut modifié.");
  }
}

function deleteService(serviceId) {
  if (confirm("Supprimer cette prestation ?")) {
    SERVICES_DATA = SERVICES_DATA.filter((s) => s.id !== serviceId);
    saveStoredServices(SERVICES_DATA);
    refreshDashboard();
    showToast("Prestation supprimée.");
  }
}

/* --------------------------------------------------------------------------
   4. Modals & Forms
   -------------------------------------------------------------------------- */

function populateServiceSelectOptions() {
  const select = document.getElementById("manual-booking-tour");
  if (!select) return;

  select.innerHTML = SERVICES_DATA.map((s) => {
    const title = s.title.fr || s.title.en;
    return `<option value="${s.id}" data-price="${s.priceEUR}">${title} (${s.priceEUR} € / ${Math.round(s.priceEUR * 10.8)} DH)</option>`;
  }).join("");
}

function handleManualBookingSubmit(e) {
  e.preventDefault();
  const form = e.target;

  const select = form.querySelector("#manual-booking-tour");
  const selectedOption = select.options[select.selectedIndex];
  const serviceId = selectedOption.value;
  const serviceName = selectedOption.text;
  const unitPrice = Number(selectedOption.getAttribute("data-price")) || 100;

  const clientName = form.querySelector("#manual-client-name").value;
  const email = form.querySelector("#manual-client-email").value;
  const phone = form.querySelector("#manual-client-phone").value;
  const travelDate = form.querySelector("#manual-travel-date").value;
  const travelers = Number(form.querySelector("#manual-travelers").value) || 1;
  const notes = form.querySelector("#manual-notes").value;

  const newRes = {
    id: `RES-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`,
    clientName,
    email,
    phone,
    tourId: serviceId,
    tourName: serviceName,
    travelDate,
    travelers,
    hotelStyle: "Véhicule Privé 7 Places",
    totalPriceEUR: unitPrice,
    status: "confirmed",
    createdAt: new Date().toISOString().split("T")[0],
    notes
  };

  RESERVATIONS_DATA.unshift(newRes);
  saveStoredReservations(RESERVATIONS_DATA);
  refreshDashboard();
  closeAdminModal("modal-manual-booking");
  form.reset();
  showToast("Réservation enregistrée avec succès !");
}

function handleAddServiceSubmit(e) {
  e.preventDefault();
  const form = e.target;

  const section = form.querySelector("#service-section").value;
  const titleFr = form.querySelector("#service-title-fr").value;
  const duration = form.querySelector("#service-duration").value || "1 Jour";
  const priceEUR = Number(form.querySelector("#service-price").value) || 100;
  const image = form.querySelector("#service-image").value || "assets/photo4.jpg";
  const overview = form.querySelector("#service-overview").value;

  const newService = {
    id: `service-${Date.now()}`,
    section,
    category: section,
    title: { fr: titleFr, en: titleFr, es: titleFr, ar: titleFr },
    departure: "marrakech",
    destination: "maroc",
    durationText: { fr: duration, en: duration, es: duration, ar: duration },
    capacity: "Véhicule privé (1 à 7 pers.)",
    priceEUR,
    priceMAD: Math.round(priceEUR * 10.8),
    rating: 5.0,
    reviewsCount: 1,
    status: "active",
    image,
    overview: { fr: overview, en: overview, es: overview, ar: overview },
    included: [
      { fr: "Véhicule privé climatisé et chauffeur dédié", en: "Private air-conditioned vehicle and driver" },
      { fr: "Carburant et péages inclus", en: "Fuel and tolls included" }
    ],
    excluded: [
      { fr: "Dépenses personnelles", en: "Personal expenses" }
    ]
  };

  SERVICES_DATA.unshift(newService);
  saveStoredServices(SERVICES_DATA);
  refreshDashboard();
  closeAdminModal("modal-add-tour");
  form.reset();
  showToast("Nouvelle prestation ajoutée au catalogue !");
}

function openAdminModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add("active");
}

function closeAdminModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove("active");
}

function exportReservationsCSV() {
  const headers = ["ID", "Client", "Email", "Telephone", "Prestation", "Date", "Passagers", "Prix EUR", "Prix DH", "Statut", "Date Creation"];
  const rows = RESERVATIONS_DATA.map((r) => [
    r.id,
    `"${r.clientName}"`,
    r.email,
    r.phone,
    `"${r.tourName}"`,
    r.travelDate,
    r.travelers,
    r.totalPriceEUR,
    Math.round(r.totalPriceEUR * 10.8),
    r.status,
    r.createdAt
  ]);

  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `reservations_experience_sahara_${new Date().toISOString().split("T")[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast("Fichier CSV exporté !");
}

function setupAdminEventListeners() {
  document.querySelectorAll(".res-filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".res-filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      reservationsFilter = btn.getAttribute("data-status");
      renderReservationsTable();
    });
  });

  const resSearch = document.getElementById("res-search-input");
  if (resSearch) {
    resSearch.addEventListener("input", (e) => {
      reservationsSearch = e.target.value;
      renderReservationsTable();
    });
  }

  const serviceSearch = document.getElementById("tour-search-input");
  if (serviceSearch) {
    serviceSearch.addEventListener("input", (e) => {
      servicesSearch = e.target.value;
      renderServicesTable();
    });
  }

  const manualBookingForm = document.getElementById("manual-booking-form");
  if (manualBookingForm) {
    manualBookingForm.addEventListener("submit", handleManualBookingSubmit);
  }

  const addServiceForm = document.getElementById("add-tour-form");
  if (addServiceForm) {
    addServiceForm.addEventListener("submit", handleAddServiceSubmit);
  }
}
