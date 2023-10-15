let input=document.querySelector("#email");
let btn=document.querySelector("#btn");
let error=document.querySelector("#volid-error");
let container=document.querySelector(".container");
btn.addEventListener("click",()=>{
   let value=input.value;
    if (!value) {
        input.style.border="1px solid red";
        input.style.background="rgba(165, 42, 42, 0.363)";
        error.innerHTML="volid email requier";


    }else{
        let validation=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(validation.test(value)){
          container.style.display="none";
          conValid.style.display="flex";
          input.style.background="rgba(165, 42, 42, 0.363)";
          validEmail.innerHTML=value;


        }else{
            input.style.border="1px solid red";
            error.innerHTML="volid email requier"
        }
       
    }
})
input.addEventListener('input',()=>{
   ;
    let validation=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(validation.test(input.value)){
      input.style.border="1px solid green";
       error.innerHTML="good";
       error.style.color="green";
       input.style.background="wight";

       btn.classList.add("active");
    }else{
        input.style.border="1px solid red";
        error.innerHTML="volid email requier";
        error.style.color="red"
        input.style.background="rgba(165, 42, 42, 0.363)";

       btn.classList.remove("active");

    }
})

let validEmail=document.querySelector('#valid-email');
let btnValid=document.querySelector('#btn-valid');
let conValid=document.querySelector('.con-vaild');

btnValid.addEventListener('click',()=>{
    container.style.display="flex"; 
     conValid.style.display="none";
})