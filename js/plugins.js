
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) {
    arguments.callee = arguments.callee.caller;
    var newarr = [].slice.call(arguments);
    (typeof console.log === 'object' ? log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
  }
};

// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());


// place any jQuery/helper plugins in here, instead of separate, slower script files.

$(document).ready(function() {
	var $scrollingImg = $("#nav-arrow");
	var home = $("#home-nav")
	var about = $("#about-nav");
	var process = $("#process-nav");
	var portfolio = $("#portfolio-nav");
	var resume = $("#resume-nav");
	var contact = $("#contact-nav")
	
	var homeposition = home.offset();
	var aboutposition = about.offset();
	var processposition = process.offset();
	var portposition = portfolio.offset();
	var resumeposition = resume.offset();
	var contactposition = contact.offset();
	var offset = $("#name").offset();

	$('.home').waypoint(function(event, direction) {
		$scrollingImg
	        .stop()
	        .animate({left: (homeposition.left-offset.left-210) + "px"}, "slow");
	});


$('.about').waypoint(function() {
	$scrollingImg
        .stop()
        .animate({left: (aboutposition.left-offset.left-210) + "px"}, "slow");
});

$('.process').waypoint(function() {
	$scrollingImg
       .stop()
       .animate({left: (processposition.left-offset.left-210) + "px"}, "slow");
	
});

$('.portfolio').waypoint(function() {
	$scrollingImg
      .stop()
      .animate({left: (portposition.left-offset.left-210) + "px"}, "slow");
});

$('.resume').waypoint(function() {
	$scrollingImg
       .stop()
       .animate({left: (resumeposition.left-offset.left-210) + "px"}, "slow");
});

$('.contact').waypoint(function() {
	$scrollingImg
       .stop()
       .animate({left: (contactposition.left-offset.left-210) + "px"}, "slow");
});

});