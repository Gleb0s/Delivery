import { Link } from "react-router-dom";
import cls from "./ProductLayout.module.scss";

const ProductLayout = (props) => {
    const {header, item} = props;

    return (
        <>
        <Link className={cls.link} to={"/"}>
            Вернуться назад
        </Link>

            <section className={cls.productBody}>
                <h2 className={cls.title}>{header}</h2>

                <div className={cls.content}>
                    {item}
                </div>
            </section>
        </>
     );
}

export {ProductLayout};