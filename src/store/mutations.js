export default {
    addCounte(state,val){
        state.counte += val;
    },
    removeCounte(state,val){
    if(state.counte <= 0){
        return;
    }
    state.counte -= val;
    }
}