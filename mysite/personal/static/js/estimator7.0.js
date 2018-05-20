$(document).ready(function(){
"use strict";
$('#docType').change(function(){
	var docType = $('#docType').val();

	if (docType == 'certPTO'){
        $('#states').prop('selectedIndex',1);
        $("#states").prop("disabled", true);
    } else {
        $('#states').prop('selectedIndex',0);
        $("#states").prop("disabled", false);
    }

    if (docType == 'trueCopy'){
        $('#provider').prop('selectedIndex',1);
        $("#provider").prop("disabled", true);
    } else {
        $('#provider').prop('selectedIndex',0);
        $("#provider").prop("disabled", false);
    }
});
});

// list of variables 


//country fees for one document
var countryFees = {
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
	"ARE": 550,
	"GBR": 0,
	"URY": 0,
	"UZB": 0,
	"VUT": 0,
	"VEN": 0,
	"VNM": 80,
	"YEM": 170,
	"ZMB": "call",
	"ZWE": "call"
},
    
//state fees for one document    
    stateFees = {
        "AL": 10,
        "NA": 0,
        "AK": 5,
        "AZ": 3,
        "AR": 10,
        "CA": 26,
        "CO": 5,
        "CT": 40,
        "DE": 30,
        "FL": 10,
        "GA": 10,
        "HI": 1,
        "ID": 10,
        "IL": 2,
        "IN": 1,
        "IA": 5,
        "KS": 8,
        "KY": 5,
        "LA": 20,
        "ME": 10,
        "MD": 10,
        "MA": 6,
        "MI": 1,
        "MN": 5,
        "MS": 5,
        "MO": 10,
        "MT": 10,
        "NE": 10,
        "NV": 20,
        "NH": 10,
        "NJ": 25,
        "NM": 3,
        "NY": 20,
        "NC": 10,
        "ND": 10,
        "OH": 5,
        "OK": 25,
        "OR": 10,
        "PA": 15,
        "RI": 5,
        "SC": 2,
        "SD": 25,
        "TN": 10,
        "TX": 15,
        "UT": 15,
        "VT": 2,
        "VA": 10,
        "WA": 15,
        "WV": 10,
        "WI": 10,
        "WY": 3,
        "DC": 15,
        "N/A": 0
    },

//state rush fees
    stateRushFees = {
        "AL": 0,
        "NA": 0,
        "AK": 0,
        "AZ": 0,
        "AR": 0,
        "CA": 0,
        "CO": 0,
        "CT": 0,
        "DE": 40,
        "FL": 0,
        "GA": 0,
        "HI": 0,
        "ID": 0,
        "IL": 0,
        "IN": 0,
        "IA": 0,
        "KS": 0,
        "KY": 0,
        "LA": 0,
        "ME": 0,
        "MD": 0,
        "MA": 0,
        "MI": 0,
        "MN": 0,
        "MS": 0,
        "MO": 0,
        "MT": 0,
        "NE": 0,
        "NV": 0,
        "NH": 0,
        "NJ": 15,
        "NM": 0,
        "NY": 0,
        "NC": 0,
        "ND": 0,
        "OH": 0,
        "OK": 0,
        "OR": 0,
        "PA": 0,
        "RI": 0,
        "SC": 0,
        "SD": 0,
        "TN": 0,
        "TX": 0,
        "UT": 0,
        "VT": 0,
        "VA": 0,
        "WA": 0,
        "WV": 0,
        "WI": 0,
        "WY": 0,
        "DC": 0,
        "N/A": 0,
    },

//number of documents    
    ourFees = {
        1: 75.00,
        2: 150.00,
        3: 225.00,
        4: 300.00,
        5: 375.00
    },

//state couier fees
    stateCourier = {
        "AL": 0,
        "NA": 0,
        "AK": 0,
        "AZ": 0,
        "AR": 0,
        "CA": 65,
        "CO": 0,
        "CT": 0,
        "DE": 0,
        "FL": 0,
        "GA": 0,
        "HI": 0,
        "ID": 0,
        "IL": 0,
        "IN": 0,
        "IA": 0,
        "KS": 0,
        "KY": 0,
        "LA": 0,
        "ME": 0,
        "MD": 0,
        "MA": 0,
        "MI": 0,
        "MN": 0,
        "MS": 0,
        "MO": 0,
        "MT": 0,
        "NE": 0,
        "NV": 0,
        "NH": 0,
        "NJ": 0,
        "NM": 0,
        "NY": 0,
        "NC": 0,
        "ND": 0,
        "OH": 0,
        "OK": 0,
        "OR": 0,
        "PA": 60,
        "RI": 0,
        "SC": 0,
        "SD": 0,
        "TN": 0,
        "TX": 60,
        "UT": 0,
        "VT": 0,
        "VA": 0,
        "WA": 0,
        "WV": 0,
        "WI": 0,
        "WY": 0,
        "DC": 60,
        "N/A": 0
    },
