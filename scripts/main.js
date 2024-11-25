const products = [
{id:1,img: "images/whiskys/whisky_meikle.jpg",title: "Rượu Whisky Meikle Tòir The Original 5",price: "1.450.000 ₫",},
{id:2,img: "images/whiskys/meikle_sherry.jpg",title: "Rượu Whisky Meikle Tòir The Sherry 5",price: "1.450.000 ₫",},
{id:3,img: "images/whiskys/meikle_chinquapin.jpg",title: "Rượu Whisky Meikle Tòir The Chinquapin 5",price: "1.450.000 ₫",},
{id:4,img: "images/champagnes/charles_heidsieck_brut_reserve.jpg",title: "Rượu Champagne Charles Heidsieck Brut Réserve",price: "2.105.000 ₫",},
{id:5,img: "images/champagnes/alfred _gratien.jpg",title: "Rượu sâm panh Champagne Alfred Gratien Blanc de Blancs 2015",price: "3.509.000 ₫",},
{id:6,img: "images/whiskys/Whisky_Glenallachie.jpg",title: "Rượu Whisky Glenallachie 2010 Oloroso Puncheon Cask",price: "4.500.000 ₫",},
{id:7,img: "images/champagnes/powell_son.jpg",title: "Rượu Vang Đỏ Powell & Son Barossa Valley Shiraz",price: "1.056.000 ₫",},
{id:8,img: "images/champagnes/y_castellare.jpg",title: "Rượu Vang Ý Castellare Di Castellina Chianti Classico Riserva",price: "1.452.000 ₫",},
{id:9,img: "images/vodkas/absolut_citron.jpg",title: "Vodka Absolut Citron",price: "370.000 ₫",},
{id:10,img: "images/vodkas/absolut_extrakt.jpg",title: "Vodka Absolut Extrakt",price: "550.000 ₫",},
{id:11,img: "images/vodkas/absolut_kurant.jpg",title: "Vodka Absolut Kurant",price: "390.000 ₫",},
{id:12,img: "images/vodkas/absolut_vanilia.jpg",title: "Vodka Absolut Vanilla",price: "390.000 ₫",},
{id:13,img: "images/whiskys/glenallachie_batch.jpg",title: "Rượu Whisky Glenallachie 10 (Batch 11)",price: "1.930.000 ₫",},
{id:14,img: "images/whiskys/kilchoman_machir_bay.jpg",title: "Rượu Whisky Kilchoman Machir Bay",price: "1.500.000 ₫",},
{id:15,img: "images/champagnes/grattamacco_bolgheri_vermentino.jpg",title: "Rượu Vang Ý Grattamacco Bolgheri Vermentino",price: "1.258.000 ₫",},
{id:16,img: "images/champagnes/botrosecco_maremma_2018.jpg",title: "Hộp 1 chai rượu vang đỏ Le Mortelle Botrosecco 2019",price: "799,000 đ",},
{id:17,img: "images/champagnes/auslese_riesling.jpg",title: "Rượu vang Đức Kinheimer Hubertuslay Auslese Riesling 2018",price: "1.936.000 ₫",},
{id:18,img: "images/khac/love.jpg",title: "Rượu Vang Ý 60 Sessantanni Limited Edition (24 Karat Gold)",price: "1.870.000 ₫",},
{id:19,img: "images/whiskys/glengoyne_10_year_old.jpg",title: "Rượu Whisky Glengoyne 10 Year Old",price: "2.780.000 ₫",},
{id:20,img: "images/whiskys/tamdhu_12_year_old.jpg",title: "Rượu Whisky Tamdhu 12 Year Old",price: "2.780.000 ₫",},];

const carts =[];
var banner = document.querySelector(".banner");
var row =document.getElementById("my-card");
row.innerHTML='';

products.forEach(item=>{
    var newProduct = document.createElement("div");
    newProduct.classList.add('cards')
    newProduct.classList.add('col-6');
    newProduct.classList.add('col-sm-6');
    newProduct.classList.add('col-md-4');
    newProduct.classList.add('col-lg-3');
    newProduct.classList.add('mb-4');
    //newProduct.classList.add('zoom');
    //newProduct.classList.add('show-on-scroll');
    newProduct.innerHTML=`
    <div class="card" >
    <img src="${item.img}" alt="ảnh rượu" class="image-card card-img-top w-100">
    <div class="card-body">
        <h4 class="card-tile mb-3">${item.title}</h4>
        <div class="row">
            <p class="cart-text text-danger col-6">${item.price}</p>
            <button class="btn btn-all col-6 text-white" onclick="addToCart(${item.id})">Mua ngay</button>
        </div>
    </div>    
</div>`
    row.appendChild(newProduct);
});

// search product in list product
var search = document.querySelector('.input-group input');
search.addEventListener('input', function(event){
    let strSearch = event.target.value.trim().toLowerCase();
    let listProduct = document.querySelectorAll('.cards');
    listProduct.forEach(item=>{
        if(item.innerText.toLowerCase().includes(strSearch)){
            item.classList.remove('hide');
        }else{
            item.classList.add('hide');
        }
    });
});
var animationElement = document.querySelectorAll('.show-on-scroll')

function isElInWindow(element) {
    console.log(element)

    var rect= element.getClientRects()[0]
    var heightScreen = window.innerHeight
    if(!(rect.bottom <0 || rect.top > heightScreen)){
        element.classList.add('start')
    }else{
        element.classList.remove('start')
    }
}
function checkAnimation(){
    animationElement.forEach(item=>{
        isElInWindow(item)
    })
}
window.onscroll = checkAnimation

// xử lý nút nhấn slide
document.addEventListener('DOMContentLoaded', function () {
    let slides = document.querySelectorAll('.slideshow .slide');
    let currentSlide = 0;
    slides[currentSlide].classList.add('active');

    document.querySelector('.next-slide').addEventListener('click', function () {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    });

    document.querySelector('.prev-slide').addEventListener('click', function () {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
          let dropdownItems = document.querySelectorAll('.dropdown-item');
          dropdownItems.forEach(item => {
              item.addEventListener('click', (event) => {
                  event.preventDefault();

                  window.scrollTo({
                    top: 500,
                    behavior: 'smooth'
                  });
                  let option =  event.target.textContent.toLowerCase();
                  let listProduct = document.querySelectorAll('.cards');
                  listProduct.forEach(item=>{
                      if(option === 'tất cả sản phẩm'){
                        item.classList.remove('hide');
                      }else{
                        if(item.innerText.toLowerCase().includes(option)){
                            item.classList.remove('hide');
                        }else{
                            item.classList.add('hide');
                        }
                     } 
                  });
            });
    });
});

function addToCart(productId){
    const product = products.find(item =>item.id === productId);
    if(product){
        carts.push(product);
    }
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var formIsValid = true;

    if (!validateEmail(email)) {
        formIsValid = false;
        alert('Email không hợp lệ!');
    }

    if (password.trim() === '') {
        formIsValid = false;
        alert('Mật khẩu không được để trống!');
    }
    if (formIsValid) {
        this.submit();
    }
});
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
} 
