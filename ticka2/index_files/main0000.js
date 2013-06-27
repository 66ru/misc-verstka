var stop_ctrl_move=false;
var usdie = 'die';
var exp_today   = new Date();
var expires = new Date(exp_today.getTime() + 10*365*24*60*60*1000);
var any_thing_focus = false;
var req = new JsHttpRequest();
var search_no_clear = false;

function $(id) {return document.getElementById(id);}

function showAuthForm()
{
	window_close(0);
	show_login('auth',430,1,'Регистрация'); add_auth('auth','auth','refresh'); 
	return false;
}

function getUserHash66()
	{
	var browserId = '', b_id1 = '', b_id2 = '', userInf = '';
	  var jsversion = '';
	  for (var i = 1; i < 10; i++) document.write('<' + 'script language="javascript1.' + i + '">jsversion = "' + i + '";<' + '/script>');
	  b_id1 += jsversion + ''; var b_chk = 'A';

	  b_id1 += b_chk; b_chk = 'B';
	  try {delete this} catch (E) {b_chk = 'A'}
	  b_id1 += b_chk; b_chk = 'B';
	  try {delete navigator} catch (E) {b_chk = 'A'}
	  b_id1 += b_chk; b_chk = '0';
	  if (typeof Window == 'function') {if (window instanceof Window) {b_chk = '1';}}
	  b_id1 += b_chk; b_chk = '0';
	  if (typeof Document == 'function') {if (document instanceof Document) {b_chk = '1'}}
	  b_id1 += b_chk; b_chk = '0';
	  if (typeof Navigator == 'function') {if (navigator instanceof Navigator) {b_chk = '1'}}
	  b_id1 += b_chk; b_chk = 'B';
	  try {var docwrite = document.write; docwrite('')} catch (E) {b_chk = 'A'}
	  b_id1 += b_chk;
	  b_chk = 'A';
	  try {eval('cons'+'t acons=true');} catch(e) {b_chk = 'B'}
	  b_id1 += b_chk;
 
	  if (window.crypto) {if (window.crypto.alert) {b_id1 = b_id1 + '1'}} else {b_id1 = b_id1 + '0'}

	  if (typeof window.onload == "function") {
	  var chkonload = window.onload.toString();
	  var isonloadanonymous = (chkonload.search('anonymous') != -1);
	  if (isonloadanonymous) {b_id1 += '2'} else {b_id1 += '1'}
	  } else {b_id1 += '0'}
	  var actxobj = (typeof ActiveXObject == "function") ? 'B' : 'A';
	  var gactxobj = (typeof GeckoActiveXObject == "function") ? 'A' : 'B';
	  b_id1 += actxobj + gactxobj;

	  var dopBrowserInfo = new function (ie) {
	  var d = document, w = window;
	  this.ff = !!w.Iterator && !!d.addEventListener && /a/[-1] == 'a';
	  this.ff2 = this.ff && (function x(){})[-6] == 'x';
	  this.ff3 = !!d.getElementsByClassName && this.ff && (function x(){})[-5] == 'x';
	  this.ie = (ie && '\v' == 'v');
	  this.ie5 = this.ie && ie == 5;
	  this.ie6 = this.ie && (ie == 6 || (d.compatMode && d.all && !!d.readyState));
	  this.ie7 = this.ie && (ie == 7 && d.documentElement && typeof d.documentElement.style.maxHeight != "undefined");
	  this.ie8 = this.ie && (ie == 8 && !!d.querySelectorAll);
	  this.safari = /a/.__proto__ == '//';
	  this.chrome = /source/.test((/a/.toString + ''));
	  this.opera = (!ie && !!w.opera && w.opera.toString() === "[object Opera]" && /^function \(/.test([].sort));
	  var div = d.createElement('div'),
	  body = d.body;
	  div.innerHTML = '<' + 'style' + '>' + '#_t{display:none;}#_t[rel^="D"]{display:block;}' + '<' + '/style' + '>';
	  div.innerHTML += '<span id="_t" rel="Detect"></span>';
	  div.style.display = 'none';
	  body.appendChild(div);
	  var obj = d.getElementById('_t'),
	  stat = w.getComputedStyle ? w.getComputedStyle(obj, null).getPropertyValue("display") : obj.currentStyle ? obj.currentStyle.display : null;
	  this.css3 = (stat == "block");
	  body.removeChild(div);
	  this.result = new String();
	  this.result += (this.ff ? '1' : '0') + (this.ff2 ? '1' : '0') + (this.ff3 ? '1' : '0') + '.';
	  this.result += (this.ie ? '1' : '0') + (this.ie5 ? '1' : '0') + (this.ie6 ? '1' : '0') +  (this.ie7 ? '1' : '0') + (this.ie8 ? '1' : '0') + '.';
	  this.result += (this.safari ? '1' : '0') + (this.chrome ? '1' : '0') + (this.opera ? '1' : '0') + (this.css3 ? '1' : '0');
	  }(0 /*@cc_on + (@_jscript_version * 10 % 10) @*/);
	  b_id2 = dopBrowserInfo.result;
	  delete dopBrowserInfo;

	  if (window.screen.width && window.screen.height) {
	  userInf += window.screen.width + '*' + window.screen.height;
	  if (window.screen.colorDepth) userInf += '@' + window.screen.colorDepth;
	  } else userInf += 'undefined';
	  if (navigator.systemLanguage) userInf += ' ' + navigator.systemLanguage; else userInf += ' no';
	  if (navigator.browserLanguage) userInf += ' ' + navigator.browserLanguage; else userInf += ' no';
	  if (navigator.userLanguage) userInf += ' ' + navigator.userLanguage; else userInf += ' no';
	  if (navigator.javaEnabled()) userInf += ' yes'; else userInf += ' no';

	  browserId = b_id1 + ' ' + b_id2 + ' ' + userInf+' '+screen.width+'x'+screen.height+' '+screen.colorDepth+' '+screen.pixelDepth;

	  return browserId;
	}


function getACookie(sName) {
  var aCookie = document.cookie.split(";");
  for (var i = 0; i < aCookie.length; i++) {
    var aCrumb = ltrim(aCookie[i]).split("=");
    if (sName == aCrumb[0])
      return unescape(aCrumb[1]);
  }
  return null;
}

function setACookie (name, value, expires, path, domain, secure) {
      document.cookie = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
}

function trim(str, chars)
	{
	return ltrim(rtrim(str, chars), chars);
	}

function ltrim(str, chars)
	{
	chars = chars || "\\s";
	return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
	}

function rtrim(str, chars)
	{
	chars = chars || "\\s";
	return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
	}

function loadMailCount()
	{
	req.onreadystatechange = function()
		{
		if (req.readyState == 4)
			{
			if (req.responseJS)
				{
				if(req.responseJS.mailcount>0)
					$('mailcount').innerHTML = '<b style="font-size: 10px; color: #fff; position: relative; top: -4px; left: 4px; line-height: 10px;">'+req.responseJS.mailcount+'</b>';
				else
					$('mailcount').innerHTML = '';
				}
			}
		}

	req.open('POST', '/mod/auth/ajax_getmail.php', true);
	req.send();
	}

function news_setGoodComm(comm_id)
	{
	req.onreadystatechange = function()
		{
		if (req.readyState == 4)
			{
			if (req.responseJS)
				{
				if(req.responseJS.content)
					{
					if ($('goodcommlink'+comm_id))
						{
						$('goodcommlink'+comm_id).innerHTML = req.responseJS.content;
						}
					}
				}
			}
		}

	req.open('POST', '/mod/news/ajax_setgoodcomm.php', true);
	req.send({comm_id:comm_id});
	}


function showLogin()
 {
 $('no_login').style.display = "none";
 $('login').style.display = "";
 }


function chcalendar(part,ch)
 {
 year  = $("n_year").innerHTML;
 month = $("n_month").innerHTML;

 req.onreadystatechange = function()
  {
  if (req.readyState == 4)
   {
   if (req.responseJS)
    {
    rez = req.responseJS.rez;
    $("cry_calendar").innerHTML = rez;
    }
   }
  }
 req.caching = false; //true
 req.open('POST', '/mod/news/sub_ajax.php', true);
 req.send({ year: year , month: month, part: part, ch: ch});
 }

function chcalendar_blog(part,ch,club_id)
{
	year  = $("n_year").innerHTML;
	month = $("n_month").innerHTML;

	req.onreadystatechange = function()
	{
		if (req.readyState == 4)
		{
			if (req.responseJS)
			{
				rez = req.responseJS.rez;
				$("cry_calendar").innerHTML = rez;
			}
		}
	}
	req.caching = false; //true
	req.open('POST', '/mod/community/calendar_ajax.php', true);
	req.send({ year: year , month: month, part: part, ch: ch, club_id: club_id});
}

function chcalendar_userblog(part,ch,user_id)
{
	year  = $("n_year").innerHTML;
	month = $("n_month").innerHTML;

	req.onreadystatechange = function()
	{
		if (req.readyState == 4)
		{
			if (req.responseJS)
			{
				rez = req.responseJS.rez;
				$("cry_calendar").innerHTML = rez;
			}
		}
	}
	req.caching = false; //true
	req.open('POST', '/mod/profile/calendar_ajax.php', true);
	req.send({ year: year , month: month, part: part, ch: ch, user_id: user_id});
}

// my navigation

function add_line(group)
 {
 $('button_'+group).style.display = 'none';
 $('in_'+group).style.display = '';
 $('num_id_'+group).value = Math.round($('num_id_'+group).value)+1;
 }


function edit_line(group)
 {
 old = $('edit2_'+group).value;
 $('edit_'+group).innerHTML = "<input type='text' style='width: 50%; font-size: 10px;' id='edit_new' onBlur='edit_save("+group+");'>";
 $('edit_new').value = old;
 $('edit_new').focus();
 }

function edit_save(group)
 {
 newz = $('edit_new').value;
 $('edit_'+group).innerHTML = "<span style='cursor: pointer;' onClick='edit_line("+group+");'>"+newz+"</span>&nbsp; <span style='color: #FF0000;'>Не сохранено!</span>";
 $('edit2_'+group).value = newz;
 }

function del_line(group)
 {
 $('edit2_'+group).value = '';
 $('for_del_'+group).style.display = "none";
 numz = $('num_id_'+group).value;
 for(a = 1; a < numz; a=a+1)
  {
  $('for_del_line_'+group+'_'+a).style.display = "none";
  }
 }

// ================>

function post_sms() {
 	var number = $('post_sms_number');
 	var msg = $('post_sms_text');
 	var cap = $('post_sms_cap');
 	if (number.value == "" || msg.value == "") alert_66('Необходимо указать номер и текст сообщения');
 	else if (msg.value.length > 64) alert_66('Максимальная длинна сообщения 64 символа');
 	else if (cap.value.length != 4) alert_66('Неверное контрольное число');
 	else {
 		$('sms_ind').style.display = "block";
 		req.onreadystatechange = function()
 		{
 			if (req.readyState == 4)
 			{
 				if (req.responseJS)
 				{
					$('sms_ind').style.display = "none";
 					if (req.responseJS.error == null) {
 						number.value = "";
 						msg.value = "";
 						cap.value = "";
 						$('post_sms_len').value = 0;
 						cap_refresh2();
 						alert_66('Сообщение отправлено');
 					}
 					else alert_66(req.responseJS.error);
 				}
 			}
 		}
 		req.caching = false; //true
 		req.open('POST', '/mod/my/ajax_post_sms.php', true);
 		req.send({ number: number.value, msg: msg.value, cap: cap.value });
	}

}

function cap_refresh2()
  {
  $('cap2').src = '/show/cap.php?'+Math.random();
  }


function my_pat_ch(id,ps)
 {
 value = 1;

 if (ps == 1)
  {
  if ($('zd_'+id).checked == true) {value = 1;} else {value = 0;}
  }
  else
  {
  if ($('planz_all_zd_'+id).checked == true) {value = 1;} else {value = 0;}
  }

 req.onreadystatechange = function()
  {
  if (req.readyState == 4)
   {
   if (req.responseJS)
    {
    if (value == 1)
     {
     if ($('zd_color_'+id))
      {
      $('zd_color_'+id).style.color = "#ADADAD";
      $('zd_'+id).checked = true;
      }
     if ($('planz_all_zd_color_'+id))
      {
      $('planz_all_zd_color_'+id).style.background = "#F9DE9A";
      $('planz_all_zd_'+id).checked = true;
      }
     }
    if (value == 0)
     {
     if ($('zd_color_'+id))
      {
      $('zd_color_'+id).style.color = "#6C6C6C";
      $('zd_'+id).checked = false;
      }
     if ($('planz_all_zd_color_'+id))
      {
      $('planz_all_zd_color_'+id).style.background = "#FFD1C3";
      $('planz_all_zd_'+id).checked = false;
      }
     }
    }
   }
  }
 req.caching = false; //true
 req.open('POST', '/mod/my/ajax_66_pat_ch.php', true);
 req.send({ id: id, value: value });
 }

// =============



// Заметки

function my_pat_getshow_task(id)
 {
 if (id == 0)
  {
  x_content = "";
  x_date = "Сегодня";
  my_pat_show_task(id,x_content,x_date);
  }
  else
  {
  act = 'get';

  req.onreadystatechange = function()
   {
   if (req.readyState == 4)
    {
    if (req.responseJS)
     {
     x_content = req.responseJS.x_content;
     x_date    = req.responseJS.x_date;
     my_pat_show_task(id,x_content,x_date);
     }
    }
   }
  req.caching = false; //true
  req.open('POST', '/mod/my/ajax_66_pat_task.php', true);
  req.send({ act: act, id: id, usdie: usdie });
  }
 }



function my_pat_show_task(id,x_content,x_date)
 {dragobject.initialize();
 if (id != 0)
  {
  delpart = "<td class='task_b_del'><input class='task_b_del_' type='button' value='Удалить' onClick='my_pat_del_task("+id+");' /></td>";
  }
  else
  {
  delpart = "<td class='task_b_del'>&nbsp;</td>";
  }

  x_left = xsize() - 550;
 if (document.all) var isie = 'absolute';
 else isie = 'fixed';

 $('window').innerHTML = "<div id='task' style='z-index:1000; position: "+isie+"; top: 200px; left: "+x_left+"px; width: 380px; height: 380px;'></div><div id='drag' class=drag style='z-index:1000; position: "+isie+"; top: 208px; left: "+(x_left+8)+"px; width: 340px; height: 32px; cursor: move;'></div>";

 $('task').innerHTML = ""
                                             +"<table style='width: 380px; height: 380px;' cellspacing='0' cellpadding='0' border='0'>"
                                             +"<tr style='height: 8px;'>"
                                              +"<td width='8'><img src='"+static66dez+"window/corner_1.png' width='8' height='8' alt='' border='0' class='shade_image'></td>"
                                              +"<td><img src='"+static66dez+"window/gray60.png' width='100%' height='8' alt='' border='0' class='shade_image'></td>"
                                              +"<td width='8'><img src='"+static66dez+"window/corner_2.png' width='8' height='8' alt='' border='0' class='shade_image'></td>"
                                             +"</tr>"
                                             +"<tr valign='top' style='height: 364px;'>"
                                              +"<td width='8'><img src='"+static66dez+"window/gray60.png' width='8' height='100%' alt='' border='0' class='shade_image'></div></td>"
                                              +"<td id='task_content' style='border: 1px solid #F3CF85; background-image: url("+static66dez+"task_bg.jpg);'>123</td>"
                                              +"<td width='8'><img src='"+static66dez+"window/gray60.png' width='8' height='100%' alt='' border='0' class='shade_image'></td>"
                                             +"</tr>"
                                             +"<tr style='height: 8px;'>"
                                              +"<td width='8'><img src='"+static66dez+"window/corner_3.png' width='8' height='8' alt='' border='0' class='shade_image'></td>"
                                              +"<td><img src='"+static66dez+"window/gray60.png' width='100%' height='8' alt='' border='0' class='shade_image'></td>"
                                               +"<td width='8'><img src='"+static66dez+"window/corner_4.png' width='8' height='8' alt='' border='0' class='shade_image'></td>"
                                             +"</tr>"
                                            +"</table>";

 $('task_content').innerHTML = "<table cellspacing='0' cellpadding='0' style='width: 364px; height: 364px;'>"
                                                     +"<tr style='height: 32px;'>"
                                                      +"<td style='border-bottom: 3px double #EFCF86; padding-left: 15px; color: #99853E;' colspan='3'><b>"+x_date+"</b></td>"
                                                      +"<td style='border-bottom: 3px double #EFCF86;' align='right'><img src='"+static66dez+"task_close.gif' width='34' height='32' border='0' style='cursor: pointer;' onClick='my_pat_close_task();'></td>"
                                                     +"</tr>"
                                                     +"<tr valign='top'><td colspan='4' style='padding: 10px;'><textarea id='task_text' class='task_text'>"+x_content+"</textarea></td></tr>"
                                                     +"<tr style='height: 32px;'>"
                                                      +delpart
                                                      +"<td class='task_b_save' colspan='3'><input type='button' class='task_b_save_' onClick='this.disabled=true;my_pat_save_task("+id+");' value='Сохранить' />"
                                                      +"<input type='button' class='task_b_cancel_' value='Отмена' onClick='my_pat_close_task();' /></td>"
                                                     +"</tr>"
                                                    +"</table>";
 $("task_text").focus();
 }

function my_pat_save_task(id)
	{
	act = 'save';
	new_content = $('task_text').value;
	if (new_content != '')
		{
		req.onreadystatechange = function()
			{
			if (req.readyState == 4)
				{
				if (req.responseJS)
					{
					if ($('here_task'))
						{
						$('my_66_cache_4').innerHTML = "";
						// обновляем блок
						$("new_content_2_div").innerHTML = req.responseJS.content;
						$("new_content_2_overdiv").style.height = $("new_content_2_div").offsetHeight;
						}

					my_pat_close_task();
					if ($('planz_b_3'))
					if ($('planz_b_3').title == "Мои заметки")
						{
						plan_all_cont[2] = '';
						plan_all_show_task();
						}
					}
				}
			}
		req.caching = false; //true
		req.open('POST', '/mod/my/ajax_66_pat_task.php', true);
		req.send({ act: act, id: id, new_content: new_content, usdie: usdie });
		}
		else my_pat_close_task();
	}

function my_pat_del_task(id)
 {
 act = 'del';
 req.onreadystatechange = function()
  {
  if (req.readyState == 4)
   {
   if (req.responseJS)
    {
    if ($('here_task'))
	 {
	 $('my_66_cache_4').innerHTML = "";
	 // обновляем блок
	 $("new_content_2_div").innerHTML = req.responseJS.content;
	 $("new_content_2_overdiv").style.height = $("new_content_2_div").offsetHeight;
	 }

    my_pat_close_task();
    if ($('planz_b_3'))
     if ($('planz_b_3').title == "Мои заметки")
      {
      plan_all_cont[2] = '';
      plan_all_show_task();
      }
    }
   }
  }
 req.caching = false; //true
 req.open('POST', '/mod/my/ajax_66_pat_task.php', true);
 req.send({ act: act, id: id, usdie: usdie });
 }

function my_pat_close_task()
 {
 document.body.onmousedown = null;
 document.body.onmouseup = null;
 document.body.onmousemove = null;
 $('window').innerHTML = "";
 }
// ============


// Задачи
function my_pat_getshow_project(id)
 {
 if (id == 0)
  {
  x_title   = "Новая задача";
  x_name    = "";
  x_content = "";
  x_hard    = 0;
  x_status  = 0;
  my_pat_show_project(id,x_title,x_name,x_content,x_hard);
  }
  else
  {
  act = 'get';

  req.onreadystatechange = function()
   {
   if (req.readyState == 4)
    {
    if (req.responseJS)
     {
     x_title   = "Редактирование задачи";
     x_name    = req.responseJS.x_name;
     x_content = req.responseJS.x_content;
     x_hard    = parseInt(req.responseJS.x_hard);
     x_status  = parseInt(req.responseJS.x_status);
     my_pat_show_project(id,x_title,x_name,x_content,x_hard,x_status);
     }
    }
   }
  req.caching = false; //true
  req.open('POST', '/mod/my/ajax_66_pat_project.php', true);
  req.send({ act: act, id: id, usdie: usdie });
  }
 }

function my_pat_show_project(id,x_title,x_name,x_content,x_hard,x_status)
 {
 if ($("window").innerHTML == '')
  {
  window_create('project',500,1);
  window_setupcontent('project',x_title);

  button_del = "<td>&nbsp; </td>";
  if (id != 0) {button_del = "<td style='text-align: left; background-image: url("+static66dez+"ico_del.gif); background-repeat: no-repeat; background-position: 6px 16px; color: #E3484C; padding-left: 20px' align='right'><span onClick='my_pat_del_project("+id+")' style='cursor: pointer;'>Удалить</span></td>";}

  $("project_mf").innerHTML = ""

  +"<table cellspacing='0' cellpadding='0' border='0' style='width: 100%; height: 160px;'>"
   +"<tr style='height: 35px;'>"
    +"<td width='30' style='width: 30px; padding-left: 10px; color: #464540;'>Задача:</td>"
    +"<td colspan='6' style='white-space: nowrap;'><input type='text' style='width: 75%; font-size: 10px;' id='project_name' value='"+x_name+"'><input type='checkbox' id='project_hard'><label for='project_hard' style='position: relative; top: -2px;'>Это важно!</label></td>"
   +"</tr>"
   +"<tr>"
    +"<td style='background-color: #F9F9F7; border: 1px solid #D2D1CC; border-right: 0px; padding-left: 10px; color: #464540;'>Текст</td>"
    +"<td style='background-color: #F9F9F7; border: 1px solid #D2D1CC; border-left: 0px; padding-right: 10px;' colspan='6'><textarea id='project_text' style='width: 100%; height: 140px;'>"+x_content+"</textarea></td>"
   +"</tr>"
   +"<tr style='height: 40px;'>"
    +button_del
    +"<td colspan='3' align='left'><input type='checkbox' id='project_status'>"
    +"<label for='project_status' style='position: relative; top:-2px;'>завершено</label></td>"
    +"<td colspan='3' align='right' style='white-space: nowrap; padding-right: 10px;'><input type='image' src='"+static66dez+"save.gif' style='margin-right: 10px; width: 85px; height: 16px' value='Сохранить' onClick='this.disabled=true;my_pat_save_project("+id+");'>"
    +"<input type='image' src='"+static66dez+"cancel.gif' style='width: 68px; height: 16px' value='Отмена' onClick='window_close(0);return false;' /></td>"
   +"</tr>"
  +"</table>";

  if (x_hard   == 1) {$("project_hard").checked   = true;}
  if (x_status == 1) {$("project_status").checked = true;}
  }
 }

function my_pat_save_project(id)
	{
	act = 'save';
	new_name    = $('project_name').value;
	new_content = $('project_text').value;

	if ($('project_hard').checked   == true) {new_hard = 1;}   else {new_hard   = 0;}
	if ($('project_status').checked == true) {new_status = 1;} else {new_status = 0;}

	req.onreadystatechange = function()
		{
		if (req.readyState == 4)
			{
			if (req.responseJS)
				{
				if ($('planz_b_1')) {plan_all_button_ch(2);}
				if ($('pat')) {my_show_pat('do_not_close');}
				window_close(0);
				}
			}
		}
	req.caching = false; //true
	req.open('POST', '/mod/my/ajax_66_pat_project.php', true);
	req.send({ act: act, id: id, new_name: new_name, new_content: new_content, new_hard: new_hard , new_status: new_status, usdie: usdie });
 	}

function my_pat_del_project(id)
	{
	act = 'del';
	req.onreadystatechange = function()
		{
		if (req.readyState == 4)
			{
			if (req.responseJS)
				{
				if ($('planz_b_1')) {plan_all_button_ch(2);}
				if ($('pat')) {my_show_pat('do_not_close');}
				window_close(0);
				}
			}
		}
	req.caching = false; //true
	req.open('POST', '/mod/my/ajax_66_pat_project.php', true);
	req.send({ act: act, id: id, usdie: usdie });
	}
// ==========






// Планы
function my_plan_getshow(id,part)
 {
 if (id == 0)
  {
	var ie  = document.all;
	var today     = new Date();
	var dateNow   = today.getDate();
	var monthNow  = today.getMonth();
	var yearNow   = today.getYear();
  if (!ie) yearNow += 1900;
	var	monthName = new Array('января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря');



  x_title   = "Новое событие";
  x_name    = "";
  x_text    = "";
  x_date    = dateNow+" "+monthName[monthNow]+" "+yearNow;
  x_time_1  = today.getHours();
  x_time_2  = today.getMinutes();
  if ((x_time_2 >  0) &&(5  > x_time_2)) {x_time_2 = 5;}
  if ((x_time_2 >  5) &&(10 > x_time_2)) {x_time_2 = 10;}
  if ((x_time_2 >  10)&&(15 > x_time_2)) {x_time_2 = 15;}
  if ((x_time_2 >  15)&&(20 > x_time_2)) {x_time_2 = 20;}
  if ((x_time_2 >  20)&&(25 > x_time_2)) {x_time_2 = 25;}
  if ((x_time_2 >  25)&&(30 > x_time_2)) {x_time_2 = 30;}
  if ((x_time_2 >  30)&&(35 > x_time_2)) {x_time_2 = 35;}
  if ((x_time_2 >  35)&&(40 > x_time_2)) {x_time_2 = 40;}
  if ((x_time_2 >  40)&&(45 > x_time_2)) {x_time_2 = 45;}
  if ((x_time_2 >  45)&&(50 > x_time_2)) {x_time_2 = 50;}
  if ((x_time_2 >  50)&&(55 > x_time_2)) {x_time_2 = 55;}
  if ((x_time_2 >  55)&&(60 > x_time_2)) {x_time_2 = 0; x_time_1 += 1;}

  x_need_send = 0;
  x_hard    = 0;
  x_send_time_value = 0;
  x_send_time_type  = 0;
  x_to = 0;
  x_send = 0;
  x_sex_type = '';
  x_all_day = 0;

  z_day = 0;
  z_month = 0;
  z_of_day = 0;

  my_plan_show(id,part,x_name,x_date,x_time_1,x_time_2,x_text,x_need_send,x_hard,x_send_time_value,x_send_time_type,x_to,x_send,x_sex_type,z_day,z_month,z_of_day,x_all_day);
  }
  else
  {
  act = 'get';

  x_sex_type = '';
  z_day = 0;
  z_month = 0;
  z_of_day = 0;

  req.onreadystatechange = function()
   {
   if (req.readyState == 4)
    {
    if (req.responseJS)
     {
     x_title   = "Редактирование события";
     x_name    = req.responseJS.x_name;
     x_text    = req.responseJS.x_text;
     x_date    = req.responseJS.x_date;
     x_time_1  = req.responseJS.x_time_1;
     x_time_2  = req.responseJS.x_time_2;
     x_need_send       = parseInt(req.responseJS.x_need_send);
     x_hard            = parseInt(req.responseJS.x_hard);
     x_send_time_value = parseInt(req.responseJS.x_send_time_value);
     x_send_time_type  = parseInt(req.responseJS.x_send_time_type);
     x_to              = req.responseJS.x_to;
     x_send            = req.responseJS.x_send;
	 x_all_day         = req.responseJS.x_all_day;
     if (part == 2)
      {
      x_sex_type = req.responseJS.x_sex_type;
      z_day = parseInt(req.responseJS.z_day);
      z_month = parseInt(req.responseJS.z_month);
      z_of_day = req.responseJS.z_of_day;
      }
     my_plan_show(id,part,x_name,x_date,x_time_1,x_time_2,x_text,x_need_send,x_hard,x_send_time_value,x_send_time_type,x_to,x_send,x_sex_type,z_day,z_month,z_of_day,x_all_day);
     }
    }
   }
  req.caching = false; //true
  req.open('POST', '/mod/my/ajax_66_plan.php', true);
  req.send({ act: act, id: id, part: part, usdie: usdie });
  }
 }


function my_plan_show(id,part,x_name,x_date,x_time_1,x_time_2,x_text,x_need_send,x_hard,x_send_time_value,x_send_time_type,x_to,x_send,x_sex_type,z_day,z_month,z_of_day,x_all_day)
 {
 if ($("window").innerHTML == '')
  {
  window_create('project',530,1);
  window_setupcontent('project',x_title);
  // Проверка установлени ли телефон и почта для напоминаний
  req.onreadystatechange = function()
   {
   if (req.readyState == 4)
    {
    if (req.responseJS)
     {
     	if (req.responseJS.sms == "" && req.responseJS.email == "") {
     		$("send").disabled = true;
     	} else if (req.responseJS.email == "") {
     		$("to_MAIL").disabled = true;
     	} else if (req.responseJS.sms == "") {
     		$("to_SMS").disabled = true;
     		$("send_type").selectedIndex = 1; // если включить опшон с аськой то тут надо сменить ))
     	}
     }
    }
   }
  req.caching = false; //true
  req.open('POST', '/mod/my/ajax_sms_email.php', true);
  req.send({ act: 1});


  button_del = "<td>&nbsp; </td>";
  if (id != 0) {button_del = "<td style='background-image: url("+static66dez+"ico_del.gif); background-repeat: no-repeat; background-position: 6px 16px; color: #E3484C;padding-left: 20px;' align='right'><span onClick='my_plan_del("+id+","+part+")' style='cursor: pointer;'>Удалить</span></td>";}

  hour = "";
  for(a = 0; 24 > a; a=a+1)
   {
   hour = hour + "<option id='h_"+a+"' value='"+a+"'>"+a+"</option>";
   }

  minut = "";
  for(a = 0; 60 > a; a=a+5)
   {
   minut = minut + "<option id='m_"+a+"' value='"+a+"'>"+a+"</option>";
   }

  day = "";
  for(a = 1; 32 > a; a=a+1)
   {
   day = day + "<option id='rep_day_"+a+"'>"+a+"</option>";
   }

  y_day = "";
  for(a = 1; 32 > a; a=a+1)
   {
   y_day = y_day + "<option id='rep_y_day_"+a+"'>"+a+"</option>";
   }

	var	monthName = new Array('января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря');
  y_month = "";
  for(a = 0; 12 > a; a=a+1)
   {
   y_month = y_month + "<option id='rep_y_month_"+(a+1)+"'>"+monthName[a]+"</option>";
   }


  ocl = 'new_calendar_show("newplan_calendar","plan_date",0,0);';

  its_send_min_array  = new Array('1','5','10','15','30','45');
  its_send_hour_array = new Array('1','2','6','12','24');
  its_send = "";

  if (x_send_time_type == 3600)
   {
   for(a = 0; 5 > a; a=a+1)
    {
    its_send = its_send + "<option id='sh_"+its_send_hour_array[a]+"' value='"+its_send_hour_array[a]+"'>"+its_send_hour_array[a]+"</option>";
    }
   }
   else
   {
   for(a = 0; 6 > a; a=a+1)
    {
    its_send = its_send + "<option id='sm_"+its_send_min_array[a]+"' value='"+its_send_min_array[a]+"'>"+its_send_min_array[a]+"</option>";
    }
   }

  send_text = "";
  if (x_send != 0)
   {
   send_text = x_send;
   }



  if (part == 2)
   {
   button_1_hide = "display: none;";
   button_2_hide = "";
   date_hide     = "display: none;";
   type_hide     = "";
   }
   else
   {
   date_hide     = "";
   type_hide     = "display: none;";
   button_1_hide = "";
   button_2_hide = "display: none;";
   }

  if (x_sex_type == 'еженедельно')  {rep_week_hide = '';}  else {rep_week_hide  = "display: none;";}
  if (x_sex_type == 'ежемесячно')   {rep_month_hide = '';} else {rep_month_hide = "display: none;";}
  if (x_sex_type == 'ежегодно')     {rep_year_hide = '';}  else {rep_year_hide  = "display: none;";}

	if (x_name == '')
	 {
	 button_1_part_1 = "<td width='106' align='center' style='text-align:center;white-space: nowrap; color: #404040; background-image: url("+static66dez+"plan_button.gif); background-repeat: no-repeat;'><b>Время события</b></td>";
     button_2_part_1 = "<td width='90'  align='center' style='text-align:center;white-space: nowrap; color: #0053AA; cursor: pointer; text-decoration: underline; background-image: url("+static66dez+"plan_bg.gif); background-repeat: repeat-x;' onClick='my_plan_ch_part("+id+",2);'><b>Повторение</b></td>";
	 button_1_part_2 = "<td width='106' align='center' style='text-align:center;white-space: nowrap; color: #0053AA; cursor: pointer; text-decoration: underline; background-image: url("+static66dez+"plan_bg.gif); background-repeat: repeat-x;' onClick='my_plan_ch_part("+id+",1);'><b>Время события</b></td>";
     button_2_part_2 = "<td width='90'  align='center' style='text-align:center;white-space: nowrap; color: #404040; background-image: url("+static66dez+"plan_button.gif); background-repeat: no-repeat;'><b>Повторение</b></td>";
	 }
	 else
	 {
 	 button_1_part_1 = "<td width='106' align='center' style='text-align:center;white-space: nowrap; color: #404040; background-image: url("+static66dez+"plan_button.gif); background-repeat: no-repeat;'><b>Время события</b></td>";
     button_2_part_1 = "<td width='90'  align='center' style='text-align:center;white-space: nowrap; background-image: url("+static66dez+"plan_bg.gif); background-repeat: repeat-x;'>&nbsp;</td>";
	 button_1_part_2 = "<td width='106' align='center' style='text-align:center;white-space: nowrap; background-image: url("+static66dez+"plan_bg.gif); background-repeat: repeat-x;'>&nbsp;</td>";
     button_2_part_2 = "<td width='90'  align='center' style='text-align:center;white-space: nowrap; color: #404040; background-image: url("+static66dez+"plan_button.gif); background-repeat: no-repeat;'><b>Повторение</b></td>";
	 }

  $("project_mf").innerHTML = ""
  +"<form name='form1'><table cellspacing='0' cellpadding='0' border='0' style='width: 100%; height: 1px;'>"
   +"<tr style='height: 35px;'>"
    +"<td style='padding-left: 10px; color: #464540;'>Событие:</td>"
    +"<td width='370' colspan='2'><input type='text' style='width: 100%; font-size: 10px;' id='plan_name' value='"+x_name+"'></td>"
    +"<td align='right'><table width='90' cellspacing='0' cellpadding='0' border='0'><tr><td width='1'><input type='checkbox' id='plan_hard'></td><td><label for='plan_hard'>Это важно!</label></td></tr></table></td>"
   +"</tr>"
   +"<tr>"
    +"<td colspan='4'>"
     +"<table cellspacing='0' cellpadding='0' border='0' style='width: 100%; border-bottom: 1px solid #D1D0CB;'>"

      +"<tr style='height: 28px; "+button_1_hide+"' id='button_1'>"
       +button_1_part_1
       +button_2_part_1
       +"<td width='240' style='background-image: url("+static66dez+""+static66dez+"plan_bg.gif); background-repeat: repeat-x;'>&nbsp;</td>"
      +"</tr>"
      +"<tr style='height: 28px; "+button_2_hide+"' id='button_2'>"
       +button_1_part_2
       +button_2_part_2
       +"<td width='240' style='background-image: url("+static66dez+""+static66dez+"plan_bg.gif); background-repeat: repeat-x;'>&nbsp;</td>"
      +"</tr>"

      +"<tr style='background-color: #F9F9F7; height: 30px; "+date_hide+"' id='date_1'>"
       +"<td style='border-left: 1px solid #D1D0CB; padding-left: 7px; color: #404040;'>Дата</td>"
       +"<td style='border-right: 1px solid #D1D0CB; padding-top: 1px; color: #0053AA;' colspan='2'>"
        +"<div align='center' id='newplan_calendar' style='position: absolute; right: 100px;'></div><input id='plan_date' name='of' value='"+x_date+"' style='font-size: 10px; background-color: #FFFFFF;' disabled><img src='"+static66dez+"select.gif' width='12' height='12' alt='Календарь' title='Календарь' border='0' onclick='"+ocl+"' style='cursor: pointer; margin-left: 4px; margin-top: 2px;'>&nbsp; &nbsp; <a href='/' onClick='my_plan_date_ch(1); return false;'>завтра</a>&nbsp; &nbsp; <a href='/' onClick='my_plan_date_ch(2); return false;'>послезавтра</a>"
       +"</td>"
      +"</tr>"

      +"<tr style='background-color: #F9F9F7; height: 30px; "+type_hide+"' id='type_2'>"
       +"<td style='border-left: 1px solid #D1D0CB; border-right: 1px solid #D1D0CB; padding-left: 7px; color: #404040;' colspan='3'>"
        +"<table cellspacing='0' cellpadding='0' border='0'><tr>"
         +"<td width='1'><input type='radio' name='rep' id='rep_day'   onClick='my_plan_ch_sex(1);'></td>          <td width='68'><label for='rep_day'> ежедневно</label></td>"
         +"<td width='1'><input type='radio' name='rep' id='rep_week'  onClick='my_plan_ch_sex(2);'></td>          <td width='68'><label for='rep_week'> еженедельно</label></td>"
         +"<td width='1'><input type='radio' name='rep' id='rep_month' onClick='my_plan_ch_sex(3);'></td>          <td width='68'><label for='rep_month'> ежемесячно</label></td>"
         +"<td width='1'><input type='radio' name='rep' id='rep_year'  onClick='my_plan_ch_sex(4);' checked ></td> <td width='68'><label for='rep_year'> ежегодно</label></td>"
        +"</tr></table>"
       +"</td>"
      +"</tr>"

      +"<tr style='background-color: #F9F9F7; height: 30px; "+rep_week_hide+"' id='sex_type_week'>"
       +"<td style='border-left: 1px solid #D1D0CB; border-right: 1px solid #D1D0CB; padding-left: 7px; color: #404040;' colspan='3'>"
        +"<table cellspacing='0' cellpadding='0' border='0' style='padding-bottom: 5px;'><tr>"
         +"<td width='1'><input type='checkbox' id='rep_week_1'></td><td width='70'><label for='rep_week_1'> понедельник</label></td>"
         +"<td width='1'><input type='checkbox' id='rep_week_2'></td><td width='70'><label for='rep_week_2'> вторник</label></td>"
         +"<td width='1'><input type='checkbox' id='rep_week_3'></td><td width='70'><label for='rep_week_3'> среда</label></td>"
         +"<td width='1'><input type='checkbox' id='rep_week_4'></td><td width='70'><label for='rep_week_4'> четверг</label></td>"
         +"<td width='1'><input type='checkbox' id='rep_week_5'></td><td width='70'><label for='rep_week_5'> пятница</label></td>"
        +"</tr>"
        +"<tr>"
         +"<td width='1'><input type='checkbox' id='rep_week_6'></td><td width='70' style='color: #E78300;'><label for='rep_week_6'> суббота</label></td>"
         +"<td width='1'><input type='checkbox' id='rep_week_0'></td><td width='70' style='color: #E78300;'><label for='rep_week_0'> воскресенье</label></td>"
        +"</tr></table>"
       +"</td>"
      +"</tr>"

      +"<tr style='background-color: #F9F9F7; height: 30px; "+rep_month_hide+"' id='sex_type_month'>"
       +"<td style='border-left: 1px solid #D1D0CB; padding-left: 7px; color: #404040;'>Число</td>"
       +"<td style='border-right: 1px solid #D1D0CB; padding-top: 1px; color: #404040;' colspan='2'>"
        +"<select id='rep_month_d'>"+day+"</select> каждого месяца"
       +"</td>"
      +"</tr>"

      +"<tr style='background-color: #F9F9F7; height: 30px; "+rep_year_hide+"' id='sex_type_year'>"
       +"<td style='border-left: 1px solid #D1D0CB; padding-left: 7px; color: #404040;'>Дата</td>"
       +"<td style='border-right: 1px solid #D1D0CB; padding-top: 1px; color: #404040;' colspan='2'>"
        +"<select id='rep_year_d'>"+y_day+"</select> <select id='rep_year_m'>"+y_month+"</select> каждого года"
       +"</td>"
      +"</tr>"

      +"<tr style='background-color: #EFEEE9; height: 30px;'>"
       +"<td style='border-top: 1px solid #D1D0CB; border-left: 1px solid #D1D0CB; padding-left: 7px; color: #404040;'>Время</td>"
       +"<td style='border-top: 1px solid #D1D0CB; border-right: 1px solid #D1D0CB; padding-top: 1px; color: #404040;' colspan='2'>"
        +"<select id='plan_time_1'>"+hour+"</select> часов&nbsp; "
        +"<select id='plan_time_2'>"+minut+"</select> минут"
        +"&nbsp; &nbsp; &nbsp; <input type='checkbox' style='margin: 0px;' onClick='my_plan_time_disable();' id='all_day'><label for='all_day'> Весь день</label>"
       +"</td>"
      +"</tr>"
      +"<tr style='background-color: #F9F9F7; height: 30px;'>"
       +"<td style='border-top: 1px solid #D1D0CB; border-left: 1px solid #D1D0CB; padding-left: 7px; color: #404040;'>Напомнить</td>"
       +"<td style='border-top: 1px solid #D1D0CB; border-right: 1px solid #D1D0CB; padding-top: 1px; color: #404040;' colspan='2'>"
        +"<input type='checkbox' style='margin: 0px;' onClick='my_plan_disable();' id='send'>&nbsp; &nbsp; <select disabled id='send_type'><option id='to_SMS'>SMS</option><!--<option id='to_ICQ'>ICQ</option>--><option id='to_MAIL'>Почта</option></select> За <select disabled id='send_time'>"+its_send+"</select> <select disabled id='send_time_type' onChange='my_plan_time_type_ch();'><option id='sm'>мин.</option><option id='sh'>час</option></select>"+send_text
       +"</td>"
      +"</tr>"
      +"<tr style='background-color: #EFEEE9; height: 30px;'>"
       +"<td style='border-top: 1px solid #D1D0CB; border-left: 1px solid #D1D0CB; padding-left: 7px; color: #404040;'>Текст</td>"
       +"<td style='border-top: 1px solid #D1D0CB; border-right: 1px solid #D1D0CB; padding: 2px 0px 2px 0px; color: #404040;' colspan='2'>"
        +"<textarea style='width: 390px; height: 100px;' id='plan_text'>"+x_text+"</textarea>"
       +"</td>"
      +"</tr>"
     +"</table>"
    +"</td>"
   +"</tr>"
   +"<tr style='height: 40px;'>"
    +button_del
//    +"<td>&nbsp; </td>"
    +"<td colspan='3' align='right' id='b_save'><input type='image' src='"+static66dez+"save.gif' style='margin-right: 10px;width: 85px; height: 16px' value='Сохранить' onClick='this.disabled=true;my_plan_save("+id+","+part+");return false;'>"
    +"<input type='image' src='"+static66dez+"cancel.gif' style='width: 68px; height: 16px' value='Отмена' onClick='window_close(0); return false;'></td>"
   +"</tr>"
  +"</table></form>";

  if (x_hard   == 1)     {$("plan_hard").checked    = true;}
  if (x_time_1 > 1 )     {$("h_"+parseInt(x_time_1)).selected = true;}
  if (x_time_2 > 1 )     {$("m_"+parseInt(x_time_2)).selected = true;}
  if (x_need_send == 1 )
   {
   $("send").checked = true;
   $('send_type').disabled = false;
   $('send_time').disabled = false;
   $('send_time_type').disabled = false;

   if (x_send_time_type == 60)
    {
    $("sm").selected = true;
    $("sm_"+parseInt(x_send_time_value)).selected = true;
    }
   if (x_send_time_type == 3600)
    {
    $("sh").selected = true;
    $("sh_"+parseInt(x_send_time_value)).selected = true;
    }
   }

  if (x_to != 0)
   {
   if (x_to == 'SMS')  {$("to_SMS").selected = true;}
   if (x_to == 'ICQ')  {$("to_ICQ").selected = true;}
   if (x_to == 'MAIL') {$("to_MAIL").selected = true;}
   }

  if (x_all_day == 1)
   {
   $("all_day").checked = true;
   $('plan_time_1').disabled = true;
   $('plan_time_2').disabled = true;
   }

  if (x_sex_type != '')
   {
   if (x_sex_type == 'ежедневно') {$("rep_day").checked = true;}
   if (x_sex_type == 'еженедельно')
    {
    $("rep_week").checked = true;
    if (z_of_day[0] == 1) {$("rep_week_0").checked = true;}
    if (z_of_day[1] == 1) {$("rep_week_1").checked = true;}
    if (z_of_day[2] == 1) {$("rep_week_2").checked = true;}
    if (z_of_day[3] == 1) {$("rep_week_3").checked = true;}
    if (z_of_day[4] == 1) {$("rep_week_4").checked = true;}
    if (z_of_day[5] == 1) {$("rep_week_5").checked = true;}
    if (z_of_day[6] == 1) {$("rep_week_6").checked = true;}
    }
   if (x_sex_type == 'ежемесячно')
    {
    $("rep_month").checked = true;
    $("rep_day_"+z_day).selected = true;
    }
   if (x_sex_type == 'ежегодно')
    {
    $("rep_year").checked = true;
    $("rep_y_day_"+z_day).selected     = true;
    $("rep_y_month_"+z_month).selected = true;
    }
   }
  }
 }


function my_plan_save(id,part)
 {
 act = 'save';

 new_name = $('plan_name').value;
 new_text = $('plan_text').value;
 if (part == 1) {new_date = $('plan_date').value;} else {new_date = 0;}

 new_time_1 = parseInt($('plan_time_1').selectedIndex);
 new_time_2 = parseInt($('plan_time_2').options[$('plan_time_2').selectedIndex].value);

 if ($('plan_hard').checked == true) {new_hard = 1;} else {new_hard   = 0;}

 z_day    = '';
 z_month  = '';
 z_of_day = '';
 rep_type = '';

 if (part == 2)
  {
  if ($("rep_day").checked   == true) {rep_type = 1;}
  if ($("rep_week").checked  == true)
   {
   z_of_day = "";
   if ($("rep_week_0").checked == true) {z_of_day = z_of_day + "1";} else {z_of_day = z_of_day + "0";}
   if ($("rep_week_1").checked == true) {z_of_day = z_of_day + "1";} else {z_of_day = z_of_day + "0";}
   if ($("rep_week_2").checked == true) {z_of_day = z_of_day + "1";} else {z_of_day = z_of_day + "0";}
   if ($("rep_week_3").checked == true) {z_of_day = z_of_day + "1";} else {z_of_day = z_of_day + "0";}
   if ($("rep_week_4").checked == true) {z_of_day = z_of_day + "1";} else {z_of_day = z_of_day + "0";}
   if ($("rep_week_5").checked == true) {z_of_day = z_of_day + "1";} else {z_of_day = z_of_day + "0";}
   if ($("rep_week_6").checked == true) {z_of_day = z_of_day + "1";} else {z_of_day = z_of_day + "0";}
   rep_type = 2;
   }
  if ($("rep_month").checked == true)
   {
   rep_type = 3;
   z_day = $("rep_month_d").value;
   }
  if ($("rep_year").checked  == true)
   {
   rep_type = 4;
   z_day   = $("rep_year_d").value;
   z_month = $("rep_year_m").value;
   }
  }

 new_send_type = '';
 new_send_time = '';
 new_send_time_type = '';
 if ($('send_type').disabled == false)
  {
  new_send_type      = $('send_type').value;
  new_send_time      = $('send_time').value;
  new_send_time_type = $('send_time_type').value;
  }

 all_day = 0;
 if ($("all_day").checked == true)
  {
  all_day = 1;
  }

 if ($("custom_date"))
  {
  input_date    = $("custom_date").value.split(" ");
  new_month_num = Math.floor(Math.floor(get_numeric_month(input_date[1]))+1);
  new_year      = Math.floor(input_date[2]);
  custom_date_x = ""+new_year+"-"+new_month_num+"-"+Math.floor(input_date[0],10)+"";
  }
  else
  {
  custom_date_x = "";
  }

	req.onreadystatechange = function()
		{
		if (req.readyState == 4)
			{
			if (req.responseJS)
				{
				if ($('plan_ch'))
					{
					if (req.responseJS.new_content != "")
						{
						$('my_66_cache_3').innerHTML = "";
						// обновляем блок
						$("new_content_2_div").innerHTML = req.responseJS.new_content;
						$("new_content_2_overdiv").style.height = $("new_content_2_div").offsetHeight;
						}
					}
					if ($('planz_b_1'))
						if ($('planz_b_1').title = "Мои планы")
							{
							plan_all_cont[0] = '';
							plan_all_show_plans();
							}
				window_close(0);
				}
			}
		}
	req.caching = false; //true
	req.open('POST', '/mod/my/ajax_66_plan.php', true);
	req.send({ act: act, id: id, part: part, new_name: new_name, new_text: new_text, new_date: new_date, new_hard: new_hard, new_time_1: new_time_1, new_time_2: new_time_2, new_send_type: new_send_type, new_send_time:new_send_time, new_send_time_type:new_send_time_type, all_day:all_day, rep_type:rep_type, z_day:z_day, z_month:z_month, z_of_day:z_of_day, custom_date: custom_date_x, usdie: usdie });
 }

function my_plan_del(id,part)
 {
 act = 'del';

 if ($("custom_date"))
  {
  input_date = $("custom_date").value.split(" ");
  new_month_num = Math.floor(Math.floor(get_numeric_month(input_date[1]))+1);
  new_year      = Math.floor(input_date[2]);
  custom_date_x = new_year+"-"+new_month_num+"-"+input_date[0];
  }

 req.onreadystatechange = function()
  {
  if (req.readyState == 4)
   {
   if (req.responseJS)
    {
    if ($('plan_ch'))
     {
     if (req.responseJS.new_content != "")
      {
		$('my_66_cache_3').innerHTML = "";
		// обновляем блок
		$("new_content_2_div").innerHTML = req.responseJS.new_content;
		$("new_content_2_overdiv").style.height = $("new_content_2_div").offsetHeight;
      }
     }
    if ($('planz_b_1'))
     if ($('planz_b_1').title = "Мои планы")
      {
      plan_all_cont[0] = '';
      plan_all_show_plans();
      }
    window_close(0);
    }
   }
  }
 req.caching = false; //true
 req.open('POST', '/mod/my/ajax_66_plan.php', true);
 req.send({ act: act, id: id, part: part, custom_date: custom_date_x, usdie: usdie });
 }

function my_plan_disable()
 {
 if ($('send_type').disabled == true)
  {
  $('send_type').disabled = false;
  $('send_time').disabled = false;
  $('send_time_type').disabled = false;
  }
  else
  {
  $('send_type').disabled = true;
  $('send_time').disabled = true;
  $('send_time_type').disabled = true;
  }
 }

function my_plan_time_disable()
 {
 if ($('plan_time_1').disabled == true)
  {
  $('plan_time_1').disabled = false;
  $('plan_time_2').disabled = false;

  if (($('plan_time_1').value == 9) || ($('plan_time_2') == 0))
   {
   var today     = new Date();
   x_time_1  = today.getHours();
   x_time_2  = today.getMinutes();
   if ((x_time_2 >  0) &&(5  > x_time_2)) {x_time_2 = 5;}
   if ((x_time_2 >  5) &&(10 > x_time_2)) {x_time_2 = 10;}
   if ((x_time_2 >  10)&&(15 > x_time_2)) {x_time_2 = 15;}
   if ((x_time_2 >  15)&&(20 > x_time_2)) {x_time_2 = 20;}
   if ((x_time_2 >  20)&&(25 > x_time_2)) {x_time_2 = 25;}
   if ((x_time_2 >  25)&&(30 > x_time_2)) {x_time_2 = 30;}
   if ((x_time_2 >  30)&&(35 > x_time_2)) {x_time_2 = 35;}
   if ((x_time_2 >  35)&&(40 > x_time_2)) {x_time_2 = 40;}
   if ((x_time_2 >  40)&&(45 > x_time_2)) {x_time_2 = 45;}
   if ((x_time_2 >  45)&&(50 > x_time_2)) {x_time_2 = 50;}
   if ((x_time_2 >  50)&&(55 > x_time_2)) {x_time_2 = 55;}
   if ((x_time_2 >  55)&&(60 > x_time_2)) {x_time_2 = 0; x_time_1 += 1;}
   $("h_"+parseInt(x_time_1)).selected = true;
   $("m_"+parseInt(x_time_2)).selected = true;
   }
  }
  else
  {
  $("h_9").selected = true;
  $("m_0").selected = true;
  $('plan_time_1').disabled = true;
  $('plan_time_2').disabled = true;
  }
 }

function my_plan_time_type_ch()
 {
 if ($('send_time_type').value == 'час')
  {
  its_send_hour_array = new Array('1','2','6','12','24');
  its_send_hour = "";
  for(a = 0; 5 > a; a=a+1)
   {
   its_send_hour  = its_send_hour + "<option id='sh_"+its_send_hour_array[a]+"'>"+its_send_hour_array[a]+"</option>";
   }
  $('send_time').innerHTML = its_send_hour;
  }
  else
  {
  its_send_min_array  = new Array('1','5','10','15','30','45');
  its_send_min = "";
  for(a = 0; 6 > a; a=a+1)
   {
   its_send_min  = its_send_min + "<option id='sm_"+its_send_min_array[a]+"'>"+its_send_min_array[a]+"</option>";
   }
  $('send_time').innerHTML = its_send_min;
  }
 }

function my_plan_date_ch(num)
 {
 var ie        = document.all;
 var today     = new Date();
 var dateNow   = today.getDate();
 var monthNow  = today.getMonth();
 var yearNow   = today.getYear();
 if (!ie) {yearNow = yearNow + 1900};
 var	monthName = new Array('января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря');

 new_date = new Date(yearNow,monthNow,dateNow + num);

 new_day   = new_date.getDate();
 new_month = new_date.getMonth();
 new_year  = new_date.getYear();
 if (!ie) {new_year = new_year + 1900};

 $('plan_date').value = new_day+" "+monthName[new_month]+" "+new_year;
 }

function my_plan_ch_part(id,part)
 {
 if (part == 1)
  {
  $('button_1').style.display = "";
  $('button_2').style.display = "none";
  $('date_1').style.display = "";
  $('type_2').style.display = "none";

  $('sex_type_week').style.display = "none";
  $('sex_type_month').style.display = "none";
  $('sex_type_year').style.display = "none";

  if ($('plan_date').value == "")
   {
 	 var ie  = document.all;
	 var today     = new Date();
	 var dateNow   = today.getDate();
	 var monthNow  = today.getMonth();
	 var yearNow   = today.getYear();
   if (!ie) yearNow += 1900;
	 var	monthName = new Array('января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря');
   x_date    = dateNow+" "+monthName[monthNow]+" "+yearNow;
   $('plan_date').value = x_date;
   }

  $('b_save').innerHTML = "<input type='image' src='"+static66dez+"save.gif' style='margin-right: 10px;width: 85px; height: 16px' value='Сохранить' onClick='this.disabled=true;my_plan_save("+id+",1);return false;'><input type='image' src='"+static66dez+"cancel.gif' style='width: 68px; height: 16px' value='Отмена' onClick='window_close(0); return false;'>";
  }
  else
  {
  $('button_1').style.display = "none";
  $('button_2').style.display = "";
  $('date_1').style.display = "none";
  $('type_2').style.display = "";

  if ($("rep_week").checked == true)  {$('sex_type_week').style.display = "";}
  if ($("rep_month").checked == true) {$('sex_type_month').style.display = "";}
  if ($("rep_year").checked == true)  {$('sex_type_year').style.display = "";}

  $('b_save').innerHTML = "<input type='image' src='"+static66dez+"save.gif' style='margin-right: 10px;width: 85px; height: 16px' value='Сохранить' onClick='this.disabled=true;my_plan_save("+id+",2);return false;'><input type='image' src='"+static66dez+"cancel.gif' style='width: 68px; height: 16px' value='Отмена' onClick='window_close(0); return false;'>";
  }
 }

function my_plan_ch_sex(ix)
 {
 if (ix == 1)
  {
  $('sex_type_week').style.display = "none";
  $('sex_type_month').style.display = "none";
  $('sex_type_year').style.display = "none";
  }

 if (ix == 2)
  {
  $('sex_type_week').style.display = "";
  $('sex_type_month').style.display = "none";
  $('sex_type_year').style.display = "none";
  }

 if (ix == 3)
  {
  $('sex_type_week').style.display = "none";
  $('sex_type_month').style.display = "";
  $('sex_type_year').style.display = "none";
  }

 if (ix == 4)
  {
  $('sex_type_week').style.display = "none";
  $('sex_type_month').style.display = "none";
  $('sex_type_year').style.display = "";
  }

 }
// ===========




// main all plans ===
var plan_all_cont = new Array();
function plan_all_show_plans()
 {
 	if (typeof plan_all_cont[0] == 'undefined' || plan_all_cont[0] == '') {
 act = 'get_plan';

 if ($("planall_date"))
  {
  input_date    = $("planall_date").value.split(" ");
  new_month_num = Math.floor(Math.floor(get_numeric_month(input_date[1]))+1);
  new_year      = Math.floor(input_date[2]);
  planall_date  = new_year+"-"+new_month_num+"-"+input_date[0];
  }
  else
  {
  planall_date = 0;
  }

 req.onreadystatechange = function()
  {
  if (req.readyState == 4)
   {
   if (req.responseJS)
    {
    $('plan_all_content').innerHTML = req.responseJS.content;
    plan_all_cont[0] = req.responseJS.content;
    }
   }
  }
 req.caching = false; //true
 req.open('POST', '/mod/my/ajax_all_plan.php', true);
 req.send({ act: act, planall_date: planall_date, usdie: usdie });
 	} else $('plan_all_content').innerHTML = plan_all_cont[0];
 }

function plan_all_show_project()
 {
 act = 'get_project';
 req.onreadystatechange = function()
  {
  if (req.readyState == 4)
   {
   if (req.responseJS)
    {
    $('plan_all_content').innerHTML = req.responseJS.content;
    plan_all_cont[1] = req.responseJS.content;
    }
   }
  }
 req.caching = false; //true
 req.open('POST', '/mod/my/ajax_all_plan.php', true);
 req.send({ act: act, usdie: usdie });
 }

function plan_all_show_task()
 {
 	if (typeof plan_all_cont[2] == 'undefined' || plan_all_cont[2] == '') {
 act = 'get_task';
 req.onreadystatechange = function()
  {
  if (req.readyState == 4)
   {
   if (req.responseJS)
    {
    $('plan_all_content').innerHTML = req.responseJS.content;
    plan_all_cont[2] = req.responseJS.content;
    }
   }
  }
 req.caching = false; //true
 req.open('POST', '/mod/my/ajax_all_plan.php', true);
 req.send({ act: act, usdie: usdie });
 	} else $('plan_all_content').innerHTML = plan_all_cont[2];
 }

function plan_all_button_ch(button)
 {
 if (button == 1)
  {
  $('planz_b_1').src = ''+static66dez+'plan_button_myplan_on.gif';
  $('planz_b_2').src = ''+static66dez+'plan_button_myproject_off.gif';
  $('planz_b_3').src = ''+static66dez+'plan_button_mytask_off.gif';
  plan_all_show_plans();
  }
 if (button == 2)
  {
  $('planz_b_1').src = ''+static66dez+'plan_button_myplan_off1.gif';
  $('planz_b_2').src = ''+static66dez+'plan_button_myproject_on1.gif';
  $('planz_b_3').src = ''+static66dez+'plan_button_mytask_off1.gif';
  plan_all_show_project();
  }
 if (button == 3)
  {
  $('planz_b_1').src = ''+static66dez+'plan_button_myplan_off2.gif';
  $('planz_b_2').src = ''+static66dez+'plan_button_myproject_off2.gif';
  $('planz_b_3').src = ''+static66dez+'plan_button_mytask_on2.gif';
  plan_all_show_task();
  }
 }
// ==================




// временно для новостей
function show_news_coments(id)
 {
 $("news_loading").innerHTML = '<img src="'+static66dez+'my/scale1.gif" width="15" height="5" border="0" alt="" />';
 req.onreadystatechange = function()
  {
  if (req.readyState == 4)
   {
   if (req.responseJS)
    {
	//$("news_coments").innerHTML  = "<b>Коментарии:</b><br>";
	$("news_show_close").innerHTML = '<a onclick="news_comments_close(); return false;" href="#" style="margin: 14px 10px 0px 0px; float: right; padding-right: 20px; background: transparent url('+static66dez+'news/down.gif) no-repeat scroll right 5px;">Свернуть</a>';
    $('news_cnt').innerHTML = req.responseJS.nrows;
    $('news_coments').innerHTML = req.responseJS.rez;
    $("news_loading").innerHTML = "";
    }
   }
  }
 req.caching = false; //true
 req.open('POST', '/mod/news/coment_ajax.php', true);
 req.send({ id: id });
 }

function show_news_coments_alt(id)
 {
 	if (!$("cmt")) {
 $("news_loading").innerHTML = '<img src="'+static66dez+'my/scale1.gif" width="15" height="5" border="0" alt="" />';
 req.onreadystatechange = function()
  {
  if (req.readyState == 4)
   {
   if (req.responseJS)
    {
	//$("news_coments").innerHTML  = "<b>Коментарии:</b><br>";
	$("news_show_close").innerHTML = '<a onclick="news_comments_close(); return false;" href="#" style="margin: 14px 10px 0px 0px; float: right; padding-right: 20px; background: transparent url('+static66dez+'news/down.gif) no-repeat scroll right 5px;">Свернуть</a>';
    $('news_cnt').innerHTML = req.responseJS.nrows;
    $('news_coments').innerHTML = req.responseJS.rez;
    $("news_loading").innerHTML = "";
    $("cmt").focus();
    }
   }
  }
 req.caching = false; //true
 req.open('POST', '/mod/news/coment_ajax.php', true);
 req.send({ id: id });
 	} else $("cmt").focus();
 }

 var p_n_c = false;
 function post_news_comment(id)
 {
	var cmt = $('cmt').value;
 	if ( cmt == "" ) return;
	if ( p_n_c == true ) return false;
	else p_n_c = true;
 	//$("news_loading").innerHTML = '<img src="'+static66dez+'my/scale1.gif" width="15" height="5" border="0" alt="" />';
 req.onreadystatechange = function()
  {
  if (req.readyState == 4)
   {
   if (req.responseJS)
    {
    //$('news_cnt').innerHTML = req.responseJS.nrows;
    if (req.responseJS.rez != "") $('news_comments').innerHTML = req.responseJS.rez;
    //$("news_loading").innerHTML = "";
    $('cmt').value = "";
    p_n_c = false;
    }
   }
  }
 req.caching = false; //true
 req.open('POST', '/mod/news/ajax_post_comment.php', true);
 req.send({ id: id, cmt: cmt, usdie: usdie });
 }

 function news_findenter(e,id)
	{
	if (e)
		{
		var ctrl = e.ctrlKey;
		var shift = e.shiftKey;
		var keynum = e.keyCode;
		if ( keynum == 13 && ( ctrl || shift ) )
			{
			post_news_comment(id);
			}
		}
	}


 function news_comments_close() {
	var id = $('ids').value;
	$('news_coments').innerHTML = "";
	$("news_show_close").innerHTML = '<a onclick="show_news_coments('+id+'); return false;" href="#" style="margin: 14px 10px 0px 0px; float: right; padding-right: 20px; background: transparent url('+static66dez+'news/up.gif) no-repeat scroll right 3px;">Развернуть</a>';
 }
// =====================



// avatar
function doLoad(value, save)
	{
 	if ( parseInt ( save ) == 0 ) save = 0;

 	if (value.value != '')
  		{
  		if ( save == 0 )
  			{
  			$('user_ava').src = ''+static66dez+'indicator.gif';
  			$('user_ava').width  = 16;
  			$('user_ava').height = 16;
  			}

		req.onreadystatechange = function()
	   		{
	   		if (req.readyState == 4)
	    		{
	    	    if (req.responseJS.error && req.responseJS.error != '')
		    		{
	    			$("error_avatar").innerHTML="<span>"+req.responseJS.error+"</span>";
	    			return;
	    			}

	    		if (req.responseJS.img_name != '')
	     			{
	     			if ( save == 1 )
	     				{
		 				$('user_avatar').src = static66avatars_img+'avatar/'+req.responseJS.img_name+'?'+Math.random();
	     				$('user_avatar').width  = req.responseJS.width;
	     				$('user_avatar').height = req.responseJS.height;

	     				var width = req.responseJS.width;
	     				var height = req.responseJS.height;

						padding_x = 0;
						padding_y = 0;

						if (width < 50)  {padding_x = Math.round((50 - width) / 2);}
						if (height < 50) {padding_y = Math.round((50 - height) / 2);}

						$('user_avatar').style.paddingLeft = padding_x+'px';
						$('user_avatar').style.paddingTop = padding_y+'px';
						$('user_avatar').style.paddingRight = padding_x+'px';
						$('user_avatar').style.paddingBottom = padding_y+'px';

	     				window_close(0);
	     				}
	     			else
	     				{
		 				$('user_ava').src = '/.null/avatar/'+req.responseJS.img_name;
	     				$('user_ava').width  = req.responseJS.width;
	     				$('user_ava').height = req.responseJS.height;
	     				}
		 			}
		 		else
		 			{
		 			window_close(0);
		 			}
	    		}
	   		}

	   	req.open(null, '/mod/profile/ava.php', true);
	 	req.send( { q: value, save: save } );
 		}
	}

function del_ava()
 {
 	var v = 1;
  req.onreadystatechange = function()
   {
   if (req.readyState == 4)
    {
	 $('user_ava').src = ''+static66dez+'noavatar.gif';
 	 $('user_ava').width  = 50;
     $('user_ava').height = 50;
	 $('user_avatar').src = ''+static66dez+'noavatar.gif';
 	 $('user_avatar').width  = 50;
     $('user_avatar').height = 50;
	 $('del_ava').style.visibility = 'hidden';
	 window_close(0);
    }
   }
 req.open(null, '/mod/profile/ajax_del_ava.php', true);
 req.send( { q: v } );
}
// ======



// m_menu -
function m_menu_line(pz,id)
 {
 if ($('x'+pz+'_'+id).style.backgroundColor == '')
  {
  $('x'+pz+'_'+id).style.backgroundColor = "#C4EB6C";
  }
  else
  {
  $('x'+pz+'_'+id).style.backgroundColor = "";
  }
 }

function m_menu_show(id)
 {
 	if (id == 6) $('iframe_block').style.display = 'block';
 $('mx'+id).style.display = "";
 }

function m_menu_hide(id)
 {
 	if (id == 6) $('iframe_block').style.display = 'none';
 $('mx'+id).style.display = "none";
 }
// ========



function GetCookieValueByName(name)
{
 var beg = document.cookie.indexOf(name+"=");
 if(beg==-1)
  return false;

 var end = document.cookie.indexOf(";", beg + name.length);
 if(end==-1)
  end = document.cookie.length;

return unescape(document.cookie.substring(beg + name.length + 1, end));
}

//функция присвоить cookie по имени name значение value
//аргументы:name, value, срок действия в миллисекундах
function setcookie(name,value){
  document.cookie=name+"="+value;
}

//функция возвращает значение для cookie по имени name
function getcookie(Name){
  var search=Name+"=";
  if(document.cookie.length>0){ //если cookie существует
    offset=document.cookie.indexOf(search)
    if(offset!=-1){ //если существует cookie по имени name
      offset+=search.length //начало нужного cookie
      end=document.cookie.indexOf(";",offset) //конец нужного cookie
      if(end==-1){end=document.cookie.length}
      return unescape(document.cookie.substring(offset, end))
    }
  }
}




function friends_add(id)
 {
 ui_friends_add(id);
 /*
 if (id)
  {
  $('add_text_'+id).innerHTML = "Добавляем...";

  req.onreadystatechange = function()
   {
   if (req.readyState == 4)
    {
    if (req.responseJS.error == '')
     {
	 $('add_text_'+id).innerHTML = "Добавлен в друзья";
	 }
	 else
	 {
	 $('add_text_'+id).innerHTML = req.responseJS.error;
	 }
    }
   }
  req.open(null, '/mod/profile/ajax_findfriends.php', true);
  req.send( { id: id } );
  }
 */
 }

function ui_friends_add_old(id)
	{
	if (id)
		{
		req.onreadystatechange = function()
			{
			if (req.readyState == 4)
				{
				if (req.responseJS.error == '')
					{
					$('user_info_fr').style.display = "none";
					if ($('userinfo_content')) ui_cache[id] = $('user_info').innerHTML;
					userinfo_close();
					alert_66("Добавлен в друзья");
					}
					else
					{
					alert_66(req.responseJS.error);
					}
				}
			}
		req.open(null, '/mod/profile/ajax_findfriends.php', true);
		req.send( { id: id } );
		}
	}

function ui_friends_add(id)
	{
	if (id)
		{
		req.onreadystatechange = function()
			{
			if (req.readyState == 4)
				{
				userinfo_close();
				window_create('alert_x',380,1);
				window_setupcontent('alert_x','Мои группы');

				newClick = 'input_rechange("создать группу...","groupNewName","click");'
				newBlur  = 'input_rechange("создать группу...","groupNewName","blur");'
				$("alert_x_mf").innerHTML = $("alert_x_mf").innerHTML + ""
					+"<div id='forchange'>"
						+"<table cellspacing='0' cellpadding='0' border='0' width='100%' style='border-collapse: collapse;'>"
							+"<tr style='height: 30px; width: 70px;'>"
								+"<td aling='center' width='1'><div style='margin: 10px 10px 0px 10px;'>"+req.responseJS.avatar+"</div></td>"
								+"<td style='font-size: 11px; color: #000000;'><div style='margin-left: 10px;'><b>"+req.responseJS.sex+" "+req.responseJS.username+"</b><div style='margin-top: 3px;' id='groupText'>Этот пользователь в моих группах:</div></div></td>"
							+"</tr>"
							+"<tr>"
								+"<td>&nbsp;</td>"
								+"<td style='font-size: 12px; padding: 5px 0px 10px 0px; color: #000000;'>"
									+"<div style='margin-left: 10px; padding-bottom: 5px;' id='hiddenFriends'><label><input type='checkbox' name='groupFriends' id='groupFriends' style='padding: 0px; margin: 0px;'>&nbsp;<b>Друзья</b></label></div>"
									+"<div style='margin-left: 10px; padding-bottom: 5px;'><label><input type='checkbox' name='groupRead' id='groupRead' style='padding: 0px; margin: 0px;'>&nbsp;Читать в ленте</label> <img src='"+static66dez+"helper_ls.gif' width='15' height='15' alt='Список пользователей, которых Вы читаете в ленте друзей' title='Список пользователей, которых Вы читаете в ленте друзей' border='0'></div>"
									+req.responseJS.userGroup
									+"<div style='margin-left: 10px; padding-bottom: 5px;'><input type='checkbox' name='groupNew' id='groupNew' style='padding: 0px; margin: 0px;'>&nbsp;<input type='text' name='groupNewName' id='groupNewName' value='создать группу...' onClick='"+newClick+"' onBlur='"+newBlur+"' style='color: #808080;'></div>"
									+"<div style='margin-left: 10px; padding-bottom: 5px; color: #FF0000;' id='hiddenBan'><label><input type='checkbox' name='groupBan' id='groupBan' style='padding: 0px; margin: 0px;'>&nbsp;Игнорировать</label></div>"
								+"</td>"
							+"</tr>"
							+"<tr style='height: 40px;'>"
								+"<td align='center' style='white-space: nowrap; border-top: 1px solid #D2D1CB;' colspan='2'>"
									+"<div style='margin-top: 15px;'>"
										+"<input type='button' value='Сохранить' style='width: 100px;' onClick='friends_save("+id+");'>&nbsp; &nbsp; &nbsp; &nbsp; "
										+"<input type='button' value='Отмена' style='width: 100px;' onClick=\"window_close(0);\">"
									+"</div>"
								+"</td>"
							+"</tr>"
						+"</table>"
					+"</div><br>";
				var noCheck = 1;
				if (req.responseJS.defGroup[0] == 1) { $("groupFriends").checked = true; noCheck = 0; }
				if (req.responseJS.defGroup[1] == 1) { $("groupRead").checked = true; noCheck = 0; }
				if (req.responseJS.defGroup[2] == 1) { $("groupBan").checked = true; noCheck = 0; }
				if ($("noCheck").value == 0)		 { noCheck = 0; }
				if (noCheck == 1)
					{
					$("groupText").innerHTML = "Добавить пользователя в группы:";
					}
				if (req.responseJS.userWhoGet == id)
					{
					$("hiddenFriends").style.display = "none";
					$("hiddenBan").style.display = "none";
					}
				}
			}
		req.open(null, '/mod/profile/ajax_new_friends.php', true);
		req.send( { part: "get" , user_id: id } );
		}
	}

function friends_save(id)
	{
	if (id)
		{
		defGroup = new Array();
		newGroupName = "";
		if ($("groupFriends").checked == true)	{ defGroup[0] = 1; } else { defGroup[0] = 0; }
		if ($("groupRead").checked == true) 	{ defGroup[1] = 1; } else { defGroup[1] = 0; }
		if ($("groupBan").checked == true)		{ defGroup[2] = 1; } else { defGroup[2] = 0; }
		if ($("groupNew").checked == true)
			{
			if ( ($("groupNewName").value != "") && ($("groupNewName").value != "создать группу...") )
				{
				newGroupName = $("groupNewName").value;
				}
			}

		userGroup = new Array();
		userGroupMax = $("allGroup").value;
		for(a = 1; a < userGroupMax; a++)
			{
			if ($("userGroup"+a).checked == true) { userGroup[a] = 1; } else { userGroup[a] = 0; }
			}

		req.onreadystatechange = function()
			{
			if (req.readyState == 4)
				{
				window_close(0);
				var href = window.location.href;
				if(href.indexOf("/"+req.responseJS.userUID+"/friends") != -1)
					{
					window.location = window.location;
					}
				}
			}
		req.open(null, '/mod/profile/ajax_new_friends.php', true);
		req.send( { part: "save" , user_id: id , defGroup: defGroup , newGroupName: newGroupName , userGroup: userGroup } );
		}
	}

//##################################################################################
//# Процедуры показа мини инфы о пользователе
//##################################################################################

var ui_cache = new Array();
var ui_t, ui_id, uni_id, uis_t;
var ui_load=false;

function userinfo(id, x, y, username, unique)
	{
	if (!$('user_info')) return;
	if (!ui_load) return;

	if (ui_id != id) userinfo_close();

	if (document.all) hideSelects('hidden');

	if (self.pageYOffset)
		{
		yScroll = self.pageYOffset;
		}
	else if (document.documentElement && document.documentElement.scrollTop)
		{
		// Explorer 6 Strict
		yScroll = document.documentElement.scrollTop;
		}
	else if (document.body)
		{
		// all other Explorers
		yScroll = document.body.scrollTop;
		}

	y += yScroll;

	var windowWidth, windowHeight;

	if (self.innerHeight)
		{
		// all except Explorer
		windowWidth = self.innerWidth;
		windowHeight = self.innerHeight;
		if (yScroll > windowHeight)	windowWidth -= 16;
		}
	else if (document.documentElement && document.documentElement.clientHeight)
		{
		// Explorer 6 Strict Mode
		windowWidth = document.documentElement.clientWidth;
		windowHeight = document.documentElement.clientHeight;
		}
	else if (document.body)
		{
		// other Explorers
		windowWidth = document.body.clientWidth;
		windowHeight = document.body.clientHeight;
		}

	windowHeight += yScroll;

	if (typeof ui_cache[id] == "undefined")// || ((typeof ui_cache[id] != "undefined") && (ui_cache[id]!="") && (ui_cache[id].indexOf('ID: '+id)>-1)))
		{
 		if (id > 0)
  			{
			info = '<table cellpadding="0" cellspacing="0" border="0" style="z-index: 2000;"><tr><td class="about_box_tlb">&nbsp;</td><td class="about_box_tb"></td><td class="about_box_trb">&nbsp;</td></tr>';
			info += '<tr><td class="about_box_lb" height="116"></td><td class="about_box_b"><div style="float: right; color: #9E9D9B; font-size: 10px;" id="rating"></div>';
			info += '<span style="font-size: 12px; line-height: 15px; font-weight: bold; color: #000000;">'+username+'</span> <span>(ID: '+id+')</span><br>';
			info += '<div id="userinfo_content">Загрузка <img src="'+static66dez+'my/scale1.gif" width="15" height="5" alt="" /></div>';
			info += '</td><td class="about_box_rb" height="116"></td></tr>';
			info +=	'<tr><td colspan="3" class="about_box_bbb"></td></tr><tr><td class="about_box_lb" height="80"></td><td class="about_box_b" height="80">';
			info += "<table><tr id='user_info_fr1' style='display: none'><td class='about_box_ico'><img src='"+static66dez+"my_ico_friends.gif' border='0' alt='' width='16' height='13' /></td><td><a href='http://www."+mainDomain+"/findfriends/' onclick='ui_friends_add(\""+id+"\"); return false;' style='font-size: 12px;'>Добавить в группу</a></td></tr>";

			info += "<table><tr><Td>";

			info += "<table>";
			info += "	<tr id='user_info_fr2' style='display: none'>";
			info += "		<td class='about_box_ico'><img src='"+static66dez+"my_ico_friends.gif' border='0' alt='' width='16' height='13' /></td>";
			info += "		<td><a href='http://www."+mainDomain+"/findfriends/' onclick='ui_friends_add(\""+id+"\"); return false;' style='font-size: 12px;'>Мои группы</a></td>";
			info += "	</tr>";
			info += '	<tr>';
			info += '		<td class="about_box_ico"><span id="userinfo_sex_pic"><img src="'+static66dez+'user-n.gif" border="0" alt="0" width="10" height="10" /></span></td>';
			info += '		<td><a id="user_profile_link" href="http://www.'+mainDomain+'/user/'+id+'/" style="font-size: 12px;">Профиль</a></td>';
			info += '	</tr>';
			info += "	<tr id='user_info_blog' style='display: none;'>";
			info += "		<td class='about_box_ico'><img src='"+static66dez+"ico_blog.gif' border='0' alt='' width='16' height='16' /></td>";
			info += "		<td><a id='user_blog_link' href='http://www."+mainDomain+"/user/"+id+"/blog/' style='font-size: 12px;'>Личный блог</a></td>";
			info += "	</tr>";
			info += "	<tr id='user_info_photo' style='display: none;'>";
			info += "		<td class='about_box_ico'><img src='"+static66dez+"ico_album.gif' border='0' alt='' width='11' height='11' /></td>";
			info += "		<td><a id='user_photo_link' href='http://www."+mainDomain+"/photo/user/"+id+"/' style='font-size: 12px;'>Фотоальбом</a></td>";
			info += "	</tr>";
			info += "	<tr>";
			info += "		<td class='about_box_ico'><img src='"+static66dez+"inmail/mail_.gif' border='0' alt='' width='14' height='10' /></td>";
			info += "		<td colspan='2'><a href='#' onclick='return create_inmail(\""+username+"\");'>Написать</a></td>";
			info += "	</tr>";
			info += "</table>";

			info += "</td><td>";

			info += "<table>";
			info += "	<tr>";
			info += "		<td class='about_box_ico'>&nbsp;</td>";
			info += "		<td>&nbsp;</td>";
			info += "	</tr>";
			info += '	<tr>';
			info += "		<td class='about_box_ico'>&nbsp;</td>";
			info += "		<td>&nbsp;</td>";
			info += '	</tr>';
			info += "	<tr>";
			info += "		<td class='about_box_ico'>&nbsp;</td>";
			info += "		<td>&nbsp;</td>";
			info += "	</tr>";
			info += "	<tr>";
			info += "		<td class='about_box_ico'>&nbsp;</td>";
			info += "		<td>&nbsp;</td>";
			info += "	</tr>";
			info += "	<tr id='gift_links' style='display: none'>";
			info += "		<td class='about_box_ico'><img id='gift_img' src='"+static66dez+"news/gift_profile_up.gif' border='0' alt='' width='15' height='15' /></td>";
			info += "		<td><a id='user_gift_link' href='javascript:void(0)' onclick='createGift("+id+"); return false;' style='font-size: 12px;'>Подарить подарок</a></td>";
			info += "	</tr>";
			info += "</table>";

			info += "</td></tr></table>"



			info += '</td><td class="about_box_rb" height="80"></td></tr>';
			info +=	'<tr><td class="about_box_blb"></td><td class="about_box_bb"></td><td class="about_box_brb">';
			info += '</td></tr></table>';

			$('user_info').innerHTML = info;

			//LoadPng();

			$('user_info').style.top = y + 0;
			$('user_info').style.left = x + 0;
			$('user_info').style.display = 'block';

			var block_width = $('user_info').offsetWidth;

			if (x + 25 + block_width > windowWidth)
				$('user_info').style.left = x - (x + 25 + block_width - windowWidth);

			var block_height = $('user_info').offsetHeight;

			if (y + 25 + block_height > windowHeight)
				$('user_info').style.top = y - (y + 10 + block_height - windowHeight);

  			req.onreadystatechange = function()
   				{
   				if (req.readyState == 4)
    				{
    				if (req.responseJS.error == '')
     					{
    					var add_info = "";

    					var id = req.responseJS.user_loaded_id;

    					if (ui_id!=id) return;

    					add_info = '<div style="color: #000000; width: 200px;">'+req.responseJS.comment+'</div><table cellpadding="0" cellspacing="0" border="0" style="margin-top: 10px"><tr><td>';
	 					img = "<img src='"+static66dez+"noavatar.gif' width='50' height='50' alt='' border='0'>";

	 					if (req.responseJS.ava != '') img = req.responseJS.ava;

						add_info += img+"</td><td style='padding-left: 10px; vertical-align: top; line-height: 16px'>";

						if (req.responseJS.name  != '') {add_info += "Имя:<br>";}
						if (req.responseJS.sex   != '') {add_info += "Пол:<br>";}
						if (req.responseJS.age   != '' && req.responseJS.age   != 0) {add_info += "Возраст:<br>";}
						if (req.responseJS.pager != '') {add_info += "Пейджер:<br>";}

	 					add_info += "</td><td style='padding: 0px 10px 0px 10px;vertical-align: top; line-height: 16px'>";

	 					if (req.responseJS.name  != '') {add_info += "<span style='white-space: nowrap;'>"+req.responseJS.name+"</span><br>";}
	 					if (req.responseJS.sex   != '') {add_info += req.responseJS.sex+"<br>";}
						if (req.responseJS.age   != '' && req.responseJS.age   != 0) {add_info += req.responseJS.age+"<br>";}
						if (req.responseJS.pager != '') {add_info += req.responseJS.pager+"<br>";}
						if (req.responseJS.add_to_friends == 0) { if ($('user_info_fr1')) {$('user_info_fr1').style.display = ""; }}
						if (req.responseJS.add_to_friends == 1) { if ($('user_info_fr2')) {$('user_info_fr2').style.display = ""; }}
						if (req.responseJS.user_login == 1) { if ($('user_info_inmail')) { $('user_info_inmail').style.display = ""; } }
					 	if (req.responseJS.blog == 1) { if ($("user_info_blog")) { $("user_info_blog").style.display = ""; } }
						if (req.responseJS.photo == 1) { if ($("user_info_photo")) { $("user_info_photo").style.display = ""; } }
						if (req.responseJS.rating) { if ($('rating')) { $('rating').innerHTML = 'карма: <span style="font-size: 11px; color: #020202;">'+req.responseJS.karma+'</span>'; } }

	 					if ($("user_profile_link")) { $("user_profile_link").href = 'http://www.'+mainDomain+'/user/'+id+'/'; }
	 					if ($("user_blog_link")) { $("user_blog_link").href = "http://www."+mainDomain+"/user/"+id+"/blog/"; }
	 					if ($("user_photo_link")) { $("user_photo_link").href = "http://www."+mainDomain+"/photo/user/"+id+"/"; }

	 					//if ($("user_profile_username")) { $("user_photo_link").val(req.responseJS.nick)}
	 					//if ($("user_profile_userid")) { $("user_photo_link").val(id)}

	 					if (req.responseJS.gift_active==1)
	 						{
	 						$("gift_links").style.display='';
	 						}
	 					else
	 						{
	 						$("gift_links").style.display='none';
	 						}

	 					if (req.responseJS.domen != "")
	 						{
							if ($("user_profile_link")) { $("user_profile_link").href = "http://"+req.responseJS.domen+"."+mainDomain+"/profile/"; }
							if ($("user_blog_link")) { $("user_blog_link").href = "http://"+req.responseJS.domen+"."+mainDomain+"/blog/"; }
							if ($("user_photo_link")) { $("user_photo_link").href = "http://"+req.responseJS.domen+"."+mainDomain+"/photo/"; }
							}

	 					add_info += '</td><td></td></tr></table>';

						if ($('userinfo_content'))
							{
							$('userinfo_content').innerHTML = add_info;
							$('userinfo_sex_pic').innerHTML = req.responseJS.sex_pic;
							//if (req.responseJS.is_me == 1) $('user_profile_link').href = "/my/user/";
							}

						if ($('userinfo_content')) ui_cache[id] = $('user_info').innerHTML;

						var block_width = $('user_info').offsetWidth;

						if (x + 20 + block_width > windowWidth)
							$('user_info').style.left = x - (x + 25 + block_width - windowWidth);

						var block_height = $('user_info').offsetHeight;

						if (y + 20 + block_height > windowHeight)
							$('user_info').style.top = y - (y + 10 + block_height - windowHeight);

						//$("testuserinfo").innerHTML = $('user_info').innerHTML;

						//LoadPng();

	 					}
    				}
   				}

  			req.open(null, '/mod/profile/ajax_friends.php', true);
  			req.send( { id: id } );
  			}
		}
	else
		{
		if (ui_id != id) $('user_info').innerHTML = ui_cache[id];
		if (uni_id != unique) $('user_info').style.top = y + 0;
		if (uni_id != unique) $('user_info').style.left = x + 0;
		if (ui_id != id) $('user_info').style.display = 'block';

		var block_width = $('user_info').offsetWidth;

		if (x + 20 + block_width > windowWidth)
			$('user_info').style.left = x - (x + 25 + block_width - windowWidth);

		var block_height = $('user_info').offsetHeight;

		if (y + 20 + block_height > windowHeight)
			$('user_info').style.top = y - (y + 10 + block_height - windowHeight);
		}

	ui_id = id;
	uni_id = unique;
 	}




function userinfo_clear(id)
 	{
 	if (ui_id == id) clearTimeout(ui_t);
 	}

// Показать блок инфы юзера
function userinfo_show(id,event,username,unique)
 	{
 	x = 0;
	y = 0;

	if (!event) {event = window.event;}

	x = event.clientX;
	y = event.clientY;

	ui_load=true;

	ui_id = "";

	uis_t = setTimeout("userinfo("+id+","+x+","+y+",'"+username+"',"+unique+")", 300);
 	}

// Процедура закрытия всплывающего блока инфы юзера
function userinfo_hide()
 	{
 	ui_load=false;
 	clearTimeout(uis_t);
 	ui_t = setTimeout("userinfo_close()", 300);
 	}

// Закрыть блок инфы юзера
function userinfo_close()
	{
  	ui_id = "";
  	if ($('user_info'))
	  	{
	  	$('user_info').style.display = 'none';
	  	$('user_info').innerHTML = "";
	  	}

  	if (document.all) hideSelects('visible');
  	}

//##################################################################################

function getPageSize() {
	var xScroll, yScroll;
	if (window.innerHeight && window.scrollMaxY) {
		xScroll = document.body.scrollWidth;
		yScroll = window.innerHeight + window.scrollMaxY;
	} else if (document.body.scrollHeight > document.body.offsetHeight){ // all but Explorer Mac
		xScroll = document.body.scrollWidth;
		yScroll = document.body.scrollHeight;
	} else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
		xScroll = document.body.offsetWidth;
		yScroll = document.body.offsetHeight;
	}
	var windowWidth, windowHeight;
	if (self.innerHeight) {	// all except Explorer
		windowWidth = self.innerWidth;
		windowHeight = self.innerHeight;
		if (yScroll > windowHeight)	windowWidth -= 16;
	} else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
		windowWidth = document.documentElement.clientWidth;
		windowHeight = document.documentElement.clientHeight;
	} else if (document.body) { // other Explorers
		windowWidth = document.body.clientWidth;
		windowHeight = document.body.clientHeight;
	}
	// for small pages with total height less then height of the viewport
	if(yScroll < windowHeight) pageHeight = windowHeight;
	else pageHeight = yScroll;
	// for small pages with total width less then width of the viewport
	if(xScroll < windowWidth) pageWidth = windowWidth;
	else pageWidth = xScroll;
	arrayPageSize = new Array(pageWidth,pageHeight,windowWidth,windowHeight, xScroll, yScroll)
	return arrayPageSize;
}

