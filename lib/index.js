/**
 * Cut and paste item in array.
 *
 * @param {Array} arr
 * @param {Number} from - from where to but
 * @param {Number} to - where to paste
 * @returns {Array} new modified array
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = cutAndPaste;

function cutAndPaste(arr, from, to) {
  var newArr = arr.slice();
  var valueToPast = arr[from];
  newArr.splice(from, 1);
  newArr.splice(to, 0, valueToPast);
  return newArr;
}

module.exports = exports["default"];