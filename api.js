const baseUrl= "https://ghibliapi.herokuapp.com";

const sectionOne = document.querySelector(".section");
const sectionTwo = document.querySelector("#div");

function fetchSpace(){
    event.preventDefault();
    fetch(baseUrl)
    .then((result)=>{
        return result.json();
    })
    .then((data)=> {
        console.log(data);
    })
    .catch ((error)=> console.log(error));

}