/*
 function club_add(id,ps)
 {
 if (id)
  {
  $('add_text_'+id+'_'+ps).innerHTML = "Вступаем...";

  req.onreadystatechange = function()
   {
   if (req.readyState == 4)
    {
    if (req.responseJS.error == '')
     {
   	 if ($('add_text_'+id+'_1'))
	  {
	  if (req.responseJS.ok == 1)
	   {
	   $('add_text_'+id+'_1').innerHTML = "Вы вступили в клуб";
	   $('add_members_'+id+'_1').innerHTML = parseInt($('add_members_'+id+'_1').innerHTML) + 1;
	   }
	  if (req.responseJS.ok == 2) {$('add_text_'+id+'_1').innerHTML = "Вы подали заявку на вступление в клуб";}
	  }
   	 if ($('add_text_'+id+'_2'))
	  {
	  if (req.responseJS.ok == 1)
	   {
	   $('add_text_'+id+'_2').innerHTML = "Вы вступили в клуб";
       $('add_members_'+id+'_2').innerHTML = parseInt($('add_members_'+id+'_2').innerHTML) + 1;
	   }
	  if (req.responseJS.ok == 2) {$('add_text_'+id+'_2').innerHTML = "Вы подали заявку на вступление в клуб";}
	  }
	 }
	 else
	 {
	 $('add_text_'+id+'_'+ps).innerHTML = req.responseJS.error;
	 }
    }
   }
  req.open(null, '/mod/community/ajax_addmember_club.php', true);
  req.send( { id: id } );
  }
 }
*/

