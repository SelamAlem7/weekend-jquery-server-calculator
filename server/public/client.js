$(document).ready(onReady);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function onReady() {
    console.log('jQuery is working!');
    geTotal();
    $('#equal-button').on('click', handleEqualClick);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
function geTotal() {
    $.ajax({
        method: 'GET',
        url: '/server-calculator'
    }).then((response) => {
        console.log('response', response);
        $('#total-list').empty();

        for (let total of response) {
            $('#total-list').append(`
          <li>${total.firstNumber} ${total.secondNumber}</li>
        `)
        }
    }).catch((error) => {
        console.log('error', error);
    })
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////

function handleEqualClick() {
    let firstNumber = $('#input1').val();
    let secondNumber = $('#input2').val();
    let result;

    let newTotal = [firstNumber + secondNumber]

    total.push(newTotal);

    $('#input1').val('');
    $('#input2').val('');

}


function handleEqualClick() {
    var num1 = $('#input1').val();
    var num2 = $('#input2').val();
    var result;

    result = Number(num1) + Number(num2);
    document.getElementById("output1").value = result;

}









//////////////////////////////////////////////////////////////////////////////////////////////////////////
function rednderNewTotal(totalToRender) {
    $('#total-table-body').empty();

    for (let total of totalToRender) {
        let newTotalTable = `
        <tr>
        <td>${total.firstNumber}</td>
        <td>${total.secondNumber}</td>
    </tr>
        `;

        $('#total-table-body').append(newTotalTable)

    }

}





///// MAYBE THIS APPROACH IS BETTER??//////////
// function listCalculations(total) {
//     for (let i = 0; i < total.length; i++) {
//         console.log(total[i]);
//     }
// }
// console.log(listCalculations(total));


//////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////////////////////
