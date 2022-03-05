import { expect } from "chai";
import hre from "hardhat";
import { Signer } from "ethers";

const { ethers } = hre;

// https://docs.ethers.io/v5/api/utils/display-logic/#utils-parseEtherz
const initialSupply = ethers.utils.parseEther("100100000");
const name = "Mundo";
const symbol = "MND";
const decimals = 18;
const totalSupply = initialSupply;
let mundo: any;
let owner: any;
let alice: any;
let bob: any;

describe("#constructor()", function () {
  before(async () => {
    const Mundo = await ethers.getContractFactory("Mundo");
    mundo = await Mundo.deploy(initialSupply);
    await mundo.deployed();
    [owner, alice, bob] = await ethers.getSigners();
  });
  it("name set properly", async function () {
    expect(await mundo.name()).to.equal(name);
  });
  it("symbol set properly", async function () {
    expect(await mundo.symbol()).to.equal(symbol);
  });
  it("decimal set properly:", async () => {
    expect(await mundo.decimals()).to.equal(decimals);
  });
  it("initialSupply set properly:", async () => {
    const ownerBalance = await mundo.balanceOf(owner.address);
    expect(ownerBalance).to.equal(initialSupply.toString());
  });
  it("totalSupply set properly", async () => {
    expect(await mundo.totalSupply()).to.equal(totalSupply);
  });
  it("transfer function works properly", async () => {
    const tranferAmount = ethers.utils.parseEther("100");
    await mundo.transfer(alice.address, tranferAmount.toString());
    expect(await mundo.balanceOf(alice.address)).to.equal(tranferAmount.toString());
  });
  it("alice sends a transaction", async () => {
    const transferAmount = ethers.utils.parseEther("50");
    const aliceContract = mundo.connect(alice);
    await aliceContract.transfer(bob.address, transferAmount.toString());
    expect(await mundo.balanceOf(bob.address)).to.equal(transferAmount.toString());
  });

  // // stop automine
  // await hre.network.provider.send("evm_setAutomine", [false]);
  // // mine 1 block
  // hre.network.provider.send(`evm_mine`);

  // // mine 100 blocks
  // hre.network.provider.send(`hardat_mine`, ["0x64"]);
  // https://docs.ethers.io/v5/getting-started/#getting-started--writing

  // describe("#ERC20 Spec()", function () {
  // });
});
