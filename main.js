/* global $ */
$(function(){
    
    $(".side-tab").click(function(){
        var selected = $(".sidenav .selected");
        var selectedId = selected.attr("id");
        var nav = $(".sidenav ul li a");
        var clickedTab = $(this);
        selected.removeClass("selected");
        clickedTab.addClass("selected");
        
        
        
        
    });
})

