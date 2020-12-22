import React , { useState }  from 'react'; 
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';

export default function FormName() {
    const { handleChange, values, handleSubmit, errors } = useForm(validate);

    return(
        <>
            <div className="form-content">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-inputs">
                        <label 
                        htmlFor="name"
                        className="form-label">
                            Name
                        </label>
                        <input 
                            id="name"
                            type='text' 
                            name="name" 
                            className="form-input"
                            value = {values.name} 
                            onChange={handleChange}

                        />
                            {errors.name && <p>{errors.name}</p>}
                    </div>
                    <div className="form-inputs">
                        <label 
                        htmlFor="email"
                        className="form-label">
                            Email Id
                        </label>
                        <input 
                            id="email"
                            type='email' 
                            name="email" 
                            className="form-input"
                            value = {values.email} 
                            onChange={handleChange} 
                        />
                        {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div className="form-inputs">
                        <label 
                        htmlFor="chat"
                        className="form-label">
                            Chat
                        </label>
                        <textarea 
                            id="chat"
                            type='text' 
                            name="chat" 
                            className="form-input"
                            value = {values.chat} 
                            onChange={handleChange} 
                        />
                        {errors.chat && <p>{errors.chat}</p>}
                    </div>
                    <button className="form-btn"
                    type="submit">
                        Post
                    </button>
                </form>
            </div>
        </>
    )
}