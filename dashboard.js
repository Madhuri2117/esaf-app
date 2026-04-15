let accVisible = false;
let balanceVisible = false;

function toggleAcc() {
  let acc = document.getElementById("accNumber");

  if (accVisible) {
    acc.innerText = "XXXXXX1234";
    accVisible = false;
  } else {
    acc.innerText = "53250001669214";
    accVisible = true;
  }
}

function showBalance() {
  let bal = document.getElementById("balance");

  if (!balanceVisible) {
    bal.style.display = "block";
    balanceVisible = true;
  } else {
    bal.style.display = "none";
    balanceVisible = false;
  }
}

function logout() {
  window.location.href = "login.html"; // back to login
}