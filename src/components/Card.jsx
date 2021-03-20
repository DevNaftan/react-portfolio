import React from 'react';

import '@styles/components/Card.scss';
import twitterLogo from '@images/twitter.png';
import githubLogo from '@images/github.png';
import instagramLogo from '@images/instagram.png';

const Card = ({ data }) => (
  <div className='card'>
    <div className='card_details'>
      <div className='card_photo center circle'>
        <img src={data.picture.large} alt={data.name.first} />
      </div>
      <p className='card_title'>Hi, My name is</p>
      <p className='card_value'>
        {data.name.first} {data.name.last}
      </p>
    </div>
    <div className='card_userdata'>
      <ul>
        <li>{data.email}</li>
        <li>{data.location.country}</li>
      </ul>
    </div>
    <div className='card_social'>
      <a href='https://twitter.com/'>
        <img src={twitterLogo} />
      </a>
      <a href='https://github.com/'>
        <img src={githubLogo} />
      </a>
      <a href='https://instagram.com/'>
        <img src={instagramLogo} />
      </a>
    </div>
  </div>
);

export default Card;
