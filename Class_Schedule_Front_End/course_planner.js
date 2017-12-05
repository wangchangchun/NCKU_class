var arr=[
  ['A1' ,'A9' ,'AG' ,'A7'],
  ['B1' ,'B2' ,'B3' ,'B5'],
  ['C1' ,'C2' ,'C3' ,'C4' ,'F8'],
  ['E1' ,'E3' ,'E4' ,'E5' ,'E6' ,'E8' ,'E9' ,'F0' ,'F1','F4' ,'F5' ,'F6' ,'F9'],
  ['H1' ,'H2' ,'H3' ,'H4' ,'H5'],
  ['I2' ,'I3' ,'I5' ,'I6' ,'I7' ,'I8'],
  ['D2' ,'D4' ,'D5' ,'D8'],
  ['E2' ,'F7'],
  ['E7' ,'F2' ,'F3'],
  ['C5' ,'C6'] 
]
var a = [0,0,0,0,0,0,0,0,0,0];
var b=[
  [0 ,0 ,0 ,0],
  [0 ,0 ,0 ,0],
  [0 ,0 ,0 ,0 ,0],
  [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0,0 ,0 ,0 ,0],
  [0 ,0 ,0 ,0 ,0],
  [0 ,0 ,0 ,0 ,0 ,0],
  [0 ,0 ,0 ,0],
  [0 ,0],
  [0 ,0 ,0],
  [0 ,0] 
]

function changeBut(num){
  a[num-1]=(a[num-1]+1)%2;
  if(a[num-1]==1)
  {
    for(var i=1; i<11; i++)
    {
      if (i != num)
      {
        document.getElementById("a"+i).style.display = "none";
      }
      if(i == num)
      {
        document.getElementById("u"+i).style.display="block";
      }
    }
  }
  else{
    for(var i=1; i<11; i++)
    {
      if (i != num)
      {
        document.getElementById("a"+i).style.display = "block";
      }
      if(i == num)
      {
        document.getElementById("u"+i).style.display="none";
      }
    }
  }
}
var day_str=""
var time=""
var day=0
$("#main").on("click", "td[class='table-cell']", (event) => { 
  
  for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr[i].length;j++){
      var result="#query_result".concat(arr[i][j])
      $(result).empty();
    }
  }
  


  day_str=event.target.id.split("-")[0]
  time=event.target.id.split("-")[1]
  day=0
  switch(day_str){
    case 'MON':
      day=1;
      break;
    case 'TUE':
      day=2;
      break;
    case 'WED':
      day=3;
      break;
    case 'THU':
      day=4;
      break;
    case 'FRI':
      day=5;
      break;
    case 'SAT':
      day=6;
      break;
    case 'SUN':
      day=7;
      break;
  }
});
function clickBut(m ,n){
  b[m-1][n-1]=(b[m-1][n-1]+1)%2;
  if(b[m-1][n-1]==1)
  {
    for(var i=0; i<arr[m-1].length; i++)
    {
      if (arr[m-1][i] != arr[m-1][n-1])
      {
        document.getElementById(arr[m-1][i]).style.display = "none";
      }
      if(arr[m-1][i] == arr[m-1][n-1])
      {
        document.getElementById("query_result"+arr[m-1][i]).style.display="block";
      }
    }
  }
  else{
    for(var i=0; i<arr[m-1].length; i++)
    {
      if (arr[m-1][i] != arr[m-1][n-1])
      {
        document.getElementById(arr[m-1][i]).style.display = "block";
      }
      if(arr[m-1][i] == arr[m-1][n-1])
      {
        document.getElementById("query_result"+arr[m-1][i]).style.display="none";
      }
    }
  }
  $.get({
    url: "../time",
    method: "GET",
    type: "get",
    data: { 
      id:arr[m-1][n-1] ,
      day: day,
      time: time
    }, 
    success: (res) => {
      var result_id="#query_result".concat(arr[m-1][n-1])
      last_result_id=result_id
      $(result_id).append(res);
    }
  })
}

