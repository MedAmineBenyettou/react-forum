import React from 'react';
import { forumData } from '../lib/Forum';

function Forum(props:forumData) {
  const {views,options,theme} = props;
  return (
    <div className="Forum">
      Forum
    </div>
  );
}

export default Forum;
