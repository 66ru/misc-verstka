// all by Cry @ 01.05.2008

function $(id) {return document.getElementById(id);}

var SCClick = true;
var photo_v4_step = 10;
var photo_v4_timer = 1;
var photo_v4_frames_doc		= new Array();
var photo_v4_time = 0;

function photo_v4_move_left(photo_v4_id)
	{
	photo_v4_move(photo_v4_id,"left");
	photo_v4_time = setTimeout("photo_v4_move_left("+photo_v4_id+")",photo_v4_timer);
	}
	
function photo_v4_move_right(photo_v4_id)
	{
	photo_v4_move(photo_v4_id,"right");
	photo_v4_time = setTimeout("photo_v4_move_right("+photo_v4_id+")",photo_v4_timer);
	}

function photo_v4_move(photo_v4_id,act)
	{
	now_scroll = photo_v4_frames_doc[photo_v4_id].document.body.scrollLeft;

	if (act == 'left')  { now_scroll = now_scroll - photo_v4_step; }
	if (act == 'right') { now_scroll = now_scroll + photo_v4_step; }
	photo_v4_frames_doc[photo_v4_id].document.body.scrollLeft = now_scroll;
	photo_v4_frames_doc[photo_v4_id].show_other_image(now_scroll,act);

	ScrLeft  = Math.round( now_scroll / AddWidth[photo_v4_id] );
	if (ScrLeft < 0) {ScrLeft = 0;}
	if (ScrLeft > MGmax[photo_v4_id]) {ScrLeft = MGmax[photo_v4_id];}
	
	if ($("photo_v4_scroll_"+photo_v4_id)) 
		$("photo_v4_scroll_"+photo_v4_id).style.left = ScrLeft+"px";
	}

function photo_v4_stop(photo_v4_id)
	{
	clearTimeout(photo_v4_time);
	photo_v4_frames_doc[photo_v4_id].moveTnull();
	}

function photo_v4_init(photo_v4_id)
	{
	frame = window.frames["photo_v4_contaner_"+photo_v4_id];
	photo_v4_frames_doc[photo_v4_id] = frame;
	}
	
var tempX = 0;
var tempY = 0;
var EX = 0;
var MGmin = 0;
var MGmax = new Array();
var SCWidth = 0;
var SCiD = 0;
var AddWidth = new Array();
var FirstImage = new Array();
var IE = document.all?true:false;
if (!IE) document.captureEvents(Event.MOUSEMOVE);

function photo_v4_scroll_init(photo_v4_id)
	{	
	SCWidth = Math.round( ( parseInt($("photo_v4_scroll_"+photo_v4_id+"_bar").offsetWidth) * parseInt($("photo_v4_contaner_"+photo_v4_id).offsetWidth) ) / (photo_v4_frames_doc[photo_v4_id].document.images.length * 86) );
	SCWidthProc = Math.round( ( SCWidth * 100 ) / parseInt($("photo_v4_scroll_"+photo_v4_id+"_bar").offsetWidth) );
	if (SCWidthProc > 100)
		{
		SCWidthProc = 100;
		$("photo_v4_scroll_"+photo_v4_id).style.display = "none";
		$("photo_v4_bt_"+photo_v4_id+"_Left").onmouseover = null;
		$("photo_v4_bt_"+photo_v4_id+"_Left").style.cursor = "";
		$("photo_v4_bt_"+photo_v4_id+"_Right").onmouseover = null;
		$("photo_v4_bt_"+photo_v4_id+"_Right").style.cursor = "";
		}
	$("photo_v4_scroll_"+photo_v4_id).style.width = SCWidthProc+"%";
	
	MGmax[photo_v4_id] = parseInt($("photo_v4_scroll_"+photo_v4_id+"_bar").offsetWidth) - parseInt($("photo_v4_scroll_"+photo_v4_id).offsetWidth) - 2;
	
	AddWidth[photo_v4_id] = ( photo_v4_frames_doc[photo_v4_id].document.images.length * 86 ) / ( parseInt($("photo_v4_scroll_"+photo_v4_id+"_bar").offsetWidth) + 0 );
	ScrLeft  = Math.round( parseInt(photo_v4_frames_doc[photo_v4_id].document.body.scrollLeft) / AddWidth[photo_v4_id] );
	$("photo_v4_scroll_"+photo_v4_id).style.left = ScrLeft+"px";
	
	if ($("content_photo_from_album_"+photo_v4_id))
		{
		FirstImage[photo_v4_id] = photo_v4_frames_doc[photo_v4_id].first_image(photo_v4_id);
		photo_v4_setContent(photo_v4_id,FirstImage[photo_v4_id]);
		}
	}

