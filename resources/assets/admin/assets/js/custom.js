
var delete_with_swal = function(url,_token,remove_section){
    swal({
            title: "Are You Sure ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel please!",
            closeOnConfirm: false,
            closeOnCancel: false,
            showLoaderOnConfirm: true
        },
        function(isConfirm){
            if(isConfirm){
                $.ajax({
                    type:"DELETE",
                    url : url,
                    data:{_token:_token},
                    success : function(r){
                        if(remove_section){
                            remove_section.remove();
                        }
                        swal({
                            title:"Removed",
                            timer:700,
                            type:"success"
                        })
                    }

                });
            }else{
                swal({
                    title: "Not Removed!!",
                    timer: 700,
                    type: "info"
                });
            }
        }
    );
    return false;
};

var img_cropper = function(){

}

$('document').ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});



