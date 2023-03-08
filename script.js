let adviceText = document.querySelector('#advice-text');
let adviceId = document.querySelector('#advice-id');
let button = document.querySelector('#dice-pattern');

// async function getAdvice(url){
//     let res = await fetch(url);
//     let data = await res.json();
//     return data;
// }

button.addEventListener('click', async function (){
    let res = await fetch('https://api.adviceslip.com/advice');
    let data = await res.json();
    let {id, advice} = data.slip;

    adviceId.textContent = `${id}`;
    adviceText.textContent = `${advice}`;
})