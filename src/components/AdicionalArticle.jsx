import React from 'react';
import "./style/adicionalArticle.css";

function AdicionalArticle({
  adicionalName,
  adicionalprices,
  adicionalDescription,
  adicionalImg,
}) {
    return (
        <div className="adition-container">
            <div className="adition-text">
              <h3>{adicionalName} </h3>
             
              <h3><small>Desde</small>  {adicionalprices} <small>COP</small> </h3>
              <p>
                {adicionalDescription}
              </p>
            </div>
            <img src={adicionalImg} alt="" />
          </div>
    );
}

export default AdicionalArticle;