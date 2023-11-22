import React from 'react';


const Articolo = ({ body, title }) => {
  return (
    <article className="card">
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <hr className="card-underline" />
        <p className="card-text">{body}</p>
      </div>
    </article>
  );
};

export default Articolo;
