if (isNaN(totalTime1()) || isNaN(totalTime2()) || isNaN(totalTime3())) {
        document.getElementById('estimate2').innerHTML = "Complete form";
    }
}

function legal() {
	"use strict";
	document.getElementById('legal').innerHTML"(<label for='last_name'>Country <span class='text-muted'>enter country if assignment needs legalization</span></label>
    <input type='text' class='form-control' id='legal' placeholder='Enter Country'>
    <small class='form-text text-muted'>Fill in if assignments needs to be used in a foreign country</small>)";

}