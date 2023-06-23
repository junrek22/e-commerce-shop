$(document).ready(function(){
    $(".profile-button").click(function(){
        $(".profile-drop-downs").toggleClass("hide-profile");
        alert("click")
    });
    window.onclick = function(event) {
        if (!event.target.matches("#profile-button")) {
            $(".profile-drop-downs").addClass("hide-profile");
        }else{
            $(".profile-drop-downs").toggleClass("hide-profile");
        }
    }
});