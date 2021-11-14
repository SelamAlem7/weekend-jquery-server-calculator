console.log('Look at server!')


/////////////////////////////////////////////////////////////////////////////
const express = require('express');

const app = express();
const PORT = 5000;
/////////////////////////////////////////////////////////////////////////////

let calculateIt = [];

/////////////////////////////////////////////////////////////////////////////

function CalcInputs(num1, num2, equationType) {
    let answer = '';
    if (equationType === '+'){
        answer = +num1 + +num2;
    }
    else if ( equationType === '-'){
        answer = +num1 - +num2;
    }
     else if ( equationType === '/'){
        answer = +num1 / +num2;
    }
    else if ( equationType === '*'){
        answer = +num1 * +num2;
    }

    return answer;
    
}

/////////////////////////////////////////////////////////////////////////////


app.use(express.static('./server/public'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/////////////////////////////////////////////////////////////////////////////



app.post('/server-calculator', (req, res) => {
    console.log('in POST /server-calculator');

    let equation = req.body.addEquation;
    console.log(equation.firstNumber);
    console.log(equation.secondNumber);
    console.log(equation.equationType);
    equation.answer = CalcInputs(
        equation.firstNumber,
        equation.secondNumber,
        equation.equationType,
    );
    calculateIt.pop();
    calculateIt.push(equation);
    console.log(calculateIt);

    res.sendStatus(201);
});

/////////////////////////////////////////////////////////////////////////////


app.get('/calculation-results', (req, res) => {
    console.log('in GET /calculation-results');
    sendingBack = calculateIt[0]

    res.send(sendingBack);
});



app.listen(PORT, () => {
    console.log('PORT!', PORT)
  });