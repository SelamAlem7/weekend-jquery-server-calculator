console.log('js is working !!');
//////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(onReady);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
let total = [];

////////////////////////////////
let calculatorOps ='';
//////////////////////////////////////////////////////////////////////////////////////////////////////////

function onReady() {
    console.log('jQuery is rollinggg!');
    $(document).on('click', '.equationType', handleOpClicks);
    $('#result-button').on('click', submitInputs);
    $('#clear-button').on('click', clearInput);
    listHistory();
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
function handleOpClicks(event) {
    console.log('Operator of choice has been clicked:', calculatorOps);
    event.preventDefault();
    calculatorOps = this.value;


}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
function submitInputs(event){
    event.preventDefault();

    let newCalculation = {
        firstNumber: $('#input1').val(),
        secondNumber: $('#input2').val(),
        equationType: calculatorOps,
    };
    console.log(newCalculation);

    $.ajax({
        data: {addEquation: newCalculation },
        url: '/server-calculator',
        method: 'POST',

    }).then(function(response) {
        console.log(response);
        calculationResult();

    }).catch(function(){
        console.log('Error');
    });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function calculationResult() {
    console.log('in calculations result function');
    $.ajax({
        url: '/calculation-results',
        method: 'GET',
    }).then(function(response) {
        console.log('Your calculation is:', response);
        $('#answer').empty();
        $('#answer').append(`<h3>Your Total is: ${response.answer} </h3>`);
        $('#history').empty();

        total.push(response);
        console.log(total);

        listHistory();
    })
    .catch(function () {
       console.log('Error');
       
    })
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function clearInput(event) {
    event.preventDefault();
    $('#input1').val('');
    $('#input2').val('');
    calculatorOps = '';

    
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function listHistory() {
    for (let calculation of total) {
        $('#history').append(`<li> ${calculation.firstNumber} ${calculation.equationType} ${calculation.secondNumber} = ${calculation.answer} </li>`);
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
