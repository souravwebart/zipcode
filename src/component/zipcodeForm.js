import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LocationInfo from './LocationInfo';
import { fetchLocationFailure, fetchLocationRequest, fetchLocationSuccess } from '../store/locationAction';

export default function PostalCodeForm() {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);

    const [postalCode, setPostalCode] = useState('');
    const location = useSelector((state) => state.location);
    const error = useSelector((state) => state.error);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (loading) {
            return;
        }

        dispatch(fetchLocationRequest());

        try {
            const response = await fetch(`https://api.zippopotam.us/in/${postalCode}`);
            if (!response.ok) {
                throw new Error('Invalid postal code');
            }
            const data = await response.json();
            dispatch(fetchLocationSuccess(data));
        } catch (err) {
            dispatch(fetchLocationFailure(err.message));
        }
    };

    return (
        <div style={{ maxWidth: '1190px', margin: 'auto' }}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Postal Code"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    style={{ padding: '20px 30px', backgroundColor: "#fff", margin: '20px auto', fontSize: '22px' }}
                />
                <button type="submit" style={{ padding: '20px 60px', backgroundColor: '#fff', color: '#000', fontSize: '22px' }}>Search</button>
            </form>
            {loading && <div><p style={{ color: '#fff', fontSize: '21px' }}>Loading..</p>.</div>}
            {error && <div><p style={{ color: 'red', fontSize: '21px' }}>Error: {error}</p></div>}
            {location && (
                <LocationInfo location={location} />
            )}
        </div>
    );
};
