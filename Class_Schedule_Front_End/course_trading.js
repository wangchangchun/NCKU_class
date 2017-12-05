var select_course;
var fb_id;
$("#button1").click(() => {
  FB.api('/me', function(response) {
    console.log('Successful login for: ' + response.name);
    console.log(JSON.stringify(response));
    document.getElementById('status').innerHTML =
      'Thanks for logging in, ' + response.name + '!';
//    document.getElementById('fb_login').innerHTML = '<a class = "item" id = "fb_logout" onclick = "logout();">log out</a>';
//    alert(response.id);
    fb_id = response.id;

  });
  $.get({
    url: "../self",
    method: "GET",
    type: "get",
    data: { 
      id:fb_id
    }, 
    success: (res) => {
      //$('#text').html(res);
      $('#my_course').append(res);
    }
  })
});
$("#button2").click(() => {
  $.get({
    url: "../trading",
    method: "GET",
    type: "get",
    data: { 
      name: select_course
    }, 
    success: (res) => {
      $('#text').html(res);
    }
  })
});
$("#my_course").on("click", "a[name='but']", (event) => { 
    select_course=event.target.text
    $('#text').html(select_course);
});
