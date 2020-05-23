import React from 'react';
import { signInAction } from '../../redux/action/authAction';
import { connect } from 'react-redux';
import { OutlinedInput, makeStyles, Container, TextField, FormControl, InputLabel, InputAdornment, IconButton, Button } from '@material-ui/core';
import classesStyle from "./LoginScreen.module.scss";
import { VisibilityOff, Visibility } from '@material-ui/icons';
import clsx from 'clsx';

function LoginScreen(props) {

    const useStylesPw = makeStyles(theme => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        margin: {
            margin: theme.spacing(1),
        },
        withoutLabel: {
            marginTop: theme.spacing(3),
        },
        textField: {
            width: 200,
        },
    }));

    const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);
    React.useEffect(() => {
        if (props.credentials) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    })

    const handleClickShowPassword = () => {
        setUser({ ...user, showPassword: !user.showPassword });
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    const useStyles = makeStyles(theme => ({
        textField: {
            width: 300,
            fontSize: 16,


        },
        button: {
            width: 200,
            fontSize: 16,
            marginTop: 30,
            borderRadius: 25
        }
    }));

    const classes = useStyles();


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
                <Container>
                    <form className="container" onSubmit={handleSubmit} className={classesStyle.loginStyle} autoComplete="on">
                        <div className={classesStyle.test}>
                            <div className="form-group card-block">
                                <div className="text-center">
                                    <h1 className="text text-danger"> Log In</h1>
                                </div>
                                <div className="text-center">
                                    <TextField variant="outlined" name="username" label="Username" onChange={handleChange} className={classes.textField} margin="normal" />
                                    <p className="text text-danger">{user.errors.username}</p>
                                </div>
                                <div className="text-center">
                                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                        <OutlinedInput
                                            name="password"
                                            onChange={handleChange}
                                            type={user.showPassword ? 'text' : 'password'}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end">
                                                        {user.showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            labelWidth={70}
                                        />
                                    </FormControl>
                                    <p className="text text-danger">{user.errors.password}</p>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="text-center">
                                    <Button type="submit" className={classes.button}>Log In</Button>
                                </div>
                            </div>
                        </div>
                    </form>
                </Container>
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