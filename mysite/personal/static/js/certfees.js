"use strict";

var certFees = {
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
		app: "Need Page Count",
		FH: "Need Page Count"
	},

	numOfDocs = document.getElementById('numOfDocs').value;



function calculator(){
	var docType = document.getElementById('docType').value,
		cert = document.getElementById('cert').value,
		legal = document.getElementById('legal').value,
		countries = document.getElementById('countries').value,
		medium = document.getElementById('medium').value,
		numOfCopies = document.getElementById('numOfCopies').value;
		docNum = document.getElementById

	document.getElementById('test').innerHTML = docType + " " + cert + " " + legal + " " + countries + " " + medium + " " + numOfCopies;
	document.getElementById('test2').innerHTML = (certFees[docType] * numOfCopies) + (numOfCopies * 25 + 10);

	if (docType == "app" && cert == "Yes"){

		document.getElementById('one8').innerHTML = "$" + (certFees[docType] * numOfCopies) + (numOfCopies * 25 + 10) + ".00";
		//$('#one8').text("$" + (certFees[docType] * numOfCopies) + (numOfCopies * 25 + 10) + ".00");

	} else if (docType == "app" && cert == "No"){

		document.getElementById('t8').innerHTML = "$35.00 + $1/page";

	} else if (docType == "FH" && cert == "Yes"){

		document.getElementById('t8').innerHTML = "$" + ((certFees[docType] * numOfCopies) + (numOfCopies * 55)) + ".00";

	} else if (docType == "FH" && cert == "No"){

		document.getElementById('t8').innerHTML = "$1 per page";

	} else if (docType == "pat" && cert == "Yes"){

		document.getElementById('t8').innerHTML = "$" + ((certFees[docType] * numOfCopies) + (numOfCopies * 25 + 10)) + ".00";

	} else if (docType == "pat" && cert == "No"){

		document.getElementById('t8').innerHTML = "$" + (numOfCopies * ourFees[docType]) + ".00";

	} else if (docType == "ass" && cert == "Yes"){

		document.getElementById('t8').innerHTML = "$" + ((certFees[docType] * numOfCopies) + (numOfCopies * 25 + 10)) + ".00";

	} else if (docType == "ass" && cert == "No"){

		document.getElementById('t8').innerHTML = "$" + (ourFees[docType] + (numOfCopies * 5)) + ".00";

	} else { 

		document.getElementById('t8').innerHTML = "Call for Price";

	}
}
