import { useState } from "react";
import classnames from "classnames";

const Input = ({
  id,
  label,
  type,
  value,
  onInput,
  validators,
  className,
  placeHolder,
}) => {
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState(null);

  const validate = (value) => {
    for (const validator of validators) {
      const errorMessage = validator(value);
      if (errorMessage) return errorMessage;
    }
    return null;
  };

  const handleChange = (event) => {
    const val = event.target.value;
    const validationError = validate(val);
    setError(validationError);
    onInput(id, val, !validationError);
  };

  const defaultInputClasses =
    "w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white";
  const errorClasses = "border-red-500";

  const inputClasses = classnames({
    [className || defaultInputClasses]: true,
    [errorClasses]: error && touched && !className,
  });

  return (
    <div className="w-full">
      <label className="block text-gray-400 mb-2">{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeHolder}
        onBlur={() => setTouched(true)}
        className={inputClasses}
      />
      {error && touched && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
