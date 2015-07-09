
/*****************************************************
*	Quick swap out of member info 
******************************************************/
/* Member One Info */
var storyOne= "I'm telling a great and heartwarming story about my dream for the future, and working to save people's lives through technology.";
var memberOne= {
	name:"Highlighted Member: Jane Doe",
	major:"Previous Degree: Liberal Arts",
	job:"Dream Job: Full Stack Engineer",
	github:"www.github.com",
	googlePlus:"www.googleplus.com"
};

/* Member Two Info */
var storyTwo= "I'm telling a great and heartwarming story about my dream for the future, and working to save people's lives through technology.";
var memberTwo= {
	name:"Highlighted Member: Sally Smith",
	major:"Previous Degree: Nursing",
	job:"Dream Job: Software Developer",
	github:"www.github.com",
	googlePlus:"www.googleplus.com"
};


/* add to HTML */
$(document).ready(function(){
	/* Member One */
	$(".rightMain").prepend(memberOne.job+"</br>");
	$(".rightMain").prepend(memberOne.major+"</br>");
	$(".rightMain").prepend("<h2>"+memberOne.name+"</h2>");
	$(".panel").append("<p>"+storyOne+"</p>");
	$(".panel").append("<a href="+memberOne.github+">Github Portfolio</a></br>");
	$(".panel").append("<a href="+memberOne.googlePlus+">Google Plus Page</a></br>");

	/* Member Two */
	$(".rightMainSecond").prepend(memberTwo.job+"</br>");
	$(".rightMainSecond").prepend(memberTwo.major+"</br>");
	$(".rightMainSecond").prepend("<h2>"+memberTwo.name+"</h2>");
	$(".panel2").append("<p>"+storyTwo+"</p>");
	$(".panel2").append("<a href="+memberTwo.github+">Github Portfolio</a></br>");
	$(".panel2").append("<a href="+memberTwo.googlePlus+">Google Plus Page</a></br>");
});
