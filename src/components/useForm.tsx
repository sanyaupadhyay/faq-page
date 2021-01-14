import { useState, useEffect } from "react";

const useForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    chat: "",
  });

  const [errors] = useState({});

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e:React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      setValues({
        name: "",
        email: "",
        chat: "",
      });
      //alert("Thanks you for contacting us!")
    }
  }, [errors]);

  return { handleChange, handleSubmit, values };
};

export default useForm;
