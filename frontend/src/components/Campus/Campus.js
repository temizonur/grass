import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getClubPageByName } from '../../reducers/clubReducer';
import { Link } from 'react-router-dom';
import IdComments from '../Comments/IdComments';
import { LinearProgress } from '@material-ui/core';
import {
  Icon,
  Button,
  Divider,
  Header,
  Container,
  Segment,
} from 'semantic-ui-react';
import CommentSort from '../CommentSort/CommentSort';
import Follow from '../Follow/Follow';
import commentsService from '../../services/comments';
import { Label } from '../Nav/NavTheme';
import CommentForm from '../CommentForm/CommentForm';
import campusService from '../../services/campuses';

const Campus = () => {
  const match = useRouteMatch('/campuses/:name');
  const user = useSelector((state) => state.user);
  const [campus, setCampus] = useState(null);
  useEffect(() => {
    campusService.getCampusByName(match.params.name, setCampus);
  }, []);

  if (campus === null) {
    return <LinearProgress />;
  }
  return (
    <div>
      <Label color="blue" bold style={{ fontSize: '2em' }}>
        {campus.name} · <Follow idToFollow={campus.id} user={user} />
      </Label>
      <br />
      <br />
      <CommentForm typeId={campus.id} commentType="campus" />
      <Divider/>
      <CommentSort />
      <IdComments typeId={campus.id} type="campus" />
    </div>
  );
};

export default Campus;
