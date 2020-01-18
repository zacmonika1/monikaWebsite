<!DOCTYPE html>
  <html>
    <head>
        
      <!-- added 10-10-2019 Hotjar Tracking Code for zakotech.com 

      took out the 1/7/2020 for monikas site 

       -->
           
        
        <link rel="stylesheet" type="text/css" href="head1.css">
        <!--what does the meta tags do exactly ? and what about content attribute -->
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
		
	
		</script>
		<?php //3/14/2017 need to put a dynamic website url ?>
		<!--<script src="http://zakotech.com/monikasWebsite/javascript/javaScriptFunctions.js">-->
		</script>
	
		 <?php
		 /*this count the number of depth of the file and use the dirname function and the directory separator which is dependent on the 
		 on the system it is on eg.windows , mac*/
		  $include_dist = substr_count(dirname(__FILE__), DIRECTORY_SEPARATOR);
     $calling_dist = substr_count(dirname($_SERVER['SCRIPT_FILENAME']), '/');
		// require_once('prepend.php');
			//echo '<title>'.$pageTitle.' '.'</title>';
		 ?>
		 <!--need to set up for my css files and images for zanes birthday site -->
		 <link rel="stylesheet" type="text/css" href="<?=str_repeat('../', $calling_dist - $include_dist + 1)?>library/zacsHelp.css"></link>
		 <link rel="icon" href="<?=str_repeat('../', $calling_dist - $include_dist + 1)?>smiley.gif" type="image/gif"  ></link>
		 
