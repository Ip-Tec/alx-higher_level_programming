// 103-script.js
$(document).ready(function() {
  // Add a click event handler to the "Translate" button
  $('#btn_translate').click(function() {
    fetchTranslation();
  });

  // Add a keyup event handler to the language code input field
  $('#language_code').keyup(function(event) {
    // If the user presses the ENTER key, fetch the translation
    if (event.keyCode === 13) {
      fetchTranslation();
    }
  });

  // Function to fetch the translation from the API
  function fetchTranslation() {
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
  }
});

