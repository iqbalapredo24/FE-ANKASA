import style from './destination.module.css';
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar';
import CardTrending from '../../components/cardTrending';
import Footer from '../../components/footer';
import axios from 'axios';

const Destination = () => {
  const [city, setCity] = useState([]);

  useEffect(() => {
    // get city
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/city`)
      .then((res) => {
        setCity(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Navbar />
      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between align-items-center">
            <h3 className={style.titleHeader}>Destination</h3>
            <div className="dropdown">
              <button className="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sort
              </button>
              <ul className="dropdown-menu mt-3">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`row ${style.row}`}>
          {city.map((data) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <CardTrending count="22" city={data.name} nation={data.country} image={data.image} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Destination;
