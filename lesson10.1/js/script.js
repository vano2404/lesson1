class Options {
    constructor(height, width, bg, fontSize, textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createWrite (){
        let div = document.createElement('div');
        div.innerHTML = prompt('текст');
        document.body.appendChild(div);
        div.style.cssText = `height: ${this.height}px; width: ${this.width}px;
        background: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign}; `;
        
    }
}
let object = new Options (500,500,'red',20,'center');
console.log(object.createWrite()); 
   
    

