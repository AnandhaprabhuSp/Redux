export default function home(state = {home:'sampleData'}, action){
    console.log('***',action);
    
    switch (action.type) {
        case 'ADD':
            Object.assign(state,action.payload);
            break;
    
        default:
            break;
    }
    console.log('Home',state);
    return state;
}