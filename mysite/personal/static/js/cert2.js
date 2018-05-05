$(document).ready(function(){
"use strict";
 
var tot = {
	count: 1
	},
	doc1 = {},
	doc2 = {},
	doc3 = {},
	doc4 = {},
	doc5 = {},
	doc6 = {},
	doc7 = {},
	doc8 = {},
	doc9 = {},
	doc10 = {},
	edit = {},
	docNum = {},
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
		app: "Need Page Count",
		FH: "Need Page Count"
	};

function calculator(doc,rowNum){
	variables(doc);

	if (doc.docType == "app" && doc.cert == "Yes"){
		document.getElementById(rowNum+'8').innerHTML = "$" + ((certFees[doc.docType] * doc.numOfCopies) + (doc.numOfCopies * 25 + 10)) + ".00";
	} else if (doc.docType == "app" && doc.cert == "No"){
		document.getElementById(rowNum+'8').innerHTML = "$35.00 + $1/page";
	} else if (doc.docType == "FH" && doc.cert == "Yes"){
		document.getElementById(rowNum+'8').innerHTML = "$" + ((certFees[doc.docType] * doc.numOfCopies) + (doc.numOfCopies * 55)) + ".00";
	} else if (doc.docType == "FH" && doc.cert == "No"){
		document.getElementById(rowNum+'8').innerHTML = "$1/page";
	} else if (doc.docType == "pat" && doc.cert == "Yes"){
		document.getElementById(rowNum+'8').innerHTML = "$" + ((certFees[doc.docType] * doc.numOfCopies) + (doc.numOfCopies * 25 + 10)) + ".00";
	} else if (doc.docType == "pat" && doc.cert == "No"){
		document.getElementById(rowNum+'8').innerHTML = "$" + (doc.numOfCopies * ourFees[doc.docType]) + ".00";
	} else if (doc.docType == "ass" && doc.cert == "Yes"){
		document.getElementById(rowNum+'8').innerHTML = "$" + ((certFees[doc.docType] * doc.numOfCopies) + (doc.numOfCopies * 25 + 10)) + ".00";
	} else if (doc.docType == "ass" && doc.cert == "No"){
		document.getElementById(rowNum+'8').innerHTML = "$" + (ourFees[doc.docType] + (doc.numOfCopies * 5)) + ".00";
	} else { 
		document.getElementById(rowNum + '8').innerHTML = "Call for Price";
	}

	docNum.rowNum = Number($(rowNum + '8').val());
}

function total(){

	$('#total').css('display','table-row');
	$('#tot7').html("<strong>Total</strong>");
	$('#tot8').text(docNum.one + docNum.two + docNum.three + docNum.four + docNum.five + docNum.six + docNum.seven + docNum.eight + docNum.nine + docNum.ten);

	$('#test3').text(docNum.two);

}

function finalAdd(){
	$('#addDoc').css('display', 'none');
	$('#documentLine').css('display', 'none');
	$('#submitOrder').css('display', 'block');
	total();
}

function variables(doc){
	doc.docType = $('#docType').val();
	doc.cert= $('#cert').val();
	doc.fileNum = $('#fileNum').val();
	doc.legal = $('#legal').val();
	doc.country = $('#countries').val();
	doc.numOfCopies = $('#numOfCopies').val();
	doc.medium = $('#medium').val();
}

function tableFill(editBtn,doc,count,col){
	$('#cart').css('display', 'block');
	$(editBtn).css('display', 'block');
	
	$(col + '1').text(count);
	$(col + '2').text(doc.fileNum);
	$(col + '3').text(doc.docType);
	$(col + '4').text(doc.cert);
	$(col + '5').text(doc.country);
	$(col + '6').text(doc.medium);
	$(col + '7').text(doc.numOfCopies);
}

function tableEditFill(doc,count,col){
	
	$(col + '1').text(count);
	$(col + '2').text(doc.fileNum);
	$(col + '3').text(doc.docType);
	$(col + '4').text(doc.cert);
	$(col + '5').text(doc.country);
	$(col + '6').text(doc.medium);
	$(col + '7').text(doc.numOfCopies);
}


function formReset(count, numOfDocs){
	$('#docHeader').text(count + '/' + numOfDocs + ' Documents');
	$('#fileNum').val('');
	$('#docType').prop('selectedIndex',0);
	$('#cert').prop('selectedIndex',0);
	$('#legal').prop('selectedIndex',0);
	$('#countries').prop('selectedIndex',0);
	$('#numOfCopies').prop('selectedIndex',0);
	$('#medium').prop('selectedIndex',0);
}

function editFill(doc, count, numOfDocs){

	$('#documentLine').css('display','block');
	$('#save').css('display', 'block');
	$('#addDocFinal').css('display', 'none');
	$('#addDoc').css('display', 'none');
	$('#submitOrder').css('display', 'none');

	$('#docHeader').text(count + '/' + numOfDocs + ' Documents');

	$('#fileNum').val(doc.fileNum);
	$('#docType').val(doc.docType);
	$('#cert').val(doc.cert);
	$('#legal').val(doc.legal);
	$('#countries').val(doc.country);
	$('#numOfCopies').val(doc.numOfCopies);
	$('#medium').val(doc.medium);
}

function saveEdit(){

	variables(edit.doc);
	tableEditFill(edit.doc,edit.count,edit.col);

	$('#testBtn').click(function(){
	});

	if ((tot.count-1) < docNum.numOfDocs){
		$('#addDoc').css('display', 'block');
		$('#documentLine').css('display','block');
		$('#save').css('display','none');
		formReset(tot.count, docNum.numOfDocs);

	} else if ((tot.count-1) == docNum.numOfDocs){
		$('#addDoc').css('display', 'none');
		$('#documentLine').css('display', 'none');
		$('#submitOrder').css('display', 'block');
		total();
	}
	$('#save').css('display','none');


}

$('#legal').change(function(){
    	var legal = $('#legal').val();

    	switch(legal){
    		case "Yes":
    			$('#countries').css('display', 'block');
    			break;
    		case "No":
    			$('#countries').css('display', 'none');
    	}
    });

$('#numOfDocs').change(function(){
	docNum.numOfDocs = Number($('#numOfDocs').val());
	$('#documentLine').css('display', 'block');
	$('#'+docNum.numOfDocs).css('display','block');

	if(docNum.numOfDocs == 1){
		$('#docHeader').text('1/1 Document');
	} else if (docNum.numOfDocs > 1){
		$('#docHeader').text(tot.count + '/' + docNum.numOfDocs + ' Documents');
	}
	$('#numOfDocs').css('display','none');
	$('#addDoc').css('display','block');
});


$('#addDoc').click(function(){


	if (tot.count <= docNum.numOfDocs) {
		switch (tot.count) {
			case 1:
				docNum.doc = doc1;
				docNum.rowNum = "one";
				calculator(docNum.doc, docNum.rowNum); 
				tableFill('#edit1',docNum.doc,1, "#one");
				formReset(2, docNum.numOfDocs);
				$('#first').css('display', 'table-row');


				if (tot.count == docNum.numOfDocs) {
					finalAdd();
					
				}

				tot.count = 2;

			break;

			case 2:
				docNum.doc = doc2;
				docNum.rowNum = "two";
				calculator(docNum.doc, docNum.rowNum); 
				tableFill('#edit2',docNum.doc,2, '#two');
				formReset(3, docNum.numOfDocs);
				$('#second').css('display', 'table-row');


				if (tot.count == docNum.numOfDocs) {
					finalAdd();
				}

				tot.count = 3;
			break;

			case 3:
				docNum.doc = doc3;
				docNum.rowNum = "three";
				calculator(docNum.doc, docNum.rowNum); 
				tableFill('#edit3',docNum.doc,3, '#three');
				formReset(4, docNum.numOfDocs);
				$('#third').css('display', 'table-row');

				if (tot.count == docNum.numOfDocs) {
					finalAdd();
				}

				tot.count = 4;
			break;
			case 4:
				docNum.doc = doc4;
				docNum.rowNum = "four";
				calculator(docNum.doc, docNum.rowNum); 
				tableFill('#edit4',docNum.doc,4, '#four');
				formReset(5, docNum.numOfDocs);
				$('#fourth').css('display', 'table-row');


				if (tot.count == docNum.numOfDocs) {
					finalAdd();
				}

				tot.count = 5;
			break;
			case 5:
				docNum.doc = doc5;
				docNum.rowNum = "five";
				calculator(docNum.doc, docNum.rowNum); 
				tableFill('#edit5',docNum.doc,5, '#five');
				formReset(6, docNum.numOfDocs);
				$('#fifth').css('display', 'table-row');

				if (tot.count == docNum.numOfDocs) {
					finalAdd();
				}

				tot.count = 6;
			break;
			case 6:
				docNum.doc = doc6;
				docNum.rowNum = "six";
				calculator(docNum.doc, docNum.rowNum); 
				tableFill('#edit6',docNum.doc,6, '#six');
				formReset(7, docNum.numOfDocs);
				$('#sixth').css('display', 'table-row');

				if (tot.count == docNum.numOfDocs) {
					finalAdd();
				}

				tot.count = 7;
			break;
			case 7:
				docNum.doc = doc7;
				docNum.rowNum = "seven";
				calculator(docNum.doc, docNum.rowNum); 
				tableFill('#edit7',docNum.doc,7, '#seven');
				formReset(8, docNum.numOfDocs);
				$('#seventh').css('display', 'table-row');
	

				if (tot.count == docNum.numOfDocs) {
					finalAdd();
				}

				tot.count = 8;
			break;
			case 8:
				docNum.doc = doc8;
				docNum.rowNum = "eight";
				calculator(docNum.doc, docNum.rowNum); 
				tableFill('#edit8',docNum.doc,8, '#eight');
				formReset(9, docNum.numOfDocs);
				$('#eighth').css('display', 'table-row');

				if (tot.count == docNum.numOfDocs) {
					finalAdd();
				}

				tot.count = 9;
			break;
			case 9:
				docNum.doc = doc9;
				docNum.rowNum = "nine";
				calculator(docNum.doc, docNum.rowNum); 
				tableFill('#edit9',docNum.doc,9, '#nine');
				formReset(10, docNum.numOfDocs);
				$('#nineth').css('display', 'table-row');


				if (tot.count == docNum.numOfDocs) {
					finalAdd();
				}

				tot.count = 10;
			break;
			case 10:
				docNum.doc = doc10;
				docNum.rowNum = "ten";
				calculator(docNum.doc, docNum.rowNum); 
				tableFill('#edit10',docNum.doc,10, '#ten');
				formReset(11, docNum.numOfDocs);
				$('#tenth').css('display', 'table-row');

				if (tot.count == docNum.numOfDocs) {
					finalAdd();
				}

				tot.count = 11;
			break;
			}
		}
		
});

	$('#edit1').click(function(){
		edit.col = "#one";
		edit.doc = doc1;
		edit.count = 1;
		editFill(edit.doc,edit.count,docNum.numOfDocs);
	});
	$('#edit2').click(function(){
		edit.col = "#two";
		edit.doc = doc2;
		edit.count = 2;
		editFill(edit.doc,edit.count,docNum.numOfDocs);	
	});
	$('#edit3').click(function(){
		edit.col = "#three";
		edit.doc = doc3;
		edit.count = 3;
		editFill(edit.doc,edit.count,docNum.numOfDocs);	
	});
	$('#edit4').click(function(){
		edit.col = "#four";
		edit.doc = doc4;
		edit.count = 4;
		editFill(edit.doc,edit.count,docNum.numOfDocs);	
	});
	$('#edit5').click(function(){
		edit.col = "#five";
		edit.doc = doc5;
		edit.count = 5;
		editFill(edit.doc,edit.count,docNum.numOfDocs);	
	});
	$('#edit6').click(function(){
		edit.col = "#six";
		edit.doc = doc6;
		edit.count = 6;
		editFill(edit.doc,edit.count,docNum.numOfDocs);	
	});
	$('#edit7').click(function(){
		edit.col = "#seven";
		edit.doc = doc7;
		edit.count = 7;
		editFill(edit.doc,edit.count,docNum.numOfDocs);	
	});
	$('#edit8').click(function(){
		edit.col = "#eight";
		edit.doc = doc8;
		edit.count = 8;
		editFill(edit.doc,edit.count,docNum.numOfDocs);	
	});
	$('#edit9').click(function(){
		edit.col = "#nine";
		edit.doc = doc9;
		edit.count = 9;
		editFill(edit.doc,edit.count,docNum.numOfDocs);	
	});
	$('#edit10').click(function(){
		edit.col = "#ten";
		edit.doc = doc10;
		edit.count = 10;
		editFill(edit.doc,edit.count,docNum.numOfDocs);	
	});

	$('#save').click(function(){
		saveEdit();
	});



});




