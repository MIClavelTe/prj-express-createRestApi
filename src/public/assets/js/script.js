$(document).on('click', '#princessButton', function(event) {
    event.preventDefault()
    console.log('Princess Button is clicked')
    $.ajax({
        method: 'POST',
        url: '/princess',
        data: {
            name: $('#name').val()
        }
    })
    .done(function( data, textStatus, jqXHR ) {
        console.log(data)
    })
 })

 $(document).on('click', '#bookButton', function(event) {
    event.preventDefault()
    console.log('Book Button is clicked')
    $.ajax({
        method: 'POST',
        url: '/book',
        data: {
            title: $('#title').val()
        }
    })
    .done(function( data, textStatus, jqXHR ) {
        console.log(data)
    })
 })

var princessBtn = $('<button>').attr({
    'id': 'princessButton',
    'type': 'submit'
})
princessBtn.text("Create Princess")
var form = $('#formPrincess')
form.append(princessBtn)

var bookBtn = $('<button>').attr({
    'id': 'bookButton',
    'type': 'submit'
})
bookBtn.text("Create Book")
var form = $('#formBook')
form.append(bookBtn)

