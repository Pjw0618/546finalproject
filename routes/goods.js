const express = require('express');
const router = express.Router();
const data = require("../data");
const Goods = data.goods;
const path = require('path');



router.post("/goods",(req,res)=>{

	
	let goods = req.body.goods;
	let description = req.body.description;
	let price = req.body.price;

	
	Goods.createGoods(goods,description,price).then(()=>{
		
		res.render('layouts/goods',{message:"new goods!"});

	},(reject)=>{

		res.render("layouts/goods",{message: "system error, try again!"});
	});
	

    
});

module.exports = router;