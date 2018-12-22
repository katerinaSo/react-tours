import React, { Component } from "react";
import "./TourList.scss";
import Tour from "../Tours/Tour";
import { tourData } from "./tourData";

class TourList extends Component {
  state = {
    tours: tourData
  };
  removeTour = id => {
    const { tours } = this.state;
    const filteredTours = tours.filter(item => item.id !== id);
    this.setState({ tours: filteredTours });
  };

  render() {
    const { tours } = this.state;
    return (
      <section className="tourlist">
        {tours.map(tour => {
          return (
            <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
          );
        })}
      </section>
    );
  }
}

export default TourList;
