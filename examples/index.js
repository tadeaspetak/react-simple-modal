const React = require('react');
const ReactDOM = require('react-dom');

const Modal = require('../lib');

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isOpen: true
    }
  }
  render(){
    return(<main>
      <h1>Sample simple modal</h1>
      <button onClick={() => this.setState({isOpen: true})}>Open</button>
      <Modal isOpen={this.state.isOpen} onRequestClose={() => this.setState({isOpen: false})}>
        <div className="modal-header">
          <h4 className="modal-heading">A lovely modal</h4>
          <span className="modal-closer">&times;</span>
        </div>
        <div className="modal-body">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.</p>
        </div>
      </Modal>
    </main>);
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
