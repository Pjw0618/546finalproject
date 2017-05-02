const mongoCollections = require("../config/mongoCollections");
const feedback = mongoCollections.Feedback;
const uuid = require('node-uuid');

let exportedMethods = {
	createFeedback(name, comment) {
		return feedback().then((feedbackCollection) => {

			let feedbackData = {
				_id: uuid.v4(),
				name: name,
				comment: comment
			};
			
			return feedbackCollection.insertOne(feedbackData).then(() => {
				return resolve(true);
			}).catch((Error) => {
				return Promise.reject(false);
			});

		});
	}


}

module.exports = exportedMethods;