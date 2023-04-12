const bill = document.querySelector('#bill')
const people = document.querySelector('#people')
const custom = document.querySelector('#custom')
const tips = document.querySelectorAll('.tip')
const tipPerson = document.querySelector('.tipPerson')
const amtPerson = document.querySelector('.amtPerson')
const submit = document.querySelector('.submit')
const error = document.querySelector('.error')

submit.addEventListener( 'click' , ()=> {
  console.log(tips.innerHTML);
})


bill.addEventListener('input' , billFun)
people.addEventListener('input' , peopleFun)
tips.forEach(function(val){
  val.addEventListener('click' , handleClick)
})

function peopleFun(){
  if(people.value == "" || people.value == 0 ){
    people.style.border = "2px solid red"
    error.style.visibility = "visible"
  } else {
    people.style.border = "none"
    error.style.visibility = "hidden"
  }
  calculateTip()
}

function billFun(){
  calculateTip()
}


function handleClick(event){
   tips.forEach(function(val){
    val.classList.remove("active-tip");
    if(event.target.innerHTML == val.innerHTML){
      val.classList.add("active-tip")
      tipValue = parseFloat(val.innerHTML) / 100
    }
   });
   calculateTip()
}

function calculateTip(){
  if(people.value >= 1 ){
    let tipAmount = (bill.value * tipValue) / people.value;
    let total = (bill.value / people.value ) + tipAmount;
    console.log(tipAmount);
    tipPerson.innerHTML = tipAmount.toFixed(2)
    amtPerson.innerHTML = total.toFixed(2)
  }
}


