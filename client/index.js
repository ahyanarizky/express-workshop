console.log('hello world');

$(document).ready(function() {
    let $description = $('#description')
    $('#description').html('jQuery is active !')
    // $.ajax({url: `http://localhost:3000/books`}).done(function(data) {
    //     console.log(data);
    //     $description.html(data[0].name)
    // })
    $.getJSON(`http://localhost:3000/books`, function(data) {
        console.log(data);
        $description.html(`${data[0].id} : ${data[0].name} ${data[0].price}`)
    })
})
