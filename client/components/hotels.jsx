import React from 'react';

export default function Hotels(props) {
  return (
    <div className='p-2'>
      <h1 className="cursive">Hotels</h1>
      <div>
        <p>
          We have taken the time to locate some hotels in the area, please see the list below:
        </p>
        <p>
          <em>
            <strong>
              {"Estimate times are subject to traffic, please check the time on your phone's gps the morning of to get the most accurate time based on traffic."}
            </strong>
          </em>
        </p>
      </div>
      <ol className="hotelList">
        <li>
          Pala Mesa Resort (2.1 miles ~5mins)<br/>
          <a href="https://www.palamesa.com/">Pala Mesa Resort Website</a>
        </li>
        <li>
          Quality Inn Fallbrook (3.6 miles ~7mins)<br/>
          <strong className="qualityInn">Close but not great, equivalent to Motel 6.</strong><br/>
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
        <li>
          Welk Resorts San Diego (11.4 miles ~19mins)<br/>
          <a href="https://welkresorts.com/ca/san-diego/welk-resorts-san-diego/accommodations">Welk Resorts Website</a>
        </li>
        <li>
          Springhill Suites Temecula (12.3 miles ~17mins)<br/>
          <a href="https://www.marriott.com/hotels/travel/ontst-springhill-suites-temecula-valley-wine-country/">Springhill Suites Temecula Website</a>
        </li>
        <li>
          Pechanga Casino (13.5 miles ~23mins)<br/>
          <a href="https://www.pechanga.com/">Pechanga Casino Resort and Casino</a>
        </li>
        <li>
          Embassy Suites Temecula (12.6 miles ~19mins)<br/>
          <a href="https://www.hilton.com/en/hotels/laxtmes-embassy-suites-temecula-valley-wine-country/">Embassy Suites Temcula</a>
        </li>
      </ol>
    </div>
  );
}
