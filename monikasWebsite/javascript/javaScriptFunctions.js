/*if i was to inculde this in a php function I would leave the script tags on  since I am having it as a link in main php file leave it off */
		 /*
		 this uses the ajax to display content pages after you click menu items this is good so the page load asycnisly with out
		 loading whole page 
		 this file was included in the header.php file
		 
		 */
		 
 function loadXMLDoc(ClickedPage)
{

var Page=ClickedPage;
	//fading();
	var xmlhttp;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
		//the php page that holds the content is put into or between the following div id pages_container1
		document.getElementById("PAGES_CONTAINER1").innerHTML=xmlhttp.responseText;
		//document.getElementById("java_CONTAINER1").innerHTML=eval(xmlhttpScript.responseText);
		//document.getElementById("java_CONTAINER1").innerHTML=xmlhttpScript.responseText;
		///var myVideo = document.getElementById("video1"); 
		}
	  }
	  ////////////////
	  var xmlhttpScript;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttpScript=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttpScript=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttpScript.onreadystatechange=function()
	  {
	  if (xmlhttpScript.readyState==4 && xmlhttpScript.status==200)
		{
		//the php page that holds the content is put into or between the following div id pages_container1
		//document.getElementById("PAGES_CONTAINER1").innerHTML=xmlhttp.responseText;
		/*could not get to work it does print in this div but the script did not regester in the DOM object
			so I am commenting it out for now maybe look at later got the java script to work by useing 
			the dynamic load function below will need to pass the .js file name and path to it to apend
			to the head also it seems to make duplacates of the same load .js file
			*/
		//document.getElementById("java_CONTAINER1").innerHTML=xmlhttpScript.responseText;
		///var myVideo = document.getElementById("video1"); 
		}
	  }
	  //////////////////
	  /*
	  this is a little confusing the above puts the results of the php page in between the div id pages_container1
	  but it seems it does not even get the php page and therefore its content till the below .open function happens
	  clickedPage is the page you clicked in the menu
	  */
xmlhttp.open("GET","templates/"+ClickedPage+".php",true);
/*worked but java script did not load in and update into DOM*/
 // xmlhttpScript.open("GET","javascript/contactForm.js",true);
  
  
 // xmlhttpScript.send();
  
xmlhttp.send();
}
		 
	/*
	the point of this is just to make sure the menu bar show the currently selected page with the font color
	*/	 
function currentSelected( menu) {
    //document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
	
    var cls ="Menu1";
	/*
	this holds all the elements that are apart of the Meun1 class
	now in the for loop it compares the page clicked passed into the function with object array 
	which hold all the elements that contains  a class of Menu1 in this case . then it turns all of the 
	content of each of these elements with this class style color to black. then when it leaves the for
	loop it changes the clicked item element to green before leaving the function.
	
	
	*/
   var hold1= document.getElementsByClassName("Menu1");
  //var hold2= document.getElementsByClassName().indexOf(" Menu1 ");
   for( x=0; x < document.getElementsByClassName("Menu1").length ; x++)
        {
            if (   hold1[x].className.indexOf(''+ cls+ '' ) > -1)
                {
				
				// this is the the x element in the loop which contains this class  and changes that 
				// element style color 
                    document.getElementsByClassName("Menu1").item(x).style.color='blue'; 
                   // window.alert(hold1[x].innerHTML);
                }
        }
		alert('in current selected'+menu);
    document.getElementById(menu).style.color='yellow'; //' rgb(146, 221, 15)';
	
	
	//<input type="hidden" name="MenuClicked" value= menu>
	 //document.getElementById(menu).style   ='red';
    
}
// for testing below
function currentSelected2( menu) {
   
    document.getElementById(menu).style.color='yellow';
	//document.getElementById(menu).style.color='green';
	 //document.getElementById(menu).style   ='red';
    
}



// did not need, used css to get it to turn green

function currentHover( menu) {
//window.alert('in current hover');
    //document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
    document.getElementById(menu).style.color='green';
	
	//var heightVar=0;
	// heightVar=document.getElementById("CvSITE_PAGES").clientHeight;
	
	//document.getElementById("SiteFooter").style.height= heightVar+300;
	//document.getElementById("CvSITE_PAGES").clientHeight;
    
}



