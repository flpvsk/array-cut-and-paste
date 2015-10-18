/**
 * Cut and paste item in array.
 *
 * @param {Array} arr
 * @param {Number} from - from where to but
 * @param {Number} to - where to paste
 * @returns {Array} new modified array
 */
export default function cutAndPaste(arr, from, to) {
  const newArr = arr.slice();
  const valueToPast = arr[from];
  newArr.splice(from, 1);
  newArr.splice(to, 0, valueToPast);
  return newArr;
}
