function chat66_addmessage()
    {
    text = $("chat_text").value;
    tmp_text = text.replace(/\r\n|\r|\n/g,"");
    text = text.replace(/\r\n|\r|\n/g,"<br>");

    if ((tmp_text != "") && (!chat66_ajax_active))
        {
        chat66_ajax_active = true;

        jQuery.ajax({
            type: "POST",
            url: '/mod/chat/ajax_add_post.php',
            data: { usdie: usdie, user_id: user_chat_active_user_id, text: text },
            dataType: 'json'
        }).done(function( msg ) {
            console.log('added message. result is '+msg.success+'. '+msg.message);
            chat66_ajax_active = false;
            $("chat_text").value = "";
            $("chat_text").focus();
            if ($("chat_content_"+user_chat_active_user_id))
                {
                $("chat_content_"+user_chat_active_user_id).innerHTML += msg.text;
                $("chat_content_"+user_chat_active_user_id).scrollTop = $("chat_content_"+user_chat_active_user_id).scrollHeight;
                }
            $("chat_text").style.height = "40px";
        });
        }
}

function chat66_add_user()
{
    user_name = $("useradd").value;
    if ((user_name != "") && (user_name != "пользователь..."))
    {
        jQuery.ajax({
            type: "POST",
            url: '/mod/chat/ajax_add_user.php',
            data: { usdie: usdie, user_name: user_name },
            dataType: 'json'
        }).done(function( msg ) {
            console.log('added user '+msg.user_id);

            if (msg.rez == 'nouser') {alert_66("Нет такого пользователя");}
            if (msg.rez == 'its_you') {alert_66("Не стоит разговаривать сам с собой, другие не поймут"); $("useradd").focus();}
            if (msg.rez == 'user_add')
            {
                $("useradd").value = "пользователь...";
                $("useradd").style.color = "#808080";

                if (msg.onoff == 1) {on_off = "online.gif";} else {on_off = "offline.gif";}

                new_user_add =  "<div id='chat66_all_"+msg.user_id+"'>"
                    +"<div class='chat66_block_on' style='height: 15px; background-image: url("+static66dez+""+on_off+");' id='chat66_block_"+msg.user_id+"' onclick='chat66_clickblock("+msg.user_id+");'>"
                        +"<div style='width: 142px; float: left;'><a href='#' onClick='chat66_active_user("+msg.user_id+"); return false;'>"+user_name+"</a></div>"
                            +"<div style='width: 60px; font-weight: normal; float: left;' id='chat66_icon_"+msg.user_id+"'>"
                                +"<a href='http://"+mainDomain+"/user/"+msg.user_id+"/' style='margin-right: 3px;'><img src='"+static66dez+"chat_profile.gif' width='18' height='15' alt='' title='' border='0' onmouseover='userinfo_show("+msg.user_id+",event,\""+user_name+"\","+Math.random()+"); return false;' onmouseout='userinfo_hide();'></a>"
                                +"<a href='http://"+mainDomain+"/chat/history/"+msg.user_id+"/'><img src='"+static66dez+"chat_history.gif' width='18' height='15' alt='История сообщений' title='История сообщений' border='0'></a>"
                            +"</div>"
                        +"<div style='padding-top: 3px;'><a href='#' onClick='chat66_del_user("+msg.user_id+"); return false;'><img src='"+static66dez+"button_del_on.gif' width='10' height='10' alt='Закрыть' title='Закрыть' border='0' id='chat66_block_img_"+msg.user_id+"'></a></div>"
                   +"</div>"
                    +"<div class='chat66_active_block' id='chat66_active_block_"+msg.user_id+"' onclick='chat66_clickblock("+msg.user_id+");'><div class='chat66_active_inner' id='chat_content_"+msg.user_id+"' style='height: 1px; background-color: #FFFFFF;'>&nbsp;</div></div>"
                    +"<div class='chat66_post_form' id='chat66_post_form_"+msg.user_id+"' onclick='chat66_clickblock("+msg.user_id+");'>"
                        +"<form action='' method='post' style='padding: 0px; margin: 0px;' onSubmit='chat66_addmessage(); return false;'>"
                            //+"<input type='text' name='chat_text' id='chat_text' style='width: 270px; height: 22px; margin-left: 5px;'>"
                            +"<textarea name='chat_text' id='chat_text' style='width: 205px; height: 40px; margin-left: 5px;' onkeydown='findenter(event);'></textarea>"
                            +"<input type='image' value='say' name='chat_say' id='chat_say' src='"+static66dez+"button_say.gif' style='position: relative; top: -1px; _top: 1px; _left: 5px;'>"
                        +"</form>"
                    +"</div>"
                +"</div>";

                if (user_chat_active_user_id != 0)
                {
                    // убираем старый блок
                    ccc[user_chat_active_user_id] = $("chat_content_"+user_chat_active_user_id);
                    $("chat66_all_"+user_chat_active_user_id).removeChild($("chat66_post_form_"+user_chat_active_user_id));
                    chat66_close(user_chat_active_user_id,"");
                }

                $("chat66_main").innerHTML = new_user_add + $("chat66_main").innerHTML;

                // раскрываем место под чат
                cco[msg.user_id] = $("chat_content_"+msg.user_id);
                chat66_open(msg.user_id);

                user_chat_active_user_id = msg.user_id;
                chat66_get_text(1);
                $("chat_text").focus();

                $('chat_content_'+msg.user_id).innerHTML = msg.history;
            }

            if (msg.rez == 'user_isset')
            {
                if (user_chat_active_user_id != msg.user_id)
                {
                    chat66_active_user(msg.user_id);
                }
                else
                {
                    $("chat_text").focus();
                }
            }
        });

    }
    else
    {
        alert_66("Введите имя пользователя");
    }
}

