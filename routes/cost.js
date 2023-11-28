var express = require('express');
var router = express.Router();
const Costcontext = require("../Strategy/costcontext");
const localstrategy = require("../Strategy/localstategy");
const discount = require("../Strategy/discount")
const iva = 0.16;
const disc = 0.10;

router.get('/', function(req, res){
    const ucost = new Costcontext(new localstrategy(), iva);
    const amount = req.query.amount;
    const uiva = ucost.cost(amount);
    const total = Number(amount) + Number(uiva);

    res.json("el total del producto es: " + (total) +  "con un iva de: " + uiva)
});

router.get('/discount', function(req, res){
    const ucost = new Costcontext(new discount(disc), iva);
    const amount = req.query.amount;
    const uiva = ucost.cost(amount);
    const total = Number(amount) + Number(uiva);

    res.json("el total del producto es: " + (total) +  "con un iva de: " + uiva + " y un descuento de: " + disc)
});

module.exports = router;