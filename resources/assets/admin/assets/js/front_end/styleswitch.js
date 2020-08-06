/* Style Switcher */

window.console = window.console || (function($){
        var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
        return c;
    })();







/************PLEASE DELETE THOSE 3 OF DOCUMENT READY() AFTER COMPLETING THE PROJECT;*****************************************/

/* boxed & wide syle */
$(document).ready(function(){

    var cookieName = 'wide';

    function changeLayout(layout) {
        $.cookie(cookieName, layout);
        $('head link[data-name=layout]').attr('href', 'css/front_end/layout/' + layout + '.css');
    }

    if( $.cookie(cookieName)) {
        changeLayout($.cookie(cookieName));
    }

    $("#wide").click( function(){ $
        changeLayout('wide');
        location.reload();
    });

    $("#boxed").click( function(){ $
        changeLayout('boxed');
        location.reload();
    });

});

/* background images */
$(document).ready(function(){

    var startClass = $.cookie('mycookie');
    $("body").addClass("wood");

    /* crossed */
    $("#crossed").click( function(){
        $("body").removeClass('wood');
        $("body").removeClass('fabric');
        $("body").removeClass('linen');
        $("body").removeClass('diagmonds');
        $("body").removeClass('triangles');
        $("body").removeClass('black_mamba');
        $("body").removeClass('vichy');
        $("body").removeClass('back_pattern');
        $("body").removeClass('checkered_pattern');
        $("body").removeClass('diamond_upholstery');
        $("body").removeClass('lyonnette');
        $("body").removeClass('graphy');
        $("body").removeClass('black_thread');
        $("body").removeClass('subtlenet2');
        $("body").addClass('crossed');
        $.cookie('mycookie','crossed');
    });

    /* fabric */
    $("#fabric").click( function(){
        $("body").removeClass('crossed');
        $("body").removeClass('linen');
        $("body").removeClass('wood');
        $("body").removeClass('diagmonds');
        $("body").removeClass('triangles');
        $("body").removeClass('black_mamba');
        $("body").removeClass('vichy');
        $("body").removeClass('back_pattern');
        $("body").removeClass('checkered_pattern');
        $("body").removeClass('diamond_upholstery');
        $("body").removeClass('lyonnette');
        $("body").removeClass('graphy');
        $("body").removeClass('black_thread');
        $("body").removeClass('subtlenet2');
        $("body").addClass('fabric');
        $.cookie('mycookie','fabric');
    });

    /* linen */
    $("#linen").click( function(){
        $("body").removeClass('crossed');
        $("body").removeClass('fabric');
        $("body").removeClass('wood');
        $("body").removeClass('diagmonds');
        $("body").removeClass('triangles');
        $("body").removeClass('black_mamba');
        $("body").removeClass('vichy');
        $("body").removeClass('back_pattern');
        $("body").removeClass('checkered_pattern');
        $("body").removeClass('diamond_upholstery');
        $("body").removeClass('lyonnette');
        $("body").removeClass('graphy');
        $("body").removeClass('black_thread');
        $("body").removeClass('subtlenet2');
        $("body").addClass('linen');
        $.cookie('mycookie','linen');
    });

    /* wood */
    $("#wood").click( function(){
        $("body").removeClass('crossed');
        $("body").removeClass('fabric');
        $("body").removeClass('linen');
        $("body").removeClass('diagmonds');
        $("body").removeClass('triangles');
        $("body").removeClass('black_mamba');
        $("body").removeClass('vichy');
        $("body").removeClass('back_pattern');
        $("body").removeClass('checkered_pattern');
        $("body").removeClass('diamond_upholstery');
        $("body").removeClass('lyonnette');
        $("body").removeClass('graphy');
        $("body").removeClass('black_thread');
        $("body").removeClass('subtlenet2');
        $("body").addClass('wood');
        $.cookie('mycookie','wood');
    });

    /* diagmonds */
    $("#diagmonds").click( function(){
        $("body").removeClass('crossed');
        $("body").removeClass('fabric');
        $("body").removeClass('linen');
        $("body").removeClass('wood');
        $("body").removeClass('triangles');
        $("body").removeClass('black_mamba');
        $("body").removeClass('vichy');
        $("body").removeClass('back_pattern');
        $("body").removeClass('checkered_pattern');
        $("body").removeClass('diamond_upholstery');
        $("body").removeClass('lyonnette');
        $("body").removeClass('graphy');
        $("body").removeClass('black_thread');
        $("body").removeClass('subtlenet2');
        $("body").addClass('diagmonds');
        $.cookie('mycookie','diagmonds');
    });

    /* triangles */
    $("#triangles").click( function(){
        $("body").removeClass('crossed');
        $("body").removeClass('fabric');
        $("body").removeClass('linen');
        $("body").removeClass('wood');
        $("body").removeClass('diagmonds');
        $("body").removeClass('black_mamba');
        $("body").removeClass('vichy');
        $("body").removeClass('back_pattern');
        $("body").removeClass('checkered_pattern');
        $("body").removeClass('diamond_upholstery');
        $("body").removeClass('lyonnette');
        $("body").removeClass('graphy');
        $("body").removeClass('black_thread');
        $("body").removeClass('subtlenet2');
        $("body").addClass('triangles');
        $.cookie('mycookie','triangles');
    });

    /* triangles */
    $("#black_mamba").click( function(){
        $("body").removeClass('crossed');
        $("body").removeClass('fabric');
        $("body").removeClass('linen');
        $("body").removeClass('wood');
        $("body").removeClass('diagmonds');
        $("body").removeClass('triangles');
        $("body").removeClass('vichy');
        $("body").removeClass('back_pattern');
        $("body").removeClass('checkered_pattern');
        $("body").removeClass('diamond_upholstery');
        $("body").removeClass('lyonnette');
        $("body").removeClass('graphy');
        $("body").removeClass('black_thread');
        $("body").removeClass('subtlenet2');
        $("body").addClass('black_mamba');
        $.cookie('mycookie','black_mamba');
    });

    /* vichy */
    $("#vichy").click( function(){
        $("body").removeClass('crossed');
        $("body").removeClass('fabric');
        $("body").removeClass('linen');
        $("body").removeClass('wood');
        $("body").removeClass('diagmonds');
        $("body").removeClass('triangles');
        $("body").removeClass('black_mamba');
        $("body").removeClass('back_pattern');
        $("body").removeClass('checkered_pattern');
        $("body").removeClass('diamond_upholstery');
        $("body").removeClass('lyonnette');
        $("body").removeClass('graphy');
        $("body").removeClass('black_thread');
        $("body").removeClass('subtlenet2');
        $("body").addClass('vichy');
        $.cookie('mycookie','vichy');
    });

    /* back_pattern */
    $("#back_pattern").click( function(){
        $("body").removeClass('crossed');
        $("body").removeClass('fabric');
        $("body").removeClass('linen');
        $("body").removeClass('wood');
        $("body").removeClass('diagmonds');
        $("body").removeClass('triangles');
        $("body").removeClass('black_mamba');
        $("body").removeClass('vichy');
        $("body").removeClass('checkered_pattern');
        $("body").removeClass('diamond_upholstery');
        $("body").removeClass('lyonnette');
        $("body").removeClass('graphy');
        $("body").removeClass('black_thread');
        $("body").removeClass('subtlenet2');
        $("body").addClass('back_pattern');
        $.cookie('mycookie','back_pattern');
    });

    /* checkered_pattern */
    $("#checkered_pattern").click( function(){
        $("body").removeClass('crossed');
        $("body").removeClass('fabric');
        $("body").removeClass('linen');
        $("body").removeClass('wood');
        $("body").removeClass('diagmonds');
        $("body").removeClass('triangles');
        $("body").removeClass('black_mamba');
        $("body").removeClass('vichy');
        $("body").removeClass('back_pattern');
        $("body").removeClass('diamond_upholstery');
        $("body").removeClass('lyonnette');
        $("body").removeClass('graphy');
        $("body").removeClass('black_thread');
        $("body").removeClass('subtlenet2');
        $("body").addClass('checkered_pattern');
        $.cookie('mycookie','checkered_pattern');
    });

    /* diamond_upholstery */
    $("#diamond_upholstery").click( function(){
        $("body").removeClass('crossed');
        $("body").removeClass('fabric');
        $("body").removeClass('linen');
        $("body").removeClass('wood');
        $("body").removeClass('diagmonds');
        $("body").removeClass('triangles');
        $("body").removeClass('black_mamba');
        $("body").removeClass('vichy');
        $("body").removeClass('back_pattern');
        $("body").removeClass('checkered_pattern');
        $("body").removeClass('lyonnette');
        $("body").removeClass('graphy');
        $("body").removeClass('black_thread');
        $("body").removeClass('subtlenet2');
        $("body").addClass('diamond_upholstery');
        $.cookie('mycookie','diamond_upholstery');
    });

    /* lyonnette */
    $("#lyonnette").click( function(){
        $("body").removeClass('crossed');
        $("body").removeClass('fabric');
        $("body").removeClass('linen');
        $("body").removeClass('wood');
        $("body").removeClass('diagmonds');
        $("body").removeClass('triangles');
        $("body").removeClass('black_mamba');
        $("body").removeClass('vichy');
        $("body").removeClass('back_pattern');
        $("body").removeClass('checkered_pattern');
        $("body").removeClass('diamond_upholstery');
        $("body").removeClass('graphy');
        $("body").removeClass('black_thread');
        $("body").removeClass('subtlenet2');
        $("body").addClass('lyonnette');
        $.cookie('mycookie','lyonnette');
    });

    /* graphy */
    $("#graphy").click( function(){
        $("body").removeClass('crossed');
        $("body").removeClass('fabric');
        $("body").removeClass('linen');
        $("body").removeClass('wood');
        $("body").removeClass('diagmonds');
        $("body").removeClass('triangles');
        $("body").removeClass('black_mamba');
        $("body").removeClass('vichy');
        $("body").removeClass('back_pattern');
        $("body").removeClass('checkered_pattern');
        $("body").removeClass('diamond_upholstery');
        $("body").removeClass('lyonnette');
        $("body").removeClass('black_thread');
        $("body").removeClass('subtlenet2');
        $("body").addClass('graphy');
        $.cookie('mycookie','graphy');
    });

    /* black_thread */
    $("#black_thread").click( function(){
        $("body").removeClass('crossed');
        $("body").removeClass('fabric');
        $("body").removeClass('linen');
        $("body").removeClass('wood');
        $("body").removeClass('diagmonds');
        $("body").removeClass('triangles');
        $("body").removeClass('black_mamba');
        $("body").removeClass('vichy');
        $("body").removeClass('back_pattern');
        $("body").removeClass('checkered_pattern');
        $("body").removeClass('diamond_upholstery');
        $("body").removeClass('lyonnette');
        $("body").removeClass('graphy');
        $("body").removeClass('subtlenet2');
        $("body").addClass('black_thread');
        $.cookie('mycookie','black_thread');
    });

    /* subtlenet2 */
    $("#subtlenet2").click( function(){
        $("body").removeClass('crossed');
        $("body").removeClass('fabric');
        $("body").removeClass('linen');
        $("body").removeClass('wood');
        $("body").removeClass('diagmonds');
        $("body").removeClass('triangles');
        $("body").removeClass('black_mamba');
        $("body").removeClass('vichy');
        $("body").removeClass('back_pattern');
        $("body").removeClass('checkered_pattern');
        $("body").removeClass('diamond_upholstery');
        $("body").removeClass('lyonnette');
        $("body").removeClass('graphy');
        $("body").removeClass('black_thread');
        $("body").addClass('subtlenet2');
        $.cookie('mycookie','subtlenet2');
    });



    if ($.cookie('mycookie')) {
        $('body').addClass($.cookie('mycookie'));
    }

});

