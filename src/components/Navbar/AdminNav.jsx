import React, { useState } from "react";
import { SVGs } from "../../assets/svg/SVGs";
import { Images } from "../../assets/images/Images";
import styled from "styled-components";

let Notification = styled.div`
  position: relative;
  display: none;
  .n_badge {
    position: absolute;
    background-color: #ffffff;
    border: 1px solid #f3f3f3;
    right: 0;
    top: 56px;
    width: 360px;

    border-radius: 8px;
    .all_notification {
      height: 360px;
      overflow: auto;
      padding: 10px 15px;
      .each_noti {
        padding: 10px 5px;
        border-bottom: 1px solid rgba(33, 33, 33, 0.15);
        padding-left: 60px;
        cursor: pointer;
        &:hover {
          background-color: #f3f3f3;
        }
        p {
          margin: 0;
        }
        h4 {
          font-size: 18px;
          font-weight: 700;
          line-height: 21px;
          letter-spacing: -0.03em;
          text-align: left;

          span {
            color: #2d4bf3;
            font-size: 16px;
            font-weight: 500;
            line-height: 16px;
            letter-spacing: -0.06em;
            text-align: left;
            margin-left: 8px;
            &:before {
              content: "";
              display: inline-block;
              width: 7px;
              height: 7px;
              border-radius: 50%;
              margin-right: 5px;
              background: #2d4bf3;
            }
          }
        }
      }
    }
    h2 {
      font-size: 18px;
      font-weight: 700;
      line-height: 24px;
      text-align: center !important;
      letter-spacing: 0em;
      padding: 12px;
      margin: 0 !important;
      background-color: #ffffff;
      box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.05),
        0px 2px 8px rgba(0, 0, 0, 0.05);
      border-radius: 8px 8px 0px 0px;
      text-align: left;
    }
    &:after {
      content: "";
      display: inline-block;
      width: 20px;
      background: #ffffff;
      height: 20px;
      border-radius: 3px;
      transform: rotate(45deg);
      top: -10px;
      position: absolute;
      right: 25px;
    }
  }
`;

const TopNav = () => {
  const [notify, setNotification] = useState("notification");

  const handleNotification = () => {
    notify === "notification"
      ? setNotification("notification active")
      : setNotification("notification");
  };

  return (
    <div className="navbar_container">
      <div className="dashboard_container input_avatar">
        <h6></h6>
        <div className="violet">
          <img
            src={SVGs.notification}
            alt="Bell"
            onClick={handleNotification}
            className="note_bell"
          />
          <Notification className={notify} id="swing-in-top-fwd">
            <div className="n_badge">
              <h2>Notification</h2>
              <div className="all_notification">
                {API.map((item) => {
                  return (
                    <div
                      className="each_noti"
                      id={
                        item.types === "Message"
                          ? "messagesBg"
                          : "Alert"
                          ? "alertBg"
                          : "messagesBg"
                      }
                      key={item.id}
                    >
                      <p>{item.types}</p>
                      <h4>
                        {item.estate}
                        <span>{item.msg_id}</span>
                      </h4>
                    </div>
                  );
                })}
              </div>
            </div>
          </Notification>
          <div className="user_mode">
            <div>
              <h3>Olaitan Oludare</h3>
              <p>Admin</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;

let API = [
  {
    id: 1,
    types: "Alert",
    estate: "Dolphin Estate",
    msg_id: "KIP403435",
  },
  {
    id: 2,
    types: "Message",
    estate: "Dolphin Estate",
    msg_id: "KIP403435",
  },
  {
    id: 3,
    types: "Advert",
    estate: "Golden Gate Estate",
    msg_id: "EIQ403432",
  },
  {
    id: 4,
    types: "Reminder",
    estate: "Golden Gate Estate",
    msg_id: "MIW405432",
  },
  {
    id: 5,
    types: "Alert",
    estate: "Banana Island",
    msg_id: "EIQ403432",
  },
];
