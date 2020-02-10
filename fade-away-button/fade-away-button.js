"use strict";

const e = React.createElement;

class FadeAwayButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { opacity: 1 };
    }

    handleClick = () => {
        this.setState({ opacity: Math.max(this.state.opacity - 0.1, 0) });
    }

    render() {
        return e(
            "button",
            {
                onClick: this.handleClick,
                style: { opacity: this.state.opacity }
            },
            "Click me repeatedly!"
        );
    }
}

ReactDOM.render(e(FadeAwayButton), document.getElementById("fade-away-button-container"));

