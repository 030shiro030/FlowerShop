// 忘記密碼
let forGotPwdfrm = document.querySelector("#forgotPW-form");
let forGotPwdInput = document.querySelector("#forgotPW-input");


// 忘記密碼
forGotPwdfrm.addEventListener("submit", function(event) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userExists = false;

    // 檢查用戶名或電子郵件
    for (let user of users) {
        if (user.email === forGotPwdInput.value || user.username === forGotPwdInput.value) {
            userExists = true;
            break;
        }
    }

    if (!userExists) {
        event.preventDefault();
        alert("沒有這用戶名或電郵信箱的帳戶!!!");
    } else {
        event.preventDefault();
        alert("Check Your Email");
        window.location.href = "Main.html";
    }
});