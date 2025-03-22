function charCheck()
	{
		var firstName=document.getElementById('firstname').value;
		//var char1="^[a-zA-Z]+$";

		if(!(firstName))
		{
			document.getElementById('charmsg').innerHTML="Number and special symbol is not allowed...!";
			document.getElementById('firstname').value="";
		}
		else
		{
			document.getElementById('charmsg').innerHTML="";
		}
	}

function emailCheck()
	{
		var email=document.getElementById('email').value;
	//	var eml=/\S+@\S+\.\S+/ ;


		if(!(email))
		{
			document.getElementById('emailmsg').innerHTML="Please..! Enter Valid Email Id...!";
			document.getElementById('email').value="";
		}
		else
		{
			document.getElementById('emailmsg').innerHTML="";
		}
	}
 

 function passwordCheck()
	{
		var password=document.getElementById('password').value;
		//var pass=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;



		if(!(password))
		{
			document.getElementById('passmsg').innerHTML="Please..! Enter Valid password...!";
			document.getElementById('password').value="";
		}
		else
		{
			document.getElementById('passmsg').innerHTML="";
		}
	}
	function confirm()
	{ 
	    var password=document.getElementById('password').value;
	    var cpassword=document.getElementById('cpassword').value;


	    if (!(password==cpassword))
	    {
	    	document.getElementById('confirmPass').innerHTML="please enter correct password";
	    	document.getElementById('cpassword').value="";

	        // alert('please enter correct password');
	     }
	     else
	     {
	     	document.getElementById('confirmPass').innerHTML="";
	     }

	 }

	     function formVlidation()
	{
		//          **** gret value from input  ****            //

	var firstName=document.getElementById('firstname').value;
	var email=document.getElementById('email').value;
	var password=document.getElementById('password').value;
	var cpassword=document.getElementById('cpassword').value;
	var textarea=document.getElementById('textarea').value;

        //  **** check input field fill or not ****          //

	 if (firstName ==" " || email ==" " || password ==" " || cpassword =="") 
	 {
	 	alert('please..!! Fill all Mandatory fields...!');
	 }
	 else
	 {
	 	alert('Your data is Successfully Submited...!!');
	 }
		 
  	

  	    // **** set data to next form ****            


	document.getElementById('label1').innerHTML=firstName;
	document.getElementById('label2').innerHTML=email;
	document.getElementById('label3').innerHTML=password;
	document.getElementById('label4').innerHTML=cpassword;
	document.getElementById('label5').innerHTML=textarea;

	}