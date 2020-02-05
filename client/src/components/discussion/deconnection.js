import React, { Component } from "react";
import styles from '../../discussion.module.css';

class Deconnection extends Component {
  render() {
    return (
      <div className={styles.category}>
        <div className={styles.icon}>
          <img alt="icons" src="/img/icons/home.svg" />
        </div>
        <h6>Deconnection</h6>
      </div>
    );
  }
}
export default Deconnection;
