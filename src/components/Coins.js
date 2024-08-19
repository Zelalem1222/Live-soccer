import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './HomePage.css';

const Coins = ({
  id, logo, name,
}) => (
  <>
    <div className="coin-card">
      <Link key={id} to={`/${id}`} state={{ id }}>
        <img src={logo} alt={name} className={`coin-${id}`} />
        <p>{name}</p>
      </Link>
    </div>
  </>
);

Coins.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

export default Coins;
