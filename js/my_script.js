$(document).ready(function() {

 $('#spin').click(function() {
     $('td.spintd').addClass("highlight");
     
}); 
 $('#car').click(function() {
     $('td.cartd').addClass("highlight");
     
}); 
 $('#broc').click(function() {
     $('td.broctd').addClass("highlight");
     
}); 

$("th#oran").click(function() {
    $(this).siblings("td.orantd").addClass("highlight");
    $('td.tangtd, td.broctd, td.cartd, td.spintd').removeClass("highlight");
}); 

 $('#tang').click(function() {
     $('td.tangtd').addClass("highlight");
     $('td.orantd, td.broctd, td.cartd, td.spintd').removeClass("highlight");
    }); 
}); 