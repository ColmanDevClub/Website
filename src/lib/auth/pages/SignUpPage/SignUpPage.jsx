import * as React from 'react';
import { useNavigate } from 'react-router';
import { Box, Checkbox, Container, Grid, Typography } from '@mui/material';
import css from './style.module.css';
import FormInputField from 'src/ui/FormInputField';
import FormSelectField from 'src/ui/FormSelectField';
import { allRules, errorMessages, labels } from 'src/data';
import { addUser, fetchData } from 'src/config/firebase-utils';
import { EntranceAnimation } from 'src/animation';
import { ArrowButton, TransitionsModal } from 'src/ui';
import SignUpMethod from './components/SignUpMethod';
import Avatar from '@mui/material/Avatar';


const FIELDS_MAP = {
  TextField: FormInputField,
  Select: FormSelectField,
};

const SignUpPage = () => {
  const navigate = useNavigate();

  const [openModal, setOpenModal] = React.useState(false);
  const [formValues, setFormValues] = React.useState({});
  const [validationErrors, setValidationErrors] = React.useState({});
  const [openRulesModal, setOpenRulesModal] = React.useState(false);
  const [rules, setRules] = React.useState(false);
  const [methodClicked, setMethodClicked] = React.useState(false);
  const [profilePic, setProfilePic] = React.useState(null);

  React.useEffect(() => {
    labels.forEach((label) =>
      setFormValues((prev) => {
        return { ...prev, [label.key]: '' };
      })
    );
  }, []);

  const onSignupHandler = async () => {
    const validationState = labels.reduce((obj, { key, validator }) => {
      obj[key] = !validator(formValues[key]);
      return obj;
    }, {});

    setValidationErrors(validationState);

    if (Object.keys(validationState).length === 0) return;
    for (const key in validationState) {
      if (key === 'experienceDetails' && formValues['experience'] !== 'כן') {
        validationState[key] = validationState['experience'];
      }

      if (validationState[key]) {
        return;
      }
    }
    if (!rules) return;
    if ((await fetchData('users')).find((user) => user.formValues?.email === formValues['email'])) {
      alert('משתמש קיים במערכת');
      navigate('/');
      return;
    }
    setOpenModal(true); //TODO --> If we want to test it again, move to line 151. after testing return to line 163.
    const newUser = { ...formValues, date: new Date().toLocaleDateString() };
    addUser({ newUser });
    // const { email, password } = formValues;
    try {
      // await createUserWithEmailAndPassword(auth, email, password);
      // await signInWithEmailAndPassword(
      //   auth,
      //   formValues.email,
      //   formValues.password
      // )
      //   .then((userCredential) => {
      //     localStorage.setItem(
      //       "userToken",
      //       JSON.stringify(userCredential._tokenResponse.idToken)
      //     );
      //   }).then(()=>{
      //     sendDataToAgudaForm(
      //       formValues.email,
      //       formValues.fullName,
      //       formValues.phoneNumber,
      //       "הפקולטה למדעי המחשב",
      //       "מועדון המפתחים",
      //       "שנה " + formValues.schoolYear + "'",
      //       "טובה מאוד",
      //       "",
      //       false,
      //       false
      //     )
      //   })
      //   .catch((error) => {});
      // await sendDataToAgudaForm(
      //           formValues.email,
      //           formValues.fullName,
      //           formValues.phoneNumber,
      //           "הפקולטה למדעי המחשב",
      //           "מועדון המפתחים",
      //           "שנה " + formValues.schoolYear + "'",
      //           "טובה מאוד",
      //           "",
      //           false,
      //           false
      //         )
    } catch (error) {
      console.log(error);
    }
  };

  const inputHandler = (validator, key, value) => {
    const isValid = validator(value);
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [key]: !isValid,
    }));
  };

  const handleUploadClick = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePic(file);
    }
  };

  return (
    <EntranceAnimation>
      <Container
        maxWidth="md"
        sx={{
          paddingTop: '3rem',
          paddingBottom: '3rem',
          px: {
            xs: '2rem',
            md: '5rem',
          },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
            marginBottom: '2rem',
            fontWeight: 700,
            letterSpacing: '4px',
          }}
        >
          <span className={css['text-yellow']}>Sign</span>up
        </Typography>
        <div className={css['container']}>
          {!methodClicked && <SignUpMethod setMethodClicked={setMethodClicked} />}
          {methodClicked && (<>
            <Grid container
              spacing={2}
              direction="column"
              alignItems="center"
              justifyContent="center"
              marginBottom={7}
              marginTop={2}>
              <Avatar sx={{ bgcolor: '#ff5722', width: 150, height: 150, marginBottom: '15px' }}>
                {profilePic ? <img src={URL.createObjectURL(profilePic)} alt="profile" style={{ width: '100%', height: '100%' }} /> : 'Profile'}
              </Avatar>
              <Box
                component="label"
                sx={{
                  backgroundColor: '#f6c927',
                  borderRadius: '5px',
                  width: 'fit-content',
                  padding: '10px',
                  color: 'black',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  boxShadow: '0px 0px 10px 0px #f6c927bd',
                }}
              >
                Upload Image
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleUploadClick}
                />
              </Box>
            </Grid>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { sm: '1fr', md: '1fr 1fr' },
                gap: { sm: '1rem', md: '2rem' },
                marginBottom: '2rem',
              }}
            >

              {labels.map(({ type, label, key, options, validator }, index) => {
                const FieldComponent = FIELDS_MAP[type];
                return label === 'Experience Details' && formValues['experience'] !== 'כן' ? null : (
                  <EntranceAnimation animationDelay={label === 'Experience Details' ? 0 : index * 0.2}>
                    <Box
                      sx={{
                        marginBottom: {
                          xs: '0.75rem',
                        },
                      }}
                    >
                      <FieldComponent
                        type="text"
                        sx={{
                          width: '100%',
                        }}
                        options={options}
                        label={label}
                        onChange={(event) => {
                          setFormValues((prev) => {
                            return { ...prev, [key]: event.target.value };
                          });
                          inputHandler(validator, key, event.target.value);
                        }}
                        error={validationErrors[key]}
                      />
                    </Box>
                    <Typography
                      sx={{
                        textAlign: 'start',
                        color: '#f44336',
                      }}
                    >
                      {validationErrors[key] ? errorMessages[key] : ''}
                    </Typography>
                  </EntranceAnimation>
                );
              })}
            </Box>
            <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
              <Grid xs={12} md={6}>
                <TransitionsModal
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                  title={'נרשמת בהצלחה'}
                  closeOnOverlay={false}
                  btnText="מעבר לדף הבית"
                  btnOnClick={() => navigate('/')}
                >
                  <Typography
                    variant="p"
                    sx={{
                      textAlign: 'center',
                      marginBottom: '2rem',
                    }}
                  >
                    מוזמנים להצטרף לקבוצת הוואטספ שלנו
                  </Typography>
                  <a
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                      fontWeight: 'bold',
                      marginRight: '1rem',
                    }}
                    href="https://chat.whatsapp.com/BSs6DSDRUiW8UHe4ZfrABt"
                  >
                    לחץ כאן
                  </a>
                </TransitionsModal>

                <TransitionsModal
                  openModal={openRulesModal}
                  setOpenModal={setOpenRulesModal}
                  title={'תקנון'}
                  closeOnOverlay={true}
                  btnText="סגור"
                  btnOnClick={() => setOpenRulesModal(false)}
                >
                  <ul>
                    {allRules.map((rule) => {
                      return <li>{rule}</li>;
                    })}
                  </ul>
                  <Container
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      width: '100%',
                    }}
                  ></Container>
                </TransitionsModal>
                <Container
                  sx={{
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Checkbox
                    defaultChecked={rules ? true : false}
                    onClick={() => {
                      setRules((prev) => !prev);
                      setOpenRulesModal(false);
                    }}
                    sx={{ color: 'white' }}
                  />
                  <Typography>
                    אני מאשר את תנאי{' '}
                    <span className={css['terms']} onClick={() => setOpenRulesModal((prev) => !prev)}>
                      התקנון
                    </span>
                  </Typography>
                </Container>
              </Grid>
            </Grid></>)}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ArrowButton disabled={!rules} onClick={onSignupHandler}>
            Signup
          </ArrowButton>
        </div>
      </Container>
    </EntranceAnimation>
  );
};

export default SignUpPage;
