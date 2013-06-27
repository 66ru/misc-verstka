function new_calendar_show(div_target,input_target,part,ch)
 {
 monthName = new Array('€нварь','февраль','март','апрель','май','июнь','июль','август','сент€брь','окт€брь','но€брь','декабрь');
 
 if ((part == 0) || (ch == 0))
  {
  input_date = $(input_target).value.split(" ");  
  new_month     = monthName[Math.floor(get_numeric_month(input_date[1]))];
  new_month_num = Math.floor(get_numeric_month(input_date[1]));
  new_year      = Math.floor(input_date[2]);
  }
  else
  {
  if (part == 'year')
   {
   if (ch == 'last')
    {
	new_year = parseInt($('new_n_year').innerHTML) - 1;
	if (new_year == 1999) {new_year = 2000;}
	}
   if (ch == 'next')
    {
	new_year = parseInt($('new_n_year').innerHTML) + 1;
	if (new_year == 2101) {new_year = 2100;}
	}
   }

  if (part == 'month')
   {
   if (ch == 'last')
    {
	new_month_num = Math.floor($('new_n_month').innerHTML) - 1;
	if (new_month_num == -1)
	 {
	 new_month_num = 11;
	 new_year = new_year - 1;
     if (new_year == 1999) {new_year = 2000; new_month_num = 0;}	 
	 }
	new_month     = monthName[new_month_num];
	}
   if (ch == 'next')
    {
	new_month_num = Math.floor($('new_n_month').innerHTML) + 1;
	if (new_month_num == 12)
	 {
     new_month_num = 0;
	 new_year = new_year + 1;
	 if (new_year == 2101) {new_year = 2100; new_month_num = 11;}
	 }
    new_month     = monthName[new_month_num];
	}   
   }
  
  if (part == 'nothing')
   {
   new_year = parseInt($('new_n_year').innerHTML);
   new_month_num = parseInt($('new_n_month').innerHTML);
   }
  }

 	var today     = new Date();
	var dateNow   = today.getDate();

 c_new = "";
 c_new +=	"<table style='width: 200px; height: 1px;' cellspacing='0' cellpadding='0' border='0' onClick=\"new_calendar_show('"+div_target+"','"+input_target+"','nothing',1);\">"
 c_new +=		"<tr style='height: 8px;'>";
 c_new +=			"<td width='8'><img src='"+static66dez+"window/corner_1.png' width='8' height='8' alt='' border='0' class='shade_image'></td>";
 c_new +=			"<td><img src='"+static66dez+"window/gray60.png' width='100%' height='8' alt='' border='0' class='shade_image'></td>";
 c_new +=			"<td width='8'><img src='"+static66dez+"window/corner_2.png' width='8' height='8' alt='' border='0' class='shade_image'></td>";
 c_new +=		"</tr>";
 c_new +=		"<tr valign='top' style='height: 1px;'>";
 c_new +=			"<td width='8'><img src='"+static66dez+"window/gray60.png' width='8' height='100%' alt='' border='0' class='shade_image'></div></td>";
 c_new +=			"<td style='background-image: url("+static66dez+"informer_bg.gif); background-repeat: repeat-x; background-position: 0px -3px; border: 1px solid #C4C9C5; background-color: #F0F0E8;' align='center'>";
 c_new +=				"<table border='0' cellspacing='0' cellpadding='0' style='border-collapse: collapse; margin-bottom: 10px;'>";
 c_new +=         	  		"<tr>";
		  
 c_new +=						"<td colspan='2' align='right'><img src='"+static66dez+"calendar_left2.gif' width='9' height='7' alt='' border='0' onClick=\"new_calendar_show('"+div_target+"','"+input_target+"','year','last')\" style='cursor: pointer;'></td>";

 c_new +=						"<td colspan='3' align='center' class='calendar_year' id='new_n_year'>"+new_year+"</td>";
 c_new +=  						"<td colspan='2' align='left'><img src='"+static66dez+"calendar_right2.gif' width='9' height='7' alt='' border='0' onClick=\"new_calendar_show('"+div_target+"','"+input_target+"','year','next')\" style='cursor: pointer;'></td>";
 c_new +=					"</tr>";
 c_new +=					"<tr>";
 c_new +=						"<td colspan='7' class='calendar_month'>";
 c_new +=							"<table width='100%' cellspacing='0' cellpadding='0' border='0'>";
 c_new +=								"<tr>";

 c_new +=									"<td width='1'><img src='"+static66dez+"calendar_left.gif' width='26' height='15' alt='' border='0' onClick=\"new_calendar_show('"+div_target+"','"+input_target+"','month','last')\" style='cursor: pointer;'></td>";

 c_new +=									"<td>"+new_month+"<div style='display: none;' id='new_n_month'>"+new_month_num+"</div></td>";
 c_new +=									"<td width='1'><img src='"+static66dez+"calendar_right.gif' width='26' height='15' alt='' border='0' onClick=\"new_calendar_show('"+div_target+"','"+input_target+"','month','next')\" style='cursor: pointer;'></td>";
 c_new +=  								"</tr>";
 c_new +=							"</table>";
 c_new +=						"</td>";
 c_new +=					"</tr>";
 c_new +=					"<tr>";
 c_new +=						"<td class='calendar_cell'>пн</td>";
 c_new +=						"<td class='calendar_cell'>вт</td>";
 c_new +=						"<td class='calendar_cell'>ср</td>";
 c_new +=						"<td class='calendar_cell'>чт</td>";
 c_new +=						"<td class='calendar_cell'>пт</td>";
 c_new +=						"<td class='calendar_cell'>сб</td>";
 c_new +=						"<td class='calendar_cell'>вс</td>";
 c_new +=					"</tr>";
 c_new +=					"<tr>";

 var tds = new Date(new_year,new_month_num,1);
 var month = tds.getMonth();
 var year  = tds.getYear();
 if (year < 2000) year += 1900;
 var monarr = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
 if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) monarr[1] = "29";

 day_in_this_month = monarr[month]; 
 
 start_pos = tds.getDay();
 if (start_pos == 0) {start_pos = 7;}
 
 if ((start_pos > 1) && (start_pos < 8))
  {
  for(a = 1; a < start_pos; a++)
   {
   c_new +=						"<td class='calendar_cell'>&nbsp;</td>";   
   }  
  }
 var do_it = false;
 if (today.getMonth() == month && 1900 + today.getYear() == year) do_it = true;
 for(a = 1; a <= day_in_this_month; a++)
  {
  add = "";
  if (do_it) {
  	if (a - start_pos + 1 <= dateNow && a - start_pos + 7 >= dateNow) {add = "style='background-color: #f8f9c1;'";}// else {add = "";}
  	if (a == dateNow) {add = "style='background-color: #CEEC74;'";}// else {add = "";}
  }
  c_new +=						"<td class='calendar_cell' "+add+"><a href='/' onClick=\"new_calendar_select('"+div_target+"','"+input_target+"',"+a+","+new_month_num+","+new_year+"); return false; \">"+a+"</a></td>";
  start_pos++;
  if (start_pos == 8)
   {
   c_new += "</tr><tr>";
   start_pos = 1;
   }
  }
  
 if ((start_pos > 1) && (start_pos < 8))
  {
  for(a = start_pos; a <= 7; a++)
   {
   c_new +=						"<td class='calendar_cell'>&nbsp;</td>";   
   }  
  }
  
 c_new +=					"</tr>";
 c_new +=				"</table>";
 c_new +=			"</td>";
 c_new +=			"<td width='8'><img src='"+static66dez+"window/gray60.png' width='8' height='100%' alt='' border='0' class='shade_image'></td>";
 c_new +=		"</tr>";
 c_new +=		"<tr style='height: 8px;'>";
 c_new +=			"<td width='8'><img src='"+static66dez+"window/corner_3.png' width='8' height='8' alt='' border='0' class='shade_image'></td>";
 c_new +=			"<td><img src='"+static66dez+"window/gray60.png' width='100%' height='8' alt='' border='0' class='shade_image'></td>";
 c_new +=			"<td width='8'><img src='"+static66dez+"window/corner_4.png' width='8' height='8' alt='' border='0' class='shade_image'></td>";
 c_new +=		"</tr>";
 c_new +=	"</table>";
 
 $(div_target).innerHTML = c_new;
 setTimeout("addclosing('"+div_target+"');",1000);
 }

