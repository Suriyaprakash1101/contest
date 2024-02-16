const Cart=document.querySelector('#cart-icon');
const cart=document.querySelector('.cart');
const Close=document.querySelector('#cart-close');
Cart.addEventListener('click',()=>{
    cart.classList.add('cart-active')
});
Close.addEventListener('click',()=>{
    cart.classList.remove('cart-active')
});
document.addEventListener('DOMContentLoaded',Load);

function Load(){
    Content();
}
function Content(){
    
    let btnRemove=document.querySelectorAll('.cart-remove');
    btnRemove.forEach((btn)=>{
        btn.addEventListener('click',Remove)
    });
    
    let qtyElements=document.querySelectorAll('.cart-quantity');
    qtyElements.forEach((input)=>{
        input.addEventListener('change',changevolume)
    });
    
}

function Remove(){
    if(confirm('Are you sure to Remove')){
    this.parentElement.remove();
    }
}


