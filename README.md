# Todo Marruecos Tours - Luxury Morocco Travel Website

A modern, high-performance, and responsive Morocco travel and tour agency web application inspired by **[todomarruecostours.com](https://todomarruecostours.com/)**.

---

## 🌟 Key Features

1. **Multi-Language Engine (4 Languages)**:
   - 🇬🇧 English (`en`)
   - 🇪🇸 Spanish (`es`)
   - 🇫🇷 French (`fr`)
   - 🇲🇦 Arabic (`ar` with full RTL layout support)

2. **Live Dynamic Currency Converter**:
   - Real-time exchange rate switcher: **EUR (€)**, **USD ($)**, **MAD (DH)**, and **GBP (£)**.

3. **Interactive Search & Tour Filters**:
   - Filter by destination keyword (Sahara, Merzouga, Fes, Marrakech, Chefchaouen).
   - Filter by tour category (Desert Circuits, Imperial Cities, Day Trips, Adventure Activities).
   - Filter by duration (1 Day, 2-4 Days, 5-7 Days, 8+ Days).

4. **Rich Tour Details Modal & Itinerary Timeline**:
   - Day-by-day itinerary breakdown.
   - Included & Excluded amenities checklist.
   - High-definition photography.
   - One-click instant WhatsApp booking inquiry with prefilled details.

5. **Interactive Tailor-Made Trip Customizer**:
   - Step-by-step custom trip planning wizard.
   - Checkbox destination selector, group size, accommodation style (Charming vs Luxury 5-Star).
   - Automatically builds an organized message and connects directly to WhatsApp.

6. **Day Trips & Desert Adventure Activities**:
   - Agafay Desert Sunset Dinner & Camel Trek.
   - Sunrise Hot Air Balloon flight in Marrakech.
   - Quad biking and buggy dunes safari.
   - Ouzoud Waterfalls, Ourika Valley, and Essaouira day excursions.

7. **TripAdvisor & Google Reviews Showcase**:
   - 5-Star verified traveler feedback with reviewer profile and countries.

8. **24/7 Floating WhatsApp CTA**:
   - Direct connection with travel experts.

---

## 🚀 How to Run Locally

You can run this project using any local HTTP server:

### Option 1: Using Python
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

### Option 2: Using Node.js / npx
```bash
npx serve .
```

### Option 3: Direct Open
Simply double-click `index.html` in your file explorer.

---

## 📁 Project Structure

```
project1/
├── index.html              # Main HTML structure with all interactive sections
├── css/
│   └── style.css           # Modern CSS variables, typography, layouts, RTL & animations
├── js/
│   ├── tours-data.js       # Complete database of Morocco tours, activities & currencies
│   ├── translations.js     # Multilingual dictionaries (EN, ES, FR, AR)
│   └── app.js              # State management, filters, modals, and WhatsApp builder
└── README.md               # Documentation & setup guide
```

---

## 🛠️ How to Customize

- **Add or edit tours**: Open `js/tours-data.js` and add new tour objects to `TOURS_DATA`.
- **Change WhatsApp phone number**: Open `js/app.js` and update `const WHATSAPP_PHONE = "212623113225";`.
- **Modify translations**: Open `js/translations.js` and update or add new text strings.
