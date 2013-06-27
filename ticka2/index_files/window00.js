var firefox = navigator.userAgent.indexOf('Gecko')>=0?true:false;
var tmp_login = tmp_pass = '';
var wtype=1;

function auth2_form_show()
	{
	var wtype=2;

 	dragobject.initialize();
 	if (document.all) hideSelects('hidden');

 	width = 430;
 	left = (xsize() / 2) - width / 2;

 	var auth_top = 145;
 	var drag_top = 153;

 	$("auth").style.top=auth_top;
 	$("drag").style.top=drag_top;

 	$("auth").style.left=left+'px';
 	$("drag").style.left=(left+8)+'px';

 	$("a_login").focus();

	}

function window2_close()
	{
	if (typeof $("auth") !='undefined' && typeof $("drag") !='undefined')
		{
 		var auth_top = parseInt($("auth").style.top,10);
 		var drag_top = parseInt($("drag").style.top,10);

 		var y = parseInt((auth_top*10),10);

 		$("auth").style.top='-1000px';
 		$("drag").style.top='-1000px';

 		wtype=1;
		}
	}





function authGetDate(id)
	{
	req.onreadystatechange = function()
		{
		if (req.readyState == 4)
			{
			if (req.responseJS && req.responseJS.date)
				{
				if ($(id))
					$(id).value = req.responseJS.date;
				}
			}
		}
	req.caching = false; //true
	req.open('POST', '/mod/auth/ajax_getdate.php', true);
	req.send({ sid: Math.random() });
	}







function show_login(name,width,border,title)
 {
 if ($("window").innerHTML == '')
  {
  window_create(name,width,border);
  window_setupcontent(name,title);
  }
 }


function window_create(name,width,border)
 {
 var wtype=1;
 dragobject.initialize();
 if (document.all) hideSelects('hidden');
 left = (xsize() / 2) - width / 2;

 //if (document.all) var isie = 'absolute';
 //else var isie = 'fixed'; //position: "+isie+";
 $("window").innerHTML = "<div style='z-index:99998; width: "+width+"px; height: 1px; left: "+left+"px;' id='"+name+"' class='wie'></div>"
                                              +"<div style='z-index:99999; width: "+(width-16)+"px; height: 31px; left: "+(left+8)+"px; cursor: move; text-align: right;' id='drag' class='drag'><img src='"+static66dez+"window/close.gif' width='31' height='31' alt='Закрыть' title='Закрыть' border='0' style='cursor: pointer;' onClick='window_close(0);'></div>";

 if (border == 1)
  {// class='shade_image'
  $(name).innerHTML = "<table style='width: "+width+"px; height: 1px;' cellspacing='0' cellpadding='0' border='0'>"
	+'<tr style="height: 8px;">'
	+'	<td class="win_a" width="8" id="test_a"><img height="8" border="0" width="8" alt="" src="'+static66dez+'spacer.gif"></td>'
	+'	<td class="win_b" id="test_b"><img height="8" border="0" width="100%" alt="" src="'+static66dez+'spacer.gif"></td>'
	+'	<td class="win_c" width="8" id="test_c"><img height="8" border="0" width="8" alt="" src="'+static66dez+'spacer.gif"></td>'
	+'</tr>'
	 +"<tr valign='top' style='height: 1px;'>"
	  +'<td width="8" class="win_d" id="test_d1"><img height="100%" border="0" width="8" alt="" src="'+static66dez+'spacer.gif"></td>'
	  +"<td id='"+name+"_content'></td>"
	  +'<td width="8" class="win_d" id="test_d2"><img height="100%" border="0" width="8" alt="" src="'+static66dez+'spacer.gif"></td>'
	 +"</tr>"
	+'<tr style="height: 8px;">'
	+'	<td class="win_e" width="8" id="test_e"><img height="8" border="0" width="8" alt="" src="'+static66dez+'spacer.gif"></td>'
	+'	<td class="win_f" id="test_f"><img height="8" border="0" width="100%" alt="" src="'+static66dez+'spacer.gif"></td>'
	+'	<td class="win_g" width="8" id="test_g"><img height="8" border="0" width="8" alt="" src="'+static66dez+'spacer.gif"></td>'
	+'</tr>'
	+"</table>";

  }
  //png fix script dynamic  -  временно (netic)
  setTimeout('LoadPng()',1);
  //setTimeout('LoadPng()',1);

  $('test_a').style.background='';
  $('test_b').style.background='';
  $('test_c').style.background='';
  $('test_d1').style.background='';
  $('test_d2').style.background='';
  $('test_e').style.background='';
  $('test_f').style.background='';
  $('test_g').style.background='';
 }


