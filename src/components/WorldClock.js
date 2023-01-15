import React, { Component } from 'react';
import FormClock from './FormClock';

export class WorldClock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityName: '',
      timeZone: '',
    };

    this.clocks = [];
    // this.timerId = undefined;
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState((prevState) => ({ ...prevState, [name]: value }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.clocks.push({ cityName: this.state.cityName, timeZone: this.state.timeZone})
    console.log(this.clocks);
    this.setState({ cityName: '', timeZone: '',})
  };

  // componentDidMount() {}

  // componentDidUpdate() {}

  // componentWillUnmount() {}

  render() {
    return (
      <>
        <FormClock state={this.state} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />

        {/* <form id='form' className='row form-city' onSubmit={this.handleSubmit}>
          <div className='col-4'>
            <label className='w-100' htmlFor='cityName'>
              Название
            </label>
            <Input
              type='text'
              value={this.state.cityName}
              onChange={this.handleChange}
              name='cityName'
              required
            />
          </div>

          <div className='col-4'>
            <label className='w-100' htmlFor='timeZone'>
              Временная зона
            </label>
            <Input
              type='number'
              step='1'
              value={this.state.timeZone}
              onChange={this.handleChange}
              name='timeZone'
              required
            />
          </div>

          <Button className='btn btn-primary col-3'>Добавить</Button>
        </form> */}

        {this.clocks.length === 0 ? null : <div>clock</div>}
      </>
    );
  }
}

export default WorldClock;
/*создать список часов и отрисовывать Clock */
