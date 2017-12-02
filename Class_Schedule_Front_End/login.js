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
//    alert(response.id);
//    file_id = response.id;

  });
}
function logout(){
  FB.logout(function(response) {
    // Person is now logged out
    alert('已成功登出!');
    window.location.reload();
  });
}

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
    var wdata = "";
    var class_arr = getElementsByClass('table-cell');
    for (var i=0;i<class_arr.length;i++)
    {
        if(class_arr[i].innerHTML.length != 0&& class_arr[i].id !="")
          wdata=wdata.concat(class_arr[i].id," ",class_arr[i].innerHTML,"\n");
    }
    
    FB.api('/me', function(response) {
    console.log(JSON.stringify(response));
    var file_id = response.id;
    alert(file_id);
    $.get({
        url:"../save",
        method: "GET",
        type:"get",
        data:{
            filename : file_id+".txt",
            wdata: wdata

        },
        success: (res) =>{
            $('#status').append(res);
        }
    })
    });
});
