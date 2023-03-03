import { useState } from "react";

const useTrackLocation = () => {
  const [locationErrorMsg, setLocationErrorMsg] = useState("");
  const [latLng, setLatLng] = useState("");

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setLatLng(`${latitude},${longitude}`);
    setLocationErrorMsg("");
  };
  const error = () => {
    setLocationErrorMsg("Unable to retrieve your location");
  };

  const handleTrackLocation = () => {
    if (!navigator.geolocation) {
      setLocationErrorMsg("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  return { latLng, handleTrackLocation, locationErrorMsg };
};

export default useTrackLocation;
