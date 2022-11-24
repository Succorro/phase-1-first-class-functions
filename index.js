function receivesAFunction (callback){
    callback ("callback");
}
receivesAFunction();
//--------------------
function returnsANamedFunction(something){
    return callback;
}
function callback (){
    returnsANamedFunction("before all")
}
//--------------------
function returnsAnAnonymousFunction(something){
    return () => {};
}
