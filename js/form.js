

function formValidation(){
	var fn = document.registration.first_name;
	var ln = document.registration.last_name;
	var adrs = document.registration.addrs;
	var mob_num = document.registration.phno;
	var corse = document.registration.course;
	var sexm = document.registration.msex;
	var sexf = document.registration.fsex;

	if(name_validation(fn,ln)){
	if(allLetter(fn, ln)){
	if(emptynumber(mob_num)){
	if(allnumber(mob_num)){	
	
	}	
	
	}	
	
	}
		
	}

	


    return false;

}

function name_validation(fn,ln){
	var fn_len = fn.value.length;
	var ln_len = ln.value.length;
	if(fn_len == 0 || ln_len == 0){
		alert("Fill up the name section!!");
		return false;
	}
	return true;
}

function allLetter(name1, name2){
	var letter= /^[A-Za-z]+$/;
	if(!name1.value.match(letter)){
		
		alert("firstname and lastname should contain letters only!!");
		name1.focus();
		return false;
	}

	return true;
	}
	
function emptynumber(mob_num){
	var num= mob_num.value.length;
	if(num == 0){
		alert("Mobile number field is empty!!");
		return false;
	}
	return true;
}



function allnumber(num){
	var number_check= /^[0-9]+$/;
	if(num.value.match(number_check)){
		return true;
	}
	else{
		alert("The value entered should only be numbers!!");
		num.focus();
	}
}




