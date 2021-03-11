odoo.define('website_sale_search.product_advance_search', function (require) {
    'use strict';

    $(function () {
        if($(".oe_search_box")){
            var searchBox = $(".oe_search_box");
            var formPage = searchBox.parents('form');
            var searchCategory = formPage.find('input[name="search_category"]');
            var actual_action = formPage.attr('action');

            // if category value all than search in all products
            // set action in the form
            searchCategory.on('change', function(e){
                if ($(this).val() === 'all') {
                    formPage.attr('action', '/shop');
                } else {
                    formPage.attr('action', actual_action);
                }
            });
            searchCategory.trigger('change');

            // remove querystring values from the url and redirect user to the cliked category only.
            $('#o_shop_collapse_category li>a').click(function(event){
                event.preventDefault();
                event.stopPropagation();
                searchBox.val('');
                window.location = $(event.currentTarget).attr('href').split('?')[0];
            });
        }
    });
});
