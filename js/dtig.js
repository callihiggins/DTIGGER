$('#contents').on('show', function () {
var width = $(window).width();
if(width < 768)
$('.issue').hide();

});

$('#contents').on('hide', function () {
console.log("show");

$('.issue').show();

});