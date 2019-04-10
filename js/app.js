$(document).ready(function () {
    $("#allBtn").click(function () {
        $("#out").html('');
        url = "https://restcountries.eu/rest/v2/all";
        printCountry(url)
    });

    $( "#cInput" ).keypress(function() {
        $("#out").html('');
        url = "https://restcountries.eu/rest/v2/name/" + $("#cInput").val();
        printCountry(url)
  });

    $("#searchBtn").click(function () {
        $("#out").html('');
        url = "https://restcountries.eu/rest/v2/name/" + $("#cInput").val();
        printCountry(url)
    });


    let printCountry = (url) => {
        $.ajax({
            url: url,
            type: "GET",
            success: function (response) {
                response.forEach(function (element) {
                    $('#out').append(
                        `        <div class="card col-lg-6 cardCss">
            <div class="row no-gutters">
                <div class="col-auto">
                    <img src="${element.flag}" class="img-fluid" alt="">
                </div>
                <div class="col">
                    <div class="card-block px-2">
                        <h4 class="card-title" id="nameOut">${element.name}</h4>
                        <p class="card-text" ><b>Top Level Domain:</b> <span id="domainOut">${element.topLevelDomain}</span></p>
                        <p class="card-text" ><b>Capital: </b><span id="capOut">${element.capital}</span></p>
                        <p class="card-text" ><b>Currencies:</b> <span id="currOut">${ JSON.stringify(element.currencies[1])
                        }</span></p>
                    </div>
                </div>
            </div>
        </div>

`
                    )
                });
            }
        });
    }
});