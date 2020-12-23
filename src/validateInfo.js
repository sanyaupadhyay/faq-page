export default function validateInfo(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Name Required";
  }
  if (!values.email) {
    errors.email = "Email Required";
  }
  if (!values.chat) {
    errors.chat = "Enter Question/Message";
  }
  return errors;
}
