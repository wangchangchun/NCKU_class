
function statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    testAPI();
  } else {
    // The person is not logged into your app or we are unable to tell.
    document.getElementById('status').innerHTML = 'Please log ' +
      'into this app.';
  }
}
// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}
window.fbAsyncInit = function() {
  FB.init({
    appId      : '1071353126339792',
    //appId      : '257340648129250',
    cookie     : true,  // enable cookies to allow the server to access 
    // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.11', // use graph api version 2.8
    oauth:true
  });
  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
};
// Load the SDK asynchronously
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI() {
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
    console.log('Successful login for: ' + response.name);
    console.log(JSON.stringify(response));
    document.getElementById('status').innerHTML =
      'Thanks for logging in, ' + response.name + '!';
    //    alert(response.id);
    //    file_id = response.id;
    fb_id = response.id;
    fb_name = response.name; 
    $.get({
      url: "../read",
      method:"GET",
      type:"get",
      data:{
        id: response.id,
        name:response.name
      },
      success:(res)=>{
        //alert(res);
        var sp = res.split(" ");
        for (var i=0;i<sp.length;i=i+2){
          var class_id =sp[i].substr(0,3)+"-"+sp[i][3];
          //alert(class_id+" "+sp[i+1]);
          document.getElementById(class_id).innerHTML=sp[i+1];
        }
      }

    })

  $.get({
    url: "../self",
    method: "GET",
    type: "get",
    data: { 
      id:fb_id
    }, 
    success: (res) => {
      $('#having_class').append(res);
    }
  })
  })
}
$("#fb_logout").click(()=>{
  FB.logout(function(response) {
      // Person is now logged out
          alert('已成功登出!');
          document.location.href="https://luffy.ee.ncku.edu.tw:1235/index.html";
         //document.location.href="https://luffy.ee.ncku.edu.tw:1211/index.html";
     });
});
function getElementsByClass( searchClass, domNode, tagName) {
  if (domNode == null) domNode = document;
  if (tagName == null) tagName = '*';
  var el = new Array();
  var tags = domNode.getElementsByTagName(tagName);
  var tcl = " "+searchClass+" ";
  for(i=0,j=0; i<tags.length; i++) {
    var test = " " + tags[i].className + " ";
    if (test.indexOf(tcl) != -1)
      el[j++] = tags[i];
  }
  return el;
}

