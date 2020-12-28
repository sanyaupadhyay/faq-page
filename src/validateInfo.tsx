export default function validateInfo(values: { name:string, email :string,chat: string }) {
  let errors: { name:string, email :string,chat: string } = { name:'', email :'',chat: '' };

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
