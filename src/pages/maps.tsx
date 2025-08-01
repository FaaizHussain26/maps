"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ExternalLink } from "lucide-react";

import RocksImage from "/assets/Rocks_101.png";
import TamarindoImage from "/assets/Tamarindo.jpg";
import McHenryImage from "/assets/McHenry_Canyon_Haven.png";
import DeerHollowImage from "/assets/Deer_Hollow_Hideaway.png";
import VillaNicklausImage from "/assets/Villa_Nicklaus.png";
import CapCanaImage from "/assets/cap_cana_1.png";
import FiveStarBrandTurks from "/assets/5_sta_brand_Turks_Caicos.png";
import FiveStarBrandFred from "/assets/5_star_brand_Fredericksburg_tx.png";
import FiveStarBrandMiches from "/assets/5_star_brand_Miches_DR.jpg";
import MijasLaSierra from "/assets/Mijas_La_Sierra.png";
import DolceGabbana from "/assets/d_and_g.png";
import Rocks103 from "/assets/Rocks_103.png";

// Current Home Locations
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
    coordinates: { lat: 36.5108, lng: -4.8844 },
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
];

// Anticipated Home Locations
const anticipatedDestinations = [
  {
    id: 7,
    name: "5-Star Branded Caribbean Resort",
    location: "Miches, Dominican Republic",
    address: "Miches, Dominican Republic",
    coordinates: { lat: 18.9833, lng: -69.0333 },
    url: "https://www.goforthglobal.com/dream-home/5-star-branded-caribbean-resort",
    type: "anticipated",
    image: FiveStarBrandMiches, // Direct path from public folder
  },
  {
    id: 8,
    name: "5-Star Branded Residence",
    location: "Fredericksburg, TX",
    address: "Fredericksburg, Texas",
    coordinates: { lat: 30.2752, lng: -98.8719 },
    url: "https://www.goforthglobal.com/dream-home/5-star-branded-residence",
    type: "anticipated",
    image: FiveStarBrandFred, // Direct path from public folder
  },
  {
    id: 9,
    name: "Mijas La Sierra",
    location: "Malaga, Spain",
    address: "C. de la Virgen de la Peña, 10, 29650 Mijas, Málaga, Spain",
    coordinates: { lat: 36.5947, lng: -4.6364 },
    url: "https://www.goforthglobal.com/dream-home/mijas-la-sierra",
    type: "anticipated",
    image: MijasLaSierra, // Direct path from public folder
  },
  {
    id: 10,
    name: "5-Star Branded Caribbean Residence",
    location: "Turks & Caicos",
    address: "Grace Bay TKCA 1ZZ, Turks & Caicos Islands",
    coordinates: { lat: 21.7587, lng: -72.2845 },
    url: "https://www.goforthglobal.com/dream-home/5-star-caribbean-resort",
    type: "anticipated",
    image: FiveStarBrandTurks, // Direct path from public folder
  },
  {
    id: 11,
    name: "The Rocks 101",
    location: "Scottsdale, Arizona",
    address: "27440 N Alma School Pkwy, Scottsdale, AZ 85262",
    coordinates: { lat: 33.6044, lng: -111.8988 },
    url: "https://www.goforthglobal.com/dream-home/scottsdale-arizona-the-rocks",
    type: "anticipated",
    image: RocksImage, // Direct path from public folder
  },
  {
    id: 12,
    name: "Dolce & Gabbana Residence",
    location: "Marbella, Spain",
    address: "A-7176, 1, 29602 Marbella, Málaga, Spain",
    coordinates: { lat: 36.5098, lng: -4.8854 },
    url: "https://www.goforthglobal.com/dream-home/marbella-spain-2",
    type: "anticipated",
    image: DolceGabbana, // Direct path from public folder
  },
];

