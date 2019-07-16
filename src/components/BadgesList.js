import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/BadgesList.css";
import twitterLogo from "../images/twitter.png";

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setFilteredBadges(result);
  }, [badges, query]);

  return { setQuery, filteredBadges, query };
}

export default function BadgesList(props) {
  const { query, setQuery, filteredBadges } = useSearchBadges(props.badges);

  if (filteredBadges.length === 0) {
    return (
      <div className="text-center mt-4">
        <div className="form-group">
          <label htmlFor="">Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No badges were found :(</h3>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="form-group">
        <label htmlFor="">Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="BadgesList list-unstyled">
        {filteredBadges.map(badge => {
          return (
            <Link
              className="text-reset text-decoration-none"
              to={`/badges/${badge.id}`}
            >
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
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
