$(document).ready(function() {

    $("#valorrango").change(function(){
        let valor = $("#valorrango").val();
        if(valor >= 0 && valor < 20){
            $("#views").html("10K pageviews");
            $("#label").html("$8.00");
        }
        if(valor >= 20 && valor < 40){
            $("#views").html("50K pageviews");
            $("#label").html("$12.00");
        }
        if(valor >= 40 && valor < 60){
            $("#views").html("100K pageviews");
            $("#label").html("$16.00");
        }
        if(valor >= 60 && valor < 80){
            $("#views").html("500K pageviews");
            $("#label").html("$24.00");
        }
        if(valor >= 80){
            $("#views").html("1M pageviews");
            $("#label").html("$36.00");
        }
    });

});