function constructRectangle(area: number): number[] {
    let width = Math.floor(Math.sqrt(area));

    while (area % width !== 0) {
        width--;
    }

    const length = area / width;
    return [length, width];
}