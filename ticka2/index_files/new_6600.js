var b66_part = 0;
var b66_content_part = 0;
var b66_step = 20;
var b66_need_change_button = 0;
var b66_need_fix_height = 0;

var talk_part = 0;

var active_content_overdiv = new Array();
var talk_content_overdiv = new Array();

function new_66_bg()
	{
	}

function new_66_show(part_num)
	{
	active_content_overdiv[1] = $("new_content_1_overdiv");
	active_content_overdiv[2] = $("new_content_2_overdiv");
	active_content_overdiv[3] = $("new_content_3_overdiv");
	
	if ((part_num == 1) || (part_num == 2)) {active_content_num = 1;}
	if ((part_num == 3) || (part_num == 4)) {active_content_num = 2;}
	if ((part_num == 5) || (part_num == 6)) {active_content_num = 3;}

	if (b66_part == part_num)
		{
		// если вкладка была открыта, то закрываем
		// !!! document.cookie = "my66_step = 0; path=/; expires="+expires.toGMTString();
		req.onreadystatechange = function() { if (req.readyState == 4) { if (req.responseJS.rez) { a = 1; } } }; req.caching = false; req.open('POST', '/mod/my/ajaxSave.php', true); req.send({ name: 0 });
		
		b66_need_change_button = b66_part;
		now_height = active_content_overdiv[active_content_num].offsetHeight + 1;
		need_height = 0;
		b66_need_fix_height = active_content_num;
		new_66_close(active_content_num, now_height, need_height);
		b66_part = 0;
		b66_content_part = 0;
		}
		else
		{
		if (b66_content_part != 0)
			{
			// если раньше выла какая то контент зона открыта
			if (b66_content_part == active_content_num)
				{
				// если эта же контент зона
				$("loader_"+part_num).style.display = "";
				
				if ($("my_66_cache_"+part_num).innerHTML == "")
					{
					req.onreadystatechange = function()
						{
						if (req.readyState == 4)
							{
							if (req.responseJS.x_content)
								{
								//document.cookie = "my66_step = "+part_num+"; path=/; expires="+expires.toGMTString();
								$("loader_"+part_num).style.display = "none";
								$("my_new_"+part_num).className = "my_name_active";
								$("my_new_"+b66_part).className = "my_name";
								b66_need_change_button = b66_part;
								now_height = active_content_overdiv[active_content_num].offsetHeight;
								$("new_content_"+active_content_num+"_div").innerHTML = req.responseJS.x_content;
								// cashe
								cashe_content = req.responseJS.x_content;
								cashe_content = cashe_content.replace("'pat'", "'pat_cashe'");
								$("my_66_cache_"+part_num).innerHTML = cashe_content;
								// =====
								need_height = $("new_content_"+active_content_num+"_div").offsetHeight;
								if (now_height >= need_height)
									{
									// если новая контент зона меньше чем была открытя
									new_66_close(active_content_num, now_height, need_height);
									b66_part = part_num;
									b66_content_part = active_content_num;
									}
									else
									{
									// если новая контент зона больше чем была открытя
									new_66_open(active_content_num, now_height, need_height);
									b66_part = part_num;
									b66_content_part = active_content_num;
									}
								}
							}
						}
					req.caching = false; //true
					req.open('POST', '/mod/my/ajax_66.php', true);
					req.send({ name: part_num });
					}
					else
					{
					// если есть кеш
					// !!! document.cookie = "my66_step = "+part_num+"; path=/; expires="+expires.toGMTString();
					req.onreadystatechange = function() { if (req.readyState == 4) { if (req.responseJS.rez) { a = 1; } } }; req.caching = false; req.open('POST', '/mod/my/ajaxSave.php', true); req.send({ name: part_num });
					
					$("loader_"+part_num).style.display = "none";
					$("my_new_"+part_num).className = "my_name_active";
					b66_need_change_button = b66_part;
					now_height = active_content_overdiv[active_content_num].offsetHeight;
					// from cashe
					cashe_content = $("my_66_cache_"+part_num).innerHTML;
					cashe_content = cashe_content.replace('"pat_cashe"', "'pat'");
					$("new_content_"+active_content_num+"_div").innerHTML = cashe_content;
					// ==========
					need_height = $("new_content_"+active_content_num+"_div").offsetHeight;
					if (now_height >= need_height)
						{
						// если новая контент зона меньше чем была открытя
						new_66_close(active_content_num, now_height, need_height);
						b66_part = part_num;
						b66_content_part = active_content_num;
						}
						else
						{
						// если новая контент зона больше чем была открытя
						new_66_open(active_content_num, now_height, need_height);
						b66_part = part_num;
						b66_content_part = active_content_num;
						}
					}
				}
				else
				{
				// была открыта другая контент зона то её закрываем 
				// document.cookie = "my66_step = 0; path=/; expires="+expires.toGMTString();
				b66_need_change_button = b66_part;
				now_height = active_content_overdiv[b66_content_part].offsetHeight + 1;
				need_height = 0;
				b66_need_fix_height = b66_content_part;
				b66_need_change_button = b66_part;
				new_66_close(b66_content_part, now_height, need_height);
				b66_part = 0;
				b66_content_part = 0;
				
				// а новую открываем
				$("loader_"+part_num).style.display = "";
				
				if ($("my_66_cache_"+part_num).innerHTML == "")
					{
					req.onreadystatechange = function()
						{
						if (req.readyState == 4)
							{
							if (req.responseJS.x_content)
								{
								//document.cookie = "my66_step = "+part_num+"; path=/; expires="+expires.toGMTString();
								$("loader_"+part_num).style.display = "none";
								$("my_new_"+part_num).className = "my_name_active";
								$("new_content_"+active_content_num+"_div").innerHTML = req.responseJS.x_content;
								// cashe
								cashe_content = req.responseJS.x_content;
								cashe_content = cashe_content.replace("'pat'", "'pat_cashe'");
								$("my_66_cache_"+part_num).innerHTML = cashe_content;
								// =====
								now_height = 0;
								need_height = $("new_content_"+active_content_num+"_div").offsetHeight;
								new_66_open(active_content_num, now_height, need_height);
								b66_part = part_num;
								b66_content_part = active_content_num;
								}
							}
						}
					req.caching = false; //true
					req.open('POST', '/mod/my/ajax_66.php', true);
					req.send({ name: part_num });
					}
					else
					{
					// если есть кеш
					// !!! document.cookie = "my66_step = "+part_num+"; path=/; expires="+expires.toGMTString();
					req.onreadystatechange = function() { if (req.readyState == 4) { if (req.responseJS.rez) { a = 1; } } }; req.caching = false; req.open('POST', '/mod/my/ajaxSave.php', true); req.send({ name: part_num });
					
					$("loader_"+part_num).style.display = "none";
					$("my_new_"+part_num).className = "my_name_active";
					// from cashe
					cashe_content = $("my_66_cache_"+part_num).innerHTML;
					cashe_content = cashe_content.replace('"pat_cashe"', "'pat'");
					$("new_content_"+active_content_num+"_div").innerHTML = cashe_content;
					// ==========
					now_height = 0;
					need_height = $("new_content_"+active_content_num+"_div").offsetHeight;
					new_66_open(active_content_num, now_height, need_height);
					b66_part = part_num;
					b66_content_part = active_content_num;
					}
				}
			}
			else
			{
			// если вкладка была закрыта, то открываем
			$("loader_"+part_num).style.display = "";
			
			if ($("my_66_cache_"+part_num).innerHTML == "")
				{
				req.onreadystatechange = function()
					{
					if (req.readyState == 4)
						{
						if (req.responseJS.x_content)
							{
							// document.cookie = "my66_step = "+part_num+"; path=/; expires="+expires.toGMTString();
							$("loader_"+part_num).style.display = "none";
							$("my_new_"+part_num).className = "my_name_active";
							$("new_content_"+active_content_num+"_div").innerHTML = req.responseJS.x_content;
							// cashe
							cashe_content = req.responseJS.x_content;
							cashe_content = cashe_content.replace("'pat'", "'pat_cashe'");
							$("my_66_cache_"+part_num).innerHTML = cashe_content;
							// =====
							now_height = 0;
							need_height = $("new_content_"+active_content_num+"_div").offsetHeight;
							new_66_open(active_content_num, now_height, need_height);
							b66_part = part_num;
							b66_content_part = active_content_num;
							}
						}
					}
				req.caching = false; //true
				req.open('POST', '/mod/my/ajax_66.php', true);
				req.send({ name: part_num });
				}
				else
				{
				// если есть кеш
				// !!! document.cookie = "my66_step = "+part_num+"; path=/; expires="+expires.toGMTString();
				req.onreadystatechange = function() { if (req.readyState == 4) { if (req.responseJS.rez) { a = 1; } } }; req.caching = false; req.open('POST', '/mod/my/ajaxSave.php', true); req.send({ name: part_num });
				
				$("loader_"+part_num).style.display = "none";
				$("my_new_"+part_num).className = "my_name_active";
				// from cashe
				cashe_content = $("my_66_cache_"+part_num).innerHTML;
				cashe_content = cashe_content.replace('"pat_cashe"', "'pat'");
				$("new_content_"+active_content_num+"_div").innerHTML = cashe_content;
				// ==========
				now_height = 0;
				need_height = $("new_content_"+active_content_num+"_div").offsetHeight;
				new_66_open(active_content_num, now_height, need_height);
				b66_part = part_num;
				b66_content_part = active_content_num;
				}
			}
		}
	}
	
