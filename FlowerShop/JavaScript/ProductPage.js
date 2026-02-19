let ListProducts = [];
let ListProductsHTML = document.getElementById("container");


const addDataToHTML = () =>
{
    ListProductsHTML.innerHTML = '';
    let findProductID = localStorage.getItem("checkProductID");
    let product = ListProducts.find(p => {
        return p.id == findProductID;
    });
    let newProducts = document.createElement('div');
    newProducts.classList.add('product-card');
    newProducts.dataset.id = product.id;
    if (product){
    newProducts.innerHTML = 
            //內容
            `
            <div class="product-info">
                <h3>${product.type}</h3>
                <p>${product.typeName}</p>
                <p>${product.name}</p>
                <p>產品號碼:${product.id}</p>
                <p>寓意：${product.meaning}</p>
                <p>產品內容:${product.content}</p>
                <div style="height: 300px; width: 300px; overflow: hidden; display: flex; justify-content: center; align-items: center;">
                    <img src="${product.image}" style="height: ${product.imageSize};"></img>
                </div>
                <div class="price">HKD $${product.price}.00</div>
            <div class="actions">        
                <a class="Checkbtn">加入購物車</a>
            </div>
            </div>
            <br><br>
            `;
    ListProductsHTML.appendChild(newProducts);
    }
}


// 按加入購物車
ListProductsHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('Checkbtn')){
        let productId = positionClick.closest('.product-card').dataset.id;
        //Save ID
        localStorage.setItem("checkProductID", productId);
        // update畫面
        updateToBuyArray(productId);
    }
})

const updateToBuyArray = (productId) => {
    // 拿ToBuyList Data 轉換物件
    let savedItems = JSON.parse(localStorage.getItem("ToBuyList")) || [];

    // Check重複
    let productIndex = savedItems.findIndex(item => item.id === productId);

    if (productIndex !== -1) {
        //重複
        savedItems[productIndex].quantity += 1;
    }else {
        //已有
        savedItems.push({ id: productId, quantity: 1 });
    }

    //Save ToBuyList Data
    localStorage.setItem("ToBuyList", JSON.stringify(savedItems));
    keepAddDataToCartHTML();
    console.log("Updated Array:", savedItems);
};

//拿產品Data
const getData = () => {
    //拿產品Data
    fetch('./JavaScript/products.json')
    .then(response => response.json())
    .then(data => {
        ListProducts = data;
        addDataToHTML();
        console.log(ListProducts);
    })
}

getData();