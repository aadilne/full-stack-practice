
import {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false , error: null , errorInfo: null};
    }
    
    static getDerivedStateFromError(error){
        return {hasError: true , error: error}
    }

    render(){
        if(this.state.hasError) {
            return <h2>something went wrong!</h2>
        }

        return this.props.children;
    }

    
}

export default ErrorBoundary;