// Check off specific todos
$('ul').on("click", "li", function() {
  $(this).toggleClass("completed");
});

// delete todo
$("ul").on("click", "span", function(e) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  e.stopPropagation();
});

$("input[type='text']").keypress(function(e) {
  if(e.which === 13){
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
});

$(".fa-pencil-square-o").click(function() {
  $("input[type='text']").fadeToggle();
});
