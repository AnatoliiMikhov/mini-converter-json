class Options {
	constructor(height, width, bg, fontSize, textAlign, marginTop) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
		this.marginTop = marginTop;
	}

	createDiv() {
		let elem = document.createElement("div");
		document.body.appendChild(elem);
		let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}; margin-top:${this.marginTop}px;`;
		elem.style.cssText = param;
	}
}

const item = new Options(300, 350, "red", 14, "center", 50);
const itemTwo = new Options(379, 287, "green", 16, "center", 80);

item.createDiv();
itemTwo.createDiv();
