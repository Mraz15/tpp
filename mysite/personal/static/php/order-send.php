<?php
	if(isset($_POST['submit'])){
		$msg = 'First Name: ' . $_POST('first_name') ."\n"
				.'Last Name: ' . $_POST('last_name') ."\n"
				.'Company: ' . $_POST('company') ."\n"
				.'Address: ' . $_POST('address') ."\n"
				.'Email : ' . $_POST('email') ."\n"
				.'Reference : ' . $_POST('ref_num') ."\n"    
	} else {
		header('location: order.php');
		exit(0);
	}
?>