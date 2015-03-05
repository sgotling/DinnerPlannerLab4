function getRecipeJson() {
var apiKey = "dvx6j4dEVCjgc02u8V5y928UJ4KjIO04";
// var recipeID = 196149;
var recipeID = 179434;
var url = "http://api.bigoven.com/recipe/" + recipeID + "?api_key="+apiKey;
$.ajax({
         type: "GET",
         dataType: 'json',
         cache: false,
         url: url,
         success: function (data) {
            alert('success');
            console.log(data);
            }
         });
       }



function getRecipeJson2() {
        var apiKey = "dvx6j4dEVCjgc02u8V5y928UJ4KjIO04";
        var titleKeyword = "main dish";
        var url = "http://api.bigoven.com/recipes?pg=1&rpp=25&title_kw="
                  + titleKeyword 
                  + "&api_key="+apiKey;
        $.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            url: url,
            success: function (data) {
                alert('success');
                console.log(data);
                return data;
            }
        });
    }

var data = getRecipeJson();


// "http://redirect.bigoven.com/pics/appetizer-chex-party-mix.jpg"


