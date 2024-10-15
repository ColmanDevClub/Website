import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import css from './style.module.css';
import { EmailRounded } from '@mui/icons-material';
import { Box } from '@mui/material';

const SignUpMethod = ({ setMethodClicked }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '50px',
                backgroundColor: '#0e0e27',
                width: { xs: '100%', },
                maxWidth: '500px',
                margin: 'auto',
                padding: '60px 0px 60px 0px ',
                borderRadius: '10px',
                border: '1px solid #1F1F53'
            }}
        >
            <Box
                onClick={() => setMethodClicked(true)}
                className={css['options-button']}
                sx={{
                    width: {
                        xs: '90%',
                        lg: '350px'
                    }
                }}
            >
                <Box sx={{ textAlign: 'center' }}>
                    Submit using Facebook
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <FacebookRoundedIcon sx={{ fontSize: '35px' }} />
                </Box>
            </Box>
            <Box
                onClick={() => setMethodClicked(true)}
                className={css['options-button']}
                sx={{
                    width: {
                        xs: '90%',
                        lg: '350px'
                    }
                }}
            >
                <Box sx={{ textAlign: 'center' }}>
                    Submit using Email
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <EmailRounded sx={{ fontSize: '35px' }} />
                </Box>
            </Box>
        </Box>
    );
}

export default SignUpMethod;
