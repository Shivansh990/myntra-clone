function wishListAdd(){

if(wishProducts.length==0){
    document.querySelector('.empty-container').style.display="flex";
    document.querySelector('.wishproduct-container').style.display="none";
}



else{
    document.querySelector('.empty-container').style.display="none";
    document.querySelector('.wishproduct-container').style.display="flex";
    let innerHTMLwish="";

   [...wishProducts].reverse().forEach((product) => {
        let offer=  Math.round(((parseInt(product.orginalPrice) - parseInt(product.discountPrice)) * 100) / parseInt(product.orginalPrice));
    innerHTMLwish +=`

     <li class="wishproduct">

                <div class="product-image">
                    <img src=${product.image.p1} alt="" class="wish-img">
                    <button class="remove-btn" data-btnidx="${product.id}">X</button>
                </div>

                <div class="detail-container">

                <div class="wishproduct-detail">

                    <p class="wishproduct-brand">${product.brand} ${product.product} </p>

                    <div class="wishproduct-price">

                <span>
                  <span class="wishproduct-discount">Rs. ${product.discountPrice}</span>
                  <span class="wishproduct-original">Rs. ${product.orginalPrice}</span>
                </span> 

                <span class="wishproduct-offer">(${offer}% OFF)</span>

                </div>

                </div>

                <div class="wish-move">
                    <button class="wish-cart" data-cartbtn="${product.id}">MOVE TO BAG</button>
                </div>

                </div>

            </li>

     `
    });
    
    if(wishProducts.length==1){
        document.querySelector('.noofitems').innerHTML=`${wishProducts.length} item`
    }
    else{
        document.querySelector('.noofitems').innerHTML=`${wishProducts.length} items`
    }

    document.querySelector('.wishlist').innerHTML=innerHTMLwish;
}


document.querySelectorAll('.remove-btn').forEach((button)=>{
    button.addEventListener('click',()=>{
        let val=parseInt(button.dataset.btnidx);
        wishProducts=wishProducts.filter(p=> p.id!==val);
        wishIndex=wishIndex.filter(id=> id!==val);

        localStorage.setItem(wishKey,JSON.stringify(wishProducts));
        localStorage.setItem(wishIndexKey,JSON.stringify(wishIndex));
        wishListAdd();
        syncBtn();
    })
});

document.querySelectorAll('.wish-cart').forEach((button)=>{
    button.addEventListener('click',()=>{
        let val=parseInt(button.dataset.cartbtn);
        let findP=wishProducts.find(p=> p.id===val);
        wishProducts=wishProducts.filter(p=> p.id!==val);
        wishIndex=wishIndex.filter(id=> id!==val);

        localStorage.setItem(wishKey,JSON.stringify(wishProducts));
        localStorage.setItem(wishIndexKey,JSON.stringify(wishIndex));
        cartProducts.push(findP);
        cartIndex.push(findP.id);
        localStorage.setItem(cartKey,JSON.stringify(cartProducts));
        localStorage.setItem(cartIndexKey,JSON.stringify(cartIndex));
        wishListAdd();
        syncBtnCart();
        itemLength();
})
});
}

if(JSON.parse(localStorage.getItem("isLogin"))){
    wishListAdd();
    syncBtn();
    syncBtnCart();
}

else{
    window.location.href=`../html/profile.html`;
}

function itemLength(){

let currentUser = JSON.parse(localStorage.getItem("user")) || [];
let cartKey = `${currentUser.fullName}_cart_${currentUser.number}_${currentUser.password}`;
let noOfitem=JSON.parse(localStorage.getItem(cartKey)) || [];
let total=0;
console.log(noOfitem)
noOfitem.forEach(p=>{
  total+=p.qty;
});
if(total==0){
  document.querySelector('.noOfItems').style.display="none";
}
else{
  document.querySelector('.noOfItems').style.display="block";
  document.querySelector('.noOfItems').innerHTML=`${total}`;
}
}



itemLength();

function performSearch1(){
  const query=document.querySelector('.search-bar').value.trim().toLowerCase();
  document.querySelector('.search-bar').value="";
  if(query){
   window.location.href = `../html/product.html?search=${encodeURIComponent(query)}`;
  }
}

document.querySelector('.search-bar').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    performSearch1(); 
  }
});

