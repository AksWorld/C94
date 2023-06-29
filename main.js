function login(){
    User_name=document.getElementById("input").value;
    localStorage.setItem("User_name",User_name);
    window.location = "kwitter.html";
}