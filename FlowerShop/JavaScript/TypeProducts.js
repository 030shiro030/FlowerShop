let ListProducts = [];
let ListProductsHTML = document.getElementById("container");

const addDataToHTML = () =>
{
    ListProductsHTML.innerHTML = '';
    if(ListProducts.length > 0){
        ListProducts.forEach(product =>{
            let newProducts = document.createElement('div');
            newProducts.classList.add('product-card');
            newProducts.dataset.id = product.id;

            // 產品類別
            let type = localStorage.getItem("productType");

            if(type == product.type || type == product.specialType){
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
                <a class="Checkbtn" href="./productPage.html">查看詳情</a>
            </div>
            </div>
            <br><br>
            `;
        
        ListProductsHTML.appendChild(newProducts);
            }
        })
    }
}

// 按查看詳情
ListProductsHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('Checkbtn')){
        let productId = positionClick.closest('.product-card').dataset.id;
        //Save ID
        localStorage.setItem("checkProductID", productId);
        // alert(productId);
    }
})

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