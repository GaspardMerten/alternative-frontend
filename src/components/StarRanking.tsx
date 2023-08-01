import React from 'react';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai';

const StarRanking = ({ rank = 0, fontSizeClass = "text-xl" }) => {
  const MAX_STARS = 5;
  const stars = [];

  for (let i = 1; i <= MAX_STARS; i++) {
    const StarIcon = i <= rank ? AiFillStar : AiOutlineStar;
    const color = i <= rank ? "text-primary" : "text-gray-400";
    stars.push(<StarIcon key={i} className={color + " " + fontSizeClass} />);
  }

  return <div className="flex">{stars}</div>;
};

export default StarRanking;
