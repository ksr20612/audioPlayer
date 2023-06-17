import React, { ReactElement, useState, useEffect, useCallback, useRef, ReactNode, Suspense } from 'react';
import { PropsWithChildren } from 'types/PropsWithChildren';
import { ErrorBoundary } from 'react-error-boundary';
import Spinner from './Spinner';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';

interface BoundaryProps {
    fallback?: ReactNode;
}

const Boundary = ({
    children,
    fallback = (
        <Wrapper>
            <Spinner />
        </Wrapper>
    )
}: PropsWithChildren<BoundaryProps>): ReactElement => {

    const errorFallback = useCallback(({ error }: { error: Error }) => {
        return (
            <Wrapper>
                <strong>Sorry, something went wrong!</strong>
                <br/>
                please try again.
            </Wrapper>
        )
    }, []);

    return (
        <ErrorBoundary 
            fallbackRender={errorFallback}
        >
            <Suspense fallback={fallback}>
                {children}
            </Suspense>
        </ErrorBoundary>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    text-align: center;
    color: red;
`

export default Boundary;