import classNames from "classnames";
import { NavLink } from "react-router-dom";

const AppLink = (props) => {
    const {children, to, className = "", activeClassName = ""} = props;
    return (
        <NavLink className={({isActive}) => classNames(className, {
            [activeClassName] : isActive,
        })} to={to}>{children}</NavLink>
     );
}

export {AppLink};