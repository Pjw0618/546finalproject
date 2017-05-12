const mongoCollections = require("../config/mongoCollections");
const Goods = mongoCollections.Goods;
const Users = mongoCollections.Users;
const uuid = require('node-uuid');
const users = require('./users');

let exportedMethods = {

	createGoods(goods, description, price, department, url) {

		return Goods().then((goodCollection) => {

			let goodsData = {

				_id: uuid.v4(),
				goods: goods,
				description: description,
				totalScore: 0,
				totalCount: 0,
				price: price,
				comments: [],
				department: department,
				url: url
			};

			return goodCollection.insertOne(goodsData).then(() => {

				return Promise.resolve(true);

			}).catch((Error) => {

				return Promise.reject(false);
			});

		});
	},

	getAllGoods() {

		return Goods().then((goodsCollection) => {

			return goodsCollection.find({}).toArray();
		});

	},

	getGoodsByDepartment(department) {

		return Goods().then((goodsCollection) => {

			return goodsCollection.find({ department: department }).toArray();

		});

	},

	getGoodsById(id) {
		return Goods().then((goodsCollection) => {
			return goodsCollection.findOne({ _id: id }).then((good) => {
				if (!good) throw "User not found";
				return good;
			});
		});
	},

	
	createCommentForGoods(goodsid, poster, comment, rate) {
		return this.getGoodsById(goodsid).then((goodCollection) => {
			return goodCollection.updateOne({ _id: goodsid }, {
				$addToSet: {
					comments: {
						poster: poster,
						id: uuid.v4(),
						rate: rate,
						comment: comment
					}
				}
			}).then(() => {
				this.updateScoreCount(goodsid, rate).then(() => {
					return Promise.resolve(true);
				}).catch((Error) => {
					return Promise.reject(false);
				});

			});
		})
	},


	//firstly, get id by user id, and then check that user whether he or she have ordered that item, if not,
	//he or she can't comment that good
	//return: that user, this function would be used in users.js/data
	getGoodsInUser(goodsId, userId) {
		return this.getGoodsById(goodsId).then((currentGood) => {
			return users.getUserById(userId).then((currentUser) => {
				return Users().find({"order_history.name":name}).then((finded)=>{
					if(finded) return Promise.resolve(true);
					throw "Doesn't buy it yet!"
				})
			})
		})
	},

	updateScoreCount(goodsid, rate) {
		return this.getGoodsById(goodsid).then((goodCollection) => {
			let totalScore = goodCollection.totalScore + rate;
			let totalCount = goodCollection.totalCount + 1;
			let updatedGoods = {
				totalScore: totalScore,
				totalCount: totalCount
			};

			let updateCommand = {
				$set: updatedGoods
			};

			return goodCollection.updateOne({ _id: goodsid }, updateCommand).then(() => {
				return resolve(true);
			});
		}).catch((Error) => {
			return Promise.reject(Error);
		});
	},

	findByName(name){

		return Goods().then((goodsCollection)=>{

			let search = new RegExp("\["+name+"\]",'i');

			return goodsCollection.find({goods:search}).toArray();

		});


	},


	addGoods(name){

		 return Goods().then((goodCollection) => {

			let goodData = {

				name: name,
				
			};

			 return goodCollection.insertOne(goodData).then(() => {
			
			}).catch((Error) => {

				console.log(Error);
			});

		});

	}
}

module.exports = exportedMethods;

