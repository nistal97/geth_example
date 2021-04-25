
//artifacts.require: 返回后续部署脚本中使用的合约
var HelloToken = artifacts.require("./HelloToken.sol");

module.exports = function(deployer) {
    // deployment steps
    deployer.deploy(HelloToken);
};




