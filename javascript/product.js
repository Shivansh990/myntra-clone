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


const param=new URLSearchParams(window.location.search);
const query=param.get('search');
if (query) {
  document.querySelector('.search-bar').value = query;
  searchBar(query);
}

function performSearch() {
  const newQuery = document.querySelector('.search-bar').value.trim().toLowerCase();
  if (newQuery) {
    searchBar(newQuery); 
  }
}



function searchBar(input){
  document.querySelector('.search-bar').value="";
  let filterP=products.filter(p=>{
    return (
      p.brand.toLowerCase().includes(input)|| 
      p.type.toLowerCase().includes(input)||
      p.category.toLowerCase().includes(input)||
      p.product.toLowerCase().includes(input)
    );
  });


  innerHtmlProduct="";
  itemList.innerHTML = "";

  document.querySelector('.t-4').innerHTML=`${input}`;
  document.querySelector('.before-item1').innerHTML=`
  <a href="../html/index.html" class="t-1">Home</a><span class="t-2">/</span><a href="../html/product.html" class="t-1">Myntra</a>
  <span class="t-2">/</span><span class="t-3">${input}</span>`;

  if(filterP.length){
   addproduct(filterP);
   document.querySelector('.t-6').innerHTML=`${filterP.length} items`;
  }
  else{
    window.location.href=`../html/notFound.html`
  }

  syncBtn();
  syncBtnCart();
  itemLength();

}

document.querySelector('.search-bar').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    performSearch(); 
  }
});

const filterState = {
  price:"10000",
  category: null,
  discount: null,
  type: [],
  brand: [],
};

let clear=false;

const scroll = document.getElementById('min');
const priceDisplay = document.getElementsByClassName('text-4')[0];

  function upgrade(){
    let val=((scroll.value - scroll.min)/(scroll.max-scroll.min))*100;
    scroll.style.background = `linear-gradient(to right, #ff3f6c ${val}%, #ccc ${val}%)`;
  }

  scroll.addEventListener('input', () => {
    const value = scroll.value;
    priceDisplay.innerHTML = `₹0 - ₹${value}+`; 
    filterState.price=scroll.value;
    clear=true;
    filterProudcts(filterState);
    upgrade();
  });

  upgrade();


    document.querySelectorAll('.bb-1').forEach(radio => {
      radio.addEventListener('change', () => {
        const selected = document.querySelector('.bb-1:checked');
        if (selected) {
          filterState.category=selected.value;
          clear=true;
          filterProudcts(filterState);
        } 
      });
    });
 
    document.querySelectorAll('.bb-2').forEach(radio => {
      radio.addEventListener('change', () => {
        const selected = document.querySelector('.bb-2:checked');
        if (selected) {
          filterState.discount=selected.value;
          clear=true;
          filterProudcts(filterState);
        }
      }); 
    });

    document.querySelectorAll('.cc-1').forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        const selected = Array.from(document.querySelectorAll('.cc-1:checked')).map(a=>a.value);
        if (selected) {
          filterState.type=selected;
          clear=true;
          filterProudcts(filterState);
        } 
      });
    });

    document.querySelectorAll('.dd-1').forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        const selected = Array.from(document.querySelectorAll('.dd-1:checked')).map(a=>a.value);
        if (selected) {
          filterState.brand=selected;
          clear=true;
          filterProudcts(filterState);
        }
      });
    });

  function filterProudcts({price,category,discount,type,brand}){

    
  let filtered=[...products];
  
  if(category!=null){
    filtered=filtered.filter(p => p.category.toLowerCase().trim()===category.toLowerCase().trim());
  }

  if(discount!=null){
    filtered=filtered.filter(p => Number.parseInt(p.offer())>= Number.parseInt(discount));
  }

  if(price){
    filtered=filtered.filter(p => Number.parseInt(p.discountPrice)<=Number.parseInt(price));
  }

  if (type && type.length > 0) {
  filtered = filtered.filter(p => type.some(t => p.type.toLowerCase().includes(t.toLowerCase())));
}

if (brand && brand.length > 0) {
  filtered = filtered.filter(p => brand.some(b => p.brand.toLowerCase().includes(b.toLowerCase())));
}

if(clear){ 
  document.querySelector('.t-7').style.display="inline";
  document.querySelector('.t-7').addEventListener('click',()=>{
    clear=false;
    filterState.price = "10000";
    filterState.category = null; 
    filterState.discount = null;
    filterState.type = [];
    filterState.brand = [];

    priceDisplay.innerHTML = `₹0 - ₹${10000}+`;

    document.querySelectorAll('.bb-1:checked','.bb-2:checked').forEach(r => r.checked=false);
    document.querySelectorAll('.cc-1:checked','.dd-1:checked').forEach(r => r.checked=false)


    document.querySelector('.t-7').style.display="none";
    filterProudcts(filterState);
  })
}

 
if(filtered.length>0){
itemList.innerHTML = "";
innerHtmlProduct = "";
  document.querySelector('.before-item1').innerHTML=`
  <a href="../html/index.html" class="t-1">Home</a><span class="t-2">/</span><a href="../html/product.html" class="t-1">Myntra</a>`; 
  addproduct(filtered);
  document.querySelector('.t-6').innerHTML=`${filtered.length} items`;
  syncBtn();
  yncBtnCart();
  itemLength();
   
}
else{
window.location.href=`../html/notFound.html`
}
}


