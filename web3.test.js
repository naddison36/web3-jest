const Web3 = require("web3");

test("Web3 version", function()
{
    expect(Web3.version).toEqual("1.0.0-beta.22");
});