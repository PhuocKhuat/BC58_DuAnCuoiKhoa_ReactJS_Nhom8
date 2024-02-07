// import React from "react";
// import PropTypes from "prop-types";

// InputFlied.propTypes = {
//   field: PropTypes.object.isRequired,
//   form: PropTypes.object.isRequired,

//   type: PropTypes.string,
//   label: PropTypes.string,
//   placeholder: PropTypes.string,
//   disabled: PropTypes.bool,
// };
// InputFlied.defaultProps = {
//   type: "text",
//   label: "",
//   placeholder: "",
//   disabled: false,
// };

// export default function InputFlied(props) {
//   const { field, type, label, placeholder } = props; //bóc ra từ PropTypes
//   //Bóc ra các trường liệu từ Field || copy để dưới.
//   return (
//     <div>
//       <div className="flex flex-col">
//         <label>{label}</label>
//         <input {...field} type={type} placeholder={placeholder} />
//       </div>
//     </div>
//   );
// }
