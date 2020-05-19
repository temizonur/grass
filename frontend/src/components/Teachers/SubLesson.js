import React from 'react';
import { Link } from 'react-router-dom';
import { LESSON_PATH, TEACHER_PATH } from '../../utils/config';
import { Card, Label, Header, Divider, Statistic } from 'semantic-ui-react';
const SubLesson = ({ lesson, teacherName }) => {
  const header = () => {};

  return (
    <>
      <Card
        as={Link}
        to={LESSON_PATH(lesson, teacherName)}
        fluid
        style={{ paddingTop: '0.5em', paddingLeft: '0.5em' }}
      >
        <Card.Header style={{ display: 'inline' }}>
          <Header as="h2" color="green">
            {lesson.fullName.toUpperCase()}
            {lesson.sectionCode.map((s) => (
              <Label color="blue" key={`${lesson.fullName}.${s}`}>
                {s}
              </Label>
            ))}
          </Header>
        </Card.Header>
        <Card.Meta>{teacherName}</Card.Meta>
      </Card>
    </>
  );
};

export default SubLesson;
