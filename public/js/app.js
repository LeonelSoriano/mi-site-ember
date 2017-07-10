//responsive menu slicknav
/*$(function () {
    "use strict";
    $('.counter-up').counterUp({
        delay: 10
        , time: 3000
    });
    $('.counter-up-fast').counterUp({
        delay: 5
        , time: 1000
    });
    //circular progress animation
    $('.circlestat').circliful();
});*/

$(function () {
    "use strict";
    $('.slicknav').slicknav({
        label: "Fondamix"
    });



    /*
     * INITIALIZE BUTTON TOGGLE
     * ------------------------
     * always use this code for toggle and close button effect
     */


});
/*     
 * Add collapse and remove events to boxes
 */
(function ($) {
    "use strict";

	$("ul.topnav li").click(function(){
		var speedAnimation = 350;

		if($( this ).find("ul").css('display') === 'none'){
			$( this ).find("ul").slideDown(speedAnimation);
		}else{
			$( this ).find("ul").slideUp(speedAnimation);
		}

});



})(jQuery);
//Find the box parent

