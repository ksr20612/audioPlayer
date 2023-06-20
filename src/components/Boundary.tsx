import { ReactElement, useCallback, ReactNode, Suspense } from 'react';
import { PropsWithChildren } from 'types/PropsWithChildren';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import Spinner from './Spinner';
import styled from 'styled-components';
import Button from './atoms/Button';
import { QueryErrorResetBoundary } from '@tanstack/react-query';

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

    const errorFallback = useCallback(({ resetErrorBoundary }: FallbackProps) => {
        return (
            <Wrapper>
                <strong>Sorry, something went wrong!</strong>
                please try again.
                <Button styles={{ marginTop: "5px" }} handleClick={resetErrorBoundary}>Retry</Button>
            </Wrapper>
        )
    }, []);

    return (
        <QueryErrorResetBoundary>
            <ErrorBoundary 
                fallbackRender={errorFallback}
            >
                <Suspense fallback={fallback}>
                    {children}
                </Suspense>
            </ErrorBoundary>
        </QueryErrorResetBoundary>
    );
}

const Wrapper = styled.div.attrs({
    role: "alert",
})`
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