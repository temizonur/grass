import React, { useState } from 'react';
import { postComment } from '../../reducers/commentReducer';
import { useDispatch } from 'react-redux';
import { Form, Button, Segment, Label } from 'semantic-ui-react';
import TextareaAutosize from 'react-textarea-autosize';

const CommentForm = ({ typeId, commentType, teacherId }) => {
  const [tools, setTools] = useState(false);
  const dispatch = useDispatch();
  const [commentError, setCommentError] = useState('');
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCommentChange = (e) => {
    setValue(e.target.value);
    setCommentError('');
  };

  const handleComment = async () => {
    if (value.length > 4000) {
      setCommentError('4000 harften çok olamaz.');
      return;
    }

    let values = {
      comment: value,
      typeId,
      teacherId: teacherId ? teacherId : null,
      commentType,
    };

    setIsLoading(true);
    dispatch(postComment(values, setValue, setIsLoading));
  };

  return (
    <Segment
      compact
      basic
      loading={isLoading}
      style={{ paddingLeft: '0', marginLeft: '0' }}
    >
      <Form reply style={{ marginBottom: '1em' }}>
        <TextareaAutosize
          rows={4}
          value={value}
          onChange={(e) => handleCommentChange(e)}
          style={{ width: '30vw', height: '4rem' }}
          placeholder="Nasıldır?"
          onFocus={() => setTools(true)}
        />

        {tools ? (
          <div>
            {commentError && (
              <Label basic color="red" pointing="above">
                {commentError}
              </Label>
            )}
            <Button
              style={{ marginTop: '1em' }}
              content={'Yorum Yazın'}
              labelPosition="left"
              icon="edit"
              color="green"
              onClick={() => {
                handleComment();
              }}
            />
            <Button
              style={{ marginTop: '1em' }}
              content="İptal"
              labelPosition="left"
              icon="cancel"
              color="red"
              onClick={() => {
                setTools(false);
                setValue('');
              }}
            />
          </div>
        ) : null}
      </Form>
    </Segment>
  );
};

export default CommentForm;
