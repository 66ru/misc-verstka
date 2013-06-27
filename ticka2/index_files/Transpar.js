if (navigator.platform == "Win32" && navigator.appName == "Microsoft Internet Explorer" && window.attachEvent && navigator.userAgent.indexOf("Opera")==-1)
{
	//document.writeln('<style type="text/css">img { visibility:hidden; } </style>');
	//window.attachEvent("onload", LoadPng);
}

function LoadPng(t)
{
	
	if (typeof t == 'undefined') t=0;
	var rslt = navigator.appVersion.match(/MSIE (\d+\.\d+)/, '');
	var itsAllGood = (rslt != null && Number(rslt[1]) >= 5.5);

	//for (var i = document.images.length - 1, img = null; (img = document.images[i]); i--)
	for(var i=0; i<document.images.length - 1;i++)
	{
		var img = document.images[i];
		if (itsAllGood && img.src.indexOf('.png') >-1)
		{
			var src = img.src;
			
			// следующие две строчки раскоментил. Ибо в осле тогда совсем не отображаются картинки. Почему были закоменчены - тайна. merge
			img.style.width = img.width + "px";
			img.style.height = img.height + "px";
			img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + src + "', sizingMethod='scale')"
			img.src = ""+static66dez+"spacer.gif";
		}
		img.style.visibility = "visible"; 
	}
}