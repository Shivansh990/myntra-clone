let products = document.querySelectorAll('.header1-item');
const noOfItem = 5;
let startInx = 0;

let btn_1=document.querySelector('.scroll-1-first');
let btn_2=document.querySelector('.scroll-1-second');

function showitem(start) {
  products.forEach((product, index) => {
    if (index >= start && index < start + noOfItem) {
      product.classList.remove('js-hidden');
    } else {
      product.classList.add('js-hidden');
    }
  });
  if(startInx===0){
    btn_1.classList.add('active');
    btn_2.classList.remove('active');
    
  }
  
else{
    btn_1.classList.remove('active');
    btn_2.classList.add('active');
  }
}

 
btn_1.addEventListener('click',() => {
startInx=0;
showitem(startInx);
});

btn_2.addEventListener('click',() => {
startInx=5;
showitem(startInx);
});


function showfront() {
  startInx += noOfItem;
  if (startInx >= products.length) {
    startInx = 0;
  }
  showitem(startInx);
}

btn_1.classList.add('active');
showitem(startInx);

setInterval(showfront, 5000);



document.querySelector('#l1').addEventListener('mouseover',() =>{
  document.querySelector('#l1').style.borderBottom='4px solid #ee5f73'
});

document.querySelector('#l1').addEventListener('mouseout',() =>{
  document.querySelector('#l1').style.borderBottom='4px solid transparent'
});

document.querySelector('#l2').addEventListener('mouseover',() =>{
  document.querySelector('#l2').style.borderBottom='4px solid #fb56c1'
});

document.querySelector('#l2').addEventListener('mouseout',() =>{
  document.querySelector('#l2').style.borderBottom='4px solid transparent'
});


document.querySelector('#l3').addEventListener('mouseover',() =>{
  document.querySelector('#l3').style.borderBottom='4px solid #f26a10'
});

document.querySelector('#l3').addEventListener('mouseout',() =>{
  document.querySelector('#l3').style.borderBottom='4px solid transparent'
});


document.querySelector('#l4').addEventListener('mouseover',() =>{
  document.querySelector('#l4').style.borderBottom='4px solid #f2c210'
});

document.querySelector('#l4').addEventListener('mouseout',() =>{
  document.querySelector('#l4').style.borderBottom='4px solid transparent'
});


document.querySelector('#l5').addEventListener('mouseover',() =>{
  document.querySelector('#l5').style.borderBottom='4px solid #0db7af'
});

document.querySelector('#l5').addEventListener('mouseout',() =>{
  document.querySelector('#l5').style.borderBottom='4px solid transparent'
});


document.querySelector('#l6').addEventListener('mouseover',() =>{
  document.querySelector('#l6').style.borderBottom='4px solid #0db7af'
});

document.querySelector('#l6').addEventListener('mouseout',() =>{
  document.querySelector('#l6').style.borderBottom='4px solid transparent'
});

document.querySelector('#l7').addEventListener('mouseover',() =>{
  document.querySelector('#l7').style.borderBottom='4px solid #ff3f6c'
});

document.querySelector('#l7').addEventListener('mouseout',() =>{
  document.querySelector('#l7').style.borderBottom='4px solid transparent'
});


document.querySelector('.link-2').addEventListener('mouseover',() =>{
  document.querySelector('#profiles').style.borderBottom='4px solid #ee5f73';

  let user=JSON.parse(localStorage.getItem("user"));

  if(user){
    document.querySelector('.p-name').innerHTML=`Hello ${user.fullName}`;
    document.querySelector('.p-number').innerHTML=`${user.number}`;
    document.querySelector('.phover-container2').style.display="block";
  }

  else{
    document.querySelector('.phover-container1').style.display="block";
  }

  document.querySelector('.p-button').addEventListener('click',()=>{
    window.location.href=`../html/profile.html`;
  });

  document.querySelector('.p-button1').addEventListener('click',()=>{
    localStorage.removeItem("user");
    localStorage.removeItem("isLogin");
    window.location.href=`../html/index.html`;
  });
}); 


document.querySelector('.link-2').addEventListener('mouseout',() =>{
  document.querySelector('#profiles').style.borderBottom='4px solid transparent';
  document.querySelector('.phover-container1').style.display="none";
  document.querySelector('.phover-container2').style.display="none";
});





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

