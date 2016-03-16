jQuery(document).ready(function($) {

    var getQueryToJson = function () {
        var queryObj = {};
        queryObj.text = $(".hFwhereto input[type=text]").val(); //some text
        queryObj.city = $(".hFwherein input[type=hidden]").val(); //some city
        queryObj.page = Number($(".hFpageValue input[type=hidden]").val()) + 1; //request page number

        console.log("Send: ", $.toJSON(queryObj), "."); // verify query

        return queryObj;
    }


    function ajaxQuerySendJsonP() {// Get data from site


        request = getQueryToJson();

        $.ajax({
            url: 'http://mysite.com/jsonprequest', // site url
            data: request, // query
            dataType: 'jsonp', // jsonp type
            jsonpCallback: 'myfunc' // site callback function name. Put on global
        });

    }

});

function myfunc(response){ // callback function put on Global
    console.log($.toJSON(response));
}