const allDestinations = [...currentDestinations, ...anticipatedDestinations];

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}
export default function DestinationsPage() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [, setMap] = useState<any>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const currentInfoWindowRef = useRef<any>(null);
  const closeInfoWindowTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Load Google Maps script
    const loadGoogleMaps = () => {
      if (window.google) {
        initializeMap();
        return;
      }

      const script = document.createElement("script");
      // In a real React app, you would use process.env.REACT_APP_GOOGLE_MAPS_API_KEY or similar
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyApJ0TAYZM_KsdqTD_wJWnK-asOJGnIn5A&callback=initMap`;
      script.async = true;
      script.defer = true;
      window.initMap = initializeMap;
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      if (!mapRef.current) return;

      const mapInstance = new window.google.maps.Map(mapRef.current, {
        zoom: 2,
        center: { lat: 20, lng: 0 },
        styles: [
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
          },
        ],
      });

      setMap(mapInstance);
      setIsMapLoaded(true);

      // Define a custom SVG path for a pin icon
      const pinPath =
        "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z";

      // Function to close the info window
      const closeInfoWindow = () => {
        if (currentInfoWindowRef.current) {
          currentInfoWindowRef.current.close();
          currentInfoWindowRef.current = null;
        }
        if (closeInfoWindowTimeoutRef.current) {
          clearTimeout(closeInfoWindowTimeoutRef.current);
          closeInfoWindowTimeoutRef.current = null;
        }
      };

      // Add markers
      allDestinations.forEach((destination) => {
        const marker = new window.google.maps.Marker({
          position: destination.coordinates,
          map: mapInstance,
          title: destination.name,
          icon: {
            path: pinPath,
            fillColor: destination.type === "current" ? "#B38C4A" : "#061A2D",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWeight: 1,
            scale: 1.5,
            anchor: new window.google.maps.Point(12, 24),
          },
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: `
    <style>
    /* Hide the default Google Maps InfoWindow close button */
    .gm-ui-hover-effect {
      display: none !important;
    }
  </style>
    <div id="info-window-content-${destination.id}" style="
      width: 280px;
      border-radius: 8px;
      overflow: hidden;
      background-color: white;
      box-shadow: 0 6px 20px rgba(0,0,0,0.2); 
      font-family: 'Inter', sans-serif;
    ">
      ${
        destination.image
          ? `<img src="${destination.image}" alt="${destination.name}" style="
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
          " />`
          : ""
      }
      <div style="padding: 12px;">
        <h3 style="margin: 0; font-size: 20px; font-weight: 700; color: #333;">${
          destination.name
        }</h3>
        <p style="margin: 2px 0 0; color: #555; font-size: 15px;">${
          destination.location
        }</p>
        <p style="margin: 2px 0 12px; color: #777; font-size: 13px;">${
          destination.address
        }</p>
        <button
          id="explore-btn-${destination.id}"
          style="
            background: #061A2D; 
            color: white;
            border: none;
            padding: 10px 18px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 16px; 
            font-weight: 600;
            width: 100%; 
            text-align: center;
            transition: background-color 0.2s ease;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Subtle button shadow */
          "
        >
          ${destination.type === "current" ? "Explore More" : "Learn More"}
        </button>
      </div>
    </div>
    `,
        });

        marker.addListener("mouseover", () => {
          // Clear any pending close timeout
          if (closeInfoWindowTimeoutRef.current) {
            clearTimeout(closeInfoWindowTimeoutRef.current);
            closeInfoWindowTimeoutRef.current = null;
          }

          // Close any currently open info window if it's different
          if (
            currentInfoWindowRef.current &&
            currentInfoWindowRef.current !== infoWindow
          ) {
            currentInfoWindowRef.current.close();
          }

          infoWindow.open(mapInstance, marker);
          currentInfoWindowRef.current = infoWindow; // Store the newly opened info window

          // Attach event listeners to the info window content itself after it's opened
          // Use a small timeout to ensure the DOM element is fully rendered
          setTimeout(() => {
            const infoWindowContent = document.getElementById(
              `info-window-content-${destination.id}`
            );
            if (infoWindowContent) {
              infoWindowContent.onmouseover = () => {
                if (closeInfoWindowTimeoutRef.current) {
                  clearTimeout(closeInfoWindowTimeoutRef.current);
                  closeInfoWindowTimeoutRef.current = null;
                }
              };
              infoWindowContent.onmouseout = () => {
                closeInfoWindowTimeoutRef.current = setTimeout(
                  closeInfoWindow,
                  100
                ); // Close after a short delay
              };
            }

            const button = document.getElementById(
              `explore-btn-${destination.id}`
            );
            if (button) {
              button.onclick = () => {
                if (destination.url) {
                  window.open(destination.url, "_blank");
                } else if (destination.type === "anticipated") {
                  window.location.href = "/dream-homes";
                }
              };
            }
          }, 0);
        });

        marker.addListener("mouseout", () => {
          closeInfoWindowTimeoutRef.current = setTimeout(closeInfoWindow, 100); // Delay closing
        });
      });
    };

    loadGoogleMaps();
    // Cleanup function for useEffect
    return () => {
      if (closeInfoWindowTimeoutRef.current) {
        clearTimeout(closeInfoWindowTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Map Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Legend */}
          <div className="p-6 border-b bg-gray-50">
            <div className="flex flex-wrap gap-6 justify-center">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#B38C4A] border-2 border-white shadow"></div>
                <span className="text-sm font-medium text-gray-700">
                  Current Home Locations
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#061A2D] border-2 border-white shadow"></div>
                <span className="text-sm font-medium text-gray-700">
                  Anticipated Home Locations
                </span>
              </div>
            </div>
          </div>

          {/* Map Container */}
          <div className="relative">
            <div ref={mapRef} className="w-full h-[600px] bg-gray-100" />
            {!isMapLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading map...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
