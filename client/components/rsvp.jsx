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
      submitted: false,
      plusOne: false,
      attending: 'true'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeRadio = this.handleChangeRadio.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendInfo = this.sendInfo.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
      submitted: true,
      attending: 'true'
    });
  }

  closeModal(event) {
    event.preventDefault();
    this.setState({
      submitted: false
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
        allergies2: guestInfo.allergies2,
        attending: guestInfo.attending
      })
    })
      .then(response => response.json());
  }

  render() {
    return (
      <div className='w-100 d-flex justify-content-center'>
        {this.state.submitted
          ? <div className='rsvpModal cursive d-flex flex-wrap justify-content-between p-1'>
            <div className='w-100 d-flex justify-content-end'>
              <i className="fas fa-window-close" onClick={this.closeModal}></i>
            </div>
            <div className='w-100 text-center'>
              <h1>
                  Thank you for RSVPing
              </h1>
            </div>
            <div className='w-100 text-center'>
              <h2>
                  The wedding is formal attire:
              </h2>
              <h3>
                <strong>
                  Slacks and a button up shirt &#40;tie is optional&#41;, dresses, jumpsuits, or rompers.
                </strong>
              </h3>
              <h4 className='clearText'>
                <strong>
                    The ceremony will begin at 4pm <em>SHARP</em>, please plan on being there a little early and account for traffic.
                </strong>
              </h4>
              <h4 className='clearText'>
                <strong>
                    The shuttle will stop taking people from the parking lot to the venue at 3:30.
                </strong>
              </h4>
            </div>
          </div>
          : <div className="rsvpForm">

            <div className="row justify-content-around">
              <div className="p-2">
                <h2 className="fredoka">
                    Can you make it?
                </h2>
              </div>
              <div className="p-2">
                <div>
                  <input type="radio" id="yes" name="attending" value="true" onChange={this.handleChangeRadio} /> Yes
                </div>
                <div>
                  <input type="radio" id="no" name="attending" value="false" onChange={this.handleChangeRadio} /> No
                </div>
              </div>
            </div>

            {this.state.attending === 'true'
              ? <form onSubmit={this.handleSubmit} className='d-flex flex-wrap justify-content-end rsvpBorder p-1'>
                <div className='my-1 w-100'>
                  <div className='w-100'>
                    <h4 className="fredoka">Guest 1:</h4>
                    <div className='w-100 d-flex flex-row justify-content-around'>
                      <div className='w-50 mx-0'>
                        <label htmlFor="firstName1" className='lobster'>First Name</label>
                      </div>
                      <div className='w-25 mx-0'>
                        <input className='w-100' type="text" id='firstName1' name='firstName1' placeholder='First Name' onChange={this.handleChange} required />
                      </div>
                    </div>
                    <div className='w-100 d-flex flex-row justify-content-around'>
                      <div className='w-50'>
                        <label htmlFor="lastName1" className='lobster w-50'>Last Name</label>
                      </div>
                      <div className='w-25 mx-0'>
                        <input className='w-100' type="text" id='lastName1' name='lastName1' placeholder='Last Name' onChange={this.handleChange} required />
                      </div>
                    </div>
                  </div>
                  <div className='w-100'>
                    <h4 className="fredoka">Meal Options:</h4>
                    <div className='w-100'>
                      <div className='w-100 d-flex flex-row justify-content-around'>
                        <div className='w-50'>
                          <label htmlFor="steak" className='lobster'>Bacon Wrapped Filet</label>
                        </div>
                        <div className='w-25'>
                          <input type="radio" name='meal1' id='steak1' value='Bacon Wrapped Filet' onChange={this.handleChangeRadio} required />
                        </div>
                      </div>
                      <div className='w-100 d-flex flex-row justify-content-around'>
                        <div className='w-50'>
                          <label htmlFor="fish" className='lobster w-50'>Crab Encrusted Sea Bass</label>
                        </div>
                        <div className='w-25'>
                          <input type="radio" name='meal1' id='fish1' value='Crab Encrusted Sea Bass' onChange={this.handleChangeRadio} />
                        </div>
                      </div>
                      <div className='w-100 d-flex flex-row justify-content-around'>
                        <div className='w-50'>
                          <label htmlFor="vegetarian" className='lobster w-50'>Grilled Portabella Mushroom and Vegetable Wellington</label>
                        </div>
                        <div className='w-25'>
                          <input type="radio" name='meal1' id='vegetarian1' value='Grilled Portobello Mushroom and Vegetable Wellington' onChange={this.handleChangeRadio} />
                        </div>
                      </div>
                    </div>
                    <div className='w-100'>
                      <div className='w-100 d-flex flex-row justify-content-around'>
                        <div className='w-50'>
                          <label htmlFor="allergies1" className='lobster'>Allergies <br />(if none, type none)</label>
                        </div>
                        <div className='w-25'>
                          <input className='w-100' type="text" name="allergies" id="allergies1" placeholder='Allergies' onChange={this.handleChange} required />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-100'>
                  <h4 className='fredoka'>Plus One?</h4>
                  <div className='w-100'>
                    <div className='w-100 d-flex flex-row justify-content-around'>
                      <div className='w-50'>
                        <label htmlFor="plusOneYes" className='lobster'>Yes</label>
                      </div>
                      <div className='w-25'>
                        <input type="radio" name="plusOne" id="plusOneYes" value={true} onChange={this.handleChangeRadio} />
                      </div>
                    </div>
                    <div className='w-100 d-flex flex-row justify-content-around'>
                      <div className='w-50'>
                        <label htmlFor="plusOneNo" className='lobster w-50'>No</label>
                      </div>
                      <div className='w-25'>
                        <input type="radio" name="plusOne" id="plusOneNo" value={false} onChange={this.handleChangeRadio} />
                      </div>
                    </div>
                  </div>
                </div>
                {this.state.plusOne === 'true'
                  ? <div className='my-1 w-100'>
                    <div className='w-100'>
                      <h4 className="fredoka">Guest 2:</h4>
                      <div className='w-100 d-flex flex-row justify-content-around'>
                        <div className='w-50'>
                          <label htmlFor="firstName2" className='lobster'>First Name</label>
                        </div>
                        <div className='w-25'>
                          <input className='w-100' type="text" id='firstName2' name='firstName2' placeholder='First Name' onChange={this.handleChange} required />
                        </div>
                      </div>
                      <div className='w-100 d-flex flex-row justify-content-around'>
                        <div className='w-50'>
                          <label htmlFor="lastName2" className='lobster w-50'>Last Name</label>
                        </div>
                        <div className='w-25'>
                          <input className='w-100' type="text" id='lastName2' name='lastName2' placeholder='Last Name' onChange={this.handleChange} required />
                        </div>
                      </div>
                    </div>
                    <div className='w-100'>
                      <h4 className="fredoka">Meal Options:</h4>
                      <div className='w-100'>
                        <div className='w-100 d-flex flex-row justify-content-around'>
                          <div className='w-50'>
                            <label htmlFor="steak" className='lobster'>Bacon Wrapped Filet</label>
                          </div>
                          <div className='w-25'>
                            <input type="radio" name='meal2' id='steak2' value='Bacon Wrapped Filet' onChange={this.handleChangeRadio} required />
                          </div>
                        </div>
                        <div className='w-100 d-flex flex-row justify-content-around'>
                          <div className='w-50'>
                            <label htmlFor="fish" className='lobster w-50'>Crab Encrusted Sea Bass</label>
                          </div>
                          <div className='w-25'>
                            <input type="radio" name='meal2' id='fish2' value='Crab Encrusted Sea Bass' onChange={this.handleChangeRadio} />
                          </div>
                        </div>
                        <div className='w-100 d-flex flex-row justify-content-around'>
                          <div className='w-50'>
                            <label htmlFor="vegetarian" className='lobster w-50'>Grilled Portabella Mushroom and Vegetable Wellington</label>
                          </div>
                          <div className='w-25'>
                            <input type="radio" name='meal2' id='2' value='Grilled Portobello Mushroom and Vegetable Wellington' onChange={this.handleChangeRadio} />
                          </div>
                        </div>
                      </div>
                      <div className='w-100'>
                        <div className='w-100 d-flex flex-row justify-content-around'>
                          <div className='w-50'>
                            <label htmlFor="allergies2" className='lobster'>Allergies <br />(if none, type none)</label>
                          </div>
                          <div className='w-25'>
                            <input className='w-100' type="text" name="allergies" id="allergies2" placeholder='Allergies' onChange={this.handleChange} required />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  : null
                }
                <input type="submit" value='RSVP' className='rsvpButton lobster' />
              </form>
              : <form onSubmit={this.handleSubmit} className='d-flex flex-wrap justify-content-end rsvpBorder p-1'>
                <div className='w-100'>
                  <h4 className="fredoka">Guest 1:</h4>
                  <div className='w-100 d-flex flex-row justify-content-around'>
                    <div className='w-50'>
                      <label htmlFor="firstName2" className='lobster'>First Name</label>
                    </div>
                    <div className='w-25'>
                      <input className='w-100' type="text" id='firstName1' name='firstName1' placeholder='First Name' onChange={this.handleChange} required />
                    </div>
                  </div>
                  <div className='w-100 d-flex flex-row justify-content-around'>
                    <div className='w-50'>
                      <label htmlFor="lastName2" className='lobster w-50'>Last Name</label>
                    </div>
                    <div className='w-25'>
                      <input className='w-100' type="text" id='lastName1' name='lastName1' placeholder='Last Name' onChange={this.handleChange} required />
                    </div>
                  </div>
                </div>
                <input type="submit" value='RSVP' className='rsvpButton lobster' />
              </form>
            }

          </div>
        }
      </div>
    );
  }
}
