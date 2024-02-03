import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import style from './../common/FormsControls/FormsControls.module.css'

const LoginForm = ({handleSubmit, error}) => {
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                    {createField('Email', 'email', [required], Input)}
                    {/*<Field placeholder={'Email'} validate={[required]} name={'email'} component={Input} />*/}
                    {createField('Password', 'password', [required], Input, {type: 'password'})}
                    {/*<Field placeholder={'Password'} validate={[required]} name={'password'} type={'password'} component={Input} />*/}
                {createField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}
                {/*<Field component={Input} name={'rememberMe'} type={'checkbox'} /> remember me*/}
                {error &&
                    <div className={style.formSummaryError}>
                        {error}
                     </div>
                }
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({
    // даем уникальное имя нашей форме
    form: 'login'
})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
       props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }

    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)