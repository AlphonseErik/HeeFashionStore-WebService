import React from 'react';
import { registerAction } from '../../redux/action/authAction';
import { connect } from 'react-redux';

function RegisterScreen(props) {


    let [user, setUser] = React.useState({
        userRegister: {
            username: "",
            password: "",
            fullName: "",
            email: "",
            phone: "",
            birthDate: "",
        }, errors: {
            username: "",
            password: "",
            fullName: "",
            email: "",
            phone: "",
            birthDate: "",
        },
        showPassword: false,
    });

    const handleChange = e => {
        let { name, value } = e.target;
        let errorMessage = "";
        if (value === "") {
            errorMessage = name + ' is required!';
        }
        //Kiểm tra lỗi 
        let userRegisterUpdate = { ...user.userRegister, [name]: value };
        let errorsUpdate = { ...user.errors, [name]: errorMessage };
        setUser({
            userRegister: userRegisterUpdate,
            errors: errorsUpdate
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        let valid = true;
        for (let errorName in user.errors) {
            if (user.errors[errorName] !== "") //1 trong các thuộc tính user.errors ! rỗng  
            {
                valid = false;
            }
        }
        for (let valueNotFind in user.userRegister) {
            if (user.userRegister[valueNotFind] === "") //2 trong các thuộc tính user.userLogin = rỗng 
            {
                valid = false;
            }
        }
        if (valid) {
            props.dispatch(registerAction(user.userRegister, props.history));
        } else {
            alert('Please check your Email and Password');
        }
    }

    let renderRegister = () => {
        return (
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div>
                            <h1>Username</h1>
                            <input name="username" type="text" onChange={handleChange} />
                        </div>
                        <div>
                            <h1>Password</h1>
                            <input name="password" type="password" onChange={handleChange} />
                        </div>
                        <div>
                            <h1>Full Name</h1>
                            <input name="fullName" type="text" onChange={handleChange} />
                        </div>
                        <div>
                            <h1>Email</h1>
                            <input name="email" type="email" onChange={handleChange} />
                        </div>
                        <div>
                            <h1>Mobile Phone</h1>
                            <input name="phone" type="text" onChange={handleChange} />
                        </div>
                        <div>
                            <h1>Day Of Birth</h1>
                            <input name="birthDate" type="date" onChange={handleChange} />
                        </div>
                    </div>
                    <button className="btn btn-success" type="submit">Register</button>
                </form>
            </div>
        )
    }

    return (
        <div>
            {renderRegister()}
        </div>
    )
}

const mapStateToProp = state => ({

});

export default connect(mapStateToProp)(RegisterScreen);