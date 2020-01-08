import React, {Component} from 'react'
import Auxi from '../Auxi'
import Modal from '../../components/UI/Modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error:null
        }

        componentWillMount(){
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error:null});
                return req
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error:error});
            });
        }

        componentWillUnmount(){//used when component is not needed again to clean up interceptors, so i dont create many interceptors when using this handler elsewhere
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.request.eject(this.resInterceptor);
        }//this removes my interceptors

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