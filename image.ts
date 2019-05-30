const mongoose = require('mongoose');
 
// Interface for TS


const interface IImageModel extends mongoose.Document {
    filename: string; 
    originalName: string; 
    desc: string;
    created: Date;
  };


 
module.exports = IImageModel

  // Actual DB model
var imageSchema = new mongoose.Schema({
    filename: String,
    originalName: String,
    desc: String,
    created: { type: Date, default: Date.now }
});

module.exports = imageSchema;
 
const Image = mongoose.model<IImageModel>('Image', imageSchema);

module.exports =Image;