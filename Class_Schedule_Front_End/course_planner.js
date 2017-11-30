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
