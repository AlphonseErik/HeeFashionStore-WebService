import React from 'react';
import { signInAction } from '../../redux/action/authAction';
import { connect } from 'react-redux';

function LoginScreen(props) {


    let [user, setUser] = React.useState({
        userLogin: {
            username: "",
            password: "",
        }, errors: {
            username: "",
            password: "",
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
        let userLoginUpdate = { ...user.userLogin, [name]: value };
        let errorsUpdate = { ...user.errors, [name]: errorMessage };
        setUser({
            userLogin: userLoginUpdate,
            errors: errorsUpdate
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        let valid = true;
        console.log(user.userLogin)
        for (let errorName in user.errors) {
            if (user.errors[errorName] !== "") //1 trong các thuộc tính user.errors ! rỗng  
            {
                valid = false;
            }
        }
        for (let valueNotFind in user.userLogin) {
            if (user.userLogin[valueNotFind] === "") //2 trong các thuộc tính user.userLogin = rỗng 
            {
                valid = false;
            }
        }
        if (valid) {
            props.dispatch(signInAction(user.userLogin, props.history));
        } else {
            alert('Please check your Email and Password');
        }
    }

    let renderLogin = () => {
        return (
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div>
                            <h1>Username</h1>
                            <input name="username" type="text" onChange={handleChange} />
                            <p className="text text-danger">{user.errors.username}</p>
                        </div>
                        <div>
                            <h1>Password</h1>
                            <input name="password" type="password" onChange={handleChange} />
                            <p className="text text-danger">{user.errors.password}</p>
                        </div>
                    </div>
                    <button className="btn btn-success" type="submit">Login</button>
                </form>
            </div>
        )
    }

    return (
        <div>
            {renderLogin()}
        </div>
    )
}

const mapStateToProp = state => ({
    isLogin: state.user.isLogin,
});

export default connect(mapStateToProp)(LoginScreen);