console.log("Power Overwhelming...")

$(document).ready(function(){

$('.click-btn').click(function(){
    console.log("stop clicking me!");
})

$('.hide-btn').click(function(){
    $('p').hide();
})

$('.show-btn').click(function(){
    $('p.show-me').show();
})

$('.toggle-class-btn').click(function(){
    $('p.toggle-class').toggleClass("background-pink");
})
$('.toggle-btn').click(function(){
    $('p.toggle').toggle();
})

$('.slideDown-btn').click(function(){
    $('p.sliding').slideDown("fast", function(){

    });
})

$('.slideUp-btn').click(function(){
    $('p.sliding').slideUp(2000, function(){

    });
})

$('.slide-toggle-btn').click(function(){
    $('p.slide-toggle').slideToggle(); //([speed],[function])
})

$('.fade-in-btn').click(function(){
    $('img.img-fade').fadeIn(); //([speed],[function])
})

$('.fade-out-btn').click(function(){
    $('img.img-fade').fadeOut(); //([speed],[function])
})

$('.add-class-btn').click(function(){
    $('p.add-class').addClass("fancy");
})

$('.before-btn').click(function(){
    $('p.before').before('Get to da choppa!');
})

$('.after-btn').click(function(){
    $('p.after').after('I\'ll be back!');
})

$('.append-btn').click(function(){
    $('p.append').append('<b><em>Ice Ice Baby...</em></b>');
})

$('.html-btn').click(function(){
    console.log('yep');
    $('p.html').html();
})

$('.attr-btn').click(function(){
    $('.img-attr').attr('alt','I\'m not a squirrel... I lied...');
})

$('.val-btn').click(function(){
    $('input:text').val("Glenn Quagmire");
})

$('.text-btn').click(function(){
    $('p.text').text("Who is your daddy and what does he do?...");
})

$('.data-btn-1').click(function(){
    $('p.data').data("greeting",groceries);
})
var groceries = [
    "nuts",
    "more nuts",
    "even more nuts",
    "never enough nuts",
    "I lost my nuts"
]
$('.data-btn-2').click(function(){
    console.log($('p.data').data("greeting"))
})



})