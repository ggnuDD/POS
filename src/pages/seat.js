import React, { Component } from 'react';
import '../components/Seat/Seat.css';
import Seat from '../components/Seat/Seat';
                  
class SeatPicker extends Component {
  constructor(props){
    super(props);
    this.state = {seats: []};
  }

  componentDidMount(){
    this.setState({seats: [
      {row: 0, num: 0, avail: false},
      {row: 0, num: 1, avail: false},
      {row: 0, num: 2, avail: true},
      {row: 0, num: 3, avail: false},
      {row: 0, num: 4, avail: true},
      {row: 1, num: 0, avail: true},
      {row: 1, num: 1, avail: true},
      {row: 1, num: 2, avail: false},
      {row: 1, num: 3, avail: true},
      {row: 1, num: 4, avail: true},
      {row: 2, num: 0, avail: false},
      {row: 2, num: 1, avail: false},
      {row: 2, num: 2, avail: true},
      {row: 2, num: 3, avail: true},
      {row: 0, num: 0, avail: false},
      {row: 0, num: 1, avail: false},
      {row: 0, num: 2, avail: true},
      {row: 0, num: 3, avail: false},
      {row: 0, num: 4, avail: true},
      {row: 1, num: 0, avail: true},
      {row: 1, num: 1, avail: true},
      {row: 1, num: 2, avail: false},
      {row: 1, num: 3, avail: true},
      {row: 1, num: 4, avail: true},
      {row: 2, num: 0, avail: false},
      {row: 2, num: 1, avail: false},
      {row: 2, num: 2, avail: true},
      {row: 2, num: 3, avail: true},
      {row: 2, num: 4, avail: true}
    ]}, () => console.log(this.state.seats));
  }
  render() {
    let seats = new Array(10);
    for(let i = 0; i < seats.length; i++ ){
      seats[i] = new Array(12);
    }

    if (this.state.seats) {
      this.state.seats.forEach(seat => {
        seats[seat.row][seat.num] = <Seat row = {seat.row} num = {seat.num}
        avail = {seat.avail} key = {seat.row + seat.num} />
      });
    } 
    return (
      <div>
        <div className="Row1">
          {seats[0]}
        </div>
        <div className="Row2">
          {seats[1]}
        </div>
        <div className="Row3">
          {seats[2]}
        </div>
        <div className="Row4">
          {seats[2]}
        </div>
        <div className="Row5">
          {seats[2]}
        </div>
        <div className="Row6">
          {seats[2]}
        </div>
        <div className="Row7">
          {seats[2]}
        </div>
      </div>
    );
  }
}

export default SeatPicker;
