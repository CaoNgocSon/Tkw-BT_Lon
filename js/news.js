
const nFoodbtn=document.getElementById('nclonefoodbtn')
const nDrinkbtn =document.getElementById('nclonedrinkbtn')
const cloneFood =document.getElementById('clonefoods')
const cloneDrink =document.getElementById('clonedrinks')

nFoodbtn.addEventListener('click',function (){
    nDrinkbtn.classList.remove('active')
    nFoodbtn.classList.add('active')
    cloneDrink.classList.remove('active')
    cloneFood.classList.add('active')

}) 
nDrinkbtn.addEventListener('click',function(){
    nFoodbtn.classList.remove('active')
    nDrinkbtn.classList.add('active')
    cloneFood.classList.remove('active')
    cloneDrink.classList.add('active')
    
})