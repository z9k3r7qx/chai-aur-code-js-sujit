let user = {
    name : "sujit",
    age : 23,
    clg : "FCRIT",
    greet : function(){
        console.log("Welcome Sujit");
    }
}
console.log(user);
user.email  = "abc@gmail.com";
user.getExperience = function(){
    console.log(`I am ${this.name} Java Developer`);
}
// user.getExperience();
// console.log(user);
console.log(user);
Object.freeze(user);
user.newName = "sujit";
console.log(user);  