function club_logout(id)
	{
	$("for_loguot_"+id).innerHTML = "Отказываемся...";
	req.onreadystatechange = function()
		{
		if (req.readyState == 4)
			{
			$("for_loguot_"+id).innerHTML = "Вы отказались от вступления в клуб";
			}
		}
	req.open(null, '/mod/community/ajax_logoutmember_club.php', true);
	req.send( { id: id } );
	}

// clublogo
function doLoad2(value)
 {
 if (value.value != '')
  {
  $('club_img').innerHTML = "<img src='"+static66dez+"indicator.gif' width='16' height='16' alt='' border='0'>";

  req.onreadystatechange = function()
   {
   if (req.readyState == 4)
    {
    if (req.responseJS.img_name != '')
     {
	 $('club_img').innerHTML = "<img src='/.null/logo/"+req.responseJS.img_name+"' width='71' alt='' border='0' style='border: 1px solid #D2D2CB;'>";
	 }
    }
   }
 req.open(null, '/mod/community/logo.php', true);
 req.send( { q: value } );
 }
}
// ======



function ban_text_add(num)
 {
 $('ban_text_'+num).innerHTML = "отстранить на &nbsp;"
 														+"<select name='ban_"+num+"'>"
															+"<option value='0'>...</option>"
															+"<option value='1'>1 день</option>"
															+"<option value='2'>2 деня</option>"
															+"<option value='3'>3 деня</option>"
															+"<option value='7'>Неделю</option>"
															+"<option value='14'>2 недели</option>"
															+"<option value='30'>Месяц</option>"
														+"</select>";

 }