function window_setupcontent(name,title)
 {
 $(name+"_content").innerHTML = $(name+"_content").innerHTML + "<table width='100%' cellspacing='0' cellpadding='0' border='0'><tr style='height: 31px; background-color: #6D6A65; background-image: url("+static66dez+"window_title_bg.gif);'><td width='50' align='center' style='border-bottom: 1px solid #565450;'><img src='"+static66dez+"title_reg.gif' width='22' height='19' alt='"+title+"' title='"+title+"' border='0'></td><td class='c_news_title' style='color: #F0F0ED; border-bottom: 1px solid #565450;'>"+title+"</td></tr></table>";
 $(name+"_content").innerHTML = $(name+"_content").innerHTML + "<table width='100%' cellspacing='0' cellpadding='0' border='0' style='height: 1px;'><tr valign='top'><td style='background-color: #F9F9F7; padding: 0px 5px 0px 5px;' id='"+name+"_mf'></td></tr></table>";
 }



function window_close(name)
 {
 if (wtype==2) window2_close();

 document.body.onmousedown = null;
 document.body.onmouseup = null;
 document.body.onmousemove = null;
 if (document.all) hideSelects('visible');
 
 
  jQuery('#window').html('&nbsp;');
 /*
 if (name == 0 && $("alert_x") != null) {
	$("alert_x").style.top='-1000px';
 		$("drag").style.top='-1000px';
 }*/
 }




function xsize()
 {
 var width = -1;
 if (window.innerWidth)
  {
  width = window.innerWidth;
  }
  else
   if (document.getElementsByTagName)
    {
    var html = document.getElementsByTagName('html');
    if (html[0].offsetWidth) {width = html[0].offsetWidth-2;}
    }
 return width;
 }

function uc3d(id, id2)
	{
	var d = new Date();
	var code_cap = calcMD5(d.toUTCString()+'66.ru_ekabu.ru'+Math.random());

	if (typeof id2 == 'undefined' ) id2 = 'code_img';

	$(id).src="/show/cap3d.php?code="+code_cap+"&"+Math.random();
	document.getElementById(id2).value = code_cap;
	}


