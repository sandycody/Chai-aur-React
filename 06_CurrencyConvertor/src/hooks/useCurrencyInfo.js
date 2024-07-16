// Our custom hooks can use built-in hooks like useEffect(), useState()

// Note : A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.

import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/USD.json`)
        .then(res => res.json())
        .then(data => setData(data[currency]))
    }, [currency]);
    console.log(data);
    return data;
}

export default useCurrencyInfo;

