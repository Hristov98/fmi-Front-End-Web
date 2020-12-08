function sides(literals, ...expressions) {
    var area = expressions[0];
    var perimeter = expressions[1];

    let firstSide = (perimeter + Math.sqrt(perimeter * perimeter - 16 * area)) / 4;
    let secondSide = (perimeter - Math.sqrt(perimeter * perimeter - 16 * area)) / 4;

    let sides = [firstSide, secondSide];
    sides.sort();
    return sides;
}