function photo_v4_scroll_init_on(photo_v4_id)
	{
	$("photo_v4_scroll_"+photo_v4_id).onmousedown = function ()  { document.onmousemove = getMouseXY; SCiD = photo_v4_id; SCClick = false;}
	$("photo_v4_scroll_"+photo_v4_id).onmouseup   = function ()  { document.onmousemove = null; EX = 0;}
	document.onmouseup							  = function ()  { document.onmousemove = null; EX = 0;}
	//$("photo_v4_scroll_"+photo_v4_id).onmouseout  = function ()  { this.onmousemove = null; EX = 0; }
	}

function photo_v4_setContent(photo_v4_id,photo_v4_image)
	{
	width_img = 450;
		
	var stop = true;
	$("content_photo_from_album_"+photo_v4_id).innerHTML = "<img src='"+static66dez+"my/scale1.gif' alt='' height='5' width='15' border='0' style='margin: 217px;'>";
	var req = new JsHttpRequest();
	req.onreadystatechange = function()
		{
		if (req.readyState == 4)
			{
			if (req.responseJS)
				{
				stop = false;
				
				width = req.responseJS.width;
				height = req.responseJS.height;
				
				margin_left = 0;
				margin_top = 0;
				
				if (height > width_img)
					{
					width = Math.round ( ( width * width_img ) / height );
					height = width_img;
					}
				
				if (width < width_img)  { margin_left = Math.round ( ( width_img - width  ) / 2 ); }
				if (height < width_img) { margin_top  = Math.round ( ( width_img - height ) / 2 ); }
				
				for (a = 0; a < photo_v4_frames_doc[photo_v4_id].document.images.length; a++)
					{
					photo_v4_frames_doc[photo_v4_id].document.images[a].style.borderColor = "#FFFFFF";
					}
				
				photo_v4_frames_doc[photo_v4_id].$("photo_one_"+photo_v4_id+"_"+photo_v4_image).style.borderColor = "#7BBC00";
				
           		on = "window.open('"+req.responseJS.or_link+"','page_id','resizable=no,top='+(100)+',left='+(100)+',width="+(Math.round(req.responseJS.or_width) + 15)+",height="+(Math.round(req.responseJS.or_height) + 15)+",location=no,status=no,scrollbars=no');return false;";
				
				
           		$("content_photo_from_album_"+photo_v4_id).innerHTML = "<img onClick=\""+on+"\" src='"+req.responseJS.image+"?"+Math.random()+"' width='"+width+"' height='"+height+"' border='0' style='cursor: pointer; margin: "+margin_top+"px 0px 0px "+margin_left+"px;'>";
				LoadPng();           		

				photo_v4_frames_doc[photo_v4_id].verify_load(photo_v4_id,photo_v4_image);
				
				now_scroll = photo_v4_frames_doc[photo_v4_id].document.body.scrollLeft;
				ScrLeft  = Math.round( now_scroll / AddWidth[photo_v4_id] );
				if (ScrLeft < 0) {ScrLeft = 0;}
				if (ScrLeft > MGmax[photo_v4_id]) {ScrLeft = MGmax[photo_v4_id];}
				$("photo_v4_scroll_"+photo_v4_id).style.left = ScrLeft+"px";
				}		
			}
		}
		
	if (stop)
		{
		req.caching = false; //true
		req.open('POST', '/show/ajax_scroll.php', true);
		req.send({ part: 'getphoto', photo_id: photo_v4_image});
		$("photo_comment_link_" + photo_v4_id).href = $("photo_album_link_" + photo_v4_id).href + photo_v4_image + "/#photo";
		}
	}
	
function photo_v4_click_center(photo_v4_id,event)
	{
	if (SCClick)
		{
		if (IE)
			{
			tempX = event.clientX + document.body.scrollLeft;
			CC = tempX - $("photo_v4_scroll_"+photo_v4_id+"_bar").offsetLeft - 2;
			}
			else
			{
			tempX = event.pageX;
			CC = tempX - $("photo_v4_scroll_"+photo_v4_id+"_bar").offsetLeft - 0;
			}

		SCWidth = Math.round( ( parseInt($("photo_v4_scroll_"+photo_v4_id+"_bar").offsetWidth) * parseInt($("photo_v4_contaner_"+photo_v4_id).offsetWidth) ) / (photo_v4_frames_doc[photo_v4_id].document.images.length * 86) );
		SCWidth = Math.round( SCWidth / 2 );
	
		CC = CC - SCWidth;
	
		if (CC <= MGmin) 				{ CC = 0;}
		if (CC >= MGmax[photo_v4_id])	{ CC = MGmax[photo_v4_id];}
	
		$("photo_v4_scroll_"+photo_v4_id).style.left = CC+"px";
	
		ScrLeft  = Math.round( CC * AddWidth[photo_v4_id] );
		if ( parseInt(photo_v4_frames_doc[photo_v4_id].document.body.scrollLeft) > ScrLeft ) {act = "left";} else {act = "right";}
		photo_v4_frames_doc[photo_v4_id].document.body.scrollLeft = ScrLeft;
		photo_v4_frames_doc[photo_v4_id].show_other_image(ScrLeft,act);
		}
		else
		{
		SCClick = true;
		}
	}

