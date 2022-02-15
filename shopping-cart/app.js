const phonePlus = document.getElementById('phone-plus');
const phoneMinus = document.getElementById('phone-minus');
const casePlus = document.getElementById('case-plus');
const caseMinus = document.getElementById('case-minus');

function updatePhonePrice() {
    const phonePrice = document.getElementById('phone-price');
    const phonePriceText = phonePrice.innerText;
    const input = document.getElementById('phone-input');
    const inputValue = input.value;
    phonePrice.innerText = parseInt(inputValue) * 1219;
    return phonePriceText;
}

function updateCasePrice() {
    const casePrice = document.getElementById('case-price');
    const casePriceText = casePrice.innerText;
    const input = document.getElementById('case-input');
    const inputValue = input.value;
    casePrice.innerText = parseInt(inputValue) * 59;
    return casePriceText;
}

function updateTotal() {
    const subTotal = document.getElementById('sub-total');
    const subTotalText = subTotal.innerText;
    const tax = document.getElementById('tax');
    const taxText = tax.innerText;
    const total = document.getElementById('total');
    const totalText = total.innerText;

    subTotalValue = parseInt(updatePhonePrice()) + parseInt(updateCasePrice());
    subTotal.innerText = subTotalValue;
    taxValue = subTotalValue / 10;
    tax.innerText = taxValue;
    total.innerText = subTotalValue + taxValue;
}

phonePlus.addEventListener('click',function(){
    const input = document.getElementById('phone-input');
    const inputValue = input.value;
    input.value = parseInt(inputValue) + 1;

    updatePhonePrice();
    updateTotal()
})


phoneMinus.addEventListener('click',function(){
    const input = document.getElementById('phone-input');
    const inputValue = input.value;

    if(inputValue > 0) {
        input.value = parseInt(inputValue) - 1;
    }

    updatePhonePrice();
    updateTotal()

})

casePlus.addEventListener('click',function(){
    const input = document.getElementById('case-input');
    const inputValue = input.value;
    input.value = parseInt(inputValue) + 1;

    updateCasePrice();
    updateTotal()
})


caseMinus.addEventListener('click',function(){
    const input = document.getElementById('case-input');
    const inputValue = input.value;

    if(inputValue > 0) {
        input.value = parseInt(inputValue) - 1;
    }

    updateCasePrice();
    updateTotal()
})