//shipping fees    
    ship = {
        "AL": 70,
        "NA": 0,
        "AK": 60,
        "AZ": 60,
        "AR": 50,
        "CA": 60,
        "CO": 60,
        "CT": 50,
        "DE": 42,
        "FL": 50,
        "GA": 100,
        "HI": 60,
        "ID": 60,
        "IL": 50,
        "IN": 50,
        "IA": 50,
        "KS": 60,
        "KY": 40,
        "LA": 50,
        "ME": 50,
        "MD": 90,
        "MA": 50,
        "MI": 50,
        "MN": 50,
        "MS": 50,
        "MO": 50,
        "MT": 60,
        "NE": 60,
        "NV": 60,
        "NH": 50,
        "NJ": 40,
        "NM": 60,
        "NY": 100,
        "NC": 40,
        "ND": 60,
        "OH": 50,
        "OK": 60,
        "OR": 60,
        "PA": 40,
        "RI": 50,
        "SC": 40,
        "SD": 60,
        "TN": 70,
        "TX": 60,
        "UT": 60,
        "VT": 50,
        "VA": 40,
        "WA": 60,
        "WV": 40,
        "WI": 50,
        "WY": 60,
        "DC": 0,
        "N/A": 0
    },
 
//copy fees    
    copyFee = {
        "yes": 10,
        "no": 0
    },
    
    docTypeCost = {
        "trueCopy": 0,
        "cert": 50,
        "certPTO": 40
    },
    
    ourCertFees = {
        trueCopy: {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0
        },
        
        cert: {
            1: 50,
            2: 100,
            3: 150,
            4: 200,
            5: 300,
            6: 400
        },
        
        certPTO: {
            1: 35,
            2: 60,
            3: 85,
            4: 110,
            5: 135,
            6: 160
        }
    },
    
    numOfDocs = {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: "call"
    },
//our fees for ordering documents
    providerOfDoc = {
        you: {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0
        },
        TPP: {
            1: 35.00,
            2: 60.00,
            3: 85.00,
            4: 110.00,
            5: 135.00,
            6: 160.00
        }
    },

//how many steps states require (state or county then state)
    stateSteps = {
        "AL": 2,
        "AK": 1,
        "AZ": 1,
        "AR": 1,
        "CA": 1,
        "CO": 1,
        "CT": 1,
        "DE": 1,
        "FL": 1,
        "GA": 2,
        "HI": 1,
        "ID": 1,
        "IL": 1,
        "IN": 1,
        "IA": 1,
        "KS": 1,
        "KY": 1,
        "LA": 1,
        "ME": 1,
        "MD": 2,
        "MA": 1,
        "MI": 1,
        "MN": 1,
        "MS": 1,
        "MO": 1,
        "MT": 1,
        "NE": 1,
        "NV": 1,
        "NH": 1,
        "NJ": 1,
        "NM": 1,
        "NY": 2,
        "NC": 1,
        "ND": 1,
        "OH": 1,
        "OK": 1,
        "OR": 1,
        "PA": 1,
        "RI": 1,
        "SC": 1,
        "SD": 1,
        "TN": 2,
        "TX": 1,
        "UT": 1,
        "VT": 1,
        "VA": 1,
        "WA": 1,
        "WV": 1,
        "WI": 1,
        "WY": 1,
        "DC": 1,
        "N/A": 1
    },
        
//State department fee for one document       
    stateDeptfee = 10.00,
    
//state department courier fee
    stateDeptCourier = 55;


//function for country steps
function countrySteps() {
    "use strict";
    if (countryFees[document.getElementById('countries').value] > 0) {
        return 2;
    } else if (countryFees[document.getElementById('countries').value] === 0) {
        return 1;
    } else if (countryFees[document.getElementById('countries').value] === "call") {
        return "call";
    }
    
}

