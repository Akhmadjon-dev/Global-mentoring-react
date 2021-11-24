
import styled from 'styled-components'

import banner from '../assets/img/Bitmap.png';
import colors from './colors';

export const StyledHeader = styled.div`
    
    width: 100%;
    min-height: 390px;
    background-image: url(${banner});
    background-size: cover;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    padding-top: 20px;

    .header__top{
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        padding: 0 80px;
    }
    
    .header__button{
        padding: 11px 18px;
        border-radius: 4px;
        border: 0px solid;
        background-color: ${colors.secondary};
        color: ${colors.red};
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        text-align: right;
        text-transform: uppercase;
        cursor: pointer;
        outline-width: 1px;
        outline-color: ${colors.red};
    }
    .header__body{
        width: 100%;
        flex: 1;
        display: flex;
        justify-content: center;

    }
    .header__search-box{
        display: flex; 
        justify-content: center;
        align-items: center;
        width: 80%;
    }
    .header__search-input{
        flex: 1;
        padding: 17px 20px;
        font-size: 20px;
        line-height: 24px;
        background-color: ${colors.bg};
        mix-blend-mode: normal;
        opacity: 0.7;
        border-radius: 4px;
        border-width: 0px;
        outline-color: ${colors.red};
        color: ${colors.white};
    }
    .header__search-button{
        padding: 17px 74px;
        border-radius: 4px;
        background-color: ${colors.red};
        color: ${colors.white};
        border-width: 0px;
        cursor: pointer;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        text-transform: uppercase;
        margin-left: 14px;
    }
`