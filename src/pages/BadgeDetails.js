import React from "react";
import { Link } from "react-router-dom";
import confLogo from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal";

function useIncreaseCount(max) {
  const [count, setCount] = React.useState(0);
  if (count > max) setCount(0);
  return [count, setCount];
}

export default function BadgeDetails(props) {
  const [count, setCount] = useIncreaseCount(4);
  const { firstName, lastName, email, jobTitle, twitter, id } = props.data;

  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={confLogo} alt="Logo de la conferencia" />
            </div>
            <div className="col BadgeDetails__hero-attendant-name">
              <h1>
                {firstName} {lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-3">
        <div className="row">
          <div className="col">
            <Badge
              firstName={firstName}
              lastName={lastName}
              twitter={twitter}
              jobTitle={jobTitle}
              email={email}
            />
          </div>
          <div className="col d-flex align-items-center flex-column">
            <h2 className="mb-4">Actions</h2>
            <div>
              <button
                onClick={() => {
                  setCount(count + 1);
                }}
                className="btn btn-primary mx-2"
              >
                Increase Count: {count}
              </button>
              <Link className="btn btn-primary mb-3" to={`/badges/${id}/edit`}>
                Edit
              </Link>
            </div>
            <div>
              <button onClick={props.onOpenModal} className="btn btn-danger">
                Delete
              </button>
            </div>
            <DeleteBadgeModal
              onClose={props.onCloseModal}
              isOpen={props.modalIsOpen}
              onDeleteBadge={props.onDeleteBadge}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