//function for country courier fees
function countryCourierFees() {
    "use strict";
    if (countryFees[document.getElementById('countries').value] >= 1) {
        return 60;
    } else {
        return 0;
    }
}

/* calculate the total cost of consulate fees*/
function totalCountryFees() {
    "use strict";
    return (countryFees[document.getElementById('countries').value] + (countryFees[document.getElementById('countries').value] * 0.18)) * numOfDocs[document.getElementById('numOfDocs').value];
}

// calculate the total cost of state fees
function totalStateFees() {
    "use strict";
    return ((stateFees[document.getElementById('states').value]  * numOfDocs[document.getElementById('numOfDocs').value]) + ((stateFees[document.getElementById('states').value] * numOfDocs[document.getElementById('numOfDocs').value])  + stateRushFees[document.getElementById('states').value]) * 0.18) + stateRushFees[document.getElementById('states').value];
}
    
//calculate the number of steps
function totalStepFees() {
    "use strict";
    if (countrySteps() === 1 && document.getElementById('docType').value !== 'certPTO') {
        return ourFees[document.getElementById('numOfDocs').value] * (countrySteps() + stateSteps[document.getElementById('states').value] - 1);
    } else if (document.getElementById('docType').value === 'certPTO') {
        return ourFees[document.getElementById('numOfDocs').value] * countrySteps();
    } else if (countrySteps() > 1) {
        return ourFees[document.getElementById('numOfDocs').value] * (countrySteps() + stateSteps[document.getElementById('states').value]);
    }
}

//state deparment and courier fees
function stateDeptTotal() {
    "use strict";
    if (countrySteps() > 1 || document.getElementById('docType').value === 'certPTO') {
        return (stateDeptfee * document.getElementById('numOfDocs').value) + stateDeptCourier;
    } else if (countrySteps() === 1) {
        return 0;
    }
}

//certification fees
function certFees() {
    "use strict";
    if (document.getElementById('provider').value === 'TPP') {
        return ((docTypeCost[document.getElementById('docType').value] * numOfDocs[document.getElementById('numOfDocs').value]) + (ourCertFees[document.getElementById('docType').value][document.getElementById('numOfDocs').value]));
    } else if (document.getElementById('provider').value === 'you') {
        return 0;
    }
}

//calculating the state courier, shipping, copies, and consulate courier fees
function sscc() {
    "use strict";
    return stateCourier[document.getElementById('states').value] + countryCourierFees() + ship[document.getElementById('states').value] + copyFee[document.getElementById('copies').value];
}

// Form Auto Populators
/*function ProviderDropDown() {
    "use strict";
    switch (document.getElementById('docType').value) {
    case "trueCopy":
        document.getElementById("provider").options[2].style.display = 'none';
        break;
    case "cert":
    case "certPTO":
        document.getElementById('provider').options[0] = new Option('Select provider', 'select');
        document.getElementById("provider").options[1] = new Option("You will provide", "you");
        document.getElementById("provider").options[2] = new Option("Order from The Patent Place", "TPP");
        break;
    default:
        document.getElementById('provider').options[0] = new Option('Select provider', 'select');
    }
}*/

/*function StateDropDown() {
    "use strict";
    if (document.getElementById('states').options[1].value === 'N/A') {
        document.getElementById('states').options[1] = new Option('Alabama', 'AL');
    }
    for (var i = 1; i < document.getElementById('states').options.length; i++) {
        document.getElementById('states').options[i].style.display = 'block';
    switch (document.getElementById('docType').value) {
    case 'certPTO':
            document.getElementById('states').options[i].style.display = 'none';
            document.getElementById('states').options[1] = new Option('N/A', 'N/A');
        break;
    case 'cert':
    case 'trueCopy':
            document.getElementById('states').options[i].style.display = 'block';
        break;
    default:
    }
    }
}*/

//PUT AUTOFILLER HERE FOR STATE N/A FOR CERTIFIED PTO DOCS ETC...


