const Logger = perm => store=> next => action =>{
console.log("console",perm);

    next(action)
    // action()
}

export default Logger;