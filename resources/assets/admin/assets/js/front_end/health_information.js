$('document').ready(function(){

    $('.category_link').on({
        click:function(e){
            $(this).parent().find('.child_menu_item').niceScroll({cursorcolor:"#323A45",cursorwidth:"15px"});
        }
    });

});