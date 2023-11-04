
import GoogleMapReact from 'google-map-react';


const Map = ({ latitude, longitude }) => {

    console.log("latitude", latitude)

    let latitude1 = latitude;
    let ilatitude = parseFloat(latitude1);
    console.log(ilatitude)

    let longitude1 = longitude;
    let ilongitude = parseFloat(longitude1);
    console.log(ilongitude)

    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    const defaultProps = {
        center: {
            lat: ilatitude,
            lng: ilongitude
        },
        zoom: 11
    };

    return (
        <div style={{ width: '300px', height: "200px" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={ilatitude}
                    lng={ilongitude}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
};

export default Map;