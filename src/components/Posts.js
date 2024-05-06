

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function Posts() {
    const [items, setItems] = useState([]);
    const {id} =useParams();
    console.log(id);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`http://localhost:4000/user/posts/${id}`, {
                    method: 'GET',
                    credentials: 'include'
                });
                ;
                const Data = await response.json();
                const data =Data.data;
                console.log(data);
                setItems(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>userId</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                {items && items.map((item) => (
                    <tr key={item.id}>
                        <td>{item.userId}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Posts;
