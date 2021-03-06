import React, { useState, Fragment, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";
import { Form, Icon, Input, Button, Checkbox } from "antd";
const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
}) => {
  const [formData, setFormData] = useState({
    company: "",
    location: "",
    status: "",
    skills: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: ""
  });

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      company: loading || !profile.company ? "" : profile.company,
      location: loading || !profile.location ? "" : profile.location,
      status: loading || !profile.status ? "" : profile.status,
      skills: loading || !profile.skills ? "" : profile.skills.join(","),
      bio: loading || !profile.bio ? "" : profile.bio,
      twitter: loading || !profile.twitter ? "" : profile.twitter,
      facebook: loading || !profile.facebook ? "" : profile.facebook,
      linkedin: loading || !profile.linkedin ? "" : profile.linkedin
    });
  }, [loading, getCurrentProfile]);
  const {
    company,
    location,
    status,
    skills,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <Fragment>
   
      <p className="lead">
       Let's get some information to make your
        profile stand out
      </p>

      <Form onSubmit={e => onSubmit(e)} className="login-form">
        <Form.Item>
          <Input
            type="text"
            placeholder="Status"
            name="status"
            value={status}
            onChange={e => onChange(e)}
            info="Give us an idea of where you are at in your career"
          />
        </Form.Item>

        <Form.Item>
          <Input
            type="text"
            placeholder="Company"
            name="company"
            value={company}
            onChange={e => onChange(e)}
            info="Could be your own company or one you work for"
          />
        </Form.Item>

        <Form.Item>
          <Input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={e => onChange(e)}
            info="City or city  state suggested (eg. Boston, MA)"
          />
        </Form.Item>

        <Form.Item>
          <Input
            type="text"
            placeholder="* Skills"
            name="skills"
            value={skills}
            onChange={e => onChange(e)}
            info="Please use comma separated values (eg.
                    HTML,CSS,JavaScript,PHP"
          />
        </Form.Item>

        <Form.Item>
          <Input
            placeholder="Short Bio"
            name="bio"
            value={bio}
            onChange={e => onChange(e)}
            info="Tell us a little about yourself"
          />
        </Form.Item>

        <Form.Item>
          <Input
            type="text"
            placeholder="Twitter"
            name="twitter"
            value={twitter}
            onChange={e => onChange(e)}
            info="City or city  state suggested (eg. Boston, MA)"
          />
        </Form.Item>

        <Form.Item>
          <Input
            type="text"
            placeholder="Facebook"
            name="facebook"
            value={facebook}
            onChange={e => onChange(e)}
            info="City or city  state suggested (eg. Boston, MA)"
          />
        </Form.Item>

        <Form.Item>
          <Input
            type="text"
            placeholder="Linkedin"
            name="linkedin"
            value={linkedin}
            onChange={e => onChange(e)}
            info="City or city  state suggested (eg. Boston, MA)"
          />
        </Form.Item>

        <Button type="primary" htmlType="submit" className="login-form-button">
          Edit
        </Button>
        <Button type="default" htmlType="submit" className="login-form-button">
          <Link to="/dashboard"> Go Back</Link>
        </Button>
      </Form>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
