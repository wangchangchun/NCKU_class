var count;
		window.onload = function(){
			var txt="選課，一直是成大學生每學期最困擾的事之一，<br>選課前除了必須搜尋課程大綱以及過去學長姐們的修課心得，<br>還必須將想選修的課程製作成課表，仔細斟酌每堂課的時間該如何排列，<br>，若是有想修的課沒有選到，還必須尋找其他想要換課的同學，<br>以上的種種都必須造訪數個分別的網站才能蒐集到完整的情報資料，<br>造成成大學生不少困擾，為了解決一直以來成大選課時，<br>總是必須到多個網站查詢各種資料的問題，我們決定製作一個將所有資訊統整起來的網站，<br>讓成大學生選課時不再需要將眾多分頁塞進瀏覽器<br>"
			count = 0;
			clearTimeout(timerID);
			timerID = setTimeout(function(){
				document.getElementById("space").innerHTML = txt.substr(0,count++);
				if(count>txt.length)
				{return;}
			timerID = setTimeout(arguments.callee,75);
			},100);
		}
		count = 0;
		timerID = null;