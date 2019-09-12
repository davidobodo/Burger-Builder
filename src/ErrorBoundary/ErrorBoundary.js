import React,{ Component, Fragment } from 'react'

class ErrorBoundary extends Component{
    constructor(props){
        super(props)
        this.state = {hasError:false}
    }

    componentDidCatch(error, info){
        //log error to a service i created
        logErrorToMyService(error,info)
    }
    //or
    static getDerivedStateFromError(error){
        return {hasError: true}
    }

    render(){
        if(this.state.hasError){
            return <h1>{'Something went wrong'}</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary