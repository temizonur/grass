import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  Header,
  Icon,
  Label as SLabel,
  Button,
  Grid,
} from 'semantic-ui-react';
import { Label } from '../../../Nav/NavTheme';
import { useDispatch, useSelector } from 'react-redux';
import {
  addSelectedCourse,
  removeSelectedCourse,
  onHoverCourse,
  offHoverCourse,
  addAllSections,
} from '../../../../reducers/courseReducer';
import { LESSON_PATH } from '../../../../utils/config';
import QuotaLabel from '../../../Quota/QuotaLabel';

const SubCourse = ({ course }) => {
  const selectedCourses = useSelector((state) => state.courses.selectedCourses);
  const dispatch = useDispatch();
  const handleClick = () => {
    const foundCourse = selectedCourses.find((c) => c.id === course.id);
    if (foundCourse && foundCourse.clicked) {
      dispatch(removeSelectedCourse(course));
    } else {
      dispatch(addSelectedCourse(course, false, true));
    }
  };
  const handleAddAllSections = () => {
    dispatch(addAllSections(course.areaCode, course.digitCode));
  };

  const handleMouseEnter = () => {
    const isPresent = selectedCourses.find((c) => c.id === course.id);
    if (!isPresent) {
      dispatch(addSelectedCourse(course, true, false));
    } else {
      dispatch(onHoverCourse(course));
    }
  };

  const handleMouseLeave = () => {
    const foundCourse = selectedCourses.find((c) => c.id === course.id);
    if (foundCourse && !foundCourse.clicked) {
      dispatch(removeSelectedCourse(foundCourse));
    } else if (foundCourse && foundCourse.hover) {
      dispatch(offHoverCourse(foundCourse));
    }
  };

  const convertDays = (days) => {
    days = days.map((d) => {
      if (d === 0) {
        return 'M';
      } else if (d === 1) {
        return 'T';
      } else if (d === 2) {
        return 'W';
      } else if (d === 3) {
        return 'Th';
      } else {
        return 'F';
      }
    });
    return days;
  };

  return (
    <div
      style={{
        margin: '0.8em',
        cursor: 'pointer',
      }}
    >
      <Card
        fluid
        style={{ padding: '0.5em' }}
        onClick={() => handleClick()}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      >
        <Card.Header style={{ display: 'inline' }}>
          <Label color="blue" bold pointer nolink>
            {course.name}
          </Label>{' '}
          •{' '}
          <Label color="green" bold pointer nolink>
            {course.parentName}
          </Label>
          <Link to={LESSON_PATH(course)}>
            <Label
              color="blue"
              bold
              pointer
              style={{ float: 'right', fontSize: '0.8em' }}
            >
              <Icon name="comments" />
              Yorumlara bak
            </Label>
          </Link>
        </Card.Header>
        <Card.Meta>
          {course.fullName} <QuotaLabel course={course} />
        </Card.Meta>

        <Card.Description>
          <Label color="blue" bold pointer nolink>
            <Icon name="calendar" />
            {convertDays(course.days)}
          </Label>{' '}
          •{' '}
          <Label color="green" bold pointer nolink>
            <Icon name="clock" />
            {course.hours}
          </Label>{' '}
          •{' '}
          <Label color="blue" bold pointer nolink>
            {course.credits} Kredi
          </Label>
          <Label
            color="blue"
            bold
            pointer
            style={{ float: 'right', fontSize: '0.8em' }}
            onClick={() => handleAddAllSections()}
          >
            <Icon name="add" />
            Bütün sectionları ekle
          </Label>
          <br />
          <Label
            color={course.place === 'Online' ? 'blue' : 'green'}
            bold
            pointer
            nolink
          >
            {course.place} Ders
          </Label>{' '}
          •{' '}
          <Label
            color={course.place === 'Online' ? 'blue' : 'green'}
            bold
            pointer
            nolink
          >
            {course.final} Final
          </Label>
        </Card.Description>
      </Card>
    </div>
  );
};

export default SubCourse;
