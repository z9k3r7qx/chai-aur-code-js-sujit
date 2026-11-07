const user = {
    name : "sujit",
    greet : function(){
        console.log(this);
    }
}
user.greet();
console.log("Outside the funtion : ",this);
console.log(globalThis);