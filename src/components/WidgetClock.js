import React, { Component } from 'react'
import moment from 'moment/moment';
import Button from './generic/Button';

export class WidgetClock extends Component {
  constructor(props) {
    super(props);

    this.id = props.id;
    this.cityName = props.cityName;
    this.timeZone = props.timeZone;
    this.hendleRemove = props.hendleRemove;

    this.state = { date: moment().utcOffset(this.timeZone).format('LTS') };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: moment().utcOffset(this.timeZone).format('LTS'),
    });
  }

  render() {
    return (
      <>
        <h3>{this.cityName}</h3>

        <span className='fs-1 d-block'>{this.state.date}</span>

        <Button
          className='btn btn-danger'
          onClick={() => this.hendleRemove(this.id)}>
          Удалить
        </Button>
      </>
    );
  }
}

export default WidgetClock;