import React, { useState, useCallback, useEffect } from 'react'
import { GoogleMap, Marker, useLoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

export type Library = "core" | "maps" | "places" | "geocoding" | "routes" | "marker" | "geometry" | "elevation" | "streetView" | "journeySharing" | "drawing" | "visualization";

const libraries: Library[]= ['places'];

const center = {
  lat: -30.984427,
  lng: -64.098978
};

export interface MarkerProps {
  id: string;
  lat: number;
  long: number;
}

export interface RouteProps {
  id: string;
  origin: {
    lat: number;
    lng: number;
  };
  destination: {
    lat: number;
    lng: number;
  };
}

interface GoogleMapsProps {
	styles: Record<string, string>;
  markers?: MarkerProps[];
  routes?: RouteProps[];
  setSelectedDestination?: (location: { lat: number, lng: number, address: string }) => void;
  selectMode?: boolean;
}

const GoogleMaps: React.FC<GoogleMapsProps> = ({ 
  styles, 
  markers, 
  routes, 
  setSelectedDestination,
}) =>  {
  const [directionsMap, setDirectionsMap] = useState<Record<string, google.maps.DirectionsResult>>({});
  const [routesLoading, setRoutesLoading] = useState<Record<string, boolean>>({});

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.googleMapsApiKey as string,
    libraries,
  });

  useEffect(() => {
    if (routes) {
      const loadingState: Record<string, boolean> = {};
      routes.forEach(route => {
        loadingState[route.id] = true;
      });
      setRoutesLoading(loadingState);
    }
  }, [routes]);

  const directionsServiceCallback = useCallback(
    (routeId: string) => (
      result: google.maps.DirectionsResult | null, 
      status: google.maps.DirectionsStatus
    ) => {
      if (status === 'OK' && result) {
        setDirectionsMap(prev => ({
          ...prev,
          [routeId]: result
        }));
      }
      
      setRoutesLoading(prev => ({
        ...prev,
        [routeId]: false
      }));
    },
    []
  );

  const handleMapClick = useCallback((event: google.maps.MapMouseEvent) => {
    if (setSelectedDestination && event.latLng) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({
        location: { lat, lng }
      })
      .then(response => {
        setSelectedDestination({ 
          lat, 
          lng, 
          address: response.results[0]?.formatted_address || `${lat.toFixed(6)}, ${lng.toFixed(6)}` 
        });
      })
      .catch(() => {
        setSelectedDestination({ 
          lat, 
          lng, 
          address: `${lat.toFixed(6)}, ${lng.toFixed(6)}` 
        });
      });
    }
  }, [setSelectedDestination]);

	if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
		<GoogleMap
			mapContainerStyle={styles}
			zoom={12}
			center={center}
			options={{
				disableDefaultUI: true,
			}}
      onClick={handleMapClick}
		>
      {routes && routes.map(route => (
        routesLoading[route.id] && (
          <DirectionsService
            key={`directions-service-${route.id}`}
            options={{
              origin: route.origin,
              destination: route.destination,
              travelMode: google.maps.TravelMode.DRIVING,
            }}
            callback={directionsServiceCallback(route.id)}
          />
        )
      ))}
      
      {routes && routes.map(route => (
        directionsMap[route.id] && (
          <DirectionsRenderer
            key={`directions-renderer-${route.id}`}
            options={{
              directions: directionsMap[route.id],
              suppressMarkers: true,
              polylineOptions: {
                strokeColor: getRouteColor(routes.indexOf(route)),
                strokeWeight: 5,
              }
            }}
          />
        )
      ))}
      
      {markers && markers.map((marker) => (
        <Marker
          key={marker.id}
          position={{ lat: marker.lat, lng: marker.long }}
        />
      ))}
		</GoogleMap>
	)
}

const getRouteColor = (index: number): string => {
  const colors = [
    '#4285F4', // Google blue
    '#EA4335', // Google red
    '#FBBC05', // Google yellow
    '#34A853', // Google green
    '#8A2BE2', // BlueViolet
    '#FF7F50', // Coral
    '#1E90FF', // DodgerBlue
    '#32CD32', // LimeGreen
  ];
  
  return colors[index % colors.length];
};

export default GoogleMaps;
