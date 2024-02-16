import { CartItem } from "@/components/CartItem";
import { ProductLayout } from "@/layouts/MainLayout/ProductLayout";
import { ProductLayoutSkeleton } from "@/layouts/MainLayout/ProductLayout/ui/ProductLayout";
import { getPizzas, getPizzasError, getPizzasLoading } from "@/redux/pizzas/selectors/pizzasSelectors";
import { fetchNextPizzasPage } from "@/redux/pizzas/services/fetchNextPizzasPage";
import { calcMinPricePizzas } from "@/utils/calcMinPrice";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";

const PizzasPage = () => {
    const pizzas = useSelector(getPizzas);
    const error = useSelector(getPizzasError);
    const loading = useSelector(getPizzasLoading);

    const { ref, inView } = useInView({
        threshold: 1,
      });

    const dispatch = useDispatch();

    useEffect(() => {
        if (!error){
            dispatch(fetchNextPizzasPage())
        }
    }, [dispatch, inView]);

    if (error){
        return <div>{error}</div>
    }

    const item = pizzas.map(el => {

        const minPrice = calcMinPricePizzas(el.sizes, el.doughs);

        return <CartItem
                    id={el.id}
                    key={el.id}
                    product={el.product}
                    img={el.photo}
                    title={el.name}
                    ingredients={el.ingredients}
                    price={minPrice}
                    />
    })

    return (
        <>
            <ProductLayout header={'Пиццы'} item={item}/>
            {loading && <ProductLayoutSkeleton/>}
            {!loading && <div ref={ref}></div>}
        </>
     );
}

export default PizzasPage;