
var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },


    onDeviceReady: function () {

    },
};

app.initialize();



/**
 * devloped by mayur saptal  19 mar 2019 
 * required jquery
 */



try {

    /* code for get routing parameters getUrlVars() */

    function getUrlVars() {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }


    // code for routing  data-route 

    $(document).click(function (event) {
        if ($(event.target).data('route')) {
            window.location.href = $(event.target).data('route');
        }
    });

    // code for get current page 

    var sPath = window.location.pathname;
    //var sPage = sPath.substring(sPath.lastIndexOf('\\') + 1);
    var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);


    // code for prevent back is_prevent=true

    var is_prevent = getUrlVars()['is_prevent'];
    if (sPage == 'index.html' || is_prevent) {
        history.pushState(null, document.title, location.href);
        window.addEventListener('popstate', function (event) {
            history.pushState(null, document.title, location.href);
        });
    }

    // include page   data-page  pass para data-para

    var loadPages = $('.page-part');
    $.each(loadPages, function () {

        if ($(this).data('page')) {
            if($(this).data('para')){
                var para = $(this).data('para');
            }
            $(this).html('<object  type="text/html" data="' + $(this).data('page') + '.html?'+para+'" > </object>');
        }

    });




} catch (err) {
    console.log(err);
}



$('.logo').click(
    function () {
        window.location.href = 'index.html';
    }
);