function chat66_del_user(user_id)
{
    jQuery.ajax({
        type: "POST",
        url: '/mod/chat/ajax_del_user.php',
        data: { usdie: usdie, user_id: user_id },
        dataType: 'json'
    }).done(function( msg ) {
        console.log('deleted user '+user_id);
                
        if (user_chat_active_user_id != user_id) {
            // если открыта другая вкладка
            $("chat66_main").removeChild($("chat66_all_"+user_id));
        }
        else {
            // если открыта эта вкладка
            ccc[user_id] = $("chat_content_"+user_id);
            $("chat66_all_"+user_id).removeChild($("chat66_post_form_"+user_id));
            chat66_close(user_id,"destroy");
            user_chat_active_user_id = 0;
            chat66_reloading = 0;
        }
    });
}

function chat66_active_user(user_id)
{
    if (!chat66_ajax_active) {
        chat66_ajax_active = true;

        jQuery.ajax({
            type: "POST",
            url: '/mod/chat/ajax_active_user.php',
            dataType:"json",
            data: { usdie: usdie, user_id: user_id }
        }).done(function( msg ) {
            if (msg.text_for_open != "") {
                chat66_text_for_open = msg.text_for_open;
            }

            if (user_chat_active_user_id != user_id) {
                if (user_chat_active_user_id != 0) {
                    // убираем старый блок
                    ccc[user_chat_active_user_id] = $("chat_content_"+user_chat_active_user_id);
                    $("chat66_all_"+user_chat_active_user_id).removeChild($("chat66_post_form_"+user_chat_active_user_id));
                    ccc[user_chat_active_user_id].style.height = (parseInt(ccc[user_chat_active_user_id].style.height) - 2)+"px";
                    chat66_close(user_chat_active_user_id,"");

                    // создаём новое место чата
                    chat66_create_block(user_id);
                    if ($("chat66_newmail_"+user_id)) {$("chat66_newmail_"+user_id).style.display = "none";}

                    // раскрываем место под чат
                    cco[user_id] = $("chat_content_"+user_id);

                    chat66_open(user_id,chat66_text_for_open);
                    // ===================
                }
                else {
                    chat66_create_block(user_id);
                    if ($("chat66_newmail_"+user_id)) {$("chat66_newmail_"+user_id).style.display = "none";}

                    cco[user_id] = $("chat_content_"+user_id);

                    chat66_open(user_id,chat66_text_for_open);
                }
            }
            else if(user_chat_active_user_id==user_id) {
                // сворачивание вкладки
                chat66_reloading = 0;
                ccc[user_chat_active_user_id] = $("chat_content_"+user_chat_active_user_id);
                $("chat66_all_"+user_chat_active_user_id).removeChild($("chat66_post_form_"+user_chat_active_user_id));
                chat66_close(user_chat_active_user_id,"");
                user_chat_active_user_id = 0;
            }
        });
    }
}

