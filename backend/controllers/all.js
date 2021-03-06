const allRouter = require('express').Router();
const Teacher = require('../models/teacher');
const Lesson = require('../models/lesson');
const User = require('../models/user');

allRouter.get('/total', async (req, res) => {
  const search = req.query.search ? req.query.search : '';

  const teachers = await Teacher.find({
    $or:[
      {name: { $regex: search.toUpperCase() ,$options: 'i'}},
      {name: { $regex: search.toLocaleUpperCase('tr-TR') ,$options: 'i'}}
      ]
  });
  const teachersId = teachers.map((t) => t.id);

  const lessonsTotal = await Lesson.getFilteredAllInf(
    search,
    teachersId
  ).countDocuments();
  res.json({ total: lessonsTotal });
});

allRouter.get('/', async (req, res) => {
  const q = req.query;
  if (!('start' in q) || !('total' in q)) {
    res.status(400).json({
      error: 'should have start or total',
    });
  }
  const search = q.search ? q.search : '';
  const teachers = await Teacher.find({
    $or:[
      {name: { $regex: search.toUpperCase() ,$options: 'i'}},
      {name: { $regex: search.toLocaleUpperCase('tr-TR') ,$options: 'i'}}
      ]
  });
  const teachersId = teachers.map((t) => t.id);
  const lessons = await Lesson.getFilteredAllInf(
    search,
    teachersId,
    q.start,
    q.total
  );
  res.json(lessons.map((l) => l.toJSON()));
});

module.exports = allRouter;
