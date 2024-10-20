export default function bs_list(haystack: number[], needle: number): boolean {
    let bottom = 0;
    let top = haystack.length;
    let mid;
    let value;
    while (top > bottom) {
        mid = Math.floor(bottom + (top - bottom) / 2);
        value = haystack[mid];
        if (value === needle) {
            return true;
        } else if (value > needle) {
            bottom = mid + 1;
        } else {
            top = mid;
        }
    }
    return false;
}