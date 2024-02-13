import cls from "./Header.module.scss";
import PizzaIcon from "@/assets/img/logoPizza.svg";
import ToggleIcon from "@/assets/img/toggleTheme.svg";
import CartIcon from "@/assets/img/cart.svg";
import { Button } from "@/ui/Button";
import { Icon } from "@/ui/Icon";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";

const Header = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };

  const {toggleTheme, theme} = useTheme();

  console.log(theme);

  const onToggleThemeHandler = () => {
    toggleTheme()
  }

  return (
    <header className={cls.header}>
      <div className={cls.container}>
        <div className={cls.content}>
          <div className={cls.logo}>
            <Icon Svg={PizzaIcon} clickable onClick={onClick} />

            <p>WebcademyDelivery</p>
          </div>

          <div className={cls.buttons}>
            <Icon Svg={ToggleIcon} clickable onClick={onToggleThemeHandler}/>

            <Button border className={cls.button}>
              <Icon Svg={CartIcon} />

              <span>0 Р</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