// Document Esimator3.0
function Estimator() {
    "use strict";
    var costEstimate = Math.round(totalCountryFees() + totalStateFees() + totalStepFees() + stateDeptTotal() + certFees() + sscc());
    
    /*if (document.getElementById('docType').value === "certPTO") {
        document.getElementById('states').value = "N/A";
    }*/
    
   /* if (document.getElementById('docType').value === "trueCopy") {
        document.getElementById('provider').value = "you";
    }*/

    if (countryFees[document.getElementById('countries').value] === "call" || numOfDocs[document.getElementById('numOfDocs').value] === "call") {
        document.getElementById('estimate').innerHTML = "Call for Estimate";
    } else if (isNaN(costEstimate)) {
        document.getElementById('estimate').innerHTML = "Complete form";
    } else {
        document.getElementById('estimate').innerHTML = "$" + costEstimate + ".00";
    }
}


//tester
function test() {
    "use strict";
    document.getElementById('countrySteps').innerHTML = countrySteps();
    document.getElementById('countryCourierFees').innerHTML = countryCourierFees();
    document.getElementById('countryEmbassyFees').innerHTML = totalCountryFees();
    document.getElementById('secOfStateFees').innerHTML = totalStateFees();
    document.getElementById('stateCourierFees').innerHTML = stateCourier[document.getElementById('states').value];
    document.getElementById('stateShippingFees').innerHTML = ship[document.getElementById('states').value];
    document.getElementById('totalStepFees').innerHTML = totalStepFees();
    document.getElementById('stateDepartmentFees').innerHTML = stateDeptTotal();
    document.getElementById('certificationFees').innerHTML = certFees();
    document.getElementById('copyFees').innerHTML = copyFee[document.getElementById('copies').value];
}

//how long consulates take to process
var country_times = {
        "AFG": 7,
        "ALB": 0,
        "DZA": 6,
        "AND": 0,
        "AGO": 6,
        "ATG": 0,
        "ARG": 0,
        "ARM": 0,
        "AUS": 0,
        "AUT": 0,
        "AZE": 0,
        "BHS": 0,
        "BHR": 0,
        "BGD": 3,
        "BRB": 0,
        "BLR": 0,
        "BEL": 0,
        "BLZ": 0,
        "BEN": 5,
        "BTN": "call",
        "BOL": 5,
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
        "CHN": 10,
        "COL": 0,
        "COM": "call",
        "COG": "call",
        "COK": 0,
        "CRI": 0,
        "CIV": 10,
        "HRV": 0,
        "CUB": "call",
        "CYP": 0,
        "CZE": 0,
        "DNK": 0,
        "DJI": "call",
        "DMA": 0,
        "DOM": 0,
        "ECU": 0,
        "EGY": 6,
        "SLV": 0,
        "GNQ": "call",
        "ERI": "call",
        "EST": 0,
        "ETH": 7,
        "FJI": 0,
        "FIN": 0,
        "FRA": 0,
        "GAB": "call",
        "GMB": 7,
        "GCC": 3,
        "GEO": 0,
        "DEU": 0,
        "GHA": "call",
        "GRC": 0,
        "GRD": 0,
        "GTM": 14,
        "GIN": "call",
        "GNB": "call",
        "GUY": "call",
        "HTI": 7,
        "HND": 0,
        "HKG": 0,
        "HUN": 0,
        "ISL": 0,
        "IND": 0,
        "IDN": 12,
        "IRN": 10,
        "IRQ": 7,
        "IRL": 0,
        "ISR": 0,
        "ITA": 0,
        "JAM": "call",
        "JPN": 0,
        "JOR": 5,
        "KAZ": 0,
        "KEN": 7,
        "KIR": "call",
        "KWT": 5,
        "KGZ": 0,
        "LAO": "call",
        "LVA": 0,
        "LBN": 50,
        "LSO": 0,
        "LBR": 0,
        "LBY": 8,
        "LIE": 0,
        "LTU": 0,
        "LUX": 0,
        "MAC": 0,
        "MKD": 0,
        "MDG": 5,
        "MWI": 0,
        "MYS": 5,
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
        "MMR": 7,
        "NAM": 0,
        "NRU": "call",
        "NPL": "call",
        "NLD": 0,
        "NZL": 0,
        "NIC": 0,
        "NER": "call",
        "NGA": 10,
        "NIU": 0,
        "NOR": 0,
        "OMN": 0,
        "PAK": 10,
        "PSE": 14,
        "PAN": 0,
        "PNG": "call",
        "PRY": 0,
        "PER": 0,
        "PHL": 14,
        "POL": 0,
        "PRT": 0,
        "QAT": 14,
        "ROU": 0,
        "RUS": 0,
        "RWA": 14,
        "KNA": 0,
        "LCA": 0,
        "VCT": 0,
        "WSM": 0,
        "SMR": 0,
        "STP": 0,
        "SAU": 3,
        "SEN": "call",
        "SRB": 0,
        "SYC": 0,
        "SLE": 5,
        "SGP": 2,
        "SVK": 0,
        "SVN": 0,
        "SLB": "call",
        "SOM": "call",
        "ZAF": 0,
        "KOR": "call",
        "SSD": 3,
        "ESP": 0,
        "LKA": 5,
        "SDN": 6,
        "SUR": 0,
        "SWZ": 0,
        "SWE": 0,
        "CHE": 0,
        "SYR": 11,
        "TJK": "call",
        "TZA": "call",
        "THA": 4,
        "TLS": 4,
        "TGO": "call",
        "TON": 0,
        "TTO": 0,
        "TUN": 3,
        "TUR": 0,
        "TKM": "call",
        "TUV": "call",
        "UGA": "call",
        "UKR": 0,
        "ARE": 3,
        "GBR": 0,
        "URY": 0,
        "UZB": 0,
        "VUT": 0,
        "VEN": 0,
        "VNM": 4,
        "YEM": 4,
        "ZMB": "call",
        "ZWE": "call"
    },
    
