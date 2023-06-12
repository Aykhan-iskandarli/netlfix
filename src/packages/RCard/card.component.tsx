import css from './card.module.scss';
import { ICardProps } from './types';

const CardComponent = (props : ICardProps)=>{
        return (
            <div className={`${css.card} ${props.className}`}>
                {props.children}
            </div>
        );
}

export default CardComponent;
