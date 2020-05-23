import React from 'react';
import { registerAction } from '../../redux/action/authAction';
import { connect } from 'react-redux';
import { makeStyles, Button, TextField, InputAdornment, IconButton, FormControl, InputLabel, OutlinedInput } from '@material-ui/core';
import clsx from 'clsx';
import classesStyle from "./RegisterScreen.module.scss"
import { VisibilityOff, Visibility } from '@material-ui/icons';

function RegisterScreen(props) {
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

    const handleClickShowPassword = () => {
        setUser({ ...user, showPassword: !user.showPassword });
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    const useStyles = makeStyles(theme => ({
        textField: {
            width: 380,
            fontSize: 16,
            [theme.breakpoints.up('xs')]: {
                width: 250,
                height: 50,


            },
            [theme.breakpoints.up('sm')]: {
                width: 280,
                height: 50

            },
            [theme.breakpoints.up('md')]: {
                width: 360,
                height: 60
            }
        },
        button: {
            width: 200,
            height: 50,
            fontSize: 16,
            borderRadius: 25

            , [theme.breakpoints.up('xs')]: {
                width: 150,
                height: 40
            }
            , [theme.breakpoints.up('md')]: {
                width: 200,
                height: 50
            }
        }
    }));

    const classes = useStyles();

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
                <form className="container" onSubmit={handleSubmit} className={classesStyle.signupStyle}>
                    <div className="form-group">
                        <h2 className="text-danger text-center">Register</h2>
                        <div className="text-center">
                            <TextField variant="outlined" name="username" label="Username" className={classes.textField} margin="normal" onChange={handleChange} />
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
                        <div className="text-center">
                            <TextField variant="outlined" name="fullName" label="Full Name" className={classes.textField} margin="normal" onChange={handleChange} />
                            <p className="text text-danger">{user.errors.fullName}</p>
                        </div>
                        <div className="text-center">
                            <TextField variant="outlined" name="email" label="Email" className={classes.textField} margin="normal" onChange={handleChange} />
                            <p className="text text-danger">{user.errors.email}</p>
                        </div>
                        <div className="text-center">
                            <TextField variant="outlined" name="phone" label="Telephone Number" className={classes.textField} margin="normal" onChange={handleChange} />
                            <p className="text text-danger">{user.errors.phone}</p>
                        </div>
                        <div className="text-center">
                            <TextField variant="outlined" name="birthDate" className={classes.textField} margin="normal" onChange={handleChange} type="date" />
                            <p className="text text-danger">{user.errors.birthDate}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="text-center">
                            <Button color="secondary" variant="contained" type="submit" className={classes.button}>Sign Up</Button>
                        </div>
                    </div>
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