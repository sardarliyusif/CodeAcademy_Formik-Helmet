import {  Form, Formik, Field } from "formik";
import { useState } from "react";

function App() {
  const [data, setData] = useState([])
  return (
    <div className="App">
      <Formik
        initialValues={{
          username: "",
          password: "",
          email: "",
          about: "",
          phoneNumber: "",
        }}
        onSubmit={(values) => {
          setData((prevState) => [...prevState,values])
        }}
      >
        {(props) => (
          <Form>
            <Field name="username" />
            <Field name="password" type="password" />
            <Field name="email" type="email" />
            <Field name="about" type="text" />
            <Field name="phoneNumber" type="number" />
            <button type="submit">Sign in</button>
          </Form>
        )}
      </Formik>

      {
        <ol>
          {data.map((element,index) => {
            return (
              <li key={index}>
                <p>{element.username}</p>
                <p>{element.password}</p>
                <p>{element.email}</p>
                <p>{element.about}</p>
                <p>{element.phoneNumber}</p>
                
              </li>
            )
          })}
        </ol>
      }   
      
    </div>
  );
}

export default App;
