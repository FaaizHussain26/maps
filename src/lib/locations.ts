import FiveStarBrandTurks from "/assets/5_sta_brand_Turks_Caicos.png";
import FiveStarBrandMiches from "/assets/5_star_brand_Miches_DR.jpg";
import DeerHollowImage from "/assets/Deer_Hollow_Hideaway.png";
import McHenryImage from "/assets/McHenry_Canyon_Haven.png";
import MijasLaSierra from "/assets/Mijas_La_Sierra.png";
import RocksImage from "/assets/Rocks_101.png";
import Rocks103 from "/assets/Rocks_103.png";
import TamarindoImage from "/assets/Tamarindo.jpg";
import VillaNicklausImage from "/assets/Villa_Nicklaus.png";
import CapCanaImage from "/assets/cap_cana_1.png";
import DolceGabbana from "/assets/d_and_g.png";
import Whistler from "/assets/Whistler.png";
import Napa from "/assets/Napa.png";
import ThirtyA from "/assets/30A.png";
import Colorado from "/assets/Colorado.png";
import Huwai from "/assets/Huwai.jpeg";

const currentDestinations = [
  {
    id: 1,
    name: "The Rocks 103",
    location: "Scottsdale, Arizona",
    address: "27440 N Alma School Pkwy, Scottsdale, AZ 85262",
    coordinates: { lat: 33.6054, lng: -111.8998 },
    url: "https://www.luxusvp.com/rentals/the-rocks-103-north-scottsdale-arizona",
    type: "current",
    image: Rocks103, // Direct path from public folder
  },
  {
    id: 2,
    name: "Tamarindo",
    location: "Costa Rica",
    address: "C. Vascos, Provincia de Guanacaste, Tamarindo, 50309, Costa Rica",
    coordinates: { lat: 10.2994, lng: -85.8394 },
    url: "https://tamaluxury.com/rentals/brisas-del-mar/",
    type: "current",
    image: TamarindoImage, // Direct path from public folder
  },
  {
    id: 3,
    name: "McHenry Canyon Haven",
    location: "Deer Valley, Utah",
    address: "1702 Glencoe Mountain Wy, Park City, UT 84060",
    coordinates: { lat: 40.6374, lng: -111.4783 },
    url: "https://www.luxusvp.com/rentals/mchenry-canyon-haven",
    type: "current",
    image: McHenryImage, // Direct path from public folder
  },
  {
    id: 4,
    name: "Deer Hollow Hideaway",
    location: "Deer Valley, Utah",
    address: "1702 Glencoe Mountain Wy, Park City, UT 84060",
    coordinates: { lat: 40.6274, lng: -111.4683 },
    url: "https://www.luxusvp.com/rentals/deer-hollow-hideaway-deer-valley-utah",
    type: "current",
    image: DeerHollowImage, // Direct path from public folder
  },
  {
    id: 5,
    name: "Villa Nicklaus",
    location: "Marbella, Spain",
    address: "Nueva Andalucia, Marbella Spain",
    coordinates: { lat: 36.5128, lng: -4.8844 },
    url: "https://vacationmarbella.com/vacation-rentals/the-nicklaus-villa/",
    type: "current",
    image: VillaNicklausImage, // Direct path from public folder
  },
  {
    id: 6,
    name: "5-Star Branded Residence",
    location: "Cap Cana, Dominican Republic",
    address: "Punta Cana 23000, Dominican Republic",
    coordinates: { lat: 18.5601, lng: -68.3725 },
    url: "https://www.marriott.com/en-us/hotels/pujxr-the-st-regis-cap-cana-resort/overview/",
    type: "current",
    image: CapCanaImage, // Direct path from public folder
  },
  {
    id: 7,
    name: "5-Star Branded Caribbean Residence (3 Bedroom)",
    location: "Turks & Caicos",
    address: "Grace Bay TKCA 1ZZ, Turks & Caicos Islands",
    coordinates: { lat: 21.7587, lng: -72.2845 },
    url: "https://www.goforthglobal.com/dream-home/5-star-caribbean-resort",
    type: "current",
    image: FiveStarBrandTurks,
  },
  {
    id: 8,
    name: "Dolce & Gabbana Residence",
    location: "Marbella, Spain",
    address: "A-7176, 1, 29602 Marbella, Málaga, Spain",
    coordinates: { lat: 36.5098, lng: -4.8854 },
    url: "https://www.goforthglobal.com/dream-home/marbella-spain-2",
    type: "current",
    image: DolceGabbana, // Direct path from public folder
  },
  {
    id: 9,
    name: "5-Star Branded Caribbean Resort",
    location: "Miches, Dominican Republic",
    address: "Miches, Dominican Republic",
    coordinates: { lat: 18.9833, lng: -69.0333 },
    url: "https://www.goforthglobal.com/dream-home/5-star-branded-caribbean-resort",
    type: "current",
    image: FiveStarBrandMiches, // Direct path from public folder
  },
];

