function getCount(objects) {
    var counter = 0;
    for (let object of objects) {
        if (object.x == object.y) {
            counter++;
        }
    }

    return counter;
}
