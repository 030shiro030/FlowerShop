let CartGetListProducts = [];
let CartProductsHTML = document.getElementById("container");
let receiptHTML = document.querySelector(".receipt");
let invoiceHTML = document.querySelector(".invoice");

let payfrm = document.querySelector("#pay");
let now = new Date();
let nowHour = now.getHours();
// console.log(nowHour);//10
let DeliveryDate = "";
let totalPrice = 0;
let CartProductsQuantitySum = 0;

const addDataToCartHTML = () =>
{
    CartProductsHTML.innerHTML = '';
    let totalPriceText = document.createElement('div');
    let CartH4 = document.createElement('div');
    CartH4.innerHTML = `<h4>Cart <span class="price" style="color:black"><i class="fa fa-shopping-cart"></i> <b id="num">${CartProductsQuantitySum}</b></span></h4>`
    CartProductsHTML.appendChild(CartH4);

    let savedItems = JSON.parse(localStorage.getItem("ToBuyList")) || [];
    console.log("ToBuyList")
    console.log(savedItems);
    savedItems.forEach(product => {
        let newProducts = document.createElement('div');
        newProducts.classList.add('CartItem');
        newProducts.style.cssText = 'height: 60px';
        newProducts.dataset.id = product.id;
        //找savedItems ID相應的產品
        CartGetListProducts.forEach(productID => {
            if (product.id == productID.id){
                newProducts.innerHTML = 
                //內容
                `
                <p>ID:${productID.id} <a href="./productPage.html">${productID.name} </a>${" "} x ${product.quantity} $${productID.price}${"/per"} <span class="price">$${(productID.price * product.quantity)}</span></p>
                <br><br>
                `;
                CartProductsHTML.appendChild(newProducts);
                CartProductsQuantitySum += product.quantity;

                totalPrice += (product.quantity*productID.price);
                localStorage.setItem("totalPrice",totalPrice);
        }
    });
    });

    totalPriceText.innerHTML = `<h5>總價: ${totalPrice}</h5>`;
    CartProductsHTML.appendChild(totalPriceText);

    document.getElementById('num').innerText = CartProductsQuantitySum;
    
}

// 購物車產品Click Event
CartProductsHTML.addEventListener('click', (event) => {
    const positionClick = event.target;
    
    // 找按下按鈕相應的Div
    const cartItemDiv = positionClick.closest('.CartItem');
    if (!cartItemDiv) return; // .CartItem外的其他野就唔做

    //找相應的產品ID
    const productId = cartItemDiv.dataset.id;

    // Save Data
    localStorage.setItem("checkProductID", productId);
});

