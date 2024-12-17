import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),
  number: Yup.string()
    .required("Number is required")
    .min(3, "Too Short!")
    .max(50, "Too Long!"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onAdd }) => {
  // const nameFieldId = useId();
  // const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    const newContact = { ...values, id: nanoid() };
    onAdd(newContact);
    actions.resetForm();
    actions.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <label>
            Name
            <div>
              <Field className={css.field} type="text" name="name" />
              <ErrorMessage
                name="name"
                component="div"
                style={{ color: "tomato" }}
              />
            </div>
          </label>
          <label>
            Number
            <div>
              <Field
                className={css.field}
                type="tel"
                inputMode="tel"
                name="number"
              />
              <ErrorMessage
                name="number"
                component="div"
                style={{ color: "tomato" }}
              />
            </div>
          </label>
          <button type="submit" disabled={isSubmitting}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
