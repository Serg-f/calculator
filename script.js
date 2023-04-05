const calculate = document.querySelector('.calculate');
const resetBtn = document.querySelector('.reset');

calculate.addEventListener('click', (e) => {
    e.preventDefault();

    let bill = document.getElementById('amount').value;
    let percentage = document.getElementById('disc-per').value;
    let discount = document.getElementById('disc-am');
    let pay = document.getElementById('pay');
    
    discount.value = bill * percentage / 100;
    pay.value = bill - discount.value;
});

resetBtn.addEventListener('click', () => {
    window.location.reload();
});