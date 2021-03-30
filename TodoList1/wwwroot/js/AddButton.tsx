import _React from 'react';
import _ReactDOM from 'react-dom';
import _Redux from 'redux';
import _ReduxReact from 'react-redux';
import * as actionTypes from "./actionTypes"

import CreateBlock from './CreateBlock.jsx';


declare global {
    const React: typeof _React; // the React types _also_ exported by the React namespace, but export them again here just in case.
    const ReactDOM: typeof _ReactDOM;
    const ReactRedux: typeof _ReduxReact;
}

const { connect } = ReactRedux;

type MyComponentState = {
    hiddenButton: boolean;
};

interface IMapStateToProps {
    hiddenAddButton: boolean;
}

function mapStateToProps(state: { hiddenAddButton: boolean; }): IMapStateToProps {
    return {
        hiddenAddButton: state.hiddenAddButton,
    };
}

interface IMapDispatchToProps {
    addTodoItem: (title: string, checkbox: boolean) => void
    hideAddButton: () => void
}
function mapDispatchToProps(dispatch: (arg0: { type: string; items?: any; }) => void) {
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
                    dispatch({ type: "GET", items: response });
                });
        },
        hideAddButton() {
            dispatch({ type: hideAddButtonAction.type })
        }
    }
}

var hideAddButtonAction = { type: "HIDEADDBUTTON" };

type AppProps = IMapStateToProps & IMapDispatchToProps


class AddButton extends React.Component<AppProps, {}> {

    private createBlockElement: React.RefObject<HTMLInputElement>;

    constructor(props: Readonly<AppProps>) {
        super(props);
        this.createBlockElement = React.createRef<HTMLInputElement>();
    };

    render() {
        if (!this.props.hiddenAddButton) {
            return (
                <form>
                    <input id="AddItemButton" type="input" value="Add"
                        className="btn btn-primary" onClick={() => {
                            this.props.hideAddButton();
                        }} />
                </form>
            )
        }
        else {
            return ReactDOM.createPortal(
                <CreateBlock ref={this.createBlockElement} />,
                document.querySelector(".tbody > div"));
        }
    }
}


export default connect<IMapStateToProps, IMapDispatchToProps, {}>(mapStateToProps, mapDispatchToProps)(AddButton);