function new_66_open(open_active_content_num, open_now_height, open_to_height)
	{
	open_now_height = open_now_height + b66_step;
	active_content_overdiv[open_active_content_num].style.height = open_now_height;
	
	if (open_to_height > open_now_height)
		{
		setTimeout("new_66_open("+open_active_content_num+","+open_now_height+","+open_to_height+")",1);
		}
		else
		{
		if (b66_need_change_button != 0)
			{
			$("my_new_"+b66_need_change_button).className = "my_name";
			b66_need_change_button = 0;
			}
		// не очень плавно, но пока так, если что надо расчитывать максимальное открытие взависимости от шага и размеров
		active_content_overdiv[open_active_content_num].style.height = $("new_content_"+open_active_content_num+"_div").offsetHeight;
		}
	}
	
function new_66_close(close_active_content_num, close_now_height, close_to_height)
	{
	close_now_height = close_now_height - b66_step;

	if (close_to_height < close_now_height)
		{
		active_content_overdiv[close_active_content_num].style.height = close_now_height;
		setTimeout("new_66_close("+close_active_content_num+","+close_now_height+","+close_to_height+")",1);
		}
		else
		{
		if (b66_need_change_button != 0)
			{
			$("my_new_"+b66_need_change_button).className = "my_name";
			b66_need_change_button = 0;
			}
		
		if (b66_need_fix_height != 0)
			{
			active_content_overdiv[close_active_content_num].style.height = 1;
			b66_need_fix_height = 0;
			}

		// кешируем, для следующего открытия
		
		// очищаем контент зону
		if (close_now_height < 0)
			{
			$("new_content_"+close_active_content_num+"_div").innerHTML = "";
			}
		}
	}
	




	
	
	
	
	
