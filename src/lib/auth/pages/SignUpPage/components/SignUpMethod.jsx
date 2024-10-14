import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import css from './style.module.css';

const SignUpMethod = ({ setMethodClicked }) => {
    return (
        <div className={css['container-method']}>
            <div onClick={() => setMethodClicked(true)} className={css['facebook-icon']}>
                <div>
                    <FacebookRoundedIcon style={{fontSize: '40px'}} />
                </div>
                <div>
                    Sign up with Facebook
                </div>
            </div>
            <div>
                or
            </div>
            <div onClick={() => setMethodClicked(true)} className={css['email']}>
                Sign up with Email
            </div>
        </div>
    )
}

export default SignUpMethod