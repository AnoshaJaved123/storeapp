import React, { useState } from 'react';
import axios from 'axios';
const FormItem = () => {
    const [newUser, setNewUser] = useState(
        {
            name: '',
            detail: '',
            location: '',
            picURL: '',
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('picURL', newUser.picURL);
        formData.append('detail', newUser.detail);
        formData.append('name', newUser.name);
        formData.append('location', newUser.location);

            console.log(formData)
        axios.post('http://localhost:5000/api/itemAuth/createitem', formData)
             .then(res => {
                console.log(res);
             })
             .catch(err => {
                console.log(err);
             });
    }

    const handleChange = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value});
    }

    const handlePhoto = (e) => {
        setNewUser({...newUser, picURL: e.target.files[0]});
    }

    return (
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <input 
                type="file" 
                accept=".png, .jpg, .jpeg"
                name="picURL"
                onChange={handlePhoto}
            />

            <input 
                type="text"
                placeholder="name"
                name="name"
                value={newUser.name}
                onChange={handleChange}
            />

            <input 
                type="text"
                name="detail"
                value={newUser.detail}
                onChange={handleChange}
            />
            <input 
                type="text"
                name="location"
                value={newUser.location}
                onChange={handleChange}
            />
            <input 
                type="submit"
            />
        </form>
    );
}


export default FormItem