// For more informations go to: https://mongoosejs.com/docs/guide.html and https://mongoosejs.com/docs/models.html

const mongoose = require('@condor-labs/mongodb')().mongoose;
const Schema = mongoose.Schema;

const exampleModelSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const exampleModel = mongoose.model('Example', exampleModelSchema);
module.exports = exampleModel;
