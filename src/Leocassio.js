import React, { Component } from 'react';
import User from './User';
import photo from './user.png'


class Leocassio extends Component {
    render() {
        return ( < div >
            Eu sou um componente chamado Leocassio!
            <
            User name = "Leocassio"
            photo = { photo } > < /User>   <
            User name = "Ataandra" > < /User> < /
            div >

        );
    }
}

export default Leocassio;