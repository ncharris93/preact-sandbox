import { h } from "preact";
import { useState, useCallback } from "preact/hooks";
import { Geolocation, Position } from "@capacitor/geolocation";
import { useLocation } from "preact-iso";

export function GeolocationPage() {
  const { route } = useLocation();
  const [loc, setLoc] = useState<Position>(null);

  const getCurrentPosition = useCallback(async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    setLoc(coordinates);
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          route("/");
        }}
      >
        Home
      </button>
      <h1>Geolocation</h1>
      <p>Your location is:</p>
      <p>Latitude: {loc?.coords.latitude}</p>
      <p>Longitude: {loc?.coords.longitude}</p>

      <button onClick={getCurrentPosition}>Get Current Location</button>
    </div>
  );
}
