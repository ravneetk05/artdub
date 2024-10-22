function validate(event){
    event.preventDefault(); // prevent the form from submitting
let username  = document.getElementById("un").value;
let password = document.getElementById("pwd").value;

let comments = document.getElementById("comments").value; 
let wordCount = comments.trim().split(/\s+/).length; 

let hasError = false;
if(username == ""){
    document.getElementById("un-error").innerHTML = "Username is required";
    hasError = true;
}
else{
    document.getElementById("un-error").innerHTML = "";
}
if(password == ""){
    document.getElementById("pwd-error").innerHTML = "Password is required";
    hasError = true;
}
else{
    document.getElementById("pwd-error").innerHTML = "";
}



if(password.length < 8){
    document.getElementById("pwd-error").innerHTML = "Password must be at least 8 characters";
    hasError = true;
}

// Comments validation

if (comments.trim() === "") {
    document.getElementById("comments-error").innerHTML = "Comment is required";
    hasError = true;
} else if (wordCount < 1) {
    document.getElementById("comments-error").innerHTML = "Comment must be at least 1 word";
    hasError = true;
} else if (wordCount > 50) {
    document.getElementById("comments-error").innerHTML = "Comment must not exceed 50 words";
    hasError = true;
} else {
    document.getElementById("comments-error").innerHTML = "";
}



if(hasError){
    return;
}
else{
    alert("Form submitted successfully");
}
document.getElementById("un").value = "";
document.getElementById("pwd").value = ""
document.getElementById("comments").value="";
}