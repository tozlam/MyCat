
function  circle() {
    createjs.Shape.call(this);
    this.setCircleType=function (type) {
        this._circleType=type;
        switch(type){
            case circle.TYPE_UNSELECTED:
                this.setColor("#cccccc");
                break;
            case circle.TYPE_SELECTED:
                this.setColor("#ff6600");
                break;
            case circle.TYPE_CAT:
                this.setColor("#0000ff");
                break;
        }
    };
    this.setColor=function (colorString) {
        this.graphics.beginFill(colorString);
        this.graphics.drawCircle(0,0,25);
        this.graphics.endFill();
    };
    this.getCircleType=function () {
        return this._circleType;
    };
    this.setCircleType(1);
}
circle.prototype=new createjs.Shape();
circle.TYPE_UNSELECTED=1;
circle.TYPE_SELECTED=2;
circle.TYPE_CAT=3;