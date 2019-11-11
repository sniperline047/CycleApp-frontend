import React, {Component} from 'react';
import cycleGif from '../Images/giphy.gif';
import './splashScreen.css';

function LoadingMessage() {
  return (
    <div className='splash-screen'>
      <img src={cycleGif} alt="cycle-gif" className='mt4 mb3 br3 ba load-img'/>
      <div className="loading-dot">.</div>
      <p className='text'>Loading</p>
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
        }, 2000)
    }

    render() {
      if (this.state.loading) return LoadingMessage();
      
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withSplashScreen;