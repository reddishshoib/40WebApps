const questions = [
    {
        'que':'Which of the following is a Markup Language',
        'a': 'HTML',
        'b': 'Java',
        'c': 'Python',
        'd': 'Ruby',
        'correct': 'a'
    },
    {
        'que':'When was JS invented',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'None',
        'correct': 'b'
    },
    {
        'que':'What Does CSS stands for',
        'a': 'Cascade Style Sheet',
        'b': 'Cascading Style Sheet',
        'c': 'Cascading Styling Sheet',
        'd': 'None',
        'correct': 'b'
    }
]
// Variables 
let index = 0
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
let right =0, wrong =0,total = questions.length;

const loadQuestion = () =>{
    if (index == total) {
        return endQuiz()
    }
    reset()
    const data = questions[index]
    quesBox.innerHTML = `${index+1}) ${data.que}`
    optionInputs[0].nextElementSibling.innerText = data.a
    optionInputs[1].nextElementSibling.innerText = data.b
    optionInputs[2].nextElementSibling.innerText = data.c
    optionInputs[3].nextElementSibling.innerText = data.d
}


const submitQuiz = ()=>{
    const data = questions[index]
    const ans = getAnswer()
    if(ans === data.correct){
        right++
    }else{
        wrong++
    }
    index++
    loadQuestion()
    
    return
}

const getAnswer = ()=>{
    let t
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
                t= input.value
            }
        }
    )
    return t
}


const reset = () =>{
    optionInputs.forEach(
        (input)=>{
            input.checked = false
        }
    )
}

const endQuiz = ()=>{
    document.getElementById('container').innerHTML= 
        `<h3>Thank You for playing </h3>
        <h2>${right}/ ${total} are correct</h2>
        // <div class="btn" onclick="restartQuiz()" >Restart Quiz</div>
        `
}


loadQuestion()