const mongoose = require('mongoose')

const clothingSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		quantity:{
            type: Number
        },
		image: String,
		size: {
			type: Array,
			required: true,
		},
		color: {
			type: Array,
			required: true,
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Example', exampleSchema)
