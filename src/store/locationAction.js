export const fetchLocationRequest = () => ({
    type: 'FETCH_LOCATION_REQUEST',
});

export const fetchLocationSuccess = (location) => ({
    type: 'FETCH_LOCATION_SUCCESS',
    payload: location,
});

export const fetchLocationFailure = (error) => ({
    type: 'FETCH_LOCATION_FAILURE',
    payload: error,
});

export const clearLocationInfo = () => ({
    type: 'CLEAR_LOCATION_INFO',
});
