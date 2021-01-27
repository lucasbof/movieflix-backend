import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import ButtonIcon from 'core/components/ButtonIcon';
import AuthCard from '../Card';
import './styles.scss';
import { makeLogin } from 'core/utils/request';
import { saveSessionData } from 'core/utils/auth';

type FormState = {
    username: string;
    password: string;
}

type LocationState = {
    from: string;
}

const Login = () => {
    const { register, handleSubmit, errors } = useForm<FormState>();
    const [hasError, setHasError] = useState(false);
    const history = useHistory();
    const location = useLocation<LocationState>();
    
    const { from } = location.state || { from: { pathname: "/movies" } };
    
    const onSubmit = (data: FormState) => {
        makeLogin(data)
            .then(response => {
                setHasError(false);
                saveSessionData(response.data);
                history.replace(from);
            })
            .catch(() => {
                setHasError(true);
            });
    };
    
    return (
        <AuthCard title="login">
            {hasError && (
                <div className={`alert alert-danger ${hasError && 'box-error'} `}>
                    Usuário ou senha inválidos!
                </div>
            )}
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="">
                    <input
                        type="email" 
                        className={`input-base ${errors.username && 'error-input'} ${!hasError && 'no-box-error'}`}
                        placeholder="Email"
                        name="username" 
                        ref={register({
                            required: "Campo obrigatório",
                            pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Email inválido"
                            }
                        })}
                    />
                    {errors.username && (
                        <div className="error-message d-block">
                            {errors.username.message}
                        </div>)}
                </div>
                <div className="pass-input">
                    <input
                        type="password" 
                        className={`input-base ${errors.password && 'error-input'}`} 
                        placeholder="Senha"
                        name="password" 
                        ref={register({ required: "Campo obrigatório" })}  
                    />
                    {errors.password && (
                        <div className="error-message d-block">
                            {errors.password.message}
                        </div>)}
                </div>
                <div className="login-submit">
                    <ButtonIcon text="Logar" />
                </div>
            </form>
        </AuthCard>
    );
}

export default Login;