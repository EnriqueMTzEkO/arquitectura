function discount(disc){
    
    this.disc = disc;

    this.cost = function(amount, iva){
        return(amount * iva) - (amount * disc);
    }
}

module.exports = discount;