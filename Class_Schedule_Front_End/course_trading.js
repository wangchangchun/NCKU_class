$("#button1").click(() => {
  $.get({
    url: "../self",
    method: "GET",
    type: "get",
    data: { 
      id:"1521916694523752"
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
var select_course=""
$("#my_course").on("click", "a[name='but']", (event) => { 
    select_course=event.target.text
});
