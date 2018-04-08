/**
 * jQuery gridmenu (Julying) Plug-in v1.0
 * 
 * Home : http://julying.com/lab/gridmenu/ Mail : i@julying.com created :
 * 2012-00-10 18:30:26 last update : 2012-10-22 14:30:00 QQ ： 316970111 Address :
 * China shenzhen
 * 
 * Copyright 2012 | julying.com MIT、GPL2、GNU. http://julying.com/code/license
 * 
 */
 
;var julying = {};
julying.gridMenu = {
	init : function(obj){
		/* 防止刷新错位 */
		setTimeout(function(){
			$('html,body').animate({scrollTop:0},1);
		},200);
		
		/* 构造动画函数 */
		$.extend( jQuery.easing ,{
			easeInOutCubic: function (x, t, b, c, d) {
				if ((t/=d/2) < 1) return c/2*t*t*t + b;
				return c/2*((t-=2)*t*t + 2) + b;
			},
			easeOutBounce: function (x, t, b, c, d) {
				if ((t/=d) < (1/2.75)) {
					return c*(7.5625*t*t) + b;
				} else if (t < (2/2.75)) {
					return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
				} else if (t < (2.5/2.75)) {
					return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
				} else {
					return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
				}
			}
		});
		
		var $obj = $(obj);	
		var viewSize = getViewSize();		
		this.creatCell($obj);
		this.setItem($obj);
		
	},
	getCellInfo: function(obj){		
		var $obj = obj ;
		var viewSize = getViewSize();
		var $cell = $obj.find('div.cells li:first');
		 
		var width = $cell.outerWidth() ;		
		var height = $cell.outerHeight() ;
		var viewArea = viewSize[0] * viewSize[1] ;
		var cellArea = width * height ;
		var num = viewArea / cellArea;
		/* x轴上 box 的数量 ，下取整 */
		var xCell = Math.floor(viewSize[0] / width) ;
		/* y轴上 box 的数量 ，下取整 */
		var yCell = Math.floor(viewSize[1] / height) ;
		num = Math.ceil(num) +  xCell * 2  ;
		
		return { width :width , height : height , num : num , viewWidth : viewSize[0] , viewHeight : viewSize[1] , xCell : xCell , yCell : yCell } ;
	},
	/* 建立背景方格子 */
	creatCell : function($obj){
		var viewSize = getViewSize();
		$obj.css({width:viewSize[0] , height:viewSize[1]});
		var html = '';
		var cellInfo = this.getCellInfo($obj);
		var num = cellInfo.num ;
		for( var i = 0 ; i <= num ; i++){
			html += '<li></li>';
		}
		$obj.find('div.cells').html(html);	
	},
	menu : [],
	setItem : function(obj){
		var gridMenu = this ;
		var $obj = obj ;
		var $item = $obj.find('div.item');
		/* 是否有一个 item 被点开 */
		var isItemOpen  = false;
		var items = this.menu;
		$.each( items , function(index ){
			items[index].top = 0 ; 
			items[index].left = 0 ;
			items[index].xPos = 0 ;
			items[index].yPos = 0 ;
		});
		var cellInfo = this.getCellInfo(obj);
		
		setItemPos();		
		
		$(window).resize(function(){
			setTimeout(function(){
				cellInfo = gridMenu.getCellInfo(obj);
				gridMenu.creatCell($obj);
				setItemPos();
			},200);
		});		 
		
		$obj.find('div.body div.bg').each(function(){
			var num = parseInt( $(this).attr('child-num') );
			var bgChild = '', i = 0 ;
			for( i = 0 ; i < num ; i++){
				bgChild += '<dl></dl>';
			}
			$(this).html(bgChild);	
		});	
	
		function showItem(){
			var itemsLen = items.length ;
			for(var i = 0; i < itemsLen ; i++ ){
				$('div.'+ items[i].name ).delay( rand(0,400) ).animate({ opacity :1 , top : items[i].top , left : items[i].left } , rand( 500 , 1000 ) , 'easeOutBounce' );				
			}
		}
		
		function closeBody($item_body){
			var itemBody = {};
			itemBody.options = { piecesX : 16 , piecesY : 25 , mode : 'hide'};
			$item_body.gridMenu_effects_explode(itemBody);
		}
		
		function setItemPos(){
			var num = cellInfo.num ;
			/* 视野内的有效 box 数量 */
			var viewCellNum = cellInfo.xCell * cellInfo.yCell ;
			var itemsLen = items.length ;
			for(var i = 0; i < itemsLen ; i++ ){
				/* 格子位置 */
				var pos = Math.floor( viewCellNum * items[i].pos * 0.01 /* 百分比 */  ) ;
				var xPos = pos % cellInfo.xCell ;
				var yPos = Math.ceil(pos / cellInfo.xCell) ;
				var itemPos ;
				if( i > 0)
					itemPos = checkPos( xPos , yPos ,  items[i-1].xPos || 0 , items[i-1].yPos || 0 );
				else
					itemPos = checkPos( xPos , yPos , 0,0 );				
				items[i].xPos = itemPos.xPos ;
				items[i].yPos = itemPos.yPos ;
				items[i].top = itemPos.yPos * cellInfo.width  ;
				items[i].left = itemPos.xPos * cellInfo.height  ;
				$('div.'+ items[i].name )/* .stop(false) */.animate({ top : items[i].top , left : items[i].left },'normal');
			}
		}
		
		function checkPos( currentXPos ,currentYPos , prevXPos , prevYPos ){
			/* 禁止同 Y 轴 的相邻 box 的 x 坐标相同 */
			if( currentYPos == prevYPos){
				if( currentXPos == prevXPos ){
					currentXPos += 2 ;
				}
			}			
			/* 防止 cell 靠右 */
			if( currentXPos > cellInfo.xCell - 2 ){
				/* 防止相邻 */
				if( currentYPos - prevYPos <= 1 ){
					currentXPos = 2;
					currentYPos += 1;
				}else{
					currentYPos = cellInfo.xCell - 2 ;
				}
			}			
			/* 禁止 box 靠边 */
			if( currentXPos < 2 ) currentXPos = parseInt( rand( 2, cellInfo.xCell / 3 )) ;
			return { xPos : currentXPos , yPos : currentYPos };	
		}
	}
};
 

