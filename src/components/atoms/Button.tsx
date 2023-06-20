import { ReactElement, CSSProperties } from 'react';
import styled from 'styled-components';
import { EventFunc } from 'types/Event';
import { PropsWithChildren } from 'types/PropsWithChildren';

interface ButtonProps {
    handleClick: EventFunc,
    styles?: CSSProperties
}

const Button = ({
    handleClick,
    styles = {},
    children
}: PropsWithChildren<ButtonProps>): ReactElement => {

    return (
        <Wrapper onClick={handleClick} style={styles}>
            { children }
        </Wrapper>
    );
}

const Wrapper = styled.button`
    padding: 1%;
    border: 1px solid black;
    border-radius: 10px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .1s ease-in;
    &:hover, &:active { 
        transform: scale(1.05);
        background-color: ${({theme}) => theme.color.color_100};
    }
`

export default Button;