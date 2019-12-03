import React, {Component} from 'react';
import './App.css'
import ClickBtn from "./Components/MainBtn/ClickBtn";
import Modal from "./Components/Modal/Modal";
import Alert from "./Components/Alert/Alert";


class App extends Component {
  state = {
    purchasing: false,
  };

  purchaseHandler = () => {
    this.setState({purchasing: true});
  };
  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  };

  purchaseContinueHandler = () => {
    alert('You continued')
  };

  render() {
    return (
      <div className='App'>
        <ClickBtn
          purchaseHandler={this.purchaseHandler}
        >
        </ClickBtn>
        <Modal
          show={this.state.purchasing}
          close={this.purchaseCancelHandler}
          purchaseContinueHandler={this.purchaseContinueHandler}
          purchaseCancelHandler={this.purchaseCancelHandler}
        >
          <h1>Скачать</h1>
          <p>Shayne Ward - No Promises</p>
        </Modal>
          <div className="secondTask">
              <Alert
                  type='secondary'
                  dismiss={this.purchaseContinueHandler}
              >
                  This is secondary alert
              </Alert>
              <Alert
                  type='success'
                  dismiss={this.purchaseContinueHandler}
                  clickDismissable
              >
                  This is success alert with close button
              </Alert>
          </div>
      </div>
    );
  }
}

export default App;