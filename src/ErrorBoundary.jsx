import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    console.error('Uncaught error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{padding:20, color:'#fff', background:'#111', minHeight:'100vh'}}>
          <h1 style={{color:'#ff6b6b'}}>Application Error</h1>
          <pre style={{whiteSpace:'pre-wrap'}}>{String(this.state.error && this.state.error.stack)}</pre>
        </div>
      )
    }

    return this.props.children
  }
}
