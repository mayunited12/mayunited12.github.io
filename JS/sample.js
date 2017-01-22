alert("This webpage is still under construction!")



function myFunction(){
    var x = document.getElementById("myTopNav")
    if(x.className === "topnav"){
        x.className += " responsive";
    }
    else{
        x.className = "topnav";
    }
}


$(".topnav").localScroll();




$(document).ready(function(){

$("#email").hide(); // hides the element in the parenthesis put a "" around to target a tag of the html

$("#mail").click(function(){// This hides and reveal the above code on every click

$(this).next().slideToggle(300);//The higher the number, the slower the transition
})

})


$(window).scroll(function(){
    if($(document).scrollTop() > 540){
        $("ul.topnav li a").addClass("ashrink");
        $("ul.topnav").addClass("shrink");
        
    }
    
    else{
        $("ul.topnav li a").removeClass("ashrink");
        $("ul.topnav").removeClass("shrink")
    }
})



$(document).ready(function(){
    
    $(".slidingPanel").hide();
    $(".show_hide").show();
    
    $('.show_hide').click(function(){
        $(".slidingPanel").slideToggle();
        $("div.aboutSection").toggleClass("backgroundShift");
    })
    
})






// TEXT SLIDER


$(document).ready(function () {
    //rotation speed and timer
    var speed = 5000;
    
    var run = setInterval(rotate, speed);
    var textSli = $('.textSlide');
    var container = $('#textSli ul');
    var elm = container.find(':first-child').prop("tagName");
    var item_width = container.width();
    var previous = 'prev'; //id of previous button
    var next = 'next'; //id of next button
    textSli.width(item_width); //set the textSli to the correct pixel width
    container.parent().width(item_width);
    container.width(textSli.length * item_width); //set the textSli container to the correct total width
    container.find(elm + ':first').before(container.find(elm + ':last'));
    resetSlides();
    
    
    //if user clicked on prev button
    
    $('#buttons a').click(function (e) {
        //textSlide the item
        
        if (container.is(':animated')) {
            return false;
        }
        if (e.target.id == previous) {
            container.stop().animate({
                'left': 0
            }, 1500, function () {
                container.find(elm + ':first').before(container.find(elm + ':last'));
                resetSlides();
            });
        }
        
        if (e.target.id == next) {
            container.stop().animate({
                'left': item_width * -2
            }, 1500, function () {
                container.find(elm + ':last').after(container.find(elm + ':first'));
                resetSlides();
            });
        }
        
        //cancel the link behavior            
        return false;
        
    });
    
    //if mouse hover, pause the auto rotation, otherwise rotate it    
    container.parent().mouseenter(function () {
        clearInterval(run);
    }).mouseleave(function () {
        run = setInterval(rotate, speed);
    });
    
    
    function resetSlides() {
        //and adjust the container so current is in the frame
        container.css({
            'left': -1 * item_width
        });
    }
    
});
//a simple function to click next link
//a timer will call this function, and the rotation will begin

function rotate() {
    $('#next').click();
}









