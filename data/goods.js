const mongoCollections = require("../config/mongoCollections");
const Goods = mongoCollections.Goods;
const uuid = require('node-uuid');

let exportedMethods = {

	createGoods(goods,description,price,department){

		return new Promise((resolve,reject)=>{

			let ID = uuid.v4();

		return Goods().then((goodCollection)=>{

			let goodData = {
				
				_id: ID,
				goods: goods,
				description:description,
				score:[],
				price:price,
				comments:[],
				department:department
			};
			
			goodCollection.insertOne(goodData).then(() => {
                   
                     resolve(true);

                }).catch((Error)=>{
                	
                	reject(false);
                });

		});

		});

	},

	getAllGoods(){
	
		return Goods().then((goodsCollection)=>{
			
			return goodsCollection.find({}).toArray();
		});

	},

	getGoodsByDepartment(department){

		return Goods().then((goodsCollection)=>{

			//Get goods by department, below is a example, I don't know if it is a right way.
			//return goodsCollection.find({department:department}).toArray();

		});

	},

	getGoodsById(id) {
        return Goods().then((goodsCollection) => {

            return goodsCollection.findOne({ _id: id }).then((good) => {
                // if (!good) throw "User not found";
                return good;
            });
        });
    },

	 createCommentForGoods(id, poster, comment) {
        return this.getGoodsById(id).then((currentGood) => {

            let commentData = {

                poster: poster,
                comment: comment
            };

            return userCollection.updateOne({ _id: id }, commentData).then(() => {
                return this.getGoodsById(id);
            });
        });
    },

    //firstly, get id by user id, and then check that user whether he or she have ordered that item, if not,
    //he or she can't comment that good
    //return: that user, this function would be used in users.js/data
    getGoodsInUser(goodsId,userId){


    }

}

module.exports = exportedMethods;