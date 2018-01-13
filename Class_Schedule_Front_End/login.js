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
//    appId      : '257340648129250',
    cookie     : true,  // enable cookies to allow the server to access 
    // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.11' // use graph api version 2.8
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
          var info = sp[i+1].split(":");
          document.getElementById(class_id).innerHTML=info[0];
          $("#"+class_id).attr({"name" : info[1] });
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
      //alert(res)
      $('#myClass').append(res);
    }
  })


  });
}
$("#fb_logout").click(()=>{

  FB.logout(function(response) {
    // Person is now logged out
    alert('已成功登出!');
    document.location.href="https://luffy.ee.ncku.edu.tw:1211/index.html";
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

$("#save_btn").click(() =>{
  var class_time = "";
  var class_name="";
  var class_no = "";
  var class_arr = getElementsByClass('table-cell');
  for (var i=0;i<class_arr.length;i++)
  {
    if(class_arr[i].innerHTML.length != 0&& class_arr[i].id !=""){
      class_id = class_arr[i].id.split("-");
      class_time = class_time.concat(class_id[0],class_id[1],"\n");
      class_name = class_name.concat(class_arr[i].innerHTML,"\n");
      //     alert("frontend "+class_time+" "+class_name);
      class_no = class_no.concat(class_arr[i].getAttribute("name"),"\n");
      alert(class_no);

    }
  }
  FB.api('/me', function(response) {
    console.log(JSON.stringify(response));
    var id = response.id;
    var user_name = response.name;
    $.get({
      url:"../save",
      method: "GET",
      type:"get",
      data:{
        id : id,
        user_name:user_name,
        class_time: class_time,
        class_name: class_name,
        class_no: class_no

      },
      success: (res) =>{
      }
    })
  });

});

$("#clear_btn").click(() => {
  FB.api('/me',function(response){
    console.log(JSON.stringify(response));
    var id = response.id;
    var name = response.name;
    var class_arr = getElementsByClass('table-cell');
    for (var i=0;i<class_arr.length;i++){
      if(class_arr[i].innerHTML.length != 0&& class_arr[i].id !=""){
        class_arr[i].innerHTML = "";

      }
    }
    $.get({
      url:"../clear",
      method:"GET",
      type:"get",
      data:{
        id: id,
        name:name
      },
      success: (res) =>{
        alert("clear");     
        //windows.location.reload();
      }
    })
  });

});
var fb_id="";
var have_course;
$("#myClass").on("click", "a[name='but']", (event) => { 
  want_course_list="";
  have_course=event.target.text
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
var want_course_list="";
var n=0;
$("#changeGoal").on("click", "a[name='but']", (event) => { 
  //alert("select:"+event.target.text)
  if(n==5){
    alert("You have already select five course.")
  }
  else{
    want_course_list=want_course_list+event.target.text+"\n"
      n=n+1;
    alert("select:"+want_course_list)
  }
});
$("#submit").click(() => {
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
        id: fb_id
      }, 
      success: (res) => {
        alert(res)
      }
    })
  }
});
