import { useState } from "react";
import classnames from "classnames";

const Textarea = ({
  id,
  label,
  value,
  onInput,
  validators,
  className,
  placeHolder,
  rows = 5,
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

  const defaultTextareaClasses =
    "w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white resize-none";
  const errorClasses = "border-red-500";

  const textareaClasses = classnames({
    [className || defaultTextareaClasses]: true,
    [errorClasses]: error && touched && !className,
  });

  return (
    <div className="w-full">
      <label className="block text-gray-400 mb-2">{label}</label>
      <textarea
        id={id}
        value={value}
        onChange={handleChange}
        placeholder={placeHolder}
        onBlur={() => setTouched(true)}
        className={textareaClasses}
        rows={rows}
      />
      {error && touched && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Textarea;