/* Skins Style */
$(document).ready(function($){

    var cookieName = 'default';

    function changeLayout(layout) {
        $.cookie(cookieName, layout);
        $('head link[data-name=skins]').attr('href', 'css/front_end/skins/' + layout + '.css');
    }

    if( $.cookie(cookieName)) {
        changeLayout($.cookie(cookieName));
    }

    $("#default").click( function(){ $
        changeLayout('default');
    });

    $("#Strongcyan").click( function(){ $
        changeLayout('Strongcyan');
    });
    $("#DarkCyan").click( function(){ $
        changeLayout('DarkCyan');
    });
    $("#asphalt").click( function(){ $
        changeLayout('asphalt');
    });
    $("#blue").click( function(){ $
        changeLayout('blue');
    });
    $("#orange").click( function(){ $
        changeLayout('orange');
    });
    $("#clouds").click( function(){ $
        changeLayout('clouds');
    });
    $("#Softred").click( function(){ $
        changeLayout('Softred');
    });
    $("#green").click( function(){ $
        changeLayout('green');
    });
    $("#orange").click( function(){ $
        changeLayout('orange');
    });

});


/* Reset Switcher */
$(document).ready(function(){


    // Style Switcher
    $('.switcher').animate({
        left: '-255px'
    });

    $('.switcher h2 a').click(function(e){
        e.preventDefault();
        var div = $('.switcher');
        if (div.css('left') === '-255px'){
            $('.switcher').animate({
                left: '0px'
            });
        }else{
            $('.switcher').animate({
                left: '-255px'
            });
        }
    });
});

