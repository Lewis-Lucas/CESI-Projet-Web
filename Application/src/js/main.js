lesInterv = [];
objectSelected = null;
$(document).ready( function () {
    $("#formAdd").hide();



    $('#menuToggle').click(function() {
      $("#menuToggle").animate({
        height : "+=10px",
        width : "+=10px"
      });
      $("#accordionSidebar").animate({width :"toggle"});
      $("#menuToggle").animate({
          height : "-=10px",
          width : "-=10px"
      });
    });


});

function idAleatoire(date) {
    var str = "TICKET-"+ date.getTime();
    return str;
}
