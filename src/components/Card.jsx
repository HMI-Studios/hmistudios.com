import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const Card = ({ title }) => {

  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
};

export default Card;