import { Button } from "@/ui/Button";
import cls from "./CartItem.module.scss";
import { productsName } from "@/const/const";

const CartItem = (props) => {
  const {
    id,
    img = "",
    title = "",
    product = "",
    ingredients = [],
    description = "",
    price = 0,
  } = props;

  const ingredientsText = ingredients.join(", ");

  return (
    <article className={cls.card}>
      <img className={cls.img} src={img} />

      <div className={cls.body}>
        <div className={cls.info}>
          <p className={cls.title}>{title}</p>

          <span className={cls.text}>
            {product === productsName.OTHERS ? description : ingredientsText}
          </span>
        </div>

        <div className={cls.footer}>
          <Button border className={cls.button}>
            Выбрать
          </Button>
          {product === productsName.OTHERS ? <span>{price} Р</span> : <span>От {price} Р</span>}
        </div>
      </div>
    </article>
  );
};

export { CartItem };
