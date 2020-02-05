import React, { Component } from "react";
import { connect } from "react-redux";
import styles from '../../discussion.module.css';

class ChatTeams extends Component {
    render() {
        
        if (this.props.selectedUser){
          return (
          <div className={styles.groupbanner}>
            <div className={styles.members}>
              <h6>design team</h6>
              {this.props.selectedUser.map((el) => (
                <div className={styles.pic}>
                  
                  
                  <img src={ `/img/avatar/${el.image}.jpg` } alt=""/>
                  <span className={styles.statedot}></span>
                </div>
              ))}
         

            </div>
          </div> )
        }else{
              return ( null )
        }
    }
}

const mapStateToProps = state => {
  return {
    selectedUser: state.discussion.selectedUser
  };
};
export default connect(mapStateToProps, null)(ChatTeams);