export default function two_crystal_balls(breaks: boolean[]) {
    // you only have 2 crystal balls
    // because you can break the first one
    // jumping by sqrt root of n and then walk back finding it;

    const jumpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jumpAmount;
    for (; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jumpAmount;

    for (let j = 0; j <= jumpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