(function($){
	/* box 分裂 动画方式 */
	$.fn.gridMenu_effects_explode = function(o) {
		return this.queue(function() {
			var cells = o.options.piecesX ? Math.round(Math.sqrt(o.options.piecesX)) : 3;
			var rows = o.options.piecesY ? Math.round(Math.sqrt(o.options.piecesY)) : 3;
			o.options.mode = o.options.mode == 'toggle' ? ($(this).is(':visible') ? 'hide' : 'show') : o.options.mode;
			var el = $(this).show().css('visibility', 'hidden');
			var offset = el.offset();
			offset.top -= parseInt(el.css("marginTop"),10) || 0;
			offset.left -= parseInt(el.css("marginLeft"),10) || 0;
			var width = el.outerWidth(true);
			var height = el.outerHeight(true);        
			if( o.options.mode == 'show' ){
				for(var i=0;i<rows;i++){
					for(var j=0;j<cells;j++){
						el.clone().appendTo('#julyingGridMenu').wrap('<div></div>').css({position: 'absolute',visibility: 'visible',zIndex: 5,left: -j*(width/cells),top: -i*(height/rows)}).parent().addClass('effects-explode')
							.css({width: width/cells,height: height/rows,left:  o.options.initPosX ,top: o.options.initPosY ,opacity: o.options.mode == 'show' ? 0 : 1}).delay( rand(0,300) )
							.animate({left: offset.left  + j*(width/cells) + (o.options.mode == 'show' ? 0 : (j-Math.floor(cells/2))*(width/cells)),
								top:offset.top+ i*(height/rows) + (o.options.mode == 'show' ? 0 : (i-Math.floor(rows/2))*(height/rows)),
								opacity: o.options.mode == 'show' ? 1 : 0
							}, o.duration || 500 );
					}
				}		
			}else{
				for(var i=0;i<rows;i++){
					for(var j=0;j<cells;j++){
						el.clone().appendTo('#julyingGridMenu').wrap('<div></div>').css({position: 'absolute',visibility: 'visible',zIndex: 5,left: -j*(width/cells),top: -i*(height/rows)}).parent().addClass('effects-explode')
							.css({width: width/cells,height: height/rows,left:  offset.left  + j*(width/cells) + (o.options.mode == 'show' ? (j-Math.floor(cells/2))*(width/cells) : 0),
								top:  offset.top + i*(height/rows) + (o.options.mode == 'show' ? (i-Math.floor(rows/2))*(height/rows) : 0),opacity: o.options.mode == 'show' ? 0 : 1
						}).delay( rand(0,300) ).animate({left: offset.left + rand( 100 , 500 ) ,top: 1000 ,opacity: o.options.mode == 'show' ? 1 : 0 }, o.duration || 500 );
					}
				}
			}
			setTimeout(function() {
				o.options.mode == 'show' ? el.css({ visibility: 'visible' }) : el.css({ visibility: 'visible' }).hide();
				if(o.callback) o.callback.apply(el[0]);
				el.dequeue();			
				$('div.effects-explode').remove();
			}, o.duration ||800);
		});
	
	};
})(jQuery);

