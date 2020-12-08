class Polygon {
    constructor(sidesLength) {
        this.sides = sidesLength;
    }

    perimeter() {
        var perimeter = 0;

        for (let side of this.sides) {
            perimeter += side;
        }

        return perimeter;
    }
}
