import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



function Home(){

    const [items,setItems] = useState([]);

    useEffect(()=>{
        async function fn(){
            const response = await fetch('http://localhost:4000/user/data',
            {
              method: 'GET',
              credentials: 'include'
            });
            const Data = await response.json();
            const data = Data.data;
            setItems(data);
        }
        fn();
    },[])




    return(
        <div className='home'>
        <h5 >All data</h5>
<table>
    <thead>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
            <th>city</th>
        </tr>
    </thead>
    <tbody>
        {items && items.map((item) => (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.address.city}</td>
                <td>
                    <Link to={`/posts/${item.id}`}>
                        View Posts
                    </Link>
                </td>
            </tr>
        ))}
    </tbody>
</table>


        </div>
    )
}


export default Home;



