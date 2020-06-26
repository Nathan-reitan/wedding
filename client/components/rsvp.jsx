import React from 'react';
// const nodemailer = require('nodemailer');
// let transporter = nodemailer.createTransport(transport[, defaults])

export default class Rsvp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      plusOne: null,
      plusOneName: '',
      meal: ''
    };
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // need to write fetch requests for submission
    this.props.rsvp(this.state);
    this.setState({
      name: '',
      plusOne: null,
      plusOneName: '',
      meal: ''
    });
  }

  render() {
    return (
      <div>
        <form action="" className='d-flex flex-wrap justify-content-end px-1'>
          <div className='w-100'>
            <h4>Guest 1:</h4>
            <div className='w-100'>
              <label htmlFor="name" className='w-50'>Name</label>
              <input type="text" id='name' name='name' placeholder='First and Last Name'/>
            </div>
          </div>
          <div className='w-100'>
            <h4>Meal Options:</h4>
            <div className='w-75 mx-2'>
              <div>
                <label htmlFor="steak" className='w-50'>Steak</label>
                <input type="radio" name='mealOption1' id='steak' value='steak'/>
              </div>
              <div>
                <label htmlFor="fish" className='w-50'>Fish</label>
                <input type="radio" name='mealOption1' id='fish' value='fish'/>
              </div>
              <div>
                <label htmlFor="vegetarian" className='w-50'>Vegetarian</label>
                <input type="radio" name='mealOption1' id='vegetarian' value='vegetarian'/>
              </div>
            </div>
            <div className='w-100'>
              <label htmlFor="allergies1" className='w-50'>Allergies</label>
              <input type="text" name="allergies" id="allergies1" placeholder='enter any allergies here' />
            </div>
            <h4>Guest 2:</h4>
            <div className='w-100'>
              <label htmlFor="name" className='w-50'>Name</label>
              <input type="text" id='name' name='name' placeholder='First and Last Name' />
            </div>
          </div>
          <div className='w-100'>
            <h4>Meal Options:</h4>
            <div className='w-75 mx-2'>
              <div>
                <label htmlFor="steak" className='w-50'>Steak</label>
                <input type="radio" name='mealOption2' id='steak' value='steak' />
              </div>
              <div>
                <label htmlFor="fish" className='w-50'>Fish</label>
                <input type="radio" name='mealOption2' id='fish' value='fish' />
              </div>
              <div>
                <label htmlFor="vegetarian" className='w-50'>Vegetarian</label>
                <input type="radio" name='mealOption2' id='vegetarian' value='vegetarian' />
              </div>
            </div>
            <div className='w-100'>
              <label htmlFor="allergies2" className='w-50'>Allergies</label>
              <input type="text" name="allergies" id="allergies2" placeholder='enter any allergies here' />
            </div>
          </div>
          <input type="submit" value='submit'/>
        </form>
      </div>
    );
  }

}
