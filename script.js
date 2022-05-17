$(".yes-button").click(function() {
    $(".firstImage").fadeOut();
    $(".first").text("Good! now get prepared to fight");
    $("second").fadeIn();
    $(".yes-button").fadeOut();
    $(".no-button").fadeOut();
});

$(".no-button").click(function() {
    $(".firstImage").fadeOut();
    $(".first").text("You failed us!");
    $(".bad").fadeIn();
    $(".yes-button").fadeOut();
    $(".no-button").fadeOut();
});

$(".yes-button").click(function() {
    $(".hidethis").fadeIn();
});

$(".r301").dblclick(function() {
    $(".p2020").fadeOut();
});

$(".p2020").dblclick(function() {
    $(".r301").fadeOut();
    
});
