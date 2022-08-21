$(window).on('load',function(event) {
    $('.loadingBx').delay(500).fadeOut('fast');
});

const giamSL = document.getElementsByClassName('o-minus')
const themSL = document.getElementsByClassName('o-plus')
const htmlSoluong = document.getElementsByClassName('o-inputnum')

for (let i = 0; i < giamSL.length; i++) {
    themSL[i].addEventListener('click', function () {
        const soLuong = htmlSoluong[i].innerHTML
        if (soLuong < 99) {
            totalSL = soLuong * 1 + 1;
            htmlSoluong[i].innerHTML = totalSL
        }
    })
}

for (let i = 0; i < giamSL.length; i++) {
    giamSL[i].addEventListener('click', function () {
        const soLuong = htmlSoluong[i].innerHTML
        if (soLuong > 1) {
            totalSL = soLuong * 1 - 1;
            htmlSoluong[i].innerHTML = totalSL
        }
    })
}


// Thêm bình luận 
var checkCMT = 0;
const showaddComment = document.getElementById('o-modalcomments')
const addComment = document.getElementById('o-addcomment')
const hideaddComment = document.getElementById('close-btn')
const newComment = document.getElementById('submitform')
addComment.addEventListener('click', function () {
    showaddComment.classList.add('open')
})
hideaddComment.addEventListener('click', function () {
    if (confirm("Bạn có muốn thoát bình luận") == true) {
        showaddComment.classList.remove('open')
    }
})

function xoaBL() {
    if (confirm("Bạn chắc xóa không?") == true) {
        let t = document.getElementsByClassName("o-comment")[0]
        t.remove()
        checkCMT = 0;
    }
}
newComment.addEventListener('click', function () {

    showaddComment.classList.remove('open')
    if (checkCMT == 0) {
        const tenCMT = document.getElementById('o-nme').value
        const ndCMT = document.getElementById('o-msg').value

        var d= new Date()
        let date = d.getDate()
        let month = d.getMonth() + 1
        let year = d.getFullYear()

        let h = `
                    <div class="o-flex o-comment">
                        <div class="o-cmt-avatauser"><img src="/images/user4.jpeg" alt="User"></div>
                        <div class="o-cmt">
                            <div class="o-cmt-nameuser">${tenCMT}</div>
                            <div class="o-cmt-date">${date}/${month}/${year}</div>
                            <div class="o-cmt-text">${ndCMT}</div>
                            <div onclick="xoaBL()" style="opacity: 0.6; font-size:10px; cursor: pointer" ><i>Xóa bình luận</i></div>
                        </div>
                    </div>
                `
        let t = document.querySelector('.o-comment:first-child');
        t.insertAdjacentHTML("beforebegin", h);
        checkCMT = 1
    }
    else alert('Bạn đã bình luận rồi!!!!')
})

// Cart
const addCart = document.getElementsByClassName('o-cart') //Nút thêm giỏ hàng
const cartName = document.getElementsByClassName('o-namefood') // Tên hàng
const cartPrice = document.getElementsByClassName('o-price') // Giá hàng
const cartImg = document.getElementsByClassName('o-imgfood') // Ảnh của hàng
const cartCount = document.getElementsByClassName('o-inputnum') // Số lượng
const Cart = document.getElementById('o-cart')
var SLcart =0
function tinhTong() {
    var totalCartprice = document.querySelectorAll('#o-cart .cartprice')
    var totalCartcount = document.querySelectorAll('#o-cart input')
    var totalCart = document.getElementById('o-total')
    var tinhTong = 0
    for (let i = 0; i < totalCartprice.length; i++) {
        tinhTong = tinhTong + totalCartprice[i].innerHTML * totalCartcount[i].value
    }
    totalCart.innerHTML = tinhTong + '.000'
}

for (let i = 0; i < addCart.length; i++) {
    addCart[i].addEventListener('click', function () {
        var cartNameT = document.querySelectorAll('#o-cart h4')
        for (let y = 0; y < cartNameT.length; y++) {
            if (cartName[i].innerHTML == cartNameT[y].innerHTML) {
                let cartCountT = document.querySelectorAll('#o-cart input')
                cartCountT[y].value = cartCountT[y].value * 1 + cartCount[i].innerHTML * 1
                Cart.classList.add('show')
                showCartbtn.classList.add('showcarthide')
                
                tinhTong()
                return
            }
        }

        let h = `
            <tr class="cartmore">
                <td><img style="width: 60px; padding: 10px" src="${cartImg[i].src}" alt="Giỏ hàng"></td>
                <td><h4>${cartName[i].innerHTML}</h4></td> 
                <td><input onchange="tinhTong()" style="width:40px; " type="number" value="${cartCount[i].innerHTML}" min="1"></td>
                <td><span class="cartprice">${cartPrice[i].innerHTML}</span><sup>đ</sup></td>
                <td onclick="deleteCart(this)" style="padding: 2px; opacity: 0.7; cursor: pointer;" ><i>Xóa</i></td>
            </tr>
        `
        let t = document.querySelector('#o-cart tr:first-child');
        t.insertAdjacentHTML("afterend", h);
        SLcart++
        Cart.classList.add('show')
        showCartbtn.classList.add('showcarthide')
        tinhTong()
    })
}
// Xóa Cart
function deleteCart(e) {
    e.parentElement.remove()
    SLcart--
    tinhTong()
}

//Hiện Cart
const hideCartbtn = document.getElementById('closecart-btn')
const showCartbtn =document.getElementById('showcart-btn')
hideCartbtn.addEventListener('click', function(){
    Cart.classList.remove('show')
    showCartbtn.classList.remove('showcarthide')
})  

showCartbtn.addEventListener('click', function(){
    Cart.classList.add('show')
    showCartbtn.classList.add('showcarthide')
})

//Lấy thông tin khách hàng
const payBtnmain =document.querySelector('.o-infor .o-pay')
const payBtncart =document.querySelector('#o-cart .o-pay')
const payForm =document.getElementById('forminfos')
const closepayForm =document.getElementById('closeForm-btn')

payBtnmain.addEventListener('click', function(){
    payForm.classList.add('open')
})

payBtncart.addEventListener('click', function(){

    if(SLcart=='0'){
        alert('Bạn không có món ăn trong giỏ hàng!!!!!')
    }
    else{
        payForm.classList.add('open')
    }
    
})
closepayForm.addEventListener('click',function(){
    if (confirm('Bạn có muốn dừng mua hàng???')== true){
        payForm.classList.remove('open')
    }
})