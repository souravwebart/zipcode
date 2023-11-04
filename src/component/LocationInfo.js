import React from 'react';
import { useDispatch } from 'react-redux';
import { clearLocationInfo } from '../store/locationAction';
import Map from './googleMap';



export default function LocationInfo({ location }) {
    console.log("location", location)
    const dispatch = useDispatch();

    const handleClear = () => {
        dispatch(clearLocationInfo());
    };

    return (
        <div>
            <button onClick={handleClear} style={{ margin: "20px 0px", padding: '10px 60px', backgroundColor: '#fff', color: '#000', fontSize: '16px' }}>Clear</button>
            <h2 style={{ color: '#fff', fontSize: '24px', fontWeight: 600 }}>Location Information</h2>

            <p style={{ color: '#fff', fontSize: '20px', fontWeight: 600, lineHeight: '37px' }}>Country: {location.country}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', margin: '20px auto', justifyContent: 'space-between', maxWidth: '1190px' }}>
                {location && location.places && location.places.map((x, idx) => {
                    return (
                        <div key={idx} style={{ margin: "10px auto", padding: "20px", backgroundColor: '#fff', borderRadius: "15px", textAlign: 'center', maxWidth: '300px' }}>
                            <Map latitude={x.latitude} longitude={x.longitude} />
                            <p>State: {x.state}</p>
                            <p>Place Name: {x['place name']}</p>
                        </div>
                    )
                })}
            </div>
            <div>

            </div>

        </div>
    );
};
