//Slider HEH	
var actuelle=1;

$(document).ready(function(){
		anim(1);
	} );	
	
function anim(x) {
	actuelle=x;
	$("slider_actus").fadeOut(400);
	$("#actu"+x).fadeIn(400);
	$('#bubulle').stop().animate({left:((x-1)*33,33)+'%'},{duration:500});
	$('.slider').stop().animate({width:[((x-1)*33,33)+'%', 'linear']},{duration:0}).animate({width:[((x)*33,33)+'%', 'linear']},{duration:5000,queue:true, complete : function(){anim((x%4)+1);}}); 
	}
	
function slider_clic(x,lien,blank) {
	if (actuelle==x) {
		if (blank) window.open(lien,'_blank');
		else document.location.href=lien;
		}
	else {
		actuelle=x ;
		$('#slider').stop().animate({width:[(x*25)+'%', 'linear']},{duration:0,queue:true, complete : function(){anim(x);}}); 
		}
	}