const Errors = perm => store => next => action=>{
action.type === "errors"? console.log("Toastify:",action.payload.message):next(action);
}
export default Errors;