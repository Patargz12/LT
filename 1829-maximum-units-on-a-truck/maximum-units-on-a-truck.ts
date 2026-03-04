function maximumUnits(boxTypes: number[][], truckSize: number): number {
    boxTypes.sort((a, b) => b[1] - a[1]);
    let units = 0, remaining = truckSize;

    for (const [boxes, perBox] of boxTypes) {
        const take = Math.min(boxes, remaining);
        units += take * perBox;
        remaining -= take;
        if (remaining === 0) break;
    }

    return units;
}