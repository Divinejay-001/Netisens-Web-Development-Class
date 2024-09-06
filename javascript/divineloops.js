// while loop repeats some code WHILe some condition is true

let loggedIn=false;
let username;
let password;

while(!loggedIn){
    username=prompt(`Enter your username`);
    password=prompt(`Enter your password`);

    if(username==="myuser" && password=== "mypassword"){
        loggedIn=true;
        console.log("You have successfully logged in");
    } else{
        console.log("Invalid input");
    }
}