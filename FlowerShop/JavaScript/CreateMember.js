// 會員創建
let frm = document.querySelector("#createAC-form");
let comfirmPassword = document.querySelector("#pw2");

// 會員創建
frm.addEventListener("submit", function(event) {
    let pw1 = frm.elements["pw1"].value;
    // 檢查密碼
    if (comfirmPassword.value !== pw1){
        event.preventDefault();
        alert("密碼不匹配!!!")
    }else{
        event.preventDefault();
        saveUserAccount();
        localStorage.setItem("isLogin",true);
        window.location.href = "Main.html";
        localStorage.setItem("LoginMember",frm.elements["uname"].value ); 
    }
});

// 儲存User帳戶資料
function saveUserAccount() {
    // 拿現有用戶
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // 創建新用戶
    let newUser = {
        name: frm.elements["contactName"].value,
        gender: frm.elements["gender"].value,
        email: frm.elements["email"].value,
        username: frm.elements["uname"].value,
        password: frm.elements["pw1"].value
    };

    users.push(newUser);

    // 將更新後的用戶儲存
    localStorage.setItem("users", JSON.stringify(users));
}
