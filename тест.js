const button = document.getElementById('button')
const element = document.getElementById('que')
const que_1 = document.getElementById('que_1')
const que_2 = document.getElementById('que_2')
const que_3 = document.getElementById('que_3')
const que_4 = document.getElementById('que_4')
const que_5 = document.getElementById('que_5')
const que_6 = document.getElementById('que_6')
const que_7 = document.getElementById('que_7')
const answers = [];

button.addEventListener('click', () => {
    alert('Мы начинаем тест')
    element.style.display = 'none'
    que_1.style.display = 'flex'
})
// первый вопрос
const answerOneTrue = document.getElementById('answerOneTrue')

answerOneTrue.addEventListener('click', () => {
    alert('Это правильный ответ')
    answers.push(1)
    que_1.style.display = 'none'
    que_2.style.display = 'flex'
})

const answerOneFalse = document.getElementById('answerOneFalse')
answerOneFalse.addEventListener('click', () => {
    answers.push(0)
    alert('Это неправильный ответ')
    que_1.style.display = 'none'
    que_2.style.display = 'flex'
})

const answerOneFalse_2 = document.getElementById('answerOneFalse_2')
answerOneFalse_2.addEventListener('click', () => {
    answers.push(0)
    alert('Это неправильный ответ')
    que_1.style.display = 'none'
    que_2.style.display = 'flex'
})

// второй вопрос
const answerTwoTrue = document.getElementById('answerTwoTrue')

answerTwoTrue.addEventListener('click', () => {
    answers.push(1)
    alert('Это правильный ответ')
    que_2.style.display = 'none'
    que_3.style.display = 'flex'
})

const answerTwoFalse = document.getElementById('answerTwoFalse')

answerTwoFalse.addEventListener('click', () => {
    answers.push(0)
    alert('Это неправильный ответ')
    que_2.style.display = 'none'
    que_3.style.display = 'flex'
})

const answerTwoFalse_2 = document.getElementById('answerTwoFalse_2')

answerTwoFalse_2.addEventListener('click', () => {
    answers.push(0)
    alert('Это неправильный ответ')
    que_2.style.display = 'none'
    que_3.style.display = 'flex'
})


// третий вопрос
const answerThreeTrue = document.getElementById('answerThreeTrue')

answerThreeTrue.addEventListener('click', () => {
    answers.push(1)
    alert('Это правильный ответ!')
    que_3.style.display = 'none'
    que_4.style.display = 'flex'
})


const answerThreeFalse = document.getElementById('answerThreeFalse')

answerThreeFalse.addEventListener('click', () => {
    answers.push(0)
    alert('Это неправильный ответ!')
    que_3.style.display = 'none'
    que_4.style.display = 'flex'
})


const answerThreeFalse_2 = document.getElementById('answerThreeFalse_2')

answerThreeFalse_2.addEventListener('click', () => {
    answers.push(0)
    alert('Это неправильный ответ!')
    que_3.style.display = 'none'
    que_4.style.display = 'flex'
})

// четвертый вопрос 

const answerFourTrue = document.getElementById('answerFourTrue')

answerFourTrue.addEventListener('click', () => {
    answers.push(1)
    alert('Это был правильный ответ!')
    que_4.style.display = 'none'
    que_5.style.display = 'flex'
})

const answerFourFalse = document.getElementById('answerFourFalse')

answerFourFalse.addEventListener('click', () => {
    answers.push(0)
    alert('Это был неправильный ответ!')
    que_4.style.display = 'none'
    que_5.style.display = 'flex'
})

const answerFourFalse_2 = document.getElementById('answerFourFalse_2')

answerFourFalse_2.addEventListener('click', () => {
    answers.push(0)
    alert('Это был неправильный ответ!')
    que_4.style.display = 'none'
    que_5.style.display = 'flex'
})


// Получаем элемент input
const input = document.getElementById('answerOpenOne');


// Обработчик события keydown для проверки при нажатии Enter
input.addEventListener('keydown', function (e) {
    // Проверяем, что нажата клавиша Enter (код 13)

    if (e.key === 'Enter') {
        e.preventDefault();

        const userAnswer = this.value.trim().toUpperCase();
        const correctAnswers = ('АПЕРИТИВ');


        if (correctAnswers.includes(userAnswer)) {
            answers.push(1)
            alert('Правильно! Это аперитив.')
            setTimeout(() => {
                if (que_5) que_5.style.display = 'none';
                if (que_6) que_6.style.display = 'flex';
            });

        } else if (userAnswer === '') {
            answers.push(0)
            alert('Введите ответ')
            setTimeout(() => {
                if (que_5) que_5.style.display = 'none';
                if (que_6) que_6.style.display = 'flex';
            });
        } else {
            answers.push(0)
            alert('Неправильный ответ')
            setTimeout(() => {
                if (que_5) que_5.style.display = 'none';
                if (que_6) que_6.style.display = 'flex';
            });
        }
    }
});

// шестой вопрос 


const inputTwo = document.getElementById('answerOpenTwo');


// Обработчик события keydown для проверки при нажатии Enter
inputTwo.addEventListener('keydown', function (e) {
    // Проверяем, что нажата клавиша Enter (код 13)

    if (e.key === 'Enter') {
        e.preventDefault();

        const userAnswer = this.value.trim().toUpperCase();
        const correctAnswers = ('ШАМПАНСКОЕ');


        if (correctAnswers.includes(userAnswer)) {
            answers.push(1)
            alert('Правильно!')
            setTimeout(() => {
                if (que_6) que_6.style.display = 'none';
                if (que_7) que_7.style.display = 'flex';
            });

        } else if (userAnswer === '') {
            answers.push(0)
            alert('Введите ответ')
            setTimeout(() => {
                if (que_6) que_6.style.display = 'none';
                if (que_7) que_7.style.display = 'flex';
            });
        } else {
            answers.push(0)
            alert('Неправильный ответ')
            setTimeout(() => {
                if (que_6) que_6.style.display = 'none';
                if (que_7) que_7.style.display = 'flex';
            });
        }
    }
});

const button_final = document.getElementById('button_final')

button_final.addEventListener('click', () =>{
    const correctAnswer = answers.filter(a => a === 1).length;
    alert(`Правильных ответов ${correctAnswer} из 6`)
})

const button_again = document.getElementById('button_again')

button_again.addEventListener('click', () =>{
    que_7.style.display = 'none'
    element.style.display = 'flex'
})