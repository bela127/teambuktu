
$( document ).ready(function() {
    console.log( "ready!" );
    $("#loginBtn").click(function() {
        console.log("click")
        window.location.href = 'appointments.html';
    });
});