function chat66_get_text(is_down)
{
    if (chat66_first_start && user_chat_active_user_id>0) {
        chat66_get_history_text(is_down);
        chat66_first_start=false;
    }
    else {
        if (chat66_my_user_id) {
            var s = String(str_pad(String(chat66_my_user_id), 3, "0", 'STR_PAD_LEFT'));
            var a1=a2=a3='';

            a1 = s.substr(0,1);
            a2 = s.substr(1,1);
            a3 = s.substr(2,1);

            if ((typeof a1 != 'undefined') && (typeof a2 != 'undefined') && (typeof a3 != 'undefined')) {
                var b = (a1+'/'+a2+'/'+a3).toString();

                jQuery.ajax({
                    type: "GET",
                    url: static66chat+b+'/'+chat66_my_user_id+'.txt?callback=?',
                    dataType:"jsonp",
                    jsonpCallback: 'chat_callback'
                }).done(function( msg ) {
                    var from_user_id = msg.js.from_user_id;
                    if (from_user_id) {
                        if (!$("chat66_block_"+from_user_id)) {
                            chat66_get_new_block();
                        }
                        else {
                            chat66_newmessage();
                            chat66_get_history_text(is_down);
                        }
                    }
                });
            }
        }
    }
}

function str_pad( input, pad_length, pad_string, pad_type )
    {
    var half = '', pad_to_go;

    var str_pad_repeater = function(s, len){
        var collect = '', i;

        while(collect.length < len) collect += s;
        collect = collect.substr(0,len);

        return collect;
    };

    if (pad_type != 'STR_PAD_LEFT' && pad_type != 'STR_PAD_RIGHT' && pad_type != 'STR_PAD_BOTH') { pad_type = 'STR_PAD_RIGHT'; }
    if ((pad_to_go = pad_length - input.length) > 0)
        {
        if (pad_type == 'STR_PAD_LEFT') { input = str_pad_repeater(pad_string, pad_to_go) + input; }
        else if (pad_type == 'STR_PAD_RIGHT') { input = input + str_pad_repeater(pad_string, pad_to_go); }
        else if (pad_type == 'STR_PAD_BOTH')
            {
            half = str_pad_repeater(pad_string, Math.ceil(pad_to_go/2));
            input = half + input + half;
            input = input.substr(0, pad_length);
            }
        }

    return input;
    }

function chat66_get_history_text(is_down)
{
    newget = 1;
    if ($("chat_content_"+user_chat_active_user_id))
        {
        if ($("chat_content_"+user_chat_active_user_id).innerHTML != "&nbsp;") {newget = 0;}
        if ($("chat_content_"+user_chat_active_user_id).innerHTML == " ") {newget = 1;}
        }

    jQuery.ajax({
        type: "POST",
        url: '/mod/chat/ajax_get_text.php',
        data: { usdie: usdie, my_user_id: chat66_my_user_id, user_id: user_chat_active_user_id, newget: newget },
        dataType: 'json'
    }).done(function( msg ) {
        console.log('got history . result is '+msg.success+'. '+msg.message);

        if(msg.refreshz==1)
        {
            if ($("chat_content_"+user_chat_active_user_id))
            {
                $("chat_content_"+user_chat_active_user_id).innerHTML = msg.text;

                if ($("chat_content_"+user_chat_active_user_id))
                    $("chat_content_"+user_chat_active_user_id).scrollTop = $("chat_content_"+user_chat_active_user_id).scrollHeight;
            }
        }
    });

}

