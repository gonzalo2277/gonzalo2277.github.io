let inputHtml = `<!DOCTYPE html>
<html>
    <head></head>
    <body>
        <p>Web de viajes</p>
        <div class="product">
            <div class="imagen">
                <img src="beach.jpg"/>
            </div>
            <div class="content">
                <p class="title">vacaciones en la playa</p>
                <p class="desc">para dos personas con pension completa</p>
                <p class="price">165&euro; por noche/persona</p>
            </div>
        </div>
    </body>
</html>`;

class Extractor {
    #value;

    constructor(html, pattern) {
        this.#value = this.#extract(html, pattern);
    }

    get value() {
        return this.#value;
    }

    #extract(html, pattern) {
        let capture = pattern.exec(html);
        return capture[1];
    }
}

class Product {
    #title;
    #image;

    constructor(title, image) {
        this.#title = title;
        this.#image = image;
    }

    get title() {
        return this.#title;
    }

    get image() {
        return this.#image;
    }
}

let image = new Extractor(inputHtml, new RegExp(/<img src="(.*)"\/>/));
let title = new Extractor(inputHtml, new RegExp(/<p class="title">(.*)<\/p>/));
let product = new Product(title, image);

console.log(product);
console.log(product.title.value);
console.log(product.image.value);