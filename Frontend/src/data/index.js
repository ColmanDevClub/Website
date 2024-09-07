import { emailValidation, idValidation, numberValidation, selectionValidation, stringValidation , passwordValidation} from '../utils';

export const labels = [
  {
    label: 'First Name - (English)',
    type: 'TextField',
    showInput: 'true',
    key: 'firstName',
    validator: stringValidation,
  },
  {
    label: 'Last Name - (English)',
    type: 'TextField',
    showInput: 'true',
    key: 'lastName',
    validator: stringValidation,
  },
  {
    label: 'Email',
    type: 'TextField',
    showInput: 'true',
    key: 'email',
    validator: emailValidation,
  },
  {
    label: 'Phone Number',
    type: 'TextField',
    showInput: 'true',
    key: 'phoneNumber',
    validator: numberValidation,
  },
  {
       label: "Password",
      type: "TextField",
      showInput: "False",
       key: "password",
      validator: passwordValidation,
     },
     {
      label: "ConfirmPassword",
     type: "TextField",
     showInput: "False",
      key: "ConfirmPassword",
     validator: passwordValidation,
    },
  
  
];

export const allRules = [
  'כל נהלי האגודה והמכללה חלים גם במועדון.',
  'חובה להתנהג בצורה נאותה וחברית לכל אחד מחברי המועדון. הפרה של נוהל זה תוביל להוצאה מיידית מהמועדון מבלי אופציה לחזור.',
  'העתקות במטלות (בין אם מהאינטרנט או מחברי מועדון אחרים) גררו הוצאת חבר מועדון שהעתיק.',
  'חובה להגיע לכל המפגשים ובזמן, חבר שיעדר יותר מפעמיים ללא סיבה מוצדקת בסמסטר יצא מהמועדון.',
  'יש לפנות במקרה הצורך לראש הצוות בכל בעיה אישית/צוותית על מנת לפתור את הבעיה על הצד הטוב ביותר.',
];

export const errorMessages = {
  phoneNumber: 'Phone number must contain 10 digits',
  email: 'Email is not valid',
  firstName: 'Name must be in English and must contain atleast 3 chars.',
  lastName: 'Name must be in English and must contain atleast 3 chars.',
  password: "Password must contain atleast 6 chars.",
};