/*this function is used to fade in and out page content and setting the footer distance to the bottom then 
it calls another function which implaments a ajax process
*/
function fading(ClickedPage, FooterTop)
{
//alert(" ClickedPage:"+ ClickedPage);
////alert($('#test').height() );
$("#PAGES_CONTAINER1").fadeOut(1000);
setTimeout(function(){loadXMLDoc(ClickedPage)},1000);
$("#PAGES_CONTAINER1").fadeIn(1000);
//alert(" ClickedPage2:"+ ClickedPage);
turnOffPicInterator=ClickedPage;

//alert("turnOffPicInterator 0a:"+turnOffPicInterator);
setTimeout(function(){
//document.getElementById("PAGES_CONTAINER").style.top= "289px";
//document.getElementById("PAGES_CONTAINER").style.left= "100px";
//document.getElementById("PAGES_CONTAINER").style.position= "relative";

/*alert("Client Height:  "  
                  + document.getElementById(FooterTop).clientHeight);
				   alert("Offset Height:  "  
                  + document.getElementById(FooterTop).offsetHeight);
				  alert("FooterTop:  "  
                  + FooterTop);
				 
				  */
				  //alert(" ClickedPage 3 timeout:"+ ClickedPage);
var heightVar=0;
	 heightVar=document.getElementById(FooterTop).clientHeight;
	heightVar=heightVar+200;
	document.getElementById("SiteFooter").style.top= heightVar+"px";
	////$('#test').height($("#CvMyName").height());homePageImages
	//q=document.getElementById("zacimage").src= "http://zacshelp.noip.me/zanebirthday/images/turtles/tmnt_logo3_bottom.png";
	//alert('q:'+q);
	
	/*9/23/2014
1.	this will start up the home page images when the home page is clicked
only and start the timed interval that will grab pic names from the data base
table and update the image every few seconds aponde leaving the page it will call 
another function whick stop the slide show and the current count of the image it is 
on so when you go back to the home page it pick up from there

2.	I would also like to have another image on the guest that uploaded it and there name at the bottom of the page	*/

/*9/26/2014 the reason for this if is to let user sign in and sign up with out the temprery bug fix of the interator 
going back to the last page that was click before the interator was canceled the temperay fix is not perrty but it works
*/

 ////alert(" ClickedPage 3a timeout:"+ ClickedPage);
//if (ClickedPage!="../sign_in"	|| ClickedPage!="../cust_form")
{
 //alert(" ClickedPage 3b timeout:"+ ClickedPage);
 //alert("turnOffPicInterator 0:"+turnOffPicInterator);
	homePageImageShow(ClickedPage);
	// alert(" ClickedPage 3c timeout:"+ ClickedPage);
	}
	//else
	{
	
	//clearInterval(picIntervalTimerValue);
	//loadXMLDoc(ClickedPage);
	}
	//document.getElementById("homePageImages").src= "http://zacshelp.noip.me/zanebirthday/images/turtles/tmnt_logo3_bottom.png";
	//document.getElementById("zac1").getattribute('src')= "http://zacshelp.noip.me/zanebirthday/images/turtles/tmnt_logo3_bottom.png";
	
	 /*this will hopefully import the javascript dynamiclly after or before ajax is called so script will run
	 now 3/14/2017 need to put a dynamic name holder for web address*/
dynamic_load("http://zakotech.com/zanebirthday/javascript/contactForm.js");
dynamic_load("http://zakotech.com/zanebirthday/library/jsFunctions.js");
				   
				  },4000);
				  
				 //alert(" ClickedPage4:"+ ClickedPage);

 }
 
 
 
       /* this get the current hovered over item in menu and if has a submenu display it */   
