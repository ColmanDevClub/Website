import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import css from './style.module.css';
import { EmailRounded } from '@mui/icons-material';
import { Box } from '@mui/material';

const SignUpMethod = ({ setMethodClicked }) => {
    return (
        <div className={css['container-method']}>
            <Box 
                onClick={() => setMethodClicked(true)}
                className={css['options-button']}
                sx={{
                    width: {
                        lg: '350px',
                        xs: '270px'
                    }
                }}
            >
                <div>
                    Submit using Facebook
                </div>
                <div style={{ display: 'flex' }}>
                    <FacebookRoundedIcon style={{ fontSize: '35px' }} />
                </div>
            </Box>
            <Box 
                onClick={() => setMethodClicked(true)}
                className={css['options-button']}
                sx={{
                    width: {
                        lg: '350px',
                        xs: '270px'
                    }
                }}
            >
                <div>
                    Submit using Email
                </div>
                <div style={{ display: 'flex' }}>
                    <EmailRounded style={{ fontSize: '35px' }} />
                </div>
            </Box>
        </div>
    );
}

export default SignUpMethod;
