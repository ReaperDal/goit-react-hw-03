/* eslint-disable react/prop-types */
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
      number: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      onAddContact({
        id: nanoid(),
        ...values,
      });
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        className={formik.errors.name && formik.touched.name ? styles.error : ''}
      />
      {formik.touched.name && formik.errors.name ? (
        <div className={styles.errorMessage}>{formik.errors.name}</div>
      ) : null}

      <label htmlFor="number">Number</label>
      <input
        id="number"
        name="number"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.number}
        className={formik.errors.number && formik.touched.number ? styles.error : ''}
      />
      {formik.touched.number && formik.errors.number ? (
        <div className={styles.errorMessage}>{formik.errors.number}</div>
      ) : null}

      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
