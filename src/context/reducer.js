 const appReducer = (state, action) => {
    switch(action.type) {
        case 'DELETE':
            return {
				...state,
                records:state.records.filter((rec)=>rec.id !== action.payload)
            };
        default:
            return state
    }
};


export default appReducer