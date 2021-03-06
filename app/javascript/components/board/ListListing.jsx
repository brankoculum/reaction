import React from 'react';
import List from './List';


const ListListing = ({ lists, submitNewCard }) => {
  const listGroup = lists
    .sort((a, b) => {
      return new Date(a.created_at) - new Date(b.created_at)
    })
    .map((list, i) => {
      return (
        <List
          key={'list-' + i}
          title={list.title}
          id={list.id}
          boardId={list.board_id}
          submitNewCard={submitNewCard}
        />
      )
    });

  return (
    <div id="existing-lists" className="existing-lists">
      {listGroup}
    </div>
  );
};

export default ListListing;