function add_auth(name,part,out,link_id)
 {
 if (tmp_login=='')
 	{
 	if ($("a_login")) tmp_login = $("a_login").value;
 	if ($("a_pass")) tmp_pass = $("a_pass").value;
 	}

 if (part == 'reg')
 	{i_part_1 = "Регистрация";i_p_1 = "s"; }    else {i_p_1 = "ns"; i_part_1 = "<a href='#' onClick=\"add_auth('auth','reg','"+out+"','"+link_id+"');     return false;\">Регистрация</a>";}

 if (part == 'auth')
 	{i_part_2 = "Вход";i_p_2 = "s";}    else {i_p_2 = "ns"; i_part_2 = "<a href='#' onClick=\"add_auth('auth','auth','"+out+"','"+link_id+"');    return false;\">Вход</a>";}

 if (part == 'getpass')
 	{i_part_3 = "Забыли пароль?";i_p_3 = "s";} else {i_p_3 = "ns"; i_part_3 = "<a href='#' onClick=\"add_auth('auth','getpass','"+out+"','"+link_id+"'); return false;\">Забыли пароль?</a>";}

 $(name+"_mf").innerHTML = "<table cellspacing='0' cellpadding='0' border='0' width='100%' style='border-collapse: collapse; margin: 10px 0px 5px 0px;'>"
                                                 +"<tr>"
                                                  +"<td class='auth_menu_"+i_p_2+"' width='110'>"+i_part_2+"</td>"
                                                  +"<td class='auth_menu_"+i_p_1+"' width='114'>"+i_part_1+"</td>"
                                                  +"<td class='auth_menu_"+i_p_3+"' width='130'>"+i_part_3+"</td>"
                                                  +"<td class='auth_menu_n'>&nbsp;</td>"
                                                 +"</tr>"
                                                 +"<tr>"
                                                  +"<td class='auth_menu_b' colspan='4' width='484' id='aufc'></td>"
                                                 +"</tr>"
                                                +"</table>";

 if (part == 'reg')
  {
  if (navigator.cookieEnabled)
	  {

		var d = new Date();


	  var code_cap = calcMD5(d.toUTCString());

	  $("aufc").innerHTML =
	  "<div id='forchange'>"
	  +"<table cellspacing='2' cellpadding='2' border='0' width='95%' align='center'>"
	   +"<tr>"
	    +"<td  style='font-size: 15px; color: #666666;'><div style='line-height: 15px'>Ваш логин<br><span style='font-size: 12px; color: #A0A0A0'>не менее 3 символов</span></div></td>"
	    +"<td><input name='mail' type='text' id='a_login' value=''  style='height: 25px; width: 100%; font-size: 15px' onKeyDown=\"findEnter(event,'"+part+"','"+out+"','"+link_id+"');\"></td>"
	   +"</tr>"
	   +"<tr>"
	    +"<td  style='font-size: 15px; color: #666666'><div style='line-height: 15px'>Пароль<br><span style='font-size: 12px; color: #A0A0A0'>не менее 6 символов</span></div></td>"
	    +"<td><input type='password' id='a_pass' value=''  style='height: 25px; width: 100%; font-size: 15px' onKeyDown=\"findEnter(event,'"+part+"','"+out+"','"+link_id+"');\"></td>"
	   +"</tr>"
	   +"<tr>"
	    +"<td width='195' style='font-size: 15px; color: #666666; white-space: nowrap'>Повторите пароль</td>"
	    +"<td><input type='password' id='a_passconf' value=''  style='height: 25px; width: 100%; font-size: 15px' onKeyDown=\"findEnter(event,'"+part+"','"+out+"','"+link_id+"');\"></td>"
	   +"</tr>"
	   +"<tr>"
	    +"<td  style='font-size: 15px; color: #666666'>E-mail для уведомлений<br><span style='font-size: 12px; color: #A0A0A0'>не обязательно</span></td>"
	    +"<td><input name='name' type='text' id='a_email' value=''  style='height: 25px; width: 100%; font-size: 15px' onKeyDown=\"findEnter(event,'"+part+"','"+out+"','"+link_id+"');\"></td>"
	   +"</tr>"

	   +"<tr>"
	    +"<td  style='font-size: 15px; color: #666666' valign='top'>Введите код<br><input type='text' value='' id='cap_img' name='cap' style='width: 125px; height: 23px; margin-top: 5px; margin-right: 5px; float: left;'><br><a href=\"#\" onclick=\"uc3d('capka'); return false\">Обновить картинку</a></td>"
	    +"<td><input type='hidden' id='reg_date_start' name='reg_date_start' value=''><img src='/show/cap3d.php?code="+code_cap+"&"+Math.random()+"' id='capka'></td>"
	   +"</tr>"

	   +"<tr style='height: 20px;'>"
	    +"<td style='color: #FF0000;' align='center' id='message' colspan='2'></td>"
	   +"</tr>"
	   +"<tr>"
	    +"<td align='center' style='height: 30px; white-space: nowrap;' colspan='2'>"
	    +"Выполняя регистрацию, Вы принимаете условия <a target='_blank' href='http://www."+mainDomain+"/agreement'>пользовательского соглашения</a><br><br>"
	     +"<input type='hidden' id='code_img' name='code' value='"+code_cap+"'><input id='reg_enter_button' style='width: 132px; margin-right: 14px; height: 16px' type='image' src='"+static66dez+"reg.gif' onClick=\"this.disabled=true;submit_auth('"+part+"','"+out+"','"+link_id+"');\" alt='Зарегистрироваться' title='Для успешной регистрации у вас должны быть включены cookies.'>"
	     +"<input style='width: 68px; height: 16px' type='image' src='"+static66dez+"cancel.gif' onClick=\" window2_close(0);  window_close(0);\" alt='Отмена' title='Отмена'>"
	    +"</td>"
	   +"</tr>"
	  +"</table>"
	  +"</div>";
	  setTimeout(function(){
	  	$("a_login").focus();
	  	//$("cap_img").src='/show/cap.php?'+Math.random();
	  	LoadPng();
	  	authGetDate('reg_date_start');
	  },1);
	  }
	else {
		$("aufc").innerHTML = "<div id='forchange'><br><table cellspacing='2' cellpadding='2' border='0' width='95%' align='center'><tr><td align='center'>В Вашем браузере отключены COOKIE (куки).<br><br>Регистрация невозможна.</td></tr></table><br></div>";
	}
  }

 if (part == 'auth')
  {
	onSubmiting = "method='post' onsubmit='return false;'";
	onClicking = "onCLick=\"this.disabled=true; checkPOSTauth(); return false;\"";

  $("aufc").innerHTML =
  "<div id='forchange'><form id='login_form_66' action='http://"+mainDomain+"' style='padding: 0px; margin: 0px' "+onSubmiting+">"
  +"<br><table cellspacing='2' cellpadding='2' border='0' width='95%' align='center' style='height: 176px;'>"
   +"<tr style='height: 30px'>"
    +"<td width='100' style='font-size: 15px;color: #666666'>Ваш логин</td>"
    +"<td><input name='login_66' type='text' id='a_login' value='"+tmp_login+"' style='height: 25px; width: 100%; font-size: 15px'></td>"
   +"</tr>"
   +"<tr style='height: 30px'>"
    +"<td width='100' style='font-size: 15px;color: #666666'>Пароль</td>"
    +"<td><input name='password_66' type='password' id='a_pass' value='"+tmp_pass+"'  style='height: 25px; width: 100%; font-size: 15px' onKeyDown=\"findEnter(event,'"+part+"','"+out+"','"+link_id+"');\"></td>"
   +"</tr>"
   +"<tr style='height: 30px;'>"
    +"<td width='100' style='font-size: 15px;'>&nbsp;</td>"
    +"<td align='left'  valign='top'><table cellspacing='0' celpadding='0' style='padding: 0px; margin: 0px;'><tr><td><input name='remember_me' type='checkbox' id='a_remember' value=''></td><td><label id='aaasss' for='a_remember' style='font-size: 12px; color: #666666'>Запомнить меня.</label></td></tr></table></td>"
   +"</tr>"
   +"<tr style='height: 20px;'>"
    +"<td style='color: #FF0000;' align='center' id='message' colspan='2'></td>"
   +"</tr>"
   +"<tr>"
    +"<td align='center' style='height: 30px; white-space: nowrap;' colspan='2'>"
     +"<input id='auth_enter_button' style='width: 54px; height: 16px; margin-right: 14px;' type='image' src='"+static66dez+"enter.gif' "+onClicking+" alt='Вход' title='Для успешной авторизации у вас должны быть включены cookies.'>"
     +"<input style='width: 68px; height: 16px' type='image' src='"+static66dez+"cancel.gif' onClick=\" window2_close(0);  window_close(0); return false;\" alt='Отмена' title='Отмена'>"
    +"</td>"
   +"</tr>"
  +"</table>"
  +"</form></div>";

 // var html_form = $('test_login').innerHTML;




  //$("a_login").value = login;
 // $("a_pass").value = pass;


  setTimeout(function(){LoadPng();$("a_login").focus()},1);
  }

 if (part == 'getpass')
  {
  $("aufc").innerHTML =

  //$(name+"_mf").innerHTML = $(name+"_mf").innerHTML + ""


  "<div id='forchange'>"
  +"<table cellspacing='0' cellpadding='0' border='0' width='95%' align='center' style='height: 184px; margin-top: 10px'>"
   +"<tr style='height: 23px'>"
    +"<td style='font-size: 15px;color: #666666'>Укажите e-mail</td>"
    +"<td align='right'><input name='mail' type='text' id='a_login' value='' style='height: 25px; width: 240px; font-size: 15px'onKeyDown=\"findEnter(event,'"+part+"','"+out+"','"+link_id+"');\"></td>"
   +"</tr>"
   +"<tr style='height: 23px'>"
    +"<td style='color: #A0A0A0; font-size: 11px;' colspan='2'>На указанный Вами адрес придет напоминание пароля</td>"
   +"</tr>"
   +"<tr>"
    +"<td style='color: #FF0000;' align='center' id='message' colspan='2'></td>"
   +"</tr>"
   +"<tr>"
    +"<td align='center' style='height: 50px;white-space: nowrap;' colspan='2'>"
     +"<input id='get_enter_button' style='width: 79px; height: 16px; margin-right: 14px;' type='image' src='"+static66dez+"getpass.gif' onClick=\"this.disabled=true;submit_auth('"+part+"','"+out+"','"+link_id+"');\" alt='Напомнить' title='Напомнить'>"
     +"<input style='width: 68px; height: 16px' type='image' src='"+static66dez+"cancel.gif' onClick=\" window2_close(0);  window_close(0);\" alt='Отмена' title='Отмена'>"
    +"</td>"
   +"</tr>"
  +"</table>"
  +"</div>";
  setTimeout(function(){$("a_login").focus()},1);
  }

  if (part=='reg')
	{
	setTimeout(function(){
		$("a_login").focus();
		/*
		if ($("cap_img"))
			$("cap_img").src='/show/cap.php?'+Math.random();
		*/
		LoadPng();
		},1);
	}
 }

