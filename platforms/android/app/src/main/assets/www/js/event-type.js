var type_event_list ;



var type_event;
$.ajax({
    type: 'GET',
    url: 'json/event-type.json',
    dataType: 'text',
    success: function (data) {
        type_event_list = JSON.parse(data);
        var event = getUrlVars()['type'];
        var event_type = '';
        $.each(
            type_event_list[event],
            function () {

                event_type += '<li><a  href="' + this.url + '"> ' + this.type + ' </a></li>';
            }
        );

        $('#event-type').html(event_type);
    },
    error: function (data) {
        type_event = data;
    },
}

);

