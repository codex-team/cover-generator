//elem - то, к чему привязываем
//canvas - полотно
//style - стили и указания для объекта
//style.padding - отступ между elem и toolbar 

function Toolbar(elem, canvas, style)
{
    function changeToolbarPosition()
    {
        console.log(controllable.getBoundingClientRect().left);console.log(canvas.getBoundingClientRect().left);
        toolbar.style.left = controllable.getBoundingClientRect().left - canvas.getBoundingClientRect().left + (controllable.clientWidth - toolbar.clientWidth)/2 + "px";
        toolbar.style.top = controllable.getBoundingClientRect().top - canvas.getBoundingClientRect().top - controllable.clientHeight - style.padding + "px";
    }
    
    function showToolbar(event)
    {
        if (getComputedStyle(toolbar).display == "none") {
            if (window.getSelection) {
                window.getSelection().removeAllRanges();
            }
            else {
                document.selection.empty();
            }
            toolbar.style.display = "flex";
        }
        controllable.classList.add("active");
        changeToolbarPosition();
    }
    
    function hideToolbar(event)
    {
        if (event.target != controllable && event.target.parentNode != toolbar && event.target != toolbar)
        {
            controllable.classList.remove("active");
            toolbar.style.display = "none";
        }
    }
    
    function changeControllableColor(event)
    {
        event.target.parentNode.getElementsByClassName("color")[0].style.backgroundColor = event.target.value;
    }
    
    function toggleToolbarColorMode(event)
    {
        if (getComputedStyle(event.target.parentNode.getElementsByClassName("color-form")[0]).display == "none") {
            event.target.parentNode.getElementsByClassName("color-form")[0].style.display = "flex";
            Array.from(event.target.parentNode.children).forEach
            (
                function(element)
                {
                    if (!element.classList.contains("color") && !element.classList.contains("color-form"))
                    {
                        element.style.display = "none";
                    }
                }
            );
        }
        else {
            event.target.parentNode.getElementsByClassName("color-form")[0].style.display = "none";
            Array.from(event.target.parentNode.children).forEach
            (
                function(element)
                {
                    if (!element.classList.contains("color") && !element.classList.contains("color-form"))
                    {
                        element.style.display = "flex";
                    }
                }
            );
            //ЗАВИСИМОЕ ПРЕОБРАЗОВАНИЕ
            controllable.style.color = getComputedStyle(event.target.parentNode.getElementsByClassName("color")[0]).backgroundColor;
        }
    }
    
    function changeControllableFontSize(event)
    {
        //ЗАВИСИМОЕ ПРЕОБРАЗОВАНИЕ
        if (event.target.classList.contains("font-size-big")) {
            event.target.classList.remove("font-size-big");
            controllable.classList.remove("font-size-big");
        }
        else if (event.target.classList.contains("font-size-medium")) {
            event.target.classList.remove("font-size-medium");
            event.target.classList.add("font-size-big");
            controllable.classList.remove("font-size-medium");
            controllable.classList.add("font-size-big");
        }
        else if (event.target.classList.contains("font-size-small")) {
            event.target.classList.add("font-size-medium");
            controllable.classList.add("font-size-medium");
        }
        
        changeToolbarPosition()
    }
    
    function changeControllableAlign(event)
    {
        //ЗАВИСИМОЕ ПРЕОБРАЗОВАНИЕ
        var actives = event.target.parentNode.getElementsByClassName("active");
        for (var counter = 0; counter < actives.length; counter++)
        {
            if (actives[counter].classList.contains("left") || actives[counter].classList.contains("center") || actives[counter].classList.contains("right")) {
                actives[counter].classList.remove("active");
                break;
            }
        }
        event.target.classList.add("active");
        changeToolbarPosition()
    }
    
    var controllable = elem,
        toolbar = document.createElement("div");
    
    controllable.classList.add("font-size-small");
    toolbar.classList.add("toolbar");
    
    var icon = document.createElement("button");
    icon.classList.add("icon");
    icon.classList.add("left");
    icon.addEventListener("click", changeControllableAlign);
    toolbar.appendChild(icon);
    icon.dispatchEvent(new Event("click"));
    
    icon = document.createElement("button");
    icon.classList.add("icon");
    icon.classList.add("center");
    icon.addEventListener("click", changeControllableAlign);
    toolbar.appendChild(icon);
    
    icon = document.createElement("button");
    icon.classList.add("icon");
    icon.classList.add("right");
    icon.addEventListener("click", changeControllableAlign);
    toolbar.appendChild(icon);
    
    if (controllable.tagName == "SPAN" || controllable.tagName == "DIV") {
        icon = document.createElement("button");
        icon.classList.add("icon");
        icon.classList.add("font-size-small");
        icon.addEventListener("click", changeControllableFontSize);
        toolbar.insertBefore(icon, toolbar.firstChild);

        icon = document.createElement("input");
        icon.classList.add("color-form");
        icon.addEventListener("keyup", changeControllableColor.bind(this));
        toolbar.appendChild(icon);
        
        icon = document.createElement("button");
        icon.classList.add("icon");
        icon.classList.add("color");
        icon.addEventListener("click", toggleToolbarColorMode.bind(this));
        toolbar.appendChild(icon);
    }
    
    toolbar.style.display = "none";
    //canvas.parentNode.appendChild(toolbar);
    document.body.addEventListener("click", hideToolbar.bind(this));
    controllable.addEventListener("dblclick", showToolbar.bind(this));
    
    return toolbar;
}

var toolbar = new Toolbar(document.getElementById("TEXT").children[0], document.getElementById("TEXT"), {padding: 5});
document.getElementById("TEXT").appendChild(toolbar);