function checkPOSTauth()
	{
	s_ok = 1;
	$('message').innerHTML = '<span style="color: #000000 !important">Авторизация <img src="'+static66dez+'my/scale1.gif" width="15" height="5" alt="" /></span>';

	$('a_login').style.background = "#FFFFFF";
	$('a_pass').style.background  = "#FFFFFF";

	if ($('a_remember').checked == true) remember = 1; else remember = 0;

	login       = $('a_login').value;
	pass        = $('a_pass').value;
	remember_me = $('a_remember').checked;
	
	

	if ((login == '') || (pass == '')) {s_ok = 0; $('message').innerHTML = "<b>Заполните поле</b>";}
	if (login == '')       {$('a_login').style.background = "#FFD5D5";}
	if (pass == '')        {$('a_pass').style.background = "#FFD5D5";}
	if (s_ok != 1) $('auth_enter_button').disabled = false;
	if (s_ok == 1)
		{
		req.onreadystatechange = function()
			{
			if (req.readyState == 4)
				{
				if (req.responseJS)
					{
					error = req.responseJS.error;
					if (error != '')
						{
						$('message').innerHTML = "<b>"+error+"</b>";
						$('auth_enter_button').disabled = false;
						}
						else
						{
						// типа ок :)
						//document.forms['login_form_66'].submit();
						jQuery('#login_form_66').submit();
						}
					}
				}
			}
		req.caching = false; //true
		req.open('POST', '/mod/auth/ajax_checkAuth.php', true);
		req.send({ login: login, pass: pass, remember_me: remember_me });
		}
	}

