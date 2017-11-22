<?php
$config = include('./config.php');
//var_dump($config);

$con = mysql_connect('localhost', $config['mysql']['user'], $config['mysql']['password']);
if (!$con) {
	die("Cannot connect to mysql".mysql_error());
}
mysql_query("SET NAMES 'UTF8'");
mysql_select_db($config['mysql']['dbname']);
//echo "check";
$sql = "SELECT * FROM  `A1` WHERE `序號`='{$_POST['id']}'";
$res = mysql_query($sql, $con);
if ($res) {
	while($result = mysql_fetch_array($res))
  {
    echo $result['時間']."+".$result['課程名稱']; 
  }
} else {
	echo "Insert failed".mysql_error();
}
?>
