import React from "react";
import styled from "styled-components";
import { Images } from "../assets/images/Images";
import { SVGs } from "../assets/svg/SVGs";

class SuperAdminForm extends React.Component {
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
          <img src={Images.img2} alt="Add img" />
        </div>
      );
    }
    return (
      <AdminProfileForm>
        <p>
          Manage your personal information, and control which information other
          people see and apps may access.
        </p>

        <div className="handleImgDisplay">
          <div className="preview_me">{$imagePreview}</div>
          <div className="inputplabel">
            <input
              type="file"
              id="imageChanger"
              onChange={(e) => this._handleImageChange(e)}
            />
            <div className="dummy_holder">
              <label htmlFor="imageChanger">
                <img src={SVGs.FrameImg} alt="" />

                <p>
                  <span>Click to replace</span> or drag and drop
                </p>
              </label>
            </div>
          </div>
        </div>

        <h5>Building Info</h5>
        <input
          type="text"
          placeholder="Building Name"
          defaultValue="Banna Island Estate"
        />
        <div className="residentid">
          <h4>Residence ID</h4>
          <p>#EDSVXBN</p>
        </div>

        {/* CHANGE ADMIN FORM INPUTS AND DATA */}
        <h5>Personal Bio</h5>
        <div className="double_lens">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="double_lens">
          <input type="text" placeholder="Nationality" />
          <input type="text" placeholder="Gender" />
        </div>

        <label htmlFor="DOB">
          Date of birth
          <input type="date" placeholder="First Name" />
        </label>
        <label htmlFor="DOB">
          Address
          <input type="text" placeholder="Estate Address" />
        </label>

        <div className="contactInfo">
          <h5>Contact Information</h5>

          <input type="text" placeholder="Email" />
          <input type="number" placeholder="Mobile" />
        </div>
        <div className="action-btn">
          <button type="submit" className="important-btn">
            Update
          </button>
        </div>
      </AdminProfileForm>
    );
  }
}
const AdminProfile = () => {
  return <SuperAdminForm />;
};

export default AdminProfile;

let AdminProfileForm = styled.form`
  max-width: 530px;
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
