import React from 'react';
import './styles.scss';
import { useForm } from 'react-hook-form';

type FormState = {
    text: string;
}

type Props = {
   onSubmit: Function;
}

const ReviewInputCard = ({ onSubmit }: Props) => {

    const { register, handleSubmit, errors } = useForm<FormState>();
    
    return (
        <div className="card-base review-input-container">
            <form onSubmit={handleSubmit((dataForm: FormState) => onSubmit(dataForm))} className="form-review">
                <textarea
                    name="text"
                    ref={register({
                        validate: value => !!value.trim() ? true : 'A avaliação não pode ser vazia ou só espaços!'
                    })}
                    className={`field-review-input ${errors.text && 'error-input-border'}`}
                    placeholder="Deixe sua avaliação aqui"
                />
                {errors.text && (
                    <div className="error-message-input d-block">
                        {errors.text.message}
                    </div>
                )}
                <div className="btn-review-container">
                    <button className="btn bg-primary btn-review">
                        {
                            (<h5 className="btn-icon-text-review">SALVAR AVALIAÇÃO</h5>)
                        }
                    </button>
                </div>
            </form>

        </div>
    );
};

export default ReviewInputCard;