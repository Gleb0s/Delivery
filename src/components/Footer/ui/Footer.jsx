import { Icon } from "@/ui/Icon";
import cls from "./Footer.module.scss";
import PizzaIcon from "@/assets/img/logoPizza.svg";

const Footer = () => {
    return (
        <footer className={cls.footer}>
            <div className={cls.container}>
                <div className={cls.content}>
                <div className={cls.logo}>
                    <Icon Svg={PizzaIcon} />
                    <p>Webcademy пицца</p>
                </div>
                <p>Copyright 2024 - Webcademy пицца</p>
                </div>
            </div>
        </footer>
     );
}

export {Footer};