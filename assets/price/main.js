const toggler = document.querySelector(".toggler");
const starterPrice = document.getElementById("starter-price");
const proPrice = document.getElementById("pro-price");
const enterpisePrice = document.getElementById("enterpise-price")

toggler.addEventListener("change", ()=>{
    if(toggler.checked){
        starterPrice.innerHTML = `R2400 <span> / year </span>`;
        proPrice.innerHTML = `R4200 <span> / year </span>`;
        enterpisePrice.innerHTML = `R6000 <span> / year </span>`;
    }else{
        starterPrice.innerHTML = `R200 <span> / month </span>`;
        proPrice.innerHTML = `R350 <span> / month </span>`;
        enterpisePrice.innerHTML = `R500 <span> / year </span>`;
    }
})