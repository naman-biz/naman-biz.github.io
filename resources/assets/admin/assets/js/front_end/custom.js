var $_this, url, data, url_for_functiolanlity, url_for_forntend, url_for_backend,displayDataInSwitcher,areaToShow,
    callFrom, count, i, project_info_holder,user_authentication_template;

/***********ADD IMAGE INTO THE MODEL FOR PORTFOLIO SECTION*****************************/
var addImageToModelBox = function($_this){
    project_info_holder = ' \
    <div class="content"> \
    	<div class="layout-switcher"> \
    		<h3>Backend:</h3>\
    		<div class="backend_data">\
    		    <!----------DATA WILL BE LOADED BY displayDataInSwitcher FUNCTION------------>\
    		</div>\
    		<h3>Frontend:</h3>\
    		<div class="forntend_data">\
    		    <!----------DATA WILL BE LOADED BY displayDataInSwitcher FUNCTION------------>\
    		</div>\
        </div> \
    \
        <div class="clear"></div> \
        <div class="switcher-box"> \
    		<h3>Fetured Functionality:</h3> \
    		<ul class="featured_functionality">\
    		<center><img style="height: 150px;" src="images/loading.gif"><center>\
    		</ul>\
        </div><!-- End switcher-box --> \
    \
        <div class="clear"></div> \
        <hr>\
    </div><!-- End content --> \
	';
	
    var imageToShow = $($_this).parent().prev().attr('src');
    var placeToShow = $('#animatedModal .modal-content').find('img');
    var liveUrl = $_this.data('live_url');
    $('.live_url').attr('href',liveUrl);
    placeToShow.attr('src',imageToShow);
    $('.switcher').animate({
      left: '0px',
      width:'255px'
    });
    $('.switcher .content').html( project_info_holder );
    $('.close-animatedModal').css({'background':'#666','text-align':'center'})
    url_for_functiolanlity = $_this.data('url_functionality');
    url_for_backend = $_this.data('url_backend');
    url_for_forntend = $_this.data('url_frontend');
    $.get(url_for_functiolanlity,function(data){
        areaToShow  = $('.featured_functionality');
        callFrom    = "featured_functionality";
        displayDataInSwitcher(callFrom,areaToShow,data); 
    });
    $.get(url_for_backend,function(data){
        areaToShow  = $('.backend_data');
        callFrom    = "backend_data";
        displayDataInSwitcher(callFrom,areaToShow,data);
    });
    $.get(url_for_forntend,function(data){
        areaToShow = $('.forntend_data');
        callFrom    = "forntend_data";
        displayDataInSwitcher(callFrom,areaToShow,data);
    });
    return $_this;
}

displayDataInSwitcher = function(callFrom,areaToShow,data){
    areaToShow.html(" ");
    if(callFrom == "featured_functionality"){
        $('.switcher .notification_header').html('Project details');
        for(i=0,count=data.length;i<count;i++){
            $('.featured_functionality').append("<li><h3><i class='fa fa-arrow-circle-right'></i> "+data[i].functionality+"</h3></li>");
        }
    }
    else if(callFrom == "backend_data"){
        for(i=0,count=data.length;i<count;i++){
            areaToShow.append("<span class='badge'>"+data[i].backend+"</span>")   
        }   
    }
    else{
        for(i=0,count=data.length;i<count;i++){
            areaToShow.append("<span class='badge'>"+data[i].frontent+"</span>")   
        } 
    }
    
}

user_authentication_template = function(){
    if($('.switcher .user_authentication').length == 0){
        var styleswitcherstr = ' \
        	 <div class="user_authentication">\
                  <h3>Profile</h3> \
              	  <div class="layout-switcher"> \
                  </div> \
                  \
                  <div class="clear"></div> \
                  <div class="switcher-box"> \
              		  <h3>Blog-Post</h3> \
                  </div><!-- End switcher-box --> \
                  \
                  <div class="clear"></div> \
                </div>\
        	';
        $('.switcher .content').html( styleswitcherstr );
    }
}



$(document).ready(function(){
    
    paceOptions = {
        elements: false,

      // Only show the progress on regular and ajax-y page navigation,
      // not every request
        restartOnRequestAfter: false,
    }
    
    /*********WRITE THE TEMPLATE OF USER AUTHENTICATION IN SWITCHER BOX;************/
    $('.switcher a').click(function(){
        user_authentication_template();    
    })
    
    /*********HOVER EFFECT USING SLIPHOVER;*************************/
    $('.serviceBox_3').sliphover({
        caption:'title'
    });
    $('.touching').sliphover({
        caption:'title'
    })

    /***************SKILL BOX ANIMATION*****************************/
    $(document).on({'mouseenter':function(){
        $(this).addClass('animated pulse').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass('animated pulse');
        });
    }}, '.serviceBox_4')
    /*********PORTFOLIO DETAILS BATTON TRIGGER FUNCTION;************/
    $(document).on({'click':function(e){
      e.preventDefault()
      $_this = $(this);
      addImageToModelBox($_this);
    }} ,'.portfolio_details');
    
    /*********PORT-FOLIO MODEL WINDOW CLOSE FUNCTION;;************/
    $(document).on({'click':function(){
        $('.switcher').animate({
          left: '-255px',
        });
    }}, '.close-animatedModal')
    
    /*********PORT-FOLIO MODEL WINDOW OPENER;************/
    $(".portfolio_details").animatedModal();
    
    

    /*********REDIRECTING TO LIVE URL SWAL ALERT****************/
    $(document).on({'click':function(e){
        e.preventDefault();
        
        swal({
                title: "Are you sure?",
                text: "You are going to visit the live !",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                timer: 6000,
                confirmButtonText: "Yes, Let me go!",
                cancelButtonText: "No, Stay hare!",
                closeOnConfirm: false,
                closeOnCancel: false
            },
            function(isConfirm){
                if (isConfirm) {
                    swal("Redirected!", "You are redirecting.", "success");
                    window.open(live_url,'_blank');
                } else {
                    swal("Cancelled", "Redirection is canceled :)", "error");
                }
            });
    }}, '.live_url');


    
    
    
    
})