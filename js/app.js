$(document).ready(function () {

    $.ajax({
        url: "https://reqres.in/api/users?page=2",
        type: "GET",
        success: function (response) {
            response.data.forEach(function (element) {
                $('#out').append(
                    `<h1>${element.last_name}</h1>`
                )
            });
        }
    });

});