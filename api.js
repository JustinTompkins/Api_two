const baseURL ='https://api.nasa.gov/';

const searchForm = document.querySelector('form');
const nasa = document.querySelector('ul');

searchForm.addEventListener('submit', fetchnasa);

function fetchnasa(e){
    e.preventDefault();
    
    fetch(baseURL)
    .then(result => result.json())
    .then(json => {
      console.log(json);
        display(json);
    })
    .catch(err => console.log(err))
}

function display(){
        .forEach(d => {
            let  = document.createElement('li');
            .innerText = d.[1];
            nasa.appendChild();
        
        })
    }