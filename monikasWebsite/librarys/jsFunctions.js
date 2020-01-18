
	<script type="text/javascript">
	
	/*
	$(document).ready(function() {
    $('.submit_on_enter').keydown(function(event) {
	document.getElementById('hold').innerHTML="press enter code:" +event.keyCode+" </br>";
        if (event.keyCode == 13) {
			document.getElementById('hold').innerHTML="press enter </br>";
            this.form.submit();
            return false;
         }
    });
  });
	*/
	
	
	
	function myFunction_keypress()
{
//alert("You pressed a key inside the input field:  "+event.keyCode);
}



function emailSubmit(fileOpened)
{
		var userName=  document.forms["QuestionEmail"]["message"].value;
		//var passWord=  document.forms["QuestionEmail"]["passWord"].value;
		var empty_field= false;
		
		
		
		for (var i=0 ; i < document.forms["QuestionEmail"].length ; i++)
				{
					
					
					if (document.forms["QuestionEmail"].elements[i].value==""||document.forms["QuestionEmail"].elements[i].value==null )
					{
					empty_field= true;
					alert("have to enter a message to send");

						break;



					}// end of if
					
				}//end of for loop
		
		
			if ( empty_field== false)
								

			{
			//alert("signing in");
		//	var x = document.getElementById("signInForm").action;

			//alert("action"+x);
				//document.getElementById("signInForm").action="http://zacshelp.noip.me/sign_in.php/cust_signin_validate.php";//fileOpened;
				//x = document.getElementById("signInForm").action;
				//alert("action2"+x);
				document.getElementById("signIn").disabled=true;
				document.getElementById("QuestionEmail").submit();
				

			}


}//end function signin


function signInF(fileOpened)
{
		var userName=  document.forms["signInForm"]["userName"].value;
		var passWord=  document.forms["signInForm"]["passWord"].value;
		var empty_field= false;
		
		
		
		for (var i=0 ; i < document.forms["signInForm"].length ; i++)
				{
					
					
					if (document.forms["signInForm"].elements[i].value==""||document.forms["signInForm"].elements[i].value==null )
					{
					empty_field= true;
					alert("need to have user name and password");

						break;



					}// end of if
					
				}//end of for loop
		
		
			if ( empty_field== false)
								

			{
			//alert("signing in");
		//	var x = document.getElementById("signInForm").action;

			//alert("action"+x);
				//document.getElementById("signInForm").action="http://zacshelp.noip.me/sign_in.php/cust_signin_validate.php";//fileOpened;
				//x = document.getElementById("signInForm").action;
				//alert("action2"+x);
				document.getElementById("signIn").disabled=true;
				document.getElementById("signInForm").submit();
				

			}


}//end function signin

	
function submitform1()
{
		//alert("Welcome1 " + document.forms["sign_up"]["first_name"].value + "!");
		var fName=  document.forms["sign_up"]["first_name"].value;
		var lName=  document.forms["sign_up"]["last_name"].value;
		var age=  document.forms["sign_up"]["age"].value;
		var eMail=  document.forms["sign_up"]["email"].value;
		var phone=  document.forms["sign_up"]["phone"].value;
		var userName=  document.forms["sign_up"]["user_name"].value;
		var passWord=  document.forms["sign_up"]["password"].value;
		var gender=  document.forms["sign_up"]["sex"].value;
						
						var msg= 'first name: '+ fName +'\n';
						var msg2=   'last name: '+ lName +'\n';
						var msg3=   'email: '+ eMail +'\n';
						var msg4=  'phone: '+ phone +'\n';
						var msg5=  'user name: '+ userName +' \n';

		var empty_field= false;
		//alert(phone.length);
		
		
		//alert("empty_field: "+empty_field);

//alert("form length: " + document.forms["sign_up"].length + "!");

				for (var i=0 ; i < document.forms["sign_up"].length ; i++)
				{
					//alert("form elements: " + document.forms["sign_up"].elements[i].value+ "!");
					
					if (document.forms["sign_up"].elements[i].value==""||document.forms["sign_up"].elements[i].value==null )
					{
					empty_field= true;
					alert("all field need a value");

						break;



					}// end of if
					//document.write("count"+i);
				//document.getElementById().innerHTML
				}//end of for loop
	//alert("empty_field2: "+empty_field);
				
					
					if ( emailValidateForm() )
							{
							
							document.getElementById('emails').innerHTML="*js email need @ sign and 2 digits aftter dot ";
								empty_field = true;
							
							}
							else 
							
							{
							document.getElementById('emails').innerHTML="*";
							
							}
							
							
					
					if ( numberValidate(age))
							{
							
							document.getElementById('age').innerHTML="js age needs to be a number";
								empty_field = true;
							
							}
							else 
							
							{
							document.getElementById('age').innerHTML="";
							
							}
					
					
					
							/*sign up varible as a function that check the lenght guess i did not implament it ?? */
							if ( (phone.length!=10))
							{
							
							document.getElementById('phoneErr').innerHTML="js phone needs 10 digits";
								empty_field = true;
							
							}
							else 
							
							{
							document.getElementById('phoneErr').innerHTML="";
							
							}
		
						
						//alert("all field need 121212a value");
						//alert("empty_field2: "+empty_field);
						//alert("all field need 1212a value");

								if (empty_field== false)
								{
									var var1 =confirm("ARE THESE THE CORRECT VALUES \n \n " + msg+msg2+msg3+msg4+msg5);
									//document.getElementById("test").innerHTML="hi zac var1 :";
									//alert("hi confirm "+var1);
									//var1;
								}//end if 

								if (var1 ==true && empty_field== false)
								//if ($_SERVER["REQUEST_METHOD"] == "POST")

								{
									//alert("Welcome1 " + document.forms["sign_up"]["first_name"].value + "!");

									//setTimeout(function(){x.value="2 seconds"},2000);
									//setTimeout(function(){document.write("hi");},6000);
									setTimeout(function(){document.getElementById('test').innerHTML="submitting....3 ";},1000);
									setTimeout(function(){document.getElementById('test').innerHTML="submitting....2 ";},2000);
									setTimeout(function(){document.getElementById('test').innerHTML="submitting....1 ";},3000);
									setTimeout(function(){document.getElementById("sign_up").submit();},4000);
									 document.getElementById("submitButton").disabled=true;

									

								}//end if


//document.getElementById("sign_up").submit();
  
}//end function

/*This means that the input data must contain an @ sign and at least one dot (.). Also, the @ must not be 
the first character of the email address, and the last dot must be present after the @ sign, and minimum 2 
characters before the end:*/

function emailValidateForm()
{
var x=document.forms["sign_up"]["email"].value;
var atpos=x.indexOf("@");
var dotpos=x.lastIndexOf(".");
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
  {
  //alert("Not a valid e-mail address");
  return true;
  }
  return false;
}



/*NaN is JavaScript reserved word indicating that the result of a numeric operation was not a number.

You can use the global JavaScript function isNaN(value) to find out if a value is a number.*/
function numberValidate(num)
{
//alert("not a number for a field");
 return isNaN(num);

}




function jsOutputError()
{
//alert("in js output error");
//document.getElementById('user_name').innerHTML='already used: re-enter another user name </br>'; 

}

</script>