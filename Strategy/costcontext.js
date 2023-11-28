function Costcontext(strategy, iva){
    this.strategy = strategy;
    this.iva = iva;

    this.setStrategy = function(strategy){
        this.strategy = strategy;
    }

    this.cost = function(amount){
        return this.strategy.cost(amount, this.iva)
    }
}


module.exports = Costcontext;