function my_show_pat(do_not_close)
	{
	if (($('pat').innerHTML == "") || (do_not_close == 'do_not_close'))
		{
		// document.cookie = "my66_pat_task = 1; path=/; expires="+expires.toGMTString();
		$("loader66_pat").style.display = "";
 
		req.onreadystatechange = function()
			{
			if (req.readyState == 4)
				{
				if (req.responseJS)
					{
					$("loader66_pat").style.display = "none";
					$('pat_img').src = ""+static66dez+"talk_on.gif";
					$('pat').innerHTML = req.responseJS.x_content;
					$("new_content_2_overdiv").style.height = $("new_content_2_div").offsetHeight;
					}
				}
			}
		req.caching = false; //true
		req.open('POST', '/mod/my/ajax_66_pat.php', true);
		req.send({ ids: 1 });
		}
		else
		{
		// document.cookie = "my66_pat_task = 0; path=/; expires="+expires.toGMTString();
		$('pat').innerHTML = "";
		$("new_content_2_overdiv").style.height = $("new_content_2_div").offsetHeight;
		$('pat_img').src = ""+static66dez+"talk_off.gif";
		}
	}
	
	
	
	
	




function new_talk_show(part_num)
	{
	talk_content_overdiv[1] = $("talk_1_overdiv");
	talk_content_overdiv[2] = $("talk_2_overdiv");
	talk_content_overdiv[3] = $("talk_3_overdiv");
	
	if (talk_part == 0)
		{
		// если вкладки закрыты
		// document.cookie = "my66_bottom = "+part_num+"; path=/; expires="+expires.toGMTString();
		now_height = 0;
		need_height = $("talk_"+part_num+"_content").offsetHeight;
		talk_part = part_num;
		$("talk_button_"+part_num).className = "talk_1_active";
		new_talk_open(part_num, now_height, need_height);
		}
		else
		{
		if (talk_part == part_num)
			{
			// если вкладка открыта то её закрываем
			// document.cookie = "my66_bottom = 0; path=/; expires="+expires.toGMTString();
			now_height = $("talk_"+part_num+"_content").offsetHeight;
			need_height = 1;
			talk_part = 0;
			$("talk_button_"+part_num).className = "talk_1";
			new_talk_close(part_num, now_height, need_height);
			}
			else
			{
			// если открыта другая вкладка то её закрываем а новую открываем
			now_height = $("talk_"+talk_part+"_content").offsetHeight;;
			need_height = 1;
			$("talk_button_"+talk_part).className = "talk_1";
			new_talk_close(talk_part, now_height, need_height);
			
			// document.cookie = "my66_bottom = "+part_num+"; path=/; expires="+expires.toGMTString();
			now_height = 0;
			need_height = $("talk_"+part_num+"_content").offsetHeight;
			talk_part = part_num;
			$("talk_button_"+part_num).className = "talk_1_active";
			new_talk_open(part_num, now_height, need_height);
			}
		}
	}

	
function new_talk_open(open_num, open_now_height, open_to_height)
	{
	open_now_height = open_now_height + b66_step;
	talk_content_overdiv[open_num].style.height = open_now_height;
	
	if (open_to_height > open_now_height)
		{
		setTimeout("new_talk_open("+open_num+","+open_now_height+","+open_to_height+")",1);
		}
	}
	
function new_talk_close(close_num, close_now_height, close_to_height)
	{
	close_now_height = close_now_height - b66_step;
	if (close_now_height > 0)
		{
		talk_content_overdiv[close_num].style.height = close_now_height;
		}
	
	if (close_to_height < close_now_height)
		{
		setTimeout("new_talk_close("+close_num+","+close_now_height+","+close_to_height+")",1);
		}
		else
		{
		talk_content_overdiv[close_num].style.height = 1;
		}
	}