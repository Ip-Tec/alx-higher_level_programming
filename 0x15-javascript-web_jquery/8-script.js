// 8-script.js
$(document).ready(function() {
  $.ajax({
    url: "https://swapi-api.alx-tools.com/api/films/?format=json",
    type: "GET",
    success: function(data) {
      var movies = data.results;
      var movieList = $("#list_movies");

      $.each(movies, function(index, movie) {
        movieList.append("<li>" + movie.title + "</li>");
      });
    },
    error: function(error) {
      console.log("Error fetching movie titles:", error);
    }
  });
});

