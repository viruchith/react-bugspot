const FieldErrorsToStateMapper = (errors, fieldsErrors, setFieldsErrors) => {
    let newFieldsErrors = {};
  if (errors !== undefined) {
    Object.entries(fieldsErrors).forEach(([key, value]) => {
      if (errors[key]) {
        newFieldsErrors[key] = errors[key];
      } else {
        newFieldsErrors[key] = [];
      }
    });
  } else {
    Object.entries(fieldsErrors).forEach(([key, value]) => {
      newFieldsErrors[key] = [];
    });
  }
  setFieldsErrors(newFieldsErrors);

};

export default FieldErrorsToStateMapper;
