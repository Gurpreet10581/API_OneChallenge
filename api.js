const baseUrl = "https://ghibliapi.herokuapp.com/films";

const sectionOne = document.querySelector("section");

fetch(baseUrl)
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    displayMovies(data);
  })
  .catch((error) => console.log(error));

function displayMovies(movieData) {
  movieData.forEach((element) => {
    const flashcard = document.createElement("div"); // created a div with in section class from html
    flashcard.setAttribute("class", "content"); // gave it a class and name

    // creating diffrent type of tags to display the information
    const titleInfo = document.createElement("h2");
    const directorInfo = document.createElement("h3");
    const releaseInfo = document.createElement("h4");
    const discriptionInfo = document.createElement("p");

    //connection the above variable/tags 
    titleInfo.textContent = element.title;
    directorInfo.textContent = element.director;
    releaseInfo.textContent = element.release_date;
    discriptionInfo.textContent = element.description;

    sectionOne.appendChild(flashcard);
    flashcard.appendChild(titleInfo);
    flashcard.appendChild(directorInfo);
    flashcard.appendChild(releaseInfo);
    flashcard.appendChild(discriptionInfo);


  });
}
