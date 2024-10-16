import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { EmailRounded } from '@mui/icons-material';
import { Button, Card, Stack } from '@mui/material';

const SignUpMethod = ({ setMethodClicked }) => {
  return (
    <Card variant="filled" sx={{ height: '30svh', width: '35svw' }}>
      <Stack p={5} gap={5}>
        <Button
          variant="outlined"
          endIcon={<FacebookRoundedIcon />}
          fullWidth
          sx={{ justifyContent: 'space-between' }}
          onClick={() => setMethodClicked(true)}
        >
          Submit using Facebook
        </Button>
        <Button
          variant="outlined"
          fullWidth
          sx={{ justifyContent: 'space-between' }}
          onClick={() => setMethodClicked(true)}
          endIcon={<EmailRounded />}
        >
          Submit using Email
        </Button>
      </Stack>
    </Card>
  );
};

export default SignUpMethod;
