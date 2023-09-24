import {
  emailValidation,
  idValidation,
  numberValidation,
  selectionValidation,
  stringValidation,
} from "../utils";

export const labels = [
  {
    label: "ID",
    type: "TextField",
    showInput: "true",
    key: "id",
    validator: idValidation,
  },
  {
    label: "Full Name - (English)",
    type: "TextField",
    showInput: "true",
    key: "fullName",
    validator: stringValidation,
  },
  {
    label: "Email",
    type: "TextField",
    showInput: "true",
    key: "email",
    validator: emailValidation,
  },
  {
    label: "Phone Number",
    type: "TextField",
    showInput: "true",
    key: "phoneNumber",
    validator: numberValidation,
  },
  {
    label: "Field of Study",
    type: "Select",
    showInput: "true",
    options: ["מדעי המחשב", "מערכות מידע", "מדעי הנתונים"],
    key: "fieldOfStudy",
    validator: selectionValidation,
  },
  {
    label: "School Year",
    type: "Select",
    showInput: "true",
    options: ["א", "ב", "ג", "ד"],
    key: "schoolYear",
    validator: selectionValidation,
  },
  {
    label: "Program",
    type: "Select",
    showInput: "true",
    options: ["בוקר", "ערב", "אלצ", "אבצ"],
    key: "program",
    validator: selectionValidation,
  },
  {
    label: "Experience",
    type: "Select",
    showInput: "true",
    options: ["כן", "לא"],
    key: "experience",
    validator: selectionValidation,
  },
  {
    label: "Experience Details",
    type: "TextField",
    showInput: "true",
    key: "experienceDetails",
    validator: stringValidation,
  },
];

export const allRules = [
  "כל נהלי האגודה והמכללה חלים גם במועדון.",
  "חובה להתנהג בצורה נאותה וחברית לכל אחד מחברי המועדון. הפרה של נוהל זה תוביל להוצאה מיידית מהמועדון מבלי אופציה לחזור.",
  "העתקות במטלות (בין אם מהאינטרנט או מחברי מועדון אחרים) גררו הוצאת חבר מועדון שהעתיק.",
  "חובה להגיע לכל המפגשים ובזמן, חבר שיעדר יותר מפעמיים ללא סיבה מוצדקת בסמסטר יצא מהמועדון.",
  "יש לפנות במקרה הצורך לראש הצוות בכל בעיה אישית/צוותית על מנת לפתור את הבעיה על הצד הטוב ביותר.",
];

export const errorMessages = {
  id: "ID is not valid",
  experienceDetails: "Required Field",
  experience: "Required Field",
  program: "Required Field",
  schoolYear: "Required Field",
  fieldOfStudy: "Required Field",
  phoneNumber: "Phone number must contain 10 digits",
  email: "Email is not valid",
  fullName: "Name must be in English and must contain atleast 3 chars.",
};
