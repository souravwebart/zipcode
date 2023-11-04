const initialState = {
    location: null,
    loading: false,
    error: null,
};

const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_LOCATION_REQUEST':
            return { ...state, loading: true, error: null };
        case 'FETCH_LOCATION_SUCCESS':
            return {
                ...state,
                location: action.payload,
                loading: false,
            };
        case 'FETCH_LOCATION_FAILURE':
            return { ...state, error: action.payload, loading: false, location: null };
        case 'CLEAR_LOCATION_INFO':
            return { ...initialState };
        default:
            return state;
    }
};

export default locationReducer;
