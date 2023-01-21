https://docs.google.com/spreadsheets/d/1Ajwh2tvW3FEKcdg-kCiSlasj3kWpKVooCKYFq2kR6o4/edit#gid=1532814226

при некоректному значенню в інпут нічого не виодити

так як const [productsInBasket] = usePersistedState([], "products"); визивається 1 раз, то localStorage некоректо оновлюється (тобто тільки після перезавантадення сторінки)

занести у функцію не можу, бо це хук

при визові productsToBuy отримую декілька undefined тому не працює Basket

===================================================
зробити щоб не перемалюовувалась сторінка
