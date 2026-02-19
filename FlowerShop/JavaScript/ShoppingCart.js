let CartGetListProducts = [];
let CartProductsHTML = document.getElementById("listCart");
let Cartempty = document.getElementById("sideCartNav-Div-NullText");
let ToPay = document.querySelector(".sideCartNav-Div-ToPay");

// 一開始update畫面
const addDataToCartHTML = () =>
{
    CartProductsHTML.innerHTML = '';
    let savedItems = JSON.parse(localStorage.getItem("ToBuyList")) || [];

    if (savedItems.length === 0) {
        Cartempty.classList.remove('hide'); // 顯示
        ToPay.classList.add('hide');
    } else {
        Cartempty.classList.add('hide');    // 隱藏
        ToPay.classList.remove('hide');
    }

    savedItems.forEach(product => {
        let newProducts = document.createElement('div');
        newProducts.classList.add('CartItem');
        newProducts.dataset.id = product.id;
        //找savedItems ID相應的產品
        CartGetListProducts.forEach(productID => {
            if (product.id == productID.id){
                newProducts.innerHTML = 
                //內容
                `
                <div style="display: flex;  width: 100px; overflow: hidden;align-content: center; justify-content: center;" class="image">
                    <img style="height: ${productID.cartImageSize};" src="${productID.image}">
                </div>
                <div class="name">
                    ${productID.name}
                </div>
                <div class="type">
                    color/size/box-color
                </div>
                <div class="totalPrice">
                    $${productID.price}.00
                </div>
                <div style="user-select: none;" class="quantity">
                    <a class="minus" onclick="">-</a>
                    <a class="num" onclick="">${product.quantity}</a>
                    <a class="plus" onclick="">+</a>
                    <div class="removeDiv">
                        <a class="remove">清除</a>
                    </div>
                </div>
                <br><br>
                `;
                CartProductsHTML.appendChild(newProducts);
        }
    });
    });
    
}

// 購物車產品Click Event
CartProductsHTML.addEventListener('click', (event) => {
    const positionClick = event.target;
    
    // 找按下按鈕相應的Div
    const cartItemDiv = positionClick.closest('.CartItem');
    if (!cartItemDiv) return; // .CartItem外的其他野就唔做

    //找相應的產品ID
    const productId = cartItemDiv.dataset.id;
    let savedItems = JSON.parse(localStorage.getItem("ToBuyList")) || [];
    
    // 找ID相應的產品
    const itemIndex = savedItems.findIndex(item => item.id == productId);
    if (itemIndex === -1) return;

    // 產品數量運算
    //+
    if (positionClick.classList.contains('plus')) {
        savedItems[itemIndex].quantity++;
    } 
    //-
    else if (positionClick.classList.contains('minus')) {
        if (savedItems[itemIndex].quantity > 1) {
            savedItems[itemIndex].quantity--;
        } else {
            //0 => Delete
            savedItems.splice(itemIndex, 1);
        }
    } 
    //Delete
    else if (positionClick.classList.contains('remove')) {
        savedItems.splice(itemIndex, 1);
    }

    // Save Data
    localStorage.setItem("ToBuyList", JSON.stringify(savedItems));
    addDataToCartHTML(productId); 
    //update購物車產品的數量-畫面
    UpdateCartNum(productId,savedItems);
});

//update購物車產品的數量-畫面
function UpdateCartNum(targetID,savedItems){
    let x = document.querySelector(`[data-id="${targetID}"]`)
    let y = savedItems.findIndex(item => item.id == targetID);
    let targetNum = x.querySelector(".num");
    targetNum.innerText = savedItems[y].quantity;
}

// update畫面
function keepAddDataToCartHTML(){
    CartProductsHTML.innerHTML = '';
    let savedItems = JSON.parse(localStorage.getItem("ToBuyList"));

    if (savedItems.length === 0) {
        Cartempty.classList.remove('hide'); // 顯示
        ToPay.classList.add('hide');
    } else {
        Cartempty.classList.add('hide');    // 隱藏
        ToPay.classList.remove('hide');
    }

    savedItems.forEach(product => {
        let newProducts = document.createElement('div');
        newProducts.classList.add('CartItem');
        newProducts.dataset.id = product.id;
        CartGetListProducts.forEach(productID => {
            if (product.id == productID.id){
                newProducts.innerHTML = 
                //內容
                `
                <div style="display: flex;  width: 100px; overflow: hidden;align-content: center; justify-content: center;" class="image">
                    <img style="height: ${productID.cartImageSize};" src="${productID.image}">
                </div>
                <div class="name">
                    ${productID.name}
                </div>
                <div class="type">
                    color/size/box-color
                </div>
                <div class="totalPrice">
                    $${productID.price}.00
                </div>
                <div style="user-select: none;" class="quantity">
                    <a class="minus" onclick="">-</a>
                    <a class="num" onclick="">${product.quantity}</a>
                    <a class="plus" onclick="">+</a>
                    <div class="removeDiv">
                        <a class="remove">清除</a>
                    </div>
                </div>
                <br><br>
                `;
                CartProductsHTML.appendChild(newProducts);
        }
    });
    });
    
}

//拿產品Data
const CartgetData = () => {
    //拿產品Data
    fetch('./JavaScript/products.json')
    .then(response => response.json())
    .then(data => {
        CartGetListProducts = data;
        addDataToCartHTML();
        console.log(CartGetListProducts);
    })
}

// keepAddDataToCartHTML();

CartgetData();