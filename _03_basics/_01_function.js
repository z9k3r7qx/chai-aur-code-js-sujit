function getresult(username = "abc"){
    if(!username){
        console.log("Username must provide");
        return;
    }
    return `${username} is log in`
}

// const result = getresult("sujit");
const result = getresult("");
// const result = getresult(" ");
// const result = getresult(null);
// const result = getresult();
console.log(result);