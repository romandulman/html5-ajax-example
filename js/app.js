$(document).ready(function () {
    $( "#allBtn" ).click(function() {
        $.ajax({
            url: "https://restcountries.eu/rest/v2/all",
            type: "GET",
            success: function (response) {
                response.forEach(function (element) {
                    $('#out').append(
                        `        <div class="card col-md-6">
            <div class="row no-gutters">
                <div class="col-auto">
                    <img src="${element.flag}" class="img-fluid" alt="">
                </div>
                <div class="col">
                    <div class="card-block px-2">
                        <h4 class="card-title" id="nameOut">${element.name}</h4>
                        <p class="card-text" >Top Level Domain: <span id="domainOut">${element.topLevelDomain}</span></p>
                        <p class="card-text" >Capital: <span id="capOut">${element.capital}</span></p>
                        <p class="card-text" >Currencies: <span id="currOut">${element.currencies.code}</span></p>
                    </div>
                </div>
            </div>
        </div>

`
                    )
                });
            }
        });
    });

    $( "#searchBtn" ).click(function() {

    });

    let printCountry = () =>{

    }

});