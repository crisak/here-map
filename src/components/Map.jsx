import React from 'react';
import H from "@here/maps-api-for-javascript";

const YOUR_API_KEY = "HERE-6eb562b3-07de-4ff6-8aac-71f7f7a95c4d"
// here.user.id = HERE-6eb562b3-07de-4ff6-8aac-71f7f7a95c4d
// here.client.id = LBtO6MPdBl1H94Eh2PK6
// here.access.key.id = AeHkCk-bsb8oVrJYunSHxg
// here.access.key.secret = vnEN8HPjFFhhqmVv7H8x1h38QDAV9TEjeasVJeVy1XF2o9F4eL00oOzjNtAOxH-G0IK6o0P42kVKa8LcFTZGsw
// here.token.endpoint.url = https://account.api.here.com/oauth2/token

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    // the reference to the container
    this.ref = React.createRef();
    // reference to the map
    this.map = null;
  }

  componentDidMount() {
    if (!this.map) {
      // instantiate a platform, default layers and a map as usual
      const platform = new H.service.Platform({
        apikey: YOUR_API_KEY
      });
      const layers = platform.createDefaultLayers();
      const map = new H.Map(
        this.ref.current,
        layers.vector.normal.map,
        {
          pixelRatio: window.devicePixelRatio,
          center: {lat: 0, lng: 0},
          zoom: 2,
        },
      );
      this.map = map;
    }
  }

  render() {
    return (
      <div
        style={{ width: '300px', height:'300px' }}
        ref={this.ref}
      />
    )
  }
}
