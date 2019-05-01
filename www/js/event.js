var type_event;
$.ajax({
    type: 'GET',
    url: 'json/event.json',
    dataType: 'text',
    success: function (data) {
        type_event = JSON.parse( data);
        var event_list = '';
        $.each(
            type_event,
            function () {
                event_list += '<li><a  href="' + this.url + '"> ' + this.type + ' </a></li>';
            }
        );

        $('#event-list').html(event_list);
    },
    error: function (data) {
        type_event = data;
    },
}

);

