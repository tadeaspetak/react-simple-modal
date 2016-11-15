const React = require('react');

class Modal extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isOpen: this.props.isOpen || false
    };

    this.keyMap = new Map();
    // close on ESC
    this.keyMap.set(27, this.requestClose.bind(this));
    this.keyDownHandler = this.onKeyDown.bind(this);
  }
  onKeyDown(e){
    return this.keyMap.has(e.which) ? this.keyMap.get(e.which)() : undefined;
  }
  requestClose(){
    this.props.onRequestClose();
  }
  componentDidMount(){
    this.resolveIsOpen();
    document.addEventListener('keydown', this.keyDownHandler);
    // bind to closer if there is any
    let closer = this.refs.modal.querySelector('.modal-closer');
    if(closer) closer.addEventListener('click', this.requestClose.bind(this));
  }
  componentDidUpdate(){
    this.resolveIsOpen();
  }
  componentWillUnmount(){
    this.resolveIsOpen();
    document.removeEventListener('keydown', this.keyDownHandler);
  }
  resolveIsOpen(){
    document.getElementsByTagName('body')[0].classList[this.props.isOpen ? 'add' : 'remove']('modal-open');
  }
  onClick(e){
    // the overlay has been clicked
    if(e.target.classList.contains('modal')){
      this.requestClose();
    }
  }
  render() {
    return (
      <div ref="modal" className={`modal${this.props.isOpen ? ' visible' : ''}`} onClick={this.onClick.bind(this)}>
        <div className="modal-container">{this.props.children}</div>
      </div>);
  }
}

module.exports = Modal;
