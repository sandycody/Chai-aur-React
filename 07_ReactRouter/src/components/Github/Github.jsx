// We have to get followers of github here. So we can do this by calling github API when this component is loaded.

import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

export default function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/sandycody')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, []);

    return (
        <div className='text-center m-4 bg-cyan-100 text-black p-4 text-3xl'>
            Github followers: {data.following}
            <img src={data.avatar_url} alt="Github Picture" width={300} />
        </div>
    )
}

// Optimise way of using github api using loader attribute of Route tag in react router
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/sandycody');
    return response.json();
}
