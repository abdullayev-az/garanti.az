function tikla(){
}

function hesabla(){
    var a=document.getElementById('ceki').value;
    var b=9.50;
    var c=a*b;

    document.getElementById('cem').innerHTML = "Cəmi: "+ c +' $';

    if(a==0){
        document.getElementById('cem').innerHTML = "Cəmi: $0.00";
    }
}


$('#turkiye_card').click(function(){
    $('#turkiye_card').css({'background-color':'#4d148c','transition':'All 0.5s'});
    $('#turk-color1').css({'color':'white','transition':'All 0.5s'});
    $('#turk-color2').css({'color':'white','opacity':'1','transition':'All 0.5s'});
    $('#abs_card').css({'background-color':'#fff','transition':'All 0.5s'});
    $('#abs-color1').css({'color':'grey','transition':'All 0.5s'});
    $('#abs-color2').css({'color':'gray','opacity':'0.8','transition':'All 0.5s'});
    $('#cin_card').css({'background-color':'#fff','transition':'All 0.5s'});
    $('#cin-color1').css({'color':'grey','transition':'All 0.5s'});
    $('#cin-color2').css({'color':'gray','opacity':'0.8','transition':'All 0.5s'});
    $('#qiymet_2').fadeOut('slow');
    $('#qiymet_3').fadeOut('slow');
    $('#qiymet_1').fadeIn('slow');
});

$('#abs_card').click(function(){
    $('#abs_card').css({'background-color':'#4d148c','transition':'All 0.5s'});
    $('#abs-color1').css({'color':'white','transition':'All 0.5s'});
    $('#abs-color2').css({'color':'white','opacity':'1','transition':'All 0.5s'});
    $('#turkiye_card').css({'background-color':'#fff','transition':'All 0.5s'});
    $('#turk-color1').css({'color':'grey','transition':'All 0.5s'});
    $('#turk-color2').css({'color':'gray','opacity':'0.8','transition':'All 0.5s'});
    $('#cin_card').css({'background-color':'#fff','transition':'All 0.5s'});
    $('#cin-color1').css({'color':'grey','transition':'All 0.5s'});
    $('#cin-color2').css({'color':'gray','opacity':'0.8','transition':'All 0.5s'});
    $('#qiymet_1').fadeOut('slow');
    $('#qiymet_2').fadeIn('slow');
    $('#qiymet_3').fadeOut('slow');
});

$('#cin_card').click(function(){
    $('#cin_card').css({'background-color':'#4d148c','transition':'All 0.5s'});
    $('#cin-color1').css({'color':'white','transition':'All 0.5s'});
    $('#cin-color2').css({'color':'white','opacity':'1','transition':'All 0.5s'});
    $('#turkiye_card').css({'background-color':'#fff','transition':'All 0.5s'});
    $('#turk-color1').css({'color':'grey','transition':'All 0.5s'});
    $('#turk-color2').css({'color':'gray','opacity':'0.8','transition':'All 0.5s'});
    $('#abs_card').css({'background-color':'#fff','transition':'All 0.5s'});
    $('#abs-color1').css({'color':'grey','transition':'All 0.5s'});
    $('#abs-color2').css({'color':'gray','opacity':'0.8','transition':'All 0.5s'});
    $('#qiymet_1').fadeOut('slow');
    $('#qiymet_2').fadeOut('slow');
    $('#qiymet_3').fadeIn('slow');
});


$('.carusel').owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 800,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items:1,
            nav:false
        },
        500:{
            items:2,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:false
        },
    }
});

$('.carusel-1').owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 700,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items:2,
            nav:false
        },
        500:{
            items:3,
            nav:false
        },
        600:{
            items:5,
            nav:false
        },
        1000:{
            items:7,
            nav:false
        },
    }
});