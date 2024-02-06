import React from "react";
import PropTypes from "prop-types";

InputFlied.propTypes = {
  flied: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};
InputFlied.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};

export default function InputFlied(props) {
  const { flied, type, placeholder } = props; //bóc ra từ PropTypes
//   const {name} = flied;
  //Bóc ra các trường liệu từ Flied || copy để dưới.
  return (
    <div className="flex flex-col">
      <label>Full Name:</label>
      <input {...flied} type={type} placeholder={placeholder} />
    </div>
  );
}
