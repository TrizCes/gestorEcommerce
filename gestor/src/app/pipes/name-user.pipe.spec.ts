import { NameUserPipe } from './name-user.pipe';

describe('NameUserPipe', () => {
  it('create an instance', () => {
    const pipe = new NameUserPipe();
    expect(pipe).toBeTruthy();
  });
});
