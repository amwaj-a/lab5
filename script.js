let result = document.getElementById("result");
let price = document.getElementById("price");
let person = document.getElementById("person");
let calc = document.getElementById("calc");

let bill = price.value;
calc.addEventListener("click", () => {
  result.insertAdjacentHTML(
    "afterbegin",
    `
    <span>bill  ${price.value}</span>
    <br
    <span> number person  ${person.value}</span>

    
    <h4>Total Bill* VAT : ${vat(Number(price.value))}</h4>
    
    <h4>Everyone pays : ${memmar(Number(person.value), bill)}</h4>
    `
  );
  price.value = "";
  person.value = "";
  bill = "";
});
function memmar(person, bill) {
  return bill / person;
}

function vat(num) {
  num += num * 0.15;
  bill += num;
  return bill;
}
