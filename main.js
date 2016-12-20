/* global $ */
$(function(){
    
    $(".side-tab").click(function(){
        var selected = $(".sidenav .selected");
        var selectedClass = selected.attr("class");
        var nav = $(".sidenav ul li a");
        var clickedTab = $(this);
        var clickedId = $(this).attr("id");
        selected.removeClass("selected");
        clickedTab.addClass("selected");
        $(".content-pane").fadeOut();
        console.log("." + clickedId+"-pane");
        $("." + clickedId + "-pane").fadeIn();
        // selected tab has gc-navbar 
        // the gc-navbar and add -pane
        //fade in gc-navbar-pane
        
        
        
        
    });
    
    
    
    
    
})


function load(e){
    $(".content-pane").fadeOut();
    
    
}
