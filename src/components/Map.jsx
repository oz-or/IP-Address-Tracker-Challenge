import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import marker from "../../public/images/icon-location.svg";
import L from "leaflet";

function Map({ input, setInput, setData }) {
  return (
    <div className="absolute z-0 w-full top-80">
      <MapContainer
        center={{ lat: 51.505, lng: -0.09 }}
        zoom={13}
        scrollWheelZoom={false}
        className="h-[635px]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker input={input} setInput={setInput} setData={setData} />
      </MapContainer>
    </div>
  );
}

function LocationMarker() {
  const [position, setPosition] = useState(null);

  const map = useMap();

  const myIcon = new L.Icon({
    iconUrl: marker,
    iconSize: [32, 45],
  });

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      const radius = e.accuracy;
      const circle = L.circle(e.latlng, radius);
      circle.addTo(map);
    });
  }, [map]);

  return position === null ? null : (
    <Marker position={position} icon={myIcon}>
      <Popup>You are here.</Popup>
    </Marker>
  );
}

export default Map;