function unban_text_add(num)
 {
 $('ban_text_'+num).innerHTML = "будет вернут в клуб после сохранения<input type='hidden' name='unban_"+num+"' value='1'>";
 }


function user_text_add(num,text)
 {
 $('user_text_'+num).innerHTML = "<input type='text' name='user_text_"+num+"' style='font-size:10px;' value='"+text+"'>";
 }










function educ_add(id,ps)
 {
 $('add_text_'+id+'_'+ps).innerHTML = "Вы учились с "
 														+"<select id='educ_start_month_"+id+"'>"
															+"<option value='1'>января</option>"
															+"<option value='2'>февраля</option>"
															+"<option value='3'>марта</option>"
															+"<option value='4'>апреля</option>"
															+"<option value='5'>мая</option>"
															+"<option value='6'>июня</option>"
															+"<option value='7'>июля</option>"
															+"<option value='8'>августа</option>"
															+"<option value='9'>сентября</option>"
															+"<option value='10'>октября</option>"
															+"<option value='11'>ноября</option>"
															+"<option value='12'>декабря</option>"
														+"</select>"
 													+"<input type='text' name='' maxlength='4' style='font-size: 10px; width: 40px;' id='educ_start_year_"+id+"'> года, по "
 														+"<select id='educ_end_month_"+id+"'>"
															+"<option value='1'>январь</option>"
															+"<option value='2'>февраль</option>"
															+"<option value='3'>март</option>"
															+"<option value='4'>апрель</option>"
															+"<option value='5'>май</option>"
															+"<option value='6'>июнь</option>"
															+"<option value='7'>июль</option>"
															+"<option value='8'>август</option>"
															+"<option value='9'>сентябрь</option>"
															+"<option value='10'>октябрь</option>"
															+"<option value='11'>ноябрь</option>"
															+"<option value='12'>декабрь</option>"
														+"</select>"
 													+"<input type='text' name='' maxlength='4' style='font-size: 10px; width: 40px;' id='educ_end_year_"+id+"'> года &nbsp; "
													+"<img src='"+static66dez+"my_bt_add.gif' width='70' height='16' border='0' alt='' style='cursor: pointer;' onClick='educ_submit("+id+","+ps+");'><span id='sub_text_"+id+"_"+ps+"' style='color: #FF0000;'></span>";
 }


function educ_submit(id,ps)
 {
 if (id)
  {
  err = 0;
  s_month = $('educ_start_month_'+id).value;
  s_year  = $('educ_start_year_'+id).value;

  e_month = $('educ_end_month_'+id).value;
  e_year  = $('educ_end_year_'+id).value;

  if (s_year == '')							{$('sub_text_'+id+'_'+ps).innerHTML = " - Введите год начала учёбы"; err = 1;}
  if ((s_year.length != 4) && (err == 0))	{$('sub_text_'+id+'_'+ps).innerHTML = " - Проверьте год начала учёбы, пример: 1991"; err = 1;}
  if ((e_year == '') && (err == 0))			{$('sub_text_'+id+'_'+ps).innerHTML = " - Введите год окончания учёбы, или предпологаемый год окончания"; err = 1;}
  if ((e_year.length != 4) && (err == 0))	{$('sub_text_'+id+'_'+ps).innerHTML = " - Проверьте год окончания учёбы, пример: 1998"; err = 1;}

  if (err == 0)
   {
   $('sub_text_'+id+'_'+ps).style.color = "";
   $('sub_text_'+id+'_'+ps).innerHTML = " - Добавляем!";

   req.onreadystatechange = function()
    {
    if (req.readyState == 4)
     {
     if (req.responseJS.error == '')
      {
	  if (req.responseJS.ok == 1)
	   {
	   if ($('add_text_'+id+'_1'))
	    {
	    $('add_text_'+id+'_1').innerHTML = "Вы добавили себя в учебное заведение";
	    $('add_members_'+id+'_1').innerHTML = parseInt($('add_members_'+id+'_1').innerHTML) + 1;
		}
	   if ($('add_text_'+id+'_2'))
	    {
	    $('add_text_'+id+'_2').innerHTML = "Вы добавили себя в учебное заведение";
	    $('add_members_'+id+'_2').innerHTML = parseInt($('add_members_'+id+'_2').innerHTML) + 1;
		}
	   }
	  }
	  else
	  {
	  $('sub_text_'+id+'_'+ps).style.color = "#FF0000";
	  $('sub_text_'+id+'_'+ps).innerHTML = req.responseJS.error;
	  }
     }
    }
   req.open(null, '/mod/community/ajax_addmember_educ.php', true);
   req.send( { id: id , ds_m: s_month , ds_y: s_year , de_m: e_month , de_y: e_year, usdie: usdie} );
   }
  }
 }





 function comp_add(id,ps)
 {
 $('add_text_'+id+'_'+ps).innerHTML = "Вы работали с "
 														+"<select id='comp_start_month_"+id+"'>"
															+"<option value='1'>января</option>"
															+"<option value='2'>февраля</option>"
															+"<option value='3'>марта</option>"
															+"<option value='4'>апреля</option>"
															+"<option value='5'>мая</option>"
															+"<option value='6'>июня</option>"
															+"<option value='7'>июля</option>"
															+"<option value='8'>августа</option>"
															+"<option value='9'>сентября</option>"
															+"<option value='10'>октября</option>"
															+"<option value='11'>ноября</option>"
															+"<option value='12'>декабря</option>"
														+"</select>"
 													+"<input type='text' name='' maxlength='4' style='font-size: 10px; width: 40px;' id='comp_start_year_"+id+"'> года, по "
 														+"<select id='comp_end_month_"+id+"'>"
															+"<option value='1'>январь</option>"
															+"<option value='2'>февраль</option>"
															+"<option value='3'>март</option>"
															+"<option value='4'>апрель</option>"
															+"<option value='5'>май</option>"
															+"<option value='6'>июнь</option>"
															+"<option value='7'>июль</option>"
															+"<option value='8'>август</option>"
															+"<option value='9'>сентябрь</option>"
															+"<option value='10'>октябрь</option>"
															+"<option value='11'>ноябрь</option>"
															+"<option value='12'>декабрь</option>"
														+"</select>"
 													+"<input type='text' name='' maxlength='4' style='font-size: 10px; width: 40px;' id='comp_end_year_"+id+"'> года &nbsp; "
													+"<img src='"+static66dez+"my_bt_add.gif' width='70' height='16' border='0' alt='' style='cursor: pointer;' onClick='comp_submit("+id+","+ps+");'><span id='sub_text_"+id+"_"+ps+"' style='color: #FF0000;'></span>";
 }


function comp_submit(id,ps)
 {
 if (id)
  {
  err = 0;
  s_month = $('comp_start_month_'+id).value;
  s_year  = $('comp_start_year_'+id).value;

  e_month = $('comp_end_month_'+id).value;
  e_year  = $('comp_end_year_'+id).value;

  if (s_year == '')							{$('sub_text_'+id+'_'+ps).innerHTML = " - Введите год начала работы"; err = 1;}
  if ((s_year.length != 4) && (err == 0))	{$('sub_text_'+id+'_'+ps).innerHTML = " - Проверьте год начала работы, пример: 1991"; err = 1;}

  if (err == 0)
   {
   $('sub_text_'+id+'_'+ps).style.color = "";
   $('sub_text_'+id+'_'+ps).innerHTML = " - Добавляем!";

   req.onreadystatechange = function()
    {
    if (req.readyState == 4)
     {
     if (req.responseJS.error == '')
      {
	  if (req.responseJS.ok == 1)
	   {
	   if ($('add_text_'+id+'_1'))
	    {
	    $('add_text_'+id+'_1').innerHTML = "Вы добавили себя в компанию";
	    $('add_members_'+id+'_1').innerHTML = parseInt($('add_members_'+id+'_1').innerHTML) + 1;
		}
	   if ($('add_text_'+id+'_2'))
	    {
	    $('add_text_'+id+'_2').innerHTML = "Вы добавили себя в компанию";
	    $('add_members_'+id+'_2').innerHTML = parseInt($('add_members_'+id+'_2').innerHTML) + 1;
		}
	   }
	  }
	  else
	  {
	  $('sub_text_'+id+'_'+ps).style.color = "#FF0000";
	  $('sub_text_'+id+'_'+ps).innerHTML = req.responseJS.error;
	  }
     }
    }
   req.open(null, '/mod/community/ajax_addmember_comp.php', true);
   req.send( { id: id , ds_m: s_month , ds_y: s_year , de_m: e_month , de_y: e_year, usdie:usdie} );
   }
  }
 }


 function email_verify() {
 	var mail = $('email');
 	if ($('use_email').checked) {
 		if (is_email(mail.value)) {
 			$('email_info').innerHTML = "";
 			$('email').disabled = true;
 			$('email_add').innerHTML = '- Нужно подтвердить адрес! <a href="/" onClick="email_checksend(); return false;">Выслать</a> код по Email?';
			$('email_check_it').className = "check_it_bg";
 		} else {
 			$('email_info').innerHTML = '- Проверьте адрес';
 		}
 	} else {
 		$('email_info').innerHTML = "";
 		$('email_add').innerHTML = "";
		$('email_check_it').className = "check_it_nobg";
		$('email').disabled = false;
 	}
 }

 function email_checksend() {
 	$('use_email').disabled = true;
 	$('email').disabled = true;
 	var email = $('email').value;
	req.onreadystatechange = function() {
		if (req.readyState == 4) {
			if (req.responseJS.error == '') {
				$('email_add').innerHTML = '- Введите полученный код: <input maxlength="4" style="width: 35px;" id="code_email"> <a href="/" onClick="code_verify(); return false;"><img style="margin-right: 3px; position: relative; top: 2px" src="'+static66dez+'profile/ok.gif" border="0" alt="" width="12" height="12" />OK</a> или <a href="/" onClick="code_cancel(); return false;"><img style="margin-right: 3px; position: relative; top: 2px" src="'+static66dez+'profile/cancel.gif" border="0" alt="" width="12" height="12" />отмените</a> попытку';
			} else {
				$('email_add').innerHTML = "";
				$('email_info').innerHTML = req.responseJS.error;
			}
		}
	}
	req.open(null, '/mod/profile/ajax_email.php', true);
	req.send( { step: 1, email: email } );
 }

 function code_cancel() {
 	var email = $('email').value;
	req.onreadystatechange = function() {
		if (req.readyState == 4) {
			//$('email_info').innerHTML = "<span style='color: #FF0000;'>- Код отменён, адрес не подтверждён</span>";
			$('email_add').innerHTML = "";
			$('email').disabled = false;
			$('use_email').disabled = false;
			$('use_email').checked = false;
			$('email_check_it').className = "check_it_nobg";
		}
	}
	req.open(null, '/mod/profile/ajax_email.php', true);
	req.send( { step: 10, email: email } );
 }

 function code_verify() {
	code = $('code_email').value;
	if (code.length == 4) {
 		//$('email_').disabled = true;
 		var email = $('email').value;
		req.onreadystatechange = function() {
			if (req.readyState == 4) {
				if (req.responseJS.error == '') {
					//$('use_email').disabled = true;
					$('email_info').innerHTML = "<a href='/' onClick='email_cancel(); return false;'>Отменить</a>";
					$('email_add').innerHTML = '- Адрес подтверждён!';
				} else {
					$('email_info').innerHTML = req.responseJS.error;
				}
			}
		}
		req.open(null, '/mod/profile/ajax_email.php', true);
		req.send( { step: 2, email: email, code: code } );
	} else {
	$('email_info').innerHTML = '- Проверьте код';
	}
 }

function email_cancel() {
	step = 20;
	var email = $('email').value;
	req.onreadystatechange = function() {
		if (req.readyState == 4) {
			$('email').disabled = false;
			$('use_email').disabled = false;
			$('use_email').checked = false;
			$('email_info').innerHTML = "- Телефон больше не используеться для уведомлений";
			$('email_add').innerHTML = "";
		}
	}
	req.open(null, '/mod/profile/ajax_email.php', true);
	req.send( { step: step , email: email } );
}

 function email_off()
 {
  try { $('use_email').disabled = true; } catch(e) {}
 }

 function telefon_verify(part,step)
	{
	if (step == 1)
		{
		if ($('use_mobile').checked)
			{
			$('phone_info').innerHTML = '';
			telefon = $('phone').value;
			if (telefon.length == 12)
				{
				$('phone_add').innerHTML = '- Нужно подтвердить телефон! <a href="#" onClick="telefon_verify('+part+',2); return false;">Выслать</a> код по СМС?';
				$('phone').disabled = true;
				}
				else
				{
				$('phone_add').innerHTML = '- Проверьте телефон';
				}
			}
			else
			{
			$('phone_add').innerHTML = '';
			$('phone').disabled = false;
			telefon_cancel(1);
			}
		}

	if (step == 2)
		{
		$('use_mobile').disabled = true;

		telefon = $('phone').value;
		req.onreadystatechange = function()
			{
			if (req.readyState == 4)
				{
				if (req.responseJS.error == '')
					{
					$('phone_add').innerHTML = '- Введите полученный код: <input maxlength="4" style="width: 40px;" id="code_'+part+'"> <a href="/" onClick="telefon_verify('+part+',3); return false;"><img style="margin-right: 3px; position: relative; top: 2px" src="'+static66dez+'profile/ok.gif" border="0" alt="" width="12" height="12" />OK</a> или <a href="/" onClick="telefon_verify('+part+',10); return false;"><img style="margin-right: 3px; position: relative; top: 2px" src="'+static66dez+'profile/cancel.gif" border="0" alt="" width="12" height="12" />отмените</a> попытку&nbsp;'
					}
					else
					{
					$('phone_add').innerHTML = req.responseJS.error;
					}
				}
			}
		req.open(null, '/mod/profile/ajax_telefon.php', true);
		req.send( { step: step , telefon: telefon } );
		}

	if (step == 3)
		{
		code = $('code_'+part).value;
		if (code.length == 4)
			{
			telefon = $('phone').value;
			//alert(telefon);
			req.onreadystatechange = function()
				{
				if (req.readyState == 4)
					{
					if (req.responseJS.error == '')
						{
						$('phone').disabled = true;
						$('phone_add').innerHTML = '- Телефон подтверждён!';
						$('use_mobile').disabled = false;
						$('use_mobile').checked = true;
						}
						else
						{
						$('phone_info').innerHTML = req.responseJS.error;
						}
					}
				}
			req.open(null, '/mod/profile/ajax_telefon.php', true);
			req.send( { step: step , telefon: telefon , code: code } );
			}
			else
			{
			$('phone_info').innerHTML = '- Проверьте код';
			}
		}

	if (step == 10)
		{
		telefon = $('phone').value;
		req.onreadystatechange = function()
			{
			if (req.readyState == 4)
				{
				$('phone_add').innerHTML = "<span style='color: #FF0000;'>- Код отменён, телефон не подтверждён</span>";
				$('phone').disabled = false;
				$('use_mobile').disabled = false;
				$('use_mobile').checked = false;
				}
			}
		req.open(null, '/mod/profile/ajax_telefon.php', true);
		req.send( { step: step , telefon: telefon } );
		}
	}

function telefon_off()
 {
 try { $('use_mobile').disabled = true; } catch(e) {}
 }


function telefon_cancel(part)
	{
	step = 20;
	telefon = part;
	req.onreadystatechange = function()
		{
		if (req.readyState == 4)
			{
			$('use_mobile').disabled = false;
			$('use_mobile').checked = false;
			$('phone').disabled = false;
			$('phone_add').innerHTML = "- Телефон больше не используеться для уведомлений";
			}
		}
	req.open(null, '/mod/profile/ajax_telefon.php', true);
	req.send( { step: step , telefon: telefon } );
	}



 function cap_refresh()
  {
  $('cap').src = '/show/cap.php?'+Math.random();
  }





 function inprofile_educ_add()
  {
  part = 'educ';
  name_educ = $('pro_educ').value;

  err = 0;

  s_month = $('educ_start_month').value;
  s_year  = $('educ_start_year').value;

  e_month = $('educ_end_month').value;
  e_year  = $('educ_end_year').value;

  if (s_year == '')							{$('educ_text_info').innerHTML = "- Введите год начала учёбы"; err = 1;}
  if ((s_year.length != 4) && (err == 0))	{$('educ_text_info').innerHTML = "- Проверьте год начала учёбы, пример: 1991"; err = 1;}
  if ((e_year == '') && (err == 0))			{$('educ_text_info').innerHTML = "- Введите год окончания учёбы, или предпологаемый год окончания"; err = 1;}
  if ((e_year.length != 4) && (err == 0))	{$('educ_text_info').innerHTML = "- Проверьте год окончания учёбы, пример: 1998"; err = 1;}
  if (name_educ == '')  					{$('educ_text_info').innerHTML = "- Введите название учебного заведения"; err = 1;}

  if (err == 0)
   {
   $('educ_text_info').style.color = "";
   $('educ_text_info').innerHTML = " - Добавляем!";

   req.onreadystatechange = function()
    {
    if (req.readyState == 4)
     {
     if (req.responseJS.error == '')
      {
	  if (req.responseJS.ok == 1) {$('educ_text_info').innerHTML = "- Вы добавили себя в учебное заведение";}
	  if (($('null_add_educ').innerHTML == "") || ($('null_add_educ').innerHTML == "У вас не указаны учебные заведения."))
	   {
	   $('null_add_educ').innerHTML = req.responseJS.add;
	   }
	   else
	   {
	   $('null_add_educ').innerHTML = $('null_add_educ').innerHTML + req.responseJS.add;
	   }
	  }
	  else
	  {
	  $('educ_text_info').style.color = "#FF0000";
	  $('educ_text_info').innerHTML = req.responseJS.error;
	  }
     }
    }
   req.open(null, '/mod/profile/ajax_comunity.php', true);
   req.send( { part: part , name: name_educ , ds_m: s_month , ds_y: s_year , de_m: e_month , de_y: e_year, usdie: usdie } );
   }
  }

 function inprofile_educ_del(id)
  {
  part = 'educ_del';


  req.onreadystatechange = function()
   {
   if (req.readyState == 4)
    {
    if (req.responseJS.error == '')
     {
     $('null_del_educ_'+id).style.display = "none";
     }
	 else
	 {
	 //alert(req.responseJS.error);
	 }
    }
   }
  req.open(null, '/mod/profile/ajax_comunity.php', true);
  req.send( { part: part, id: id , usdie: usdie} );
  }


 function inprofile_educ_edit(id)
  {
  part = 'educ_edit_get';

  req.onreadystatechange = function()
   {
   if (req.readyState == 4)
    {
    if (req.responseJS.error == '')
     {
	 $('null_edit_educ').innerHTML = req.responseJS.add;
	 var e = $('educ_cont');
	 for (var i=0; i<e.childNodes.length;i++) {
	 	var en = e.childNodes.item(i).id;
	 	if (typeof en != "undefined") {
			if(en.indexOf('null_del_educ_') == 0) {
				al = e.childNodes.item(i);
				for (var j=0; j<al.childNodes.length;j++) {
					var an = al.childNodes.item(j).id;
					if (typeof an != "undefined") {
						if(an.indexOf('null_editi_educ_') == 0) {
							$(an).innerHTML = '';
						}
					}
				}
			}
	 	}
	 }
	 $('null_editi_educ_'+id).innerHTML = '<img src="'+static66dez+'profile/arr.gif" style="position: relative; top: 4px" border="0" alt="->" width="11" height="7" />';
	 $('act_edit_educ').innerHTML = "Редактирование";
     }
	 else
	 {
	 alert_66(req.responseJS.error);
	 }
    }
   }
  req.open(null, '/mod/profile/ajax_comunity.php', true);
  req.send( { part: part, id: id , usdie: usdie} );
  }

 function inprofile_educ_edit_save(id)
  {
  part = 'educ_edit_save';
  err = 0;

  s_month = $('educ_start_month').value;
  s_year  = $('educ_start_year').value;

  e_month = $('educ_end_month').value;
  e_year  = $('educ_end_year').value;

  if (s_year == '')							{$('educ_text_info').innerHTML = "- Введите год начала учёбы"; err = 1;}
  if ((s_year.length != 4) && (err == 0))	{$('educ_text_info').innerHTML = "- Проверьте год начала учёбы, пример: 1991"; err = 1;}
  if ((e_year == '') && (err == 0))			{$('educ_text_info').innerHTML = "- Введите год окончания учёбы, или предпологаемый год окончания"; err = 1;}
  if ((e_year.length != 4) && (err == 0))	{$('educ_text_info').innerHTML = "- Проверьте год окончания учёбы, пример: 1998"; err = 1;}

  if (err == 0)
   {
   $('educ_text_info').style.color = "";
   $('educ_text_info').innerHTML = " - Изменяем!";

   req.onreadystatechange = function()
    {
    if (req.readyState == 4)
     {
     if (req.responseJS.error == '')
      {
	  $('null_del_educ_'+id).innerHTML = req.responseJS.add;
	  inprofile_educ_return();
	  }
	  else
	  {
	  $('educ_text_info').style.color = "#FF0000";
	  $('educ_text_info').innerHTML = req.responseJS.error;
	  }
     }
    }
   req.open(null, '/mod/profile/ajax_comunity.php', true);
   req.send( { part: part , id: id , ds_m: s_month , ds_y: s_year , de_m: e_month , de_y: e_year, usdie: usdie } );
   }
  }


 function inprofile_educ_return(id)
  {
  part = 'educ_get_default';

   req.onreadystatechange = function()
    {
    if (req.readyState == 4)
     {
     if (req.responseJS.error == '')
      {
  	  $('null_edit_educ').innerHTML = req.responseJS.add;
  	  $('null_editi_educ_'+id).innerHTML = "";
   	  $('act_edit_educ').innerHTML = "Добавить";
  	  }
     }
    }
   req.open(null, '/mod/profile/ajax_comunity.php', true);
   req.send( { part: part } );
  }





 function inprofile_comp_add()
  {
  part = 'comp';
  name_comp = $('pro_comp').value;

  err = 0;

  s_month = $('comp_start_month').value;
  s_year  = $('comp_start_year').value;

  e_month = $('comp_end_month').value;
  e_year  = $('comp_end_year').value;

  if (s_year == '')							{$('comp_text_info').innerHTML = "- Введите год начала работы"; err = 1;}
  if ((s_year.length != 4) && (err == 0))	{$('comp_text_info').innerHTML = "- Проверьте год начала работы, пример: 1991"; err = 1;}
  if (name_comp == '')  					{$('comp_text_info').innerHTML = "- Введите название компании"; err = 1;}

  if (err == 0)
   {
   $('comp_text_info').style.color = "";
   $('comp_text_info').innerHTML = " - Добавляем!";

   req.onreadystatechange = function()
    {
    if (req.readyState == 4)
     {
     if (req.responseJS.error == '')
      {
	  if (req.responseJS.ok == 1) {$('comp_text_info').innerHTML = "- Вы добавили себя в компанию";}
	  if (($('null_add_comp').innerHTML == "") || ($('null_add_comp').innerHTML == "У вас не указаны компании."))
	   {
	   $('null_add_comp').innerHTML = req.responseJS.add;
	   }
	   else
	   {
	   $('null_add_comp').innerHTML = $('null_add_comp').innerHTML + req.responseJS.add;
	   }
	  }
	  else
	  {
	  $('comp_text_info').style.color = "#FF0000";
	  $('comp_text_info').innerHTML = req.responseJS.error;
	  }
     }
    }
   req.open(null, '/mod/profile/ajax_comunity.php', true);
   req.send( { part: part , name: name_comp , ds_m: s_month , ds_y: s_year , de_m: e_month , de_y: e_year } );
   }
  }

 function inprofile_comp_del(id)
  {
  part = 'comp_del';


  req.onreadystatechange = function()
   {
   if (req.readyState == 4)
    {
    if (req.responseJS.error == '')
     {
     $('null_del_comp_'+id).style.display = "none";
     }
	 else
	 {
	 //alert(req.responseJS.error);
	 }
    }
   }
  req.open(null, '/mod/profile/ajax_comunity.php', true);
  req.send( { part: part, id: id } );
  }


 function inprofile_comp_edit(id)
  {
  part = 'comp_edit_get';

  req.onreadystatechange = function()
   {
   if (req.readyState == 4)
    {
    if (req.responseJS.error == '')
     {
	 $('null_edit_comp').innerHTML = req.responseJS.add;
	 var e = $('comp_cont');
	 for (var i=0; i<e.childNodes.length;i++) {
	 	var en = e.childNodes.item(i).id;
	 	if (typeof en != "undefined") {
			if(en.indexOf('null_del_comp_') == 0) {
				al = e.childNodes.item(i);
				for (var j=0; j<al.childNodes.length;j++) {
					var an = al.childNodes.item(j).id;
					if (typeof an != "undefined") {
						if(an.indexOf('null_editi_comp_') == 0) {
							$(an).innerHTML = '';
						}
					}
				}
			}
	 	}
	 }
	 $('null_editi_comp_'+id).innerHTML = '<img src="'+static66dez+'profile/arr.gif" style="position: relative; top: 4px" border="0" alt="->" width="11" height="7" />';
	 $('act_edit_comp').innerHTML = "Редактирование";
     }
	 else
	 {
	 //alert(req.responseJS.error);
	 }
    }
   }
  req.open(null, '/mod/profile/ajax_comunity.php', true);
  req.send( { part: part, id: id } );
  }

 function inprofile_comp_edit_save(id)
  {
  part = 'comp_edit_save';
  err = 0;

  s_month = $('comp_start_month').value;
  s_year  = $('comp_start_year').value;

  e_month = $('comp_end_month').value;
  e_year  = $('comp_end_year').value;

  if (s_year == '')							{$('comp_text_info').innerHTML = "- Введите год начала работы"; err = 1;}
  if ((s_year.length != 4) && (err == 0))	{$('comp_text_info').innerHTML = "- Проверьте год начала работы, пример: 1991"; err = 1;}

  if (err == 0)
   {
   $('comp_text_info').style.color = "";
   $('comp_text_info').innerHTML = " - Изменяем!";

   req.onreadystatechange = function()
    {
    if (req.readyState == 4)
     {
     if (req.responseJS.error == '')
      {
	  $('null_del_comp_'+id).innerHTML = req.responseJS.add;
	  inprofile_comp_return();
	  }
	  else
	  {
	  $('comp_text_info').style.color = "#FF0000";
	  $('comp_text_info').innerHTML = req.responseJS.error;
	  }
     }
    }
   req.open(null, '/mod/profile/ajax_comunity.php', true);
   req.send( { part: part , id: id , ds_m: s_month , ds_y: s_year , de_m: e_month , de_y: e_year } );
   }
  }


 function inprofile_comp_return(id)
  {
  part = 'comp_get_default';

   req.onreadystatechange = function()
    {
    if (req.readyState == 4)
     {
     if (req.responseJS.error == '')
      {
  	  $('null_edit_comp').innerHTML = req.responseJS.add;
		$('null_editi_comp_'+id).innerHTML = '';
   	  $('act_edit_comp').innerHTML = "Добавить";
  	  }
     }
    }
   req.open(null, '/mod/profile/ajax_comunity.php', true);
   req.send( { part: part } );
  }

function inprofile_showNicknameChange()
    {
        $('nicknameStatic').style.display = 'none';
        $('nicknameInput').style.display = '';
    }

function inprofile_showDomainChange()
    {
        $('changeDomainButton').style.display = 'none';
        $('domainCaptionOff').style.display = 'none';
        $('domainBox').style.display = '';
        $('startPageChange').style.display = '';
        $('domainCaptionOn').style.display = '';
        $('domainInput').select();
    }

function club_menu_setactive(id,pr)
	{
	if ($('club_menu_setactive_'+id))
		{
		if (pr == 1)
			{
			$('club_menu_setactive_'+id).className = 'club_menu_active_2';
			}
			else
			{
			$('club_menu_setactive_'+id).className = 'club_menu';
			}
		}
	}


