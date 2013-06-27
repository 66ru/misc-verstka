var maxcount = 10;
var scripting = false;

var inprocess = false;

function add_suggest(inputID,part,param)
	{
	inprocess = false;
	// create scale img
	if (!document.getElementById(inputID+"_scale"))
		{
		IS = document.createElement("IMG");
		IS.setAttribute("id",inputID+"_scale");
		IS.src = ""+static66dez+"my/scale1.gif";
		IS.style.position = "absolute";
		
		// position of scale img
		InS = document.getElementById(inputID);
		InS.setAttribute("autocomplete","off");
		pos2=findPos(InS); pos2.push(InS.offsetHeight); pos2.push(InS.offsetWidth);
		IS.style.top = (pos2[1]+pos2[2]-16)+'px';
		IS.style.left = (pos2[0]-21)+'px';
		
		IS.style.display = "none";
		document.body.appendChild(IS);
		}
	
	suggestInput_init(inputID,part,param); // надо добавить что бы каждый раз не рендерилось, но в ИЕ глюки появляються
	// ===============
	}

var SIs //initially invisible select box
var SItxt //the main input text element
var newdiv = document.createElement("DIV") //a visible pendant to select box
var globalN = 0; //how much options scrolled up
//for ie
if (document.attachEvent)
	{
	document.attachEvent("onclick",hideSudSelect);
	}
// for Mozilla
if (document.captureEvents)
	{
	document.captureEvents(Event.CLICK);
	document.onclick = hideSudSelect;
	}
	
function hideSudSelect()
	{
	newdiv.style.display = "none";
	}
	
function suggestInput_init(inputID,part,param)
	{
	if (document.createElement("DIV"))
		{
		scripting=true;
		SIs=document.createElement("SELECT")
		
		SIs.onkeydown = function(e)
			{
			if(!e) e = event;
			if (e.keyCode == 8) {SItxt.focus();}
			}
		
		SIs.onkeyup=function(e)
			{
			if(!e) e = event;
			setInputValue(this.selectedIndex,e);
			}
		SIs.className="select_input";
		SIs.setAttribute("id","selectInput");
		SIs.style.position="absolute";
		//SIs.style.top="-9999px";
		SIs.style.left="-9999px";
		//SIs.style.left="0px";
		//SIs.style.visibility="hidden";
		document.body.appendChild(SIs)
		SItxt =document.getElementById(inputID);
		SItxt.setAttribute("autocomplete","off");
		SItxt.onkeyup=function(e)
			{
			if (!e) e=event; showSelection(this.value,e,inputID,part,param)
			}
		elt=SItxt 
		pos2=findPos(elt); pos2.push(elt.offsetHeight); pos2.push(elt.offsetWidth)
		SIs.style.top = (pos2[1]+pos2[2])+'px';
		newdiv.style.top=(pos2[1]+pos2[2])+'px';
		newdiv.style.left=pos2[0]+'px';
		newdiv.style.width=pos2[3]+'px';
		newdiv.className="suggestBoxContainer";
		newdiv.setAttribute("id","suggestBoxContainer");
		newdiv.style.display="none";
		//buildDiv(0)
		document.body.appendChild(newdiv)
	 	}
	} 
 
function buildDiv(n,array_num)
	{
	if (n>SIs.childNodes.length) return false; 
	for (i=0;i<newdiv.childNodes.length;i++)
		{
		newdiv.removeChild(newdiv.childNodes[i]);i--
		}
	if (n>0)
		{// insert top "..." - div
		d1=document.createElement("DIV");
		d1.id="lessDiv"
		d1.style.width="100%"
		d1.style.fontSize="0.8em"
		d1.onmouseover=function() {this.className="mouse_over";}
		d1.onmouseout=function() {this.className="suggestSimple"}
		d1.onclick=function()
			{
			buildDiv(n-1,array_num);
			d1.className="mouse_over"
			}
		d1.innerHTML="......"; 
		newdiv.appendChild(d1); 
		}
	m=(maxcount<SIs.childNodes.length)?(maxcount):(SIs.childNodes.length)
	for(i=0;i<m;i++)
		{
		d=document.createElement("DIV")
		d.className = "suggestSimple";
		
		d.onmouseover=function()
			{
			this.className="mouse_over";
			//SItxt.value=this.innerHTML
			}
		d.onmouseout=function()
			{
			this.className='suggestSimple'
			}
		d.onclick=function()
			{
			text = this.innerHTML;
			text = text.replace(/ <span class="user_card_num">\d*<\/span>/, "");
			text = text.replace(/ <SPAN class=user_card_num>\d*<\/SPAN>/, "");
			text = text.replace(/ <SPAN class="user_card_num">\d*<\/SPAN>/, "");
			SItxt.value = text;
			newdiv.style.display = "none";
			SItxt.focus();
			}
		try
			{
			num = ""; if (array_num[i+n] != 0) {num = array_num[i+n];}
			d.innerHTML=SIs.childNodes[i+n].innerHTML+" <span class='user_card_num'>"+num+"</span>";
			}
		catch(err) {}
		newdiv.appendChild(d)
		};
	globalN=n;
	if (SIs.childNodes.length-n>maxcount) {// insert bottom "..." - div
		d2=document.createElement("DIV");
		d2.id="moreDiv"
		d2.style.width="100%"
		d2.style.fontSize="0.8em"
		d2.onmouseover=function() {this.className="mouse_over";}
		d2.onmouseout=function() {this.className="suggestSimple";}
		d2.onclick=function() {
			buildDiv(n+1,array_num); 
			d2.className="mouse_over";
		}
		d2.innerHTML="......"; 
		d2.className="suggestSimple";
		newdiv.appendChild(d2) 
	 } 
 }
 
