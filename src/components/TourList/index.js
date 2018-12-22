import React, { Component } from "react";
import "./TourList.scss";
import Tour from "../Tours/Tour";
import { tourData } from "./tourData";

class TourList extends Component {
  state = {
    tours: tourData
  };

  render() {
    const { tours } = this.state;
    return (
      <section className="tourlist">
        {tours.map(tour => {
          return <Tour key={tour.id} tour={tour} />;
        })}
      </section>
    );
  }
}

export default TourList;
