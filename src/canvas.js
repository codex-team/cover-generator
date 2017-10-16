class Canvas {

    /**
     * Конструтор
     * @param id - id холста на странице
     */
    constructor(id) {
        this.svg = document.getElementById(id);
        this.background = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        this.background.setAttribute('height', this.svg.getAttribute('height'));
        this.background.setAttribute('width', this.svg.getAttribute('width'));
        this.background.setAttribute('fill', 'white');
        this.svg.appendChild(this.background);
        //this.background = this.svg.querySelector('#svg-background');
    }

    /**
     * Устанавливает цвет фона холста
     * @param c - цвет
     */
    setBackground(c) {
        this.background.setAttribute('fill', c);
    }

    /**
     * Изменение размера холста
     * @param h - height
     * @param w - width
     */
    setCanvasSize(h,w) {
        this.svg.setAttribute('height', h);
        this.background.setAttribute('height', h);
        this.svg.setAttribute('width', w);
        this.background.setAttribute('width', w);
    }

    /**
     * Создание текстового элемента
     * @param id - id, который будет присвоен вновь созданному элементу
     * @param x - x
     * @param y - y
     * @param h - высота строки
     * @param w - ширина строки
     */
    createText(id,x,y,h,w) {
        this.text = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
        var text = document.createElement('div');
        text.setAttribute('contenteditable', 'true');
        this.text.appendChild(text);
        this.text.setAttribute('id', id);
        this.text.setAttribute('height', h);
        this.text.setAttribute('width', w);
        this.svg.appendChild(this.text);
        this.setTextPosition(id, x, y);
    }

    /**
     * Устанавливает позицию текста
     * @param elem - изменяемый DOM-элемент
     * @param x
     * @param y
     */
    setTextPosition(elem,x,y) {
        elem.setAttribute('x', x);
        elem.setAttribute('y', y);
    }

    /**
     * Устанавливает цвет текста
     * @param elem - изменяемый DOM-элемент
     * @param c - цвет
     */
    setTextColor(elem,c) {
        elem.style.color = c;
    }
    
    /**
     * Изменяет размер текста
     * @param id - id изменяемого элемента
     * @param s - Имя класса
     */
    setTextSize(elem,s) {
        elem.classList.remove(this.textSizeClass);
        this.textSizeClass = s;
        elem.classList.add(s);
    }

    /**
     * Задает класс элементу
     * @param elem - изменяемый DOM-элемент
     * @param style - класс
     */
    setCSS(elem, style) {
        elem.classList.add(style);
    }

    /**
     * Импорт изображение в png.
     * @param id - id ссылки, которой будет задано изображение
     */
    importSVG(id) {
        var svgData = new XMLSerializer().serializeToString(this.svg);

        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');

        var img = document.createElement('img');
        img.setAttribute('src', 'data:image/svg+xml;base64,' + btoa( svgData ));

        img.onload = function() {
            ctx.drawImage( img, 0, 0 );
            var dt = canvas.toDataURL('image/png');
            var a = document.getElementById(id);
            a.download = 'Image.png';
            dt = dt.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');
            dt = dt.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Image.png');
            a.href = dt;
        };
    }
}
