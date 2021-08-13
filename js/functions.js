$(function(){




    //ページが読み込まれた瞬間に時間を設定
    setTime();

    setInterval(function() {

        //一秒ごとに時間を設定
        setTime();
        
    }, 1000); //最後の数字は何秒ごとに更新させるか。

    //時間を更新する関数
    function setTime() {

        const now = new Date();

        //年
        const year = now.getFullYear();
        //月
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
           //+1をして、.toString()で数字を文字列に変換して、.padStart(2, '0')で2桁にしてる
        const monthlist = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const monthStr = monthlist[now.getMonth()];
    
        //日
        const date = now.getDate().toString().padStart(2, '0');
    
        //時
        const hour = now.getHours().toString().padStart(2, '0');
    
        //分
        const minute = now.getMinutes().toString().padStart(2, '0');
    
        //秒
        const second = now.getSeconds().toString().padStart(2, '0');
    
        //週
        const weeklist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const weekStr = weeklist[now.getDay()];
    
    
        //時間の置き換え
        $('#year').text(year);
        $('#month').text(month);
        $('#date').text(date);
        $('#hour').text(hour);
        $('#minute').text(minute);
        $('#second').text(second);
        $('#week').text(weekStr);

    }



});