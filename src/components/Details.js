/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { IoArrowBackSharp } from "react-icons/io5";
import { fetchCoinsDetails } from '../redux/Details/Details';
import './Details.css';

const Details = () => {
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = location.state || {};

  useEffect(() => {
    dispatch(fetchCoinsDetails(id));
  }, [details]);

  return (<div className='container'>
        {details.map((coin) => (
          <div key={coin.id} className="card">
            <Link to="/">
              <IoArrowBackSharp size={30} style={{ color: '#2F3645' }} />
            </Link>
            <img src={coin.image} alt={coin.name} />
            <div className="card-body">
              <h3 className="card-title">
               {`Name : ${coin.name}`}
              </h3>
              <h5 className="card-text">
                {`Price: ${coin.price}$`}
              </h5>
              <h5 className="card-text">
                {`price Change 1 day : ${coin.priceChange1d}$`}
              </h5>
              <h5 className="card-text">
              {`price Change 1 hour : ${coin.priceChange1h}$`}
              </h5>
              <h5 className="card-text">
              {`price Change 1 week : ${coin.priceChange1w}$`}
              </h5>
            </div>
          </div>
        ))}

</div>
  );
};

export default Details;
