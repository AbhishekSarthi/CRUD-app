import React, { useState } from 'react';
import axios from 'axios';

const Delete = () => {
    const [id, setId] = useState('');

    const DeleteBtn = async () => {
        console.log('hello');
        await axios.delete(`http://127.0.0.1:5000/${id}`);
        setId('');
    };
    return (
        <div>
            <h3>Delete a posts</h3>
            <h3>Enter Id</h3>
            <input onChange={(e) => setId(e.target.value)} value={id} />

            <button
                onClick={() => {
                    DeleteBtn();
                }}
            >
                Delete
            </button>
        </div>
    );
};

export default Delete;
