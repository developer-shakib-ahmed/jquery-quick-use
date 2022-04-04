<?php
	header('Content-type: text/javascript');

	$json = array(
		'success' => false,
		'result'  => 0,
	);

	if(isset($_POST['name']) || isset($_POST['age']) || isset($_POST['addr'])){
		$name  = $_POST['name'];
		$age   = $_POST['age'];
		$addr  = $_POST['addr'];
		$json['success'] = true;
		$json['result']  = array(
			'name'  => $name,
			'age'   => $age,
			'addr'  => $addr,
		);
	}

	echo json_encode($json);
?>