import React, {useEffect, Fragment} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../layout/spinner';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import DashboardAction from './dashboardAction'
import { Form, Icon, Input, Button, Checkbox } from 'antd'

const Dashboard = ({getCurrentProfile, deleteAccount, auth: { user}, profile: {profile, loading}}) => {
    useEffect(()=>{
        getCurrentProfile();
    },[getCurrentProfile]);
    return loading && profile === null ?<Spinner /> : 
    <Fragment>
        <h1>Welcome {user && user.login}</h1>
        {profile !== null?(
            <Fragment>
                <DashboardAction />

                <Button type="danger"
                 onClick={()=> deleteAccount()}> 
                 Delete My Account
                 </Button>
            </Fragment>
        ) :(
            <Fragment>
                <p>you have not a profile, add some info</p>
                <Button type="primary"><Link to='/create-profile'>
                    Create Profile
                </Link></Button>
            </Fragment>
        )
    }
    </Fragment>
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToprops = state =>({
    auth: state.auth,
    profile: state.profile
})
export default connect(mapStateToprops, {getCurrentProfile, deleteAccount}) (Dashboard)
