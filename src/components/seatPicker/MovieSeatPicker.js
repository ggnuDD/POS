import React, { Component } from "react";
import SeatPicker from "react-seat-picker";
import "./Movie.css";

export default class App extends Component {
  // addSeatCallback = ({ row, number, id }, addCb) => {
  //   this.props.setSelected((prevItems) => [...prevItems, [row,number]]);
  //   const newTooltip = `tooltip for id-${id} at row-${row} added by callback`;
  //   addCb(row, number, id, newTooltip);
  // };

  // removeSeatCallback = ({ row, number, id }, removeCb) => {
  //   this.props.setSelected((list) => list.filter((item) => item !==  [row, number]));
  //   const newTooltip = ['A', 'B', 'C'].includes(row) ? null : ''
  //   removeCb(row, number, id, newTooltip);
  // };

  addSeatCallback = ({ row, number, id }, addCb) => {
    this.setState({
      loading: true
    }, async () => {
      await new Promise(resolve => setTimeout(resolve, 100))
      this.props.setSelected((prevItems) => [...prevItems, [row,number]]);
      console.log(`Added seat ${number}, row ${row}, id ${id}`)
      const newTooltip = `tooltip for id-${id} added by callback`
      addCb(row, number, id, newTooltip)
      this.setState({ loading: false })
    })
  };
  removeSeatCallback = ({ row, number, id }, removeCb) => {
    this.setState({
      loading: true
    }, async () => {
      await new Promise(resolve => setTimeout(resolve, 100))
      this.props.setSelected((list) => list.filter((item) => item !==  [row, number]));
      console.log(`Removed seat ${number}, row ${row}, id ${id}`)
      // A value of null will reset the tooltip to the original while '' will hide the tooltip
      const newTooltip = ['A', 'B', 'C'].includes(row) ? null : ''
      removeCb(row, number, newTooltip)
      this.setState({ loading: false })
    })
  };

  render() {
    const rows = [
      [
        { id: 1, number: 1 },
        { id: 2, number: 2 },
        { id: 3, number: 3 },
        { id: 4, number: 4 },
        null,
        { id: 5, number: 5 },
        { id: 6, number: 6 },
        { id: 7, number: 7 },
        { id: 8, number: 8 },
        { id: 9, number: 9, isReserved: true }
      ],
      [
        { id: 11, number: 1 },
        { id: 12, number: 2 },
        { id: 13, number: 3, isReserved: true },
        { id: 14, number: 4 },
        null,
        { id: 15, number: 5 },
        { id: 16, number: 6 },
        { id: 17, number: 7 },
        { id: 18, number: 8 },
        { id: 19, number: 9 }
      ],
      [
        { id: 21, number: 1 },
        { id: 22, number: 2 },
        { id: 23, number: 3 },
        { id: 24, number: 4 },
        null,
        { id: 25, number: 5 },
        { id: 26, number: 6 },
        { id: 27, number: 7, isReserved: true },
        { id: 28, number: 8 },
        { id: 29, number: 9, isReserved: true  },
      ],
      [
        { id: 30, number: 1 },
        { id: 31, number: 2 },
        { id: 34, number: 3 },
        { id: 24, number: 4 },
        null,
        { id: 35, number: 5 },
        { id: 36, number: 6, isReserved: true  },
        { id: 37, number: 7, isReserved: true },
        { id: 38, number: 8 },
        { id: 39, number: 9 },
        null,
        { id: 40, number: 10 },
        { id: 41, number: 11 },
        { id: 42, number: 12 }
      ],
      [
        { id: 44, number: 1 },
        { id: 45, number: 2 },
        { id: 46, number: 3 },
        { id: 47, number: 4 },
        null,
        { id: 48, number: 5 },
        { id: 49, number: 6 },
        { id: 50, number: 7, isReserved: true },
        { id: 51, number: 8 },
        { id: 52, number: 9 },
        null,
        { id: 53, number: 10 },
        { id: 54, number: 11 },
        { id: 55, number: 12 }
      ]
    ];
    return (
      <div className="App">
        <SeatPicker
          addSeatCallback={this.addSeatCallback.bind(this)}
          removeSeatCallback={this.removeSeatCallback.bind(this)}
          rows={rows}
          alpha
          maxReservableSeats={10}
          visible
        />
      </div>
    );
  }
}