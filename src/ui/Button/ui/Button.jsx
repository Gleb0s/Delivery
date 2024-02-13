import classNames from "classnames";
import cls from "./Button.module.scss";

const variantClasses = {
  clear: "clear",
  normal: "normal",
};

const Button = (props) => {
  const { children, className, variant, active, border, onClick } = props;

  const variantClass = variantClasses[variant] || variantClasses.normal;

  return (
    <button
      className={classNames(`button ${className}`, cls[variantClass], {
        [cls["active"]]: active,
        [cls["border"]]: border,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
