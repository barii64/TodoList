import _React from 'react';
import _ReactDOM from 'react-dom';
import _Redux from 'redux';
import _ReduxReact from 'react-redux';
import * as actionTypes from "./actionTypes"

import CreateBlock from './CreateBlock.jsx';



declare global {
    const React: typeof _React; // the React types _also_ exported by the React namespace, but export them again here just in case.
    const ReactDOM: typeof _ReactDOM;
}


type MyComponentProps = {
    rerenderParentCallback: void;
    addTodoItem: void;
};

type MyComponentState = {
    hiddenButton: boolean;
};

class AddButton extends React.Component<MyComponentProps, MyComponentState> {

    private createBlockElement: React.RefObject<HTMLInputElement>;


    constructor(props: MyComponentProps) {
        super(props);
        this.state = { hiddenButton: false };
        this.createBlockElement = React.createRef<HTMLInputElement>();
    };

    showCreateBlock = () => {
        this.setState({
            hiddenButton: !this.state.hiddenButton
        });

    }

    render() {
        if (!this.state.hiddenButton) {
            return (
                <form>
                    <input id="AddItemButton" type="input" value="Add"
                        className="btn btn-primary" onClick={() => {
                            this.showCreateBlock();
                        }} />
                </form>
            )
        }
        else {
            return ReactDOM.createPortal(
                <CreateBlock ref={this.createBlockElement}/>,
                document.querySelector(".tbody > div"));
        }
    }
}

export default AddButton;