let score = 0;
let currentQuestion = 0;
const questions = document.querySelectorAll('.question');
let lastQuestionAnsweredYes = false;

function answer(point) {
    if (currentQuestion === questions.length - 1 && point === 1) {
        lastQuestionAnsweredYes = true;
    }
    
    score += point;
    questions[currentQuestion].style.display = 'none';
    currentQuestion++;
    if (currentQuestion < questions.length) {
        questions[currentQuestion].style.display = 'block';
    } else {
        checkScore();
    }
}

function createFireworks() {
    const fireworks = document.querySelectorAll('.firework');
    fireworks.forEach(firework => {
        firework.style.left = Math.random() * window.innerWidth + 'px';
        firework.style.top = Math.random() * window.innerHeight + 'px';
    });
}

function checkScore() {
    const resultDiv = document.getElementById('result');
    const youtubePlayer = document.getElementById('youtube-player');

    if (score > 3 && lastQuestionAnsweredYes) {
        resultDiv.innerHTML = `<p>Yay! You are now my girlfriend! 💖</p>
                               <p>Project Mint Won complete na🏆</p>
                               <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzh1M3ZjMXQ3dWljZjQ3Mnl5dnp2bWRjaDd4cHpycmFpYWc4cDdlNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/SvvfK2dco188Wk4ZTq/giphy.gif" alt="Happy GIF">
                               <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDFuajI5MW1nNzF4OHcxOWM0OG00c3owbThicTlhazcwem1ieWZkYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/XFq4WPugKRwwLQwfWL/giphy.gif" alt="Happy GIF 2">
                               <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif" alt="Happy GIF 3">`;
        resultDiv.classList.add('congrats-animation');
        document.body.classList.add('celebrate');
        createFireworks();
        setInterval(createFireworks, 500);

        // Show YouTube player with button
        youtubePlayer.style.display = 'block';

    } else {
        resultDiv.innerHTML = `<p>Oh no, let's try again! 💔</p>
                               <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHZ1cTA2eTQ5ZG5qbzZwM2xiOGNleGVwYng5cHVyaGRzdjQ1M2htayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT0BKFyZt9MMx9xkpW/giphy.gif" alt="Sad GIF">`;
        resetQuiz();
    }
    resultDiv.style.display = 'block';
}

function playVideo() {
    const iframe = document.getElementById('video-frame');
    iframe.src = 'https://www.youtube.com/embed/xsSsRMwWTx0?autoplay=1';
}

function resetQuiz() {
    score = 0;
    currentQuestion = 0;
    lastQuestionAnsweredYes = false;
    setTimeout(() => {
        questions.forEach(q => q.style.display = 'none');
        questions[0].style.display = 'block';
        document.getElementById('result').style.display = 'none';
        document.getElementById('youtube-player').style.display = 'none'; // Hide YouTube player
    }, 2000);
}

// Initially, show only the first question
questions.forEach(q => q.style.display = 'none');
questions[0].style.display = 'block';
