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
      <div style={{ height: '80vh', width: '100%', padding: '30px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD0epOxsv3I7QHLEXWsCSGtFII6FoAHzgE' }}
          defaultCenter={this.center}
          defaultZoom={this.zoom}
          yesIWantToUseGoogleMapApiInternals
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
