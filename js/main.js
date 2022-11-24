const body = document.body
const mobileMenu = document.querySelector(".mobile-menu")
const mobileMenuBg = document.querySelector(".mobile-menu-bg")
const hamburgerMenu = document.querySelector(".hamburger-button")
const navLogo = document.querySelector(".nav-logo")
const header = document.querySelector(".header")
const mobileNav = document.querySelector(".mobile-nav")
const mobileNavLogo = document.querySelector(".mobile-nav-logo")
const mobileNavButton = document.querySelector(".mobile-hamburger-button")
const bookmarkButton = document.querySelector(".bookmark-btn")
const backThisProject = document.querySelector(".back-this-project")
const closeButton = document.querySelector(".close-button")
const btpRadioButton = document.querySelectorAll(".btp-radio")
const btpBox = document.querySelectorAll(".btp-box")
const bottomBox = document.querySelectorAll(".btp-box-bottom")
const pledgeButton = document.querySelectorAll(".pledge-btn")
const supportCompleted = document.querySelector(".support-completed")
const supportCompletedButton = document.querySelector(".back-project-btn")
const bookmarkToggle = document.querySelector(".bookmark-toggle")
const bookmarkP = document.querySelector(".bookmark-p")
const svgCircle = document.querySelector(".svg-circle")
const svgPath = document.querySelector(".svg-path")
const pledgeAmount = document.querySelectorAll(".pledge-amount")
const num2 = document.querySelector(".num2")
const num3 = document.querySelector(".num3")
const errorLabel1 = document.querySelector(".error-label1")
const errorLabel2 = document.querySelector(".error-label2")

const radioBtn1 = document.querySelector(".radio-btn-1")
const radioBtn2 = document.querySelector(".radio-btn-2")
const radioBtn3 = document.querySelector(".radio-btn-3")
const radioBtn4 = document.querySelector(".radio-btn-4")
const btpBox1 = document.querySelector(".box-1")
const btpBox2 = document.querySelector(".box-2")
const btpBox3 = document.querySelector(".box-3")
const bottomBox1 = document.querySelector(".bottom-1")
const bottomBox2 = document.querySelector(".bottom-2")
const bottomBox3 = document.querySelector(".bottom-3")

hamburgerMenu.addEventListener('click', function(){
    mobileMenu.classList.add('active');
    mobileMenuBg.classList.add('active');
    mobileNav.classList.add('active=flex');
    mobileNavButton.classList.add('active');
    mobileNavLogo.classList.add('active');
    // body.classList.add('overflow');
    hamburgerMenu.classList.add('hidden');
})

mobileNavButton.addEventListener('click', function(){
    hamburgerMenu.classList.remove('hidden');
    mobileMenu.classList.remove('active');
    mobileMenuBg.classList.remove('active');
    mobileNav.classList.remove('active=flex');
    mobileNavButton.classList.remove('active');
    mobileNavLogo.classList.remove('active');
    body.classList.remove('overflow');
})

bookmarkButton.addEventListener('click', function(){
    backThisProject.classList.add('active');
    mobileMenuBg.classList.add('active');
})

closeButton.addEventListener('click', function(){
    backThisProject.classList.remove('active');
    mobileMenuBg.classList.remove('active');
})

for(let i=0;i<pledgeButton.length;i++) {
    pledgeButton[i].addEventListener('click', function(){
        console.log(num2.value, num3.value);
        supportCompleted.classList.add('active');
        mobileMenuBg.classList.add('active');
        backThisProject.classList.remove('active');

        var inputValue = pledgeAmount[i].value;
        var totalMoney = document.getElementById("total-money").innerHTML.replace(/\D/g,'');
        var totalMoneyNumber = Number(totalMoney);
        var update = Number(totalMoney) + Number(inputValue);
        var update1 = update.toString();
        console.log(inputValue, update1)
        if(update1.length<6) {
            var updateOutput = update1.slice(0, 2) + "," + update1.slice(2, update1.length);
        } else if (update1.length>=6) {
            var updateOutput = update1.slice(0, 3) + "," + update1.slice(3, update1.length);
        }
        document.getElementById("total-money").innerHTML = "$" + updateOutput;

        if(update !== totalMoneyNumber) {
            console.log("changed");
            var totalBacked = document.getElementById("total-backed").innerHTML.replace(/\D/g,'');
            var totalBackedNumber = Number(totalBacked);
            var totalBackedNew = totalBackedNumber + 1;
            var totalBackdNewString = totalBackedNew.toString();
            if(totalBackdNewString.length>=4) {
                var totalBackedFinal = totalBackdNewString.slice(0, 1) + "," + totalBackdNewString.slice(1,4);
            } else if (totalBackdNewString.length<4) {
                var totalBackedFinal = totalBackdNewString;
            }
            document.getElementById("total-backed").innerHTML = totalBackedFinal;
        }
        if(100000>=update>0) {
            var width = update/1000;
            var widthFinal = Math.floor(width);
            if (widthFinal < 1) {
                widthFinal = 1;
            }
            var widthFinalString = widthFinal.toString();
            var widthFinalFinal = widthFinalString + "%";
            document.querySelector(".backed-bar-bar").style.width = widthFinalFinal ;
        } else if ( update >= 100000) {
            document.querySelector(".backed-bar-bar").style.width = "100%" ;
        }
        document.getElementById("myForm").reset();
    })
}
supportCompletedButton.addEventListener('click', function(){
    supportCompleted.classList.remove('active');
    mobileMenuBg.classList.remove('active');
})


