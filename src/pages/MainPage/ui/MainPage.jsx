import { ProductTape } from "@/ProductTape";
import { useGetOthers, useGetPizzas, useGetRolls } from "@/api/rtkApi";


const MainPage = () => {
  const {
    data: productsPizzas,
    isLoading: pizzasLoading,
    error: pizzasError,
  } = useGetPizzas();
  const {
    data: productsRolls,
    isLoading: rollsLoading,
    error: rollsError,
  } = useGetRolls();
  const {
    data: productsOthers,
    isLoading: OthersLoading,
    error: OthersError,
  } = useGetOthers();

  return (
    <>
      <ProductTape
        title="Пиццы"
        products={productsPizzas}
        isLoading={pizzasLoading}
        error={pizzasError}
      />
      <ProductTape
        title="Роллы"
        products={productsRolls}
        isLoading={rollsLoading}
        error={rollsError}
      />
      <ProductTape
        title="Прочие товары"
        products={productsOthers}
        isLoading={OthersLoading}
        error={OthersError}
      />
    </>
  );
};

export default MainPage;
