export const getPizzas = (store) => store.pizzas.pizzas;
export const getPizzasError = (store) => store.pizzas.errors;
export const getPizzasLoading = (store) => store.pizzas.isLoading;
export const getPizzasPage = (store) => store.pizzas.page;
export const getPizzasLimit = (store) => store.pizzas.limit;
export const getPizzasHasMore = (store) => store.pizzas.hasMore;