bookmarkToggle.addEventListener('click', function(){
    if(bookmarkP.innerHTML === "Bookmark") {
        bookmarkP.innerHTML = "Bookmarked";
        svgPath.setAttribute("fill", "#fff");
    } else {
        bookmarkP.innerHTML = "Bookmark";
        svgPath.setAttribute("fill", "#B1B1B1");
    }
    bookmarkP.classList.toggle('green-p');
    svgCircle.classList.toggle('green-p');
})

radioBtn1.addEventListener('click', function(){
    btpBox1.classList.add('outlined');
    bottomBox1.classList.add('height');
    if (btpBox2.classList.contains('outlined','height')) {
    btpBox2.classList.remove('outlined');
    bottomBox2.classList.remove('height');
    }
    if (btpBox3.classList.contains('outlined','height')) {
    btpBox3.classList.remove('outlined');
    bottomBox3.classList.remove('height');
    }
})
radioBtn2.addEventListener('click', function(){
    btpBox2.classList.add('outlined');
    bottomBox2.classList.add('height');
    if (btpBox3.classList.contains('outlined','height')) {
        btpBox3.classList.remove('outlined');
        bottomBox3.classList.remove('height');
        }
    if (btpBox1.classList.contains('outlined','height')) {
        btpBox1.classList.remove('outlined');
        bottomBox1.classList.remove('height');
        }
})
radioBtn3.addEventListener('click', function(){
    btpBox3.classList.add('outlined');
    bottomBox3.classList.add('height');
    if (btpBox2.classList.contains('outlined','height')) {
        btpBox2.classList.remove('outlined');
        bottomBox2.classList.remove('height');
        }
    if (btpBox1.classList.contains('outlined','height')) {
        btpBox1.classList.remove('outlined');
        bottomBox1.classList.remove('height');
        }
})
radioBtn4.addEventListener('click', function(){
    if (btpBox1.classList.contains('outlined','height')) {
        btpBox1.classList.remove('outlined');
        bottomBox1.classList.remove('height');
        }
    if (btpBox2.classList.contains('outlined','height')) {
        btpBox2.classList.remove('outlined');
        bottomBox2.classList.remove('height');
        }
    if (btpBox3.classList.contains('outlined','height')) {
        btpBox3.classList.remove('outlined');
        bottomBox3.classList.remove('height');
        }
})


// for (let i=0;i<btpRadioButton.length;i++) {
//     btpRadioButton[i].addEventListener('click', function(){
//         btpBox[i].classList.add('outlined');
//         bottomBox[i].classList.add('active');
//     })
//     if(!btpRadioButton[i].checked){
//         btpBox[i].classList.remove('outlined');
//         bottomBox[i].classList.remove('active');
//     }
// }

// const radGroupClick = (ev) => {
//     if (ev.target.type !== "radio") return;                                  !!!!! IF TYPE RADIO.CHECKED !!!!!
//     const target = ev.target.dataset.link;
//     document.querySelectorAll('[data-show]').forEach( (el) => {
//       if (el.dataset.show === target) {
//         el.removeAttribute('hidden');
//       } else {
//         el.setAttribute('hidden','');
//       }
//     });
//   };

// const exceptIndex = 3;
// const items = ['item1', 'item2', 'item3', 'item4', 'item5'];
// const filteredItems = items.filter((value, index) => exceptIndex !== index);

// for (let i=0;i<btpRadioButton.length;i++) {
//     btpRadioButton[i].addEventListener("click", () => {
//         for (const radioButton of btpRadioButton) {
//             if (radioButton.checked) {
//                 btpBox[i].classList.add('outlined');
//                 bottomBox[i].classList.add('active');
//             } else {
//                 btpBox[i+1].classList.remove('outlined');
//                 bottomBox[i+1].classList.remove('active');
//                 btpBox[i-1].classList.remove('outlined');
//                 bottomBox[i-1].classList.remove('active');
//             }
//         }
//         console.log(i);
//     })
// }

// for (let i=0;i<btpRadioButton.length;i++) {
//     btpRadioButton[i].addEventListener('click', function(){
//         if(btpRadioButton[i].checked) {
//             for(var j=0;j<btpBox.length;j++) {
//                 btpBox[j].classList.add('outlined');
//                 bottomBox[j].classList.add('active');
//             }
//         } else {
//             for(var j=0;j<btpBox.length;j++) {
//                 btpBox[j].classList.remove('outlined');
//                 bottomBox[j].classList.remove('active');
//             }
//         }
//     })
// }


// function checked() {
//     for(let i=0;i<btpRadioButton.length;i++){
//         if(btpRadioButton[i].checked) {
//             for(let j=0;j<btpBox.length;j++) {
//                 btpBox[j].classList.add('outline');
//             }
//         } else {
//             for(let j=0;j<btpBox.length;j++) {
//                 btpBox[j].classList.remove('outline');
//             }
//         }
//     }
// }


// for (let i=0;i<btpRadioButton.length;i++) {
//     btpRadioButton[i].addEventListener('click', (ev) =>{
//         if (!ev.currentTarget.checked) return;
//             for (let j=0;j<btpRadioButton.length;j++) {
//                 btpBox[j].classList.add('outlined');
//             }
//             for (let k=0;k<bottomBox.length;k++) {
//                 bottomBox[k].removeAttribute('hidden');
//             }
//     });
// }
