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
import dormService from '../../services/dorms';

const Dorm = () => {
  const match = useRouteMatch('/dorms/:name');
  const user = useSelector((state) => state.user);
  const [dorm, setDorm] = useState(null);
  useEffect(() => {
    dormService.getDormByName(match.params.name, setDorm);
  }, []);

  if (dorm === null) {
    return <LinearProgress />;
  }
  return (
    <div>
      <Label color="blue" bold style={{ fontSize: '2em' }}>
        {dorm.name} · <Follow idToFollow={dorm.id} user={user} />
      </Label>
      <br />
      <br />
      <CommentForm typeId={dorm.id} commentType="dorm" />
      <Divider/>
      <CommentSort />
      <IdComments typeId={dorm.id} type="dorm" />
    </div>
  );
};

export default Dorm;
