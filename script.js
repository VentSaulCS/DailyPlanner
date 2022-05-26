var currentDate = document.getElementById('currentDay');
currentDate.textContent = moment().format('dddd, MMMM Do');


var hour = moment().hour();
console.log(hour);

var textArea = document.querySelectorAll('textarea');

textArea.forEach(element => {
    var militaryHour = parseInt(element.id);
    if(militaryHour < hour) {
        element.classList.add('past');
    }
    else if(militaryHour === hour) {
        element.classList.add('present');
    }
    else{
        element.classList.add('future');
    }





console.log(element.id)
});


// var button = document.querySelector('.saveBtn')

// button.addEventListener('click', function(event) {
//     console.log('hello!');
// })

$(".saveBtn").on('click', function(){


    var task = $(this).siblings('textarea').val()
    var time = $(this).siblings('textarea').attr("id")
    console.log(time,task)
    localStorage.setItem(time, task);
}) 

$('#8').val(localStorage.getItem('8'))
$('#9').val(localStorage.getItem('9'))
$('#10').val(localStorage.getItem('10'))
$('#11').val(localStorage.getItem('11'))
$('#12').val(localStorage.getItem('12'))
$('#13').val(localStorage.getItem('13'))
$('#14').val(localStorage.getItem('14'))
$('#15').val(localStorage.getItem('15'))
$('#16').val(localStorage.getItem('16'))


