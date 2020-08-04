import React from "react";
import moment from "moment";

const Notifications = (props) => {
  const { notifications } = props;
  console.log(notifications);
  return (
    <div>
      <div className="section">
        <div className="card">
          <div className="card-content">
            <span className="card-title">
              <b>Notifications</b>
            </span>
            <ul className="notifications">
              {notifications &&
                notifications.map((item) => {
                  return (
                    <li key={item.id}>
                      <span className="pink-text">{item.user} 님의 </span>
                      <span>{item.content}</span>
                      <div className="grey-text note-date">
                        {moment(item.time.toDate()).fromNow()}
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
