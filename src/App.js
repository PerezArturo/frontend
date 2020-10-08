import React, {Component} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
   state = {
       houses: []
   }

    componentDidMount() {
        axios.get('http://localhost:8000/api/house')
            .then(res => {
                const houses = res.data;
                this.setState({houses});
            });
    }

    render() {
        const { houses } = this.state;
        return (
            <div className="App">
                <ul>
                    {houses.map(house =>
                        <li key={house.id}>
                            {house.title}
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default App;