//Save 用戶付款資料
//收據
payfrm.addEventListener("submit", function(event) {
    let savedItems = JSON.parse(localStorage.getItem("ToBuyList")) || [];

    let overlay = document.getElementById("overlay");
    overlay.classList.remove("hide");

    event.preventDefault();
    let fullName = payfrm.elements["fname"].value;
    localStorage.setItem("pay_fullName",fullName);
    let address = payfrm.elements["adr"].value;
    localStorage.setItem("pay_address",address);
    let IsTodayDelivery = true;

    let Member = localStorage.getItem("LoginMember");

    //送貨日期
    //11點後
    if(nowHour > 9)
    {
        let tomorrow = new Date(now);
        tomorrow.setDate(now.getDate() + 1);
        DeliveryDate = (tomorrow.getFullYear()+"/"+(tomorrow.getMonth()+1)+"/"+(tomorrow.getDate()))
        console.log(DeliveryDate);
    }
    //11點前
    else{
        
        DeliveryDate = (now.getFullYear()+"/"+(now.getMonth()+1)+"/"+(now.getDate()))
        console.log(DeliveryDate);
    }

    //收據
    let receipt = document.createElement('div');
    let invoice = document.createElement('div');
    //收據內容S
    receipt.innerHTML = 
    `
    <br>
    <div id="receipt-items">
    
    </div>

    <hr style="width: 95%;">

    <div style="justify-self: center;">
    <h4 id="receipt-totalPrice">結賬總和: $ ${totalPrice}</h4>
    <h4 id="receipt-deliveryDate">送貨日期: ${DeliveryDate}</h4>
    <h4>付款情況: 確定</h4>
    </div>

    <br><br><br>

    <div style="justify-self: center;">
    <a onclick="hidereceipt()" style="text-decoration: none;"><h4>確定</h4></a>
    </div>
    `;





    //貨單內容
    invoice.innerHTML = 
    `
    <h3 style="margin-left:30px;">貨單</h3>
    
    <hr style="width: 95%;">
    <h3 style="margin-left:50px;">送貨資訊</h3>
    <br>
    <h4 style="margin-left:80px;">送貨日期: ${DeliveryDate}</h4>
    <h4 style="margin-left:80px;">收貨人名稱: ${fullName}</h4>
    <h4 style="margin-left:80px;">送貨地址: ${address}</h4>

    <hr style="width: 95%;">
    <h3 style="margin-left:50px;">貨品</h3>
    <br>
    <div id="invoice-items">
    
    </div>

    <hr style="width: 95%;">
    
    <div style="justify-self: center;">
    <a href="./Main.html" style="text-decoration: none;"><h4>確定</h4></a>
    </div>
    `;

    receiptHTML.appendChild(receipt);
    invoiceHTML.appendChild(invoice);

    let receiptItems = receipt.querySelector('#receipt-items');
    let invoiceItems = invoice.querySelector('#invoice-items');
    savedItems.forEach(product => {
        let productPrice = CartGetListProducts.find(p => p.id == product.id).price;
        let receiptTotalPrice = 0;
        receiptTotalPrice += productPrice * product.quantity;

        CartGetListProducts.forEach(productID => {
            if (product.id == productID.id){
                let listItem = document.createElement('div');
                listItem.innerHTML = 
                //內容
                `
                <h4 style="margin-left:30px;">產品名稱: ${productID.name}</h4>
                <h5 style="margin-left:50px;">產品號碼: ${productID.id}</h5>
                <h5 style="margin-left:50px;">產品內容: ${productID.content}</h5>
                <h5 style="margin-left:50px;">數量: ${product.quantity}件 每件價錢: $ ${productPrice}</h5>
                <h5 style="margin-left:50px;">小計: $ ${receiptTotalPrice}</h5>
                <br>
                `;
                receiptItems.appendChild(listItem);

                let invoiceItem = document.createElement('div');
                invoiceItem.innerHTML = 
                //內容
                `
                <h4 style="margin-left:30px;">產品名稱: ${productID.name}</h4>
                <h5 style="margin-left:50px;">產品號碼: ${productID.id}</h5>
                <h5 style="margin-left:50px;">產品內容: ${productID.content}</h5>
                <h5 style="margin-left:50px;">數量: ${product.quantity}件
                <br>
                `;
                invoiceItems.appendChild(invoiceItem);
            }
        });

    });
    
    let buyDate = (now.getFullYear() + "/" + (now.getMonth()+1) + "/" + (now.getDate()) + "/" + (now.getHours()+1) + "/" + (now.getMinutes()+1));
    //購買Record
    //建立Record
    let newRecord = {
        Member: Member,
        buyTime: buyDate,
        items: savedItems,
        totalPrice: totalPrice,
        fullName: fullName,
        address: address,
        deliveryDate: DeliveryDate
    };

    //加Record
    let previousRecords = JSON.parse(localStorage.getItem("buyHistory")) || [];
    previousRecords.push(newRecord);

    //儲存Record
    localStorage.setItem("buyHistory", JSON.stringify(previousRecords));

    receiptHTML.classList.remove("hide");
    localStorage.removeItem("ToBuyList");
});

function hidereceipt(){
    receiptHTML.classList.add("hide");
    invoiceHTML.classList.remove("hide");
}


//拿產品Data
const getData = () => {
    //拿產品Data
    fetch('./JavaScript/products.json')
    .then(response => response.json())
    .then(data => {
        CartGetListProducts = data;
        addDataToCartHTML();
        console.log("產品Data");
        console.log(CartGetListProducts);
    })
}

getData();