

const uNameErr = document.getElementById("uNameErr");
const emailErr = document.getElementById("emailErr");
const passwordErr = document.getElementById("passwordErr");
const rePasswordErr = document.getElementById("rePasswordErr");
const form = document.getElementById("Form");

function setError(id,error){
    id.innerHTML = error;
}

function validateForm(e){
    let userName = document.forms["myForm"]["uName"].value;
    const email = document.forms["myForm"]["email"].value;
    const password = document.forms["myForm"]["password"].value;
    const rePassword = document.forms["myForm"]["rePassword"].value;
    let returnval = true;
    console.log(userName);
  
if(userName === ""){
   setError(uNameErr, "Username cannot be empty")
   
    returnval = false;
}
if(email === ""){
    setError(emailErr, "Please Enter Valid Email")
    
     returnval = false;
 }
if(password.length <6){
    setError(passwordErr, "Please Enter password greater than or equal to 6 characters")
   
    returnval = false;
}
if(rePassword !== password){
    setError(rePasswordErr, "Entered Passwords do not match")
   
    returnval = false;
}


return returnval
}

