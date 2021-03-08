function myFunction() {
  alert(
    "Hallo" + gebruiker + ", uw email is" + email + "en uw bericht is" + bericht
  );
}

var button = document.getElementById("clickme"),
  count = 0;
button.onclick = function () {
  count += 1;
  button.innerHTML = count;
  console.log(count);
};
 