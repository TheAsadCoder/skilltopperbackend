import { body, validationResult } from "express-validator";

const registerValidation = [
  body("fullName")
    .notEmpty()
    .withMessage("Full name is required")
    .isLength({ min: 3 })
    .withMessage("Full name must be at least 3 characters long"),
  body("fatherName")
    .notEmpty()
    .withMessage("Father name is required")
    .isLength({ min: 3 })
    .withMessage("Father name must be at least 3 characters long"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("phone")
    .matches(/^03[0-9]{9}$/)
    .withMessage(
      "Phone must be a valid Pakistani number (e.g., 0300xxxxxxx)"
    ),
  body("cnic")
    .matches(/^[0-9]{5}-[0-9]{7}-[0-9]$/)
    .withMessage("CNIC must be in the format 12345-1234567-1"),
  body("dateOfBirth")
    .isISO8601()
    .withMessage("Valid date of birth is required (YYYY-MM-DD)"),
  body("gender")
    .isIn(["Male", "Female", "Other"])
    .withMessage("Gender must be Male, Female, or Other"),
  body("qualification").notEmpty().withMessage("Qualification is required"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
    .isLength({ max: 16 })
    .withMessage("Password must be under 16 characters"),
];

const adminRegisterValidation = [
  body("fullName")
    .notEmpty()
    .withMessage("Full name is required")
    .isLength({ min: 3 })
    .withMessage("Full name must be at least 3 characters long"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
    .isLength({ max: 16 })
    .withMessage("Password must be under 16 characters"),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export { registerValidation, validate, adminRegisterValidation };
