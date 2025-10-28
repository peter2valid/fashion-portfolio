import { Component } from 'react';

/**
 * Global Error Boundary
 * Catches runtime errors and prevents white screen crashes
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details for debugging
    console.error('🔥 Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-creamBg text-center p-8">
          <div className="max-w-md">
            <h1 className="text-6xl font-fashion text-fashionRed mb-6">
              Oops!
            </h1>
            <h2 className="text-2xl font-body text-textBlack font-semibold mb-4">
              Something went wrong
            </h2>
            <p className="text-gray-700 mb-8">
              We're sorry for the inconvenience. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-fashionRed text-white font-semibold rounded hover:bg-red-700 transition-colors duration-300"
            >
              Reload Page
            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 text-left bg-red-50 p-4 rounded border border-red-200">
                <summary className="cursor-pointer text-red-800 font-semibold mb-2">
                  Error Details (Dev Only)
                </summary>
                <pre className="text-xs text-red-600 overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

