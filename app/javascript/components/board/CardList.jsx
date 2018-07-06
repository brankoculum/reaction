import React from 'react';
import Card from './Card';

const CardList = ({ cards }) => {

  let cardList = cards.map((card, i) => {
    return <Card key={'card-' + i}
                 title={card.title}
                 labels={card.labels}
                 dueDate={card.due_date}
            />
  })

  return (
    <div id="cards-container" data-id="list-1-cards">
      {cardList}
    </div>
  );
}

export default CardList;
