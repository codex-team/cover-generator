class Canvas {

    /**
     * Конструтор
     * @param id - id холста на странице
     */
    constructor(id) {
        this.svg = document.getElementById(id);
        this.background = this.svg.querySelector('#svg-background');
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
     * Создает заголовок, добавляет его в холст
     * @param x - x position
     * @param y - y position
     */
    createHeadline(x,y) {
        this.headline = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
        var text = document.createElement('div');
        text.setAttribute('contenteditable', 'true');
        this.headline.appendChild(text);
        this.headline.setAttribute('height', '20');
        this.headline.setAttribute('width', '100');
        this.setHeadlinePosition(x, y);
        this.svg.appendChild(this.headline);
    }

    /**
     * Устанавливает значение заголовка
     * @param txt - текст заголовка
     */
    setHeadline(txt) {
        this.headline.querySelector('div').textContent = txt;
    }

    /**
     * Устанавливает позицию заголовка
     * @param x
     * @param y
     */
    setHeadlinePosition(x,y) {
        this.headline.setAttribute('x', x);
        this.headline.setAttribute('y', y);
    }

    /**
     * Устанавливает цвет заголовка
     * @param c - цвет
     */
    setHeadlineColor(c) {
        this.headline.style.color = c;
    }

    /**
     * Изменяет размер заголовка
     * @param s - Имя класса
     */
    setHeadlineSize(s) {
        this.headline.classList.add(s);
    }

    /**
     * Создает основной текст, добавляет его в холст
     * @param x position
     * @param y position
     */
    createText(x,y) {
        this.text = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
        var text = document.createElement('div');
        text.setAttribute('contenteditable', 'true');
        this.text.appendChild(text);
        this.text.setAttribute('height', '20');
        this.text.setAttribute('width', '100');
        this.setTextPosition(x, y);
        this.svg.appendChild(this.text);
    }

    /**
     * Устанавливает значение текста
     * @param txt - текст
     */
    setText(txt) {
        this.text.querySelector('div').textContent = txt;
    }

    /**
     * Устанавливает позицию текста
     * @param x
     * @param y
     */
    setTextPosition(x,y) {
        this.text.setAttribute('x', x);
        this.text.setAttribute('y', y);
    }

    /**
     * Устанавливает цвет текста
     * @param c - цвет
     */
    setTextColor(c) {
        this.text.style.color = c;
    }
    /**
     * Изменяет размер текста
     * @param s - Имя класса
     */
    setTextSize(s) {
        this.text.classList.add(s);
    }
}
