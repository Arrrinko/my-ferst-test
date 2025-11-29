const button = document.getElementById('button')
const element = document.getElementById('que')
const que_1 = document.getElementById('que_1')
const que_2 = document.getElementById('que_2')
const que_3 = document.getElementById('que_3')
const que_4 = document.getElementById('que_4')
const que_5 = document.getElementById('que_5')
const que_6 = document.getElementById('que_6')


button.addEventListener('click', () => {
    alert('Мы начинаем тест')
    element.style.display = 'none'
    que_1.style.display = 'flex'
})
// первый вопрос
const answerOneTrue = document.getElementById('answerOneTrue')

answerOneTrue.addEventListener('click', () => {
    alert('Это правильный ответ')
    que_1.style.display = 'none'
    que_2.style.display = 'flex'
})

const answerOneFalse = document.getElementById('answerOneFalse')
answerOneFalse.addEventListener('click', () => {
    alert('Это неправильный ответ')
    que_1.style.display = 'none'
    que_2.style.display = 'flex'
})

const answerOneFalse_2 = document.getElementById('answerOneFalse_2')
answerOneFalse_2.addEventListener('click', () => {
    alert('Это неправильный ответ')
    que_1.style.display = 'none'
    que_2.style.display = 'flex'
})

// второй вопрос
const answerTwoTrue = document.getElementById('answerTwoTrue')

answerTwoTrue.addEventListener('click', () => {
    alert('Это правильный ответ')
    que_2.style.display = 'none'
    que_3.style.display = 'flex'
})

const answerTwoFalse = document.getElementById('answerTwoFalse')

answerTwoFalse.addEventListener('click', () => {
    alert('Это неправильный ответ')
    que_2.style.display = 'none'
    que_3.style.display = 'flex'
})

const answerTwoFalse_2 = document.getElementById('answerTwoFalse_2')

answerTwoFalse_2.addEventListener('click', () => {
    alert('Это неправильный ответ')
    que_2.style.display = 'none'
    que_3.style.display = 'flex'
})


// третий вопрос
const answerThreeTrue = document.getElementById('answerThreeTrue')

answerThreeTrue.addEventListener('click', () => {
    alert('Это правильный ответ!')
    que_3.style.display = 'none'
    que_4.style.display = 'flex'
})


const answerThreeFalse = document.getElementById('answerThreeFalse')

answerThreeFalse.addEventListener('click', () => {
    alert('Это неправильный ответ!')
    que_3.style.display = 'none'
    que_4.style.display = 'flex'
})


const answerThreeFalse_2 = document.getElementById('answerThreeFalse_2')

answerThreeFalse_2.addEventListener('click', () => {
    alert('Это неправильный ответ!')
    que_3.style.display = 'none'
    que_4.style.display = 'flex'
})

// четвертый вопрос 

const answerFourTrue = document.getElementById('answerFourTrue')

answerFourTrue.addEventListener('click', () => {
    alert('Это был правильный ответ!')
    que_4.style.display = 'none'
    que_5.style.display = 'flex'
})

const answerFourFalse = document.getElementById('answerFourFalse')

answerFourFalse.addEventListener('click', () => {
    alert('Это был неправильный ответ!')
    que_4.style.display = 'none'
    que_5.style.display = 'flex'
})

const answerFourFalse_2 = document.getElementById('answerFourFalse_2')

answerFourFalse_2.addEventListener('click', () => {
    alert('Это был неправильный ответ!')
    que_4.style.display = 'none'
    que_5.style.display = 'flex'
})

// пятый вопрос

// const answerOpenOneTrue = 'Аперетив';
// const upperAnswer = answerOpenOneTrue
// console.log(upperAnswer)

// const userAnswer = document.getElementById('answerOpenOne')

// formOne.addEventListener('keydown', function (event) {
//     // event.key содержит символ нажатой клавиши
//     console.log('Клавиша нажата:', event.key);

//     // Пример: если нажата клавиша Enter
//     if (event.key === ' ') {
//         que_5.style.display = 'none'
//         que_6.style.display = 'flex'
//     }
// });

// // попробует реализовать проверку ответа пользователя 


// if ( userAnswer === answerOpenOneTrue ){
//     console.log('Ответ правильный')
// } else 
//     console.log('Ничего не работает блять')


// пятый вопрос (вторая попытка)

// const userAnswer = document.getElementById('answerOpenOne')

// userAnswer.addEventListener('submit', () =>{
//     console.log('Пипипупу')
// })

// Получаем элемент input
const input = document.getElementById('answerOpenOne');

// Обработчик события keydown для проверки при нажатии Enter
input.addEventListener('keydown', function(e) {
    // Проверяем, что нажата клавиша Enter (код 13)
    if (e.key === 'Enter') {
        
        const userAnswer = this.value.trim().toUpperCase();
        const correctAnswers = ('АПЕРЕТИВ');
        
        // Проверяем ответ
        if (correctAnswers.includes(userAnswer)) {
            alert(console.log('Правильно! Это аперитив.'))
        } else if (userAnswer === '') {
            // Пустой вво
            alert(console.log('Введите ответ'))
        } else {
            // Неправильный ответ
            alert(console.log('Неправильно. Попробуйте еще раз!'))
        }
    }
});

