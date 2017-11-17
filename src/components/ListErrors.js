import React from "react";

const ListErrors = ({ errors }) => {
  if (errors) {
    return (
      <ul className="error-messages">
        {Object.keys(errors).map(key => {
          return (
            <li key={key} style={{ listStyle: "none" }}>
              {key} {errors[key]}
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
};

export default ListErrors;
