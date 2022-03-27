const message = document.querySelector("#message");
const addMovie = (event) => {
  event.preventDefault();
  let inputField = document.querySelector("input");
  const movie = document.createElement("li");

  const movieTitle = document.createElement("span");
  movieTitle.textContent = inputField.value;
  movieTitle.addEventListener("click", crossOffMovie);
  movie.appendChild(movieTitle);

  deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", deleteMovie);
  movie.appendChild(deleteBtn);

  document.querySelector("ul").appendChild(movie);
  inputField.value = "";
};

const deleteMovie = (event) => {
  event.target.parentNode.remove();
  message.textContent = `${event.target.parentNode.firstChild.textContent} was Deleted!`;
  revealMessage();
};
const crossOffMovie = (event) => {
  event.target.classList.toggle("checked");
  if (event.target.classList.contains("checked") === true) {
    message.textContent = `${event.target.textContent} was watched!`;
  } else {
    message.textContent = `${event.target.textContent} was added back to the List!`;
  }
  revealMessage();
};
const revealMessage = () => {
  message.classList.remove("hide");
  setTimeout(() => {
    message.classList.add("hide");
  }, 1500);
};
document.querySelector("form").addEventListener("submit", addMovie);
