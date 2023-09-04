import React from "react";

const RecommendCarCard = (props, { setWalletTransition, setWallet }) => {
  const { detail, carName, retweet, imgUrl, rentPrice, icon } = props.item;



  return (

      <div className="card 1">
        <div className="card_image"> 
        
        <img style={{borderRadius: 40, width:50, height:50, marginBottom:5}} src={imgUrl}  alt="image"/>
        <div className="card_title title-white">
          <p>{carName}</p>
        </div>
         </div>
        
      </div>
  );
};

export default RecommendCarCard;