/*
HTML5 Web Storage provides two new objects for storing data on the client:

window.localStorage - stores data with no expiration date
code.sessionStorage - stores data for one session (data is lost when the tab is closed)
Before using web storage, check browser support for localStorage and sessionStorage:
*/	   
function MenuDropDown(hovedItem,ParentHover,MainElementClass)
{
/*hoverItem gets the current mainMenuElement

ParentHover is a number the lower number higher element
from main parent 2 being the parent

MainElementClass is the class of the dropdown menu submenu wrapper

 */
 if(typeof(Storage) !== "undefined") 
		{
				if ( ParentHover ==2) 
				{
					sessionStorage.clickcount2 = 2; 
					 var holdIn=2;
				} 
				else if(ParentHover ==3) 
						{
							//setTimeout(function(){
							sessionStorage.clickcount2=3;
							//alert("it has been 3 sec"+sessionStorage.clickcount2);
							/* this does not seem to matter forgot why i put it in I 
							think it had to do when I was going from subelement to subelement
							because it was mousingout I had to make sure it did not disappear
							
							document.getElementById("dropMenu").style.visibility="visible";
								document.getElementById("dropMenu2").style.visibility="visible";
								document.getElementById("dropMenu3").style.visibility="visible";
							*/
							//},4000);
							//sessionStorage.clickcount2 = 3;
						}
		}
		
var Parent=ParentHover;

//alert("in hover session is: "+sessionStorage.clickcount2);
	if (sessionStorage.clickcount2>=1 || sessionStorage.clickcount2==2 )
	{
	/*alert("in drop down function");
	///document.getElementById("dropMenu").style.visibility="visible";
	///document.getElementById("dropMenu2").style.visibility="visible";
	///document.getElementById("dropMenu3").style.visibility="visible";
	//document.getElementsByClassName("subMenuWrapper").item(0).style.visibility="visible"; 
	//////////
	///document.getElementById("dropMenu").style.visibility="hidden";
	///document.getElementsByClassName("DropMenu1").style.visibility="hidden";
		*/
		
		//var cls ="DropMenu";
		/*this gets the current menu element drop down sub-elements*/
		var cls =MainElementClass;

				/*this get the class object puts it into the varible where
				it will have a loop run through and get all the elements that
				have this class 
				I will then use the index of all of those */
			   var hold1= document.getElementsByClassName(cls);
			  //var hold2= document.getElementsByClassName().indexOf(" Menu1 ");
			   for( x=0; x < document.getElementsByClassName(cls).length ; x++)
					{
						if (   hold1[x].className.indexOf(''+ cls+ '' ) > -1)
							{
								document.getElementsByClassName(cls).item(x).style.visibility="visible"; 
								document.getElementsByClassName(cls).item(x).style.top="0px"; 
								document.getElementsByClassName(cls).item(x).style.height="30px";
								document.getElementsByClassName(cls).item(x).style.width="auto";		
								if (x==0)
								{
								document.getElementsByClassName(cls).item(x).style.visibility="hidden"; 
								 document.getElementsByClassName(cls).item(x).style.top="0px"; 
								 }
								 else
								 {
								 holdDepth=x*40;
								 document.getElementsByClassName(cls).item(x).style.top=holdDepth+"px";
								 }
							  ///  window.alert(hold1[x].innerHTML);
							}
					}//element drop down for loop

					
	
	
	
	
	
	
	
	/////////////////
	
	}
}

function MenuDropDownHidden(hovedItem,ParentHover,MainElementClass)
{

if(typeof(Storage) !== "undefined") {
 
 if (ParentHover==-1 || ParentHover==0)
 {
 sessionStorage.clickcount2 = 0;
 
 }

/* if the user does not go stright to the drop down option in a 1/3 of a sec the menu will hide*/
setTimeout(function(){//sessionStorage.clickcount2=0;
//alert("it has been 3 sec"+sessionStorage.clickcount2);

//},300);//put below to have all timed

var holdIn;
				//if ( sessionStorage.clickcount2 ==1 && ParentHover ==0 || ParentHover== -1 && sessionStorage.clickcount2 ==1 ) 
				if (sessionStorage.clickcount2==3 )
				{
					sessionStorage.clickcount2 = 2;
					holdIn=0;
				} 
				else {
							//sessionStorage.clickcount2 = 1;
							holdIn=1;
						}
		//} this was the end ot the session storage defined if move below
	//alert("what is the session count hidden:"+sessionStorage.clickcount2);
			if (sessionStorage.clickcount2 == 0)
			{	
					
			//alert("in drop down function");
			//document.getElementById("dropMenu").style.visibility="hidden";
			///document.getElementsByClassName("subMenuWrapper").item(0).style.visibility="hidden"; 
			//var cls ="DropMenu";
			
			/*this gets the current menu element drop down sub-elements*/
		var cls =MainElementClass;

			   var hold1= document.getElementsByClassName(cls);
			  //var hold2= document.getElementsByClassName().indexOf(" Menu1 ");
			   for( x=0; x < document.getElementsByClassName(cls).length ; x++)
					{
						if (   hold1[x].className.indexOf(''+ cls+ '' ) > -1)
							{
								document.getElementsByClassName(cls).item(x).style.visibility="hidden"; 
								document.getElementsByClassName(cls).item(x).style.top="0px"; 
								document.getElementsByClassName(cls).item(x).style.height="30px"; 
								if (x==0)
								{
								 document.getElementsByClassName(cls).item(x).style.top="0px"; 
								 }
								 else
								 {
								 holdDepth=x*40;
								 document.getElementsByClassName(cls).item(x).style.top=holdDepth+"px";
								 }
							  ///  window.alert(hold1[x].innerHTML);
							}
					}//element drop down for loop

					}// hide if
					
					},300);// timer 
			}// sessions define if
}


