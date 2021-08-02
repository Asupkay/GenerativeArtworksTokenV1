const { expect } = require("chai");

describe("Token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {

    const Token = await ethers.getContractFactory("GenerativeArtworksTokenV1");
    const hardhatToken = await Token.deploy("Generative Artworks Token V1", "GATV1");
  });
});
