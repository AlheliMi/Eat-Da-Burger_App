// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(document).ready(function() {
  $(".change-devour").on("click", function(event) {
   event.preventDefault() 
   var id = $(this).data("id");
   console.log(id);
   console.log(this);
   var newDevoured = $(this).data("newdevoured");
        console.log(newDevoured);
    var newDevouredState = {
      devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax( {
     method: "PUT",
     url: "/api/burger/" + id,
    data: newDevouredState
    }).then(
      function() {
        console.log("changed devored to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

/* $(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
   

    var newDevouredState = {
      devoured:true

    };

    // Send the PUT request.
    $.ajax("/api/burguer/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed Devoured to true");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  }); */

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#newBurger").val().trim(),
      
    };
    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new Delicious Burger!!");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burger/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted Burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
