import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Read = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get('http://localhost:5000/');
            setData(data);
        };
        getData();
    }, []);

    return (
        <div>
            <h2>Read posts</h2>
            {data.map((singleData) => {
                return (
                    <div className="box" key={singleData._id}>
                        <h3>Post Id : {singleData._id}</h3>
                        <h3>Title : {singleData.title}</h3>
                        <h3>Body : {singleData.body}</h3>
                        <h3>Author : {singleData.author} </h3>
                    </div>
                );
            })}
        </div>
    );
};

export default Read;
