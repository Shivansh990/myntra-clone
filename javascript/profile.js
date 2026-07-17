let checkbox=document.querySelector('.checkbox');
let button=document.querySelector('#btns');
button.disabled=true;
let aftercheck=false;
localStorage.setItem("isLogin","false");

checkbox.addEventListener('change',()=>{
    let selected=document.querySelector('.checkbox:checked');
    if(selected){
        document.querySelector('#btns').classList.add("continue-js");
        document.querySelector('#btns').classList.remove("continue");
        button.disabled=false;
    }
    else{
        document.querySelector('#btns').classList.add("continue");
        document.querySelector('#btns').classList.remove("continue-js");
        button.disabled=true;
    }
});


function afterChecked(){


    document.querySelector('.input-bar-3').addEventListener('input',()=>{
        let names=document.querySelector('.input-bar-3').value.trim();

        if(!(names.length)){
    document.querySelector('.alert-name').style.display="block";
    }
    else{
    document.querySelector('.alert-name').style.display="none";
  
   }
    });

    document.querySelector('.input-bar-2').addEventListener('input',()=>{
        let password=document.querySelector('.input-bar-2').value.trim()

        if(password.length<8){
    document.querySelector('.alert-password').style.display="block";
    }
    else{
    document.querySelector('.alert-password').style.display="none";
   
    }
    });

    document.querySelector('.input-bar-1').addEventListener('input',()=>{
        let number=document.querySelector('.input-bar-1').value.trim();

        if(!(number.length===10)){
    document.querySelector('.alert-number').style.display="block";
    }
    else{
    document.querySelector('.alert-number').style.display="none";
    }
    });

}



function checked(){
let names=document.querySelector('.input-bar-3').value.trim();
let password=document.querySelector('.input-bar-2').value.trim();
let number=document.querySelector('.input-bar-1').value.trim();

console.log(names);

if(password.length<8){
    document.querySelector('.alert-password').style.display="block";
}
else{
    document.querySelector('.alert-password').style.display="none";
}

if(!(number.length===10)){
    document.querySelector('.alert-number').style.display="block";
}
else{
    document.querySelector('.alert-number').style.display="none";
}

if(!(names.length)){
    document.querySelector('.alert-name').style.display="block";
}
else{
    document.querySelector('.alert-name').style.display="none";
}

return (password.length>=8 && number.length===10&& checkbox.checked && names.length>0);
}


button.addEventListener('click',()=>{
    let a=checked(); 
    if(!a){
        if (!aftercheck) {
            afterChecked(); 
            aftercheck = true;
        }
    }
    else{
        localStorage.setItem("isLogin","true");
        let names=document.querySelector('.input-bar-3').value.trim();  
        let password=document.querySelector('.input-bar-2').value.trim();
        let number=document.querySelector('.input-bar-1').value.trim();
        let obj={
            fullName:names,
            password:password,
            number:number
        }
        localStorage.setItem("user",JSON.stringify(obj));
        window.location.replace('../html/index.html');
    }
});

document.querySelector('#eye-slash').addEventListener('click',()=>{
    document.querySelector('#eye-slash1').style.display="none";
    document.querySelector('#eye-open1').style.display="block";
    document.querySelector('.input-bar-2').type="text";
});

document.querySelector('#eye-open').addEventListener('click',()=>{
    document.querySelector('#eye-slash1').style.display="block";
    document.querySelector('#eye-open1').style.display="none";
     document.querySelector('.input-bar-2').type="password";
});

