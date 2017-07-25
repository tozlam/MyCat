
function  circle() {
    createjs.Shape.call(this);
    var image=new Image();
    var mtx=new createjs.Matrix2D();
    mtx.translate(-25,-25);
    mtx.scale(0.7,0.7);
    image.src="p1.png";
    var selectImage=new Image();
    var selectMtx=new createjs.Matrix2D();
    selectMtx.translate(-36,-35);
    selectMtx.scale(0.1,0.1);
    selectImage.src="p3.png";
    this.setCircleType=function (type) {
        this._circleType=type;
        switch(type){
            case circle.TYPE_UNSELECTED:
                this.setColor("#cccccc");
                break;
            case circle.TYPE_SELECTED:
                this.setColor("#f66800");
                this.graphics.beginBitmapFill(selectImage,"no-repeat",selectMtx);
                this.graphics.drawCircle(0,0,25);
                this.graphics.endFill();
                break;
            case circle.TYPE_CAT:
                this.setColor("#515151");
                this.graphics.beginBitmapFill(image,"no-repeat",mtx);
                this.graphics.drawCircle(0,0,26);
                this.graphics.endFill();
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