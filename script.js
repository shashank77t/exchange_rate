const curr1e=document.getElementById('currency-one');
const amt1=document.getElementById('amount_one');
const curr2e=document.getElementById('currency-two');
const amt2=document.getElementById('amount-two');
const rate1=document.getElementById('rate');
const swap=document.getElementById('swap');
function calculate(){
    const curr_one=curr1e.value;
    const curr_two=curr2e.value;
   
    fetch(`https://v6.exchangerate-api.com/v6/225418324edd646bd9753388/latest/${curr_one}`)
    .then(res=>res.json()).then(data=>{
      console.log(data);
        const rate = data.conversion_rates[curr_two];
        rate1.innerText = `1 ${curr_one} = ${rate} ${curr_two}`;
        amt2.value = (amt1.value * (rate)).toFixed(2);
    });
}
// Event Listener
curr1e.addEventListener('change', calculate);
amt1.addEventListener('input', calculate);
curr2e.addEventListener('change', calculate);
amt2.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = curr1e.value;
  curr1e.value = curr2e.value;
  curr2e.value = temp;
  calculate();
});
calculate();