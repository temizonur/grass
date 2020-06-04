import React from 'react';
import Comments from '../Comments/Comments';
import CommentSort from '../CommentSort/CommentSort';

const AllComments = () => {
  return (
    <div>
      <CommentSort />
      <Comments
        type="allComments"
        height="90vh"
        showTeacher={true}
        skeletonLength={8}
      />
    </div>
  );
};

export default AllComments;
