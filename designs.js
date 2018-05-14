// add variables to select color, height, and width
var color, height, width;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid(height, width);
})

function makeGrid(x, y) {
    //clear grid
    $('tr').remove();
    //nested for loop to size from input
    for (var i = 1; i <= x; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for (var j = 1; j <= y; j++) {
            $('#table' + i).append('<td></td>');
        }
    }

    //pick color and add to cell
    $('td').click(function addColor() {
        color = $('#colorPicker').val();

        //if color in cell, allow input to clear and use new color
        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })

}