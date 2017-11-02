const initialState = {
    member: [],
    total_today_meal:[],
    index: 0
    
  };

export default function(state=initialState, action){
    switch(action.type){
        case 'GET_MEMBER':
            return Object.assign({}, state, {
                member: action.member,
                index: 0
            });

        case 'GET_TODAY_MEAL':
            return Object.assign({}, state, {
                total_today_meal: action.total_today_meal,
                index: 0
            });

        case 'ADD_MEMBER':
            return Object.assign({}, state, {
                index: 1
            });
        
        
        default:
            return state;

    }
}