////////////////////
function openDoors(onloadOnly)
{
//document.getElementById("homePageImages").style.src= "http://zacshelp.noip.me/zanebirthday/images/turtles/tmnt_logo3_bottom.png";
	
var x=179;
var x2=179;


//document.getElementById("zac1").style.visibility="hidden";
//while(x => 50)

setTimeout(function(){
playMP3();


	var DoorInterval=setInterval(function(){
	//document.getElementById("zac1").style.top=x+"px";
	if (x<-121)
	{
		clearInterval(DoorInterval);
		//fadingFlag=1;
		$("#zac1").fadeOut(1000);
		$("#zac2").fadeOut(1000);
	}
	
	
	
	x=x-1;
	x2=x2+1;
	document.getElementById("zac1").style.top=x+"px";
	document.getElementById("zac2").style.top=x2+"px";
	//loadXMLDoc(ClickedPage)
	},10);
	
	},onloadOnly);
	
}//end of function



function playPause() { 

	var xmlhttp;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  alert("ready 2 chrome");
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  alert("ready2 ie6");
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
		alert("ready2");
		//the php page that holds the content is put into or between the following div id pages_container1
		//document.getElementById("PAGES_CONTAINER1").innerHTML=xmlhttp.responseText;
		var myVideo = document.getElementById("video1"); 
		}
	  }
//var myVideo = document.getElementById("video1"); 

alert("playPause21");
    if (myVideo.paused) 
        myVideo.play(); 
    else 
        myVideo.pause(); 
} 

function makeSmall() { 
//var myVideo = document.getElementById("video1"); 
alert("make small2 ");
    myVideo.width = 320; 
} 


function dynamic_load(script_url)
{
/*bad apostorpy made code brake “ ”*/
var dynamic_script = document.createElement("script");

dynamic_script.setAttribute("type","text/javascript");
// not sure what this attribute does below
//dynamic_script.setAttribute("crc",script_url);
dynamic_script.setAttribute("src",script_url);

document.getElementsByTagName("head")[0].appendChild(dynamic_script);

}


////////

