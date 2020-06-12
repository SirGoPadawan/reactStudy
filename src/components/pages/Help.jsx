import React from 'react';
import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class SimpleMap extends React.Component {
  getDefaultProps() {
    center: {
      lat: 59.95;
      lng: 30.33
    }
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: AIzaSyDsXmjyMzJJTlBbK7TpDjZ2bQjeyzsARrw}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="ФОГСТРИМ"
          />
        </GoogleMapReact>
      </div>
    );
  }
}