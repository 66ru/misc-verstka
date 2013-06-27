var sel_gift = 0;

function deleteGift(gift_id)
{
	req.onreadystatechange = function()
	{
		if (req.readyState == 4)
		{
			if (req.responseJS.content != '')
			{
				var ag = $('allgifts'+req.responseJS.user_id);
				
				if (ag)
				{
					ag.removeChild($("gift_"+gift_id));
					
					var ag_gs = ag.getElementsByTagName('span');
					if(ag_gs.length==0)
						ag.innerHTML='Новых подарков нет';
				}
			}
		}
	}
	req.open('POST', '/mod/gifts/ajax_del.php', true);
	req.send( { del_gift_id: gift_id } );
}

function selectGift(id)
{
	if (sel_gift>0)
	{
		$("img_gift"+sel_gift).style.border="3px solid #EDECE8";
		sel_gift =0;
	}
		
	sel_gift = id;
	$("img_gift"+sel_gift).style.border="3px solid #7BBC00";
}

function createGift(user_id, to_comm)
{	
	if (typeof to_comm == 'undefined')
		to_comm = 0;
	
	req.onreadystatechange = function()
	{
		if (req.readyState == 4)
		{
			if (req.responseJS.content != '')
			{
				content = req.responseJS.content;
				
				window_create('alert_x',360,1);
				window_setupcontent('alert_x','Подарить подарок');
				
				document.getElementById("alert_x_mf").innerHTML=(content);
			}
		}
	}
	req.open('POST', '/mod/gifts/ajax_window_content.php', true);
	req.send( { user_id : user_id, tc: to_comm } );	
}

	
function previewGift(user_id, gift_id, to_user_id)
{	
	if (typeof to_user_id == 'undefined')
		to_user_id=0;

	window_close(0);
	jQuery.ajax( '/mod/gifts/ajax_preview_content.php',
	{
		type: "POST",
		dataType: 'json',
		data: { user_id : user_id, gift_id: gift_id, to_me: (user_id == to_user_id) },
		success: function(r)
		{
			if (r.content != '')
			{
				var content = r.content;
				var giftElem = jQuery("#new_gift" + r.gift_id);
				if (giftElem && typeof content!='undefined')
				{
					window_create('alert_x',450,1);
					window_setupcontent('alert_x',(user_id == to_user_id ? 'Вам подарок' : 'Вам подарок'));

					giftElem.attr('src', r.gift_src);
					giftElem.attr('title', r.gift_title);
				
					jQuery("#alert_x_mf").html( content );
				}
			}
		},
		error: function(r)
		{
		}
	});
}	
	
function sendGift(user_id, comment_id)
{
	if (typeof comment_id == 'undefined')
		comment_id=0;
	
	if (sel_gift==0)
	{
		alert_66('Не указан подарок');
		return false;
	}
	
	if (comment_id==0)
	{
		if (user_id==0)
		{
			alert_66('Не указан получатель подарка');
			return false;
		}
					
		var anon = $("gift_anon").checked ? 1 : 0;
		var text = $("gift_text").value;
		
		req.onreadystatechange = function()
		{
			if (req.readyState == 4)
			{
				if (req.responseJS.ok == 'ok')
				{					
					window_close(0);
					
					var ag = $('allgifts'+user_id);
					
					if (ag)
					{					
						var gift_el = document.createElement('span');
						var gift_el_img = document.createElement('img');
						gift_el_img.src= static66dez + 'gifts/closed_55.png';
						gift_el_img.width=55;
						gift_el_img.height=55;
						gift_el_img.alt='';
						gift_el_img.border=0;
						gift_el.appendChild(gift_el_img);
						
						
						/*
						var ag_gs = ag.getElementsByTagName('span');
						if(ag_gs.length==0)
							ag.innerHTML='';
						*/
							
						//ag.appendChild(gift_el);
						
						jQuery('#allgifts'+user_id).append(gift_el);
					}
					
					if (req.responseJS.num_gifts>=0)
						alert_66('<div style="padding-right: 20px;padding-bottom: 20px;">Ваш подарок отправлен.<Br />'+req.responseJS.usernamesex+' получит его, когда будет на сайте.<br/><br>Сегодня Вы можете подарить еще '+req.responseJS.num_gifts+' подар'+req.responseJS.num_gifts_ok+'</div>')
					else
					{
						if (req.responseJS.num_gifts==-501)
							alert_66('<div style="padding-right: 20px;padding-bottom: 20px;">Лимит подарков на сегодня закончился</div>')
						else
							alert_66('<div style="padding-right: 20px;padding-bottom: 20px;">У Вас слишком мало кармы для отправки подарка</div>')
					}
				}
				else if(req.responseJS.ok == 'error_user')
				{
					window_close(0);
					alert_66('Ошибка с передачей ID пользователя');
				}
				else if(req.responseJS.ok == 'error_gift')
				{
					window_close(0);
					alert_66('Ошибка с передачей ID подарка');
				}
			}
		}
			
			
		req.open('POST', '/mod/gifts/ajax_send_gift.php', true);
		req.send( { user_id : user_id, t: text, g: sel_gift, a: anon, c_id: comment_id } );		
	}
	else
	{
		if (sel_gift>0)
		{
			$("comment_gift_id").value=sel_gift;
			
			if ($("comment_gift_td"))
			{
				$("gift_comm_img").src=static66gifts_img+sel_gift+".png?"+Math.random();
				$("comment_gift_td").style.display='';
			}
		}
		window_close(0);
	}
}

function delCommGift()
{
	if ($("comment_gift_td"))
	{
		$("comment_gift_td").style.display='none';
		$("gift_comm_img").src=""+static66dez+"spacer.gif";
		sel_gift=0;
		if ($("comment_gift_id"))
			$("comment_gift_id").value=0;
	}		
}	
