import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import IdComments from '../../../Comments/Comments/IdComments';
import { LinearProgress } from '@material-ui/core';
import { Divider } from 'semantic-ui-react';
import CommentSort from '../../../Comments/CommentSort/CommentSort';
import Follow from '../../../Follow/Follow';
import { Label, HeadingStyle, HeadingStyleMobile } from '../../../Nav/NavTheme';
import CommentForm from '../../../Comments/CommentForm/CommentForm';
import dormService from '../../../../services/dorms';
import { isMobile } from 'react-device-detect';

const Dorm = () => {
  const match = useRouteMatch('/dorms/:name');
  const [dorm, setDorm] = useState(null);
  useEffect(() => {
    dormService.getDormByName(match.params.name, setDorm);
  }, []);

  if (dorm === null) {
    return <LinearProgress />;
  }
  return (
    <div>
      {isMobile ? (
        <div style={HeadingStyleMobile}>
          <Label color="blue" bold>
            {dorm.name}
          </Label>
          <div style={{ marginTop: '0.5em' }}>
            <Follow idToFollow={dorm.id} />
          </div>
        </div>
      ) : (
        <Label color="blue" bold style={HeadingStyle}>
          {dorm.name} <Follow idToFollow={dorm.id} />
        </Label>
      )}
      <br />
      <CommentForm typeId={dorm.id} commentType="dorm" />
      <Divider />
      <CommentSort />
      <IdComments typeId={dorm.id} type="dorm" />
    </div>
  );
};

export default Dorm;
