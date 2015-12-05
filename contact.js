/* RFK contact functions


	Coder: Theral Jessop
	Created Date: October 16, 2014
	Modified Date: October 19, 2014
	Created for INFO I213 Web Design and Development at IUK
	Group: Red

	Description:
		This is the website for Radio Free Kokomo.
 */
	function initForm(t) { // initialize the contact form
		var frm = document.getElementById("contactform");
		if (t=="Reset") {
			frm.userSubject.value="";
			frm.userSubject.style.display="none";
			document.getElementById("userAsterisk").style.display="none";
		} else {
			checkSubject(); //check to see if the subject has already been selected to 'Other'
		}
	}

	function checkfrm() { // validation code
		var frm = document.getElementById("contactform"); // form element variable
		var formError=false; // form error variable
		
		// validate the name
		if (frm.name.value=="" || frm.name.value==null) { 
			document.getElementById("ername").innerHTML="You must enter your name!"; // error message if no name entered
			formError=true;
			frm.name.focus();
		} else {
			var nameText = document.getElementById("name").value; // get name text
			var atpos = nameText.indexOf(" ");
			var dotpos = nameText.lastIndexOf(" ");
			if (atpos< 2 || dotpos+2>=nameText.length) {
				document.getElementById("ername").innerHTML="Please enter your full name!"; // error message
				formError=true;
			} else {
				document.getElementById("ername").innerHTML=""; // clear error message
			}
		}
		
		// validate email
		if (frm.mail.value=="" || frm.mail.value==null) { 
			document.getElementById("eremail").innerHTML="You must enter your valid email address!"; // error message if no email entered
			formError=true;
		} else {
			var emailText = document.getElementById("mail").value; // get email text
			var atpos = emailText.indexOf("@");
			var dotpos = emailText.lastIndexOf(".");
			if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=emailText.length) {
				document.getElementById("eremail").innerHTML="Please enter a valid email address!"; // error message
				formError=true;
			} else {
				document.getElementById("eremail").innerHTML=""; // clear error message
			}
		}
		
		// validate subject
		if (frm.subject.value=="Select") { 
			document.getElementById("errSubject").innerHTML="Select a subject from the list"; // Error for no subject
			formError=true;
		} else {
			if (frm.subject.value=="Other") { // user selected 'Other' so validate user entered subject line
				if (frm.userSubject.value=="" || frm.userSubject.value==null) {
					document.getElementById("errSubject").innerHTML="Subject line cannot be blank!"; // error on user subject line
					formError=true;
				}
			} else {
				document.getElementById("errSubject").innerHTML=""; // clear error message
			}
		}
		// did the user select any of the radio buttons
		 if (!(frm.student.checked || frm.staff.checked || frm.public.checked)) {
			document.getElementById("errIAM").innerHTML="You must pick one!";
			formError=true;
		} else { // otherwise
			document.getElementById("errIAM").innerHTML="";
		}
		
		// was the form free from errors?
		if (!formError) { 
			document.getElementById("btnError").innerHTML="";
			return true;
		} else { // otherwise 
			document.getElementById("btnError").innerHTML="Submission Errors. Please check your entries!";
			return false;
		}
	}
	
	// did the user choose 'Other' in 'subject'
	function checkSubject() {
		var frm = document.getElementById("contactform"); // form element variable
		if (frm.subject.value=="Other") { // make the 'userSubject' text box and red adterisk visible
			frm.userSubject.style.display="inline"; // text box
			frm.userSubject.focus();
			document.getElementById("userAsterisk").style.display="inline"; // red asterisk
		} else { // otherwise hide the text box and red asterisk
			frm.userSubject.value=""; // clear contents of text box
			frm.userSubject.style.display="none"; // text box
			document.getElementById("userAsterisk").style.display="none"; // red asterisk
		}
	}
	
