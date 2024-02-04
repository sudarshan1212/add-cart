cart=document.querySelector('#cart')
close=document.querySelector('#close')
cartbox=document.querySelector('#cartbox')
cartCount=document.querySelector('#cartCount')

cartBtn=document.querySelector('#cartBtn')
addRed=document.querySelector('#addRed')
removeRed=document.querySelector('#removeRed')
addBlack=document.querySelector('#addBlack')
removeBlack=document.querySelector('#removeBlack')
addBlue=document.querySelector('#addBlue')
removeBlue=document.querySelector('#removeBlue')
addWhite=document.querySelector('#addWhite')
removewhite=document.querySelector('#removewhite')

cartList=document.querySelector('#cartList')
Button=document.querySelector('#Button')
addBlack.innerText="add to cart"
// console.log(cartList.children);

let count=0
function show(){
    // notesCont.innerHTML=localStorage.getItem("notes")
    // cartCount.innerHTML=localStorage.getItem("notes")
    
}
show()

function upadate(){
    // localStorage.setItem("notes", cartList.innerHTML)
    // localStorage.setItem("notes", cartCount.innerHTML)    
}
//black
function jblBlack(){
    // addBlack.innerHTML="add to cart"
    a(removeBlack,addBlack,1)
} 
function jblRed(){
    a(removeRed,addRed,3)       
}
function jblBlue() {
    a(removeBlue,addBlue,4)    
    
}
function jblWhite() {
    a(removewhite,addWhite,2)    
    
}
function removerblack(){
    r(removeBlack,addBlack) 
    upadate()
 }
 function removerred(){
    r(removeRed,addRed)
}
function removerBlue(){
    r(removeBlue,addBlue)
}
function removerWhite(){
    r(removewhite,addWhite)
}





function a(remove,add,no){
    open([remove])
    closes([add])
    
    cartCount.innerText=+cartCount.innerText+1
    setTimeout(() => {
        cart.classList.add('scale-125','duration-75')
       
    }, 10);   
    setTimeout(() => {
        cart.classList.remove('scale-125' ,'duration-75')
       
    }, 200);   
    // "images/favorite-1.png"
    let p=document.createElement('p')
    let p1=document.createElement('p')
    let img2=document.createElement('img')
    let img=document.createElement('img')
    let div=document.createElement('div')
    div.classList.add('border-2','p-8','justify-between','flex','items-center','text','center','mt-2')
    img2.classList.add("w-7" ,"hover:scale-110" ,"duration-100" ,"hover:shadow-lg")
    img.classList.add('w-14','h-14')
    img.src= `images/favorite-${no}.png`
    img2.src="images/delete.png"
    p.innerHTML="Jblblack"
    p1.innerHTML="MRP ₹59900.00 (Incl. of all taxes)"
    cartList.appendChild(div)
    div.appendChild(img)
    div.appendChild(p)
    div.appendChild(p1)
    div.appendChild(img2)
    // img2.tagName
    // console.log(img2.tagName);
    div.addEventListener('click',function(e){
        if(e.target.tagName=="IMG"){
            e.target.parentElement.remove()
            cartCount.innerText=+cartCount.innerText-1
            closes([remove])
            open([add])

        }
    })
    remove.addEventListener('click',()=>{
        div.remove()
    })
}
function r(remove,add){
    closes([remove])
    open([add]) 
    if(cartCount.innerText==0){
        cartCount.innerText='0'
    }else{
        cartCount.innerText=+cartCount.innerText-1
    }
 }
function popup(){
    open([cartbox])
}
function popupno(){
    closes([cartbox])
    // cartbox.classList.add('hidden')
}
function open(elements) {
    elements.forEach(element => {
        element.classList.remove('hidden')
    });
}
function closes(elements) {
    elements.forEach(element => {
        element.classList.add('hidden')
    });
}




 /* let p=document.createElement('p')
    let p1=document.createElement('p')
    let img2=document.createElement('img')
    let img=document.createElement('img')
    let div=document.createElement('div')
    div.classList.add('border-2','p-8','justify-between','flex','items-center','text','center','mt-2')
    img2.classList.add("w-7" ,"hover:scale-110" ,"duration-100" ,"hover:shadow-lg")
    img.classList.add('w-14','h-14')
    img.src="images/favorite-3.png"
    img2.src="images/delete.png"
    p.innerHTML="Jblblack"
    p1.innerHTML="MRP ₹59900.00 (Incl. of all taxes)"
    cartList.appendChild(div)
    div.appendChild(img)
    div.appendChild(p)
    div.appendChild(p1)
    div.appendChild(img2)
    // img2.tagName
    // console.log(img2.tagName);
    div.addEventListener('click',function(e){
        if(e.target.tagName=="IMG"){
            // count=
            e.target.parentElement.remove()
            // if(cartCount.innerText==0){
            //     cartCount.innerText='0'
            // }else{
            //     cartCount.innerText=+cartCount.innerText-1
            // }
            cartCount.innerText=+cartCount.innerText-1
            closes([removeBlack])
            open([addBlack])

        }
    })
    removeBlack.addEventListener('click',()=>{
        div.remove()
    })*/