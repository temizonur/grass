import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLessonPageByName } from '../../reducers/lessonReducer';

const Lesson = () => {
  const dispatch = useDispatch();
  const match = useRouteMatch('/lessons/:areaCode/:digitCode/:teacherName')
    .params;
  const lessons = useSelector((state) => state.lessons.lessons);
  useEffect(() => {
    const q = match;
    dispatch(getLessonPageByName(q.areaCode, q.digitCode, q.teacherName));
  }, []);

  if (
    lessons.find(
      (l) =>
        l.fullName === `${match.areaCode}${match.digitCode}` &&
        l.teacher.name === decodeURI(match.teacherName)
    ) === undefined
  ) {
    return null;
  }
  const lesson = lessons.find(
    (l) =>
      l.fullName === `${match.areaCode}${match.digitCode}` &&
      l.teacher.name === decodeURI(match.teacherName)
  );
  console.log('lesson', lesson);

  return <div>{lesson.fullName.toUpperCase()}</div>;
};

export default Lesson;
