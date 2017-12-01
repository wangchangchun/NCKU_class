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
    document.getElementById('fb_login').innerHTML = '<a class = "item" id = "fb_logout" onclick = "logout();">log out</a>';
    //alert(response.id);
  });
}
function logout(){
  FB.logout(function(response) {
    // Person is now logged out
    alert('已成功登出!');
    window.location.reload();
  });
}

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
$("#query_result1").on("click", "a[name='but']", (event) => { 
/*    $.get({ 
      url: "../test_1", 
      method: "GET",
      type: "get", 
      data: { 
          id:event.target.id
      }, 
      success: (res) => {
*/
        var res = event.target.text
        var name = res.split("[")[0];
        var time = res.split("[")[1];
        console.log(name) 
        var day = time[0];
        console.log(day) 
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
//      } 
//    })
});
$("#query_result2").on("click", "a[name='but']", (event) => { 
/*    $.get({ 
      url: "../test_1", 
      method: "GET",
      type: "get", 
      data: { 
          id:event.target.id
      }, 
      success: (res) => {
*/
        var res = event.target.text
        var name = res.split("[")[0];
        var time = res.split("[")[1];
        console.log(name) 
        var day = time[0];
        console.log(day) 
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
//      } 
//    })
});
$("#query_result3").on("click", "a[name='but']", (event) => { 
/*    $.get({ 
      url: "../test_1", 
      method: "GET",
      type: "get", 
      data: { 
          id:event.target.id
      }, 
      success: (res) => {
*/
        var res = event.target.text
        var name = res.split("[")[0];
        var time = res.split("[")[1];
        console.log(name) 
        var day = time[0];
        console.log(day) 
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
//      } 
//    })
});
$("#query_result4").on("click", "a[name='but']", (event) => { 
/*    $.get({ 
      url: "../test_1", 
      method: "GET",
      type: "get", 
      data: { 
          id:event.target.id
      }, 
      success: (res) => {
*/
        var res = event.target.text
        var name = res.split("[")[0];
        var time = res.split("[")[1];
        console.log(name) 
        var day = time[0];
        console.log(day) 
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
//      } 
//    })
});
$("#main").on("click", "td[class='table-cell']", (event) => { 
  var day=event.target.id.split("-")[0]
  var time=event.target.id.split("-")[1]
  $.get({
    url: "../test",
    method: "GET",
    type: "get",
    data: { 
      day: day,
      time: time
    }, 
    success: (res) => {
      $('').append(res);
    }
  })
});
