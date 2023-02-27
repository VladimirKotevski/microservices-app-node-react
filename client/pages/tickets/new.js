import { useState } from "react";
import Router from 'next/router'
import useRequest from '../../hooks/use-request'

const NewTicket = () => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const { doRequest, errors } = useRequest({
        url: '/api/tickets',
        method: 'post',
        body: {
            title,
            price
        },
        onSuccess: () => Router.push('/')
    });

    const onBlur = () => {
        if (isNaN(price)) return;
    
        setPrice(parseFloat(price).toFixed(2));
    }

    const onSubmit = (event) => {
        event.preventDefault();
        doRequest();
    }


    return (
        <div>
            <h1>Create a ticket</h1>
            <form onSubmit={onSubmit}>
            <div className="form-froup">
                <label>Title</label>
                <input 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-control" />
            </div>
            <div className="form-froup">
                <label>Price</label>
                <input
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    onBlur={onBlur}
                    className="form-control" />
            </div>
            {errors}
            <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default NewTicket;