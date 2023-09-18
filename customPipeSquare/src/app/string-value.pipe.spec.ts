import { StringValuePipe } from './string-value.pipe';

describe('StringValuePipe', () => {
  it('create an instance', () => {
    const pipe = new StringValuePipe();
    expect(pipe).toBeTruthy();
  });
});
