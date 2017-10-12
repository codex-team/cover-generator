
class Canvas {

    constructor() {
        this.svg = document.getElementById('svg');
        this.background = document.getElementById('svg-background');
    }

    setBackground(c) {
        this.background.setAttribute('fill', c);
    }
    
    /**
     * Изменение размера холста
     * @param h height
     * @param w width
     */
    setCanvasSize(h,w) {
        this.svg.setAttribute('height', h);
        this.background.setAttribute('height', h);
        this.svg.setAttribute('width', w);
        this.background.setAttribute('width', w);
    }
    
    /**
     * Создает хидлайн, добавляет его в холст
     * @param x position
     * @param y position
     */
    createHeadline(x,y) {
        this.headline = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        this.setHeadlinePosition(x, y);
        this.svg.appendChild(this.headline);
    }
    
    setHeadline(txt) {
        this.headline.textContent = txt;
    }
    
    setHeadlinePosition(x,y) {
        this.headline.setAttribute('x', x);
        this.headline.setAttribute('y', y);
    }
    
    setHeadlineColor(c) {
        this.headline.style.fill = c;
    }
    
    setHeadlineSize(s) {
        this.headline.style.fontSize = s;
    }
    
    /**
     * Создает основной текст, добавляет его в холст
     * @param x position
     * @param y position
     */
    createText(x,y) {
        this.text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        this.setTextPosition(x, y);
        this.svg.appendChild(this.text);
    }
    
    setText(txt) {
        this.text.textContent = txt;
    }
    
    setTextPosition(x,y) {
        this.text.setAttribute('x', x);
        this.text.setAttribute('y', y);
    }
    
    setTextColor(c) {
        this.text.style.fill = c;
    }
    
    setTextSize(s) {
        this.text.style.fontSize = s;
    } 
}
