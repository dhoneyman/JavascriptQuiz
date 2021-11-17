// let scoreLi = document.createElement('li');
let scoreUl = document.querySelector('#high-score-ul');
let newHighScore = document.querySelector('#newScore')
let submitButton = document.querySelector('#submit');
// localStorage.getItem('newPlayer', newPlayer);
let playerArray = [];
newHighScore.textContent = localStorage.getItem('rightScore');
// newHighScore.textContent = rightScore;

submitButton.addEventListener('click', function(event){
    event.preventDefault();
    
    let newPlayer = document.getElementById('playerName').value;
    let entry = document.createElement('li');
    entry.appendChild(document.createTextNode(newPlayer));
    scoreUl.appendChild(entry);
    document.getElementById('playerName').style['display'] = 'none';
    this.style['display'] = 'none';


    
    
    
    //below was attempt to push name and score to array
    
    // let newPlayer = document.getElementById('playerName').value;
    // playerArray.push(newHighScore, playerName);
    // playerArray.forEach((item)=>{
    //   let entry = document.createElement('li');
    //   scoreUl.appendChild;
    // })

    

// function scorePage (){
//     let obj = {};
//     obj.append('text', document.getElementById('playerName').value);
    // localStorage.setItem('rightScore', rightScore);



// }
// localStorage.setItem('newPlayer', newPlayer);
});
