<?php
	include_once 'config.php';
	header("Access-Control-Allow-Origin: *");
	$data = json_decode(file_get_contents('php://input'));
	$user = $data->username;
	$password = $data->password;
	if($user&&$password){
		$sql = "select * from manager where (manager_name='$user') and (password='$password')";
		$result = $conn->query($sql);
		if(mysqli_num_rows($result)>0){
			// $row = $result->fetch_all(MYSQLI_ASSOC);
			$row = mysqli_fetch_array($result);
			$result->close();
			$res = array(
				'user'=>$row['manager_name'],
				'status'=>$row['status'],
				'res'=>true
			);
			echo json_encode($res,JSON_UNESCAPED_UNICODE);
		}else {
			$res = array(
				'res'=>false
			);
			echo json_encode($res,JSON_UNESCAPED_UNICODE);
		}
	}
?>
