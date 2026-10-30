import { Component } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Button from './ui/Button';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('EduTech ErrorBoundary caught an unhandled error:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[50vh] flex items-center justify-center p-6">
          <div className="max-w-lg w-full rounded-2xl border border-rose-500/30 bg-brand-surface p-6 sm:p-8 text-center shadow-card">
            <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl border border-rose-500/30 bg-rose-500/10 text-rose-400">
              <AlertTriangle size={28} />
            </div>

            <h3 className="font-display text-xl font-bold text-brand-heading">
              Something went wrong loading this content
            </h3>

            <p className="mt-2 text-sm text-brand-body leading-relaxed">
              We encountered an unexpected display issue. Please reload the page or return to the main dashboard.
            </p>

            {this.state.error?.message && (
              <div className="mt-4 rounded-xl border border-brand-border bg-brand-elevated/70 p-3 text-left font-mono text-xs text-rose-300 overflow-x-auto">
                {this.state.error.message}
              </div>
            )}

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button
                variant="primary"
                icon={<RefreshCw size={15} />}
                onClick={this.handleReload}
              >
                Reload Page
              </Button>
              <Button
                variant="secondary"
                icon={<Home size={15} />}
                onClick={this.handleGoHome}
              >
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
