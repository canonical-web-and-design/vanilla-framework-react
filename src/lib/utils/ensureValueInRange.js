export default function ensureValueInRange(val, max, min) {
  if (val) {
    if (val <= min) {
      return min;
    }
    if (val >= max) {
      return max;
    }
  } else {
    return min;
  }
  return val;
}
