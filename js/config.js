var hex = gup('hex');
var notebook = gup('notebook');

function gup(name)
{
	name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	var regexS = "[\\?&]"+name+"=([^&#]*)";
	var regex = new RegExp( regexS );
	var results = regex.exec( window.location.href );
	if( results == null )
    	return "";
	else
    	return results[1];
}     
  
function buildUrl()
{       
	var stringUrl = '?';

	if(notebook != '')
	{               
		
		stringUrl += 'notebook=' + notebook;
	}

	if(hex != '')
	{      
		if(notebook != '')
			stringUrl += '&';
			
		stringUrl += 'hex=' + hex;
	}        
			
	location.href = stringUrl;
}

function setHex(color)
{
	hex = color;
	buildUrl(); 
}      
	
$(document).ready(function() {
	$('#notebook').change( function() {
		notebook = this.value;
		buildUrl();
	});
});

window.onload = function () {
   var r = Raphael("holder"); 
   var notebook = getUrlVars()["notebook"];
   var pie = r.g.piechart(200, 200, 150, [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4], {colors: ["#660000", "#990000", "#CC0000","#CC3333", "#EA4C88", "#993399", "#663399", "#333399", "#0066CC", "#0099CC", "#66CCCC", "#77CC33", "#669900", "#336600", "#666600", "#999900", "#CCCC33", "#FFFF00", "#FFCC33", "#FF9900", "#FF6600", "#CC6633", "#996633", "#663300", "#000000", "#999999", "#CCCCCC", "#FFFFFF"], href: 
[
"javascript:selectColor('660000');",
"javascript:selectColor('990000');",
"javascript:selectColor('CC0000');",
"javascript:selectColor('CC3333');",
"javascript:selectColor('EA4C88');",
"javascript:selectColor('993399');",
"javascript:selectColor('663399');",
"javascript:selectColor('333399');",
"javascript:selectColor('0066CC');",
"javascript:selectColor('0099CC');",
"javascript:selectColor('66CCCC');",
"javascript:selectColor('77CC33');",
"javascript:selectColor('669900');",
"javascript:selectColor('336600');",
"javascript:selectColor('666600');",
"javascript:selectColor('999900');",
"javascript:selectColor('CCCC33');",
"javascript:selectColor('FFFF00');",
"javascript:selectColor('FFCC33');",
"javascript:selectColor('FF9900');",
"javascript:selectColor('FF6600');",
"javascript:selectColor('CC6633');",
"javascript:selectColor('996633');",
"javascript:selectColor('663300');",
"javascript:selectColor('000000');",
"javascript:selectColor('999999');",
"javascript:selectColor('CCCCCC');",
"javascript:selectColor('FFFFFF');"
]});
   pie.hover(function () {
       this.sector.stop();
       this.sector.scale(1.1, 1.1, this.cx, this.cy);
       
   }, function () {
       this.sector.animate({scale: [1, 1, this.cx, this.cy]}, 500, "bounce");
       if (this.label) {
           this.label[0].animate({scale: 1}, 500, "bounce");
           this.label[1].attr({"font-weight": 400});
       }
   });
   
};