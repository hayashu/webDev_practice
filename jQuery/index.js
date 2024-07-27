$(document).ready(function() {
  // $("h1").addClass("big-title margin-50")
  // $("button").html("<em>Hey</em>")

  $("button").on("click", function(){
    $("h1").animate({opacity: 0.4});
  });
})