import React from 'react';
import './styles.scss';
import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';

type Props = {
    text: string;
}

const ButtonIcon = ({ text }: Props) => (
    <div className="d-flex">
        <button className="btn bg-primary btn-icon">
            <h5 className="btn-icon-text">{text}</h5>
        </button>
        <div className="btn-icon-content">
            <ArrowIcon />
        </div>
    </div>
);

export default ButtonIcon;