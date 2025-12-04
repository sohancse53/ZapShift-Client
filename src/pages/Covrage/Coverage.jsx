import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
const Coverage = () => {

  const position = [23.684994, 90.356331];  
  const serviceCenters = useLoaderData();
  const mapRef = useRef('');
  console.log(serviceCenters);

    const handleSearch = (e)=>{
        e.preventDefault();
        const location = e.target.location.value;
        const district = serviceCenters.find(c => c.district.toLowerCase().includes(location.toLowerCase()));
        if(district){
            const coordinate = [district.latitude,district.longitude];
            console.log(coordinate,district);
            mapRef.current.flyTo(coordinate,14);
        }
    }

  return (
    <div className="p-8 ">
      <h2 className=" text-5xl">We are available in 64 districts</h2>
      <div className="mt-10">
       {/* search */}
       <form  onSubmit={handleSearch}>
         <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input name="location" type="search" className="grow" placeholder="Search" />
        </label>
       </form>
      </div>

      {/* map */}
      <div className="mt-10 border w-full h-[800px]">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-full"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {serviceCenters.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                {<strong>{center.district}</strong>} <br /> service Area :{" "}
                {center.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
