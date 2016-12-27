function myFunction(){
    var x = document.getElementById("myTopNav")
    if(x.className === "topnav"){
        x.className += " responsive";
    }
    else{
        x.className = "topnav";
    }
}

$(document).ready(function(){

$("#num").hide(); // hides the element in the parenthesis put a "" around to target a tag of the html

$("#phone").click(function(){// This hides and reveal the above code on every click

$(this).next().slideToggle(300);//The higher the number, the slower the transition
})

})


$(document).ready(function(){

$("#email").hide(); // hides the element in the parenthesis put a "" around to target a tag of the html

$("#mail").click(function(){// This hides and reveal the above code on every click

$(this).next().slideToggle(300);//The higher the number, the slower the transition
})

})


$(window).scroll(function(){
    if($(document).scrollTop() > 540){
        $("ul").addClass("shrink");
    }
    
    else{
        $("ul").removeClass("shrink")
    }
})



$(document).ready(function(){
    
    $(".slidingPanel").hide();
    $(".show_hide").show();
    
    $('.show_hide').click(function(){
        $(".slidingPanel").slideToggle()
    })
    
})
















