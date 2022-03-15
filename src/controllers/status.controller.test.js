const { welcomeRouteHandler } = require('./status.controller');

describe('Example controller', () => {
  it('It should called res.send', async () => {
    const req = {};
    const res = {
      send: jest.fn(),
    };

    await welcomeRouteHandler(req, res);
    expect(res.send).toHaveBeenCalledTimes(1);
    expect(res.send).toHaveBeenCalled();
    expect(res.send).toHaveBeenCalledWith('Hello, welcome to my API prueba-matchbox');
  });
});
