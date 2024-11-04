"use client";

import React, { useEffect, useState } from 'react';
import styles from './page.module.css';

declare global {
  interface Window {
    initMap: () => void;
  }
  var google: any;
}

interface Mechanic {
  name: string;
  position: { lat: number; lng: number };
  address: string;
}

const MapComponent: React.FC = () => {
  const [mechanics, setMechanics] = useState<Mechanic[]>([]);
  const [map, setMap] = useState<any>(null);

  function promptLocationPreference(
    message: string,
    callback: (result: boolean) => void
  ) {
    const pref = "geolocation_preference";
    const savedPreference = localStorage.getItem(pref);

    if (savedPreference) {
      if (savedPreference === "always") {
        return callback(true);
      } else if (savedPreference === "never") {
        return callback(false);
      }
    }

    const confirmShare = window.confirm(`${message}\n\nClique em OK para compartilhar sua localização.`);
    if (confirmShare) {
      localStorage.setItem(pref, "always");
      callback(true);
    } else {
      localStorage.setItem(pref, "never");
      callback(false);
    }
  }

  const searchNearbyMechanics = (map: any, location: { lat: number; lng: number }) => {
    const service = new google.maps.places.PlacesService(map);
    const request = {
      location,
      radius: 5000,
      keyword: 'car repair'
    };

    service.nearbySearch(request, (results: any, status: any) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        const foundMechanics = results.map((place: any) => ({
          name: place.name,
          position: { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() },
          address: place.vicinity,
        }));
        
        setMechanics(foundMechanics);

        foundMechanics.forEach((mechanic: Mechanic) => {
          new google.maps.Marker({
            map,
            position: mechanic.position,
            title: mechanic.name,
          });
        });
      } else {
        console.log("Nenhuma oficina encontrada nas proximidades.");
      }
    });
  };

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      if (!document.getElementById('google-maps')) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC6Y_xcO2SV8WBhmudWAj927Yq1nZOvVgI&callback=initMap&libraries=places`;
        script.id = 'google-maps';
        script.async = true;
        document.head.appendChild(script);
      } else {
        window.initMap();
      }
    };

    window.initMap = () => {
      const mapElement = document.getElementById('map') as HTMLElement;

      if (mapElement) {
        const newMap = new google.maps.Map(mapElement, {
          center: { lat: 40.1215, lng: -100.4504 },
          zoom: 12,
          mapId: 'DEMO_MAP_ID',
        });
        setMap(newMap);

        promptLocationPreference("Deseja compartilhar sua localização?", (isAllowed) => {
          if (isAllowed) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const userLocation = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                };
                newMap.setCenter(userLocation);

                new google.maps.Marker({
                  map: newMap,
                  position: userLocation,
                  title: 'Minha localização',
                  icon: {
                    url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                  }
                });

                searchNearbyMechanics(newMap, userLocation);
              },
              (error) => {
                console.error("Erro ao obter localização do usuário:", error);
                alert("Não foi possível acessar a localização. Verifique as permissões do navegador.");
              },
              { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
            );
          } else {
            console.log("Localização não compartilhada.");
          }
        });
      }
    };

    loadGoogleMapsScript();
  }, []);

  const handleMechanicClick = (mechanic: Mechanic) => {
    if (map) {
      map.setCenter(mechanic.position);
      map.setZoom(15);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h2>Oficinas Próximas</h2>
        <ul className={styles.list}>
          {mechanics.map((mechanic, index) => (
            <li
              key={index}
              className={styles.listItem}
              onClick={() => handleMechanicClick(mechanic)}
            >
              <strong>{mechanic.name}</strong>
              <br />
              {mechanic.address}
            </li>
          ))}
        </ul>
      </div>
      <div id="map" className={styles.map}></div>
    </div>
  );
};

export default MapComponent;
