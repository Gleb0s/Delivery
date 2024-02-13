import PizzaProduct from "@/assets/img/pizzaProduct.svg";
import RollProduct from "@/assets/img/rollProduct.svg";
import OtherProduct from "@/assets/img/otherProduct.svg";

const useNavbarItemsList = () => {
    const navbarItemsList = [
        {
            path: '/pizzas',
            Icon: PizzaProduct,
            text: 'Пиццы'
        },
        {
            path: '/rolls',
            Icon: RollProduct,
            text: 'Роллы'
        },
        {
            path: '/others',
            Icon: OtherProduct,
            text: 'Прочие'
        },
    ]
    return navbarItemsList;
}

export {useNavbarItemsList};