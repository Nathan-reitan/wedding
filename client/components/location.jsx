import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Location extends React.Component {
  constructor(props) {
    super(props);
    this.center = { lat: 33.379910, lng: -117.163809 };
    this.zoom = 10;
  }

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD0epOxsv3I7QHLEXWsCSGtFII6FoAHzgE' }}
          defaultCenter={this.center}
          defaultZoom={this.zoom}
        >
          <AnyReactComponent
            lat={33.379910}
            lng={-117.163809}
            text="Los Willows"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

// export default function initMap() {
//   const map = new google.maps.Map(
//     document.getElementById('map'), {
//       ,
//       center: {  }
//     });
// var infoWindow = new google.maps.InfoWindow();
// infoWindowArr.push(infoWindow);
// var contentString = {
//   location: '530 Stewart Canyon Road, Fallbrook, Ca 92028',
//   name: 'Los Willows',
//   latlong: '33.379910-117.163809'
// };
// contentStringArr.push(contentString);
// addMarker(map, json._embedded.events[i]);
// var yourMarker = new google.maps.Marker({ position: yourLocation, map: map });

//   return (
//     <div></div>
//   );

// }
