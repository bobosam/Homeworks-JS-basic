function changeButton() {
    var button = document.getElementById('up-butt');
    var value = button.innerHTML;
    changeValue(button,value);

    var button = document.getElementById('down-butt');
    var value = button.innerHTML;
    changeValue(button,value);

    function changeValue(button, value) {
        if (value == 'Like') {
            button.innerHTML = 'Unlike';
        } else {
            button.innerHTML = 'Like';
        }
    }
}