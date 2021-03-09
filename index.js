count = 0;

function myFunction() {
  let gebruiker = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let bericht = document.querySelector('#subject').value;
  let country = document.querySelector('#country').value;

  alert
  (
    "Hallo " + gebruiker 
    + ", uw email is " + email 
    + ", u bent afkomstig van " + country
    + " en uw bericht is:  " + bericht
    + "."
  );

  keepTrackOfCount();
}

function keepTrackOfCount(){
  // TODO: Als getal deelbaar is door 4, verander dan de achtergrondkleur van alle tekstvelden

  count++;
  console.log(count);
}

