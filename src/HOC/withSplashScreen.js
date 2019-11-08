import React, {Component} from 'react';
import cycleGif from '../Images/giphy.gif';
import './splashScreen.css';

function LoadingMessage() {
  return (
    <div className='splash-screen'>
      <img src={cycleGif} alt="cycle-gif" width="25%" height="auto" className='mt4 mb3 br3 ba'/>
      <div className="loading-dot">.</div>
      <p className='text-load'>Loading</p>
    </div>
  );
}

function withSplashScreen(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    async componentDidMount() {
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 1000)
    }

    render() {
      if (this.state.loading) 
        return LoadingMessage();
      else 
        return <WrappedComponent {...this.props} />;
    }
  };
}

export default withSplashScreen;