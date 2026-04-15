let pin = "";
const correctPin = "123456"; // change cheyyachu

function press(num) {
  if (pin.length < 6) {
    pin += num;
    updateDots();
  }
}

function clearPin() {
  pin = pin.slice(0, -1);
  updateDots();
}

function updateDots() {
  let dots = document.querySelectorAll(".dots span");
  dots.forEach((dot, index) => {
    dot.style.background = index < pin.length ? "#00ffcc" : "white";
  });
}

function openKeypad() {
  document.getElementById("keypad").classList.add("show");
}

function submitPin() {
  let msg = document.getElementById("message");

  if (pin.length < 4) {
    msg.innerText = "Enter 4-digit MPIN";
    msg.style.color = "yellow";
    return;
  }

  if (pin === correctPin) {
    // msg.innerText = "Login Successful ✅";
    // msg.style.color = "lightgreen";
    window.location.href = "dashboard.html";

    // simulate next screen
    setTimeout(() => {
      document.querySelector(".dashboard").innerHTML = `
        <div style="text-align:center; margin-top:50%;">
          
        </div>
      `;
    }, 1000);

  } else {
    msg.innerText = "Wrong MPIN ❌";
    msg.style.color = "orange";

    pin = "";
    updateDots();
  }
}