var fb_id="";
var have_course;
$("#having_class").on("click", "a[name='but']", (event) => { 
  want_course_list="";
  have_course=event.target.text+" "+event.target.id;
  $.get({
    url: "../trade_course_check",
    method: "GET",
    type: "get",
    data: { 
      have: have_course,
      id: fb_id
    }, 
    success: (res) => {
      if(res == "course already have")
        alert("You have already select this course!")
      else
        alert("select:\n"+have_course)
    }
  })
});
//var want_course_list="";
$("#changeGoal").on("click", "a[name='but']", (event) => { 
  //alert("select:"+event.target.text)
  //want_course_list=want_course_list+event.target.text+"/"+event.target.id+"\n"
  //alert("select:"+want_course_list)
  var str="<a href = \"#\" class = \"ui teal button chosenItem\" name = \"chosen\">"+ event.target.text+"/"+event.target.id+"</a>"
  $("#chosenClass").append(str);
      
});
$("#chosenClass").on("click","a[name='chosen']",(event)=>{
  //  alert("click"+event.target.style.visibility)
    event.target.remove() ;
})
$("#submit").click(() => {
  var want_course_list="";
  var getChosen = document.getElementsByName("chosen")
  for(var i=0;i<getChosen.length;i++)
  {
    want_course_list = want_course_list+getChosen[i].innerHTML+"\n";
  }
    alert(want_course_list);
  if(have_course == null){
    alert("Please select your class.")
  }
  else if(want_course_list==""){
    alert("Please select course you want to exchange.")
  }
  else{
    $.get({
      url: "../trading",
      method: "GET",
      type: "get",
      data: { 
        have: have_course,
        want: want_course_list,
        id: fb_id,
        name:fb_name
      }, 
      success: (res) => {
        alert(res)
      }
    })
  }
});
        var arr=[
            ['A2','A3','A4','A5','A6','AA','AH'],
            ['AN','C0'],
            ['A1' ,'A9' ,'AG' ,'A7'],
            ['B0','B1' ,'B2' ,'B3' ,'B5','K1','K2','K3','K5','K4','K8','K7'],
            ['C1' ,'C2' ,'C3' ,'C4' ,'CZ','F8','L1','L2','L3','L4','LZ','L7','LA','VF'],
            ['E0','E1' ,'E3' ,'E4' ,'E5' ,'E6' ,'E8' ,'E9' ,'F0' ,'F1','F4' ,'F5' ,'F6' ,'F9','N1','N3','N4','N5','N6','N8','NC','N9','P1','P4','P5','P6','P8','N0','NA','NB','P0'],
            ['H1' ,'H2' ,'H3' ,'H4' ,'H5','R1','R2','R3','R7','R4','R5','R9','R0','R6','R8','RA','RB','RD','RZ'],
            ['I2' ,'I3' ,'I5' ,'I6' ,'I7' ,'I8','T2','T3','T6','T7','S0','S1','S2','S3','S4','S5','S6','S7','SC','S8','S9','SA','T1','T4','SB','T8','T9','TA','TC'],
            ['D2' ,'D4' ,'D5' ,'D8','U2','U1','U5','U7','U3'],
            ['E2' ,'F7','N2','Q1','Q3','Q6','Q7','ND','P7','Q5','P9','V6','V8','V9','VA','VB','VC','VD','VE','VG','VH','VK','VM','VN','V0'],
            ['E7' ,'F2' ,'F3','N7','P2','P3','PA','PB'],
            ['C5' ,'C6','L5','L6','Z2','Z0','Z3','Z5']
        ]
        var a = [0,0,0,0,0,0,0,0,0,0,0,0];
        var b=[
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0],
            [0 ,0 ,0 ,0],
            [0 ,0 ,0 ,0,0,0,0,0,0,0,0,0],
            [0 ,0 ,0 ,0 ,0,0,0,0,0,0,0,0,0,0],
            [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0 ,0 ,0 ,0 ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0 ,0 ,0 ,0 ,0 ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0 ,0 ,0 ,0,0,0,0,0,0],
            [0 ,0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0 ,0 ,0,0,0,0,0,0],
            [0 ,0,0,0,0,0,0,0]
        ]
        var bLeng=[7,2,4,12,14,31,19,29,9,25,8,8];

        function changeButton(num){
            for(i=0;i<bLeng[num];i++){
                b[num][i]=0;
                document.getElementById(arr[num][i]).style.display="block";
                document.getElementById("query_resulte"+arr[num][i]).style.display="none";
            }
            a[num]=(a[num]+1)%2;
            if(a[num]){
                document.getElementById("showGoal").style.height="100%";
                for(i=0;i<12;i++){
                    if (i != num){
                        $( "#e"+i).transition('slide up','0.6s');
                    }
                    else{
                        $( "#college"+i).transition('slide up','0.6s');
                    }
                }
            }
            else{
                document.getElementById("showGoal").style.height="50%";
                for(i=0;i<12;i++){
                    if(i!=num){
                        $( "#e"+i).transition('slide up','0.6s');
                    }
                    else{
                        $( "#college"+i).transition('slide up','0.6s');
                    }
                }
            }
        }
    function changeButton2(num1,num2){
        var sendi,sendj;
        b[num1][num2]=(b[num1][num2]+1)%2;
        if(b[num1][num2]){
            for(i=0;i<bLeng[num1];i++){
                if(i!=num2){
                    document.getElementById(arr[num1][i]).style.display ="none";
                }
                else{
                    document.getElementById(arr[num1][i]).style.display="block";
                    document.getElementById("query_resulte"+arr[num1][i]).style.display="block";
                }
            }
            sendi=num1;
            sendj=num2;
        }
        else{
            for(i=0;i<bLeng[num1];i++){
                if(i!=num2){
                    document.getElementById(arr[num1][i]).style.display ="block";
                }
                else{
                    document.getElementById(arr[num1][i]).style.display="block";
                    document.getElementById("query_resulte"+arr[num1][i]).style.display="none";
                }
            }
        }
        $.get({
              url: "../test",
              method: "GET",
              type: "get",
              data: {
                    id:arr[num1][num2]
              },
              success: (res) => {
                    var result_id="#query_resulte".concat(arr[num1][num2])
                    $(result_id).append(res);
              }
        })
        
    }
    
    $(document).ready(function() {
      $.ajax({
            method: "get",
            url: "./showBoard",
            cache: false,
            success: function(back) {
            $('#waitList').html(back)
            }
        })
        $('.ui.dropdown').dropdown({
            onChange: function (value, text, $selectedItem) {
             console.log(value);
            },
            forceSelection: false, 
            selectOnKeydown: false, 
            showOnFocus: false,
            on: "hover" 
        });
    })