function hasGetUserMedia() {
  return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

if (hasGetUserMedia()) {
  // Good to go!
  alert('good to go ');
} else {
  alert('getUserMedia() is not supported in your browser');
}



////////////////

var videoElement = document.querySelector("video");
alert("query selector video "+videoElement);
var audioSelect = document.querySelector("select#audioSource");
var videoSelect = document.querySelector("select#videoSource");
var startButton = document.querySelector("button#start");

navigator.getUserMedia = navigator.getUserMedia ||
  navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

function gotSources(sourceInfos) {
  for (var i = 0; i != sourceInfos.length; ++i) {
    var sourceInfo = sourceInfos[i];
    var option = document.createElement("option");
    option.value = sourceInfo.id;
    if (sourceInfo.kind === 'audio') {
      option.text = sourceInfo.label || 'microphone ' + (audioSelect.length + 1);
      audioSelect.appendChild(option);
    } else if (sourceInfo.kind === 'video') {
      option.text = sourceInfo.label || 'camera ' + (videoSelect.length + 1);
      videoSelect.appendChild(option);
    } else {
      console.log('Some other kind of source: ', sourceInfo);
    }
  }
}

if (typeof MediaStreamTrack === 'undefined'){
  alert('This browser does not support MediaStreamTrack.\n\nTry Chrome Canary.');
} else {
 //alert('This browser does support MediaStreamTrack.\n\nTry Chrome Canary.');
 
 /*this seem to take the built in object ,class, then call the its getSources function
 while sending it the ether a pointer or a reference to a function I have above it looks for the
 function that has one peramitor sourceInfos. ??? my question is how or where do you get
 the api for mediaStreamTrack to not only know what function it has but also what different isotopes of 
 that function variations of that function in other words*/
 // MediaStreamTrack.getSources(gotSources);
}


function successCallback(stream) {
  window.stream = stream; // make stream available to console
  videoElement.src = window.URL.createObjectURL(stream);
  videoElement.play();
}

function errorCallback(error){
  console.log("navigator.getUserMedia error: ", error);
}

function start(){
  if (!!window.stream) {
   alert('alert stream stop');
    videoElement.src = null;
    window.stream.stop();
  }
 // alert("start stream audio "+audioSelect);
  var audioSource = audioSelect.value;
  // alert("start stream audio1 ");
  var videoSource = videoSelect.value;
  // alert("start stream audio2 "+videoSelect);
  var constraints = {
    audio: {
      optional: [{sourceId: audioSource}]
    },
    video: {
      optional: [{sourceId: videoSource}]
    }
  };
  // alert('alert1a');
  navigator.getUserMedia(constraints, successCallback, errorCallback);
  
  ///
  // Not showing vendor prefixes.
  /*
  navigator.getUserMedia({video: true, audio: true}, function(localMediaStream) {
  alert('alert1');
    var video = document.querySelector('video');
    video.src = window.URL.createObjectURL(localMediaStream);
 alert('alert2');
    // Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
    // See crbug.com/110938.
    video.onloadedmetadata = function(e) {
      // Ready to go. Do some stuff.
    };
  }, errorCallback);
  */
  ///
  
  
}
 //alert('alert a');
 var errorCallback2 = function(e) {
    console.log('Reeeejected!', e);
  };
 

 
// <!-- Begin

  function DoPreview()
  {
    var filename = document.form1.filesent.value;
    var Img = new Image();
	alert("filename source :"+filename);
	alert("navigator.appName :"+navigator.appName);
	/*why does not run it seems to be ok when I modified netscape to netscape1??*/
    if (navigator.appName == "Netscape1")
    {
      alert("Previews do not work in Netscape.");
    }
    else
    {
      Img.src = filename;
      document.images[0].src = Img.src;
    }
  }

  function CheckUpload()
  {
    var filename = document.form1.filesent.value;
    var extension;
    var valid = true
    var Img1 = new Image()
	/*why does not run it seems to be ok when I modified netscape to netscape1??*/
    if (navigator.appName == "Netscape1")
    {
      alert("This upload function cannot be used with Netscape.");
      valid = false;
    }
    else if (filename == '')
    {
      valid = false;
      alert("Please include a file.");
    }
    else
    {  
      extension = filename.substring(filename.length - 3, filename.length);
      if (extension.toUpperCase() != 'JPG')
      {
        valid = false;
        alert("The file must be a JPG.");
      }
      else
      {
        Img1.src = filename;
        if ((Img1.height == 0) || (Img1.width == 0))
        {
          valid = false;
          alert("The file is invalid.");
        }
        else
        {
          document.form1.height.value = Img1.height;
          document.form1.width.value = Img1.width;
        }
      }
    }
    return valid
  }
// End -->
//////music playing

function playMP3(){

document.getElementById("mp3").play();
}

///////////slide show /////////////////////////////////////////////////////////////////////////////////////////////////////////////
var myFirstVar=-1;
var clearFlag=0;
var counter=0;
//var ClickedPage2=ClickedPage;
/*need up here or else not able to clear interval it seem anyway*/
var picIntervalTimerValue;
var ClickedPageGoble="";
var turnOffPicInterator="";
function homePageImageShow(ClickedPage)
{
 ClickedPageGoble= ClickedPage;
 //alert(" ClickedPage5 home pageimageshow :"+ ClickedPage);
/*first qurrey data base get the number of pics
use that for the to tell when need to go back to begining 
have a varible to hold the count
have another varible to hold the path/name of pic
then insert that new value at the next interval at the same time update the count
value so you can querry the DB for that count value to get the path/name doing this
inside the interval function */

/*on load of web page load a php page that gets a list array 
of all the file name and path then the javascript will use the interval
 and the counter to iterate through the array of pictures
 on click of any other menu then home it clear the interval and save the 
 counter value so then when it comes back to the  page it will start the interval
 again on the last picture viewed showed

picSlideShow.php is the php file sent to be run */
 
 
 //loadXMLDoc("picSlideShow");
// alert("ClickedPage outside interval :"+ClickedPage );
 var clickedMenuTab=ClickedPage;
var x=0;
var picCount=0;/*this hold the number of picture upload */
var picIndex=0;/*this hold the current index of pic in slide show */
//alert("turnOffPicInterator 1:"+turnOffPicInterator);
//turnOffPicInterator=ClickedPage;
//alert("turnOffPicInterator 2:"+turnOffPicInterator);


/*if clickedMenuTab or rather the clicked tab is any thing but the home tab it goes in here to stop the timer*/
	if (clickedMenuTab != "home")
		{
			//alert(" ClickedPage6 does not = home if:"+ ClickedPage);
			//loadXMLDoc(ClickedPage);
			//alert("1inside if clear1 :"+ClickedPage );
			clearInterval(picIntervalTimerValue);
			turnOffPicInterator=ClickedPage;
			
			///////testing1///clearInterval(myFirstVar);
			//clearInterval(myHoldVarToClear);
			//alert("2a inside if clear picIntervalTimerValue:"+ picIntervalTimerValue +" "+myFirstVar+" "+myHoldVarToClear);
			//picIntervalTimerValue=-1;
			myFirstVar=-1;
			myHoldVarToClear=-1;
			
			//clearInterval(FIn);
			//fadingFlag=1;
			clearFlag=1;
			counter =0;
			//alert("2inside if clear picIntervalTimerValue:"+ picIntervalTimerValue +" "+myFirstVar+" "+myHoldVarToClear);
			
		}
		
		
	if (clickedMenuTab == "home")
		{
		/*one reason to have this is to clear or prevent more than one time being set by clicking the home tab*/
		clearInterval(picIntervalTimerValue);
		/*need this to let it pass the below if inside the iterator  */
		turnOffPicInterator=ClickedPage;
		
				/*the only time it call to see if a picture has been uploaded is if you are on the home page
				need to put on a 30 sec or 1min interval for this */
				///testing1///// if (turnOffPicInterator =="home")
					{
						//alert("ClickedPage 1:"+ClickedPage);
						/*loads database of picture meta data*/
						loadXMLDoc("picSlideShow");
						/*gets the pages content to be seen via temples*/
						loadXMLDoc(ClickedPage);
						/*this is to let the pictures be soon on the first click of the home tab button*/
						clearFlag=0;
						counter=counter+1;
						//window.location.assign("http://zacshelp.noip.me/zanebirthday");
					}
			
			//var FOut=setInterval(function(){$("#homePageImages").fadeOut(2000);},2000);
			 picIntervalTimerValue=setInterval(function()
				{
				//document.getElementById("zac1").style.top=x+"px";
				////alert("picIntervalTimerValue count"+counter);
				////alert("ClickedPage 2:"+ClickedPage);
				//alert("turnOffPicInterator 3:"+turnOffPicInterator);
				/*need this in case you click one button and then before interval starts you press another*/
				if (turnOffPicInterator =="home")
					{
				
				/*picIntervalTimerValue get over wrote ever time the home tab is pressed a new interval is set along with the old one 
				which now need to be clear out */
				
				
				if (counter==1)
					{
						//alert("first counter + picIntervalTimerValue :"+myFirstVar+picIntervalTimerValue );
						var	myholdVar=picIntervalTimerValue;
							myFirstVar=picIntervalTimerValue;
							
							if (clearFlag==1)
								{
									/*redundent would have cleared above if did not match home*/
									clearInterval(myFirstVar);
									//alert("2first counter + picIntervalTimerValue :"+myFirstVar+picIntervalTimerValue );
									clearInterval(myholdVar);
									myFirstVar=-1;
									//break;
								}
							
							
							
						
					}
				/*this is to catch the interval timer and only have it have one running at a time */
				if (counter==2)
					{
					var	myholdVar=myFirstVar;
						myFirstVar=picIntervalTimerValue;//this now hold the second picIntervalTimerValue value
						
						//if (clearFlag==1)
						{
						
						//clearInterval(myFirstVar);
						//alert("2first counter + picIntervalTimerValue :"+myFirstVar+picIntervalTimerValue );
						/*this is the old interater which need to be stop because you got a duplic intertor going now*/
						clearInterval(myholdVar);
						//myFirstVar=-1;// clear this out
						//
						}
						
						counter =1;
						
					
					}
				
				
						//alert("picIntervalTimerValue and myFirst var :"+myFirstVar+picIntervalTimerValue );
						/*put clearFlag in for the home tab does not have to be press twice*/
						if (picIntervalTimerValue != myFirstVar && clearFlag!=0)
						{
							myHoldVarToClear=myFirstVar;
							myFirstVar=picIntervalTimerValue;
							
							clearInterval(myHoldVarToClear);
						}
						
						
						
				
				picIndex=picIndex+1;
				//alert("ClickedPage :"+ClickedPage+x );
				//alert("clickedMenuTab :"+clickedMenuTab );
				//alert("picIntervalTimerValue:"+picIntervalTimerValue);
				
				
				
				
									if (clickedMenuTab != "home")
										{
											//alert("inside if clear1 :"+ClickedPage );
											clearInterval(picIntervalTimerValue);
											//clearInterval(FOut);
											//clearInterval(FIn);
												//fadingFlag=1;
											//alert("inside if clear :"+ClickedPage );
												
										}
									
									
					/*fades out the slideing doors*/				
					$("#zac1").fadeOut(100);
					$("#zac2").fadeOut(100);
				
					var flag=0;
				////alert("flag 1:"+flag );
				
												if ((x==0 || x==1)&& counter!=2 && clearFlag!=1)//ClickedPage == "home" )
												{
												
												setTimeout(function(){$("#homePageImages").fadeOut(1000);},9000);
												setTimeout(function(){$("#homePageImages").fadeIn(2000);},9100);
												
												//
												//
												//loadXMLDoc("picSlideShow");
												//loadXMLDoc(ClickedPage);
												/*4-1-2015 this was or is a bug it happens the first time you log in if you do not click on the home 
												button it gives errors because the sessions for some reason have not been set yet? that where in the picSlideShow.php
												file I tried to redirect but got the index.php in the div tags which shows inside of the page template 
												
												when I use the currentSelected and fading that circumvents the problem but the fading is to fast for the display of 
													the pictures not to mention that it keeps on loading the logo doors over and over*/
												//currentSelected('home1'); 
												//fading('home','PAGES_CONTAINER');
												
												//loadXMLDoc("picSlideShowSessionVarSet");
												
												loadXMLDoc("picSlideShow1");
												//setTimeout(function(){$("#homePageImages").fadeOut(0);},10);
												//alert("pic slide show1"+picIntervalTimerValue+" ClickedPageGoble:" +ClickedPageGoble);
												//if (ClickedPage !="home")
												
												{
												//loadXMLDoc(ClickedPage);
												}
												//document.getElementById("homePageImages").src= "http://zacshelp.noip.me/zanebirthday/images/turtles/tmnt_logo3_top.png";
												
												//document.getElementById("homePageImages").src= $_SESSION['picPath'][1];
												//alert("alert 1"+$_SESSION['picPath'][0]);
												//loadXMLDoc("picSlideShow");
												//alert("alert 2"+$_SESSION['picPath'][1]);
												x=1;
												flag=1;
												//break;
												}
												
												
												
				
												//alert("if 3 x  flag:"+x+flag );
												if (x==1 && flag ==0)
												{
												
												
												//alert("1if 3 x :"+x );
												//$("#homePageImages").fadeOut(500);
												//$("#homePageImages").fadeIn(4000);
												//setTimeout(function(){$("#homePageImages").fadeOut(1000);},1000);
												//setTimeout(function(){$("#homePageImages").fadeIn(1000);},4000);
												//document.getElementById("homePageImages").src= "http://zacshelp.noip.me/zanebirthday/images/turtles/tmnt_logo3_bottom.png";
												//document.getElementById("homePageImages").src= $_SESSION['picPath'][2];
												//alert();
												//loadXMLDoc("picSlideShow1");
												//alert("2if 3 x :"+x );
												x=0;
												//alert("if 3 x :"+x );
												}
						}// of not = home if 

				//document.getElementById("zac1").style.top=x+"px";
				//document.getElementById("zac2").style.top=x2+"px";
				//loadXMLDoc(ClickedPage)
				clearFlag=0;
				},10000);
				
				
	
	
			//var FIn=setInterval(function(){$("#homePageImages").fadeIn(2000);},2000);

		}//end of home page if

}//end of function

/////////
function picArrayStore()
{
//alert("picArrayStore");
}
//////////////////////////// guest capture snap  shoot photo/////
function getVarbleValues()
{
 videoElement = document.querySelector("video");
alert("query selector video "+videoElement);
 audioSelect = document.querySelector("select#audioSource");
 videoSelect = document.querySelector("select#videoSource");
 startButton = document.querySelector("button#start");

/*this gets the i belevie the first video element and puts its object in this varible it is defined
in the javaScriptfunctions.js file where first it get null now that video tag  is defined
above it get another value which I am not sure what it contain in this video object and what you can
get from it ??? 	*/


		videoElement = document.querySelector("video");
alert("query selector from index.php video "+videoElement);
 audioSelect = document.querySelector("select#audioSource");
 videoSelect = document.querySelector("select#videoSource");
 /*do not appear to need the startbutton below not in form */
 startButton = document.querySelector("button#start");
 /*three equels not sure what that is saying and do not know what the typeof does???
 but mediastreamtrack is some kind of object variable that is built into the api of the newer browsers */
 if (typeof MediaStreamTrack === 'undefined'){
  alert('This browser does not support MediaStreamTrack.\n\nTry Chrome Canary.');
} else {
 alert('inside This browser does support MediaStreamTrack.\n\nTry Chrome Canary.');
  MediaStreamTrack.getSources(gotSources);
  alert("aget media stream track");
}
 /* when the above variables which is connected to tag elements "select" with id
 audioSource and videoSource are clicked and the value is changed the browser api internal function tited to that 
 element is triggered then it calls the start function which does not need to have () in javascript i guess ???
 */
//alert('alert b');
 audioSelect.onchange = start;
 //alert('alert1');
videoSelect.onchange = start;
 //alert('alert c');
start();

//video.addEventListener('click', snapshot, false);

////////////





///////////////
/*gets same video element object as videosource above this is use in the capture of the picture
once i got the canvas object I need to set the context i guess with the getcontect function api
????
also the localmediastream is first set to null when the page first loads but get the stream data gotten
from the navigator.getUserMedia() function that takes three peramators i think??? array{key:value},function pointer which takes one peramitors, and another
callback pointer???
 
*/ 
   videoElement = document.querySelector('video');
   image = document.querySelector('img');
   canvas = document.querySelector('canvas');
   ctx = canvas.getContext('2d');
   localMediaStream = null;


 videoElement.addEventListener('click', snapshot, false);

  // Not showing vendor prefixes or code that works cross-browser.
  navigator.getUserMedia({video: true}, function(stream) {
    videoElement.src = window.URL.createObjectURL(stream);
    localMediaStream = stream;
  }, errorCallback);
  //snapshot();
  }//end of function
  
  /* // commentted out to get ride of error same code in the index.php file do not know if neeeded
  // 3/20/2017
var video = document.querySelector('video');
  var image = document.querySelector('img');
  var canvas2 = document.querySelector('canvas');
  //changed below canvas to canvas2 to see if fix error 3/18/2017
  alert("before error");
  var ctx2 = canvas2.getContext('2d');
  alert("after error");
  var localMediaStream2 = null;
  */

  
  
  function snapshot() {
  alert("snapshot1");
    if (localMediaStream) {
	/*gets the same canvas object tag as the "canvas" do i need ?*/
	 canvas= document.getElementById("MyCanvas");
	 alert("snapshot1a");
	if (canvas.getContext)
	{
	 ctx=canvas.getContext("2d");
	var myImage= canvas.toDataURL("image/jpg");
	
	}
	alert("snapshot1b");
	var imageElement = document.getElementById("MyPic");
	imageElement.src = myImage;
	var inputElement = document.getElementById("fileSentId2");
	inputElement.value = myImage;
	//inputElement.value = myImage;
	//document.form1.filesent.value = myImage;
	
	alert("snapshot2");
      ctx.drawImage(video, 0, 0,200,160);
      // "image/webp" works in Chrome.
      // Other browsers will fall back to image/png.
      ///document.querySelector('img').src = canvas.toDataURL('image/webp');
	 // document.querySelector('img').src = canvas.toDataURL("image/png");
    }
  }

 