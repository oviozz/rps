

const options = ['rock', 'paper', 'scissor']
const game_options = document.querySelectorAll('.items');

const your_score = document.querySelector('#your-score')
const computer_score = document.querySelector('#computer-score')


const game_description = document.querySelector('.game-label')

let you = 0
let computer = 0

function computer_play(user_chosen){
    game_description.style.cssText = 'font-style: normal; color:#154360; animation: none'

    const computer_chosen = options[Math.floor(Math.random()* options.length)]

    const result = (options.indexOf(user_chosen) - options.indexOf(computer_chosen) + 3) % 3;

    if (result === 0) {
        game_description.innerText = "it's a tie!"
    } else if (result === 1) {
        you += 1
        game_description.innerText = "player won!"
        your_score.textContent = you

    } else {
        game_description.innerText = "computer won!"
        computer += 1
        computer_score.textContent = computer
    }


}

game_options.forEach(function (e){
    e.addEventListener('click',function (){
        computer_play(e.id)
    })
})

document.querySelector('#reset').addEventListener
('click', function () {

    you = 0
    computer = 0
    your_score.textContent = you
    computer_score.textContent = computer
    game_description.innerText = "Tap any options!"
    game_description.style.fontStyle = 'italic'

})
