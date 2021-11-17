// let scoreLi = document.createElement('li');
let scoreUl = document.querySelector('#high-score-ul');
let newHighScore = document.querySelector('#newScore')
let submitButton = document.querySelector('#submit');


newHighScore.textContent = localStorage.getItem('rightScore');

submitButton.addEventListener('click', function(event){

event.preventDefault();
    // let newPlayer = document.getElementById('playerName').value;
    // let entry = document.createElement('li');
    // // entry = newHighScore;
    // entry.appendChild(document.createTextNode(newPlayer));
    // scoreUl.appendChild(entry);

    let newPlayer = document.getElementById('playerName').value;
    playerArray.push(newHighScore, playerName);
    



    

// function scorePage (){
//     let obj = {};
//     obj.append('text', document.getElementById('playerName').value);
//     newHighScore.textContent = rightScore;
//     localStorage.setItem('rightScore', rightScore);



// }
});

localStorage.setItem('scoreUl', scoreUl);