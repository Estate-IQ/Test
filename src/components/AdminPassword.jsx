import React from "react";
import styled from "styled-components";

class AdminPasswordFormFunction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      mobile: "",
      emailId: "",
      estateEmail: "",
      state: "",
      file: "",
      imagePreviewUrl: "",
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidUpdate() {
    console.log("Final State: ", this.state.state);
  }
  handleSearch = (event) => {
    console.log(event);
    this.setState({
      state: event,
    });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} />;
    } else {
      $imagePreview = (
        <div className="previewText">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Add img"
          />
        </div>
      );
    }
    return (
      <AdminPasswordForm>
        <p>Please enter first your current password to change your password.</p>
        <input type="password" placeholder="Current Password" />
        <input type="password" placeholder="New Password" />
        <input type="password" placeholder="Confirm New Password" />

        <div className="action-btn">
          <button type="submit" className="important-btn">
            Change Password
          </button>
        </div>
      </AdminPasswordForm>
    );
  }
}
const AdminPassword = () => {
  return <AdminPasswordFormFunction />;
};

export default AdminPassword;

let AdminPasswordForm = styled.form`
  max-width: 530px;
  p {
    margin-bottom: 30px;
  }
  input {
    margin-bottom: 15px;
  }
`;
