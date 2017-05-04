// <img src="     ">
var productMini = document.getElementById('products_mini').getElementsByTagName('img');
var productBox = document.getElementById('product_box');

for(var i=0; i<productMini.length; i++){
     productMini[i].onclick = fShowBigImg;
}

function fShowBigImg(){
    for(var i=0; i<productMini.length; i++){
        productMini[i].classList.remove('active');
    }
    var img = this.src;
    this.classList.add('active');
    // productBox.innerHTML = '<img src="'+img+'">';
    productBox.getElementsByClassName('big_img')[0].src = img;
}





// Задание с массивом изображений отдельное - отдельнвые блоки и скрипт - для меня
var productBoxAuto = document.getElementById('product_box_auto');
var productImgMini =['product-1.jpg','product-2.jpg','product-3.jpg','product-4.jpg','product-5.jpg','product-6.jpg','product-7.jpg','product-8.jpg'];
productBoxAuto.innerHTML = '<img src="images/'+productImgMini[0]+'">';

fShowImg();
function fShowImg() {
    var imgsMini = [];
    for(var i=0; i<productImgMini.length; i++){
        imgsMini += '<img src="images/'+productImgMini[i]+'"> ';
    }
    document.getElementById('products_mini_auto').innerHTML = imgsMini;
}

var productImgMiniAuto = document.getElementById('products_mini_auto').getElementsByTagName('img');

for(var i=0; i<productImgMiniAuto.length; i++){
    productImgMiniAuto[i].onclick = fShowBigImgAuto;
}

function fShowBigImgAuto(){
    for(var i=0; i<productImgMiniAuto.length; i++){
        productImgMiniAuto[i].classList.remove('active');
    }
    var img = this.src;
    this.classList.add('active');
    productBoxAuto.innerHTML = '<img src="'+img+'">';
}
