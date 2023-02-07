const inputRef = document.querySelector("#validation-input");
inputRef.addEventListener("blur", (event) => {
  console.log(event.currentTarget.value.length);
  console.log(parseInt(inputRef.dataset.length));
  if (event.currentTarget.value.length === parseInt(inputRef.dataset.length)) {
    inputRef.classList = "valid";
  } else {
    inputRef.classList = "invalid";
  }
});
