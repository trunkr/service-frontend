import React, { Component, type ReactNode, type ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // 오류 로깅
    console.log({ error, errorInfo });
  }

  render() {
    // 오류가 발생하는지 확인
    if (this.state.hasError) {
      if (this.props.fallback != null) {
        return <>{this.props.fallback}</>;
      }

      // 사용자 정의 대체 UI를 렌더링할 수 있습니다.
      return (
        <div>
          <h2>알 수 없는 문제가 발생했어요</h2>
          <button type="button" onClick={() => this.setState({ hasError: false })}>
            재시도
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
