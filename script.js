$(document).ready(function(){
  // Highlight active link
  $("nav ul li a").on("click", function(){
    $("nav ul li a").removeClass("active");
    $(this).addClass("active");
  });

  // Simple fade-in effect
  $("section").hide().fadeIn(1000);
});
