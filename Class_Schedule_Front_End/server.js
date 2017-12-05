var fs = require('fs');                                                                                                                                                                                                                              
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('NCKU_class/.gitignore/private.key', 'utf8');
var certificate = fs.readFileSync('NCKU_class/.gitignore/certificate.crt', 'utf8');
var ca_bundle = fs.readFileSync('NCKU_class/.gitignore/ca_bundle.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate ,ca: ca_bundle};
const express = require('express');
const app = express();
const port = 1235;

const config = require('./NCKU_class/test/config');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: config.mysql.user,
  password: config.mysql.password,
  charset: 'utf8'
});
app.use(express.static(__dirname + '/NCKU_class'))


connection.connect();
app.get('/test', function (req, res) {
  var id=req.param('id');
  var query_str="".concat("SELECT * FROM wp2017_groupe.`" ,id ,"`")
  console.log(query_str)
  connection.query(query_str, (err, rows, fields) => {
//  connection.query("SELECT * FROM wp2017_groupe.`A1`", (err, rows, fields) => { 
  if (err) console.log('MySQL query failed');
  else{
    //console.log('check');
    var str=""
    for(var i=0;i<rows.length;i++){
      str=str.concat("<a href=\"#\" id=\"" ,rows[i].序號 ,"\" name=\"but\" value=\"" ,rows[i].序號,"\" class=\"department\">" ,rows[i].課程名稱 ,"<br>" ,rows[i].時間,"</a><br>")
    }
    res.send(str);
  }
  })
});
app.get('/time', function (req, res) {
  var id=req.param('id');
  var day=req.param('day');
  var time=req.param('time');
  var query_str="".concat("SELECT * FROM wp2017_groupe.`" ,id ,"`")
  //console.log(query_str)
  connection.query(query_str, (err, rows, fields) => {
  if (err) console.log('MySQL query failed');
  else{
    //console.log('check');
    var str=""
    var query_time=""
    var search_day=""
    var search_time=""
    for(var i=0;i<rows.length;i++){
      if(rows[i].時間[0]=="["){
          query_time = rows[i].時間.split("]")
          search_day=query_time[0].split("[")[1]
          search_time1=query_time[1].split("~")[0]
          search_time2=query_time[1].split("~")[1]
          for(var j=search_time1;j<=search_time2;j++){
            if(search_day==day && j==time ){
              str=str.concat("<a href=\"#\" id=\"" ,rows[i].序號 ,"\" name=\"but\" value=\"" ,rows[i].序號,"\" class=\"department\">" ,rows[i].課程名稱 ,"<br>" ,rows[i].時間,"</a><br>")
              break;
            }
          }
      }
    }
    res.send(str);
  }
  })
});
app.get('/save',function(req,res){
  var filename = req.param('filename');
  var wdata = req.param('wdata');
  res.send(filename+" "+wdata);
  fs.writeFile(filename,wdata,function(err){
    if(err) throw err;
    console.log('file write')
  })
});