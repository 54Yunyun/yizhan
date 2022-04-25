function showBookingBox() {
  if (booking.innerHTML == "線上訂房") {
    document.getElementById("booking_box").style.display = "block";
    document.getElementById("box").style.display = "block";
  }
}

function closeBookingBox() {
  document.getElementById("booking_box").style.display = "none";
}

function booking_button() {
  alert("訂房成功");
  document.getElementById("booking_box").style.display = "none";
}

function init() {
  document.getElementById("booking").onclick = showBookingBox;
  document.getElementById("close").onclick = closeBookingBox;
  document.getElementById("booking_button").onclick = booking_button;
}

window.addEventListener("load", init, false);
