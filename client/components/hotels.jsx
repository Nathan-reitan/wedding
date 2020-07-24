import React from 'react';

export default function Hotels(props) {
  return (
    <div>
      <h1>Hotels</h1>
      <div className="berkshire">
        <p>
          We have taken the time to locate some hotels in the area, please see the list below:
        </p>
        <p>
          <em>Estimate times are subject to traffic, please check the time morning of to get the most accurate time based on traffic</em>
        </p>
      </div>
      <ol className="hotelList">
        <li>
          Pala Mesa Resort (2.1 miles ~5mins)<br/>
          <a href="https://www.palamesa.com/">Pala Mesa Resort Website</a>
        </li>
        <li>
          Quality Inn Fallbrook (3.6 miles ~7mins)<br/>
          <a href="https://www.choicehotels.com/california/fallbrook/quality-inn-hotels/caa69?source=gyxt">Quality Inn Website</a>
        </li>
        <li>
          Pala Casino Spa & Resort (8.4 miles ~15mins)<br/>
          <a href="https://www.palacasino.com/">Pala Casino Website</a>
        </li>
        <li>
          Temecula Creek Inn (10 miles ~18mins)<br/>
          <a href="https://www.temeculacreekinn.com/?NCK=8664483612">Temecula Creek Website</a>
        </li>
      </ol>
    </div>
  );
}
