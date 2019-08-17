const { User } = require('../../src/app/models/');
describe('Authentication', () => {
  it('should sum two numbers', async () => {
    const user = await User.create({
      name: 'Guilherme Andrade',
      email: 'guilhermeaandrade91@gmail.com',
      password_hash: '12345678'
    })
    console.log(user);
    expect(user.email).toBe('guilhermeaandrade91@gmail.com')
  });
});