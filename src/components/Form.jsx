import { useState } from "react"

function Form() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {

    }
  return (
    <div>Form</div>
  )
}

export default Form