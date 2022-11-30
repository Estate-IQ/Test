import React from "react";
import styled from "styled-components";

class AdminNotification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reminder: "",
      mentions: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleMention = this.handleMention.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      reminder: event.target.value,
    });
  }
  handleMention(event) {
    this.setState({
      mentions: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    alert(`You chose the ${this.state.reminder} pizza.`);
    alert(`You chose the ${this.state.mentions} pizza.`);
  }

  render() {
    return (
      <AdminNotificationForm onSubmit={this.handleSubmit}>
        <p>
          Get notification to find out what’s going even when you’re not online.
          You can turn them off anytime.
        </p>
        {/* NOTIFICATION */}
        <div className="notifcation_settings">
          <div className="ff-note">
            <h5>Notification</h5>
            <p>Receive the latest news and updates from us.</p>
          </div>
          <div className="ss-note">
            {/* News and Updates */}
            <div class="cntr" id="handleChecks">
              <label for="news" class="label-cbx">
                <input
                  id="news"
                  name="news"
                  type="checkbox"
                  class="invisible"
                />
                <div class="checkbox">
                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                    <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                    <polyline points="4 11 8 15 16 6"></polyline>
                  </svg>
                </div>
              </label>
              <span>News and Updates</span>
              <p>News about products and features updates.</p>
            </div>
            {/* Tips and Tutorials */}
            <div class="cntr" id="handleChecks">
              <label for="tips" class="label-cbx">
                <input
                  id="tips"
                  name="tips"
                  type="checkbox"
                  class="invisible"
                />
                <div class="checkbox">
                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                    <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                    <polyline points="4 11 8 15 16 6"></polyline>
                  </svg>
                </div>
              </label>
              <span>Tips and Tutorials</span>
              <p>Tips on getting more out of EstateIQ</p>
            </div>
            {/* User Research */}
            <div class="cntr" id="handleChecks">
              <label for="research" class="label-cbx">
                <input
                  id="research"
                  name="research"
                  type="checkbox"
                  class="invisible"
                />
                <div class="checkbox">
                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                    <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                    <polyline points="4 11 8 15 16 6"></polyline>
                  </svg>
                </div>
              </label>
              <span>User research</span>
              <p>
                Get involved in our beta testing program or participate in paid
                product user research.
              </p>
            </div>
          </div>
        </div>
        {/* REMINDERS */}
        <div className="notifcation_settings">
          <div className="ff-note">
            <h5>Notification</h5>
            <p>Receive the latest news and updates from us.</p>
          </div>
          <div className="ss-note">
            {/* I dont want notification */}
            <div class="radio-buttons">
              <div class="form-group">
                <input
                  type="radio"
                  id="never"
                  name="reminder"
                  value="never"
                  checked={this.state.reminder === "never"}
                  onChange={this.handleChange}
                />
                <label for="never">Do not notify me</label>
                <p></p>
              </div>

              <div class="form-group">
                <input
                  type="radio"
                  id="important"
                  name="reminder"
                  value="important"
                  checked={this.state.reminder === "important"}
                  onChange={this.handleChange}
                />
                <label for="important">Important reminders only</label>
                <p>Only notify me if the reminder is tagged as important.</p>
              </div>

              <div class="form-group">
                <input
                  type="radio"
                  id="other"
                  name="reminder"
                  value="all"
                  checked={this.state.reminder === "all"}
                  onChange={this.handleChange}
                />
                <label for="other">All reminders</label>
                <p>Notify me for all other activity.</p>
              </div>
            </div>
          </div>
        </div>
        {/* MENTIONS */}
        <div className="notifcation_settings">
          <div className="ff-note">
            <h5>Mentions</h5>
            <p>
              These are notifications to reminds you of updates you might have
              missed.
            </p>
          </div>
          <div className="ss-note">
            {/* I dont want notification */}
            <div class="radio-buttons">
              <div class="form-group">
                <input
                  type="radio"
                  id="NoMention"
                  name="mentions"
                  value="NoMention"
                  checked={this.state.mentions === "NoMention"}
                  onChange={this.handleMention}
                />
                <label for="NoMention">Do not notify me</label>
                <p></p>
              </div>

              <div class="form-group">
                <input
                  type="radio"
                  id="mentionsOnly"
                  value="mentionsOnly"
                  name="mentions"
                  checked={this.state.mentions === "mentionsOnly"}
                  onChange={this.handleMention}
                />
                <label for="mentionsOnly">Mentions Only</label>
                <p>Only notify me if i’m mentioned in a comment.</p>
              </div>

              <div class="form-group">
                <input
                  type="radio"
                  id="allMentions"
                  name="mentions"
                  value="allMentions"
                  checked={this.state.mentions === "allMentions"}
                  onChange={this.handleMention}
                />
                <label for="other">All Mentions</label>
                <p>Notify me for all comments.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="action-btn">
          <button type="submit" className="important-btn">
            Save Changes
          </button>
        </div>
      </AdminNotificationForm>
    );
  }
}
const AdminNotice = () => {
  return <AdminNotification />;
};

export default AdminNotice;

let AdminNotificationForm = styled.form`
  max-width: 678px;
  @media (min-width: 700px) {
    .notifcation_settings {
      display: flex;
      justify-content: space-between;
      .ff-note {
        width: 45%;
      }
      .ss-note {
        width: 50%;
        #handleChecks {
          margin-top: 0 !important;
          margin-bottom: 20px !important;
        }
      }
    }
  }
  p {
    max-width: 567px;
  }

  .notifcation_settings {
    margin: 30px 0;

    .ff-note {
      h5 {
        margin: 0;
        font-size: 20px;
        font-weight: 600;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
      }
    }
    .ss-note {
      #handleChecks {
        margin-top: 20px;

        span {
          font-size: 18px;
          font-weight: 500;
          line-height: 22px;
          letter-spacing: 0em;
          text-align: left;
        }
        p {
          margin: 0 auto;
          margin-left: 27px;
        }
      }
    }
  }

  .radio-buttons {
    .form-group {
      margin-bottom: 20px;
      margin-top: 10px;
      p {
        margin-left: 35px;
      }
    }
    input[type="radio"] {
      display: none;
    }

    label {
      cursor: pointer;
      position: relative;
      font-size: 18px;
      margin-left: 35px;
    }

    label::before {
      content: "";
      position: absolute;
      width: 20px;
      left: -35px;
      height: 20px;
      background-color: transparent;
      border: 1px solid #2d4bf3;
      border-radius: 50%;
      top: 50%;

      transform: translateY(-50%);
      transition: border-color 400ms ease;
    }

    label::after {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      left: -35px;
      background-color: #2d4bf3;
      border: 1px solid #2d4bf3;
      border-radius: 50%;
      top: 50%;

      transform: translateY(-50%) scale(0);
      transition: transform 400ms ease;
    }

    input[type="radio"]:checked + label::before {
      border-color: #2d4bf3;
    }

    input[type="radio"]:checked + label::after {
      transform: translateY(-50%) scale(0.55);
    }
  }
`;
