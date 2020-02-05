import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Spinner from '../layout/spinner'
import { getAllProfiles } from '../../actions/profile'
import ProfileItem from './Profileitem'
const Profiles = ({getAllProfiles, profile : {profiles, loading}}) => {
    
    useEffect(()=>{
        getAllProfiles();
    }, [getAllProfiles]);
    
    return (
        <Fragment>
            {loading? <Spinner /> : <Fragment>
                <h1>Useres</h1>
                <p className='lead'> connect with Users</p>
                <div className='disp-card'>
                    {profiles.length >0 ? (
                      profiles.map(profile =>(
                          <ProfileItem key={profile._id} profile={profile}/>
                      ))
                    ): <h4>no profiles found</h4>}
                </div>
                </Fragment>}
        </Fragment>
    )
}

Profiles.propTypes = {
getProfiles: PropTypes.func.isRequired,
profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  profile: state.profile  
})

export default connect(mapStateToProps, {getAllProfiles}) (Profiles)
