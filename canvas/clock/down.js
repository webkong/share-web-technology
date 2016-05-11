/**
 * Created by Denny on 15/5/19.
 */
var window_width = 1024;
var window_height = 500;
var R = 6;
var margin_top = 50;
var margin_left = 240;
//console.log('endTime:'+endTime.getTime());
var currentShowTimeSecond = 0;
var balls = [];
var colors = ["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"];

var endTime = new Date();
var times = 3600*1000;
endTime.setTime(endTime.getTime()+times);
window.onload = function(){
    window_width = document.body.clientWidth;
    window_height = document.body.clientHeight;
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = window_width;
    canvas.height = window_height;
    currentShowTimeSecond = getCurrentShowTimeSeconds();
    //console.log(currentShowTimeSecond);
    var timer = setInterval(function(){
        render(ctx);
        update();
    },50);
    //render(ctx);
}
function getCurrentShowTimeSeconds(){
    var curTime = new Date();
    //console.log('curTime:'+curTime);
    var ret = endTime.getTime() - curTime.getTime();
    ret = Math.round(ret/1000);
    return ret>=0 ? ret : 0;
}
function update(){
    var nextShowTimeSeconds = getCurrentShowTimeSeconds();

    var nextHour = parseInt(nextShowTimeSeconds/3600);
    var nextMinutes = parseInt((nextShowTimeSeconds-nextHour*3600)/60);
    var nextSeconds = nextShowTimeSeconds%60;

    var curHour = parseInt(currentShowTimeSecond/3600);
    var curMinutes = parseInt((currentShowTimeSecond-curHour*3600)/60);
    var curSeconds = currentShowTimeSecond%60;

    //分别写小时，分钟，秒钟的 个位和十位数字
    var nHs =parseInt(nextHour/10);
    var nHg =parseInt(nextHour%10);
    var nMs =parseInt(nextMinutes/10);
    var nMg =parseInt(nextMinutes%10);
    var nSs =parseInt(nextSeconds/10);
    var nSg =parseInt(nextSeconds%10);

    var cHs =parseInt(curHour/10);
    var cHg =parseInt(curHour%10);
    var cMs =parseInt(curMinutes/10);
    var cMg =parseInt(curMinutes%10);
    var cSs =parseInt(curSeconds/10);
    var cSg =parseInt(curSeconds%10);

    if(nextSeconds != curSeconds){

        if(nHs != cHs){
            addBalls(margin_left,margin_top,nHs);
        }
        if(nHg != cHg){
            addBalls(margin_left+15*(R+1),margin_top,nHg);
        }

        if(nMs != cMs){
            addBalls(margin_left+39*(R+1),margin_top,nMs);
        }
        if(nMg != cMg){
            addBalls(margin_left+54*(R+1),margin_top,nMg);
        }

        if(nSs != cSs){
            addBalls(margin_left+78*(R+1),margin_top,nSs);
        }
        if(nSg != cSg){
            addBalls(margin_left+93*(R+1),margin_top,nSg);
        }

        currentShowTimeSecond =nextShowTimeSeconds;


    }
    console.log(balls.length);

    updateBall();
}

function updateBall(){
    for(var i=0;i<= balls.length;i++){
        balls[i].x += balls[i].vx;
        balls[i].y += balls[i].vy;
        balls[i].vy += balls[i].g;

        if(balls[i].y >= window_height-2*R){
            balls[i].y = window_height - R;
            balls[i].vy = -balls[i].vy*0.45;
        }

    }

    var ctn = 0;
    for(var i=0 ;i< balls.length; i++){
        if(balls[i].x+2*R >0 && balls[i].x-2*R < window_width)
            balls[ctn++] = balls[i];
    }

    while(balls.length>=ctn){
        balls.pop();
        console.log(ctn);
    }


}


function addBalls(x,y,num){
    for(var i=0;i<digit[num].length;i++){
        for(var j=0;j<digit[num][i].length;j++){
            if(digit[num][i][j] == 1){

                var aBall= {
                    x : x + (2*R*j) + R + 1,
                    y : y + (2*R*i) + R + 1,
                    g:4.5*Math.random(),
                    vx:Math.pow(-1, Math.ceil(Math.random()*100))*4,//x轴速度
                    vy:-5,
                    color:colors[Math.floor(Math.random()*colors.length)]
                };
                balls.push(aBall);


            }

        }
    }
}




function render(context){
    context.clearRect(0,0,window_width,window_height);
    var hour = parseInt(currentShowTimeSecond/3600);
    var minutes = parseInt((currentShowTimeSecond-hour*3600)/60);
    var seconds = currentShowTimeSecond%60;
    //console.log(hour);
    //console.log(minutes);
    //console.log(seconds);
   // renderDigit(margin_left-15*(R+1),margin_top,parseInt(hour/100),context);
    renderDigit(margin_left,margin_top,parseInt(hour/10),context);
    renderDigit(margin_left+15*(R+1),margin_top,parseInt(hour%10),context);
    renderDigit(margin_left+30*(R+1),margin_top,10,context);
    renderDigit(margin_left+39*(R+1),margin_top,parseInt(minutes/10),context);
    renderDigit(margin_left+54*(R+1),margin_top,parseInt(minutes%10),context);
    renderDigit(margin_left+69*(R+1),margin_top,10,context);
    renderDigit(margin_left+78*(R+1),margin_top,parseInt(seconds/10),context);
    renderDigit(margin_left+93*(R+1),margin_top,parseInt(seconds%10),context);

    //draw balls
    for(var i=0; i<balls.length; i++){

        context.fillStyle = balls[i].color;
        context.beginPath();
        context.arc(balls[i].x,balls[i].y, R,0,2*Math.PI,true);
        context.closePath();

        context.fill();

    }

}

function renderDigit(x,y,num,context){
    context.fillStyle = 'rgb(0,102,153)';
    for(var i=0;i<digit[num].length;i++){
        for(var j=0;j<digit[num][i].length;j++){
            if(digit[num][i][j] == 1){

                var dotX = x+(2*R*j)+R+1;
                var dotY = y+(2*R*i)+R+1;
                context.beginPath();
                context.arc(dotX,dotY,R,0,2*Math.PI,false);
                context.fill();
                context.closePath();
            }

        }
    }

}