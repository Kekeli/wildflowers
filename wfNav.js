//-----------------
// writes navigation bar
//-------------------


function writeNavbar( topic ) {
	
var sepStr;
sepStr = " | " ;

var outStr;
outStr = "onMouseOut=\"(window.status=''); return true\"" ;

var linkStr;
if ( topic == null) topic = "";

document.writeln("<IMG SRC=images/daisy.gif>");


	linkStr = "<a href=\"faqs.html\" ";
	linkStr += "onMouseOver=\"(window.status='frequently asked questions'); return true\"" ;
	linkStr += outStr ;
	linkStr += ">FAQs</a>" ;
linkStr += sepStr ;
document.writeln( linkStr );
	

	linkStr = "<a href=\"photos.html\"  ";
	linkStr += "onMouseOver=\"(window.status='farm photos'); return true\"" ;
	linkStr += outStr ;
	linkStr += ">Photos</a>" ;
linkStr += sepStr ;
document.writeln( linkStr );

	linkStr = "<a href=\"dirs.html\"  ";
	linkStr += "onMouseOver=\"(window.status='map and directions'); return true\"" ;
	linkStr += outStr ;
	linkStr += ">Directions</a>" ;
linkStr += sepStr ;
document.writeln( linkStr );


	linkStr = "<a href=\"index.html\"  ";
	linkStr += "onMouseOver=\"(window.status='home'); return true\"" ;
	linkStr += outStr ;
	linkStr += ">Home</a>" ;
document.writeln( linkStr );

}