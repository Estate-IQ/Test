import React from "react";
import styled from "styled-components";

class AdminEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate() {
    console.log("Final State: ", this.state.state);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <AdminProfileForm>
        <p>Your current email is info@estateiq.com</p>
        <input type="email" placeholder="Email" />
        <h5>Email notification</h5>
        <p>
          To manage what email you get, Visit the
          <span> Notification tab.</span>
        </p>

        <div className="action-btn">
          <button type="submit" className="important-btn">
            Update Email
          </button>
        </div>
      </AdminProfileForm>
    );
  }
}
const AdminProfile = () => {
  return <AdminEmail />;
};

export default AdminProfile;

let AdminProfileForm = styled.form`
  max-width: 530px;
  span {
    color: #2d4bf3;
  }
  button {
    margin-bottom: 50px;
  }
  @media (min-width: 600px) {
    .double_lens {
      display: flex;
      justify-content: space-between;
      input {
        width: 48.5%;
      }
    }
  }
  h5 {
    margin-bottom: 10px;
    margin-top: 30px;
  }
  input {
    margin-bottom: 15px;
    margin-top: 5px;
  }
  .residentid {
    margin: 15px 0;
    h4 {
      font-size: 16px;
      font-weight: 500;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;
      margin: 0;
    }
    p {
      font-weight: 400;
      font-size: 14px;
      display: flex;
      margin: 0;
      align-items: center;
      color: #2d4bf3;
    }
  }
  .handleImgDisplay {
    @media (min-width: 700px) {
      display: flex;
      justify-content: space-between;
      .inputplabel {
        width: 65%;
      }
      .dummy_holder {
        background: #f2f6ff;

        border: 1.5px dashed rgba(44, 51, 58, 0.15);
        border-radius: 5px;
        text-align: center;
        p {
          text-align: center;
          width: 60%;
        }
      }
    }

    margin: 30px 0;
    input {
      display: none;
    }
    .preview_me {
      width: 140px;
      height: 140px;
      position: static;
      background: #f3f3f3;
      border-radius: 50%;
      margin-bottom: 30px;

      img {
        width: 140px;
        height: 140px;
        border-radius: 50%;
        position: static;
        object-fit: cover;
      }
    }
    .dummy_holder {
      padding: 20px;
      background: #f2f6ff;
      border: 1.5px dashed rgba(44, 51, 58, 0.15);
      border-radius: 5px;
      text-align: center;
      img {
        width: 40px;
        height: 40px;
      }
      p {
        text-align: center;
        font-size: 18px;
        margin: 0 auto;
        span {
          cursor: pointer;
          font-size: 18px;
          color: #2d4bf3;
        }
      }
    }
  }
`;
