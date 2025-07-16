
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const blogSchema = new mongoose.Schema(
  {
    blogId: {
      type: Number,
      unique: true
    },
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150
    },
    content: {
      type: String,
      required: true 
    },
    images: {
      type: [String], 
      required: true,
      validate: {
        validator: arr => arr.length >= 1 && arr.length <= 3,
        message: 'You must upload 1 to 3 images'
      }
    },
    category: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
  }
);

// Auto-increment
blogSchema.plugin(AutoIncrement, { inc_field: 'blogId' });

module.exports = mongoose.model('Blog', blogSchema);
