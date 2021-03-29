import _React from 'react';
import _ReactDOM from 'react-dom';
import _Redux from 'redux';
import _ReduxReact from 'react-redux';
import * as actionTypes from "./actionTypes"

import CreateBlock from './CreateBlock.jsx';

const { connect } = _ReduxReact;

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
                <CreateBlock ref={this.createBlockElement} rerenderParentCallback={this.props.rerenderParentCallback} addTodoItem={this.props.addTodoItem}  />,
                document.querySelector(".tbody > div"));
        }
    }
}

function mapStateToProps(state: { hiddenButton: boolean; }) {
    return {
        hiddenButton: state.hiddenButton,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addTodoItem: function (title: string, checkbox: boolean) {
            fetch("/TodoItems/CreateJson", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    Title: title,
                    IsDone: checkbox
                })
            });
            return fetch("/TodoItems/Get", {
                method: "GET"
            }).then(res => res.json())
                .then(response => {
                    dispatch({ type: actionTypes.GET_TODOITEMS, items: response });
                });
        }
    }
}
var connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddButton);

    export default connectedComponent;