const mongoCollections = require("../config/mongoCollections");
const Goods = mongoCollections.Goods;
const Users = mongoCollections.Users;
const uuid = require('node-uuid');
const users = require('./users');

let exportedMethods = {

	createGoods(goods, description, price, department) {

		return Goods().then((goodCollection) => {

			let goodData = {

				_id: uuid.v4(),
				goods: goods,
				description: description,
				score: [],
				price: price,
				comments: [],
				department: department
			};

			return goodCollection.insertOne(goodData).then(() => {

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

	createCommentForGoods(id, poster, comment) {
		return this.getGoodsById(id).then((currentGood) => {
			return goodCollection.updateOne({ _id: id }, {
				$addToSet: {
					comments: {
						poster: poster,
						id: uuid.v4(),
						comment: comment
					}
				}
			});
		});
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
	}

}

module.exports = exportedMethods;