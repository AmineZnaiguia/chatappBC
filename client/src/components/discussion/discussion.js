import React, { Component } from 'react'

import Profil from '../discussion/profil'
import Deconnection from '../discussion/deconnection'
import Contact from '../discussion/contact'
import ChatTeams from "../discussion/chatTeams"
import ChatBox from "../discussion/chatBox"
import MessageInput from "../discussion/messageInput"

import styles from '../../discussion.module.css';

class discussion extends Component {

    render() {
        const {user} = this.props.match.params

        return (
          <div className={styles.dashboard}>
            <div className={styles.row}>
              
               <div className={`col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 ${styles.menu}`}>
                <div className={styles.basic}>
                  <div className={styles.msgs}>
                    <h6>
                      <img alt="icons" src="/img/icons/speech-bubble.svg" />
                      messages
                  </h6>
                  <div className={styles.msgsqaure}>
                      <Profil />
                      <Deconnection />
                    </div>
                  </div>
                  <div className={styles.contacts}>
                      <div className={styles.people}>
                        <h6>contacts(22)</h6>
                        <Contact currentUser={user}/>
                      </div>
                      <button>
                        see all
                    </button>
                    </div>
                </div>
      
              </div> 
              <div className={`col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 ${styles.chat}`}>
                  <ChatTeams currentUser={user}/>
                  <div className={styles.chatbox}>
                    <ChatBox currentUser={user}/>
                  </div>
                  <MessageInput currentUser={user}/>
                </div>
            </div>
            
          </div>
        );
      }
}

export default discussion
