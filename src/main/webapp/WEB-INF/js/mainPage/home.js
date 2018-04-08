// JavaScript Document


;
var ROOT_URL =path;
$(function(){
	
	var planetTravelConfig = {
		flyStarImage	: [ [ path +'/img/mainPage/star-fly-1.png' , 23 ,23 ] ],
		flashStarImage	: [ [ path +'/img/mainPage/star-flash-1.png' , 30 ,27 ] , [ path +'/img/mainPage/star-flash-2.png' , 40 ,40 ], [ path +'/img/mainPage/star-flash-2.png' , 40 ,40 ] ],
		flashStarDensity	: 0.3 	,
		flyMakeStarTime		: 5000 , 
		flyMakestarNum		: 2  	
	};
	
	if( '\v' == 'v' ){ /*如果是 IE6,7,8*/
		planetTravelConfig.flyMakeStarTime	=  8000 ; 
		planetTravelConfig.flyMakestarNum	=  1 
	} 
	
	$('body').planetTravel(planetTravelConfig);	
/*	if(is_home){
		$('body').css({'overflow':'hidden'});
	}*/
	
	
	julying.gridMenu.menu = Array(		
//		{ name : 'about-me' ,  	pos : rand( 1 , 15 )  }
	); 
	julying.gridMenu.init('#julyingGridMenu') ;
	$('strong[name=replace]').each(function(){
		$(this).html( $(this).attr('val'));
	});
	
});