$(".dropdown").on("click", "a[name='but']", (event) => { 
  var res = event.target.text
  var name = res.split("[")[0];
  var test = res.split("[")
  for(var j=1;j<test.length;j++){

    var time = res.split("[")[j];
    var day = time[0];
    var class_t1 = "";
    var class_t2 = "";
    var only_one_class = 0
    if(time[3]=='~'){
      class_t1 = time[2];
      class_t2 = time[4];
      only_one_class=0;
    }
    else{
      class_t1 = time[2];
      only_one_class=1
    }

    var str = "";
    if(time.length!=2){
      switch(day)
      {
        case '1':
          str="#MON-";
          break;
        case '2':
          str="#TUE-"
            break;
        case '3':
          str="#WED-"
            break;
        case '4':
          str="#THU-"
            break;
        case '5':
          str="#FRI-"
            break;
        case '6':
          str="#SAT-"
            break;
        case '7':
          str="#SUN-"
            break;
      }

      //document.getElementById(str).value=name;
      if(only_one_class==0){
        if(class_t1=='N'){
          var str1=str.concat(class_t1);
          $(str1).html(name);
          $(str1).attr({"name" : event.target.id});
          class_t1=5
        }
        if(class_t2=='N'){
          var str1=str.concat(class_t2);
          $(str1).html(name);
          $(str1).attr({"name" : event.target.id});
          class_t2=4
        }
        for(var i=class_t1;i<=class_t2;i++){
          var str1=str.concat(i);
          $(str1).html(name);
          $(str1).attr({"name" : event.target.id});
        }
      }
      else{
        var str1=str.concat(class_t1);
        $(str1).html(name);
        $(str1).attr({"name" : event.target.id});
      }
    }
    //$(str1).html(name);
    //$(str2).html(name);
  }
});
$("#g1").click(() => {
  $.get({
    url: "../test",
    method: "GET",
    type: "get",
    data: { 
      id:"A1"
    }, 
    success: (res) => {
      //$('#text').html(res);
      $('#query_result1').append(res);
    }
  })
});
$("#g2").click(() => {
  $.get({
    url: "../test",
    method: "GET",
    type: "get",
    data: { 
      id:"A9"
    }, 
    success: (res) => {
      //$('#text').html(res);
      $('#query_result2').append(res);
    }
  })
});
$("#g3").click(() => {
  $.get({
    url: "../test",
    method: "GET",
    type: "get",
    data: { 
      id:"AG"
    }, 
    success: (res) => {
      //$('#text').html(res);
      $('#query_result3').append(res);
    }
  })
});
$("#g4").click(() => {
  $.get({
    url: "../test",
    method: "GET",
    type: "get",
    data: { 
      id:"A7"
    }, 
    success: (res) => {
      //$('#text').html(res);
      $('#query_result4').append(res);
    }
  })
});

// Below are functions for the left sidebar menu. 

	// 1. 
var f= [1,1,1,1,1,1,1,1,1,1,1,1];
		function changeButton(num)
	{

		if(num==0)
			f[0]=(f[0]+1)%2;
		else if(num==1)
			f[1]=(f[1]+1)%2;
		else if(num==2)
			f[2]=(f[2]+1)%2;
		else if(num==3)
			f[3]=(f[3]+1)%2;
		else if(num==4)
			f[4]=(f[4]+1)%2;
		else if(num==5)
			f[5]=(f[5]+1)%2;
		else if(num==6)
			f[6]=(f[6]+1)%2;
		else if(num==7)
			f[7]=(f[7]+1)%2;
		else if(num==8)
			f[8]=(f[8]+1)%2;
		else if(num==9)
			f[9]=(f[9]+1)%2;
		else if(num==10)
			f[10]=(f[10]+1)%2;
		else if(num==11)
			f[11]=(f[11]+1)%2;
		if(f[num]==0)
		{
			for(var i=0; i<12; i++)
			{
				if (i != num)
				{
					document.getElementById("e"+i).style.display = "none";
				}
				if(i == num)
				{
					document.getElementById("college"+i).style.display="block";
				}
			}
		}
		else
		{
			for(var i=0; i<12; i++)
			{
				if (i != num)
				{
					document.getElementById("e"+i).style.display = "block";
				}
				if(i == num)
				{
					document.getElementById("college"+i).style.display="none";
				}
			}
		}
	}
