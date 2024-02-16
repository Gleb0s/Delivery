import { CartItem } from "@/components/CartItem";
import { ProductLayout } from "@/layouts/MainLayout/ProductLayout";
import { getOthers, getOthersError, getOthersLoading } from "@/redux/others/selectors/othersSelectors";
import { fetchNextOthersPage } from "@/redux/others/services/fetchNextOthersPage";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";

const OthersPage = () => {
    const others = useSelector(getOthers);
    const error = useSelector(getOthersError);
    const loading = useSelector(getOthersLoading);

    const { ref, inView } = useInView({
        threshold: 1,
      });

    const dispatch = useDispatch();

    useEffect(() => {
        if (!error){
            dispatch(fetchNextOthersPage())
        }
    }, [dispatch, inView]);

    if (error){
        return <div>{error}</div>
    }

    const item = others.map(el => {

        return <CartItem
                    id={el.id}
                    key={el.id}
                    product={el.product}
                    img={el.photo}
                    title={el.name}
                    description={el.description}
                    price={el.price}
                    />
    })

    return (
        <>
            <ProductLayout header={'Прочие товары'} item={item}/>
            {!loading && <div ref={ref}></div>}
        </>
     );
}

export default OthersPage;