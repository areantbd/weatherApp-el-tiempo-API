import React, { useEffect, useRef } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY || "";
 

function Mapa({ center, zoom, markers }) {
  const ref = useRef();

  console.log("API", GOOGLE_API_KEY);

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  }, [center, zoom, markers]);

  return <div ref={ref} id="map" style={{ height: "20rem", width: "50%" }} />;
}

function Map({ center, zoom }) {
  return (
    <>
      <Wrapper apiKey={GOOGLE_API_KEY}>
        <Mapa center={center} zoom={zoom} />
      </Wrapper>
    </>
  );
}

export default Map;
