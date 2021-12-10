import sty from 'styled-components';
import clr from './colors';

export const StyledInput = sty.div<{width: string, margin?: string, height?: string}>`
    display: flex;
    flex-direction: column;
    color: #ffffff;
    input{
        background: rgba(50, 50, 50, 0.948044);
        padding: 20px;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        color: ${clr.white};
        margin-right: ${props => props.margin || "0px"};
        margin-top: 15px;
        mix-blend-mode: normal;
        opacity: 0.3;
        border-radius: 4px;
        outline-width: 0px; 
        border: 0.5px solid rgba(50, 50, 50, 0.948044);
        width: ${props => props.width || "300px"};
        height: ${props => props.height || "100%"};
    }
    input:focus, input:active{
        color: #fff;
        opacity: 0.8;
    }
    select{
        background: rgba(50, 50, 50, 0.948044);
        padding: 20px;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        color: ${clr.white};
        margin-right: ${props => props.margin || "0px"};
        margin-top: 15px;
        mix-blend-mode: normal;
        opacity: 0.3;
        border-radius: 4px;
        outline-width: 0px; 
        border: 0.5px solid rgba(50, 50, 50, 0.948044);
        width: ${props => props.width || "300px"};
        height: ${props => props.height || "100%"};
    }
    select:focus, select:active{
        color: #fff;
        opacity: 0.8;
    }
    label{
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.888889px;
        text-transform: uppercase;
        color: #F65261;
        mix-blend-mode: normal;
        opacity: 0.8;
    }
`;