import React from 'react';
import './styles.scss';
import { useForm } from 'react-hook-form';
import { makePrivateRequest } from 'core/utils/request';
import { toast } from 'react-toastify';

type FormState = {
    text: string;
}

type Props = {
    movieId: number;
}

const ReviewInputCard = ({ movieId }: Props) => {

    const { register, handleSubmit, errors, setValue } = useForm<FormState>();
    
    const onSubmit = (dataForm: FormState) => {
        const data = { ...dataForm, movieId };
        makePrivateRequest({
            url: '/reviews',
            method: 'POST',
            data
        })
            .then(() => {
                toast.info('Avaliação salva com sucesso!');
                setValue('text', '');
            })
            .catch(() => {
                toast.error('Erro ao salvar a avaliação!');
            });
    }


    return (
        <div className="card-base review-input-container">
            <form onSubmit={handleSubmit(onSubmit)} className="form-review">
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