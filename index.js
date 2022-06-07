console.log('hi');

//Event Handler//
let form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  //prevents the form from automatically being submitted and the page from being refreshed
  const input = document.querySelector('input');
  console.log(input.value);
});
