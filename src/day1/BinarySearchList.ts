export default function bs_list(haystack: number[], needle: number): boolean {
  let lo = 0;
  let hi = haystack.length;

  do {
    const mid = Math.floor(lo + (hi - lo)/2);
    const value = haystack[mid];

    if (needle === value) {
      return true;
    } else if (needle < value) {
      hi = mid;
    } else {
      lo = mid + 1;
    }

  } while (lo < hi);

  return false;
}

const array = [1,5,6,11,12,15,25,30,45,77];
