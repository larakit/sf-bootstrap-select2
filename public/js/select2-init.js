function formatSelect2(data) {
    if (data.loading) return 'Идет поиск';
    var markup = '<div class="clearfix">';
    if (data.thumb_url) {
        markup += '<div class="col-sm-1">' + '<img src="' + data.thumb_url + '" style="max-width: 100%" />' + '</div>' +
            '<div class="col-sm-10">' + data.text + '</div>';
    } else {
        markup += '<div clas="col-sm-12">' + data.text + '</div>';
    }
    markup += '</div></div>';

    return $(markup);
}

function formatIconsSelect2(data) {
    if (data.loading) return 'Идет поиск';
    var markup = data.element.value;
    var html = '<span><i class="fa fa-' + markup + '"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>' + markup + '</b></span>';
    return $(html);
}

function formatSelect2Selection(data) {
    //console.log(data);
    return data.value ? data.value : data.text;
}

function initSelect2() {
    var $this = $(this),
        attrs = $this.attrs(),
        defaults = {},
        config = {},
        ajax_url = $this.attr('data-url'),
        template = $this.attr('data-template'),
        templateSelection = $this.attr('data-templateSelection');
    for (attr in attrs) {
        var sp = attr.split('data-s2-');
        if ('undefined' != typeof(sp[1])) {
            //if ('undefined' != typeof(defaults[sp[1]])) {
            config[sp[1]] = attrs[attr];
            //}
        }
    }
    //console.log(config);
    var options = $.extend({}, defaults, config);
    if (ajax_url) {
        options.ajax = {
            type: "post",
            url: ajax_url,
            dataType: 'json',
            delay: 250,
            data: function (params) {
                return {
                    query: params.term,
                    page: params.page
                };
            },
            processResults: function (data, page) {
                return {
                    results: data.items
                };
            }
        };
        options.templateResult = formatSelect2;
        options.templateSelection = formatSelect2Selection;
    } else {
        options.templateSelection = formatSelect2Selection;
    }
    if ('undefined' != typeof(template)) {
        options.templateResult = eval(template);
    }
    if ('undefined' != typeof(templateSelection)) {
        options.templateSelection = eval(templateSelection);
    }



    //console.log(options);

    options.escapeMarkup = function (m) {
        return m;
    };
    options.theme = 'bootstrap';
    options.language = 'ru';
    var select = $this.select2(options);
    //console.log($this);
    $this.on('change', function(){
        //select.trigger('change');
    })
};

function js_icon(e){
    $(e.element).closest(".input-group").find(".js-prepend-icon").attr("class", "js-prepend-icon fa fa-"+e.text);
    return e.text;
}

LarakitJs.initSelector('.js-larakit-select2', initSelect2);