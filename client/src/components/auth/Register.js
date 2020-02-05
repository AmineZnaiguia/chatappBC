import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import {Link, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'


import { Form, Icon, Input, Button, Checkbox } from 'antd';

const Register = ({setAlert, register, isAuthenticated}) => {
 const [formData, setFormData] = useState ({
    login: '', 
    password: "", 
    password2: "",
    email: ""
  });
  
  const {login, email, password, password2} = formData;

  const onChangeHandler = e =>{
    setFormData({...formData, [e.target.name]: e.target.value }
    );
  }
  const onSubmit = async e =>{
    e.preventDefault();
    if(password !== password2){
    setAlert('Passwords do not match', 'danger')
    } else {
     register({ login, email, password })
    
    }
  }
  // Redirect if logged in

  if(isAuthenticated){
    return<Redirect to="/dashboard" />
  }
    return (
      <Fragment className="container">
        <h1 className="large text-dark">Sign Up</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Create Your Account
        </p>


        <Form onSubmit={(e) => onSubmit(e)} className="login-form">

        <Form.Item>
          
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="LOGIN"
            name="login"
            value={login}
            onChange={e => onChangeHandler(e)}
          />
        
      </Form.Item>

        <Form.Item>
          
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="email"
              name="email"
              value={email}
              onChange={e => onChangeHandler(e)}
            />
          
        </Form.Item>

        <Form.Item>
          
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e => onChangeHandler(e)}
            />
          
        </Form.Item>

        <Form.Item>
          
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password2"
              name="password2"
              value={password2}
              onChange={e => onChangeHandler(e)}
            />
          
        </Form.Item>

        
        <Form.Item>
          <Checkbox>Remember me</Checkbox>
          
          <Button type="primary" htmlType="submit" className="login-form-button">
            Register
          </Button>
          Already have an account?  <Link to='login'>Sign In</Link>
        </Form.Item>
      </Form>

        {/* <form className="form" onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input type="text"
             placeholder="login"
             name="login"
             value={login}
             onChange={e => onChangeHandler(e)} />
          </div>
          <div className="form-group">
            <input type="email"
             placeholder="Email Address"
             name="email"
             value={email}
             onChange={e => onChangeHandler(e)} />
            <small className="form-text">
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e => onChangeHandler(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password2"
              value={password2}
              onChange={e => onChangeHandler(e)}
            />
          </div>
          <input type="submit" className="btn btn-dark" value="Register" />
        </form>
        <p className="my-1">
          Already have an account? 
          <Link to='login'>Sign In</Link>
        </p> */}
      </Fragment>
    );
  }


Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state =>({
  isAuthenticated: state.auth.isAuthenticated 
})
// const maDispatchToprops = {setAlert, register}
export default connect(mapStateToProps, {setAlert, register} )(Register);
  