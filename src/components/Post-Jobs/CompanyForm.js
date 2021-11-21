import { Link } from "react-router-dom";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const CompanyForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      position: "",
      url: "",
      experience: "",
      stack: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Must be 3 characters or more")
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      url: Yup.string()
        .matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          "Enter correct url!"
        )
        .required("Please enter website"),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="min-h-screen ">
      <div className="flex items-center p-4">
        <div className="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
          <form
            onSubmit={formik.handleSubmit}
            className="py-12 p-10 bg-gray-600 rounded-xl"
          >
            <div className="mb-6">
              <label className="mr-4 font-bold inline-block mb-2 text-white">
                Company Name
              </label>
              <input
                type="text"
                className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                placeholder="Your company name"
                id="name"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.errors.name ? (
                <div className="text-red-600">{formik.errors.name}</div>
              ) : null}
            </div>
            
            <div className="mb-6">
              <label className="mr-4 font-bold inline-block mb-2 text-white">
                Corporate Email
              </label>
              <input
                id="email"
                name="email"
                type="text"
                className="border py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email ? (
                <div className="text-red-600">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="mb-6">
              <label className="mr-4 font-bold inline-block mb-2 text-white">
                Linkedin Account
              </label>
              <input
                type="text"
                className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                placeholder="Linkeding Account Link"
                id="url"
                name="url"
                onChange={formik.handleChange}
                value={formik.values.url}
              />
              {formik.errors.url ? (
                <div className="text-red-600">{formik.errors.url}</div>
              ) : null}
            </div>
            <Link
            to="/success"
              type="submit"
              className="w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 border border-white rounded-md hover:bg-indigo-500 transition duration-300 text-center"
            disabled={false}>
              Submit
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CompanyForm;
