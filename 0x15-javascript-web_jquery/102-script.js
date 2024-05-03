// 102-script.js
$(document).ready(function() {
  // Add a click event handler to the "Translate" button
  $('#btn_translate').click(function() {
    // Get the language code from the input field
    var languageCode = $('#language_code').val();

    // Fetch the translation using the API
    $.getJSON('https://www.fourtonfish.com/hellosalut/hello/' + languageCode, function(data) {
      // Display the translation in the DIV#hello element
      $('#hello').text(data.hello);
    })
    .fail(function() {
      // Display an error message if the API request fails
      $('#hello').text('Error fetching translation');
    });
  });
});

