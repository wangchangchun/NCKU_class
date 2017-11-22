<?php
$config = include('./config.php');
//var_dump($config);

$con = mysql_connect('localhost', $config['mysql']['user'], $config['mysql']['password']);
if (!$con) {
	die("Cannot connect to mysql".mysql_error());
}
mysql_query("SET NAMES 'UTF8'");
mysql_select_db($config['mysql']['dbname']);
$sql = "SELECT * FROM  `A1`";
$res = mysql_query($sql, $con);
if ($res) {
	while($result = mysql_fetch_array($res))
  {
    echo "<button id=\"".$result['序號']."\" name=\"but\" class=\"ui inverted green button\">".$result['課程名稱']."<br>".$result['時間']."</button><br>";
  }
} else {
	echo "Insert failed".mysql_error();
}
?>
