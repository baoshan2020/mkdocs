
function SetCode(){
    //alert($('#str').val());
    //alert($.base64.encode($('#str').val()));
    $('#val').val($.base64.encode($('#str').val()));
}

function SetVal(){
    alert($.base64.decode($('#str').val()));
}