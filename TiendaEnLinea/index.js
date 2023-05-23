const btnCart= document.querySelector('.container_cart_icon');


const containerCP = document.querySelector('.container_cart');

btnCart.addEventListener('click', () => {
    containerCP.classList.toggle('hiden_cart');
    });

const cartInfo =document.querySelector('.cart_prod');
const RowP = document.querySelector('.row_prod');

//lista de productos
const prod_list= document.querySelector('.container-items');

//arreglos de productos
let todosP=[];
const valorT= document.querySelector('.total-pagar');
const countP= document.querySelector('#Contador-products');



prod_list.addEventListener('click', e=>{
   
    if (e.target.classList.contains('btn_añadir')){
        const product = e.target.parentElement;

        const infoP ={
            quantity: 1,
            title: product.querySelector('.pr').textContent,
            price: product.querySelector('.price').textContent,
        };
        const exist = todosP.some(product => product.title === infoP.title);
     
        if(exist){
            const productos = todosP.map(product=>{
                if(product.title=== infoP.title ){
                    product.quantity++;
                    return product;
                }else {
                    return product;
                }
            })
            todosP=[...productos];
        }else{
            todosP=[...todosP, infoP];
        }
        showHTML();
    }
});

RowP.addEventListener('click', e => {
    if(e.target.classList.contains('close')){
        /*const product = e.target.parentElement;
        const title = product.querySelector('.pr').textContent;

        todosP = todosP.filter(product => product.title != title);
    };*/
    const product = e.target.parentElement;

    const infoP ={
        quantity: 1,
        title: product.querySelector('.pr').textContent,
        price: product.querySelector('.price').textContent,
    };
    const exist = todosP.some(product => product.title !== infoP.title);
 
    if(exist){
        const productos = todosP.map(product=>{
            if(product.title !== infoP.title ){
                product.quantity--;
                return product;
            }else {
                return product;
            }
        })
        todosP=[...productos];
    }else{
        todosP=[...todosP, infoP];
    }


    console.log(todosP);
    showHTML();
}
});


//mostrar HTML
const showHTML = () =>{

    //limpiando 
    RowP.innerHTML = '';
    let totalC=0; 
    let totalP=0;

    todosP.forEach(product =>{
        const containerP =document.createElement('div');
        containerP.classList.add('cart-prod');

        containerP.innerHTML = `
        <div class="inf_cart_prod">
            <span class="c_p_c">${product.quantity}</span>
            <p class="titulo_c"> ${product.title}</p>
            <span class="p_pC">${product.price}</span>
        </div>
        <img src="./image/cancel.svg" alt="" class="close"></img>
    `;


    RowP.append(containerP);

    totalC= totalC + parseInt(product.quantity * product.price.slice(1));
    totalP = totalP + product.quantity;
    });

    valorT.innerText = `$${totalC}`;
    countP.innerText= totalP;

};