function chat66_open(user_id, inner_text)
    {
    if (typeof  inner_text =='undefined')  inner_text = '';

    var chat_content = inner_text!="" ? inner_text : chat66_text_for_open;

    H = parseInt(cco[user_id].style.height);
    if (H < 200)
        {
        cco[user_id].style.height = (H + 20)+"px";
        setTimeout("chat66_open("+user_id+")", 1);
        }
        else
        {
        chat66_ajax_active = false;
        cco[user_id].style.height = "200px";
        user_chat_active_user_id = user_id;

        if (chat66_text_for_open != "")
            {
            $("chat_content_"+user_chat_active_user_id).innerHTML = chat_content;
            chat66_text_for_open = "";
            }
            else
            {
            chat66_get_text(1);
            }

        $("chat_content_"+user_chat_active_user_id).scrollTop = $("chat_content_"+user_chat_active_user_id).scrollHeight;

        chat66_reloading = 1;
        $("chat_text").focus();
        }
    }

function chat66_close(user_id,act)
{
    H = parseInt(ccc[user_id].style.height);
    if (H > 1) {
        if ((H - 20) < 1) {
            ccc[user_id].style.height = "1px";
            setTimeout("chat66_close("+user_id+",'"+act+"')", 1);
        }
        else {
            ccc[user_id].style.height = (H - 20)+"px";
            setTimeout("chat66_close("+user_id+",'"+act+"')", 1);
        }
    }
    else
    {
        chat66_ajax_active = false;
        chat66_panel_off(user_id);
        if (act == "destroy") {
            // если пользователя удалили то и удаляем вкладку
            $("chat66_main").removeChild($("chat66_all_"+user_id));
        }
    }
}

function chat66_create_block(user_id)
    {
    if ($("chat66_block_"+user_id))
        {
        // выстраиваем новый
        $("chat66_block_"+user_id).className = "chat66_block_on";
        $("chat66_block_"+user_id).style.height = "15px";
        $("chat66_block_img_"+user_id).src = ""+static66dez+"button_del_on.gif";
        $("chat66_block_img_"+user_id).style.width = "10px";
        $("chat66_block_img_"+user_id).style.height = "10px";
        //$("chat66_block_img_"+user_id).onclick = function() {chat66_clickblock(req.responseJS.user_id);}
        // =================

        $("chat66_icon_"+user_id).innerHTML = "<a href='http://"+mainDomain+"/user/"+user_id+"/'><img src='"+static66dez+"chat_profile.gif' width='18' height='15' alt='' title='' border='0' onmouseover='userinfo_show("+user_id+",event,\"\","+Math.random()+"); return false;' onmouseout='userinfo_hide();'></a> "
                                             +"<a href='http://"+mainDomain+"/chat/history/"+user_id+"/'><img src='"+static66dez+"chat_history.gif' width='18' height='15' alt='История сообщений' title='История сообщений' border='0'></a>";


        nod = document.createElement("div");
        nod.setAttribute("id","chat66_active_block_"+user_id);
        nod.className = "chat66_active_block";
        nod.onclick = function() {chat66_clickblock(user_id);}
        $("chat66_all_"+user_id).appendChild(nod);
        $("chat66_active_block_"+user_id).innerHTML = "<div class='chat66_active_inner' id='chat_content_"+user_id+"' style='height: 1px; background-color: #FFFFFF;'>&nbsp;</div>";

        nod = document.createElement("div");
        nod.setAttribute("id","chat66_post_form_"+user_id);
        nod.className = "chat66_post_form";
        nod.onclick = function() {chat66_clickblock(user_id);}
        $("chat66_all_"+user_id).appendChild(nod);

        $("chat66_post_form_"+user_id).innerHTML = "<form action='' method='post' style='padding: 0px; margin: 0px;' onSubmit='chat66_addmessage(); return false;'>"
                                                    //+"<input type='text' name='chat_text' id='chat_text' style='width: 270px; height: 22px; margin-left: 5px;'>"
                                                    +"<textarea name='chat_text' id='chat_text' style='width: 205px; height: 40px; margin-left: 5px;' onkeydown='findenter(event);'></textarea>"
                                                    +"<input type='image' value='say' name='chat_say' id='chat_say' src='"+static66dez+"button_say.gif' style='position: relative; top: -1px; _top: 1px; _left: 5px;'>"
                                                +"</form>";
        }
    }

