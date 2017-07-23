var stage = new createjs.Stage("gameView");
createjs.Ticker.setFPS(30);//帧
createjs.Ticker.addEventListener("tick",stage)

var gameView = new createjs.Container();
gameView.x=30;
gameView.y=30;
stage.addChild(gameView);

var circleArr=[[],[],[],[],[],[],[],[],[],];
var currentCat;
function circleClick(e) {
    if (e.target.getCircleType() != 3) {
        e.target.setCircleType(2);
    }
    if(currentCat.indexX==0||currentCat.indexX==8||currentCat.indexY==0||currentCat.indexY==8){
        alert("游戏结束");
    }
    var leftCircle=circleArr[currentCat.indexX-1][currentCat.indexY];
    var rightCircle=circleArr[currentCat.indexX+1][currentCat.indexY];
    var lefttopCircle=circleArr[currentCat.indexX-1][currentCat.indexY-1];
    var righttopCircle=circleArr[currentCat.indexX][currentCat.indexY-1];
    var leftbottomCircle=circleArr[currentCat.indexX-1][currentCat.indexY+1];
    var rightbottomCircle=circleArr[currentCat.indexX][currentCat.indexY+1];
    if(leftCircle.getCircleType()==1){
        leftCircle.setCircleType(3);
        currentCat.setCircleType(1);
        currentCat=leftCircle;
    }else if(rightCircle.getCircleType()==1){
        rightCircle.setCircleType(3);
        currentCat.setCircleType(1);
        currentCat=rightCircle;
    }else if(lefttopCircle.getCircleType()==1){
        lefttopCircle.setCircleType(3);
        currentCat.setCircleType(1);
        currentCat=lefttopCircle;
    }else if(righttopCircle.getCircleType()==1){
        righttopCircle.setCircleType(3);
        currentCat.setCircleType(1);
        currentCat=righttopCircle;
    }else if(leftbottomCircle.getCircleType()==1){
       leftbottomCircle.setCircleType(3);
        currentCat.setCircleType(1);
        currentCat=leftbottomCircle;
    }else if(rightbottomCircle.getCircleType()==1){
        rightbottomCircle.setCircleType(3);
        currentCat.setCircleType(1);
        currentCat=rightbottomCircle;
    }else{
        alert("游戏结束");
    }
}

function addCircles() {
    for(var indexY=0;indexY<9;indexY++){
        for(var indexX=0;indexX<9;indexX++){
            var c=new circle();
            gameView.addChild(c);
            circleArr[indexX][indexY]=c;
            c.indexX=indexX;
            c.indexY=indexY;
            c.x=indexY%2?indexX*55+25:indexX*55;
            c.y=indexY*55;

            if(indexX==4&&indexY==4){
                c.setCircleType(3);
                currentCat=c;
            }
            c.addEventListener("click",circleClick);
        }
    }
}
addCircles();

