import React, {Component} from 'react';
import '../containers/App.css';
import Modal from '../components/UI/Modal/Modal';
import Alert from "../components/UI/Alert/Alert";

class App extends Component {

    state = {
        modalShow: false
    };

    showModalHandler = () => {
        this.setState({modalShow: true});
    };

    continued = () => {
        alert("Continue");
    };

    closed = () => {
        this.setState({modalShow: false});
    };
    render() {

        return (
            <div className="App">
                <button
                    className="ShowModalButton"
                    onClick={this.showModalHandler}
                >
                    Show Modal
                </button>
                <Modal
                    show={this.state.modalShow}
                    closed={this.closed}
                    title="Some kinda modal title"
                    btnType="Close"
                    clicked={this.closed}
                    value="X"
                    array={[{type: 'primary', label: 'Continue', clicked: this.continued},
                {type: 'danger', label: 'Close', clicked: this.closed}]}
                >
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda atque autem
                        commodi ea eaque nam optio placeat, quas recusandae repudiandae unde vel? Ab cum non,
                        quia recusandae temporibus totam.</p>
                </Modal>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto at blanditiis exercitationem id ipsam labore molestiae nam perferendis quos,
                    saepe, sed voluptatem voluptatibus. Animi aperiam consequatur ipsam ipsum mollitia
                    nam nesciunt, nobis porro quia? Ad commodi consequuntur earum error et in quae quam
                    quia quis sequi sint vitae voluptates, voluptatibus!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut corporis cupiditate dolorem,
                    eveniet facilis fugiat id, illum, minus officiis praesentium provident recusandae
                    repellendus reprehenderit sequi tempore veniam voluptatibus. Ab accusantium ad adipisci
                    alias assumenda at autem blanditiis commodi consequatur debitis deleniti dignissimos,
                    dolor dolorem doloribus enim et in inventore iste iure magnam maxime molestiae molestias
                    mollitia nam nesciunt nobis non odio, odit porro provident quasi quo reiciendis rem
                    repellat soluta velit voluptatibus. Accusantium at exercitationem inventore magni voluptates.
                    A ad amet, distinctio dolor dolores doloribus et facere fugit, ipsam labore libero quaerat
                    qui quisquam, quos recusandae rerum tempore ullam vero.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto at blanditiis exercitationem id ipsam labore molestiae nam perferendis quos,
                    saepe, sed voluptatem voluptatibus. Animi aperiam consequatur ipsam ipsum mollitia
                    nam nesciunt, nobis porro quia? Ad commodi consequuntur earum error et in quae quam
                    quia quis sequi sint vitae voluptates, voluptatibus!</p>
                <Alert
                    type="warning"
                    dismiss={this.closeAlert}
                >
                    This is a warning type alert
                </Alert>
                <Alert type="success">This is a success type alert</Alert>
            </div>

        );
    }
}

export default App;
