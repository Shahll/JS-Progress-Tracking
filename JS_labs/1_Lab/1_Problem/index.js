function onButtonClick() {
  const usersMoney = document.getElementById("usersMoney");
  const price = document.getElementById("burgersPrice");
  const textResult = document.getElementById("result");

  let burgersQuanlity = Math.floor(usersMoney.value / price.value);
  let change = usersMoney.value - burgersQuanlity * price.value;

  textResult.innerText = `You can buy ${burgersQuanlity} burgers and your change is ${change}`;
}

