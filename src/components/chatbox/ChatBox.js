import React from "react"
import ChatModal from "./ChatModal";
class ChatBox extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {show: false};

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
      
      showModal=()=>{
          this.setState({show:true});
      };
      hideModal=()=>{
          this.setState({show:false});
      };
      handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }
    render(){
    return(
        <div className="fixed bottom-10 right-32">
             <ChatModal show={this.state.show} handleClose={this.hideModal}>
                 <p>modal</p>
        </ChatModal>
             <button className="bg-blue-800 rounded text-white text-xl px-3 py-2" onClick={this.showModal}>
        Chat
      </button>
        </div>
    );
}
}
export default ChatBox