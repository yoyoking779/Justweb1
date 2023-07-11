import React, { useEffect, useRef } from 'react';


const ImageGoogle = () => {
    const mapRef = useRef(null);
  
    useEffect(() => {
      const mapOptions = {
        center: { lat: 18.285087920618647, lng: 99.51255562061804 },
        zoom: 10,
      };
  
      const map = new window.google.maps.Map(mapRef.current, mapOptions);
  
      const marker = new window.google.maps.Marker({
        position: { lat: 18.285087920618647, lng: 99.51255562061804 },
        map: map,
      });
    }, []);

  return (
    <div>
      <img src="/images/อำเภอเมืองลำปาง.jpg" alt="Your Image" />
      <div ref={mapRef} id="map-container" style={{ width: '50%', height: '400px' }}></div>
    </div>
  );
};


export default ImageGoogle;