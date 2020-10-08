import React from 'react';

export default class Rsvp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName1: '',
      lastName1: '',
      meal1: '',
      allergies1: '',
      firstName2: 'N/A',
      lastName2: 'N/A',
      meal2: 'N/A',
      allergies2: 'N/A',
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeRadio = this.handleChangeRadio.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendInfo = this.sendInfo.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleChangeRadio(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.sendInfo(this.state);
    this.setState({
      firstName1: '',
      lastName1: '',
      meal1: '',
      allergies1: '',
      firstName2: 'N/A',
      lastName2: 'N/A',
      meal2: 'N/A',
      allergies2: 'N/A',
      submitted: true
    });
  }

  sendInfo(guestInfo) {
    fetch('/api/rsvp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName1: guestInfo.firstName1,
        lastName1: guestInfo.lastName1,
        meal1: guestInfo.meal1,
        allergies1: guestInfo.allergies1,
        firstName2: guestInfo.firstName2,
        lastName2: guestInfo.lastName2,
        meal2: guestInfo.meal2,
        allergies2: guestInfo.allergies2
      })
    })
      .then(response => response.json());
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='d-flex flex-wrap justify-content-end p-1 border'>
          <div className='w-100'>
            <h4>Guest 1:</h4>
            <div className='w-100'>
              <label htmlFor="firstName1" className='w-50'>First Name</label>
              <input type="text" id='firstName1' name='firstName1' placeholder='First Name' onChange={this.handleChange} required/>
            </div>
            <div className='w-100'>
              <label htmlFor="lastName1" className='w-50'>Last Name</label>
              <input type="text" id='lastName1' name='lastName1' placeholder='Last Name' onChange={this.handleChange} required />
            </div>
          </div>
          <div className='w-100'>
            <h4>Meal Options:</h4>
            <div className='w-75 mx-2'>
              <div>
                <label htmlFor="steak" className='w-50'>Steak</label>
                <input type="radio" name='meal1' id='steak1' value='Steak' onChange={this.handleChangeRadio}/>
              </div>
              <div>
                <label htmlFor="fish" className='w-50'>Fish</label>
                <input type="radio" name='meal1' id='fish1' value='Fish' onChange={this.handleChangeRadio}/>
              </div>
              <div>
                <label htmlFor="vegetarian" className='w-50'>Vegetarian</label>
                <input type="radio" name='meal1' id='vegetarian1' value='Vegetarian' onChange={this.handleChangeRadio}/>
              </div>
            </div>
            <div className='w-100'>
              <label htmlFor="allergies1" className='w-50'>Allergies <br/>(if none, type none)</label>
              <input type="text" name="allergies" id="allergies1" placeholder='enter any allergies here' onChange={this.handleChange} required/>
            </div>
            <h4>Guest 2:</h4>
            <div className='w-100'>
              <label htmlFor="firstName2" className='w-50'>First Name</label>
              <input type="text" id='firstName2' name='firstName2' placeholder='First Name' onChange={this.handleChange} />
            </div>
            <div className='w-100'>
              <label htmlFor="lastName2" className='w-50'>Last Name</label>
              <input type="text" id='lastName2' name='lastName2' placeholder='Last Name' onChange={this.handleChange}/>
            </div>
          </div>
          <div className='w-100'>
            <h4>Meal Options:</h4>
            <div className='w-75 mx-2'>
              <div>
                <label htmlFor="steak" className='w-50'>Steak</label>
                <input type="radio" name='meal2' id='steak2' value='Steak' onChange={this.handleChangeRadio}/>
              </div>
              <div>
                <label htmlFor="fish" className='w-50'>Fish</label>
                <input type="radio" name='meal2' id='fish2' value='Fish' onChange={this.handleChangeRadio}/>
              </div>
              <div>
                <label htmlFor="vegetarian" className='w-50'>Vegetarian</label>
                <input type="radio" name='meal2' id='vegetarian2' value='Vegetarian' onChange={this.handleChangeRadio}/>
              </div>
            </div>
            <div className='w-100'>
              <label htmlFor="allergies2" className='w-50'>Allergies <br/>(if none, type none)</label>
              <input type="text" name="allergies" id="allergies2" placeholder='enter any allergies here' onChange={this.handleChange}/>
            </div>
          </div>
          <input type="submit" value='submit'/>
        </form>
      </div>
    );
  }

}
