$("#A1").click(() => {
  $.get({
    url: "../test",
    method: "GET",
    type: "get",
    data: { 
          id:event.target.id 
    }, 
    success: (res) => {
      //$('#text').html(res);
      $('#query_result_1').append(res);
    }
  })
});
$("#A9").click(() => {
  $.get({
    url: "../test",
    method: "GET",
    type: "get",
    data: { 
          id:event.target.id 
    }, 
    success: (res) => {
      //$('#text').html(res);
      $('#query_result_2').append(res);
    }
  })
});
$("#query_result").on("click", "button[name='but']", (event) => { 
    $.get({ 
      url: "../test_1", 
      method: "GET",
      type: "get", 
      data: { 
          //id:this.id, 
          id:event.target.id 
      }, 
      success: (res) => {
        var name = res.split("+")[1];
        
        var day = time[1];
        var class_t1 = time[3];
        var class_t2 = time[5];
        var str = "";
        if(time.length!=2){
        switch(day)
        {
          case '1':
            str1=str.concat("#MON-", class_t1, "-seg");
            str2=str.concat("#MON-", class_t2, "-seg");
            break;
          case '2':
            str1=str.concat("#TUE-", class_t1, "-seg");
            str2=str.concat("#TUE-", class_t2, "-seg");
            break;
          case '3':
            str1=str.concat("#WED-", class_t1, "-seg");
            str2=str.concat("#WED-", class_t2, "-seg");
            break;
          case '4':
            str1=str.concat("#THU-", class_t1, "-seg");
            str2=str.concat("#THU-", class_t2, "-seg");
            break;
          case '5':
            str1=str.concat("#FRI-", class_t1, "-seg");
            str2=str.concat("#FRI-", class_t2, "-seg");
            break;
          case '6':
            str1=str.concat("#SAT-", class_t1, "-seg");
            str2=str.concat("#SAT-", class_t2, "-seg");
            break;
          case '7':
            str1=str.concat("#SUN-", class_t1, "-seg");
            str2=str.concat("#SUN-", class_t2, "-seg");
            break;
        }
        
        //document.getElementById(str).value=name;
        $(str1).html(name);
        $(str2).html(name);
        }
        $('#text').html(time.length); 
      } 
    })
});
