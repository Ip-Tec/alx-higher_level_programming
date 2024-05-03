// 101-script.js
$(document).ready(function() {
  // Add a new item to the list when the "Add item" div is clicked
  $('#add_item').click(function() {
    $('.my_list').append('<li>Item</li>');
  });

  // Remove the last item from the list when the "Remove item" div is clicked
  $('#remove_item').click(function() {
    $('.my_list li:last-child').remove();
  });

  // Clear the entire list when the "Clear list" div is clicked
  $('#clear_list').click(function() {
    $('.my_list').empty();
  });
});

