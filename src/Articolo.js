import React from 'react';


const Articolo = ({ body, title, imgURL }) => {
    return (
        <div class="col">
            <div className="card h-100" style={{ width: '20rem' }}>
                <img src={imgURL} className="card-img-top"
                    alt="" />
                <div className="card-body ">
                    <h4 className="card-title">{title}</h4>
                    <hr className="card-underline" />
                    <p className="card-text">{body}</p>
                </div>
            </div>
        </div>
    );
};

export default Articolo;
