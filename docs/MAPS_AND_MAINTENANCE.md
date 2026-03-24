# Maps app: adding destinations and maintenance

This project is a **React + TypeScript + Vite** single-page app that renders an interactive **Google Map** of property destinations. The root component loads `src/pages/maps.tsx` (see `src/App.tsx`).

---

## Where the data lives

All destinations shown on the map are defined in **`src/pages/maps.tsx`**:

- **`currentDestinations`** — properties treated as *current* (gold markers on the map).
- **`anticipatedDestinations`** — *anticipated* properties (dark blue markers).

The page merges them into `allDestinations` and draws one marker per entry.

> **Note:** `src/lib/locations.ts` is a separate copy of similar data and is **not** imported by the app today. Edits there will not change the map until that file is wired in or removed to avoid confusion.

---

## How to add a new map pin (destination)

### 1. Add the image asset

1. Place the image under **`public/assets/`** (for example `public/assets/My_Property.png`).
2. Prefer web-friendly formats: **PNG**, **JPG**, or **WebP**.
3. Use a filename **without spaces** when possible, or URL-encode paths consistently. If the filename has spaces (e.g. `San Diego.png`), the import path must match exactly.

Vite serves `public/` at the site root, so the URL used in code is **`/assets/<filename>`**.

### 2. Import the image at the top of `maps.tsx`

Follow the existing pattern:

```ts
import MyPropertyImage from "/assets/My_Property.png";
```

### 3. Append a new object to the correct array

Add to **`currentDestinations`** or **`anticipatedDestinations`** with this shape:

| Field | Purpose |
|--------|--------|
| `id` | **Unique** number used for DOM ids (`info-window-content-${id}`, `explore-btn-${id}`). Duplicate ids break info windows and buttons. |
| `name` | Title in the popup. |
| `location` | Short region line (e.g. city, country). |
| `address` | Full address string. |
| `coordinates` | `{ lat: number, lng: number }` — WGS84 decimal degrees. |
| `url` | Link opened when the user clicks **Explore More** / **Learn More** (opened in a new tab when set). |
| `type` | `"current"` or `"anticipated"` — must match the list you added to; controls marker color and button label. |
| `image` | The imported image variable, or omit / use a falsy value to show no image in the popup. |

**Marker colors (set in code from `type`):**

- `"current"` → `#B38C4A` (gold).
- `"anticipated"` → `#061A2D` (dark blue).

### 4. Verify locally

```bash
npm run dev
```

Open the app, hover markers to open info windows, and confirm the new pin, image, text, and link behave as expected.

### 5. Production build

```bash
npm run build
npm run preview
```

---

## Moving or updating a destination

- **From anticipated to current (or the reverse):** remove the object from one array and add it to the other, and set `type` to `"current"` or `"anticipated"` accordingly. Adjust `url` if the marketing link changes.
- **Coordinates:** update `lat` / `lng` when the address is corrected. Use a reliable geocoder or maps product so pins match the real location.
- **Replacing an image:** add the new file under `public/assets/`, update the import, and point `image` to the new import.

---

## Google Maps API key

The Maps JavaScript API is loaded in **`src/pages/maps.tsx`** with a `script` tag that includes `key=...`.

**Maintenance recommendation:**

- Store the key in an environment variable (e.g. `VITE_GOOGLE_MAPS_API_KEY`) and reference it in the script URL as ``import.meta.env.VITE_GOOGLE_MAPS_API_KEY``.
- Restrict the key in [Google Cloud Console](https://console.cloud.google.com/) (HTTP referrers for web, or appropriate restrictions for your deployment).
- Never commit unrestricted keys to public repositories.

---

## Commands useful for day-to-day maintenance

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local development with HMR. |
| `npm run build` | Typecheck (`tsc -b`) and production bundle (`vite build`). |
| `npm run preview` | Serve the production build locally. |
| `npm run lint` | Run ESLint on the project. |

---

## Stack summary

- **UI:** React 19, Tailwind CSS 4 (`@tailwindcss/vite`).
- **Bundler:** Vite 6 with `@vitejs/plugin-react-swc`.
- **Map:** Google Maps JavaScript API (loaded dynamically in `maps.tsx`).

---

## Operational checklist before releases

1. Run **`npm run build`** and fix any TypeScript or build errors.
2. Run **`npm run lint`** and address new issues if your team enforces lint on CI.
3. Spot-check the map: markers, popups, images, and external links.
4. Confirm Google Maps billing/API quotas are acceptable for expected traffic.
5. If you moved the API key to env vars, verify production env is set on the host.

---

## Troubleshooting

| Symptom | What to check |
|--------|----------------|
| New pin missing | Object added to the correct array? `allDestinations` includes both arrays. |
| Wrong popup or button | **Duplicate `id`** — each destination must have a unique `id`. |
| Image broken | File path under `public/assets/`, import path matches, and filename casing matches on case-sensitive deploys. |
| Map blank / “For development purposes only” | API key invalid, billing, or domain not allowed for the key. |
| Button does nothing | `url` empty? For anticipated entries without `url`, the code may send users to `/dream-homes` (see click handler in `maps.tsx`). Ensure that route exists if you rely on it. |

---

## Optional improvement: single source of truth

To avoid duplicating lists between `maps.tsx` and `locations.ts`, you can export `currentDestinations` and `anticipatedDestinations` from one module (e.g. `src/lib/locations.ts`) and **import** them in `maps.tsx`, keeping only map-specific logic (Google Maps init, markers, info windows) in the page file.
