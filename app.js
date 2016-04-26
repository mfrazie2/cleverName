$(document).ready(function() {
  $("#submit").on('click', function() {
    var newToDo = $('#input').val();
    newToDo = "<li class='to-do'>" + newToDo + "</li>";
    $(newToDo).appendTo("#todo-list");
    $('#input').val('');
  });
  
  $('#todo-list').on('click', '.to-do', function() {
    $(this).toggleClass('completed');
    console.log('running on new list items');
  })
  
  
});