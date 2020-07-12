import React from "react"

export default class ErrorBoundary extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { hasError: false };
  // }

  state = {
    hasError: false,
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  // My Error logger connects here
  // componentDidCatch(error, errorInfo) {
  //   logErrorToMyService(error, errorInfo);
  // }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: window.innerHeight,
          }}
        >
          <h1 style={{ fontSize: "2.5rem", textAlign: "center" }}>
            Something went wrong internally !
          </h1>
          ;
        </div>
      )
    }

    return this.props.children
  }
}
