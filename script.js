$(document).ready(function(){
$("#rock").click(function() {
    $("#scissors").hide();
});
$("#scissors").click(function() {
    $("#paper").hide();
});$("#paper").click(function() {
    $("#rock").hide();
});
});