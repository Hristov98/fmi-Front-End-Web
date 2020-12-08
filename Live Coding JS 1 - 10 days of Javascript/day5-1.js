class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

Rectangle.prototype.area = function () {
    return this.width * this.height;
};

class Square extends Rectangle {
    constructor(width) {
        super(width, width);
    }
}
