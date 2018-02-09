<?php
	include_once 'config.php';
	header("Access-Control-Allow-Origin: *");
	$select = isset($_POST['select']) ? $_POST['select'] : '';
	$other = isset($_POST['other']) ? $_POST['other'] : '';
	$pageNo = isset($_POST['pageNo']) ? $_POST['pageNo'] : 0;
	$qty = isset($_POST['qty']) ? $_POST['qty'] : 0;
	if($conn){
		if($select != ''){
			if($pageNo == 0 && $qty == 0){
				$result = $conn->query($select);
				if($result){
					$row = $result->fetch_all(MYSQLI_ASSOC);
					$result->close();
					$res = array(
						'data'=>$row,
						'status'=>1
					);
					echo json_encode($res,JSON_UNESCAPED_UNICODE);
				}else {
					echo json_encode(array('status'=>2),JSON_UNESCAPED_UNICODE);
				}
			}else{
				$select .= ' limit '. $qty*($pageNo-1) . ',' . $qty;
				$result = $conn->query($select);
				$row = $result->fetch_all(MYSQLI_ASSOC);
				$result->close();
				$res = array(
					'pageNo'=>$pageNo,
					'qty'=>$qty,
					'data'=>$row,
					'status'=>1
				);
				echo json_encode($res,JSON_UNESCAPED_UNICODE);
			}
		}else if($other != ''){
			$result = $conn->query($other);
			if($result){
				echo json_encode(array('status'=>1),JSON_UNESCAPED_UNICODE);
			}else {
				echo json_encode(array('status'=>2),JSON_UNESCAPED_UNICODE);
			}
		}
	}else {
		echo json_encode(array('status'=>0),JSON_UNESCAPED_UNICODE);
	}
	$conn->close();
?>