function chat66_panel_off(user_id)
    {
    $("chat66_block_"+user_id).className = "chat66_block";
    $("chat66_block_img_"+user_id).src = ""+static66dez+"button_del_off.gif";
    $("chat66_block_img_"+user_id).style.width = "8px";
    $("chat66_block_img_"+user_id).style.height = "8px";
    $("chat66_all_"+user_id).removeChild($("chat66_active_block_"+user_id));
    //$("chat66_all_"+user_id).removeChild($("chat66_post_form_"+user_id));
    $("chat66_icon_"+user_id).innerHTML = "&nbsp;";
    }

function chat66_get_new_block()
{
    child = $("chat66_main").childNodes;

    array_of_uid = new Array(); n = 0;

    for(a = 0; a < child.length; a++)
        {
        if (child[a].nodeType == 1)
            {
            tmp_id = child[a].getAttribute("id");
            tmp_id = tmp_id.split("_");
            if (tmp_id[2])
                {
                array_of_uid[n] = tmp_id[2];
                n++;
                }
            }
        }

    jQuery.ajax({
        type: "POST",
        url: '/mod/chat/ajax_get_new_block.php',
        data: { usdie: usdie, array_of_uid: array_of_uid },
        dataType: 'json'
    }).done(function( msg ) {
        rez = msg.newblock;
        if (rez.length > 0) {
            for(a = 0; a < rez.length; a++) {
                user_online = 'offline.gif'; if (rez[a][2] == 1) {user_online = 'online.gif';}
                $("chat66_main").innerHTML += "	<div id='chat66_all_"+rez[a][0]+"'>"
                    +"<div class='chat66_block' style='background-image: url("+static66dez+""+user_online+");' id='chat66_block_"+rez[a][0]+"' onclick='chat66_clickblock("+rez[a][0]+");'>"
                        +"<div style='width: 142px; float: left;'><a href='#' onClick='chat66_active_user("+rez[a][0]+"); return false;'>"+rez[a][1]+"</a><img style='margin-left: 5px; position: relative; top: 2px;' src='"+static66dez+"inmail/mail_gif.gif' width='14' height='10' alt='' border='0' id='chat66_newmail_"+rez[a][0]+"'  onClick='chat66_active_user("+rez[a][0]+"); chat66_clickblock("+rez[a][0]+"); return false;' /></div>"
                        +"<div style='width: 60px; font-weight: normal; float: left;' id='chat66_icon_"+rez[a][0]+"'>&nbsp;</div>"
                        +"<div style='padding-top: 3px;'><a href='#' onClick='chat66_del_user("+rez[a][0]+"); return false;'><img src='"+static66dez+"button_del_off.gif' width='8' height='8' alt='Закрыть' title='Закрыть' border='0' id='chat66_block_img_"+rez[a][0]+"'></a></div>"
                    +"</div>"
                +"</div>";
                if ($("chat66_right_newmessage1")) {
                    $("chat66_right_newmessage1").style.display = "";
                    $("chat66_right_newmessage2").style.display = "";
                }
                old = document.title; document.title = old.replace("[Новое сообщение] ", "");
                document.title = '[Новое сообщение] '+document.title;
            }
        }
    });
}

function findenter(e)
{
    if (e) {
        ctrl=e.ctrlKey;
        sh=e.shiftKey;
        keynum = e.keyCode;
        if ((sh) && (keynum == 13)) {
            if (parseInt($("chat_text").style.height) < 72) {
                $("chat_text").style.height = (parseInt($("chat_text").style.height) + 16)+"px";
            }
        }
        if ((keynum == 13) && (!sh) && (!ctrl)) {
            if (parseInt($("chat_text").style.height) < 72) {
                $("chat_text").style.height = (parseInt($("chat_text").style.height) + 16)+"px";
            }
        }
        if ((keynum == 13) && (ctrl)) {
            chat66_addmessage();
        }
    }
}