function submit_auth(part,out,link_id)
 {
 if (part == 'reg')
  {
  s_ok = 1;

  //$('message').innerHTML = '';
  $('message').innerHTML = '<span style="color: #000000 !important">Регистрация <img src="'+static66dez+'my/scale1.gif" width="15" height="5" alt="" /></span>';
  $('a_login').style.background = "#FFFFFF";
  $('a_email').style.background = "#FFFFFF";
  $('a_pass').style.background = "#FFFFFF";
  $('a_passconf').style.background = "#FFFFFF";




  var reg_date_start = $('reg_date_start').value;

  var login       	 = typeof document.getElementById('a_login') !='undefined'  	? 	document.getElementById('a_login').value 		: '';
  var email		  	 = typeof document.getElementById('a_email') !='undefined' 		? 	document.getElementById('a_email').value 		: '';
  var pass        	 = typeof document.getElementById('a_pass') !='undefined' 		? 	document.getElementById('a_pass').value 		: '';
  var passconf    	 = typeof document.getElementById('a_passconf') !='undefined' 	? 	document.getElementById('a_passconf').value 	: '';
  var icap    	  	 = typeof document.getElementById('cap_img') !='undefined' 		? 	document.getElementById('cap_img').value 		: '';
  var code    	  	 = typeof document.getElementById('code_img') !='undefined' 	? 	document.getElementById('code_img').value 		: '';








  req = new JsHttpRequest();


  if (pass != passconf) {s_ok = 0; $('message').innerHTML = "<b>Пароли несовпадают</b>"; $('a_pass').style.background = "#FFD5D5"; $('a_passconf').style.background = "#FFD5D5";}

  if (6 > pass.length)  {s_ok = 0; $('message').innerHTML = "<b>Пароль не может быть меньше 6 символов</b>";}

  if (email!='' && !is_email(email)) {s_ok = 0; $('message').innerHTML = "<b>Проверьте E-Mail</b>"; $('a_email').style.background = "#FFD5D5";}

  //if ((login == '') || (email == '') || (pass == '') || (passconf == '')) {s_ok = 0; $('message').innerHTML = "<b>Заполните поле</b>";}
  if ((login == '')  || (pass == '') || (passconf == '')) {s_ok = 0; $('message').innerHTML = "<b>Заполните поле</b>";}

  if (login == '')       {$('a_login').style.background = "#FFD5D5";}
  //if (email == '') 		 {$('a_email').style.background = "#FFD5D5";}
  if (pass == '')        {$('a_pass').style.background = "#FFD5D5";}
  if (passconf == '')    {$('a_passconf').style.background = "#FFD5D5";}

  if (s_ok != 1) $('reg_enter_button').disabled = false;
  if (s_ok == 1)
   {
   req.onreadystatechange = function()
    {
    if (req.readyState == 4)
     {
     if (req.responseJS)
      {
      error = req.responseJS.error;
      if (error != '') {$('message').innerHTML = "<b>"+error+"</b>"; $('reg_enter_button').disabled = false;}
      else
       {
       // $("forchange").innerHTML = "<br><div align='center' style='color: #000000; font-size: 12px;'><b>Спасибо за регистрацию, можете закрыть это окно и продожить работу с сайтом в полном обьёме</b></div>";
       // авто залогинивание
       var remember = 0;
       var req2 = new JsHttpRequest();
       req2.onreadystatechange = function()
        {
        if (req2.readyState == 4)
         {
         if (req2.responseJS)
          {
          error2 = req2.responseJS.error;
          if (error2 != '') {$('message').innerHTML = "<b>"+error2+"</b>"; $('reg_enter_button').disabled = false;}
          else
           {
           // типа ок :)
           if (out == 'refresh')
		   		{
				//window.location = window.location;

				var el = document.createElement('iframe');
				el.style.display='none';
				el.src = '/show/reg_cnt.php';
				el.onload = function() {

					}
				document.body.appendChild(el);
				//window.location = "/my/user/";

				window.location = "http://"+mainDomain+"/?login_66="+login+"&password_66="+pass+"&remember_me="+remember+"&location="+window.location;
				}
           if (out == 'submit')  {window_close(0); document.forms['fs'].submit();}
       		if (out == 'link')
				{
		   		var s = 'http://www.'+mainDomain;

		   		if (link_id && typeof $(link_id) != 'undefined')
			   		{
			   		s = $(link_id).href ;
			   		s = s.replace("user_identificator",req2.responseJS.id);
			   		}

	   			window.location = s;
				}
           }
          }
         }
        }
       req2.caching = false; //true
       req2.open('POST', '/mod/auth/ajax_auth.php', true);
       req2.send({ login: login, pass: pass, remember: remember});

       //======================================================
       }
      }
     }
    }
   req.caching = false; //true
   req.open('POST', '/mod/auth/ajax_reg.php', true);
   req.send({ login: login , email: email, pass: pass, passconf: passconf, cap: icap, code: code, reg_date_start:reg_date_start});
   }
  }

 if (part == 'auth')
  {
  s_ok = 1;

  //$('message').innerHTML = '';

  $('message').innerHTML = '<span style="color: #000000 !important">Авторизация <img src="'+static66dez+'my/scale1.gif" width="15" height="5" alt="" /></span>';

  $('a_login').style.background = "#FFFFFF";
  $('a_pass').style.background  = "#FFFFFF";

  login       = $('a_login').value;
  if ($('a_remember').checked == true) remember = 1;
  else remember = 0;
  pass        = $('a_pass').value;

  if ((login == '') || (pass == '')) {s_ok = 0; $('message').innerHTML = "<b>Заполните поле</b>";}

  if (login == '')       {$('a_login').style.background = "#FFD5D5";}
  if (pass == '')        {$('a_pass').style.background = "#FFD5D5";}

  if (s_ok != 1) $('auth_enter_button').disabled = false;
  if (s_ok == 1)
   {
   req.onreadystatechange = function()
    {
    if (req.readyState == 4)
     {
     if (req.responseJS)
      {
      error = req.responseJS.error;
      if (error != '') {$('message').innerHTML = "<b>"+error+"</b>";$('auth_enter_button').disabled = false;}
      else
       {
       // типа ок :)
       if (out == 'refresh')
       {
       	tmp_loc = window.location;
       	tmp_loc = tmp_loc.replace("",/#photo/g);// if (req.responseJS.id == 2) alert("http://66.ru/login/?login_66="+login+"&password_66="+pass+"&remember_me="+remember+"&location="+window.location);
       	window.location = "http://"+mainDomain+"/login/?login_66="+login+"&password_66="+pass+"&remember_me="+remember+"&location="+window.location;
       }

       if (out == 'submit')  {window_close(0); document.forms['fs'].submit();}
       if (out == 'link')  {
	   		var s = $(link_id).href;
	   		s = s.replace("user_identificator",req.responseJS.id);
	   		window.location = s;
        }
       }
      }
     }
    }
   req.caching = false; //true
   req.open('POST', '/mod/auth/ajax_auth.php', true);
   req.send({ login: login, pass: pass, remember: remember});
   }
  }

 if (part == 'getpass')
  {
  s_ok = 1;

  $('message').innerHTML = '';
  $('a_login').style.background = "#FFFFFF";

  login       = $('a_login').value;

  if (!is_email(login)) {s_ok = 0; $('message').innerHTML = "<b>Логин, не являеться E-Mail'ом</b>"; $('a_login').style.background = "#FFD5D5";}
  if (login == '')      {s_ok = 0; $('message').innerHTML = "<b>Заполните поле</b>";}

  if (s_ok != 1) $('get_enter_button').disabled = false;
  if (s_ok == 1)
   {
   req.onreadystatechange = function()
    {
    if (req.readyState == 4)
     {
     if (req.responseJS)
      {
      error = req.responseJS.error;
      if (error != '') {$('message').innerHTML = "<b>"+error+"</b>";}
      else
       {
       // типа ок :)
       //$("forchange").innerHTML = "<br><div align='center' style='color: #000000; font-size: 12px; text-align:center;'><b>По адресу "+login+" выслано письмо с запросом на подтверждение смены пароля</b></div>";
       $("forchange").innerHTML = "<br><div align='center' style='color: #000000; font-size: 12px;text-align:center;'><b>По адресу "+login+" выслано письмо с вашим паролем</b></div><br>";
       }
      }
     }
    }
   req.caching = false; //true
   req.open('POST', '/mod/auth/ajax_getpass.php', true);
   req.send({ login: login});
   }
  }

 }





function is_email(mail)
 {

 if( mail ){
     if(mail.match(/^[A-Za-z0-9\.\-\_]{1,32}\@[A-Za-z0-9\.\-\_]{1,32}\.[a-zA-Z]{2,6}$/)) {return true;} else {return false;}
 }else{
 	return false;
 }
 }


function findEnter(e,part,out,link_id)
 {
 if (e.keyCode == 13)
 	{
	if (debug == 1)
  		{
		checkPOSTauth();
		}
		else
		{
		submit_auth(part,out,link_id);
		}
	}
 }

function set_top(obj) {
	//alert(obj.parentNode.childNodes(0).innerHTML);
	var dr = $('drag');
	var left = dr.style.left;
	var top = dr.style.top;
}

var dragobject={
z: 0, x: 0, y: 0, offsetx : null, offsety : null, targetobj : null, dragapproved : 0,
initialize:function(){
document.body.onmousedown=this.drag
document.body.onmouseup=function(){this.dragapproved=0; set_top(this.targetobj);}
},
drag:function(e){
var evtobj=window.event? window.event : e
this.targetobj=window.event? event.srcElement : e.target
if (this.targetobj.className=="drag"){
this.dragapproved=1
if (isNaN(parseInt(this.targetobj.style.left))){this.targetobj.style.left = 245}
if (isNaN(parseInt(this.targetobj.style.top))){this.targetobj.style.top=153}
this.offsetx=parseInt(this.targetobj.style.left)
this.offsety=parseInt(this.targetobj.style.top)
this.x=evtobj.clientX
this.y=evtobj.clientY
if (evtobj.preventDefault)
evtobj.preventDefault()
document.body.onmousemove=dragobject.moveit
}
},
moveit:function(e){
var evtobj=window.event? window.event : e

if (this.dragapproved==1){

 this.targetobj.style.left=this.offsetx+evtobj.clientX-this.x+"px"
 this.targetobj.style.top=this.offsety+evtobj.clientY-this.y+"px"

 if ($('auth')) {$('auth').style.left = this.offsetx+evtobj.clientX-this.x-8+"px"}
 if ($('auth')) {$('auth').style.top = this.offsety+evtobj.clientY-this.y+-8+"px"}

 if ($('task')) {$('task').style.left = this.offsetx+evtobj.clientX-this.x-8+"px"}
 if ($('task')) {$('task').style.top = this.offsety+evtobj.clientY-this.y-8+"px"}

 if ($('project')) {$('project').style.left = this.offsetx+evtobj.clientX-this.x-8+"px"}
 if ($('project')) {$('project').style.top = this.offsety+evtobj.clientY-this.y-8+"px"}

 if ($('user_info')) {$('user_info').style.left = this.offsetx+evtobj.clientX-this.x+"px"}
 if ($('user_info')) {$('user_info').style.top = this.offsety+evtobj.clientY-this.y+"px"}

 if ($('photo_getpass')) {$('photo_getpass').style.left = this.offsetx+evtobj.clientX-this.x-8+"px"}
 if ($('photo_getpass')) {$('photo_getpass').style.top = this.offsety+evtobj.clientY-this.y-8+"px"}

 if ($('alert_x')) {$('alert_x').style.left = this.offsetx+evtobj.clientX-this.x-8+"px"}
 if ($('alert_x')) {$('alert_x').style.top = this.offsety+evtobj.clientY-this.y-8+"px"}

 if ($('banki_popup')) {$('banki_popup').style.left = this.offsetx+evtobj.clientX-this.x-8+"px"}
 if ($('banki_popup')) {$('banki_popup').style.top = this.offsety+evtobj.clientY-this.y-8+"px"}

return false
}
}
}


//dragobject.initialize();
