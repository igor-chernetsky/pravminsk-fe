import React, { useEffect, useRef, useState } from 'react';
import styles from './MapPage.module.scss';
import HeroSection from '../components/HeroSection';
import { useLanguage } from '../contexts/LanguageContext';
import { useCategories } from '../contexts/CategoryContext';
import { churches } from '../data/churches';
import Subcategories from '../components/Subcategories';

declare global {
  interface Window {
    google: any;
  }
}

const MapPage: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { language } = useLanguage();
  const { getChildrenBySlug } = useCategories();
  const langPrefix = language === 'BY' ? '/by' : '';

  // Get subcategories for "eparhiya" category
  const eparhiyaSubcategories = getChildrenBySlug('eparhiya');

  // Function to add church markers to the map
  const addChurchMarkers = (map: any) => {
    const google = window.google;

    if (!google || !google.maps || !google.maps.Marker) {
      console.error('Google Maps API not fully loaded!');
      return;
    }

    // Using imported churches data from churches.ts

    // Create markers for each church
    churches.forEach((church, index) => {
      try {
        const position = new google.maps.LatLng(church.position.lat, church.position.lng);

        const marker = new google.maps.Marker({
          position: position,
          title: church.title,
          map: map,
          icon: "/img/icons/church.png",
          draggable: false,
          animation: google.maps.Animation.DROP,
        });

        const infowindow = new google.maps.InfoWindow({
          content: church.content,
          maxWidth: 200,
        });

        google.maps.event.addListener(marker, "click", function () {
          infowindow.open(map, marker);
        });
      } catch (markerError) {
        console.error('Failed to create marker for church:', church.title, markerError);
      }
    });
  };

  useEffect(() => {
    // Prevent duplicate execution
    if (mapInstanceRef.current) {
      return;
    }

    let script: HTMLScriptElement | null = null;
    let timeoutId: NodeJS.Timeout;

    const initializeMap = () => {
      if (!mapRef.current || !window.google || !window.google.maps || mapInstanceRef.current) {
        return;
      }

      try {
        const mapOptions = {
          center: { lat: 53.916, lng: 27.550 },
          zoom: 11,
          mapTypeControl: true,
          streetViewControl: true,
          fullscreenControl: true,
          zoomControl: true,
          styles: [
            { featureType: "administrative", stylers: [{ visibility: "on" }] },
            { featureType: "poi", stylers: [{ visibility: "simplified" }] },
            { featureType: "road", stylers: [{ visibility: "simplified" }] },
            { featureType: "water", stylers: [{ visibility: "simplified" }] },
            { featureType: "transit", stylers: [{ visibility: "simplified" }] },
            { featureType: "landscape", stylers: [{ visibility: "simplified" }] },
            { featureType: "road.highway", stylers: [{ visibility: "on" }] },
            { featureType: "road.local", stylers: [{ visibility: "on" }] },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [{ visibility: "on" }],
            },
            { featureType: "road.arterial", stylers: [{ visibility: "on" }] },
            {
              featureType: "water",
              stylers: [{ color: "#5f94ff" }, { lightness: 26 }, { gamma: 5.86 }],
            },
            {},
            {
              featureType: "road.highway",
              stylers: [{ weight: 0.6 }, { saturation: -85 }, { lightness: 61 }],
            },
            { featureType: "road" },
            {},
            {
              featureType: "landscape",
              stylers: [{ hue: "#0066ff" }, { saturation: 74 }, { lightness: 100 }],
            },
          ],
        };

        const map = new window.google.maps.Map(mapRef.current, mapOptions);
        mapInstanceRef.current = map;

        // Wait for the map to be fully loaded before adding markers
        window.google.maps.event.addListenerOnce(map, 'idle', () => {
          addChurchMarkers(map);
        });

        // Add KML layer for blue area border
        const kmlLayer = new window.google.maps.KmlLayer({
          url: "http://minsk.church.by//images/page/karta.kmz",
          map: map,
        });



        // Fit map bounds to show all churches
        const bounds = new window.google.maps.LatLngBounds();

        // Add all church coordinates to bounds (using the same coordinates from addChurchMarkers)
        const churchCoordinates = [
          { lat: 53.904682, lng: 27.55168 },
          { lat: 53.923217, lng: 27.516304 },
          { lat: 53.937896, lng: 27.493927 },
          { lat: 53.916016, lng: 27.553674 },
          { lat: 54.108482, lng: 27.46104 },
          { lat: 54.00705, lng: 27.465205 },
          { lat: 54.023941, lng: 27.428661 },
          { lat: 54.072303, lng: 27.697306 },
          { lat: 53.998354, lng: 27.632034 },
          { lat: 53.919076, lng: 27.753199 },
          { lat: 53.950801, lng: 27.803514 },
          { lat: 53.952295, lng: 27.776978 },
          { lat: 53.905658, lng: 27.556055 },
          { lat: 53.902784, lng: 27.564444 },
          { lat: 53.908571, lng: 27.587405 },
          { lat: 53.94052, lng: 27.616601 },
          { lat: 53.951647, lng: 27.704747 },
          { lat: 53.969078, lng: 27.58132 },
          { lat: 54.072773, lng: 27.500476 },
          { lat: 54.18361, lng: 27.50483 },
          { lat: 54.003331, lng: 27.678855 },
          { lat: 54.063183, lng: 27.555723 },
          { lat: 54.003363, lng: 27.572799 },
          { lat: 53.891094, lng: 27.203547 },
          { lat: 53.914022, lng: 27.300388 },
          { lat: 53.920895, lng: 27.388564 },
          { lat: 53.888972, lng: 27.263456 },
          { lat: 53.940196, lng: 27.348181 },
          { lat: 54.069571, lng: 27.217686 },
          { lat: 54.042278, lng: 27.784523 },
          { lat: 53.917879, lng: 27.18929 },
          { lat: 54.001818, lng: 27.265585 },
          { lat: 54.007157, lng: 27.292076 },
          { lat: 53.987654, lng: 27.123456 },
          { lat: 53.876543, lng: 27.234567 },
          { lat: 53.765432, lng: 27.345678 },
          { lat: 53.654321, lng: 27.456789 },
          { lat: 53.543210, lng: 27.567890 }
        ];

        churchCoordinates.forEach(church => {
          bounds.extend(new window.google.maps.LatLng(church.lat, church.lng));
        });



        map.fitBounds(bounds);

        setIsLoading(false);
      } catch (error) {
        console.error('Error initializing map:', error);
        setError('Failed to initialize map');
        setIsLoading(false);
      }
    };

    const loadGoogleMapsScript = () => {
      if (window.google && window.google.maps) {
        // Google Maps API is already loaded
        setTimeout(initializeMap, 100);
        return;
      }

      script = document.createElement('script');
      script.src = 'http://maps.googleapis.com/maps/api/js?key=AIzaSyBznP1syKaF8xPq5Cf1eIf3D5t5ikW20Bg&sensor=false';
      script.async = true;
      script.defer = true;

      script.onload = () => {
        // Wait a bit more for the API to be fully initialized
        timeoutId = setTimeout(() => {
          if (window.google && window.google.maps) {
            initializeMap();
          } else {
            setError('Google Maps API failed to load properly');
            setIsLoading(false);
          }
        }, 500);
      };

      script.onerror = () => {
        setError('Failed to load Google Maps API');
        setIsLoading(false);
      };

      document.head.appendChild(script);
    };

    loadGoogleMapsScript();

    return () => {
      if (script) {
        document.head.removeChild(script);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  if (error) {
    return (
      <div className={styles.container}>
        <HeroSection
          title="Карта храмов"
          date=""
          cover=""
          breadcrumbs={[]}
          currentPageTitle="Карта храмов"
          langPrefix={langPrefix}
          showDate={false}
        />
        <div className={styles.errorMessage}>
          <p>Ошибка: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <HeroSection
        title="Карта храмов"
        date=""
        cover=""
        breadcrumbs={[]}
        currentPageTitle="Карта храмов"
        langPrefix={langPrefix}
        showDate={false}
      />

      {isLoading && (
        <div className={styles.loadingMessage}>
          <p>Загрузка карты...</p>
        </div>
      )}

      <div className={styles.mapPage}>
        <div className={styles.mapContainer}>
          <div ref={mapRef} className={styles.map} />
        </div>
        <div className={styles.sidebarWrapper}>
          <Subcategories
            subcategories={eparhiyaSubcategories}
            categoryName="Епархия"
          />
        </div>
      </div>
    </div>
  );
};

export default MapPage;