function educ_menu_setactive(id,pr)
	{
	if ($('educ_menu_setactive_'+id))
		{
		if (pr == 1)
			{
			$('educ_menu_setactive_'+id).className = 'educ_menu_active_2';
			}
			else
			{
			$('educ_menu_setactive_'+id).className = 'educ_menu';
			}
		}
	}

function comp_menu_setactive(id,pr)
	{
	if ($('comp_menu_setactive_'+id))
		{
		if (pr == 1)
			{
			$('comp_menu_setactive_'+id).className = 'comp_menu_active_2';
			}
			else
			{
			$('comp_menu_setactive_'+id).className = 'comp_menu';
			}
		}
	}


function green_menu_setactive(id,pr)
	{
	if ($('green_menu_setactive_'+id))
		{
		if (pr == 1)
			{
			$('green_menu_setactive_'+id).className = 'green_menu_active_2';
			}
			else
			{
			$('green_menu_setactive_'+id).className = 'club_menu_null';
			}
		}
	}
function alert66(str, param, icon, title)
	{
	if (typeof param == 'undefined') param='';
	if (typeof icon == 'undefined') icon=true;
	if (typeof title == 'undefined') title='Сообщение';
	
	alert_66(str, param, icon, title);
	}
	
function alert_66(str, param, icon, title)
	{
 	if (typeof param == 'undefined') param='';
 	if (typeof icon == 'undefined') icon=true;
 	if (typeof title == 'undefined') title='Сообщение';

 	if (document.getElementById('window2'))
	 	{
	 	document.body.removeChild(document.getElementById('window2'));
	 	}

 	window_create('alert_x',310,1);
 	window_setupcontent('alert_x',title);

 $("alert_x_mf").innerHTML = $("alert_x_mf").innerHTML + ""
	  +"<div id='forchange'>"
		+"<table cellspacing='0' cellpadding='0' border='0' width='100%' style='border-collapse: collapse;'>"
			+"<tr style='height: 90px;' valign='top'>"
				+(icon ? "<td style='width: 70px;' align='center'><img src='"+static66dez+"alert_ico.gif' width='37' height='34' alt='' title='' border='0' style='margin-top: 20px;'></td>" : '')
				+"<td style='color: #424242; font-size: 12px;'><div style='"+(!icon ? 'margin: 20px 15px;' : 'margin-top: 22px;')+"'><b>"+str+"</b></div></td>"
			+"</tr>"
			+"<tr style='height: 40px;'>"
				+"<td align='center' style='white-space: nowrap; border-top: 1px solid #D2D1CB;' "+(icon ? "colspan='2'" : '')+">"
					+"<div style='margin-top: 15px;'>"
						+"<input id='reg_enter_button' style='width: 68px; height: 16px' type='image' src='"+static66dez+"button_ok.gif' onClick=\""+(param!="" ? param+";" : "")+"window_close(0);\" alt='Ок' title='Ок'>&nbsp;"
					+"</div>"
				+"</td>"
			+"</tr>"
		+"</table>"
	   +"</div><br>";
 }

function deleteUserPost(post_id, inIsUserDomen, userShow, hash)
	{
	if (typeof hash=='undefined') hash = '';

	var url = (!inIsUserDomen ? '/user/'+userShow : '') + '/blog/del/'+post_id+'/'+hash+'/';

	confirm_66('Вы уверены, что хотите удалить запись?','','function','location=\''+url+'\'');

	return false;
	}

function deleteClubPost(post_id, inIsUserDomen, club_id, hash)
	{
	if (typeof hash=='undefined') hash = '';

	var url = (!inIsUserDomen ? '/club/'+club_id : '') + '/blog/del/'+post_id+'/'+hash+'/';

	confirm_66('Вы уверены, что хотите удалить запись?','','function','location=\''+url+'\'');

	return false;
	}

function confirm66(text,id,action,adding)
	{
	confirm_66(text,id,action,adding)
	}
	
function confirm_66(text,id,action,adding)
	{
	adding_function = "";
	if (action == 'function')	{adding_function = adding+"; window_close(0);";}
	if (action == 'link')		{adding_function = "window.location = '"+$(id).href+"'; window_close(0);";}

	window_create('alert_x',480,1);
	window_setupcontent('alert_x','Сообщение');

	$("alert_x_mf").innerHTML = $("alert_x_mf").innerHTML + ""
		+"<div id='forchange'>"
		+"<table cellspacing='0' cellpadding='0' border='0' width='100%' style='border-collapse: collapse;'>"
		+"<tr style='height: 90px;' valign='top'>"
			+"<td style='width: 70px;' align='center'><img src='"+static66dez+"confirm_ico.gif' width='37' height='34' alt='' title='' border='0' style='margin-top: 20px;'></td>"
			+"<td style='color: #424242; font-size: 12px;'><div style='margin-top: 22px;'><b>"+text+"</b></div></td>"
		+"</tr>"
		+"<tr style='height: 40px;'>"
			+"<td align='center' style='white-space: nowrap; border-top: 1px solid #D2D1CB;' colspan='2'>"
			+"<div style='margin-top: 15px;'>"
				+"<input id='reg_enter_button' style='width: 68px; height: 16px' type='image' src='"+static66dez+"button_yes.gif' onClick=\""+adding_function+"\" alt='Да' title='Да'>&nbsp;"
				+"<input style='width: 68px; height: 16px' type='image' src='"+static66dez+"cancel.gif' onClick=\"window_close(0);\" alt='Отмена' title='Отмена'>"
			+"</div>"
			+"</td>"
		+"</tr>"
		+"</table>"
	+"</div><br>";
	}

function confirm_66_custom(text,params)
{
    var options = {
        id: '',
        action: '',
        confirmTitle: 'Сообщение',
        suggestButton: {
           title: 'да',
           action: ''
        },
        cancelButton: {
           title: 'отмена',
           action: ''
        }
    };

    if (params) {
        jQuery.extend(options, params);
    }

    adding_function = " window_close(0);";
    window_create('alert_x',480,1);
    window_setupcontent('alert_x', options.confirmTitle);

    $("alert_x_mf").innerHTML = $("alert_x_mf").innerHTML + ""
        +"<div id='forchange'>"
        +"<table cellspacing='0' cellpadding='0' border='0' width='100%' style='border-collapse: collapse;'>"
        +"<tr style='height: 90px;' valign='top'>"
        +"<td style='width: 70px;' align='center'><img src='"+static66dez+"confirm_ico.gif' width='37' height='34' alt='' title='' border='0' style='margin-top: 20px;'></td>"
        +"<td style='color: #424242; font-size: 12px;'><div style='margin-top: 22px;'><b>"+text+"</b></div></td>"
        +"</tr>"
        +"<tr style='height: 40px;'>"
        +"<td align='center' style='white-space: nowrap; border-top: 1px solid #D2D1CB;' colspan='2'>"
        +"<div style='margin-top: 15px;'>"
        +"<input type='button' onClick=\""+options.suggestButton.action + adding_function+"\" value='" + options.suggestButton.title + "'>&nbsp;"
        +"<input type='button' onClick=\""+options.cancelButton.action + adding_function+"\" value='" + options.cancelButton.title + "'>"
        +"</div>"
        +"</td>"
        +"</tr>"
        +"</table>"
        +"</div><br>";
}

function avatar_66(ava_str)
 {

	window_create('alert_x',380,1);
	window_setupcontent('alert_x','Загрузка аватара');
	$("alert_x_mf").innerHTML = $("alert_x_mf").innerHTML + ""
	  +"<div id='forchange'><form action='' method='post' enctype='multipart/form-data'>"
		+"<table cellspacing='0' cellpadding='0' border='0' width='100%' style='border-collapse: collapse;'>"
			+"<tr style='height: 90px;' valign='top'>"
				+"<td style='width: 70px;' align='center'><img src='"+static66dez+"confirm_ico.gif' width='37' height='34' alt='' title='' border='0' style='margin-top: 20px;'></td>"
				+"<td style='color: #424242; font-size: 12px;'><div style='margin-top: 22px;'>"
				+"<div style='float: right; padding-right: 15px; height: 80px'>"+ava_str+"<br /><a id='del_ava' style='margin-left: 5px' class='ava_link' href='#' onclick='del_ava(); return false;'>удалить</a></div><div>выбрать аватар<br/><input style='margin-top: 5px' size='15' type='file' value='Обзор...' name='avatar' onclick='doLoad(this.form.avatar, 0)' /></div>"
				+"</div>"
				+"<span id='error_avatar' style='font-weight: bold; color: red'></span>"
				+"</td>"
			+"</tr>"
			+"<tr style='height: 40px;'>"
				+"<td align='center' style='white-space: nowrap; border-top: 1px solid #D2D1CB;' colspan='2'>"
					+"<div style='margin-top: 15px;'>"
						+"<input id='reg_enter_button' style='width: 68px; height: 16px' type='image' src='"+static66dez+"button_yes.gif' alt='Да' title='Да' onclick='doLoad(this.form.avatar, 1); return false;'>&nbsp;"
						+"<input style='width: 68px; height: 16px' type='image' src='"+static66dez+"cancel.gif' onClick=\"window_close(0);\" alt='Отмена' title='Отмена'>"
					+"</div>"
				+"</td>"
			+"</tr>"
		+"</table></form>"
	   +"</div><br>";

 }



function photo_edit_preview(id,to,pos)
	{
	if (to == 1)
		{
		if (pos == 1) {$('photo_border_'+id).style.marginTop = 0;}
		if (pos == 0)
			{
			OldH = parseInt($('photo_size_h_'+id).style.height);
			NewH = OldH / 2;
			NewH = Math.ceil(NewH) - 37;
			$('photo_border_'+id).style.marginTop = NewH+'px';
			}
		if (pos == 2)
			{
			OldH = parseInt($('photo_size_h_'+id).style.height);
			NewH = OldH - 75;
			$('photo_border_'+id).style.marginTop = NewH+'px';
			}
		}
	if (to == 2)
		{
		if (pos == 1) {$('photo_border_'+id).style.marginLeft = 0;}
		if (pos == 0)
			{
			OldW = parseInt($('photo_size_w_'+id).style.width);
			NewW = OldW / 2;
			NewW = Math.ceil(NewW) - 37;
			$('photo_border_'+id).style.marginLeft = NewW+'px';
			}
		if (pos == 2)
			{
			OldW = parseInt($('photo_size_w_'+id).style.width);
			NewW = OldW - 75;
			$('photo_border_'+id).style.marginLeft = NewW+'px';
			}
		}
	}

// photo_menu -
function photo_menu_show(id)
 {
 $('photo_menu_'+id).style.display = "";
 }

function photo_menu_hide(id)
 {
 $('photo_menu_'+id).style.display = "none";
 }

function photo_menu_active(id,pr)
	{
	if (pr == 1)
		{
		$('photo_menu_one_'+id+'_1').style.backgroundImage = 'url('+static66dez+'photo_dot_off.gif)';
		$('photo_menu_one_'+id+'_2').style.color = "#FF79AF";
		}
		else
		{
		$('photo_menu_one_'+id+'_1').style.backgroundImage = 'url('+static66dez+'photo_dot.gif)';
		$('photo_menu_one_'+id+'_2').style.color = "#FFFFFF";
		}
	}

function photo_menu_setactive(id,pr)
	{
	if ($('photo_menu_setactive_'+id))
		{
		if (pr == 1)
			{
			$('photo_menu_setactive_'+id).className = 'club_menu_active';
			}
			else
			{
			$('photo_menu_setactive_'+id).className = 'club_menu';
			}
		}
	}

function photo_menu_setactive_null(id,pr)
	{
	if ($('photo_menu_setactive_'+id))
		{
		if (pr == 1)
			{
			$('photo_menu_setactive_'+id).className = 'club_menu_active_2';
			}
			else
			{
			$('photo_menu_setactive_'+id).className = 'club_menu_null';
			}
		}
	}

function photo_menu_setactive3(id,pr)
	{
	if ($('photo_menu_setactive_'+id))
		{
		if (pr == 1)
			{
			$('photo_menu_setactive_'+id).className = 'club_menu_active_3';
			}
			else
			{
			$('photo_menu_setactive_'+id).className = 'club_menu_null';
			}
		}
	}

function photo_menu_setactive_orange(id,pr)
	{
	if ($('photo_menu_setactive_'+id))
		{
		if (pr == 1)
			{
			$('photo_menu_setactive_'+id).className = 'photo_orange_menu_active';
			}
			else
			{
			$('photo_menu_setactive_'+id).className = 'photo_orange_menu';
			}
		}
	}
// ========

// photo tag
function photo_tag_showform()
	{
	if ($("photo_tag_form").style.display == "")
		{
		$("photo_tag_form").style.display = "none";
		}
		else
		{
		$("photo_tag_form").style.display = "";
		$("photo_tag_new").focus();
		}
	}

function photo_tag_del(photo_id, tag_id)
	{
	req.onreadystatechange = function()
		{
		if (req.readyState == 4)
			{
			if (req.responseJS.rez == 1)
				{
				$("photo_tag_id_"+tag_id).style.display = "none";
				}
			}
		}
	req.open(null, '/mod/photo/ajax_photo_tag.php', true);
	req.send( { act: "del", usdie: usdie, photo_id: photo_id , tag_id: tag_id } );
	}

function photo_tag_add(photo_id)
	{
	tag_name = $("photo_tag_new").value;
	if (tag_name != "")
		{
		req.onreadystatechange = function()
			{
			if (req.readyState == 4)
				{
				if (req.responseJS.rez == 1)
					{
					tagIdArray = req.responseJS.tag_id;
					tagNameArray = req.responseJS.tag_name;
					sizeTag = tagIdArray.length;
					for(a = 0; a < sizeTag; a = a + 1)
						{
						$("photo_tag_new").value = "";
						$("photo_tag_form").style.display = "none";
						$("photo_tag_link").style.display = "";
						if ($("photo_tag_cont").innerHTML == "") {add = " ";} else {add = ", ";}
						$("photo_tag_cont").innerHTML += "<span style='white-space: nowrap;' id='photo_tag_id_"+tagIdArray[a]+"'>"+add+"<a href='/photo/tags/?tag="+tagNameArray[a]+"'>"+tagNameArray[a]+"</a> <img src='"+static66dez+"new_del_2.gif' width='8' height='8' alt='Удалить' title='Удалить' border='0' style='cursor: pointer;' onClick='photo_tag_del("+photo_id+","+tagIdArray[a]+");'>";
						}
					}
				}
			}
		req.open(null, '/mod/photo/ajax_photo_tag.php', true);
		req.send( { act: "add", usdie: usdie, photo_id: photo_id , tag_name: tag_name } );
		}
	}
// =========

// photo name
function photo_name_input(photo_id, photo_name)
	{
	$("photo_name_input").innerHTML = "<input style='width: 100%; color: #424242; font-size: 15px;' type='text' id='photo_new_name' value='"+photo_name+"' onBlur='photo_name_save("+photo_id+");'>";
	$("photo_new_name").focus();
	}

function photo_name_save(photo_id)
	{
	photo_name = $("photo_new_name").value;

	if (photo_name != "")
		{
		req.onreadystatechange = function()
			{
			if (req.readyState == 4)
				{
				$("photo_name_input").innerHTML = "<div style='color: #990000; width: 100%; white-space: nowrap;' onClick='photo_name_input("+photo_id+",\""+photo_name+"\");'><b style='cursor: pointer;'>"+photo_name.substr(0,200)+"</b><span class='photo_info'> <a href='#' onClick='return false;' style='font-size: 11px;'>изменить</a></span></div>";
				}
			}
		req.open(null, '/mod/photo/ajax_photo_change_name.php', true);
		req.send( { usdie: usdie, photo_id: photo_id , photo_name: photo_name } );
		}
	}
// ==========

// photo name v3
function photo_name_input_v3(photo_id, photo_name)
	{
	//photo_name = photo_name.replace(/&#034;/g,'"').replace(/&#039;/g,"'");



	$("photo_name_input").innerHTML = "<textarea style='width: 200px; height: 60px;' id='photo_new_name' onBlur='photo_name_save_v3("+photo_id+");'>"+photo_name+"</textarea><br><span class='blueLink'><a href='#' onClick='return false;'>Сохранить</a></span>";
	$("photo_new_name").focus();
	}

