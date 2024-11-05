import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { PageError } from 'widgets/PageError';

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary
    extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props:ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error:Error) {
        // Обновляем состояние, чтобы при следующем render отображался резервный пользовательский интерфейс.
        return { hasError: true };
    }

    componentDidCatch(error:Error, errorInfo:ErrorInfo) {
        // Вы также можете зарегистрировать ошибку в службе отчетов об ошибках.
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            return <Suspense fallback=""><PageError /></Suspense>;
        }

        return children;
    }
}

export default ErrorBoundary;
