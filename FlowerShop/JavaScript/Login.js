let loginfrm = document.querySelector("#loginForm");
let UsernameInput = document.querySelector("#uname");
let PasswordInput = document.querySelector("#pw");

loginfrm.addEventListener("submit", function(event) {
    event.preventDefault();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(user => user.username === UsernameInput.value && user.password === PasswordInput.value);
    // 檢查密碼
    if (!user) {
        alert("用戶名或密碼錯誤!!!");
    } else {
        localStorage.setItem("LoginMember", UsernameInput.value ); 
        localStorage.setItem("isLogin", "true"); 
        window.location.href = "Main.html"; 
    }
});