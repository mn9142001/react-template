
const isInArray = (obj, array) => {
    let index = array.indexOf(obj);
    if(index === -1) return false
    return true
}


const isFormValid = (state, data) => {
    if (!state.noneRequiredFields){
        state.noneRequiredFields = []
    }


    for (let obj in data){
        if (isInArray(obj, state.noneRequiredFields)) continue;
        
        if(
            !(data[obj])
        ){
            return false
        }
    }
    
    return true
}

export default isFormValid