import React from 'react';
import { Link } from 'react-router-dom';
import { QUESTION_PATH } from '../../../../utils/config';
import { Card, Header } from 'semantic-ui-react';
import { Label } from '../../../Nav/NavTheme';

const SubQuestion = ({ question, main }) => {
  return (
    <div
      style={
        main
          ? { marginLeft: '1em', marginRight: '1em', marginBottom: '1em' }
          : null
      }
    >
      <Card
        as={Link}
        to={QUESTION_PATH(question)}
        fluid
        style={
          main
            ? {
                marginTop: '1em',
                paddingLeft: '0.5em',
                paddingTop: '0.5em',
                paddingBottom: '0.2em',
              }
            : {
                paddingLeft: '0.5em',
                paddingTop: '0.5em',
              }
        }
      >
        <Card.Header style={{ display: 'inline', overflowWrap: 'anywhere' }}>
          <Header as="h2">
            <Header.Content>
              <Label color="blue" bold nolink pointer>
                {question.question}
              </Label>
            </Header.Content>
          </Header>
        </Card.Header>
        <Card.Description
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: '100ch',
          }}
        >
          <Label color="green" bold nolink pointer>
            {question.description}
          </Label>
        </Card.Description>
      </Card>
    </div>
  );
};

export default SubQuestion;