function addclosing(div_target)
 {
 //document.body.onclick = function() {closing(div_target);} 
 }

function closing(div_target)
 {
 if ($(div_target)) {$(div_target).innerHTML = "";}
 document.body.onclick = "";
 }
 
function get_numeric_month(month)
 {
 if (month == '€нвар€')   {tmp_m = '00';}
 if (month == 'феврал€')  {tmp_m = '01';}
 if (month == 'марта')    {tmp_m = '02';}
 if (month == 'апрел€')   {tmp_m = '03';}
 if (month == 'ма€')      {tmp_m = '04';}
 if (month == 'июн€')     {tmp_m = '05';}
 if (month == 'июл€')     {tmp_m = '06';}
 if (month == 'августа')  {tmp_m = '07';}
 if (month == 'сент€бр€') {tmp_m = '08';}
 if (month == 'окт€бр€')  {tmp_m = '09';}
 if (month == 'но€бр€')   {tmp_m = '10';}
 if (month == 'декабр€')  {tmp_m = '11';}
 
 return tmp_m;
 }
 
function new_calendar_select(div_target,input_target,day,month,year)
 {
 month = parseInt(parseInt(month) + 1);
 
 //custom_date = year+"-"+month+"-"+day;
 custom_date_x   = ""+year+"-"+month+"-"+day+"";
 
 change = 0;
 if (input_target == 'custom_date')  {change = 1;}
 if (input_target == 'planall_date') {change = 2;} 

if (change == 1)
	{
	//$('my_content_2_mf').innerHTML = "<div style='text-align: center'>«агрузка... <img src='"+static66dez+"my/scale1.gif' alt='' width='15' height='5' /></div>";
	req.onreadystatechange = function()
		{
		if (req.readyState == 4)
			{
			if (req.responseJS)
				{
				content    = req.responseJS.x_content;
				end_height = parseInt(req.responseJS.x_height);
				if (end_height > 0)
					{
					$('my_66_cache_3').innerHTML = "";
					$("new_content_2_div").innerHTML = req.responseJS.x_content;
					$("new_content_2_overdiv").style.height = $("new_content_2_div").offsetHeight;
					//start_height = parseInt($('my_content_2').style.height);
					//if (start_height > end_height) {my_zader(2,start_height,end_height);}
					//if (end_height > start_height) {my_fader(2,start_height,end_height);}
					//$('my_content_2_mf').innerHTML = content;
					}
				}
			}
		}
	req.caching = false; //true
	req.open('POST', '/mod/my/ajax_66.php', true);
	req.send({ name: 3, custom_date: custom_date_x });
	}
 
 if (change == 2)
  {
  //$('my_content_2_mf').innerHTML = "<div style='text-align: center'>«агрузка... <img src='"+static66dez+"my/scale1.gif' alt='' width='15' height='5' /></div>";
  act = 'get_plan';
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
  req.send({ act: act, planall_date: custom_date_x });
  }
  
 if (change == 0)
  {
  var monthName = new Array('', '€нвар€','феврал€','марта','апрел€','ма€','июн€','июл€','августа','сент€бр€','окт€бр€','но€бр€','декабр€');
  $(input_target).value = day+" "+monthName[month]+" "+year;
  }

 new_calendar_close(div_target);
 }

function new_calendar_close(div_target)
 {
 $(div_target).innerHTML = "";
 document.body.onclick = ""; 
 }
