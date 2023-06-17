import React, { ReactElement, useState, useEffect, useCallback, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from "styles/global";
import Router from 'Router';
import Boundary from 'components/Boundary';
import { getTheme } from 'styles/theme';
import useSetMediaTheme from 'hooks/useSetMediaTheme';
import Spinner from 'components/Spinner';

const App = (): ReactElement => {

    const { theme } = useSetMediaTheme();

    return (
        <ThemeProvider theme={getTheme(theme)}>
            <BrowserRouter>
                <GlobalStyle />
                <Boundary fallback={
                    <Wrapper>
                        <Spinner />
                    </Wrapper>
                }>
                    <Router />
                </Boundary>
            </BrowserRouter> 
        </ThemeProvider>
    );
}

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default App;