function getMouseXY(e)
	{
	var popa = jQuery("#photo_v4_scroll_"+SCiD+"_bar").offset();
	
	
	if (IE)
		{
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
		}
		else
		{
		tempX = e.pageX;
		tempY = e.pageY;
		}
		
			
	if (tempX < 0){tempX = 0;}
	if (tempY < 0){tempY = 0;}  
	
	
	
	if (EX == 0)
		{
		if (IE)
			{
			if (!window.opera)
				{
				EX = event.offsetX + popa.left - 9;
				}
			else
				{
				EX = event.offsetX + $("operaFix_"+SCiD).offsetLeft + 8;
				}
				
			MG = tempX - EX - 12;
			}
		else
			{
			if (!window.opera)
				{ 
				EX = e.layerX + popa.left - 1;
				}
			else
				{
				EX = event.offsetX + $("operaFix_"+SCiD).offsetLeft + 8;
				}
				
			MG = tempX - EX;
			}
		}
		else
		{
		//if (debug == 1) {alert_66(EX);}
		if (IE)
			{
			MG = tempX - EX - 12;
			}
			else
			{
			MG = tempX - EX;
			}
		}

	if (MG <= MGmin) { MG = 0;}
	if (MG >= MGmax[SCiD]) { MG = MGmax[SCiD];}
	
	if (debug == 1)
		{
		//MG = MG - 400;
		//alert_66(EX);
		}
	
	$("photo_v4_scroll_"+SCiD).style.left = MG+"px";

	ScrLeft  = Math.round( MG * AddWidth[SCiD] );
	if ( parseInt(photo_v4_frames_doc[SCiD].document.body.scrollLeft) > ScrLeft ) {act = "left";} else {act = "right";}
	photo_v4_frames_doc[SCiD].document.body.scrollLeft = ScrLeft;
	photo_v4_frames_doc[SCiD].show_other_image(ScrLeft,act);
	
	return true;
	}

function photo_v4_bar(photo_v4_id,act)
	{
	if (act == 'on')
		{
		$("photo_v4_scroll_"+photo_v4_id).style.borderColor = "#8CB43E";
		$("photo_v4_scroll_"+photo_v4_id).style.backgroundImage = 'url('+static66dez+'scroll_v4/BgOn.gif)';
		}
		else
		{
		$("photo_v4_scroll_"+photo_v4_id).style.borderColor = "#BABAA7";
		$("photo_v4_scroll_"+photo_v4_id).style.backgroundImage = 'url('+static66dez+'scroll_v4/Bg.gif)';
		}
	}

function photo_v4_bt(photo_v4_id,part,act)
	{
	if (act == 'on')
		{
		$("photo_v4_bt_"+photo_v4_id+"_"+part).src = ""+static66dez+"scroll_v4/Bt"+part+"On.gif";
		}
		else
		{
		$("photo_v4_bt_"+photo_v4_id+"_"+part).src = ""+static66dez+"scroll_v4/Bt"+part+".gif";
		}
	}
	
var GlobalPhotoScroll = 'off';

function handle(delta)
	{
	if (delta <= 0)
		{
		photo_v4_step = 50;
		photo_v4_move(GlobalPhotoScroll,'right');
		photo_v4_step = 10;
		}
	else
		{
		photo_v4_step = 50;
		photo_v4_move(GlobalPhotoScroll,'left');
		photo_v4_step = 10;
		}
	}

function wheel(event)
	{
	if (GlobalPhotoScroll != 'off')
		{
		var delta = 0;
		if (!event) event = window.event;
		if (event.wheelDelta)
			{
			delta = event.wheelDelta/120; 
			if (window.opera) delta = -delta;
			}
			else if (event.detail)
			{
			delta = -event.detail/3;
			}
		if (delta) handle(delta);
		if (event.preventDefault) event.preventDefault();
		event.returnValue = false;
		}
	}

if (window.addEventListener) {window.addEventListener('DOMMouseScroll', wheel, false);}

window.onmousewheel = document.onmousewheel = wheel;