function setInputValue(m,ev) {
	if (!scripting) return;
	isLess=(document.getElementById("lessDiv"))?(1):(0)
	if (m>globalN+maxcount+isLess+1) {
		m=globalN+maxcount;SIs.selectedIndex=m
	}
	if (m<isLess) {
		m=globalN-1;SIs.selectedIndex=globalN-1
	}
	a = SIs.childNodes[m].innerHTML;
	//a = text.replace(/ <span class="user_card_num">\d*<\/span>/, "");
	//a = text.replace(/ <SPAN class=user_card_num>\d*<\/SPAN>/, "");
	//a = text.replace(/ <SPAN class="user_card_num">\d*<\/SPAN>/, "");
	//SItxt.value = a;
	//a = null;
	
			text = SIs.childNodes[m].innerHTML;
			text = text.replace(/ <span class="user_card_num">\d*<\/span>/, "");
			text = text.replace(/ <SPAN class=user_card_num>\d*<\/SPAN>/, "");
			text = text.replace(/ <SPAN class="user_card_num">\d*<\/SPAN>/, "");
			SItxt.value = text;

	
	try {
		if (newdiv.childNodes[m-globalN+isLess]) {  
			if (newdiv.childNodes[m-globalN+isLess].id=="moreDiv") { 
				buildDiv(globalN+1);  
				newdiv.childNodes[maxcount].className="mouse_over";;
				return
			}
		}
	} catch (err) {}
	try {
		if (newdiv.childNodes[m-globalN+isLess]) {  
			if (newdiv.childNodes[m-globalN+isLess].id=="lessDiv") {  
				buildDiv(globalN-1);
				isLess_new=(document.getElementById("lessDiv"))?(1):(0)
		 		newdiv.childNodes[isLess_new].className="mouse_over";
		 		return
			}
		}
	} catch (err) {}
	try {
		for (i=0;i<newdiv.childNodes.length;i++)
			newdiv.childNodes[i].className="suggestSimple";
		 newdiv.childNodes[m-globalN+isLess].className="mouse_over";
	} catch(err) {};
	if ((ev.keyCode!=40) && (ev.keyCode!=38) && (ev.keyCode!=0) && (ev.keyCode != 8)) { // if not arrow down, arrow up or mouseclick  
		newdiv.style.display="none"
		SItxt.focus();
		inprocess = false;
		return false;
	}
}
 
function showSelection(t,ev,inputID,part,param)
	{
	if (inprocess == false)
		{
	inprocess = true;
	if (ev.keyCode == 16) {inprocess = false; return;} // отменим шифт
	if (!scripting) {inprocess = false; return;}
	if (ev.keyCode == 40)
		{ // by arrow down comes into suggestion select
		if (SIs.childNodes.length>0)
			{
			newdiv.childNodes[0].className="mouse_over";
			SItxt.value=SIs.childNodes[0].innerHTML; 
			try	{SIs.focus();} catch(err) {}
			SIs.childNodes[0].selected=true;
			}
		inprocess = false;
		return;            
		}
	if (t=="") {hideSudSelect(); inprocess = false; return;}
	t=t.toLowerCase();
	l=t.length; 
	for (i=0;i<SIs.childNodes.length;i++)
		{
		SIs.removeChild(SIs.childNodes[i]);
		i--;
		}
	
	document.getElementById(inputID+"_scale").style.display = "";
	var req = new JsHttpRequest();
	req.onreadystatechange = function()
		{
		if (req.readyState == 4)
			{
			if (req.responseJS.answer != '')
				{
				// get array
				opttext = req.responseJS.answer;
				opttext_num = req.responseJS.answer_num;
				//document.getElementById("log").innerHTML += opttext;
				// =========
	
				for(i=0;i<opttext.length;i++)
					{
					if (opttext[i].substr(0,l).toLowerCase()==t)
						{
					  	oOption = document.createElement("OPTION");
						
						//oOption.setAttribute("value",opttext_num[i]);
						//oOption.setAttribute("text",opttext[i]);
						
						//alert(oOption.value);
						
		  				SIs.appendChild(oOption);
						
					 	oOption.innerHTML = opttext[i]; // +" ("+opttext_num[i]+")"
						}
					}
		
				if (SIs.childNodes.length>0)
					{
					newdiv.style.display="";
					buildDiv(0,opttext_num);
					}
					else newdiv.style.display="none";
					SItxt.focus();
				}
				else
				{
				hideSudSelect();
				}
			document.getElementById(inputID+"_scale").style.display = "none";
			inprocess = false;
			}
		}
	
	//alert(param);
	req.open(null, '/show/ajax_suggest.php', true);
	req.send( { text : t, part : part, param: param, usdie: usdie } );
		}
	}

function findPos(obj)
	{
	var curleft = curtop = 0;
	if (obj.offsetParent)
		{
		curleft = obj.offsetLeft
		curtop = obj.offsetTop
		while (obj = obj.offsetParent)
			{
			curleft += obj.offsetLeft
			curtop += obj.offsetTop
			}
		} 
	return [curleft,curtop];
	}