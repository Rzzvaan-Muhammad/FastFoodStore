const func = perm => ({dispatch,getState}) => next => action => {
console.log("perm", perm)

   if( typeof action === "function"){
        action(dispatch,getState)
   }else{
   next(action);
   }
}

export default func;