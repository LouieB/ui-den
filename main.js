/* global $ */
$(function(){
    
    $(".side-tab").click(function(){
        var selected = $(".selected");
        var selectedClass = selected.attr("class");
        var nav = $(".sidenav ul li a");
        var clickedTab = $(this);
        var clickedId = $(this).attr("id");
        selected.removeClass("selected");
        clickedTab.addClass("selected");
        $(".content-pane").fadeOut();
        $("." + clickedId + "-pane").fadeIn();
        
    });
    
    
    
    
    
})


