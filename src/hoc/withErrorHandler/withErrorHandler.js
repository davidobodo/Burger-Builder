import React, {Component} from 'react'
import Auxi from '../Auxi'
import Modal from '../../components/UI/Modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error:null
        }

        componentWillMount(){
            axios.interceptors.request.use(req => {
                this.setState({error:null});
                return req
            });
            axios.interceptors.response.use(res => res, error => {
                this.setState({error:error});
            });
        }

        errorConfirmedHandler =()=> {
            this.setState({error:null})
        }

        render(){
            return (
                <Auxi>
                    <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Auxi>
            )
        }
    }
}

export default withErrorHandler;