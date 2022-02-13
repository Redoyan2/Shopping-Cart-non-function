const mobileMainusBtn = document.getElementById('mobile-mainas-btn');
const mobileQuantity = document.getElementById('mobile-quantity');
const mobilePlusBtn = document.getElementById('mobile-plus-btn');
const mobilePrice = document.getElementById('mobile-price');
const caseMainusBtn = document.getElementById('case-mainas-btn');
const caseQuantity = document.getElementById('case-quantity');
const casePlusBtn = document.getElementById('case-plus-btn');
const casePrice = document.getElementById('case-price');
const subTotal = document.getElementById('sub-total');
const subTax = document.getElementById('sub-tax');
const inTotal = document.getElementById('in-total');


mobileMainusBtn.addEventListener('click', function () {
    if (mobileQuantity.value > 0) {
        mobileQuantity.value = mobileQuantity.value - 1;
        mobilePrice.innerText = parseInt(mobileQuantity.value)*1219;
        subTotal.innerText = parseInt(mobilePrice.innerText) + parseInt(casePrice.innerText);
        inTotal.innerText = parseInt(mobilePrice.innerText) + parseInt(casePrice.innerText);

    
    }

})

mobilePlusBtn.addEventListener('click', function () {
    mobileQuantity.value = parseInt(mobileQuantity.value) + 1;
    mobilePrice.innerText = parseInt(mobileQuantity.value)*1219;
    subTotal.innerText = parseInt(mobilePrice.innerText) + parseInt(casePrice.innerText);
    inTotal.innerText = parseInt(mobilePrice.innerText) + parseInt(casePrice.innerText);

})





caseMainusBtn.addEventListener('click', function () {
    if (caseQuantity.value > 0) {
        caseQuantity.value = caseQuantity.value - 1;
        casePrice.innerText = parseInt(caseQuantity.value)*59;
        subTotal.innerText = parseInt(mobilePrice.innerText) + parseInt(casePrice.innerText);
        inTotal.innerText = parseInt(mobilePrice.innerText) + parseInt(casePrice.innerText);
    }
})

casePlusBtn.addEventListener('click', function () {
    caseQuantity.value = parseInt(caseQuantity.value) + 1;
    casePrice.innerText = parseInt(caseQuantity.value)*59;
    subTotal.innerText = parseInt(mobilePrice.innerText) + parseInt(casePrice.innerText);
    inTotal.innerText = parseInt(mobilePrice.innerText) + parseInt(casePrice.innerText);

})
