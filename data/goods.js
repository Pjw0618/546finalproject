const mongoCollections = require("../config/mongoCollections");
const Goods = mongoCollections.Goods;
const uuid = require('node-uuid');

let exportedMethods = {

	createGoods(goods,description,price){

		return new Promise((resolve,reject)=>{

			let ID = uuid.v4();

		Goods().then((goodCollection)=>{

			let goodData = {
				
				_id: ID,
				goods: goods,
				description:description,
				score:[],
				price:price,
				comments:[]
			};
			console.log(goodData);
			goodCollection.insertOne(goodData).then(() => {
                   
                     resolve(true);

                }).catch((Error)=>{
                	
                	reject(false);
                });

		});

		});

	},

	getAllGoods(){
	
		Goods().then((goodsCollection)=>{
			
			return goodsCollection.find({}).toArray();
		});

	}

}

module.exports = exportedMethods;