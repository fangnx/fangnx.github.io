import React from 'react';
import './ContentCard.scss';
import SimpleTag from '../SimpleTag/SimpleTag';

const ContentCard = (props) => (
  <div className="content-card">
    {props.title ? (
      <>
        <article className="image-col">
          <img src={props.imageSrc} alt=""></img>
        </article>
        <article className="text-col">
          <h3 className="title">{props.title}</h3>
          <div className="paragraph">{props.content}</div>
          <div className="tags">
            {!props.tags
              ? null
              : props.tags.map((tag) => <SimpleTag text={tag}></SimpleTag>)}
          </div>
        </article>
      </>
    ) : (
      <article className="text-col">
        <div className="paragraph">{props.content}</div>
      </article>
    )}
  </div>
);

export default ContentCard;
