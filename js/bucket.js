$(document).ready(function() {

  $("a.btn").click(function(event) {
    event.preventDefault();
    $(".jumbotron").toggle('pulsate',1400); // jQuery UI effect 'pulsate'
    $('h1').text('Whatup!');
  });


  // jQuery UI Widgets

  $( "#tabs" ).tabs();
  $( "#accordion" ).accordion();

});
