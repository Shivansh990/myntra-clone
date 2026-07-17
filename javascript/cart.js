let couponApplied=false;

function addCart(){

    if(cartProducts.length==0){
        document.querySelector('.emptycart-container').style.display="flex";
        document.querySelector('.cart-container').style.display="none";
    }
    else{
        document.querySelector('.emptycart-container').style.display="none";
        document.querySelector('.cart-container').style.display="flex";
        let innerHTMLcart="";
        [...cartProducts].reverse().forEach((product)=>{

            

            let offer=  Math.round(((parseInt(product.orginalPrice) - parseInt(product.discountPrice)) * 100) / parseInt(product.orginalPrice));

            


    innerHTMLcart +=`
    <div class="cart-items">

        <div class="item-images">
            <img src=${product.image.p1} height="160px" width="111px" class="img-product">
            <input type="checkbox"  class="img-checkbox"  data-id="${product.id}" >
           <span class="check-1"></span> 
        </div>

        <div class="item-info">
        <div class="item-brand">${product.brand}</div>
        <div class="item-type">${product.product}</div>
        <div class="item-quantity">
            <div class="item-size"><span>Size:${product.size}</span></div>
            <div class="product-qty">
            <button class="remove" data-id="${product.id}"><img src="../../images/remove.png" height="16px" width="16px"></button>
            <span>Qty:${product.qty}</span> 
            <button class="add" data-id="${product.id}"><img src="../../images/add.png" height="16px" width="16px"></button>
            </div>
        </div>
        <div class="item-price">
            <div class="discounted-price"> <span class="rupee-sym1">₹</span><span class="price-1">${parseInt(product.discountPrice)*product.qty}</span></div>
            <div class="original-price"> <span class="rupee-sym2">₹</span><span class="price-2">${parseInt(product.orginalPrice)*product.qty}</span></div>
            <div class="offer"> <span class="percent">${offer}%</span> <span class="off">OFF</span></div>
        </div>
        </div>

        <button class="btn-itemremove" data-remove="${product.id}"><img src="../../images/closesmall.png" height="24px" width="24px"></button>

    </div>
    `

        });
        
        
        document.querySelector('.item-container').innerHTML=innerHTMLcart;
        Tocheck();
        document.querySelector('.item-select').innerHTML=`${checkedProduct.length}/${cartProducts.length} ITEMS SELECTED`;
        checkAmount();
    }

    
    document.querySelectorAll('.btn-itemremove').forEach((product)=>{
        product.addEventListener('click',()=>{
            let productId=parseInt(product.dataset.remove);
            cartProducts=cartProducts.filter(p=>p.id!==productId);
            cartIndex=cartIndex.filter(id=> id!==productId);
            checkedProduct=checkedProduct.filter(p=>p.id!==productId);
            checkedIndex=checkedIndex.filter(id=> id!==productId);

            localStorage.setItem(cartIndexKey,JSON.stringify(cartIndex));
            localStorage.setItem(cartKey,JSON.stringify(cartProducts));
            localStorage.setItem(checkedKey, JSON.stringify(checkedProduct));
            localStorage.setItem(checkedIndexKey, JSON.stringify(checkedIndex));

            addCart();
            syncBtnCart();
            itemLength();
            checkAmount();
        });
    });

    document.querySelector('.btn-remove').addEventListener('click',()=>{

        if(document.querySelector('#select-all').checked){
        cartIndex=[];
        cartProducts=[];
        checkedIndex=[];
        checkedProduct=[];
        }

        
        else if(document.querySelector('#select-all').indeterminate){
            document.querySelectorAll('.img-checkbox').forEach(p=>{
                let isCheck=p.checked;
                if(isCheck){
                    let id=parseInt(p.dataset.id);
                    cartIndex=cartIndex.filter(x=>x!==id);
                    checkedIndex=checkedIndex.filter(x=>x!==id);
                    checkedProduct=checkedProduct.filter(x=>x.id!==id);
                    cartProducts=cartProducts.filter(x=>x.id!==id);
                }
            });
        }

        localStorage.setItem(checkedKey, JSON.stringify(checkedProduct));
        localStorage.setItem(checkedIndexKey, JSON.stringify(checkedIndex));
        
        localStorage.setItem(cartIndexKey,JSON.stringify(cartIndex));
        localStorage.setItem(cartKey,JSON.stringify(cartProducts));
        addCart();
        syncBtnCart();
        itemLength();
        Tocheck();
        checkAmount();
        toggleCheck();
        syncBtn();
    });

    document.querySelector('.btn-move').addEventListener('click',()=>{
        
        if(document.querySelector('#select-all').checked){
        wishProducts =[...wishProducts,...cartProducts];
        wishIndex=[...wishIndex,...cartIndex];
        cartIndex=[];
        cartProducts=[];
        checkedIndex=[];
        checkedProduct=[];
        }

        
        else if(document.querySelector('#select-all').indeterminate){
            document.querySelectorAll('.img-checkbox').forEach(p=>{
                let isCheck=p.checked;
                if(isCheck){
                    let id=parseInt(p.dataset.id);
                    let prod=checkedProduct.find(x=>x.id===id);
                    cartIndex=cartIndex.filter(x=>x!==id);
                    checkedIndex=checkedIndex.filter(x=>x!==id);
                    checkedProduct=checkedProduct.filter(x=>x.id!==id);
                    cartProducts=cartProducts.filter(x=>x.id!==id);
                    if(prod){
                        wishProducts.push(prod);
                        wishIndex.push(id);
                    }
                }
            });
        }

        localStorage.setItem(checkedKey, JSON.stringify(checkedProduct));
        localStorage.setItem(checkedIndexKey, JSON.stringify(checkedIndex));
        localStorage.setItem(cartIndexKey,JSON.stringify(cartIndex));
        localStorage.setItem(cartKey,JSON.stringify(cartProducts));
        localStorage.setItem(wishIndexKey,JSON.stringify(wishIndex));
        localStorage.setItem(wishKey,JSON.stringify(wishProducts));
        addCart();
        syncBtn();
        syncBtnCart();
        wishListAdd();
        itemLength();
        Tocheck();
        checkAmount();
        toggleCheck();
    });

    document.querySelectorAll('.remove').forEach(btn=>{
    btn.addEventListener('click',()=>{
        let prodId=parseInt(btn.dataset.id);
        let index=cartProducts.findIndex(p=>p.id===prodId);
        let index2=checkedProduct.findIndex(p=>p.id===prodId);
        if(index2!==-1){
            checkedProduct[index2].qty-=1;
        localStorage.setItem(checkedKey, JSON.stringify(checkedProduct));
        localStorage.setItem(checkedIndexKey, JSON.stringify(checkedIndex));
        }
        

        cartProducts[index].qty-=1;
        localStorage.setItem(cartIndexKey,JSON.stringify(cartIndex));
        localStorage.setItem(cartKey,JSON.stringify(cartProducts));
        addCart();
        itemLength();
    });
});

document.querySelectorAll('.add').forEach(btn=>{
    btn.addEventListener('click',()=>{
        let prodId=parseInt(btn.dataset.id);
        let index=cartProducts.findIndex(p=>p.id===prodId);
        let index2=checkedProduct.findIndex(p=>p.id===prodId);
        if(index2!==-1){
            checkedProduct[index2].qty+=1;
        localStorage.setItem(checkedKey, JSON.stringify(checkedProduct));
        localStorage.setItem(checkedIndexKey, JSON.stringify(checkedIndex));
        }
        

        cartProducts[index].qty+=1;
        localStorage.setItem(cartIndexKey,JSON.stringify(cartIndex));
        localStorage.setItem(cartKey,JSON.stringify(cartProducts));
        addCart();
        itemLength();
    });
});

document.querySelectorAll('.cart-items').forEach(item => {
  let prodId = parseInt(item.querySelector('.img-checkbox').dataset.id);
  let product = cartProducts.find(p => p.id === prodId);

  if (product) {
    let addBtn = item.querySelector('.add');
    let removeBtn = item.querySelector('.remove');

    if (product.qty === 1) {
      removeBtn.style.visibility = "hidden";
    } else {
      removeBtn.style.visibility = "visible";
    }

    if (product.qty === 10) {
      addBtn.style.visibility = "hidden";
    } else {
      addBtn.style.visibility = "visible";
    }
  }
});

function Tocheck(){
document.querySelectorAll('.img-checkbox').forEach((p)=>{
    let id=parseInt(p.dataset.id);
    let isInclude=checkedIndex.includes(id);

    if(isInclude){
        p.checked=true;
    }
    else{
        p.checked=false;
    }  
});
toggleCheck();
}

document.querySelectorAll('.img-checkbox').forEach((p) => {
  p.addEventListener('change', () => {
    let id = parseInt(p.dataset.id);
    let isInclude = checkedIndex.includes(id);

    if (isInclude) {
      checkedIndex = checkedIndex.filter((x) => x !== id);
      checkedProduct = checkedProduct.filter((x) => x.id !== id);
    }
     else {
      checkedIndex.push(id);
      let prodt = cartProducts.find((x) => x.id === id);
      if (prodt) checkedProduct.push({...prodt});
    }
    localStorage.setItem(checkedKey, JSON.stringify(checkedProduct));
    localStorage.setItem(checkedIndexKey, JSON.stringify(checkedIndex));
    document.querySelector('.item-select').innerHTML=`${checkedProduct.length}/${cartProducts.length} ITEMS SELECTED`;
    checkAmount();
    toggleCheck();
  });
});

function checkAmount(){
    
    let totalMrp=0;
    let totalDiscount=0;
    let totalAmount=0;

    checkedProduct.forEach(product=>{
        totalAmount+= (parseInt(product.discountPrice))*product.qty;
        totalMrp+=(parseInt(product.orginalPrice))*product.qty;
    });

    if(totalAmount>=1999 && couponApplied){
        totalAmount=totalAmount-300;
    }

    totalDiscount=totalMrp-totalAmount;

    

    if(checkedProduct.length===0){
        document.querySelector('.total-mrpval').innerHTML=`${totalMrp}`;
        document.querySelector('.original-val').innerHTML=`${totalAmount}`;
        document.querySelector('.price-detail3').style.display="none";
        document.querySelector('.price-detail1').style.display="none";
        document.querySelector('.price-detail4').style.display="none";
        document.querySelector('.price-detail5').style.display="none";
    }

    else{
        document.querySelector('.price-detail3').style.display="flex";
        document.querySelector('.price-detail1').style.display="flex";
        document.querySelector('.price-detail4').style.display="flex";
        document.querySelector('.price-detail5').style.display="flex";
    document.querySelector('.total-mrpval').innerHTML=`${totalMrp}`;
    document.querySelector('.discount-val').innerHTML=`${totalDiscount}`;
    document.querySelector('.original-val').innerHTML=`${totalAmount}`;
    }

    if(checkedProduct.length>0 && !couponApplied && totalAmount>=1999){
        document.querySelector('#coupon-val').classList.add('coupon-value-js');
        document.querySelector('#coupon-val').classList.remove('coupon-value');
        
        document.querySelector(`#coupon-val`).onclick=()=>{
            couponApplied=true;
            document.querySelector('#coupon-val').innerHTML=`
            <span class="discount-value"><span class="sub-sign">-</span><span class="rupee-sign1">₹</span> <span class="discount-val">300</span></span>
                `    
                checkAmount();
            };
    }

    else{
            document.querySelector('#coupon-val').classList.remove('coupon-value-js');
            document.querySelector('#coupon-val').classList.add('coupon-value');
        }
}


document.querySelector('#select-all').addEventListener('change',(btn)=>{
    if(!btn.target.checked){
        document.querySelectorAll('.img-checkbox').forEach(p=>{
            p.checked=false;
        });
        checkedIndex=[];
        checkedProduct=[];

        localStorage.setItem(checkedKey, JSON.stringify(checkedProduct));
        localStorage.setItem(checkedIndexKey, JSON.stringify(checkedIndex));
        Tocheck();
        checkAmount();
        toggleCheck();
    }
    else{
        document.querySelectorAll('.img-checkbox').forEach(p=>{
            p.checked=true;
        });

        checkedIndex=[...cartIndex];
        checkedProduct=[...cartProducts];

        localStorage.setItem(checkedKey, JSON.stringify(checkedProduct));
        localStorage.setItem(checkedIndexKey, JSON.stringify(checkedIndex));
        Tocheck();
        checkAmount();
        toggleCheck();
    }
    document.querySelector('.item-select').innerHTML=`${checkedProduct.length}/${cartProducts.length} ITEMS SELECTED`;
});

function toggleCheck(){

if(checkedProduct.length===cartProducts.length){
    document.querySelector('#select-all').checked=true;
    document.querySelector('#select-all').indeterminate=false;
    document.querySelector('.check-div').classList.remove('indeterminate');
}

else if(checkedProduct.length===0){
    document.querySelector('#select-all').checked=false;
    document.querySelector('#select-all').indeterminate=false;
    document.querySelector('.check-div').classList.remove('indeterminate');
}

else{
    document.querySelector('#select-all').checked=false;
    document.querySelector('#select-all').indeterminate=true;
    document.querySelector('.check-div').classList.add('indeterminate');
}
document.querySelector('.item-select').innerHTML=`${checkedProduct.length}/${cartProducts.length} ITEMS SELECTED`;
}
Tocheck();
toggleCheck();
}

if(JSON.parse(localStorage.getItem("isLogin"))){
    addCart();
    syncBtnCart();
    syncBtn();
}

else{
    window.location.href=`../html/profile.html`;
}