function photo_name_save_v3(photo_id)
	{
	photo_name = $("photo_new_name").value;

	//if (photo_name != "")
	//	{
		req.onreadystatechange = function()
			{
			if (req.readyState == 4)
				{
				if (photo_name == "") {photo_name2 = "У этой фотографии ещё нет красивого названия";} else {photo_name2 = photo_name;}

				photo_name = photo_name.replace(/"/g,'').replace(/'/g,'');

				$("photo_name_input").innerHTML = "<span style='font-size: 18px; color: #5E5C58;' onClick='photo_name_input_v3("+photo_id+",\""+photo_name+"\");'>"+photo_name2.substr(0,200)+"</span> <span class='blueLink' style='font-size: 14px;' onClick='photo_name_input_v3("+photo_id+",\""+photo_name+"\");'><br><a href='#' onClick='return false;'>Назвать!</a></span>";

				//alert(photo_name+"\n\n"+$("photo_name_input").innerHTML);
				}
			}
		req.open(null, '/mod/photo/ajax_photo_change_name.php', true);
		req.send( { usdie: usdie, photo_id: photo_id , photo_name: photo_name } );
	//	}
	}
// ==========

// photo vote
function photo_vote(id,num)
	{
	req.onreadystatechange = function()
		{
		if (req.readyState == 4)
			{
			$('photo_rating_change').innerHTML = req.responseJS.res;
			}
		}
	req.open(null, '/mod/photo/ajax_photo_vote.php', true);
	req.send( { id: id , num: num } );
	}


function photo_vote_act(part)
	{
	for(a = 1; a <= part; a++)
		{
		$('photo_vote_'+a).src = ''+static66dez+'photo_newstar_green_on.gif';
		}
	}

function photo_vote_off()
	{
	for(a = 1; a <= 5; a++)
		{
		$('photo_vote_'+a).src = ''+static66dez+'photo_newstar_green_off.gif';
		}
	}

function photo_vote_change(act)
	{
	if (act == 'over')
		{
		$("photo_vote_res").style.display = "none";
		$("photo_vote").style.display = "";
		}
		else
		{
		$("photo_vote_res").style.display = "";
		$("photo_vote").style.display = "none";
		}
	}
// ==========

function selectAbumOption(obj)
	{

	if (obj.value == 1)
		{
		document.getElementById("groupList").style.display = "";
		if (document.getElementById("alert_x"))
			{
			//var X = parseInt(document.getElementById("alert_x").style.left);
			//document.getElementById("alert_x").style.left = (X + 1)+"px";
			}
		}
	else
		{
		document.getElementById("groupList").style.display = "none";
		if (document.getElementById("alert_x"))
			{
			//var X = parseInt(document.getElementById("alert_x").style.left);
			//document.getElementById("alert_x").style.left = (X - 1)+"px";
			}
		}
	}


// photo add-edit album
function photo_album_add_edit(id)
	{
	part = 'get';

	req.onreadystatechange = function()
		{
		if (req.readyState == 4)
			{
			$("window").innerHTML = "<div style='width: 400px; height: 1px; position: absolute; left: 400px; top: 265px; z-index: 10000;'>"+req.responseJS.res+"</div>";
			}
		}
	req.open(null, '/mod/photo/ajax_album.php', true);
	req.send( { part: part , id: id } );
	}

function photo_album_add_edit_new(id)
	{
	part = 'get';

	req.onreadystatechange = function()
		{
		if (req.readyState == 4)
			{
			window_create('alert_x',420,1);
			window_setupcontent('alert_x','Альбом');

			$("alert_x_mf").innerHTML = $("alert_x_mf").innerHTML + ""
				+"<div id='forchange'>"
					+"<table cellspacing='0' cellpadding='0' border='0' width='100%' style='border-collapse: collapse;'>"
						+"<tr style='height: 90px;' valign='top'>"
							+"<td>"+req.responseJS.res+"</td>"
						+"</tr>"
					+"</table>"
				+"</div><br>";
			}
		}
	req.open(null, '/mod/photo/ajax_album_new.php', true);
	req.send( { part: part , id: id } );
	}

function photo_album_save(id)
	{
	part = 'save';

	name 		= $("album_name").value;
	theme 		= $("album_theme").value;
	visibility	= $("album_visibility").value;
	pass1		= $("pass_1").value;
	//pass2		= $("pass_2").value;

	//if (pass1 != pass2)
	//	{
	//	$("album_error").innerHTML = "Проверьте правельность ввода пароля";
	//	}
	//	else
	//	{
		if (theme == 0)
			{
			$("album_error").innerHTML = "Выберите тему альбома";
			}
			else
			{
			if (name == "")
				{
				$("album_error").innerHTML = "Введите название альбома";
				}
				else
				{
				req.onreadystatechange = function()
					{
					if (req.readyState == 4)
						{
						if (req.responseJS.error == "")
							{
							//if (id == 0)
							//	{
							//	window.location = "/photo/user/"+req.responseJS.user+"/"+req.responseJS.album+"/";
							//	}
							//	else
							//	{
							//	window.location = "/photo/user/"+req.responseJS.user+"/"+req.responseJS.album+"/0/edit/";
							//	}
							window.location = window.location;
							}
							else
							{
							$("album_error").innerHTML = req.responseJS.error;
							}
						}
					}
				req.open(null, '/mod/photo/ajax_album.php', true);
				req.send( { part: part , id: id , name: name, theme: theme, visibility: visibility, pass1: pass1 } );
				}
			}
	//	}
	}

function photo_album_save_new(id)
	{
	part = 'save';
	
	if (!$("album_name") || typeof $("album_name") == 'undefined') {alert66('Доступ закрыт. Редактирование альбома запрещено'); return false;}

	var description	= jQuery('#description').length>0 ? jQuery('#description').val() : '';
	var name 		= $("album_name").value;
	var theme 		= $("album_theme").value;
	var visibility	= $("album_visibility").value;
	var pass1		= $("pass_1").value;
	

	//pass2		= $("pass_2").value;

	friendGroup = "";

	if (visibility == 1)
		{
		friendGroup = new Array(); arrayIndex = 0;
		if ($("friendGroupFR").checked == true) { friendGroup[arrayIndex] = $("friendGroupFR").value; arrayIndex++; }
		if ($("friendGroupRD").checked == true) { friendGroup[arrayIndex] = $("friendGroupRD").value; arrayIndex++; }
		num_group = $("groupNum").value;
		for(a = 0; a < num_group; a++)
			{
			if ($("friendGroup"+a).checked == true) { friendGroup[arrayIndex] = $("friendGroup"+a).value; arrayIndex++; }
			}
		}

		if (theme == 0)
			{
			$("album_error").innerHTML = "Выберите тему альбома";
			}
		else
			{
			if (name == "")
				{
				$("album_error").innerHTML = "Введите название альбома";
				}
			else
				{
				req.onreadystatechange = function()
					{
					if (req.readyState == 4)
						{
						if (req.responseJS.error == "")
							{
							window.location = "http://www."+mainDomain+"/photo/user/"+req.responseJS.user+"/"+req.responseJS.album+"/";
							}
						else
							{
							$("album_error").innerHTML = req.responseJS.error;
							}
						}
					}
				req.open(null, '/mod/photo/ajax_album_new.php', true);
				req.send( { part: part , id: id , name: name, theme: theme, visibility: visibility, pass1: pass1, friendGroup: friendGroup, description: description } );
				}
			}
	//	}
	}
// ===============

// photo album del
function doPhotoDelOK()
	{
	jQuery("#delalbum").submit();
	}

function photo_album_del(id)	
	{
	$("delalbum").album_id.value = id;
	
	confirm_66('Удалить этот альбом?','del_1','function','doPhotoDelOK();');
	}
	
function photo_album_del_ok(id)
	{
	$("delalbum").album_id.value = id;
	
	confirm_66('Удалить этот альбом?','del_1','function','doPhotoDelOK();');
	}

// ===============   

// add fav photo
function photo_add_fav_one(id,part)
	{
	req.onreadystatechange = function()
		{
		if (req.readyState == 4)
			{
			alert_66('Добавленно в избранное');
			}
		}
	req.open(null, '/mod/photo/ajax_fav_photo.php', true);
	req.send( { id: id , part: part} );
	}
// =============

function addPhoto2Cookie(photo_id)
	{
	var aphotos = getcookie('photo_selected');

	if (typeof aphotos == 'undefined')
		aphotos=photos.join(',');
	else
		{
		photos = aphotos.split(',');
		aphotos=photos.join(',');
		}

	var sps = ','+aphotos+',';

	if (sps.indexOf(','+photo_id+',')==-1)
		photos.push(photo_id);

	sphotos = photos.join(',');
	setcookie('photo_selected',sphotos);
	}

function deletePhotoFromCookie(photo_id)
	{
	var aphotos = getcookie('photo_selected');
	if (typeof aphotos != 'undefined')
		photos = aphotos.split(',');

	var newPhotos=new Array();
	for(var i=0;i<photos.length;i++)
		if (parseInt(photos[i])!=parseInt(photo_id))
			newPhotos.push(photos[i]);

	photos = newPhotos;
	sphotos = photos.join(',');
	setcookie('photo_selected',sphotos);
	}

function photo_select_all(max_photo)
	{
	if ($("act_all").checked == true)
		{
		for (a = 1; a < max_photo; a++)
			{
			if ($("photo_ch_"+a))
				{
				$("photo_ch_"+a).checked = true;

				var photo_id = $("photo_ch_"+a).value;
				addPhoto2Cookie(photo_id);
				}
			}
		$("photo_act_num").innerHTML = (max_photo - 1);
		}
		else
		{
		for (a = 1; a < max_photo; a++)
			{
			if ($("photo_ch_"+a))
				{
				$("photo_ch_"+a).checked = false;

				var photo_id = $("photo_ch_"+a).value;
				deletePhotoFromCookie(photo_id);
				}
			}
		$("photo_act_num").innerHTML = 0;
		if ($("photo_act_num").innerHTML == 0) {$("photo_act_num").innerHTML = "Ничего не выбрано";}
		}
	}

var photos = new Array();

function edit_album_photoSel(photo_id, checkbox)
	{
	var cookie_photos = getcookie('photo_selected_ids');
	var tmp = '';

	if (typeof cookie_photos == 'undefined') cookie_photos = '';

	if (!checkbox.checked && cookie_photos)
		{
		// удаляем из куки
		tmp = ','+cookie_photos+',';
		if (tmp.indexOf(','+photo_id+',')>-1)
			{
			tmp = tmp.replace(','+photo_id+',', ',');
			tmp = trim(tmp,',');
			}
		}
	else if (checkbox.checked)
		{
		if (cookie_photos=='')
			{
			tmp = photo_id;
			}
		else
			{
			var tmp = ','+cookie_photos+',';
			if (tmp.indexOf(','+photo_id+',')==-1)
				{
				if (parseInt(photo_id)>0)
					{
					tmp = tmp + photo_id+',';
					}
				}
			tmp = trim(tmp, ',');
			}
		}


	if (typeof tmp == 'string' && tmp.indexOf(',')>-1)
		{
		var tmp2 = tmp.split(',')
		}
	else
		{
		var tmp2 = new Array();
		if (parseInt(tmp))
			tmp2.push(parseInt(tmp));
		}

	if (tmp2.length==0)
		document.getElementById('selectedPhotos').innerHTML = 'Фотографии не отмечены';
	else if (tmp2.length==1)
		document.getElementById('selectedPhotos').innerHTML = 'Отмечена 1 фотография';
	else if (tmp2.length>1 && tmp2.length<5)
		document.getElementById('selectedPhotos').innerHTML = 'Отмечены '+tmp2.length+' фотографии';
	else if (tmp2.length>=5 && tmp2.length%10 != 1)
		document.getElementById('selectedPhotos').innerHTML = 'Отмечены '+tmp2.length+' фотографий';
	else if (tmp2.length>20 && tmp2.length%10 == 1)
		document.getElementById('selectedPhotos').innerHTML = 'Отмечена '+tmp2.length+' фотография';

	setcookie('photo_selected_ids',tmp);
	}

function edit_album_photoSelAll(checkbox)
	{
	var tmp = document.getElementById('allphotos_cookie_all').value;
	tmp = tmp.split(',');
	for(num in tmp)
		{
		var photo_id = tmp[num];

		edit_album_photoSel(photo_id, checkbox );

		if (document.getElementById('photo_ch_'+photo_id))
			{
			document.getElementById('photo_ch_'+photo_id).checked = checkbox.checked;

			}
		}
	}


function photo_select_one(photo_num, img)
	{
	var photo_id = $("photo_ch_"+photo_num).value;

	if ($("photo_ch_"+photo_num).checked == true)
		{
		addPhoto2Cookie(photo_id);

		if ($("photo_act_num").innerHTML == "Ничего не выбрано") {$("photo_act_num").innerHTML = 0;}
		$("photo_act_num").innerHTML = parseInt($("photo_act_num").innerHTML) + 1;
		}
		else
		{
		deletePhotoFromCookie(photo_id);

		$("photo_act_num").innerHTML = parseInt($("photo_act_num").innerHTML) - 1;
		if ($("photo_act_num").innerHTML == 0) {$("photo_act_num").innerHTML = "Ничего не выбрано";}
		}
	}

function photo_show_code()
	{
	if ($("code").style.display == 'none')
		{
		$("code").style.display = "";
		$("code_text").focus();
		$("code_text").select();
		}
		else
		{
		$("code").style.display = "none";
		}
	}

function photo_show_code_forum()
	{
	if ($("code_forum").style.display == 'none')
		{
		$("code_forum").style.display = "";
		}
		else
		{
		$("code_forum").style.display = "none";
		}
	}


// photo del
function photo_del2(id)
	{
	confirm_66('Удалить?','del_1','function','jQuery(\'#delphoto'+id+'\').submit();');
	}
	
/*
function photo_del(id, hash)
	{
	if (typeof hash == 'undefined') hash='';

	if (id)
		{
		if (id > 0)
			{
			req.onreadystatechange = function()
				{
				if (req.readyState == 4)
					{
					setTimeout("window.location = '"+req.responseJS.rez+"';",2000);
					alert_66('Фотография удалена');
					}
				}
			req.open(null, '/mod/photo/ajax_del_photo.php', true);
			req.send( { id: id, hash: hash } );
			}
		}
	}
*/
// =========


// photo rotate
function photo_rotate(id,rot)
	{
	if ($("photo_deg_"+id+"_span")) {deg = parseInt($("photo_deg_"+id+"_span").innerHTML);}
	if ($("photo_deg_"+id+"_inp"))  {deg = parseInt($("photo_deg_"+id+"_inp").value);}

	old_width  = $("photo_img_"+id).width;
	old_height = $("photo_img_"+id).height;

	if (rot == 1)
		{
		if (deg > 0) {new_deg = deg - 90;} else {new_deg = 270;}
		$("photo_img_"+id).src = '/show/photo.php?id='+id+'&size=normal&rotate='+new_deg;
		$("photo_img_"+id).width  = old_height;
		$("photo_img_"+id).height = old_width;
		if ($("photo_deg_"+id+"_span"))	{$("photo_deg_"+id+"_span").innerHTML = new_deg;}
		if ($("photo_deg_"+id+"_inp")) 	{$("photo_deg_"+id+"_inp").value = new_deg;}
		}

	if (rot == 2)
		{
		new_deg = deg + 90;
		if (new_deg > 270) {new_deg = 0;}
		$("photo_img_"+id).src = '/show/photo.php?id='+id+'&size=normal&rotate='+new_deg;
		$("photo_img_"+id).width  = old_height;
		$("photo_img_"+id).height = old_width;
		if ($("photo_deg_"+id+"_span"))	{$("photo_deg_"+id+"_span").innerHTML = new_deg;}
		if ($("photo_deg_"+id+"_inp"))	{$("photo_deg_"+id+"_inp").value = new_deg;}
		}
	}
// ============


// photo passwd
function photo_getpass(user_id,album_id,photo_id)
	{
	window_create('photo_getpass',300,1);
	window_setupcontent('photo_getpass','Введите пароль');

	$("photo_getpass_mf").innerHTML = $("photo_getpass_mf").innerHTML + ""
	  +"<div id='forchange'>"
		+"<table cellspacing='0' cellpadding='0' border='0' width='100%' style='border-collapse: collapse;'>"
			+"<tr style='height: 20px;'>"
				+"<td></td>"
			+"</tr>"
			+"<tr style='background-color: #EFEEE8; height: 30px;'>"
				+"<td class='auth_cell'> Пароль:</td>"
				+"<td class='auth_cell' width='140'><form action='' method='post' onsubmit=\"photo_verifypass("+user_id+","+album_id+","+photo_id+"); return false;\"><input name='pass_1' type='password' id='pass_1' value='' style='width: 140px;'></form></td>"
			+"</tr>"
			+"<tr style='height: 20px;'>"
				+"<td style='color: #FF0000;' align='center' id='message' colspan='2'></td>"
			+"</tr>"
			+"<tr style='height: 1px;'>"
				+"<td align='right' style='white-space: nowrap;' colspan='2'>"
					+"<input id='reg_enter_button' style='width: 54px; height: 16px' type='image' src='"+static66dez+"enter.gif' onClick=\"photo_verifypass("+user_id+","+album_id+","+photo_id+");\" alt='Войти' title='Войти'>&nbsp;"
					+"<input style='width: 68px; height: 16px' type='image' src='"+static66dez+"cancel.gif' onClick=\"window_close(0);\" alt='Отмена' title='Отмена'>"
				+"</td>"
			+"</tr>"
		+"</table>"
	   +"</div><br>";
	$('pass_1').focus();
	}

function photo_verifypass(user_id,album_id,photo_id)
	{
	pass1 = $("pass_1").value;

	if (pass1 != "")
		{
		req.onreadystatechange = function()
			{
			if (req.readyState == 4)
				{
				if (req.responseJS.error == "")
					{
					var url_link='';

					if (req.responseJS.use_domain!="")
						url_link = "http://"+req.responseJS.use_domain+"."+mainDomain+"/photo/"+album_id+"/"+photo_id+"/";
					else
						url_link = "http://www."+mainDomain+"/photo/user/"+user_id+"/"+album_id+"/0/"+photo_id+"/";

					window.location = url_link;
					}
					else
					{
					$("message").innerHTML = req.responseJS.error;
					}
				}
			}
		req.open(null, '/mod/photo/ajax_pass.php', true);
		req.send( { user_id: user_id , album_id: album_id, photo_id: photo_id, pass: pass1} );
		}
		else
		{
		$("message").innerHTML = "введите пароль";
		}
	}
// ============

// photo after18
function photo_after18(user_id,album_id,photo_id)
	{
	window_create('photo_getpass',300,1);
	window_setupcontent('photo_getpass','Внимание');

	$("photo_getpass_mf").innerHTML = $("photo_getpass_mf").innerHTML + ""
	  +"<div id='forchange'>"
		+"<table cellspacing='0' cellpadding='0' border='0' width='100%' style='border-collapse: collapse;'>"
			+"<tr style='height: 20px;'>"
				+"<td></td>"
			+"</tr>"
			+"<tr style='height: 20px;'>"
				+"<td style='color: #000000; font-size: 12px; padding: 0px 10px 0px 10px;' colspan='2'>Внимание, Вы собираетесь просмотреть изображения, отнесенные автором к категории \"только для взрослых\".<br><br>Нажмите \"Да\", если:<br><ul><li>Вам больше 18 лет;</li><li>Вы желаете продолжить просмотр этого и других изображений из категории \"только для взрослых\";</li></ul><br>Нажмите \"Отмена\", если Вы не согласны с условиями и не желаете продолжить просморт.<br><br></td>"
			+"</tr>"
			+"<tr style='height: 1px;'>"
				+"<td align='center' style='white-space: nowrap;' colspan='2'>"
					+"<input id='reg_enter_button' style='width: 68px; height: 16px' type='image' src='"+static66dez+"button_ok.gif' onClick=\"photo_verifyafter18("+user_id+","+album_id+","+photo_id+");\" alt='Да' title='Да'>&nbsp;"
					+"<input style='width: 68px; height: 16px' type='image' src='"+static66dez+"cancel.gif' onClick=\"window_close(0);\" alt='Отмена' title='Отмена'>"
				+"</td>"
			+"</tr>"
		+"</table>"
	   +"</div><br>";
	}

function photo_verifyafter18(user_id,album_id,photo_id)
	{
	document.cookie = "After18 = 1; path = /; domain=www."+mainDomain;
	document.cookie = "After18 = 1; path = /; domain=."+mainDomain;
	document.cookie = "After18 = 1; path = /; domain="+mainDomain;

	window.location = "http://www."+mainDomain+"/photo/user/"+user_id+"/"+album_id+"/0/"+photo_id+"/";
	}
// =============

// photo warning
function photo_warning(id)
	{
	if (id != 0)
		{
		req.onreadystatechange = function()
			{
			if (req.readyState == 4)
				{
				alert_66('Фотография будет проверена модератором');
				}
			}
		req.open(null, '/mod/photo/ajax_warning_photo.php', true);
		req.send( { id: id } );
		}
	}
// =============

// photo upload
function MultiSelector( list_target, max ){

	// Where to write the list
	this.list_target = list_target;
	// How many elements?
	this.count = 1;
	// How many elements?
	this.id = 1;
	// Is there a maximum?
	if( max ){
		this.max = max;
	} else {
		this.max = -1;
	};

	/**
	 * Add a new file input element
	 */
	this.addElement = function( element ){

		// Make sure it's a file input element
		if( element.tagName == 'INPUT' && element.type == 'file' ){

			// Element name -- what number am I?
			element.name = 'upload_' + this.id++;

			// Add reference to this object
			element.multi_selector = this;

			// What to do when a file is selected
			element.onchange = function(){

				// New file input
				var new_element = document.createElement( 'input' );
				new_element.type = 'file';
				new_element.className = 'photo_upload';

				// Add new element
				this.parentNode.insertBefore( new_element, this );

				// Apply 'update' to element
				this.multi_selector.addElement( new_element );

				// Update list
				this.multi_selector.addListRow( this );

				// Hide this: we can't use display:none because Safari doesn't like it
				this.style.position = 'absolute';
				this.style.left = '-1000px';

				max_upload = parseInt($("max_upload").value);
				$("max_upload").value = max_upload + 1;

			};
			// If we've reached maximum number, disable input element
			if( this.max != -1 && this.count >= this.max ){
				element.disabled = true;
			};

			// File element counter
			this.count++;
			// Most recent element
			this.current_element = element;

		} else {
			// This can only be applied to file input elements!
			alert( 'Error: not a file input element' );
		};

	};

	/**
	 * Add a new row to the list of files
	 */
	this.addListRow = function( element ){

		// Row div
		var new_row = document.createElement( 'div' );

		// Delete button
		var new_row_button = document.createElement( 'input' );
		new_row_button.type = 'button';
		new_row_button.value = '';
		new_row_button.style.background = "none";
		new_row_button.style.border = "0px";
		new_row_button.style.backgroundImage = "url("+static66dez+"ico_del.gif)";
		new_row_button.style.backgroundRepeat = "no-repeat";
		new_row_button.style.backgroundPosition = "5px 6px";
		new_row_button.style.cursor = "pointer";

		// References
		new_row.element = element;

		// Delete function
		new_row_button.onclick= function(){

			// Remove element from form
			this.parentNode.element.parentNode.removeChild( this.parentNode.element );

			// Remove this row from the list
			this.parentNode.parentNode.removeChild( this.parentNode );

			// Decrement counter
			this.parentNode.element.multi_selector.count--;

			// Re-enable input element (if it's disabled)
			this.parentNode.element.multi_selector.current_element.disabled = false;

			// Appease Safari
			//    without it Safari wants to reload the browser window
			//    which nixes your already queued uploads
			return false;
		};

		// Set row value
		x_id = this.id - 2;
		x_name = element.value.split("\\");
		x_name = x_name[x_name.length - 1];
		new_row.innerHTML = "<br><table cellspacing='0' cellpadding='0' style='float: left;'><tr valign='top'><td class='photo_page'>"+x_id+"</td></tr></table>&nbsp; Название:&nbsp; <input type='text' name='name_"+x_id+"' class='photo_upload' style='margin-top: 2px;' value='"+x_name+"'>";

		// Add button
		new_row.appendChild( new_row_button );

		// Add it to the list
		this.list_target.appendChild( new_row );

	};

};
// ============

var blink_cnt = 2;
function create_inmail(nick)
{
/*
if ($("x66_first"))
	{
	if ($("x66_second_2"))
		{
		if ($("x66_second_2").style.display == "none")
			{
			$("x66_first").style.display = "none";
			$("x66_second_1").style.display = "none";
			$("x66_second_2").style.display = "";
			}
		}
	}
	 if ($('bottom_pat_1_name'))
		{
			if ($('bottom_pat_1_div').style.display == "") {my66_bottom_pat_selected = 1;}
		}

	if (talk_part != 1)
		{
		new_talk_show(1);
		}
	var input_box = $('post_inmail_to');
	if (typeof input_box != 'undefined') input_box.value = nick;
	var input_box_2 = $('post_inmail_subj');
	if (typeof input_box_2 != 'undefined') {
		input_box_2.focus();
		setTimeout("doRed()",500);
	}
	userinfo_close();
	return false;
*/

if ($("x66_first"))
	{
	if ($("x66_second_2"))
		{
		if ($("x66_second_2").style.display == "none")
			{
			$("x66_first").style.display = "none";
			$("x66_second_1").style.display = "none";
			$("x66_second_2").style.display = "";
			}
		}
	}

if ($("useradd"))
	{
	$("useradd").value = nick;
	chat66_add_user();
	$("useradd").value = "пользователь...";
	}
userinfo_close();
return false;
}

function doRed() {
	if (blink_cnt % 2 == 0) { col = '#EB731C'; val = "Введите тему!"; }
	else { col = '#000000'; val = ""; }
	var input_box_2 = $('post_inmail_subj');
	if (typeof input_box_2 != 'undefined') {
		input_box_2.style.color = col;
		input_box_2.value = val;
		if (blink_cnt < 7) {
			blink_cnt++;
			setTimeout("doRed()",500);
		} else blink_cnt = 2;
	}
}

function hideSelects(visibility){
	selects = document.getElementsByTagName('select');
	for(i = 0; i < selects.length; i++) {
	     selects[i].style.visibility = visibility;
	}
}

function get_len() {
	var v = $('post_sms_text').value.length;
	$('post_sms_len').value = v;
}

function news_vote(id,num)
	{
	req.onreadystatechange = function()
		{
		if (req.readyState == 4)
			{
			$('news_rating_change').innerHTML = req.responseJS.res;
			}
		}
	req.open(null, '/mod/news/ajax_news_vote.php', true);
	req.send( { id: id , num: num } );
	}


function news_vote_act(part)
	{
	for(a = 1; a <= part; a++)
		{
		$('news_vote_'+a).src = ''+static66dez+'news/plus_s.gif';
		}
	}

function news_vote_off()
	{
	for(a = 1; a <= 5; a++)
		{
		$('news_vote_'+a).src = ''+static66dez+'news/plus.gif';
		}
	}

function pr_ch_tab(id) {
	req.onreadystatechange = function()
		{
		if (req.readyState == 4)
			{
			try { $('saved').innerHTML = ""; } catch(e) {}
			$('pr_tab_1').className = "";
			$('pr_tab_2').className = "";
			$('pr_tab_3').className = "";
			$('pr_tab_'+id).className = "bar_select";
			$('bar_holder').className = "check_it_bg_";
			$('pr_tab').innerHTML = req.responseText;
			}
		}
	req.open(null, '/mod/profile/ajax_form.php', true);
	req.send( { id: id } );
}

function pr_load_carrer() {
	$('pr_tab').style.display = "block";
	try { $('saved').innerHTML = ""; } catch(e) {}
	$('pr_tab_1').className = "bar_select";
	$('bar_holder').className = "check_it_bg_";
}

function addOption (ListId, value, text){
	var oListbox = $(ListId);
	var oOption = document.createElement("option");
	oOption.appendChild(document.createTextNode(text));
	oOption.setAttribute("value", value);

	oListbox.appendChild(oOption);
}
function pr_school() {
	var id = $('city').value;
	req.onreadystatechange = function()
		{
		if (req.readyState == 4)
			{
				if (req.responseJS.options.length > 0) {
					var len = req.responseJS.options.length;
					var oListbox = $('school');
					while (oListbox.options.length) oListbox.options[0] = null;
					for ( i = 0 ; i < len ; i++ )
						addOption( 'school', req.responseJS.options[i][0], req.responseJS.options[i][1] );
				}
			}
		}
	req.open(null, '/mod/profile/ajax_school.php', true);
	req.send( { id: id } );
}

function pr_col() {
	var id = $('city').value;
	req.onreadystatechange = function()
		{
		if (req.readyState == 4)
			{
				if (req.responseJS.options.length > 0) {
					var len = req.responseJS.options.length;
					var oListbox = $('col');
					while (oListbox.options.length) oListbox.options[0] = null;
					for ( i = 0 ; i < len ; i++ )
						addOption( 'col', req.responseJS.options[i][0], req.responseJS.options[i][1] );
				}
			}
		}
	req.open(null, '/mod/profile/ajax_col.php', true);
	req.send( { id: id } );
}

function pr_uni() {
	var id = $('city').value;
	req.onreadystatechange = function()
		{
		if (req.readyState == 4)
			{
				if (req.responseJS.options.length > 0) {
					var len = req.responseJS.options.length;
					var oListbox = $('uni');
					while (oListbox.options.length) oListbox.options[0] = null;
					for ( i = 0 ; i < len ; i++ )
						addOption( 'uni', req.responseJS.options[i][0], req.responseJS.options[i][1] );
				}
			}
		}
	req.open(null, '/mod/profile/ajax_uni.php', true);
	req.send( { id: id } );
}

function pr_faculty(name) {
	var id = $(name).value;
	req.onreadystatechange = function()
		{
		if (req.readyState == 4)
			{
				if (req.responseJS.options.length > 0) {
					var len = req.responseJS.options.length;
					var oListbox = $('faculty');
					while (oListbox.options.length) oListbox.options[0] = null;
					for ( i = 0 ; i < len ; i++ )
						addOption( 'faculty', req.responseJS.options[i][0], req.responseJS.options[i][1] );
				}
			}
		}
	req.open(null, '/mod/profile/ajax_faculty.php', true);
	req.send( { id: id } );
}

function pr_spec(ind) {
	var id = $('faculty').value;
	req.onreadystatechange = function()
		{
		if (req.readyState == 4)
			{
				if (req.responseJS.options.length > 0) {
					var len = req.responseJS.options.length;
					var oListbox = $('spec');
					while (oListbox.options.length) oListbox.options[0] = null;
					for ( i = 0 ; i < len ; i++ )
						addOption( 'spec', req.responseJS.options[i][0], req.responseJS.options[i][1] );
				}
			}
		}
	req.open(null, '/mod/profile/ajax_spec.php', true);
	req.send( { id: id, ind : ind } );
}

function pr_check_form() {
	if ( $('school') ) {
		if ( ( $('school').value != 0 || $('custom_school').value != "" ) && $('year_start').value != 0 ) {
			return true;
		} else {
			alert_66("Необходимо заполнить все поля!");
			return false;
		}
	} else if ( $('col') ) {
		if ( ( $('faculty').value != 0 || $('custom_faculty').value != "" ) && ( $('col').value != 0 || $('custom_col').value != "" ) && $('year_start').value != 0 ) {
			return true;
		} else {
			alert_66("Необходимо заполнить все поля!");
			return false;
		}
	} else if ( $('faculty') ) {
		if ( ( $('spec').value != 0 || $('custom_spec').value != "" ) && ( $('faculty').value != 0 || $('custom_faculty').value != "" ) && $('year_start').value != 0 ) {
			return true;
		} else {
			alert_66("Необходимо заполнить все поля!");
			return false;
		}
	} else if ( $('uni') ) {
		if ( ( $('spec').value != 0 || $('custom_spec').value != "" ) && ( $('faculty').value != 0 || $('custom_faculty').value != "" ) && ( $('uni').value != 0 || $('custom_uni').value != "" ) && $('year_start').value != 0 ) {
			return true;
		} else {
			alert_66("Необходимо заполнить все поля!");
			return false;
		}
	} else if ( $('pro_comp') ) {
		if ( $('pro_comp').value != "" && $('year_start').value != 0 && $('month_start').value != 0 ) {
			return true;
		} else {
			alert_66("Необходимо заполнить все поля!");
			return false;
		}
	} else return true;
}


function users_select_all(max_users)
	{
	if ($("act_all").checked == true)
		{
		for (a = 1; a <= max_users; a++)
			{
			if ($("users_ch_"+a))
				{
				$("users_ch_"+a).checked = true;
				}
			}
		}
		else
		{
		for (a = 1; a <= max_users; a++)
			{
			if ($("users_ch_"+a))
				{
				$("users_ch_"+a).checked = false;
				}
			}
		}
	}


function mod_or_menu_set_active(id,pr)
	{
	if ($('mod_menu_'+id))
		{
		if (pr == 1)
			{
			$('mod_menu_'+id).className = 'mod_or_menu_div_active';
			}
			else
			{
			$('mod_menu_'+id).className = 'mod_or_menu_div';
			}
		}
	}

function mod_or_menu_sub_set_active(id,pr)
	{
	if ($('mod_menu_'+id))
		{
		if (pr == 1)
			{
			$('mod_menu_'+id).className = 'mod_or_menu_div_sub_menu_active';
			}
			else
			{
			$('mod_menu_'+id).className = 'mod_or_menu_div_sub_menu';
			}
		}
	}

function mod_menu_set_active(id,pr)
	{
	if ($('mod_menu_'+id))
		{
		if (pr == 1)
			{
			$('mod_menu_'+id).className = 'mod_menu_div_active';
			}
			else
			{
			$('mod_menu_'+id).className = 'mod_menu_div';
			}
		}
	}

function mod_menu_sub_set_active(id,pr)
	{
	if ($('mod_menu_'+id))
		{
		if (pr == 1)
			{
			$('mod_menu_'+id).className = 'mod_menu_div_sub_menu_active';
			}
			else
			{
			$('mod_menu_'+id).className = 'mod_menu_div_sub_menu';
			}
		}
	}

function insert_photo_flash(links,fvars)
	{
	Firefox = navigator.userAgent.indexOf("Firefox") >= 0;
	document.write('<object id="upflash" style="margin: 0px;" data="'+links+'" type="application/x-shockwave-flash" height="480" width="100%">');
	document.write('<param name="movie" value="'+links+'">');
	document.write('<param name="quality" value="high">');
	document.write('<param name="FLASHVARS" value="'+fvars+'">');
	if (!Firefox) {document.write('<param name="wmode" value="transparent">');}
	document.write('</object>');
	}

function fav_hover(part,type)
	{
	$(part).style.display = type;
	}

function add_edit_group(group,name)
	{
	if (name == "")
		{
		window_create('alert_x',350,1);
		window_setupcontent('alert_x','Добавление группы');
		}
		else
		{
		window_create('alert_x',350,1);
		window_setupcontent('alert_x','Редактирование группы');
		}

	name_value = "введите название группы...";
	name_color = "808080";
	if (name != "")
		{
		name_value = name;
		name_color = "000000";
		}

	document.getElementById("alert_x_mf").innerHTML = document.getElementById("alert_x_mf").innerHTML + ""
	  +"<form action='/favorite/' method='post' enctype='multipart/form-data'>"
		+"<table cellspacing='0' cellpadding='0' border='0' width='100%' style='border-collapse: collapse;'>"
			+"<tr style='height: 60px;' valign='top'>"
				+"<td style='color: #424242; font-size: 12px;'><div style='text-align: center; margin-top: 22px;'><input id='name' type='text' name='name' value='"+name_value+"' style='width: 300px; color: #"+name_color+";' onClick='input_rechange(\"введите название группы...\",\"name\",\"click\");' onBlur='input_rechange(\"введите название группы...\",\"name\",\"blur\");'/></div></td>"
			+"</tr>"
			+"<tr style='height: 40px;'>"
				+"<td align='center' style='white-space: nowrap; border-top: 1px solid #D2D1CB;' colspan='2'>"
					+"<div style='margin-top: 15px;'>"
						+"<input style='width: 85px; height: 16px' type='image' src='"+static66dez+"save.gif' alt='Сохранить' title='Сохранить'>&nbsp;"
						+"<input style='width: 68px; height: 16px' type='image' src='"+static66dez+"cancel.gif' onClick=\"window_close(0);\" alt='Отмена' title='Отмена'>"
						+"<input type='hidden' name='group' value='"+group+"'>"
					+"</div>"
				+"</td>"
			+"</tr>"
		+"</table>"
	   +"</form><br>";
	}

function add_edit_fav(to_group,to_num,x_name,x_link,x_window,group_list,in66)
	{
	if (x_link == "")
		{
		window_create('alert_x',350,1);
		window_setupcontent('alert_x','Добавление закладки');
		its_not_new = "";
		}
		else
		{
		window_create('alert_x',350,1);
		window_setupcontent('alert_x','Редактирование закладки');
		its_not_new = "<input type='hidden' name='edit' value='edit'><input type='hidden' name='old_group' value='"+to_group+"'><input type='hidden' name='old_num' value='"+to_num+"'>";
		}

	if (in66 != -1)
		{
		its_not_new += "<input type='hidden' name='in66' value='"+in66+"'>";
		}

	x_link_value = "http://";
	x_link_color = "808080";

	if (x_link != "")
		{
		x_link_value = x_link;
		x_link_color = "000000";
		}

	x_name_value = "введите название закладки";
	x_name_color = "808080";

	if (x_name != "")
		{
		x_name_value = x_name;
		x_name_color = "000000";
		}

	x_option = "";

	tmp_option = group_list.split(";");
	for(a = 0; a < tmp_option.length; a=a+1)
		{
		tmp_option_2 = tmp_option[a].split("-");
		sel = ""; if (tmp_option_2[0] == to_group) {sel = "selected";}
		x_option += "<option value='"+tmp_option_2[0]+"' "+sel+">"+tmp_option_2[1]+"</option>";
		}

	x_new_group_value = "новая группа...";
	x_new_group_color = "808080";

	if (window.location != 'http://www.'+mainDomain+'/favorite/')
		{
		adding_form_1 = "onsubmit='save_ajax(); return false;'";
		}
		else
		{
		adding_form_1 = "";
		}

	document.getElementById("alert_x_mf").innerHTML = document.getElementById("alert_x_mf").innerHTML + ""
	  +"<form action='/favorite/' method='post' enctype='multipart/form-data' "+adding_form_1+">"
		+"<table cellspacing='0' cellpadding='0' border='0' width='100%' style='border-collapse: collapse;'>"
			+"<tr style='height: 60px;' valign='top'>"
				+"<td style='width: 20px;' align='center'><img src='http://"+mainDomain+"/img/favicon/www.gif' width='16' height='16' alt='' title='' border='0' style='margin-top: 25px;'></td>"
				+"<td style='color: #424242; font-size: 12px;'>"
					+"<div style='text-align: center; margin-top: 22px;'><input id='x_link' type='text' name='x_link' value='"+x_link_value+"' style='width: 290px; color: #"+x_link_color+";' onClick='input_rechange(\"http://\",\"x_link\",\"click\");' onBlur='input_rechange(\"http://\",\"x_link\",\"blur\");'/></div>"
					+"<div style='text-align: center; margin-top: 7px;'><input id='x_name' type='text' name='x_name' value='"+x_name_value+"' style='width: 290; color: #"+x_name_color+";' onClick='input_rechange(\"введите название закладки\",\"x_name\",\"click\");' onBlur='input_rechange(\"введите название закладки\",\"x_name\",\"blur\");'/></div>"
					+"<div style='text-align: left; margin-top: 12px; font-size: 11px;'>&nbsp;&nbsp;в группу <select id='x_group' name='x_group' style='font-size: 14px;'>"+x_option+"</select></div>"
					+"<div style='text-align: center; margin-top: 12px;'><input id='x_new_group' type='text' name='x_new_group' value='"+x_new_group_value+"' style='width: 290; color: #"+x_new_group_color+";' onClick='input_rechange(\"новая группа...\",\"x_new_group\",\"click\");' onBlur='input_rechange(\"новая группа...\",\"x_new_group\",\"blur\");'/></div><br>"
					+"<div style='text-align: left; font-size: 11px;'>&nbsp;&nbsp;<input id='x_window' type='checkbox' name='x_window' style='margin: 0px; padding: 0px;' /> <label for='x_window'>открывать ссылку в новом окне</label></div><br>"
				+"</td>"
			+"</tr>"
			+"<tr style='height: 40px;'>"
				+"<td align='center' style='white-space: nowrap; border-top: 1px solid #D2D1CB;' colspan='2'>"
					+"<div style='margin-top: 15px;'>"
						+"<input style='width: 85px; height: 16px' type='image' src='"+static66dez+"save.gif' alt='Сохранить' title='Сохранить'>&nbsp;"
						+"<input style='width: 68px; height: 16px' type='image' src='"+static66dez+"cancel.gif' onClick=\"window_close(0);\" alt='Отмена' title='Отмена'>"
						+its_not_new
					+"</div>"
				+"</td>"
			+"</tr>"
		+"</table>"
	   +"</form><br>";

	if (x_window == 1) {$('x_window').checked = true;}
	}

function save_ajax()
	{
	x_link = $('x_link').value;
	x_name = $('x_name').value;
	x_group = $('x_group').value;
	x_new_group = $('x_new_group').value;
	if ($('x_window').checked = true) {x_window = 1;} else {x_window = 0;}
	in66 = 1;

	req.onreadystatechange = function()
		{
		if (req.readyState == 4)
			{
			if (req.responseJS)
				{
				if (req.responseJS.res == 1)
					{
					alert_66('Ссылка добавленна!');
					if (b66_part == 6)
						{
						var req2 = new JsHttpRequest();
						req2.onreadystatechange = function()
							{
							if (req2.readyState == 4)
								{
								if (req2.responseJS.x_content)
									{
									// обновляем блок
									$("new_content_3_div").innerHTML = req2.responseJS.x_content;
									$("new_content_3_overdiv").style.height = $("new_content_3_div").offsetHeight;
									}
								}
							}
						req2.caching = false; //true
						req2.open('POST', '/mod/my/ajax_66.php', true);
						req2.send({ name: 6 });
						}
					}
					else
					{
					if (req.responseJS.res == 0) {alert_66('Ссылка не добавленна');}
					if (req.responseJS.res == 10) {alert_66("Закладка не добавлена. Их количество не должно превышать 500. Удалите ненужные");}
					}
				}
			}
		}
	req.caching = false; //true
	req.open('POST', '/mod/favorite/ajax_save.php', true);
	req.send({ x_link: x_link, x_name:x_name, x_group:x_group, x_new_group:x_new_group, x_window:x_window, in66:in66, usdie: usdie });
	}

function input_rechange(default_value,id,act)
	{
	if (act == 'click')
		{
		if ($(id).value == default_value) {$(id).value = "";}
		$(id).style.color = "000000";
		}
	if (act == 'blur')
		{
		if ($(id).value == "") {$(id).value = default_value;}
		if ($(id).value == default_value) {$(id).style.color = "808080";}
		}
	}

function fav_change_in66(id)
	{
	req.onreadystatechange = function()
		{
		if (req.readyState == 4)
			{
			if (req.responseJS)
				{
				if (req.responseJS.resp == 5)
					{
					alert_66('В блоке "Мой 66" может выводиться не более 30 закладок');
					$(id).checked = false;
					}
					else
					{
					if (req.responseJS.resp == 1) {$(id).checked = true;} else {$(id).checked = false;}
					}
				}
			}
		}
	req.caching = false; //true
	req.open('POST', '/mod/favorite/ajax_in66.php', true);
	req.send({ id: id, usdie: usdie });
	}

function helper(id)
	{
	req.onreadystatechange = function()
		{
		if (req.readyState == 4)
			{
			if (req.responseJS)
				{
				if (req.responseJS.text != "")
					{
					dragobject.initialize();
					if (document.all) hideSelects('hidden');
					left = (xsize() / 2) - 540 / 2;
					$("window").innerHTML = "<div style='z-index:1000; width: 540px; height: 1px; left: "+left+"px;' id='alert_x' class='wie'></div>"
                                              +"<div style='z-index:1000; width: 508px; height: 31px; left: "+(left+8)+"px; z-index: 2000; cursor: move; text-align: right;' id='drag' class='drag'><img src='"+static66dez+"window/close.gif' width='31' height='31' alt='Закрыть' title='Закрыть' border='0' style='cursor: pointer;' onClick='window_close(0);'></div>";
					$('alert_x').innerHTML = "<table style='width: 540px; height: 1px;' cellspacing='0' cellpadding='0' border='0'>"
                                             +"<tr style='height: 8px;'>"
                                              +"<td width='8'><img src='"+static66dez+"window/corner_1.png' width='8' height='8' alt='' border='0' class='shade_image'></td>"
                                              +"<td><img src='"+static66dez+"window/gray60.png' width='100%' height='8' alt='' border='0' class='shade_image'></td>"
                                              +"<td width='8'><img src='"+static66dez+"window/corner_2.png' width='8' height='8' alt='' border='0' class='shade_image'></td>"
                                             +"</tr>"
                                             +"<tr valign='top' style='height: 1px;'>"
                                              +"<td width='8'><img src='"+static66dez+"window/gray60.png' width='8' height='100%' alt='' border='0' class='shade_image'></td>"
                                              +"<td id='alert_x_content'>123</td>"
                                              +"<td width='8'><img src='"+static66dez+"window/gray60.png' width='8' height='100%' alt='' border='0' class='shade_image'></td>"
                                             +"</tr>"
                                             +"<tr style='height: 8px;'>"
                                              +"<td width='8'><img src='"+static66dez+"window/corner_3.png' width='8' height='8' alt='' border='0' class='shade_image'></td>"
                                              +"<td><img src='"+static66dez+"window/gray60.png' width='100%' height='8' alt='' border='0' class='shade_image'></td>"
                                              +"<td width='8'><img src='"+static66dez+"window/corner_4.png' width='8' height='8' alt='' border='0' class='shade_image'></td>"
                                             +"</tr>"
                                            +"</table>";

					$('alert_x_content').innerHTML = "<table cellspacing='0' cellpadding='0' style='background-color: #FFF7E1; width: 100%;'>"
														+"<tr>"
															+"<td class='helper_1'>"
																+"<br><span style='font-size: 18px; color: #F74C00; background-position: 0px 4px;'>"+req.responseJS.title+"</span>"
																+"<div>"+req.responseJS.text+"</div>"
															+"</td>"
														+"</tr>"
													+"</table>";
					}
				}
			}
		}
	req.caching = false; //true
	req.open('POST', '/mod/helper.php', true);
	req.send({ id: id});
	}


var active_user_tag_group = 0;
var active_user_tag_class = "";
var active_user_tag_closing = 0;

function user_tag_editor(group_id,group_ext)
	{
	if (active_user_tag_closing == 0)
		{
		if (group_ext != 0)
			{
			group_class_on = "user_tag_one_on_group";
			}
			else
			{
			group_class_on = "user_tag_one_on";
			}

		if (active_user_tag_group != 0)
			{
			if ($("dv_user_tag_"+active_user_tag_group)) 					{ $("dv_user_tag_"+active_user_tag_group).className = active_user_tag_class; }				else { $("dv_user_tag_one_"+active_user_tag_group).className = active_user_tag_class; }
			if ($("dv_user_tag_del_group_button_"+active_user_tag_group))	{ $("dv_user_tag_del_group_button_"+active_user_tag_group).style.display = "none"; }
			if ($("dv_user_tag_del_tag_layer_1_"+active_user_tag_group))	{ $("dv_user_tag_del_tag_layer_1_"+active_user_tag_group).style.display = ""; }			else { $("dv_user_tag_one_layer_1_"+active_user_tag_group).style.display = ""; }
			if ($("dv_user_tag_del_tag_layer_2_"+active_user_tag_group))	{ $("dv_user_tag_del_tag_layer_2_"+active_user_tag_group).style.display = "none"; } 	else { $("dv_user_tag_one_layer_2_"+active_user_tag_group).style.display = "none"; }
			if ($("dv_user_tag_add_"+active_user_tag_group))				{ $("dv_user_tag_add_"+active_user_tag_group).style.display = "none"; }
			if ($("dv_user_primer_"+active_user_tag_group))					{ $("dv_user_primer_"+active_user_tag_group).style.display = "none"; }
			}

		if (group_id != 0)
			{
			$("dv_user_pen_"+group_id).style.display = "none";
			$("dv_user_text_"+group_id).style.color = "252525";
			if ($("dv_user_tag_"+group_id)) 					{ $("dv_user_tag_"+group_id).className = group_class_on; }			else { $("dv_user_tag_one_"+group_id).className = group_class_on; }
			if ($("dv_user_tag_del_group_button_"+group_id))	{ $("dv_user_tag_del_group_button_"+group_id).style.display = ""; }
			if ($("dv_user_tag_del_tag_layer_1_"+group_id))		{ $("dv_user_tag_del_tag_layer_1_"+group_id).style.display = "none"; }	else { $("dv_user_tag_one_layer_1_"+group_id).style.display = "none"; }
			if ($("dv_user_tag_del_tag_layer_2_"+group_id))		{ $("dv_user_tag_del_tag_layer_2_"+group_id).style.display = ""; } 		else { $("dv_user_tag_one_layer_2_"+group_id).style.display = ""; }
			if ($("dv_user_tag_add_"+group_id))					{ $("dv_user_tag_add_"+group_id).style.display = "block"; }
			if ($("dv_user_primer_"+group_id))					{ $("dv_user_primer_"+group_id).style.display = ""; }
			active_user_tag_group = group_id;
			if (group_ext != 0) { active_user_tag_class = "user_tag_one_off_group"; } else { active_user_tag_class = "user_tag_one_off"; }
			if ($("user_tag_new_"+group_id))
				{
				$("user_tag_new_"+group_id).focus();
				}
			}
		}
		else
		{
		active_user_tag_closing = 0;
		}
	}

function user_tag_editor_off(group_id,group_ext)
	{
	if (active_user_tag_group == group_id)
		{
		active_user_tag_closing = 1;
		if (group_ext != 0) { active_user_tag_class = "user_tag_one_off_group"; } else { active_user_tag_class = "user_tag_one_off"; }
		if ($("dv_user_tag_"+group_id)) 					{ $("dv_user_tag_"+group_id).className = active_user_tag_class; }			else { $("dv_user_tag_one_"+group_id).className = active_user_tag_class; }
		if ($("dv_user_tag_del_group_button_"+group_id))	{ $("dv_user_tag_del_group_button_"+group_id).style.display = "none"; }
		if ($("dv_user_tag_del_tag_layer_1_"+group_id))		{ $("dv_user_tag_del_tag_layer_1_"+group_id).style.display = ""; }			else { $("dv_user_tag_one_layer_1_"+group_id).style.display = ""; }
		if ($("dv_user_tag_del_tag_layer_2_"+group_id))		{ $("dv_user_tag_del_tag_layer_2_"+group_id).style.display = "none"; }	 	else { $("dv_user_tag_one_layer_2_"+group_id).style.display = "none"; }
		if ($("dv_user_tag_add_"+group_id))					{ $("dv_user_tag_add_"+group_id).style.display = "none"; }
		if ($("dv_user_primer_"+group_id))					{ $("dv_user_primer_"+group_id).style.display = "none"; }
		active_user_tag_group = 0;
		active_user_tag_class = "";
		}
	}

function user_tag_enter(e,value_contener_id,group_id)
	{
	if(!e) e = event;
	if(window.event) // IE
		{
		keynum = e.keyCode
		}
		else if(e.which) // Netscape/Firefox/Opera
		{
		keynum = e.which
		}
	if (keynum == 13)
		{
		user_tag_add(value_contener_id, group_id)
		}
	}

function blog_tag_enter(e,value_contener_id)
	{
	if(!e) e = event;
	if(window.event) // IE
		{
		keynum = e.keyCode
		}
		else if(e.which) // Netscape/Firefox/Opera
		{
		keynum = e.which
		}
	if (keynum == 13)
		{
		blog_tag_add(value_contener_id);
		}
	}

function blog_tag_add(input_id)
	{
	tag_name = $(input_id).value;
	if (tag_name != "")
		{
		if ($("tag_list").innerHTML == "Не указанны" || $("tag_list").innerHTML == "Метки к записи") {$("tag_list").innerHTML = "";}

		tag_name = tag_name.split(",");

		for(a = 0; a < tag_name.length; a++)
			{
			tag_num = parseInt($("max_tag").value);
			$("tag_list").innerHTML += "<b style='white-space: nowrap;' id='tag_"+tag_num+"'>"+tag_name[a]+" <input type='hidden' name='tag_"+tag_num+"' value='"+tag_name[a]+"'><img src='"+static66dez+"new_del_2.gif' width='8' height='8' alt='Удалить' title='Удалить' border='0' style='cursor: pointer; margin-right: 5px;' onClick='blog_del_tag("+tag_num+");'></b>";
			$("max_tag").value = (tag_num + 1);
			}

		$(input_id).value = "";
		$(input_id).focus();
		}
		else
		{
		alert_66("Введите метку");
		}
	}

function blog_tagtext_add(tag_name)
	{
	if ($("tag_list").innerHTML == "Не указанны" || $("tag_list").innerHTML == "Метки к записи") {$("tag_list").innerHTML = "";}
	tag_num = parseInt($("max_tag").value);
	$("tag_list").innerHTML += "<b style='white-space: nowrap;' id='tag_"+tag_num+"'>"+tag_name+" <input type='hidden' name='tag_"+tag_num+"' value='"+tag_name+"'><img src='"+static66dez+"new_del_2.gif' width='8' height='8' alt='Удалить' title='Удалить' border='0' style='cursor: pointer; margin-right: 5px;' onClick='blog_del_tag("+tag_num+");'></b>";
	$("max_tag").value = (tag_num + 1);
	}

function blog_del_tag(tag_id)
	{
	$("tag_list").removeChild($("tag_"+tag_id));
	}

function blog_form_verify()
	{
	if ( ($("tag_list").innerHTML == "Метки к записи") || ($("tag_list").innerHTML == "") )
		{
		alert_66("Укажите метки");

		return false;
		}
	else
		{
		if (any_thing_focus)
			{

			}
		else
			{
			$("blog_form").submit();
			}
		}
	}

function user_blog_form_verify()
	{
		if (any_thing_focus)
			{

			}
			else
			{
			$("blog_form").submit();
			}
	}

function input_fields_focus(type)
	{
	any_thing_focus = type;
	}


function user_tag_hover(id,act)
	{
	if (act == 'over')
		{
		if ($("dv_user_tag_one_"+id))
			{
			if (($("dv_user_tag_one_"+id).className == "user_tag_one_off") || ($("dv_user_tag_one_"+id).className == "user_tag_one_off_group"))
				{
				$("dv_user_text_"+id).style.color = "003D8A";
				$("dv_user_pen_"+id).style.display = "";
				}
			}
		if ($("dv_user_tag_"+id))
			{
			if (($("dv_user_tag_"+id).className == "user_tag_one_off") || ($("dv_user_tag_"+id).className == "user_tag_one_off_group"))
				{
				$("dv_user_text_"+id).style.color = "003D8A";
				$("dv_user_pen_"+id).style.display = "";
				}
			}
		}
	if (act == 'out')
		{
		$("dv_user_pen_"+id).style.display = "none";
		$("dv_user_text_"+id).style.color = "4B4B4B";
		}
	}

function user_tag_del_group(group_id)
	{
	$("dv_user_scale_"+group_id).style.display = "";

	req.onreadystatechange = function()
		{
		if (req.readyState == 4)
			{
			if (req.responseJS)
				{
				if (req.responseJS.res == "ok")
					{
					$("dv_user_tag_"+group_id).style.display = "none";
					}
				$("dv_user_scale_"+group_id).style.display = "none";
				}
			}
		}
	req.caching = false; //true
	req.open('POST', '/mod/profile/ajax_new_interests.php', true);
	req.send({ part: "del_group", group_id: group_id });
	}

function user_tag_del_tag(tag_id)
	{
	req.onreadystatechange = function()
		{
		if (req.readyState == 4)
			{
			if (req.responseJS)
				{
				//alert(req.responseJS.res);
				if (req.responseJS.res == "unset_group")
					{
					$("dv_user_tag_"+req.responseJS.group_id).style.display = "none";
					}
					else
					{
					$("dv_user_tag_del_tag_layer_1_"+req.responseJS.group_id).innerHTML = req.responseJS.insert;
					$("dv_user_tag_del_tag_layer_2_"+req.responseJS.group_id).innerHTML = req.responseJS.insert_2;
					}
				$("dv_user_scale_"+req.responseJS.group_id).style.display = "none";

				LoadPng();
				}
			}
		}
	req.caching = false; //true
	req.open('POST', '/mod/profile/ajax_new_interests.php', true);
	req.send({ part: "del_tag", tag_id: tag_id });
	}

function user_tag_add(value_contener_id, group_id)
	{
	if ($(value_contener_id))
		{
		value = $(value_contener_id).value;
		}
		else
		{
		value = value_contener_id;
		}

	if ((value != "") && (value != "Свой вариант"))
		{
		$("dv_user_scale_"+group_id).style.display = "";
		req.onreadystatechange = function()
			{
			if (req.readyState == 4)
				{
				if (req.responseJS)
					{
					if (req.responseJS.res == 'ok')
						{
						old_text = $("dv_user_tag_del_tag_layer_1_"+group_id).innerHTML;
						if (old_text[0] == "-") {$("dv_user_tag_del_tag_layer_1_"+group_id).innerHTML = "";}

						if (req.responseJS.need_add == 1)
							{
							//$("dv_user_tag_del_tag_layer_1_"+group_id).innerHTML += "<b id='tag_layer_1_"+group_id+"_"+req.responseJS.tag_id+"'>"+value+"</b>";
							$("dv_user_tag_del_tag_layer_1_"+group_id).innerHTML = req.responseJS.insert;
							$("dv_user_tag_del_tag_layer_2_"+group_id).innerHTML += "<b id='tag_layer_2_"+group_id+"_"+req.responseJS.tag_id+"'>"+value+" <img src='"+static66dez+"new_del_2.gif' width='8' height='8' alt='Удалить' title='Удалить' border='0' style='cursor: pointer; margin-right: 5px;' onClick=\"user_tag_del_tag("+req.responseJS.tag_id+");\"></b>";

							LoadPng();
							}
						}
					$("user_tag_new_"+group_id).value = "";
					$("user_tag_new_"+group_id).focus();
					}
				$("dv_user_scale_"+group_id).style.display = "none";
				}
			}
		req.caching = false; //true
		req.open('POST', '/mod/profile/ajax_new_interests.php', true);
		req.send({ part: "add_tag", tag_name: value, group_id: group_id });
		}
		else
		{
		alert_66('Введите тег');
		}
	}

function user_tag_add_other(group_id,tag_id)
	{
	if ((group_id != 0) && (tag_id != 0))
		{
		req.onreadystatechange = function()
			{
			if (req.readyState == 4)
				{
				if (req.responseJS)
					{
					$("interests").innerHTML = "";
					alert_66("Добавленно в ваши интересы");
					}
				}
			}
		req.caching = false; //true
		req.open('POST', '/mod/profile/ajax_new_interests.php', true);
		req.send({ part: "add_tag_other", tag_id: tag_id, group_id: group_id });
		}
	}

function user_tag_default_one_save(group_id)
	{
	tag_id = $("user_def_tag_one_"+group_id).value;
	tag_name = $("user_def_tag_one_"+group_id).options[$("user_def_tag_one_"+group_id).selectedIndex].text;

	$("dv_user_scale_"+group_id).style.display = "";
	req.onreadystatechange = function()
		{
		if (req.readyState == 4)
			{
			if (req.responseJS)
				{
				if (req.responseJS.res == 'ok')
					{
					if (tag_id != 0)
						{
						$("dv_user_tag_one_layer_1_"+group_id).innerHTML = tag_name;
						}
						else
						{
						$("dv_user_tag_one_layer_1_"+group_id).innerHTML = req.responseJS.insert;
						}
					}
				$("dv_user_scale_"+group_id).style.display = "none";
				}
			}
		}
	req.caching = false; //true
	req.open('POST', '/mod/profile/ajax_new_interests.php', true);
	req.send({ part: "save_def_one", group_id: group_id, tag_id: tag_id });
	}

function user_tag_default_mass_save(group_id,tag_id)
	{
	if ($("user_def_tag_one_"+group_id+"_"+tag_id).checked == true) {value = 1;} else {value = 0;}

	$("dv_user_scale_"+group_id).style.display = "";
	req.onreadystatechange = function()
		{
		if (req.readyState == 4)
			{
			if (req.responseJS)
				{
				if (req.responseJS.res == 'ok')
					{
					$("dv_user_tag_one_layer_1_"+group_id).innerHTML = req.responseJS.insert;
					}
				$("dv_user_scale_"+group_id).style.display = "none";
				}
			}
		}
	req.caching = false; //true
	req.open('POST', '/mod/profile/ajax_new_interests.php', true);
	req.send({ part: "save_def_mass", group_id: group_id, tag_id: tag_id, value: value });
	}

function user_new_profile_add()
	{
	SDkey = $("user_new_profile_addform").value;
	SDname = $("user_new_profile_addform").options[$("user_new_profile_addform").selectedIndex].text;

	new_id = parseInt($("user_new_profile_dat_num").value);
	$("user_new_profile_dat_num").value = (new_id + 1);

	//$("user_new_profile_add_contener").innerHTML += "<div style='padding: 10px 0px 10px 28px; font-size: 14px;' id='user_new_profile_dat_"+new_id+"'>"
	//													+"<div style='width: 80px; float: left;'>"+SDname+"</div> "
	//												+"</div>";

	NEDIV1 = document.createElement("DIV");
	NEDIV1.style.padding = "10px 0px 10px 28px";
	NEDIV1.setAttribute("id","user_new_profile_dat_"+new_id);
	$("user_new_profile_add_contener").appendChild(NEDIV1);

	NEDIV2 = document.createElement("DIV");
	NEDIV2.style.width = "80px";
	NEDIV2.style.fontSize = "14px";
	NEDIV2.style.cssFloat = "left"; // styleFloat
	NEDIV2.innerHTML = SDname;
	$("user_new_profile_dat_"+new_id).appendChild(NEDIV2);

	NEH = document.createElement("INPUT");
	NEH.setAttribute("name","user_new_contects_name_"+new_id);
	NEH.setAttribute("type","hidden");
	NEH.setAttribute("value",SDkey);
	$("user_new_profile_dat_"+new_id).appendChild(NEH);

	NET = document.createElement("INPUT");
	NET.setAttribute("name","user_new_contects_dat_"+new_id);
	NET.style.width = "200px";
	NET.style.height = "24px";
	NET.style.margin = "0px";
	NET.style.padding = "0px";
	NET.style.fontSize = "14px";
	NET.style.position = "relative";
	NET.style.top = "-1px";
	$("user_new_profile_dat_"+new_id).appendChild(NET);

	$("us_first").selected = true;
	}

var u_b_c_s = false;

function user_blog_comment(id)
{
	if ( u_b_c_s == true ) return false;
	else u_b_c_s = true;
	var comment = $('cmt').value;
	req.onreadystatechange = function()
	{
 		if (req.readyState == 4)
		{
 			if (req.responseJS)
			{
 				comment = document.getElementById('cmt').value = '';
 				$('user_blog_comments').innerHTML = req.responseJS.rez;
				u_b_c_s = false;
			}
		}
	}
	req.caching = false; //true
	req.open('POST', '/mod/profile/user_blog_ajax_comment.php', true);
	req.send({ id: id, comment: comment, usdie: usdie });
	return false;
}

function user_blog_findenter(e,id)
	{
	if (e)
		{
		var ctrl = e.ctrlKey;
		var shift = e.shiftKey;
		var keynum = e.keyCode;
		if ( keynum == 13 && ( ctrl || shift ) )
			{
			user_blog_comment(id);
			}
		}
	}

var c_b_c_s = false;

function club_blog_comment(id)
{
	if ( c_b_c_s == true ) return false;
	else c_b_c_s = true;
	var comment = $('cmt').value;
	req.onreadystatechange = function()
	{
 		if (req.readyState == 4)
		{
 			if (req.responseJS)
			{
 				comment = $('cmt').value = '';
 				$('club_blog_comments').innerHTML = req.responseJS.rez;
				c_b_c_s = false;
			}
		}
	}
	req.caching = false; //true
	req.open('POST', '/mod/community/club_blog_ajax_comment.php', true);
	req.send({ id: id, comment: comment, usdie: usdie });
	return false;
}

function club_blog_findenter(e,id)
	{
	if (e)
		{
		var ctrl = e.ctrlKey;
		var shift = e.shiftKey;
		var keynum = e.keyCode;
		if ( keynum == 13 && ( ctrl || shift ) )
			{
			club_blog_comment(id);
			}
		}
	}


function change_ps()
	{
	$("ps_td").style.backgroundImage = "url("+static66dez+"ava_off_bg.gif)";
	//$("ps_td").style.height = "31px";
	//$("ps_td").style.paddingLeft = "5px";
	//$("ps_td").style.paddingTop = "5px";
	$("ps_td").innerHTML = "<textarea onblur='save_ps();' id='ps_text' class='ava_textarea'><\/textarea>";
	$("ps_text").focus();
	}

function save_ps()
	{
	part = 'save';

	xtext = document.getElementById("ps_text").value;

	req.onreadystatechange = function()
		{
		if (req.readyState == 4)
			{
			if (req.responseJS)
				{

				}
			}
		}
	req.caching = false; //true
	req.open('POST', '/mod/profile/ajax_on_main_emocion.php', true);
	req.send({ part: part , xtext: xtext , usdie: usdie });
	}

function show_warning_form(type, content_user_id , addons)
	{
	window_create('alert_x',310,1);
	window_setupcontent('alert_x','Сообщить модератору');

	$("alert_x_mf").innerHTML = $("alert_x_mf").innerHTML + ""
		  +"<div id='forchange'>"
			+"<table cellspacing='0' cellpadding='0' border='0' width='100%' style='border-collapse: collapse;'>"
				+"<tr>"
					+"<td style='padding: 10px; font-size: 12px; color: #000000;'>Хотите, чтобы эта информация была просмотрена модератором?</td>"
				+"</tr>"
				+"<tr>"
					+"<td style='padding: 10px;'>"
						+"<textarea id='warning_text' style='color: #808080; width: 100%;' onClick='input_rechange(\"подробности, если считаете нужным...\",\"warning_text\",\"click\");' onBlur='input_rechange(\"подробности, если считаете нужным...\",\"warning_text\",\"blur\");'>подробности, если считаете нужным...</textarea>"
					+"</td>"
				+"</tr>"
				+"<tr>"
					+"<td style='padding: 10px; font-size: 12px; color: #000000;' align='center'>"
						+"<img src='"+static66dez+"button_yes.gif' width='68' height='16' alt='Отправить' title='Отправить' border='0' onClick=\"show_warning_save('"+type+"', '"+content_user_id+"' , '"+addons+"');\" style='cursor: pointer;'>"
						+"&nbsp; &nbsp; &nbsp;"
						+"<img src='"+static66dez+"cancel.gif' width='68' height='16' alt='Отменить' title='Отменить' border='0' onClick=\"window_close(0);\" style='cursor: pointer;'>"
					+"</td>"
				+"</tr>"
			+"</table>"
		   +"</div><br>";
	}

function show_warning_save(type, content_user_id , addons)
	{
	warningText = $("warning_text").value;
	if (warningText == "подробности, если считаете нужным...") {warningText = "";}
	xhref = window.location.href;
	
	xhref = xhref.replace('#prn','');
	
	var tmpa = addons;
	tmpa = tmpa.split(/;/);
	
	
	
	if (type==1 && typeof tmpa[1] != 'undefined')
		{
		var comid = tmpa[1].split(/=/);
		if (comid[1]>0) xhref = xhref+'#'+comid[1];
		}

	req.onreadystatechange = function()
		{
		if (req.readyState == 4)
			{
			if (req.responseJS)
				{
				alert_66("Спасибо, сообщение будет рассмотрено модератором");
				}
			}
		}
	req.caching = false; //true
	req.open('POST', '/show/ajax_warning.php', true);
	req.send({ usdie: usdie , type: type, content_user_id: content_user_id, warning_text: warningText, addons: addons, xhref: xhref });
	}


// video name
function video_name_input(video_id, video_name)
	{
	$("video_name_input").innerHTML = "<input style='width: 100%; color: #424242; font-size: 15px;' type='text' id='video_new_name' value='"+video_name+"' onBlur='video_name_save("+video_id+");'>";
	$("video_new_name").focus();
	}

function video_name_save(video_id)
	{
	video_name = $("video_new_name").value;

	if (video_name != "")
		{
		req.onreadystatechange = function()
			{
			if (req.readyState == 4)
				{
				$("video_name_input").innerHTML = video_name.substr(0,40)+" <span class='blueLink' style='font-size: 14px;' onClick='video_name_input("+video_id+",\""+video_name+"\");'> <a href='#' onClick='return false;'>Назвать!</a></span>";
				if ($("videoFileInPath"+video_id))
					{
					$("videoFileInPath"+video_id).innerHTML = video_name.substr(0,40);
					}
				}
			}
		req.open(null, '/mod/video/ajax_video_change_name.php', true);
		req.send( { usdie: usdie, video_id: video_id , video_name: video_name } );
		}
	}
// ==========

// video name
function video_info_input(video_id, video_info)
	{
	$("video_info_input").innerHTML = "<textarea style='width: 100%; color: #424242; font-size: 15px; height: 60px;' type='text' id='video_new_info' onBlur='video_info_save("+video_id+");'>"+video_info+"</textarea>";
	$("video_new_info").focus();
	}

function video_info_save(video_id)
	{
	video_info = $("video_new_info").value;

	if (video_info != "")
		{
		req.onreadystatechange = function()
			{
			if (req.readyState == 4)
				{
				$("video_info_input").innerHTML = "<span style='font-size: 18px; color: #5E5C58; cursor: pointer;' onClick='video_info_input("+video_id+",\""+video_info+"\");'>"+video_info.substr(0,100)+"</span> <span class='blueLink' style='font-size: 14px;' onClick='video_info_input("+video_id+",\""+video_info+"\");'><a href='#' onClick='return false;'>изменить</a></span>";
				if ($("videoFileInPath"+video_id))
					{
					$("videoFileInPath"+video_id).innerHTML = video_info.substr(0,100);
					}
				}
			}
		req.open(null, '/mod/video/ajax_video_change_info.php', true);
		req.send( { usdie: usdie, video_id: video_id , video_info: video_info } );
		}
	}
// ==========

// video name & info
function video_nameinfo_save(video_id)
	{
	video_name = $("video_new_name").value;
	video_info = $("video_new_info").value;

	if (video_info == "Описание") { video_info = ""; }

	req.onreadystatechange = function()
		{
		if (req.readyState == 4)
			{
			$("videoNameForm1").style.display = "";
			$("videoNameForm2").style.display = "none";
			if (video_name == "") { video_name = "У этого видео ещё нет красивого названия"; }
			$("video_old_name").innerHTML = video_name;
			video_info = video_info.replace(/\n/g, '<br>');
			$("video_old_info").innerHTML = video_info;
			if (video_info == "") { $("video_old_info_link").style.display = "none"; } else { $("video_old_info_link").style.display = ""; }
			}
		}
	req.open(null, '/mod/video/ajax_video_change_nameinfo.php', true);
	req.send( { usdie: usdie, video_id: video_id, video_name: video_name , video_info: video_info } );
	}
// =================

// video del
function video_del(id, hash)
	{
	if (typeof hash == 'undefined') hash='';

	if (id)
		{
		if (id > 0)
			{
			req.onreadystatechange = function()
				{
				if (req.readyState == 4)
					{
					setTimeout("window.location = '"+req.responseJS.rez+"';",2000);
					alert_66('Видео удалено');
					}
				}
			req.open(null, '/mod/video/ajax_del_video.php', true);
			req.send( { id: id, hash: hash } );
			}
		}
	}
// =========

// video tag
function video_tag_showform()
	{
	if ($("video_tag_form").style.display == "")
		{
		$("video_tag_form").style.display = "none";
		}
		else
		{
		$("video_tag_form").style.display = "";
		$("video_tag_new").focus();
		}
	}

function video_tag_del(video_id, tag_id)
	{
	req.onreadystatechange = function()
		{
		if (req.readyState == 4)
			{
			if (req.responseJS.rez == 1)
				{
				$("video_tag_id_"+tag_id).style.display = "none";
				}
			}
		}
	req.open(null, '/mod/video/ajax_video_tag.php', true);
	req.send( { act: "del", usdie: usdie, video_id: video_id , tag_id: tag_id } );
	}

function video_tag_add(video_id)
	{
	tag_name = $("video_tag_new").value;
	if (tag_name != "")
		{
		req.onreadystatechange = function()
			{
			if (req.readyState == 4)
				{
				if (req.responseJS.rez == 1)
					{
					tagIdArray = req.responseJS.tag_id;
					tagNameArray = req.responseJS.tag_name;
					sizeTag = tagIdArray.length;
					for(a = 0; a < sizeTag; a = a + 1)
						{
						$("video_tag_new").value = "";
						$("video_tag_form").style.display = "none";
						$("video_tag_link").style.display = "";
						if ($("video_tag_cont").innerHTML == "") {add = " ";} else {add = ", ";}
						$("video_tag_cont").innerHTML += "<span style='white-space: nowrap;' id='video_tag_id_"+tagIdArray[a]+"'>"+add+"<a href='/video/user/"+req.responseJS.user_id+"/?tag="+tagNameArray[a]+"'>"+tagNameArray[a]+"</a> <img src='"+static66dez+"new_del_2.gif' width='8' height='8' alt='Удалить' title='Удалить' border='0' style='cursor: pointer;' onClick='video_tag_del("+video_id+","+tagIdArray[a]+");'>";
						}
					}
				}
			}
		req.open(null, '/mod/video/ajax_video_tag.php', true);
		req.send( { act: "add", usdie: usdie, video_id: video_id , tag_name: tag_name } );
		}
	}
// =========

// video show me
function v3_video_changeShowMe(video_id)
	{
	if (video_id != 0)
		{
		req.onreadystatechange = function()
			{
			if (req.readyState == 4)
				{
				if (req.responseJS.ch == 1)
					{
					$("showme").checked = true;
					}
					else
					{
					$("showme").checked = false;
					}
				}
			}
		req.open(null, '/mod/video/ajax_video_showme.php', true);
		req.send( { video_id: video_id } );
		}
	}
// =============

function photo_ff(album_id,user_id)
	{
	window.location = "http://"+mainDomain+"/photo/user/"+user_id+"/"+album_id+"/";
	}

// v3 find
var old_Text_se='';
function v3_findSelect ( fID , postPath , Method)
	{
	var FL = 0;
	FL = $("v3_findLast").innerHTML;
	$(FL).className = "v3_findMenu";
	$("v3_findID_"+fID).className = "v3_findMenu_active";
	$("v3_findLast").innerHTML = "v3_findID_"+fID;
	$("v3_findForm").action = postPath;
	$("v3_findForm").method = Method;

	if (fID == 'rabota')
		{
		$("v3_findText").name = "rabota_search[string]";
		}
		else
		{
		$("v3_findText").name = "search";
		}

	if (fID!='internet')
		{
		if (!search_no_clear) $("v3_findText").value='';
		}
	else
		{
		if (!search_no_clear) $("v3_findText").value = $("v3_TextSearch_Orig").value;
		}
	}
// =======


function v3_findOnsubmit ()
{
	var inputNode = document.getElementById( 'v3_findText' );

	var re = new RegExp( '^Например:[\s ]*', 'im' );

	if( inputNode.value.match( re ) === null )
		return true;

	inputNode.value = inputNode.value.replace( re, '' );

	return true;
}


// v3 mainMenu
var v3mainMenuSet = new Array();

function v3_mainMenuHover(key)
	{
	v3mainMenuSet[key] = $(key).className;
	$(key).className = "v3_mainMenu_hover";

	if ((v3mainMenuSet[key] == "v3_mainMenu_active") || (v3mainMenuSet[key] == "v3_mainMenu_active_hover"))
		{
		$(key).style.fontSize = "18px";
		$(key).style.fontWeight = "normal";
		}

	if ($(key+"_list"))
		{
		$(key+"_list").style.display = "";
		$(key+"_hack").style.width = ($(key).offsetWidth - 5);
		}
	}

function v3_mainMenuOut(key)
	{
	$(key).className = v3mainMenuSet[key];
	if ($(key+"_list"))
		{
		$(key+"_list").style.display = "none";
		}
	}

function v3_mainMenuList(act,id)
	{
	if (act == "hover")
		{
		$(id).style.backgroundColor = "#FC8100";
		//$(id).style.backgroundImage = "none";
		}
		else
		{
		$(id).style.backgroundColor = "#FFFFFF";
		}
	}
// ===========


// v3 mainMenu
var v4mainMenuSet = new Array();

function v4_mainMenuHover( key )
	{
	v4mainMenuSet[key] = $(key).className;
	$(key).className = "v4_mainMenu hover";

	if ((v4mainMenuSet[key] == "v4_mainMenu active") || (v4mainMenuSet[key] == "v3_mainMenu active_hover"))
	{
		//$(key).style.fontSize = "18px";
		//$(key).style.fontWeight = "normal";
	}

	if ($(key+"_list"))
		{
		if ($(key+"_list").style)
			$(key+"_list").style.display = "";
		//$(key+"_hack").style.width = ($(key).offsetWidth - 5);
		}
	}

function v4_mainMenuOut(key)
	{
		$(key).className = v4mainMenuSet[key];

		if ($(key+"_list"))
		{
			if ($(key+"_list").style)
				$(key+"_list").style.display = "none";
		}
	}

function v4_mainMenuList(act,id)
	{
	/*if (act == "hover")
		{
		$(id).style.backgroundColor = "#FC8100";
		$(id).style.backgroundImage = "none";
		}
		else
		{
		$(id).style.backgroundColor = "#FFFFFF";
		}*/
	}
// ===========

// v3 photo <-- ctrl -->
var isCtrl = false;
document.onkeyup = function(e)
	{
	if (!e) { e = event; }
	if ( window.event ) { keynum = e.keyCode; } else { keynum = e.which }
	if ( keynum == 17 ) { isCtrl = false; }
	}

document.onkeydown = function(e)
	{
	if (!e) { e = event; }
	if ( window.event ) { keynum = e.keyCode; } else { keynum = e.which }



	if ( keynum == 17 ) { isCtrl = true; }

	if (stop_ctrl_move) return;

	if ( keynum == 37 && isCtrl == true ) { if ( $("photo_ctrl_left")  && !$("photo_new_name") )  { window.location = $("photo_ctrl_left").href;  } }
	if ( keynum == 39 && isCtrl == true ) { if ( $("photo_ctrl_right") && !$("photo_new_name") )  { window.location = $("photo_ctrl_right").href; } }
	}
// =====================


function v3_rightFix()
	{
	   // if( auto_debug ) {
	        //alert('debug');
	    //    return false;
	    //}
	if ($("x66_first") || $("x66_second_1") || $("x66_second_2"))
		{
		xNUM = 999;
		if (document.all) { xNUM = 1020; }
		if (document.body.offsetWidth > xNUM)
			{

			if (typeof $("x66_first") != 'undefined' && typeof $("x66_first").style !='undefined' )    { $("x66_first").style.marginLeft = "10px"; }
			if (typeof $("x66_second_1") != 'undefined' && typeof $("x66_second_1").style !='undefined' ) { $("x66_second_1").style.marginLeft = "-250px"; }
			if (typeof $("x66_second_2") != 'undefined' && typeof $("x66_second_2").style !='undefined' ) { $("x66_second_2").style.marginLeft = "-250px"; }
			}
			else
			{
			if (typeof $("x66_first") != 'undefined' && typeof $("x66_first").style !='undefined' )    { $("x66_first").style.marginLeft = "8px"; }
			if (typeof $("x66_second_1") != 'undefined' && typeof $("x66_second_1").style !='undefined' ) { $("x66_second_1").style.marginLeft = "-253px"; }
			if (typeof $("x66_second_2") != 'undefined' && typeof $("x66_second_2").style !='undefined' ) { $("x66_second_2").style.marginLeft = "-253px"; }
			}
		}
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
// ================================


function setSpamUser(user_id, post_id, spamer, ahref)
	{
	var out = 2;
	if (typeof  ahref == 'undefined') out=1;
	
	if (user_id>0)
		{
		req.onreadystatechange = function()
			{
			if (req.readyState == 4)
				{
				if (req.responseJS.html)
					{				
					$(ahref).innerHTML = req.responseJS.html;	
					//location.reload();				
					}
				}
			}
			
		if (confirm('Вы уверены?'))
			{
			req.open(null, '/mod/profile/ajax_admin.php', true); 
			req.send( { action: 'spamer', user_id: user_id , post_id:post_id, spamer: spamer, out_type: out} );
			}
		}
	}	
	
function setUserGood(user_id, good, ahref, id_line)
	{
	var out = 2;
	if (typeof  ahref == 'undefined') out=1;

	if (user_id>0)
		{
		req.onreadystatechange = function()
			{
			if (req.readyState == 4)
				{
				if (req.responseJS.html=='' && req.responseJS.error=='')
					{				
					$(ahref).innerHTML = req.responseJS.html;	
					if (req.responseJS.id_line!='')
						{
						$(req.responseJS.id_line).style.backgroundColor=req.responseJS.adm_color;
						}
					}
				}
			}
			
		if (confirm('Вы уверены?'))
			{
			req.open(null, '/mod/profile/ajax_admin.php', true); 
			req.send( { action: 'set_good', user_id: user_id ,  good: good, out_type: out, id_line:id_line} );
			}
		}	
	}
		
	
function setBanUser(user_id, post_id, banned, ahref, id_line)
	{
	var out = 2;
	if (typeof  ahref == 'undefined') out=1;
	
	if (user_id>0)
		{
		req.onreadystatechange = function()
			{
			if (req.readyState == 4)
				{
				if (req.responseJS.html)
					{				
					$(ahref).innerHTML = req.responseJS.html;					
					//location.reload();
					}
				}
			}
			
		if (confirm('Вы уверены?'))
			{
			req.open(null, '/mod/profile/ajax_admin.php', true); 
			req.send( { action: 'banned', user_id: user_id , post_id:post_id, banned: banned, out_type: out, id_line:id_line} );
			}
		}
	}		

function setUserBlog2Main(user_id, post_id, to_main, ahref, id_line)
	{
	var out = 2;
	if (typeof  ahref == 'undefined') out=1;
	
	if (user_id>0 && post_id>0)
		{
		req.onreadystatechange = function()
			{
			if (req.readyState == 4)
				{
				if (req.responseJS.error == "")
					{
					if (req.responseJS.out_type==1) 
						{
						$("admin2main"+post_id).innerHTML = req.responseJS.html;
						}
					else
						{
						$(ahref).innerHTML = req.responseJS.html;	
						if (req.responseJS.id_line!='')
							{
							$(req.responseJS.id_line).style.backgroundColor=req.responseJS.adm_color;
							}				
						}
					}
				}
			}

		req.open(null, '/mod/profile/ajax_admin.php', true); 
		req.send( { action: 'tomain', user_id: user_id , post_id: post_id, to_main: to_main, out_type: out, id_line:id_line} );
		}
	}
	
function setClubBlog2Main(user_id, post_id, to_main, ahref,id_line)
	{
	var out = 2;
	if (typeof  ahref == 'undefined') out=1;
			
	if (user_id>0 && post_id>0)
		{
		req.onreadystatechange = function()
			{
			if (req.readyState == 4)
				{
				if (req.responseJS.out_type==1) 
					{
					$("admin2main"+post_id).innerHTML = req.responseJS.html;
					}
				else
					{
					$(ahref).innerHTML = req.responseJS.html;	
					//location.reload();							
					}				
				}
			}

		req.open(null, '/mod/community/ajax_admin.php', true);
		req.send( { action: 'tomain', user_id: user_id , post_id: post_id, to_main: to_main, out_type: out, id_line:id_line} );
		}
	}	

function setUserBlog2Lenta(user_id, post_id, to_lenta, ahref, id_line)
	{
	var out = 2;
	if (typeof  ahref == 'undefined') out=1;
			
	if (user_id>0 && post_id>0)
		{
		req.onreadystatechange = function()
			{
			if (req.readyState == 4)
				{
				if (req.responseJS.error == "")
					{
					if (req.responseJS.out_type==1) 
						$("admin2lenta"+post_id).innerHTML = req.responseJS.html;
					else
						{
						$(ahref).innerHTML = req.responseJS.html;	
						//location.reload();	
						}				
					}
				}
			}

		req.open(null, '/mod/profile/ajax_admin.php', true);
		req.send( { action: 'tolenta', user_id: user_id , post_id: post_id, to_lenta: to_lenta, out_type: out, id_line:id_line } );
		}
	}

/*==========================================================*/










function setPhoto2Main(user_id, album_id, photo_id, to_main)
	{
	if (user_id>0 && photo_id>0)
		{
		req.onreadystatechange = function()
			{
			if (req.readyState == 4)
				{
				if (req.responseJS.error == "")
					{
					$("admin2main").innerHTML = req.responseJS.html;
					}
				}
			}

		req.open(null, '/mod/photo/ajax_admin.php', true);
		req.send( { action: 'tomain', user_id: user_id , album_id: album_id, photo_id: photo_id, to_main: to_main} );
		}
	}
		
	
function setUserBlogTheme(post_id)
	{
	var cbs	= new Array();
	var obj = $("post_id_"+post_id+"_cbs");
	if (obj)
		{
		var els = obj.getElementsByTagName('input');
		if (els.length>0)
			{
			for(var i=0; i<els.length; i++)
				{
				if (els[i].className=='cbs' && els[i].checked)
					{
					cbs.push(els[i].value);
					}
				}
			}
		}

	//if (cbs.length>0)
		{
		cbs = cbs.join(',');

		req.onreadystatechange = function()
			{
			if (req.readyState == 4)
				{
				if (req.responseJS.error == "")
					{
					$("ok_"+post_id+"_cbs").innerHTML = 'Выполнено';
					}
				}
			}

		req.open(null, '/mod/profile/ajax_admin.php', true);
		req.send( { action: 'thema', post_id: post_id, cbs: cbs} );
		}
	}





	function seo_placer(fromid, toid) {


  		if (document.getElementById(fromid) && document.getElementById(toid)) {
  			//нормально засовываем текст
  			document.getElementById(toid).innerHTML = document.getElementById(fromid).innerHTML;

  		} else {
  			//создать такой элемент в seohelpdiv'e
  			jQuery("#seohelpdiv").append("<div id='"+ toid +"'>"+ document.getElementById(fromid).innerHTML +"</div>");

  		}

  		document.getElementById(fromid).innerHTML = '';
  	  document.getElementById(fromid).style.display = "none";

  }



/**
 * autoResizer
 *
 * Using:
 * var someName = new autoResizer;
 * someName.init({frame: 'some.jQuery#selector', min: 100, max: 150});
 * min - minimal child width
 * max - maximal child width
 */

function autoResizer() { }
autoResizer.prototype = {

    minSize: 100,
    maxSize: 150,
	doHide: true,
	doResize: true,
	backwards: false,
	defaultDisplay: 'block',
	lines: 1,
	ignoreOpera: false,

	debug: false,

    frame: false,
    blocks: new Array(),
    lastDiffCount: -1,

    init: function(options) {
        if(!options.frame) return;
        this.frame = jQuery(options.frame).get(0);
        if(!this.frame) return;
        this.blocks = jQuery(this.frame).children();
        if(!this.blocks.length) return;
        if(typeof options.min != 'undefined')
			this.minSize = options.min;
        if(typeof options.max != 'undefined')
			this.maxSize = options.max;
		if(typeof options.doHide != 'undefined')
			this.doHide = options.doHide;
		if(typeof options.doResize != 'undefined')
			this.doResize = options.doResize;
		if(typeof options.backwards != 'undefined')
			this.backwards = options.backwards;
		if(typeof options.lines != 'undefined')
			this.lines = options.lines;
		if(typeof options.debug != 'undefined')
			this.debug = options.debug;
		if(typeof options.ignoreOpera != 'undefined')
			this.ignoreOpera = options.ignoreOpera;
		this.defaultDisplay = typeof(options.defaultDisplay) == 'undefined' ? this.defaultDisplay : options.defaultDisplay;
        var resizer = this;
        if(!jQuery.browser.opera || this.ignoreOpera) {
            jQuery(window).resize(function() { resizer.resize(); });
            resizer.resize();
        }
        else {
            jQuery(window).resize(function() { resizer.resizeOpera(); });
            resizer.resizeOpera();
        }
    },

    setBlocksWidth: function(blocksCount) {
        var minWidth = (100 / blocksCount);
        for(var i = 0; i < blocksCount; i++) {
			if(!this.blocks[i])
			  break;
            this.blocks[i].style.width = minWidth + '%';
        }
        if(jQuery.browser.msie && (jQuery.browser.version == 6 || 7))
            if (typeof this.blocks[i - 1] != 'undefined')
            	this.blocks[i - 1].style.width = (minWidth - 0.2) + '%';
    },

    setBlocksWidthOpera: function(blocksCount) {
        var minWidth = Math.floor(100 / blocksCount);
        var diff = 100 - minWidth * blocksCount;
        for(var i = 0; i < blocksCount; i++) {
            this.blocks[i].style.width = minWidth + (diff > 0 ? 1 : 0) + '%';
            if(diff > 0) diff--;
        }
    },

    resize: function() {
        var diff, diffCount;
        diff = Math.floor(this.blocks.length / this.lines) * this.maxSize - parseInt(this.frame.clientWidth);
        diffCount = Math.floor(diff / this.maxSize) * this.lines;
        if(this.lastDiffCount == diffCount) return;
        this.lastDiffCount = diffCount;
        if(this.doHide) for(var i = 0; i < this.blocks.length; i++) {
            if(i >= (this.blocks.length - diffCount))
                this.blocks[!this.backwards ? i : (this.blocks.length - 1 -i)].style.display = 'none';
            else
                this.blocks[!this.backwards ? i : (this.blocks.length - 1 -i)].style.display = this.defaultDisplay;
        }
        if(this.doResize) this.setBlocksWidth(this.blocks.length - diffCount);
    },

    resizeOpera: function() {
        var diff, diffCount;
        diff = Math.floor(this.blocks.length / this.lines) * this.maxSize - parseInt(this.frame.clientWidth);
        diffCount = Math.floor(diff / this.maxSize) * this.lines - this.lines;
        if(this.lastDiffCount == diffCount) return;
        this.lastDiffCount = diffCount;
        if(this.doHide) for(var i = 0; i < this.blocks.length; i++) {
            if(i >= (this.blocks.length - diffCount))
                this.blocks[!this.backwards ? i : (this.blocks.length - 1 -i)].style.display = 'none';
            else
                this.blocks[!this.backwards ? i : (this.blocks.length - 1 -i)].style.display = this.defaultDisplay;
        }
        if(this.doResize) this.setBlocksWidthOpera(this.blocks.length - diffCount);
    }
}

/**
 * Fires 'change' event on document.location
 *
 * Using:
 * locationChecker.init()
 */
var locationChecker = {
	location: {
		href: window.location.href,
		hash: window.location.hash
	},

	prevLocation: {
		href: '',
		hash: ''
	},

	interval: 100,

	init: function() {
		if(window.location.triggered) return;
		var checker = this;
		setInterval(function() { checker.check() }, this.interval);
	},

	check: function() {
		if(this.location.href == window.location.href) return;
		this.prevLocation.href = this.location.href;
		this.prevLocation.hash = this.location.href;
		this.location.href = window.location.href;
		this.location.hash = window.location.hash;
		jQuery(window.location).trigger('change', {
			location: {
				href: this.location.href,
				hash: this.location.hash
			},
			prevLocation: {
				href: this.prevLocation.href,
				hash: this.prevLocation.hash
			}
		});
		window.location.triggered = true;
	}
};


/**
 * Adds autosizing and scrolling for afisha timetable
 *
 * Using:
 * var cinemaTimetable = new afishaTimetable;
 * cinemaTimetable.init({
 *     timetable: 'some.jQuery#selector',
 *     resizeCompensation: 512,
 *     scrollCompensation: 75,
 *     minWindowWidth: 980,
 *     maxWindowWidth: 1350
 *  });
 */
function afishaTimetable() {}
afishaTimetable.prototype = {

	timetable: false,

	layout: {
	   scrollCompensation: 75,
	   resizeCompensation: 512,
	   minWindowWidth: 980,
	   maxWindowWidth: 1350
	},

	init: function(options) {
	   if(typeof(options.timetable) == 'undefined') return;
	   this.layout.scrollCompensation = typeof(options.scrollCompensation) == 'undefined' ? this.layout.scrollCompensation : options.scrollCompensation;
	   this.layout.resizeCompensation = typeof(options.resizeCompensation) == 'undefined' ? this.layout.resizeCompensation : options.resizeCompensation;
	   this.layout.minWindowWidth = typeof(options.minWindowWidth) == 'undefined' ? this.layout.minWindowWidth : options.minWindowWidth;
	   this.layout.maxWindowWidth = typeof(options.maxWindowWidth) == 'undefined' ? this.layout.maxWindowWidth : options.maxWindowWidth;

	   var $temp = jQuery(options.timetable);
	   if(!$temp.length) return;
	   this.timetable = $temp.get(0);

	   $temp = jQuery(options.timetableFrame);

	   var resizer = this;
	   jQuery(window).resize(function() { resizer.resize(); });
	   this.resize();
	   jQuery(window.location).change(function() { resizer.scroll(); });
	   jQuery(function() { resizer.scroll(); });

	   jQuery(this.timetable).mousewheel(function(event, delta) {
			if(resizer.timetable.scrollWidth < resizer.timetable.clientWidth)
				return null;
			if(delta > 0 && resizer.timetable.scrollLeft > 0) {
				resizer.timetable.scrollLeft-= 20;
				return false;
			}
			else if(delta < 0 && resizer.timetable.scrollLeft < (resizer.timetable.scrollWidth - resizer.timetable.clientWidth)) {
				resizer.timetable.scrollLeft+= 20;
				return false;
			}
			return null;
	   });
	},

	resize: function() {
	   if(document.body.clientWidth < this.layout.minWindowWidth) var resizeTo = this.layout.minWindowWidth;
	   else if(document.body.clientWidth >= this.layout.maxWindowWidth) var resizeTo = this.layout.maxWindowWidth;
	   else var resizeTo = document.body.clientWidth;
	   if(this.timetable.style.width == resizeTo - this.layout.resizeCompensation) return;
	   this.timetable.style.width = resizeTo - this.layout.resizeCompensation;
	},

	scroll: function() {
	   if(!document.location.hash) return;
	   var $marker = jQuery(document.location.hash);
	   if(!$marker.length) return;
	   var scrollTo = jQuery.browser.msie || jQuery.browser.safari ? parseInt($marker.offset().left) / 2 : $marker.offset().left;
	   this.timetable.scrollLeft = scrollTo - this.layout.scrollCompensation;
	}
};


// MD5

var hex_chr = "0123456789abcdef";
function rhex(num)
{
  str = "";
  for(j = 0; j <= 3; j++)
    str += hex_chr.charAt((num >> (j * 8 + 4)) & 0x0F) +
           hex_chr.charAt((num >> (j * 8)) & 0x0F);
  return str;
}

/*
 * Convert a string to a sequence of 16-word blocks, stored as an array.
 * Append padding bits and the length, as described in the MD5 standard.
 */
function str2blks_MD5(str)
{
  nblk = ((str.length + 8) >> 6) + 1;
  blks = new Array(nblk * 16);
  for(i = 0; i < nblk * 16; i++) blks[i] = 0;
  for(i = 0; i < str.length; i++)
    blks[i >> 2] |= str.charCodeAt(i) << ((i % 4) * 8);
  blks[i >> 2] |= 0x80 << ((i % 4) * 8);
  blks[nblk * 16 - 2] = str.length * 8;
  return blks;
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function add(x, y)
{
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}

/*
 * Bitwise rotate a 32-bit number to the left
 */
function rol(num, cnt)
{
  return (num << cnt) | (num >>> (32 - cnt));
}

/*
 * These functions implement the basic operation for each round of the
 * algorithm.
 */
function cmn(q, a, b, x, s, t)
{
  return add(rol(add(add(a, q), add(x, t)), s), b);
}
function ff(a, b, c, d, x, s, t)
{
  return cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
function gg(a, b, c, d, x, s, t)
{
  return cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
function hh(a, b, c, d, x, s, t)
{
  return cmn(b ^ c ^ d, a, b, x, s, t);
}
function ii(a, b, c, d, x, s, t)
{
  return cmn(c ^ (b | (~d)), a, b, x, s, t);
}


function calcMD5(str)
{
  x = str2blks_MD5(str);
  a =  1732584193;
  b = -271733879;
  c = -1732584194;
  d =  271733878;

  for(i = 0; i < x.length; i += 16)
  {
    olda = a;
    oldb = b;
    oldc = c;
    oldd = d;

    a = ff(a, b, c, d, x[i+ 0], 7 , -680876936);
    d = ff(d, a, b, c, x[i+ 1], 12, -389564586);
    c = ff(c, d, a, b, x[i+ 2], 17,  606105819);
    b = ff(b, c, d, a, x[i+ 3], 22, -1044525330);
    a = ff(a, b, c, d, x[i+ 4], 7 , -176418897);
    d = ff(d, a, b, c, x[i+ 5], 12,  1200080426);
    c = ff(c, d, a, b, x[i+ 6], 17, -1473231341);
    b = ff(b, c, d, a, x[i+ 7], 22, -45705983);
    a = ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
    d = ff(d, a, b, c, x[i+ 9], 12, -1958414417);
    c = ff(c, d, a, b, x[i+10], 17, -42063);
    b = ff(b, c, d, a, x[i+11], 22, -1990404162);
    a = ff(a, b, c, d, x[i+12], 7 ,  1804603682);
    d = ff(d, a, b, c, x[i+13], 12, -40341101);
    c = ff(c, d, a, b, x[i+14], 17, -1502002290);
    b = ff(b, c, d, a, x[i+15], 22,  1236535329);

    a = gg(a, b, c, d, x[i+ 1], 5 , -165796510);
    d = gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
    c = gg(c, d, a, b, x[i+11], 14,  643717713);
    b = gg(b, c, d, a, x[i+ 0], 20, -373897302);
    a = gg(a, b, c, d, x[i+ 5], 5 , -701558691);
    d = gg(d, a, b, c, x[i+10], 9 ,  38016083);
    c = gg(c, d, a, b, x[i+15], 14, -660478335);
    b = gg(b, c, d, a, x[i+ 4], 20, -405537848);
    a = gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
    d = gg(d, a, b, c, x[i+14], 9 , -1019803690);
    c = gg(c, d, a, b, x[i+ 3], 14, -187363961);
    b = gg(b, c, d, a, x[i+ 8], 20,  1163531501);
    a = gg(a, b, c, d, x[i+13], 5 , -1444681467);
    d = gg(d, a, b, c, x[i+ 2], 9 , -51403784);
    c = gg(c, d, a, b, x[i+ 7], 14,  1735328473);
    b = gg(b, c, d, a, x[i+12], 20, -1926607734);

    a = hh(a, b, c, d, x[i+ 5], 4 , -378558);
    d = hh(d, a, b, c, x[i+ 8], 11, -2022574463);
    c = hh(c, d, a, b, x[i+11], 16,  1839030562);
    b = hh(b, c, d, a, x[i+14], 23, -35309556);
    a = hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
    d = hh(d, a, b, c, x[i+ 4], 11,  1272893353);
    c = hh(c, d, a, b, x[i+ 7], 16, -155497632);
    b = hh(b, c, d, a, x[i+10], 23, -1094730640);
    a = hh(a, b, c, d, x[i+13], 4 ,  681279174);
    d = hh(d, a, b, c, x[i+ 0], 11, -358537222);
    c = hh(c, d, a, b, x[i+ 3], 16, -722521979);
    b = hh(b, c, d, a, x[i+ 6], 23,  76029189);
    a = hh(a, b, c, d, x[i+ 9], 4 , -640364487);
    d = hh(d, a, b, c, x[i+12], 11, -421815835);
    c = hh(c, d, a, b, x[i+15], 16,  530742520);
    b = hh(b, c, d, a, x[i+ 2], 23, -995338651);

    a = ii(a, b, c, d, x[i+ 0], 6 , -198630844);
    d = ii(d, a, b, c, x[i+ 7], 10,  1126891415);
    c = ii(c, d, a, b, x[i+14], 15, -1416354905);
    b = ii(b, c, d, a, x[i+ 5], 21, -57434055);
    a = ii(a, b, c, d, x[i+12], 6 ,  1700485571);
    d = ii(d, a, b, c, x[i+ 3], 10, -1894986606);
    c = ii(c, d, a, b, x[i+10], 15, -1051523);
    b = ii(b, c, d, a, x[i+ 1], 21, -2054922799);
    a = ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
    d = ii(d, a, b, c, x[i+15], 10, -30611744);
    c = ii(c, d, a, b, x[i+ 6], 15, -1560198380);
    b = ii(b, c, d, a, x[i+13], 21,  1309151649);
    a = ii(a, b, c, d, x[i+ 4], 6 , -145523070);
    d = ii(d, a, b, c, x[i+11], 10, -1120210379);
    c = ii(c, d, a, b, x[i+ 2], 15,  718787259);
    b = ii(b, c, d, a, x[i+ 9], 21, -343485551);

    a = add(a, olda);
    b = add(b, oldb);
    c = add(c, oldc);
    d = add(d, oldd);
  }
  return rhex(a) + rhex(b) + rhex(c) + rhex(d);
}

var domWrite = (function(){               // by Frank Thuerigen
 // private 
 // (probably helper functions for code sanitizing etc.)
 
 return function( pDiv, pSrc ){           // public
 
  var e = ( typeof pDiv == 'string' ? 
            document.getElementById( pDiv ) :
            pDiv ),
      s = document.createElement('script'),
      dw = document.write,              // save document.write()
      buf = '',                         // output string buffer
      oldbuf = '',                      // output string buffer
      t = '',                           // timeout
      ms = 100;                         // milliseconds
      
  function evals( pString ){            // eval embedded script tags in HTML code
   var scripts = [],
       script,
       regexp = /<script[^>]*>([\s\S]*?)<\/script>/gi;
   while ((script = regexp.exec(pString))) scripts.push(script[1]);
   scripts = scripts.join('\n');
   if (scripts) eval(scripts);
   }
   
  function exec(){                      // output & restore document.write()
   if ( buf !== oldbuf ){
    oldbuf = buf;
    t=window.setTimeout( exec, ms );    // repeat test timeout
    }
   else {
    e.innerHTML = buf;                  // write output to element
    evals( buf );                       // tbd: correct eval sequence if multiple scripts
    document.write=dw;                  // restore document.write()
    }
   }
   
  document.write = function( pString ){ // overload document.write()
   window.clearTimeout(t);
   oldbuf = buf;
   //buf += pString;                        // add string to buffer
   buf = pString;   //FUCKING HACK! now NO ADDING! only one document.write will work!
   t=window.setTimeout( exec, ms );
   }

  s.setAttribute('language','javascript');
  s.setAttribute('type','text/javascript');
  s.setAttribute('src', pSrc);
  document.getElementsByTagName('head')[0].appendChild(s);
  }
 })();

