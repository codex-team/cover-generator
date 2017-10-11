class canvas {

    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext("2d");
        this.vHeadlineX = 30;
        this.vHeadlineY = 20;
        this.vHeadline = '';
        this.vHeadlineSize = 'bold 24px verdana, sans-serif';
        this.vHeadlineColor = 'pink';
        this.vTextX = 50;
        this.vTextY = 60;
        this.vText = '';
        this.vTextSize = 'bold 18px verdana, sans-serif';
        this.vTextColor = 'black';
    }

    size(w,h) {
        this.canvas.width = w;
        this.canvas.height = h;
    }
    text(txt) {
        this.vText = txt;
    }
    textSize(s) {
        this.ctx.font = s;
        this.vTextSize = s;
    }
    textPosition(x,y) {
        this.vTextX = x;
        this.vTextY = y;
    }
    textColor(c) {
        this.ctx.fillStyle = c;
        this.vTextColor = c;
    }
    textUpdate() {
        this.textSize(this.vTextSize);
        this.textColor(this.vTextColor);
        this.ctx.fillText(this.vText, this.vTextX, this.vTextY);
    }
    headline(txt) {
        this.vHeadline = txt;
    }
    headlineSize(s) {
        this.ctx.font = s;
        this.vHeadlineSize = s;
    }
    headlinePosition(x,y) {
        this.vHeadlineX = x;
        this.vHeadlineY = y;
    }
    headlineColor(c) {
        this.ctx.fillStyle = c;
        this.vHeadlineColor = c;
    }
    headlineUpdate() {
        this.headlineSize(this.vHeadlineSize);
        this.headlineColor(this.vHeadlineColor);
        this.ctx.fillText(this.vHeadline, this.vHeadlineX, this.vHeadlineY);
    }
    beforeEdit() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
    afterEdit() {
        this.headlineUpdate();
        this.textUpdate();
        document.getElementById('canvas').innerHTML = '';
        document.getElementById('canvas').appendChild(this.canvas);
        this.downloadImg();
    }
    edit(method, value) {
        this.beforeEdit();
        this[method](value);
        this.afterEdit();
    }
    edit(method, value1, value2) {
        this.beforeEdit();
        this[method](value1,value2);
        this.afterEdit();
    }
    downloadImg() {
        /* Example link
         * <a href="#" id="download" download="CanvasImage.png">Download</a>
         */
        document.getElementById('download').href = this.canvas.toDataURL("image/png");
        document.getElementById('download').addEventListener('click', download, false);
    }
}