// long states take to process
    state_times = {
        "AL": 10,
        "NA": 0,
        "AK": 5,
        "AZ": 5,
        "AR": 5,
        "CA": 3,
        "CO": 3,
        "CT": 3,
        "DE": 3,
        "FL": 5,
        "GA": 10,
        "HI": 7,
        "ID": 5,
        "IL": 7,
        "IN": 3,
        "IA": 5,
        "KS": 5,
        "KY": 5,
        "LA": 5,
        "ME": 5,
        "MD": 10,
        "MA": 5,
        "MI": 7,
        "MN": 5,
        "MS": 5,
        "MO": 5,
        "MT": 5,
        "NE": 5,
        "NV": 3,
        "NH": 3,
        "NJ": 3,
        "NM": 5,
        "NY": 10,
        "NC": 5,
        "ND": 5,
        "OH": 5,
        "OK": 5,
        "OR": 5,
        "PA": 3,
        "RI": 4,
        "SC": 4,
        "SD": 5,
        "TN": 10,
        "TX": 3,
        "UT": 3,
        "VT": 3,
        "VA": 5,
        "WA": 3,
        "WV": 5,
        "WI": 3,
        "WY": 5,
        "DC": 1,
        "N/A": 0 
    },
        
//how long the state Department takes
    StateDeptTime = 4,
    usptoTime = 10;

//time 1 step
function totalTime1() {
    "use strict";
    return country_times[document.getElementById('countries').value] +             state_times[document.getElementById('states').value];
}

//time 2 step
function totalTime2() {
    "use strict";
    return country_times[document.getElementById('countries').value] + state_times[document.getElementById('states').value] + StateDeptTime;
}

function totalTime3() {
    "use strict";
    return country_times[document.getElementById('countries').value] + StateDeptTime + usptoTime;
}

//call for time

//function to calculate the estimated time
function timeEstimate() {
    "use strict";
    
//time calculation for 1 step
    if (countrySteps() === 1 && document.getElementById('docType').value !== 'certPTO') {
        
        document.getElementById('estimate2').innerHTML = totalTime1() + " Business Days";
    } else if (countrySteps() === 1 && document.getElementById('docType').value === 'certPTO') {
        document.getElementById('estimate2').innerHTML = 4 + " Business Days";
    }

//time calcuation for 2+ steps
        else if (countrySteps() === 2) {
        
        document.getElementById('estimate2').innerHTML = totalTime2() + " Business Days";
    }

//time calculation for countries we dont have info on...
        else if (countrySteps() === "call") {
            
        document.getElementById('estimate2').innerHTML = "Call for Estimate";
    }
//time clalcution for USPTO orders
    if (document.getElementById('docType').value === "certPTO" && document.getElementById('provider').value === "TPP") {
        document.getElementById('estimate2').innerHTML = totalTime3() + " Business Days";
    }
    
    if (isNaN(totalTime1()) || isNaN(totalTime2()) || isNaN(totalTime3())) {
        document.getElementById('estimate2').innerHTML = "Complete form";
    }
}
