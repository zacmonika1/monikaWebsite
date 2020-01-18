<?php
/*
need to look at an maybe modify for zane birthday site

*/

session_start();
/*3-24-2015
$GLOBALS['siteName'] use this possibly if it is out of scope 
also need siteName to make sure on site and do not bypass the security 
just because useing same cookies and session names and and possible values that will give access to different
website values

what i am doing now is giving the cookie and the session for each variable a unique name with the site name
appended to it this way -
- there is still a possiblity that someone make the same session or cookie name then if you go to that site
log in with the same username cust_id then go to this site it will bypass this script and when load a 
php script that checks for for the cust_id or the userName seems like I have both in use on different 
pages then as long as it is set you can have access to the page on the site which you clicked

3-25-2015
to do later improvements I need to come back to implament a hash function with the site name and last accessed
field and store the result as a key of sorts that is appended to the name of the variable of the session as 
well as the cookies stored on the client. this key allows for a unique sessions which someone is less likly to 
guess or brute force it . while I can see the array sessions values through some other script that is not 
part of the site I am focusing on I believe  this only is the case because it is on the same server.be it on another
computer  

3-26-2015
there seem to be a 
*/
//define('TEMP_DIR',MAINDIR . 'templates\\');
//define('SITENAME', 'localhost');  
//$GLOBALS['siteName'];
//$siteName=SITENAME;
 $siteName="zanebirthdaySite";
 $_SESSION['siteName']=$siteName;
///print_r($_SESSION);
///ECHO "   sign in session<br/>";
///print_r($_COOKIE);

//$GLOBALS['siteName']="startSessionGlobal";//$siteName;
// if the session vars aren;t set. try to set them with a cookie
//print_r($GLOBALS);
if (	!isset($_SESSION["user_id$siteName"])	)
{
    /*
    setcookie("test","4",time()+3600);
    
    echo $_COOKIE["test"]."    TEST MAKE:";
      setcookie("test","4",time()-3600);
       echo $_COOKIE["test"]."    TEST MAKE:";
    
    setcookie("user_id$siteName","4",time()+3600);
    
    $cookie_name = "user";
$cookie_value = "John Doe";
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");

if(!isset($_COOKIE[$cookie_name])) {
     echo "Cookie named '" . $cookie_name . "' is not set!";
} else {
     echo "Cookie '" . $cookie_name . "' is set!<br>";
     echo "Value is: " . $_COOKIE[$cookie_name];
}
    
    
*/
    
//$_SESSION["user_id$siteName"]=$siteName;
//echo $_COOKIE["log_id$siteName"]."<br/>";
//echo "user id :". $_COOKIE["user_id$siteName"]."<br/>";
//sleep(5);

	if ( isset($_COOKIE["user_id$siteName"])  &&   isset($_COOKIE["userName$siteName"]) )
		{
			$_SESSION["user_id$siteName"]=$_COOKIE["user_id$siteName"];
			$_SESSION["userName$siteName"]=$_COOKIE["userName$siteName"];
			$_SESSION["log_id$siteName"]=$_COOKIE["log_id$siteName"];
		
		}//if end

}//end outter if 

?>