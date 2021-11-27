import sty from 'styled-components';
import clr from './colors';

export const StyledBtn = sty.button<{width?: string, margin?: string, bg?: string, type?: string}>`

    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    text-transform: uppercase;
    color: ${clr.white};
    padding: 16px 57px;
    border-radius: 4px;
    border: 1px solid #F65261;
    color: #F65261;
    cursor: pointer;
    margin-left: 20px;

    &:hover{
        background: #F65261;
        color: #fff;
        transition: all 0.3s;
    }
    `