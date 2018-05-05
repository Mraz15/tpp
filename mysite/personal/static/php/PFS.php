<?php

function test_run(){
	$results = shell_exec('python testpy.py');
	echo $results;
}

?>