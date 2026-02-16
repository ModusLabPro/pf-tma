

document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById("address");
    let dadata = Dadata.createSuggestions(input, {
        token: "157195489360b46d573d9959e164468efc6ce10b",
        type: "address",
        onSelect: function(suggestion) {
            document.getElementById("dadata_json").value = JSON.stringify(suggestion.data, null, 2)
            document.getElementById("region_dadata").value = suggestion.data.region_with_type
            document.getElementById("city_dadata").value = suggestion.data.city_with_type
            document.getElementById("street").value = suggestion.data.street_with_type
            document.getElementById("house").value = suggestion.data.house
            document.getElementById("apartment").value = suggestion.data.flat
            document.getElementById("postal_code").value = suggestion.data.postal_code
            document.getElementById("latitude").value = suggestion.data.geo_lat
            document.getElementById("longitude").value = suggestion.data.geo_lon
/*            document.getElementById("dadata_json").value = suggestion.data*/
        }
    });
/*    console.log('yes1')
    console.log(input, dadata)
    console.log('yes2')*/
})



