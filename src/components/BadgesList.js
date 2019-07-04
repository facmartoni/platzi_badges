import React, { Component } from "react";
import "./styles/BadgesList.css";
import twitterLogo from "../images/twitter.png";

export default class BadgesList extends Component {
  render() {
    return (
      <div className="container">
        <ul className="BadgesList list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id} className="BadgesList__item">
                <div className="BadgesList__avatar">
                  <img src={badge.avatarUrl} alt="Gravatar Icon" />
                </div>
                <div className="BadgesList__text">
                  <p className="BadgesList__name font-weight-bold">
                    {badge.firstName} {badge.lastName}
                  </p>
                  <div className="BadgesList__twitter">
                    <img src={twitterLogo} alt="Twitter Logo" />
                    <a href={"https://twitter.com/" + badge.twitter}>
                      {badge.twitter}
                    </a>
                  </div>
                  <p className="BadgesList_job">{badge.jobTitle}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
