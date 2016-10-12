async function main() {

    const [deployer, admin, wallet] = await ethers.getSigners();

    console.log("1. deployer: =============", deployer);
    console.log("2. admin: =============", admin);
    console.log("3. wallet: =============", wallet);
  
    console.log("Account balance before:", (await deployer.getBalance()).toString());
      
    const EpsteinContract = await ethers.getContractFactory("Epstein");
    deployedEpsteinContract = await EpsteinContract.deploy();
    console.log("Epstein Contract Address:", deployedEpsteinContract.address);
    
    await deployedEpsteinContract.deployed();
    console.log("Account balance after:", (await deployer.getBalance()).toString());
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });