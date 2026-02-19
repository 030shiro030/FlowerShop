let MemberGetListProducts = [];
let Member = localStorage.getItem("LoginMember");
let recordHtml = document.getElementById("order-history")
let recordcount = 0;

const displaybuyHistory = () => {
    let buyHistory = JSON.parse(localStorage.getItem("buyHistory")) || [];

    // 清除記錄
    recordHtml.innerHTML = '';
    buyHistory.forEach((record, index) => {
        
        if (record.Member == Member){
        let recordDiv = document.createElement('div');
        recordcount ++;
        recordDiv.innerHTML = `
            <br>
            <h4 style="margin-left:30px;">記錄 #${recordcount}</h4>
            <h5 style="margin-left:50px;">收貨人: ${record.fullName}</h5>
            <h5 style="margin-left:50px;">地址: ${record.address}</h5>
            <h5 style="margin-left:50px;">送貨日期: ${record.deliveryDate}</h5>
            <h5 style="margin-left:50px;">總價: $${record.totalPrice}</h5>
            <h5 style="margin-left:50px;">購買的產品: </h5>
            <br>
            <hr class="hr">
        `;

        record.items.forEach((item,index)  => {
            MemberGetListProducts.forEach(productID => {
                if(productID.id == item.id)
                recordDiv.innerHTML += `
                <p style="margin-left:80px;">#${index + 1}.商品名稱: ${productID.name}  數量: ${item.quantity} 每件價格: $${productID.price}</p>
                <hr class="hr">
            `;
            console.log("Do");
            });
        });

        recordHtml.appendChild(recordDiv);
        }
    });
    recordcount = 0;
};

function logout(){
    event.preventDefault();
    localStorage.setItem("isLogin",false);
    window.location.href = "login2.html";
    localStorage.setItem("LoginMember","" ); 
    localStorage.setItem("LoginMember","");
}

//拿產品Data
const getData = () => {
    //拿產品Data
    fetch('./JavaScript/products.json')
    .then(response => response.json())
    .then(data => {
        MemberGetListProducts = data;
        console.log("產品Data");
        console.log(MemberGetListProducts);
        displaybuyHistory();
    })
}

getData();