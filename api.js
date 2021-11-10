const baseURL ='https://api.nasa.gov/planetary/apod?api_key=bZFuTKNjpOZhRDEObqigsWPeYFw3KFWyFUTWhygh';

const searchForm = document.querySelector('form');
const nasa = document.querySelector('ul');

searchForm.addEventListener('submit', fetchnasa);

function fetchnasa(e){
    e.preventDefault();
    
    fetch(baseURL)
    .then(result => result.json())
    .then(json => {
      console.log(json);
        displayPlanetary(json);
    })
    .catch(err => console.log(err))
}

function displayPlanetary(planetary){
    planetary.forEach(p =>{
        let planetary = document.createElement('li');
        nasa.innerText = p.title[1];
        nasa.appendChild(planetary);
    })
}

function displayPlanetary(planetary){
    planetary.forEach(p => {
        let planetary = document.createElement('li');
        planetary.innerText = p.date[1]
        nasa.appendChild(planetary);
    })
}

