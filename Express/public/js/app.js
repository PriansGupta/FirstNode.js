const form = document.querySelector("form");
const Search = document.querySelector("input");
const msg1 = document.querySelector(".msg-1");
const msg2 = document.querySelector(".msg-2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  msg1.textContent = "LOADING.....";
  const location = Search.value;
  
  if(location.length!==0)
  {
  fetch("http://localhost:3000/Search?address=" + location).then((response) => {
    response.json().then((data) => {
      if (data.error || data.message) msg1.textContent = data.message;
      else {
        msg1.textContent =
          "The Temperature in " +
          data.Place +
          " is " +
          data.Temperature +
          " and the Weather is " +
          data.Weather;
      }
    });
  });
}
else{
  msg1.textContent ="Please enter a Location to search"
}
});
