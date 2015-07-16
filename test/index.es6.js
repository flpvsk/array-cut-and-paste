import {expect} from 'chai';
import cutPaste from '../src';

describe('array-cut-and-paste', () => {
  it('should be able to cut and paste from beginning to end', () => {
    const array = [0, 1, 2, 3];
    const expected = [1, 2, 3, 0];

    const result = cutPaste(array, 0, 3);

    expect(result).to.deep.equal(expected);
  });

  it('should be able to cut and paste backwards', () => {
    const array = [0, 1, 2, 3];
    const expected = [3, 0, 1, 2];

    const result = cutPaste(array, 3, 0);

    expect(result).to.deep.equal(expected);
  });


  it('should be able to cut and paste in the middle', () => {
    const array = [0, 1, 2, 3];
    const expected = [0, 2, 1, 3];

    const result = cutPaste(array, 2, 1);

    expect(result).to.deep.equal(expected);
  });


  it('should not modify original array', () => {
    const array = [0, 1, 2, 3];
    const arrayCopy = array.slice();

    cutPaste(array, 0, 1);

    expect(array).to.deep.equal(arrayCopy);
  });

});
