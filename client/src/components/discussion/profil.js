import React, { Component } from 'react'
import styles from '../../discussion.module.css';


class Profil extends Component {
    render() {
        return (
            <div className={styles.category}>
            <div className={styles.icon}>
              <img alt="icons" src="/img/icons/inbox(1).svg"/>
            </div>
            <h6>Profil</h6>
       
         </div>
        )
    }
}
export default Profil