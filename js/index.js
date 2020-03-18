$(document).ready(function () {
    $("#all").click(function () {
        $("#one").show();
        $("#two").show();
        $("#three").show();
        $("#four").show();
        $("#five").show();
        $("#six").show();

    });
    
    $("#web").click(function () {
        $("#one").show();
        $("#five").show();
        $("#two").hide();
        $("#three").hide();
        $("#four").hide();
    });
    
    $("#photography").click(function () {
        $("#two").show();
        $("#three").show();
        $("#four").show();
        $("#one").show();
        $("#five").show();
        
        
    });
    
    $("#app").click(function () {
        $("#four").show();
        $("#six").show();
        $("#one").show();
        $("#two").show();
        $("#five").show();
        $("#three").show();

    });
    
    $("#creative").click(function () {
        $("#one").show();
        $("#five").show();
        $("#two").show();
        $("#five").show();

    });
});
