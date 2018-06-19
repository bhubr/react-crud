import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { apiKey } from './apiKey'

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 43.6033385, lng: 1.4525834 }}
  >
  {
    props.markers.map((marker) => <Marker key={marker.id} position={{ lat: marker.lat, lng: marker.lng }} />)
  }
  </GoogleMap>
))


class App extends Component {
  state = {
    markers: [
      { id: 1, lat: 43.6033385, lng: 1.4525834 },
      { id: 2, lat: 43.5736221, lng: 1.3631478 }
    ]
  }
  render() {
    return (
      <div className="App">
        <MyMapComponent
          isMarkerShown
          markers={this.state.markers}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default App;
