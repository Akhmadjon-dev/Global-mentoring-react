import styled from 'styled-components';
import colors from './colors';

export default styled.div`

    width: 320px;
    min-height: 560px;
    margin: 0 20px;
    position: relative;
    .card__img{
        width: 100%;
        min-height: 320px;

    }
    .card__btns{
        display: flex;
        position: absolute;
        top: 30px;
        right: 20px;
    }
    .card__info{
        width: 100;
        
    }
    .card__row{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }
    .card__title{
        font-size: 18px;
        font-weight: 500;
        color: ${colors.white};
        opacity: 0.7;
    }
    .card__release-date{
        font-size: 14px;
        font-weight: 500;
        color: ${colors.white};
        opacity: 0.7;
        border: 1px solid #979797;
        box-sizing: border-box;
        border-radius: 4px;
        padding: 4px 8px ;
    }
    .card__tags{
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: ${colors.white};
        mix-blend-mode: normal;
        opacity: 0.5;
    }
    .card__img img{
        width: 100%;       

    }
    

`