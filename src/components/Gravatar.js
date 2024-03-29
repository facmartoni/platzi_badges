import React from "react";
import md5 from "md5";

export default function Gravatar(props) {
  const email = props.email;
  const hash = md5(email);
  return (
    <img
      className={props.className}
      src={`https://gravatar.com/avatar/${hash}?d=identicon`}
      alt="Avatar"
    />
  );
}
