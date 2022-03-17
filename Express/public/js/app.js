const form = document.querySelector("form");
const Search = document.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const location=Search.value;

  console.log(location);
});
