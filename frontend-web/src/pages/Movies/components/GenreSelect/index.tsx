import { Genre } from 'core/types/Genre';
import { makePrivateRequest } from 'core/utils/request';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import './styles.scss';

type Props = {
    setGenreId: Function;
    setActivePage: Function;
}

const GenreSelect = ({ setGenreId, setActivePage }: Props) => {

    const [genres, setGenres] = useState<Genre[]>([]);
    const [isLoadingGenres, setIsLoadingGenres] = useState(false);


    useEffect(() => {
        setIsLoadingGenres(true);
        makePrivateRequest({ url: '/genres' })
            .then(response => {
                setGenres(response.data);
            })
            .finally(() => {
                setIsLoadingGenres(false);
            })
    }, []);

    

    return (
        <div className="card-base select-container">
            <Select
                isLoading={isLoadingGenres}
                placeholder="Gêneros..."
                onChange={(genre) => { 
                    setGenreId(genre?.id);
                    setActivePage(0);
                }}
                classNamePrefix="genres-select" 
                options={genres}
                isClearable={true}
                getOptionLabel={ (option: Genre) => option.name }
                getOptionValue={ (option: Genre) => String(option.id) } 
            />
        </div>
    );
};

export default GenreSelect;