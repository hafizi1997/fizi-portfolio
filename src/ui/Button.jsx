import PropTypes from "prop-types";
import classNames from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  href,
  ...rest
}) {
  const classes = classNames(
    rest.className,
    "flex items-center px-3 py-1.5 border",
    {
      "px-6 py-3 rounded-lg bg-gradient-to-r from-[#0080ff] to-[#9333ea] text-white font-medium hover:shadow-lg hover:shadow-[#0080ff]/20 transition-all duration-300 transform hover:-translate-y-1":
        primary,
      "px-6 py-3 rounded-lg bg-gradient-to-r from-gray-500 to-gray-700 text-white font-medium hover:shadow-lg hover:shadow-gray-500/20 transition-all duration-300 transform hover:-translate-y-1":
        secondary,
      "px-6 py-3 rounded-lg bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white font-medium hover:shadow-lg hover:shadow-[#22c55e]/20 transition-all duration-300 transform hover:-translate-y-1":
        success,
      "px-6 py-3 rounded-lg bg-gradient-to-r from-[#facc15] to-[#eab308] text-black font-medium hover:shadow-lg hover:shadow-[#facc15]/20 transition-all duration-300 transform hover:-translate-y-1":
        warning,
      "px-6 py-3 rounded-lg bg-gradient-to-r from-[#ef4444] to-[#dc2626] text-white font-medium hover:shadow-lg hover:shadow-[#ef4444]/20 transition-all duration-300 transform hover:-translate-y-1":
        danger,
      "rounded-full": rounded,
      "px-6 py-3 rounded-lg bg-[#111122] text-white font-medium border border-[#f8fafc]/10 hover:border-[#0080ff]/50 transition-all duration-300 transform hover:-translate-y-1":
        outline,
      "px-4 py-1.5 text-sm bg-[#111122] border border-[#0080ff]/30 text-[#0080ff]":
        outline && primary,
    }
  );

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  href: PropTypes.string, // Add href as a prop type
};

export default Button;
