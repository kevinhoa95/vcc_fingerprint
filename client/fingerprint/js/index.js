var value = 0;
var pos = 0;

function progress(value) {

    if(value == 100){
        $('progress').addClass("hidden");
        $('#hint98').addClass("hidden");
        $('#instruction').addClass("appear");
        return ;
    }
    // run counter
    $('progress').val(value);
    pos = 1 - value / 100;
    // update background
    $('progress').prop('style', 'background-position: 0 '+ pos + 'em;');

    if(value == 86) {
        $('#hint98').addClass("appear");
    }
}
