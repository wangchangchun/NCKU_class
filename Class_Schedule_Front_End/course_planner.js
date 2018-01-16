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
///
var buf;
var week=['MON','TUE','WED','THU','FRI','SAT','SUN'];
function replaceCourse(name){
//    alert('first');
    for(var i=0;i<7;i++){
        for(var j=0;j<10;j++){
            strbuf=week[i]+"-"+j;
            if(name==document.getElementById(strbuf).innerHTML){
                //alert('here!');
                document.getElementById(strbuf).innerHTML='';
            }
        }
    }
}

function rmCourse(input){
    var goal=input.innerHTML;
    alert(goal);
    var cell;
    for(var i=0;i<7;i++){
        for(var j=0;j<10;j++){
            cell=week[i]+"-"+j;
            if(goal==document.getElementById(cell).innerHTML){
                document.getElementById(cell).innerHTML='';
            }
        }
    }
}
///
function changeBut(num){
  a[num-1]=(a[num-1]+1)%2;
  if(a[num-1]==1)
  {
    for(var i=1; i<11; i++)
    {
      if (i != num)
      {
        $('#a'+i).transition('slide up', '800ms');
		//document.getElementById("a"+i).style.display = "none";
      }
      if(i == num)
      {
        $('#u'+i).transition('slide down', '800ms');
		//document.getElementById("u"+i).style.display="block";
      }
    }
  }
  else{
    for(var i=1; i<11; i++)
    {
      if (i != num)
      {
        $('#a'+i).transition(  'slide down', '800ms');
		//document.getElementById("a"+i).style.display = "block";
      }
      if(i == num)
      {
        $('#u'+i).transition(  'slide up', '800ms');
		//document.getElementById("u"+i).style.display="none";
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
$( ".table-cell" ).click(function(){
                         //goal=this.innerHTML;
                         goal=this.attributes["name"].value;
                         /*var cell;
                          for(var i=0;i<7;i++){
                          for(var j=0;j<10;j++){
                          cell=week[i]+"-"+j;
                          if(goal==document.getElementById(cell).innerHTML){
                          document.getElementById(cell).innerHTML='';
                          }
                          }
                          }*/
                         });
function dltCourse(){
    var cell;
    for(var i=0;i<7;i++){
        for(var j=0;j<10;j++){
            cell=week[i]+"-"+j;
            if(goal==document.getElementById(cell).getAttribute("name")){
                document.getElementById(cell).innerHTML='';
            }
            //alert(document.getElementsByName(goal).innerHTML)
        }
    }
    goal='';
}
function clickBut(m ,n){
  b[m-1][n-1]=(b[m-1][n-1]+1)%2;
  if(b[m-1][n-1]==1)
  {
    for(var i=0; i<arr[m-1].length; i++)
    {
      if (arr[m-1][i] != arr[m-1][n-1])
      {
        $('#'+arr[m-1][i]).transition( 'slide up', '800ms');
		//document.getElementById(arr[m-1][i]).style.display = "none";
      }
      if(arr[m-1][i] == arr[m-1][n-1])
      {
        $('#query_result'+arr[m-1][i]).transition('slide down', '800ms');
		//document.getElementById("query_result"+arr[m-1][i]).style.display="block";
      }
    }
  }
  else{
    for(var i=0; i<arr[m-1].length; i++)
    {
      if (arr[m-1][i] != arr[m-1][n-1])
      {
		$('#'+arr[m-1][i]).transition(  'slide down',   '800ms');
		//document.getElementById(arr[m-1][i]).style.display = "block";
      }
      if(arr[m-1][i] == arr[m-1][n-1])
      {
        $('#query_result'+arr[m-1][i]).transition(  'slide up',   '800ms');
		//document.getElementById("query_result"+arr[m-1][i]).style.display="none";
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
$(".dropdown").on({
  "click":(event) => { //chick this
    var res = course_name;
    var name = res.split(":")[0];
    var test = res.split("[")
    var time = $(event.target).attr("value");//時間
    for(var j=1;j<test.length;j++){
        var day = time[1];//日期
        var class_t1 = "";
        var class_t2 = "";
        var only_one_class = 0;
        if(time[4]=='~'){
          class_t1 = time[3];
          class_t2 = time[5];
          only_one_class=0;
        }
        else{
          class_t1 = time[3];
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
                  //////
                  str2 = str1.replace('#', "");
                  replaceCourse(document.getElementById(str2).innerHTML);
                  //////
          $(str1).html(name);
          $(str1).attr({"name" : event.target.id});
          class_t1=5
        }
        if(class_t2=='N'){
          var str1=str.concat(class_t2);
                  //////
                  str2 = str1.replace('#', "");
                  replaceCourse(document.getElementById(str2).innerHTML);
                  //////
          $(str1).html(name);
          $(str1).attr({"name" : event.target.id});
          class_t2=4
        }
        for(var i=class_t1;i<=class_t2;i++){
          var str1=str.concat(i);
                  //////
                  str2 = str1.replace('#', "");
                  replaceCourse(document.getElementById(str2).innerHTML);
                  //////
          $(str1).html(name);
          $(str1).attr({"name" : event.target.id});
        }
      }
      else{
        var str1=str.concat(class_t1);
                  //////
                  str2 = str1.replace('#', "");
                  replaceCourse(document.getElementById(str2).innerHTML);
                  //////
        $(str1).html(name);
        $(str1).attr({"name" : event.target.id});
      }
    }
    //$(str1).html(name);
    //$(str2).html(name);
  }
  },
  "mouseenter":(event) => {
    course_name=$(event.target).text();
    if(course_name.length != 0){
      var name=$(event.target).attr("id");
      if(name.length != 0){
        var department=name.split("/")[0];
        var num=name.split("/")[1];
        var course=name.split("/")[2];
        //alert(name)
        $.get({
          url: "../info",
          method: "GET",
          type: "get",
          data: {
            department: department,
            num: num,
            course: course
          },
          success: (res) => {
            $(event.target).html(res)
          }
        })
      }}
  },
  "mouseleave":(event) => {
    //alert("leave");  
    $(event.target).html(course_name);
  }
},"a[name='but']");

// Below are functions for the left sidebar menu.

// 1. 
var f= [1,1,1,1,1,1,1,1,1,1,1,1];

function changeButton(num)
	{
		var totalCollegeArray = document.getElementsByClassName("college");
		var leftCollegeArray = [];
		
		//Build array of colleges for the left sidebar 
		for( var i = 0; i < totalCollegeArray.length; i++)
		{
			if (totalCollegeArray[i].id.indexOf("e") == 0)
			{
				leftCollegeArray.push(totalCollegeArray[i]);
			}
		}
		
		for (var i = 0; i < f.length; i++)
		{ 
			if (num == i)
				f[i] = (f[i] + 1)%2;
		}

		if(leftCollegeArray[num].style.display.indexOf(""))
		{
			for(var i = 0; i < f.length; i++)
			{
				if (i != num)
				{
					document.getElementById("e"+i).style.display = "none";
					//$("#e"+i).transition(  'slide up',   '800ms');
				}
				if(i == num)
				{
					document.getElementById("college"+i).style.display="block";
					//$("#college"+i).transition(  'slide down',   '800ms');
				}
			}
		}
		else
		{
			for(var i=0; i<12; i++)
			{
				if (i != num)
				{
					//document.getElementById("e"+i).style.display = "block";
					$("#e"+i).transition(  'slide down',   '800ms');
				}
				if(i == num)
				{
					//document.getElementById("college"+i).style.display="none";
					$("#college"+i).transition(  'slide up',   '800ms');
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
		$('#e'+arr2[col][i]).transition('slide up','800ms');
		//document.getElementById('e'+arr2[col][i]).style.display = "none";
      }
      if(arr2[col][i] == arr2[col][dep])
      {
        $('#query_resulte'+arr2[col][i]).transition('slide down', '800ms');
		// document.getElementById("query_resulte"+arr2[col][i]).style.display="block";
      }
    }
  }
  else
  {
    for(var i=0; i < arr2[col].length; i++)
    {
      if ( arr2[col][i] != arr2[col][dep] )
      {
        $('#e'+arr2[col][i]).transition(  'slide down',   '800ms');
		//document.getElementById('e'+arr2[col][i]).style.display = "block";
      }
      if( arr2[col][i] == arr2[col][dep] )
      {
		$('#query_resulte'+arr2[col][i]).transition(  'slide up',   '800ms');
        //document.getElementById("query_resulte"+ arr2[col][i]).style.display="none";
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
<<<<<<< HEAD
      $(result_id).empty();
      $(result_id).append(res);
=======
        if(result_id!="#query_resulteA9")
            $(result_id).append(res);
    }
  })
  $.get({
    url:"../A9sp",
    method:"GET",
    type:"get",
    success:(res)=>{
        var result_id="#query_resulteA9";
        $(result_id).append(res);
>>>>>>> 5d9e04e8099ff339d614a2a39e9b43310e95da3f
    }
  })
}

function displaySearch1() 
{
	document.getElementById("searchBar1").style.display = "block";
	document.getElementById("searchBar2").style.display = "none";
	document.getElementById("searchBar3").style.display = "none";
}
function displaySearch2() 
{
	document.getElementById("searchBar1").style.display = "none";
	document.getElementById("searchBar2").style.display = "block";
	document.getElementById("searchBar3").style.display = "none";
}
function displaySearch3() 
{
	document.getElementById("searchBar1").style.display = "none";
	document.getElementById("searchBar2").style.display = "none";
	document.getElementById("searchBar3").style.display = "block";
}
function searchBar1()
{
	var input = document.getElementById("searchBar1");
	var filter = input.value;
	var totalCollegeArray = document.getElementsByClassName("college");
	var leftCollegeArray = [];
	
	// Creating array of Colleges for the left sidebar
	for( var i = 0; i < totalCollegeArray.length; i++)
	{
		if ( totalCollegeArray[i].id.indexOf("e") == 0)
		{
			leftCollegeArray.push(totalCollegeArray[i]);
		}
	}
	
	if (filter.length > 0) // If searchbar has text, only the college that matches the text
	{
		for ( var i = 0; i < leftCollegeArray.length; i++)
		{
			if( leftCollegeArray[i].innerHTML.indexOf(filter) > -1)
			{
				leftCollegeArray[i].style.display = "block";
			}
			else
			{
				leftCollegeArray[i].style.display = "none";
			}
		}
	}
	else // If searchbar has no text, display all colleges
	{
		for( var i = 0; i < leftCollegeArray.length ; i++)
		{
			leftCollegeArray[i].style.display = "block";
		}
	}
}

function searchBar2()
{
	var input = document.getElementById("searchBar2");
	var filter = input.value;
	var totalCollegeArray = document.getElementsByClassName("college");
	var totalDepartmentArray = document.getElementsByClassName("department");
	var leftDepartmentArray = [];
	var leftDepartmentDivArray = [];
	var leftCollegeArray = [];
	var departmentDivCounter = 0;
	
	//Build array of colleges for left sidebar
	for (var i = 0; i < totalCollegeArray.length; i++)
	{
		if (totalCollegeArray[i].id.indexOf("e") == 0)
		{
			leftCollegeArray.push(totalCollegeArray[i]);
		}
	}

	//Build array of departments and departmentDivs for left sidebar
	for (var i = 0; i < totalDepartmentArray.length ; i++)
	{
		if (totalDepartmentArray[i].id.indexOf("e") == 0)
		{
			leftDepartmentArray.push(totalDepartmentArray[i]);
		}
		else if( totalDepartmentArray[i].id.indexOf("college") == 0)
		{
			leftDepartmentDivArray.push(totalDepartmentArray[i]);
		}
		
	}
	
	
	if(filter.length > 0) //If the searchbar has text, only display the departments that match the text
	{
		for (var j = 0; j < leftCollegeArray.length; j++)
		{
			leftCollegeArray[j].style.display = "none";
		}
		
		for(var i = 0; i < leftDepartmentArray.length; i++)
		{   		
				if(leftDepartmentArray[i].innerHTML.indexOf(filter) > -1)
				{
					leftDepartmentArray[i].style.display = "block";
					
					// Display the Department Div if a particular department
					// matches the search string. 
					for ( var m = 0; m < arr2.length; m++)
					{
						for( var n = 0; n < arr2[m].length; n++)
						{
							if(leftDepartmentArray[i].id.indexOf(arr2[m][n]) > -1) 
							{
								leftDepartmentDivArray[m].style.display = "block";
								departmentDivCounter += 1;
							}
							else if(departmentDivCounter == 0)
							{
								leftDepartmentDivArray[m].style.display = "none";
							}
						}
					}
				}
				else 
				{	
					leftDepartmentArray[i].style.display = "none";
				}
		}
    }
	else //If the searchbar has no text, display all the departments.
	{
		for (var i = 0; i < leftCollegeArray.length; i++)
		{
			leftCollegeArray[i].style.display = "block";
		}
		for (var i = 0; i < leftDepartmentArray.length; i++)
		{
			leftDepartmentArray[i].style.display = "none";
		}
		for (var i = 0; i < leftDepartmentDivArray.length; i++)
		{
			leftDepartmentDivArray[i].style.display = "none";
		}
	}
}

function searchBar3()
{
	var input = document.getElementById("searchBar3");
	var filter = input.value;
	
	$.get({
    url: "../searchBar3",
    method: "GET",
    type: "get",
    data: { 
      course_number: filter;
    }, 
    success: (res) => {

      $("#container").append(res);
    }
  }) 
}
function searchBar()
{
	var input = document.getElementById("searchBar");
	var filter = input.value;
	var collegeArray = document.getElementsByClassName("college");
	var departmentArrayTotal = document.getElementsByClassName("department");
	var departmentArrayLeft= [];
	var departmentArrayDiv = [];
	var departmentDivCounter = 0;
	var a,b;
 // alert("DepartmentArrayTotal.Length = " + departmentArrayTotal.length);
 // alert("CollegeArray.Length = " + collegeArray.length);
 if( filter.length > 0)
 {	for (var i = 0; i < collegeArray.length ; i++)
	{	  
		collegeArray[i].style.display = "none";  
		//$('#e'+i).transition('slide up');
	}
 
	for (var i = 0; i < departmentArrayTotal.length ; i++)
	{	  
		departmentArrayTotal[i].style.display = "none"; 
	 
	}

	for(var i = 0; i < departmentArrayTotal.length  ; i++)
	{
		if (departmentArrayTotal[i].id.indexOf("e") == 0)
		{
			departmentArrayLeft.push(departmentArrayTotal[i]);
		}
		else if (departmentArrayTotal[i].id.indexOf("college") == 0)
		{
			departmentArrayDiv.push(departmentArrayTotal[i]);
		} 
	}
 // alert("DepartmentArrayLeft.Length =" + departmentArrayLeft.length);
 // alert("DepartmentArrayDiv.Length =" + departmentArrayDiv.length);
	for (var i = 0; i < departmentArrayLeft.length; i++)
	{
		if( i < collegeArray.length)
		{
			a = collegeArray[i];
			b = departmentArrayLeft[i];
	 
			if (a.innerHTML.indexOf(filter) > -1)
			{
				a.style.display = "block";
			}
			else if(a.innerHTML.indexOf(filter) == -1)
			{
				a.style.display = "none";
			}
		
			if (b.innerHTML.indexOf(filter) > -1)
			{
				b.style.display = "block";
				
				for ( var m = 0; m < arr2.length; m++)
				{
					for( var n = 0; n < arr2[m].length; n++)
					{
						if(b.id.indexOf(arr2[m][n]) > -1) 
						{
							departmentArrayDiv[m].style.display = "block";
							departmentDivCounter += 1;
						}
						else if(departmentDivCounter == 0)
						{
							departmentArrayDiv[m].style.display = "none";
						}
					
					}
				}
			}
			else
			{
				b.style.display = "none";
			}
		}
		else if (i >= collegeArray.length)
		{
			b = departmentArrayLeft[i];
		
			if (b.innerHTML.indexOf(filter) > -1)
			{
				b.style.display = "block";
				
				for ( var m = 0; m < arr2.length; m++)
				{
					for( var n = 0; n < arr2[m].length; n++)
					{
						if(b.id.indexOf(arr2[m][n]) > -1) 
						{	departmentArrayDiv[m].style.display = "block";
							departmentDivCounter += 1;
						}
						else if(departmentDivCounter == 0)
						{	
							departmentArrayDiv[m].style.display = "none";
						}
					}
				}
			}
			else
			{
				b.style.display = "none";
			}
		}
	//  alert(b.id);
  }
 }
 else
 {
	 for (var i = 0; i < collegeArray.length ; i++)
	 {
		 collegeArray[i].style.display = "block";
		 //alert("College "+i+" has been blocked");
	 } 
	 for (var i = 0; i < departmentArrayTotal.length; i++)
	 {
		 departmentArrayTotal[i].style.display = "none";
		 //alert("Department "+i+ " has been blocked");
	 }
 }
}

/*function restore()
{
	for (var j = 0; j < arr2.length ; j++)
	{
		$('#e'+j).transition('slide down');
	for (var i = 0; i < arr2[j].length; i++)
	{
		$('#e'+arr2[j][i]).transition('slide up');
		$('#query_resulte'+arr2[j][i]).transition('slide up');
		//$('#e'+i).transition('slide down');
		//$('#college'+i).transition("slide up");
		
		//document.getElementById("college"+i).style.display = "none";
		//document.getElementById("e"+i).style.display = "block";	
	}
  }	
  } */ 
var course_name;
$("#main").on("mouseover", "td[class='table-cell']", (event) => {
  course_name=$(event.target).text();
  if(course_name.length != 0){
    var name=$(event.target).attr("name");
    if(name.length != 0){
    var department=name.split("/")[0];
    var num=name.split("/")[1];
    var course=name.split("/")[2];
    //alert(name)
    $.get({
      url: "../info",
      method: "GET",
      type: "get",
      data: {
        department: department,
        num: num,
        course: course
      },
      success: (res) => {
        $(event.target).html(res)
      }
    })
  }}
});
$("#main").on("mouseout", "td[class='table-cell']", (event) => {
  $("#"+event.target.id).html(course_name);
});


