$( document ).ready(function() {

    var list=0;
    /*$( "#carouselExampleControls" ).hover(
        function() {
            $( ".carousel-control-next" ).fadeIn( 100 );
        },function() {
            $( ".carousel-control-next" ).fadeOut( 100 );
        }
      );
      
    $( ".carousel-control-next" ).click(
        
        function() {
            var childrenArray = $(this).parent().children('div').toArray();
            console.log(childrenArray.length);
            $(this).next().fadeIn( 100 );
            if(list<childrenArray.length-1)
                list=list+1;
        }
        );
    $( ".carousel-control-prev" ).click(
        function() {
            list=list-1;
            if(list==0){
                $( "#carouselExampleControls" ).on( "mouseenter mouseleave",rebin());
                $( ".carousel-control-prev" ).fadeOut( 100 );
            }
        }
        );
    function rebin(){
        $( "#carouselExampleControls" ).hover(
            function() {
                $( ".carousel-control-next" ).fadeIn( 100 );
            }
          );
    }*/
    $( ".carousel-control-next" ).click(
        
        function() {
            $(this).prev().fadeIn();

        }
        );
        
    submitForms = function(){
        document.getElementById("q1-form").submit();
        document.getElementById("q2-form").submit();
        document.getElementById("q3-form").submit();
    }
});