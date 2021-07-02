import React from 'react';
import Spinner from '../spinner/spinner';

export default function withData(View) {
    return class extends React.Component {
      
      state = {
        data: null
      }
  
      componentDidMount() {
        this.update();
      }
      
      componentDidUpdate(prevProps) {
        if (this.props.getData !== prevProps.getData) {
          this.update();
        }
      }

      update() {
        this.props.getData().then(data => this.setState({data}));
      }
  
      render() {
        const {data} = this.state;
        if (!data) {
          return <Spinner/>;
        }
      
        return <View {...this.props} data={data}/>
      }
    }
  };