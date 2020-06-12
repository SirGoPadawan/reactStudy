import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div className="marker-map">{text}</div>;


export default class SimpleMap extends React.Component {
 static defaultProps = {
    center: {
      lat: 48.461916,
      lng: 135.086769
    },
    zoom: 15
  }
  render() {
    return (
      <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDsXmjyMzJJTlBbK7TpDjZ2bQjeyzsARrw"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={48.461916}
            lng={135.086769}
            text="ФОГСТРИМ"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
