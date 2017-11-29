$("#A1").click(() => {                                                                                                            
    $.post({
      url: "../test",
      method: "POST",
      type: "post",
      success: (res) => {
        //$('#text').html(res);
        $('#query_result').append(res);
      }
    })
});