// 2.
var arr2=
[
  ['A2', 'A3', 'A4', 'A5', 'A6', 'AA', 'AH'],
  ['AN', 'C0'],
  ['A1','A9','AG','A7'],
  ['B0','B1' ,'B2' ,'B3' ,'B5','K1','K2','K3','K5','K4','K8','K7'],
  ['C1' ,'C2' ,'C3' ,'C4' ,'CZ','F8','L1','L2','L3','L4','LZ','L7','LA','VF'],
  ['E0','E1' ,'E3' ,'E4' ,'E5' ,'E6' ,'E8' ,'E9' ,'F0' ,'F1','F4' ,'F5' ,'F6' ,'F9','N1','N3','N4','N5','N6','N8','NC','N9','P1','P4','P5','P6','P8','N0','NA','NB','P0'],
  ['H1' ,'H2' ,'H3' ,'H4' ,'H5','R1','R2','R3','R7','R4','R5','R9','R0','R6','R8','RA','RB','RD','RZ'],
  ['I2' ,'I3' ,'I5' ,'I6' ,'I7' ,'I8','T2','T3','T6','T7','S0','S1','S2','S3','S4','S5','S6','S7','SC','S8','S9','SA','T1','T4','SB','T8','T9','TA','TC'],
  ['D2' ,'D4' ,'D5' ,'D8','U2','U1','U5','U7','U3'],
  ['E2' ,'F7','N2','Q1','Q3','Q6','Q7','ND','P7','Q5','P9','V6','V8','V9','VA','VB','VC','VD','VE','VG','VH','VK','VM','VN','VO'],
  ['E7' ,'F2' ,'F3','N7','P2','P3','PA','PB'],
  ['C5' ,'C6','L5','L6','Z2','Z0','Z3','Z5'] 
]
var departmentList = 
[ 
	[0,0,0,0,0,0,0], //其他 (7)
	[0,0],           //不分學院 (2)
	[0,0,0,0],       //通識課程 (4)
	[0,0,0,0,0,0,0,0,0,0,0,0],     // 文學院 (12)
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0], // 理學院 (14)
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//工學院 (31)
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],  //管理學院 (19)
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], //醫學院 (29)
	[0,0,0,0,0,0,0,0,0], //社會科學學院 (9)
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], //電機資訊學院 (25)
	[0,0,0,0,0,0,0,0], // 規劃與設計學院 (8)
	[0,0,0,0,0,0,0,0] // 生物科學與科技學院 (8) 
]
function changeButton2(col,dep)
{

  departmentList[col][dep] = ( departmentList[col][dep] + 1 ) % 2;

  if(departmentList[col][dep] == 1)
  {
    for(var i=0; i < arr2[col].length; i++)
    {
      if ( arr2[col][i] != arr2[col][dep])
      {
        document.getElementById('e'+arr2[col][i]).style.display = "none";
      }
      if(arr2[col][i] == arr2[col][dep])
      {
        document.getElementById("query_resulte"+arr2[col][i]).style.display="block";
      }
    }
  }
  else
  {
    for(var i=0; i<arr2[col].length; i++)
    {
      if ( arr2[col][i] != arr2[col][dep] )
      {
        document.getElementById('e'+arr2[col][i]).style.display = "block";
      }
      if( arr2[col][i] == arr2[col][dep] )
      {
        document.getElementById("query_resulte"+ arr2[col][i]).style.display="none";
      }
    }
  }
  
  $.get({
    url: "../test",
    method: "GET",
    type: "get",
    data: { 
      id:arr2[col][dep]
    }, 
    success: (res) => {
      var result_id="#query_resulte".concat(arr2[col][dep])
      $(result_id).append(res);
    }
  })
}


function searchBar()
{
  var input = document.getElementById("searchBar");
  var filter = input.value;
  var collegeArray = document.getElementsByClassName("college");
  var a,b;
  for (var i = 0; i < 12; i++)
  {
    a = collegeArray[i];
    b = departmentArray[i]

      if (a.innerHTML.indexOf(filter) > -1)
      {
        collegeArray[i].style.display = "block";
      }
      else
      {
        collegeArray[i].style.display = "none";
      }
    /*	if (b.innerHTML.indexOf(filter) > -1)
        {
        departmentArray[i].style.display = "block";
        }
        else
        {
        departmentArray[i].style.display = "none";
        } */
  }

}		
