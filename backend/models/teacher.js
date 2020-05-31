const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
mongoose.set('useFindAndModify', false);

const teacherSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  lessons: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Lesson',
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
});

teacherSchema.set(uniqueValidator);

teacherSchema.statics.getFilteredInf = function (search, start, total) {
  return this.find({
    name: { $regex: search, $options: 'i' },
  })
    .skip(Number(start))
    .limit(Number(total))
    .populate('teacher')
    .populate('comments');
};

teacherSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    // eslint-disable-next-line no-underscore-dangle
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Teacher', teacherSchema);
