const { myMiddleware } = require('./example.middleware');

describe('Example middleware', () => {
  it('It should called next()', async () => {
    //Arrange
    const nextSpy = jest.fn();

    const req = {};
    const res = {
      status: jest.fn(),
    };

    await myMiddleware(req, res, nextSpy);
    expect(nextSpy).toHaveBeenCalledTimes(1);
    expect(nextSpy).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
  });
});
