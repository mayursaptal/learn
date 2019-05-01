var type_event_list ;




var type_event_list;
$.ajax({
    type: 'GET',
    url: 'json/getqoation.json',
    dataType: 'text',
    success: function (data) {
        type_event_list = JSON.parse( data);
        var event = getUrlVars()['type'];
        var type_form = getUrlVars()['type_form'];
        var event_type_desc = '';
        $.each(
            type_event_list[event],
            function () {
                if (this.type == type_form) {
                    event_type_desc += '<p>' + this.description + '</p>';
                }
            }
        );
        
        $('a').attr('href', 'getqutation.html?type=' + event + '&type_form=' + type_form);
        
        $('#event-type-desc').html(event_type_desc);
    },
    error: function (data) {
        type_event = data;
    },
}

);