import { ethers } from "hardhat";

const initialSupply = 1000000000;
const name = "Mundo";
const symbol = "MND";

describe("Mundo ERC20 Token", function () {
  
  describe("#constructor()", function () {
    // beforeAll(async () => {
    //   const Mundo = await ethers.getContractFactory("Mundo");
    //   const mundo = await Mundo.deploy(initialSupply);
    //   await mundo.deployed();
    // })
    it("name set properly", async function () {
      const Mundo = await ethers.getContractFactory("Mundo");
      const mundo = await Mundo.deploy(initialSupply);
      await mundo.deployed();
      expect(await mundo.name()).toEqual(name);
    });
    it("symbol set properly", async function () {
      const Mundo = await ethers.getContractFactory("Mundo");
      const mundo = await Mundo.deploy(initialSupply);
      await mundo.deployed();
      expect(await mundo.symbol()).toEqual(symbol);
    });
  });
})