function chat66_newmessage()
    {
    child = $("chat66_main").childNodes;

    array_of_uid = new Array(); n = 0;

    for(a = 0; a < child.length; a++)
        {
        if (child[a].nodeType == 1)
            {
            tmp_id = child[a].getAttribute("id");
            tmp_id = tmp_id.split("_");
            if (tmp_id[2])
                {
                array_of_uid[n] = tmp_id[2];
                n++;
                }
            }
        }

    if (array_of_uid.length > 0)
        {

        jQuery.ajax({
            type: "POST",
            url: '/mod/chat/ajax_newmessage.php',
            data: { usdie: usdie, array_of_uid: array_of_uid },
            dataType: 'json'
        }).done(function( msg ) {
            rez = msg.newmessage;
            if (rez.length > 0)
                {
                for(a = 0; a < rez.length; a++)
                    {
                    if ($("chat66_newmail_"+rez[a]))
                        {
                        $("chat66_newmail_"+rez[a]).style.display = "";
                        }
                    }
                if ($("chat66_right_newmessage1"))
                    {
                    $("chat66_right_newmessage1").style.display = "";
                    $("chat66_right_newmessage2").style.display = "";
                    }
                old = document.title; document.title = old.replace("[Новое сообщение] ", "");
                document.title = '[Новое сообщение] '+document.title;
                }
        });
        }
    }

function chat66_clickblock(user_id)
{
    if ($("chat66_newmail_"+user_id))
    {
        if ($("chat66_newmail_"+user_id).style.display == "")
        {
            jQuery.ajax({
                type: "POST",
                url: '/mod/chat/ajax_iread.php',
                data: { usdie: usdie, user_id: user_id },
                dataType: 'json'
            }).done(function( msg ) {
                console.log('marking complete');

                $("chat66_newmail_"+user_id).style.display = "none";
                if ($("chat66_right_newmessage1"))
                    {
                    $("chat66_right_newmessage1").style.display = "none";
                    $("chat66_right_newmessage2").style.display = "none";
                    }
                old = document.title;
                document.title = old.replace("[Новое сообщение] ", "");
            });
        }
    }
}

function chat66_nummess()
{
    xnum = $('chat_text').value.length;

    if (xnum > 500) {
        $('chat_text').value = $('chat_text').value.substring(0,500);
        xnum = $('chat_text').value.length;
    }

    if ((xnum > 64) && parseInt($("chat_text").style.height) == 40) {
        $("chat_text").style.height = (parseInt($("chat_text").style.height) + 16)+"px";
    }

    if ((xnum > 97) && parseInt($("chat_text").style.height) == 56) {
        $("chat_text").style.height = (parseInt($("chat_text").style.height) + 16)+"px";
    }
}

function start_chat_work()
{
    if (typeof chat66_my_user_id!='undefined' && chat66_my_user_id>0) {
        jQuery.ajax({
            type: "POST",
            url: '/mod/chat/ajax_init_chat.php',
            data: { usdie: usdie, my_user_id: chat66_my_user_id },
            dataType: 'json'
        }).done(function( msg ) {
            console.log('chat initialized .result is '+msg.success+'. '+msg.message);
            chat66_get_text(0);
        });
    }
}

function startStopAutoCheck(obj)
{
    if (obj.checked) {
        clearTimeout(chat66_realoadTime);
        chat66_autocheck();
    }
    else {
        clearTimeout(chat66_realoadTime);
    }

    jQuery.ajax({
        type: "POST",
        url: '/mod/chat/ajax_set_ar.php',
        data: { ar: obj.checked, my_user_id: chat66_my_user_id },
        dataType: 'json'
    }).done(function( msg ) {
        console.log('set autoupdate chat to '+msg.value+'. result is '+msg.success);
    });
}

function chat66_autocheck()
    {
    chat66_realoadTime = setInterval(
        function() {
            chat66_get_text(0);
        }, 5000);
    }
