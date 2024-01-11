const bill = document.querySelector(".bill-input")
const tip = document.querySelector(".custom-perc")
const percent = document.querySelectorAll(".perc")
const people = document.querySelector(".numof-input")
const tipAmount = document.querySelector(".tipam")
const total = document.querySelector(".tot")
const reset = document.querySelector(".button")
const redline1 = document.querySelector(".redline1")
const redline2 = document.querySelector(".redline2")


let billValue = 0;
bill.addEventListener("input", () => {
  billValue = parseInt(bill.value);
  calculate()
  billCant()
})

let tipPerc = 0
tip.addEventListener("input", () => {
  tipPerc = parseInt(tip.value) || 0;
  calculate()
})

let numOfp = 0
people.addEventListener("input", () => {
  numOfp = parseInt(people.value) || 0;
  calculate()
  peopleCant()
})

for(let i = 0; i < percent.length; i++){
  percent[i].addEventListener("click", () =>{
    tipPerc = parseInt(percent[i].textContent)
    calculate()
  })
}

reset.addEventListener("click", () => {
  bill.value = ""
  billValue = 0
  tip.value = ""
  tipPerc = 0
  people.value = ""
  numOfp = 0
  tipAmount.textContent = `$0.00`
  total.textContent = `$0.00`
})

function billCant(){
  if(billValue === 0){
    redline1.style.display = "block"
    bill.style.border = "2px solid red"
    bill.style.borderRadius = "5px" 
  } else {
    redline1.style.display = "none"
    bill.style.border = "none"
  }
}

function peopleCant(){
  if(numOfp === 0){
    redline2.style.display = "block"
    people.style.border = "2px solid red"
  } else {
    redline2.style.display = "none"
    people.style.border = "0px"
  }
}

function calculate(){
  if(billValue !== 0 && tipPerc !== 0 && numOfp !== 0){
    let tipAmo = ((billValue / 100) * tipPerc) / numOfp;
    let total2 = (billValue + tipAmo) / numOfp;
  
    tipAmount.textContent = "$" + tipAmo.toFixed(2);
    total.textContent = "$" + total2.toFixed(2);
  } else {
    tipAmount.textContent = `$0.00`;
    total.textContent = `$0.00`;
  }
}

console.log(parseInt(''))
console.log(isNaN(tipPerc))



