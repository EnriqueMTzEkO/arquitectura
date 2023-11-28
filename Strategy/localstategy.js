function localstrategy(){
    this.cost = function(amount, iva){
        return amount * iva;
    }
}

module.exports = localstrategy;