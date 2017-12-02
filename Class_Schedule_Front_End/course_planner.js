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
  if(a[num-1]==0)
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
  if(b[m-1][n-1]==0)
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
      $(result_id).append(res);
    }
  })
}

$(".dropdown").on("click", "a[name='but']", (event) => { 
  var res = event.target.text
  var name = res.split("[")[0];
  var time = res.split("[")[1];
  //console.log(name) 
  var day = time[0];
 // console.log(day) 
  var class_t1 = time[2];
  var class_t2 = time[4];
  var str = "";
  if(time.length!=2){
    switch(day)
    {
      case '1':
        str1=str.concat("#MON-", class_t1);
        str2=str.concat("#MON-", class_t2);
        break;
      case '2':
        str1=str.concat("#TUE-", class_t1);
        str2=str.concat("#TUE-", class_t2);
        break;
      case '3':
        str1=str.concat("#WED-", class_t1);
        str2=str.concat("#WED-", class_t2);
        break;
      case '4':
        str1=str.concat("#THU-", class_t1);
        str2=str.concat("#THU-", class_t2);
        break;
      case '5':
        str1=str.concat("#FRI-", class_t1);
        str2=str.concat("#FRI-", class_t2);
        break;
      case '6':
        str1=str.concat("#SAT-", class_t1);
        str2=str.concat("#SAT-", class_t2);
        break;
      case '7':
        str1=str.concat("#SUN-", class_t1);
        str2=str.concat("#SUN-", class_t2);
        break;
    }

    //document.getElementById(str).value=name;
    $(str1).html(name);
    $(str2).html(name);
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
	
	function changeButton2(num)
	{
		if(num==1)
			f[0]=(f[0]+1)%2;
		else if(num==2)
			f[1]=(f[1]+1)%2;
		else if(num==3)
			f[2]=(f[2]+1)%2;
		else if(num==4)
			f[3]=(f[3]+1)%2;
		if(f[num-1]==0)
		{
			for(var i=1; i<5; i++)
			{
				if (i != num)
				{
					document.getElementById("g"+i).style.display = "none";
				}
				if(i == num)
				{
					document.getElementById("query_result"+i).style.display="block";
				}
			}
		}
		else{
			for(var i=1; i<5; i++)
			{
				if (i != num)
				{
					document.getElementById("g"+i).style.display = "block";
				}
				if(i == num)
				{
					document.getElementById("query_result"+i).style.display="none";
				}
			}
		}
	}
	function searchBar()
	{
		var input, filter, departments, colleges, a, b, i;
		input = document.getElementById("searchBar");
		filter = input.value;
		colleges = document.getElementsByClassName("college");
		departments = document.getElementsByClassName("department");
		for ( i = 0; i < 10; i++)
		{
			a = colleges[i];
			b = departments[i]
			if (a.innerHTML.toUpperCase().indexOf(filter) > -1)
			{
				colleges[i].style.display = "block";
			}else{
				colleges[i].style.display = "none";
			}
		/*	if (b.innerHTML.toUpperCase().indexOf(filter) > -1)
			{
				departments[i].style.display = "block";
			}else{
				departments[i].style.display = "none";
			} */
		}
		
	}		