// Anticipated Home Locations
const anticipatedDestinations = [
  {
    id: 11,
    name: "5-Star Branded Residence",
    location: "Costa Rica",
    address: "H8RM+4PM, Provincia de Guanacaste, Playa Buena, Costa Rica",
    coordinates: { lat: 10.35, lng: -85.83 },
    url: "https://www.goforthglobal.com/interest-sign-up",
    type: "anticipated",
    image: null,
  },
  {
    id: 23,
    name: "5-Star Branded Residence",
    location: "Belize",
    address: "Cayo Rosario Island, San Pedro, Belize",
    coordinates: { lat: 17.93, lng: -87.94 },
    url: "https://www.goforthglobal.com/interest-sign-up",
    type: "anticipated",
    image: null,
  },
  {
    id: 24,
    name: "Palm Coast Oceanfront Luxury",
    location: "Palm Coast, Florida",
    address: "21 Ocean Dune Circle, Palm Coast, FL",
    coordinates: { lat: 29.58, lng: -81.18 },
    url: "https://www.goforthglobal.com/dream-home/palm-coast",
    type: "anticipated",
    image: null,
  },
  {
    id: 25,
    name: "Oceanfront Residence",
    location: "San Juan, Puerto Rico",
    address: "San Juan Puerto Rico",
    coordinates: { lat: 18.47, lng: -66.10 },
    url: "https://www.goforthglobal.com/interest-sign-up",
    type: "anticipated",
    image: null,
  },
  {
    id: 12,
    name: "Mijas La Sierra",
    location: "Malaga, Spain",
    address: "C. de la Virgen de la Peña, 10, 29650 Mijas, Málaga, Spain",
    coordinates: { lat: 36.5947, lng: -4.6364 },
    url: "https://www.goforthglobal.com/dream-home/mijas-la-sierra",
    type: "anticipated",
    image: MijasLaSierra, // Direct path from public folder
  },
  {
    id: 13,
    name: "The Rocks 101",
    location: "Scottsdale, Arizona",
    address: "27440 N Alma School Pkwy, Scottsdale, AZ 85262",
    coordinates: { lat: 33.6044, lng: -111.8988 },
    url: "https://www.goforthglobal.com/dream-home/scottsdale-arizona-the-rocks",
    type: "anticipated",
    image: RocksImage, // Direct path from public folder
  },
  {
    id: 14,
    name: "5-Star Branded Caribbean Resort (2 BEDROOM)",
    location: "Turks & Caicos",
    address: "Grace Bay TKCA 1ZZ, Turks & Caicos Islands",
    coordinates: { lat: 21.7587, lng: -72.2845 },
    url: "https://www.goforthglobal.com/dream-home/2-bedroom-caribbean-residence",
    type: "anticipated",
    image: FiveStarBrandTurks, // kept as null for newly added destination
  },
  {
    id: 15,
    name: "Beaver Creek Townhome",
    location: "Beaver Creek, Colorado",
    address: "38460 US-6, Avon, CO 81620",
    coordinates: { lat: 39.6308, lng: -106.5217 },
    url: "https://www.goforthglobal.com/dream-home/beaver-creek-co",
    type: "anticipated",
    image: Colorado, // kept as null for newly added destination
  },
  {
    id: 16,
    name: "Koloa Kai Condo",
    location: "Waikoloa, Hawaii",
    address: "69-1000 KOLEA KAI CIRCLE, #1C, WAIKOLOA, HI 96738",
    coordinates: { lat: 19.9244, lng: -155.8869 },
    url: "https://www.goforthglobal.com/interest-sign-up",
    type: "anticipated",
    image: Huwai, // kept as null for newly added destination
  },
  {
    id: 18,
    name: "Napa California",
    location: "Napa, California",
    address: "Downtown Dock, 700 Main St, Napa, CA 94559",
    coordinates: { lat: 38.2975, lng: -122.2869 },
    url: "https://www.goforthglobal.com/interest-sign-up",
    type: "anticipated",
    image: Napa, // kept as null for newly added destination
  },
  {
    id: 19,
    name: "30A Florida",
    location: "Panama City Beach, Florida",
    address: "124 Hope Town Ln, Panama City Beach, FL 32413",
    coordinates: { lat: 30.1588, lng: -85.8051 },
    url: "https://www.goforthglobal.com/interest-sign-up",
    type: "anticipated",
    image: ThirtyA, // kept as null for newly added destination
  },
  {
    id: 20,
    name: "Whistler British Columbia",
    location: "Whistler, BC, Canada",
    address: "4545 Blackcomb Wy, Whistler, BC V0N 1B4, Canada",
    coordinates: { lat: 50.1163, lng: -122.9574 },
    url: "https://www.goforthglobal.com/interest-sign-up",
    type: "anticipated",
    image: Whistler, // kept as null for newly added destination
  },
];

export { currentDestinations, anticipatedDestinations };
