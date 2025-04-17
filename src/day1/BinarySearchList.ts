export default function bs_list(haystack: number[], needle: number): boolean {
    let hi = haystack.length; // Now inclusive
    let lo = 0;

    while (lo < hi) {
        const mid = Math.floor(lo + (hi - lo) / 2);
        const value = haystack[mid];

        if (value === needle) {
            return true;
        } else if (value > needle) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }
    return false;
}
