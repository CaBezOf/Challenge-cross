import fetch from "node-fetch";

let numbers = [];
let i = 1;
let response = await fetch(
  "http://challenge.dienekes.com.br/api/numbers?page="
);

//Extract Data
while (true) {
  response = await fetch(
    "http://challenge.dienekes.com.br/api/numbers?page=" + i++
  );
  if (response.status !== 200 || response.status == "ETIMEDOUT") continue;
  const js = await response.json();
  numbers = numbers.concat(js.numbers);
  console.log(i - 1, js.numbers);
  if (js.numbers.length < 1) break;
}

//Transform Data
console.log(numberOrder(numbers));

//Function when ordered the numbers
function numberOrder(vect) {
  let n = numbers.length;

  for (let i = 0; i < n - 1; i++)
    for (let j = 0; j < n - i - 1; j++)
      if (vect[j] > vect[j + 1]) {
        let temp = vect[j];
        vect[j] = vect[j + 1];
        vect[j + 1] = temp;
      }
  console.log("Transformed numbers => " + numbers);
}

//Load Data
var strNumbers = JSON.stringify(numbers);

console.log("Ordered string numbers => " + strNumbers);

export { strNumbers, numbers, response };
