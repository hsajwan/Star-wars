import { CheckNumberPipe } from './check-number.pipe';

describe('CheckNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new CheckNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
