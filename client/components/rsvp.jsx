import React from 'react';

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
        <form action="">
          <label htmlFor="name">Name:</label>
          <input type="text" id='name' name='name' placeholder='First and Last Name'/>
          <label htmlFor="plusOne">Plus One:</label>
          <input type="radio" id='plusOne' name='plusOne' value='yes'/>
          <input type="radio" id='plusOne' name='plusOne' value='no'/>
          <input type="text" id='plusOneName' name='plusOneName' placeholder='First and Last Name of Guest'/>
          <label htmlFor="mealOptions">Meal Options:</label>
          <ol>
            <li>Steak</li>
            <li>Fish</li>
            <li>Vegetarian</li>
          </ol>
          <input type="text" id='mealOptions' name='mealOptions' placeholder="enter meals here(if you have a plus one and don't enter two meals it will be assumed you both want the same meal)"/>
          <input type="submit" value='submit'/>
        </form>
      </div>
    );
  }

}
