$(document).ready(function(){
"use strict";
 
var tot = {
	count: 1
	},
	doc = {},
	docNum = {},
	cert = {},
	legal = {},
	certFees = {
		ass: 40,
		app: 40,
		pat: 40,
		FH: 65
	},
	ourFees = {
		certAss: 35,
		certApp: 35,
		certPat: 35,
		certFH: 55,
		ass: 60,
		pat: 5,
		legal: 60,
		app: "Need Page Count",
		FH: "Need Page Count"
	},
	stateDept = 8,
	stateCour = 55,
	countryCour = 60,
	countryFees = {
	    "AFG": 125,
	    "ALB": 0,
		"DZA": 75,
		"AND": 0,
		"AGO": 150,
		"ATG": 0,
		"ARG": 0,
		"ARM": 0,
		"AUS": 0,
		"AUT": 0,
		"AZE": 0,
		"BHS": 0,
		"BHR": 0,
		"BGD": 83,
		"BRB": 0,
		"BLR": 0,
		"BEL": 0,
		"BLZ": 0,
		"BEN": 50,
		"BTN": "call",
		"BOL": 150,
		"BWA": 0,
		"BRA": 0,
		"BRN": 0,
		"BGR": 0,
		"BFA": "call",
		"BDI": 0,
		"KHM": "call",
		"CMR": "call",
		"CAN": "call",
		"CAF": "call",
		"TCD": "call",
		"CHL": 0,
		"CHN": 50,
		"COL": 0,
		"COM": "call",
		"COG": "call",
		"COK": 0,
		"CRI": 0,
		"CIV": 5,
		"HRV": 0,
		"CUB": "call",
		"CYP": 0,
		"CZE": 0,
		"DNK": 0,
		"DJI": "call",
		"DMA": 0,
		"DOM": 0,
		"ECU": 0,
		"EGY": 55,
		"SLV": 0,
		"GNQ": "call",
		"ERI": "call",
		"EST": 0,
		"ETH": 100,
		"FJI": 0,
		"FIN": 0,
		"FRA": 0,
		"GAB": "call",
		"GMB": 100,
	    "GCC": 25,
		"GEO": 0,
		"DEU": 0,
		"GHA": "call",
		"GRC": 0,
		"GRD": 0,
		"GTM": 25,
		"GIN": "call",
		"GNB": "call",
		"GUY": "call",
		"HTI": 25,
		"HND": 0,
		"HKG": 0,
		"HUN": 0,
		"ISL": 0,
		"IND": 0,
		"IDN": 25,
		"IRN": 87,
		"IRQ": 160,
		"IRL": 0,
		"ISR": 0,
		"ITA": 0,
		"JAM": "call",
		"JPN": 0,
		"JOR": 84,
		"KAZ": 0,
		"KEN": 55,
		"KIR": "call",
		"KWT": 25,
		"KGZ": 0,
		"LAO": "call",
		"LVA": 0,
		"LBN": 75,
		"LSO": 0,
		"LBR": 0,
		"LBY": 105,
		"LIE": 0,
		"LTU": 0,
		"LUX": 0,
		"MAC": 0,
		"MKD": 0,
		"MDG": 5,
		"MWI": 0,
		"MYS": 10,
		"MDV": "call",
		"MLI": 10,
		"MLT": 0,
		"MHL": 0,
		"MRT": "call",
		"MUS": 0,
		"MEX": 0,
		"FSM": "call",
		"MDA": 0,
		"MCO": 0,
		"MNG": 0,
		"MNE": 0,
		"MAR": 0,
		"MOZ": "call",
		"MMR": 20,
		"NAM": 0,
		"NRU": "call",
		"NPL": "call",
		"NLD": 0,
		"NZL": 0,
		"NIC": 0,
		"NER": "call",
		"NGA": 55,
		"NIU": 0,
		"NOR": 0,
		"OMN": 0,
		"PAK": 80,
		"PSE": 200,
		"PAN": 0,
		"PNG": "call",
		"PRY": 0,
		"PER": 0,
		"PHL": 30,
		"POL": 0,
		"PRT": 0,
		"QAT": 42,
		"ROU": 0,
		"RUS": 0,
		"RWA": 30,
		"KNA": 0,
		"LCA": 0,
		"VCT": 0,
		"WSM": 0,
		"SMR": 0,
		"STP": 0,
		"SAU": 30,
		"SEN": "call",
		"SRB": 0,
		"SYC": 0,
		"SLE": 100,
		"SGP": 8,
		"SVK": 0,
		"SVN": 0,
		"SLB": "call",
		"SOM": "call",
		"ZAF": 0,
	    "KOR": "call",
		"SSD": 25,
		"ESP": 0,
		"LKA": 45,
		"SDN": 25,
		"SUR": 0,
		"SWZ": 0,
		"SWE": 0,
		"CHE": 0,
		"SYR": 115,
		"TJK": "call",
		"TZA": "call",
		"THA": 15,
		"TLS": 15,
		"TGO": "call",
		"TON": 0,
		"TTO": 0,
		"TUN": 15,
		"TUR": 0,
		"TKM": "call",
		"TUV": "call",
		"UGA": "call",
		"UKR": 0,
		"ARE": 605,
		"GBR": 0,
		"URY": 0,
		"UZB": 0,
		"VUT": 0,
		"VEN": 0,
		"VNM": 80,
		"YEM": 170,
		"ZMB": "call",
		"ZWE": "call"
	};

function shakeForm() {
   var l = 20;  

   for( var i = 0; i <= 10; i++ ) {   
     $( "#addDoc" ).css('position','relative').animate( { 'margin-left': "+=" + ( l = -l ) + 'px' }, 50);
   }
}


function calculator(docType, cert, numOfCopies){
	var country = document.getElementById('countries').value,
		steps = 0;

	if (countryFees[country] > 0) {
        steps = 2;
    } else if (countryFees[country] === 0) {
        steps = 1;
    } else if (countryFees[country] === "call") {
        steps = "call"; 
    }

	if (country != 'No') {
		if (steps == 1){
			return "$" + Math.round((((60) + (certFees[docType]) + 35 + ((stateDept * 0.18)+stateDept)) * numOfCopies) +stateCour) + ".00";
		} else if (steps > 1) {
			return "$" + Math.round(((((((60*2)+ ((stateDept * 0.18)+stateDept))) + (certFees[docType]) + 35 + ((countryFees[country] * 0.18)+countryFees[country]))) * numOfCopies) +stateCour + countryCour) + ".00";
		}
	} else {

	if (docType == "app" && cert == "Yes"){
		return "$" + ((certFees[docType] * numOfCopies) + (numOfCopies * 25 + 10)) + ".00";
	} else if (docType == "app" && cert == "No"){
		return "$35.00 + $1/pg";
	} else if (docType == "FH" && cert == "Yes"){
		return "$" + ((certFees[docType] * numOfCopies) + (numOfCopies * 55)) + ".00";
	} else if (docType == "FH" && cert == "No"){
		return "$1/pg";
	} else if (docType == "pat" && cert == "Yes"){
		return "$" + ((certFees[docType] * numOfCopies) + (numOfCopies * 25 + 10)) + ".00";
	} else if (docType == "pat" && cert == "No"){
		return "$" + (numOfCopies * ourFees[docType]) + ".00";
	} else if (docType == "ass" && cert == "Yes"){
		return "$" + ((certFees[docType] * numOfCopies) + (numOfCopies * 25 + 10)) + ".00";
	} else if (docType == "ass" && cert == "No"){
		return "$" + (ourFees[docType] + (numOfCopies * 5)) + ".00";
	} else { 
		return "Call for Price";
	}
}

}

function docNumTypes(docType){
	switch (docType) {
		case "app":
			$('#appNum').css('display', 'block');
			$('#assNum').css('display', 'none');
			$('#FHNum').css('display', 'none');
			$('#patNum').css('display', 'none');
			break;
		case "ass":
			$('#assNum').css('display', 'block');
			$('#appNum').css('display', 'none');
			$('#FHNum').css('display', 'none');
			$('#patNum').css('display', 'none');
			break;
		case "FH":
			$('#FHNum').css('display', 'block');
			$('#appNum').css('display', 'none');
			$('#assNum').css('display', 'none');
			$('#patNum').css('display', 'none');
			break;
		case "FH + all refs":
			$('#FHNum').css('display', 'block');
			$('#appNum').css('display', 'none');
			$('#assNum').css('display', 'none');
			$('#patNum').css('display', 'none');
			break;
		case "FH/NPLs/US":
			$('#FHNum').css('display', 'block');
			$('#appNum').css('display', 'none');
			$('#assNum').css('display', 'none');
			$('#patNum').css('display', 'none');
			break;
		case "FH/NPLs/For":
			$('#FHNum').css('display', 'block');
			$('#appNum').css('display', 'none');
			$('#assNum').css('display', 'none');
			$('#patNum').css('display', 'none');
			break;
		case "FH/US/For":
			$('#FHNum').css('display', 'block');
			$('#appNum').css('display', 'none');
			$('#assNum').css('display', 'none');
			$('#patNum').css('display', 'none');
			break;
		case "FH/NPLs":
			$('#FHNum').css('display', 'block');
			$('#appNum').css('display', 'none');
			$('#assNum').css('display', 'none');
			$('#patNum').css('display', 'none');
			break;
		case "FH/US":
			$('#FHNum').css('display', 'block');
			$('#appNum').css('display', 'none');
			$('#assNum').css('display', 'none');
			$('#patNum').css('display', 'none');
			break;
		case "FH/For":
			$('#FHNum').css('display', 'block');
			$('#appNum').css('display', 'none');
			$('#assNum').css('display', 'none');
			$('#patNum').css('display', 'none');
			break;
		case "pat":
			$('#patNum').css('display', 'block');
			$('#appNum').css('display', 'none');
			$('#FHNum').css('display', 'none');
			$('#assNum').css('display', 'none');
			break;
	}
}

function certOptions(cert){
		if (cert == 'Yes'){ 
		$("#certYes").prop("checked", true);
		$("#certNo").prop("checked", false);
		$("#legalYes").prop("checked", false);
		$("#legalNo").prop("checked", false);
		$("#legalFieldset").prop("disabled", false);
	} else if (cert == 'No') {
		$("#certNo").prop("checked", true);
		$("#certYes").prop("checked", false);
		$("#legalFieldset").prop("disabled", true);
		$('#legalYes').prop('checked', false);
		$('#legalNo').prop('checked', false);
		$("#legalYes").prop("checked", false);
		$("#legalNo").prop("checked", true);
	}
}

function docNumEnter(docType){
	switch (docType){
		case 'app':
			docNum = $('#appNum').val();
			break;
		case 'ass':
			docNum = $('#assNum').val();
			break;
		case 'FH':
			docNum = $('#FHNum').val();
			break;
		case 'pat':
			docNum = $('#patNum').val();
			break;
		default:
			docNum = "Please enter document number";
	}

}
/*function total(){

	$('#total').css('display','table-row');
	$('#tot7').html("<strong>Total</strong>");
	$('#tot8').text(docNum.one + docNum.two + docNum.three + docNum.four + docNum.five + docNum.six + docNum.seven + docNum.eight + docNum.nine + docNum.ten);


}*/

function formReset(){
	$('#docType').prop('selectedIndex',0);
	$('#countries').prop('selectedIndex',0);
	$('#countries').css('display','none');
	$('#numOfCopies').prop('selectedIndex',0);
	$('#medium').prop('selectedIndex',0);
	$('#legalYes').prop('checked', false);
	$('#legalNo').prop('checked', false);
	$('#certYes').prop('checked', false);
	$('#certNo').prop('checked', false);
	$('#NPLs').prop('checked', false);
	$('#USRef').prop('checked', false);
	$('#forRef').prop('checked', false);
	$('#FHNPLs').css('display','none');
	$('#appNum').css('display', 'none');
	$('#appNum').val('');
	$('#assNum').css('display', 'none');
	$('#assNum').val('');
	$('#FHNum').css('display', 'none');
	$('#FHNum').val('');
	$('#patNum').css('display', 'none');
	$('#patNum').val('');
	$("#numOfCopies").prop("disabled", false);
	$("#medium").prop("disabled", false);
}

$('#docType').change(function(){
	doc.docType = $('#docType').val();

	docNumTypes(doc.docType);
});

$('#certForm input').on('change', function() {
   cert.val = ($('input[name=radioName]:checked', '#certForm').val()); 
   doc.docType = $('#docType').val();
   docNumTypes(doc.docType);
   certOptions(cert.val);


   	if ((doc.docType == 'FH' && cert.val == 'No')){
		$('#FHNPLs').css('display','block');
	} else {
		$('#FHNPLs').css('display','none');
	}

});

$('#legalForm input').on('change', function() {
   legal.val = ($('input[name=radioName]:checked', '#legalForm').val());

   if (legal.val == 'Yes') {
   	$('#countries').css('display', 'block');
   	$('#medium').prop('selectedIndex',1);
   	$("#medium").prop("disabled", true);
   } else if (legal.val == 'No') {
   	$('#countries').css('display', 'none');
   	$('#medium').prop('selectedIndex',0);
   	$("#medium").prop("disabled", false);
   }
});

$('#medium').change(function(){
	var medium = $('#medium').val();

	if (cert.val == 'No' && medium == 'PDF'){
		$('#numOfCopies').prop('selectedIndex',1);
   		$("#numOfCopies").prop("disabled", true);
	} else {
		$('#numOfCopies').prop('selectedIndex',0);
   		$("#numOfCopies").prop("disabled", false);
	}
});

$('#testBtn').click(function(){
	$('#test3').text(cert.val);
});

$('#addDoc').click(function(){
	var 
		docType = $('#docType').val(),
		cert = ($('input[name=radioName]:checked', '#certForm').val()),
		//legal = ($('input[name=radioName]:checked', '#legalForm').val()),
		country = $('#countries').val(),
		numOfCopies = $('#numOfCopies').val(),
		medium = $('#medium').val(),
		cartLine = 'line' + tot.count,
		//ref = ($('input[name=optradio]:checked', '#FHNPLs').val()),
		cost = calculator(docType, cert, numOfCopies);


	docNumEnter(docType);
	
	if (($('#NPLs').prop('checked')) && ($('#USRef').prop('checked')) && ($('#forRef').prop('checked'))){
		docType = "FH + all refs";
	} else if (($('#NPLs').prop('checked')) && ($('#USRef').prop('checked'))){
		docType = "FH/NPLs/US";
	} else if (($('#NPLs').prop('checked')) && ($('#forRef').prop('checked'))){
		docType = "FH/NPLs/For";
	} else if (($('#forRef').prop('checked')) && ($('#USRef').prop('checked'))){
		docType = "FH/US/For";
	} else if ($('#NPLs').prop('checked')){
		docType = "FH/NPLs";
	} else if ($('#USRef').prop('checked')){
		docType = "FH/US";
	} else if ($('#forRef').prop('checked')){
		docType = "FH/For";
	}


	
	
	if (docType == 'select'){
		$('#docType').css('border-color','red');
	} else if (cert === 'undefined') {
		$('#certYes').css('border-color','red');
	} else if (numOfCopies == 'select') {
		$('#numOfCopies').css('border-color','red');
	} else {

	var	data = "<tr id="+cartLine+"><td><input name="+cartLine+" type='checkbox' id='checkbox'></td><td name='docNum'>"+docNum+"</td><td name='docType'>"+docType+"</td><td name='cert'>"+cert+"</td><td name='countries'>"+country+"</td><td name='medium'>"+medium+"</td><td name='numOfCopies'>"+numOfCopies+"</td><td id='cost'>"+cost+"</td><td><button class='btn btn-primary edit' name="+cartLine+">Edit</button></td></tr>";

	$('#cart').append(data);
	$('#cart').css('display','table');
	
	tot.count++;
	formReset();

	$('#submitOrder').css('display','block');
	$('#anotherDoc').css('display','block');
	$('#documentLine').css('display', 'none'); 
	$('#delete').css('display','none');
	$('#disclaimer').css('display','block');
	$('#instructions').css('display','block');


	}
	});
	$('#cart').on('click','input[type="checkbox"]', function() {
    if (this.checked) {
    	var selectedLine = $(this).attr('name');
    	$('#delete').css('display','block');
    	$('#delete').click(function(){
    		$('#'+ selectedLine).remove();
    		$('#delete').css('display','none');
    		tot.count--;
    	});
    } else {
    	$('#delete').css('display','none');
    }
	
    });


    $('#cart').on('click', '.edit', function(){
    	var legal = $(this).parent().siblings("[name='countries']").text(),
    		cert = $(this).parent().siblings("[name='cert']").text(),
    		docNum = $(this).parent().siblings("[name='docNum']").text(),
    		docType = $(this).parent().siblings("[name='docType']").text(),
    		medium = $(this).parent().siblings("[name='medium']").text(),
    		numOfCopies = $(this).parent().siblings("[name='numOfCopies']").text(),
    		countries = $(this).parent().siblings("[name='countries']").text(),
    		cartLine = $(this).attr('name');

	
	
	
	$("#docType").val(docType);
	if (docType == "FH + all refs" || docType == "FH/NPLs/US" || docType == "FH/NPLs/For" || docType == "FH/US/For" || docType == "FH/NPLs" || docType == "FH/US" || docType == "FH/For"){
		$("#docType").val('FH');
	}
	$("#medium").val(medium);
	$("#numOfCopies").val(numOfCopies);
	$("#countries").val(countries);
	$('#'+ cartLine).remove();

	docNumTypes(docType);
	
	switch (docType) {
		case "app":
			$('#appNum').val(docNum);
			break;
		case "ass":
			$('#assNum').val(docNum);
			break;
		case "FH":
			$('#FHNum').val(docNum);
			break;
		case "FH + all refs":
			$('#FHNum').val(docNum);
			break;
		case "FH/NPLs/US":
			$('#FHNum').val(docNum);
			break;
		case "FH/NPLs/For":
			$('#FHNum').val(docNum);
			break;
		case "FH/US/For":
			$('#FHNum').val(docNum);
			break;
		case "FH/NPLs":
			$('#FHNum').val(docNum);
			break;
		case "FH/US":
			$('#FHNum').val(docNum);
			break;
		case "FH/For":
			$('#FHNum').val(docNum);
			break;
		case "pat":
			$('#patNum').val(docNum);
			break;
	}

	if (docType == "FH + all refs"){
		$('#NPLs').prop('checked', true);
		$('#USRef').prop('checked', true);
		$('#forRef').prop('checked', true);
		$('#FHNPLs').css('display','block');
	} else if (docType == "FH/NPLs/US"){
		$('#NPLs').prop('checked', true);
		$('#USRef').prop('checked', true);
		$('#forRef').prop('checked', false);
		$('#FHNPLs').css('display','block');
	} else if (docType == "FH/NPLs/For"){
		$('#NPLs').prop('checked', true);
		$('#USRef').prop('checked', false);
		$('#forRef').prop('checked', true);
		$('#FHNPLs').css('display','block');
	} else if (docType == "FH/US/For"){
		$('#NPLs').prop('checked', false);
		$('#USRef').prop('checked', true);
		$('#forRef').prop('checked', true);
		$('#FHNPLs').css('display','block');
	} else if (docType == "FH/NPLs"){
		$('#NPLs').prop('checked', true);
		$('#USRef').prop('checked', false);
		$('#forRef').prop('checked', false);
		$('#FHNPLs').css('display','block');
	} else if (docType == "FH/US"){
		$('#NPLs').prop('checked', false);
		$('#USRef').prop('checked', true);
		$('#forRef').prop('checked', false);
		$('#FHNPLs').css('display','block');
	} else if (docType == "FH/For"){
		$('#NPLs').prop('checked', false);
		$('#USRef').prop('checked', false);
		$('#forRef').prop('checked', true);
		$('#FHNPLs').css('display','block');
	} else if (docType == "FH"){
		$('#NPLs').prop('checked', false);
		$('#USRef').prop('checked', false);
		$('#forRef').prop('checked', false);
		$('#FHNPLs').css('display','block');
	}

	certOptions(cert);

	if (legal != 'No'){ 
		$("#legalYes").prop("checked", true);
		$("#legalNo").prop("checked", false);
	}

	$('#save').css('display', 'block');
	$('#addDoc').css('display', 'none');
	$('#documentLine').css('display','block');
	$('#submitOrder').css('display', 'none');

	});

	$('#save').click(function(){
		var docType = $('#docType').val(),
			cert = ($('input[name=radioName]:checked', '#certForm').val()),
			country = $('#countries').val(),
			numOfCopies = $('#numOfCopies').val(),
			medium = $('#medium').val(),
			cartLine = 'line' + tot.count,
			cost = calculator(docType, cert, numOfCopies);

			docNumEnter(docType);

			if (($('#NPLs').prop('checked')) && ($('#USRef').prop('checked')) && ($('#forRef').prop('checked'))){
				docType = "FH + all refs";
			} else if (($('#NPLs').prop('checked')) && ($('#USRef').prop('checked'))){
				docType = "FH/NPLs/US";
			} else if (($('#NPLs').prop('checked')) && ($('#forRef').prop('checked'))){
				docType = "FH/NPLs/For";
			} else if (($('#forRef').prop('checked')) && ($('#USRef').prop('checked'))){
				docType = "FH/US/For";
			} else if ($('#NPLs').prop('checked')){
				docType = "FH/NPLs";
			} else if ($('#USRef').prop('checked')){
				docType = "FH/US";
			} else if ($('#forRef').prop('checked')){
				docType = "FH/For";
			}

			var data = "<tr id="+cartLine+"><td><input name="+cartLine+" type='checkbox' id='checkbox'></td><td name='docNum'>"+docNum+"</td><td name='docType'>"+docType+"</td><td name='cert'>"+cert+"</td><td name='countries'>"+country+"</td><td name='medium'>"+medium+"</td><td name='numOfCopies'>"+numOfCopies+"</td><td id='cost'>"+cost+"</td><td><button class='btn btn-primary edit' name="+cartLine+">Edit</button></td></tr>";

		$('#cart').append(data);
		$('#cart').css('display','table');
		formReset();

		$('#submitOrder').css('display','block');
		$('#anotherDoc').css('display','block');
		$('#documentLine').css('display', 'none'); 
    
		});

$('#anotherDoc').click(function(){
	$('#documentLine').css('display', 'block');
	$('#addDoc').css('display', 'block');
	$('#save').css('display', 'none');
	$('#docHeader').text('Document ' + tot.count);
	$('#anotherDoc').css('display','none');
	$('#submitOrder').css('display','none');

});

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');
$.ajaxSetup({
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    });


$('#submit').click(function(){
	// var json_data = { "docNum": docNum, "docType" : doc.docType,"cert" : cert.val, "legal" : legal.val, "docMed" : medium, "copies": numOfCopies, "cost" : cost.innerText  }
	var json_data = { "docNum": docNum, "docType" : doc.docType,"cert" : cert.val, "legal" : legal.val, "cost" : cost.innerText  }
	$.post( "/email",  JSON.stringify(json_data), 
	function(){
		alert("Successfully Submitted!");
		window.location.replace("/");
    });
});


});




