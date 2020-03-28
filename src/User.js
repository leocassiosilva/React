import React, { Component } from 'react';


class User extends Component {
    render() {
        return ( < div >
            Nome: { this.props.name }
            Email: { this.props.email }
            />  </div >
        );
    }
}

export default User;