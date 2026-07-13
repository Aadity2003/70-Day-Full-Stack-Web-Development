function first(name, callback){
    
    callback(name);
}
function second(name){
    console.log(name)
}


first("Aditya", second)