import { Link } from "react-router-dom";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const PostJobsForm = () => {
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
      stack: Yup.string()
        .min(3, "Must be 3 characters or less")
        .max(30, "Must be 20 characters or less")
        .required("Required"),
      experience: Yup.number().max(10).min(1).integer().default(0),
      position: Yup.string()
        .min(3, "Must be 3 characters or more")
        .max(20, "Must be 20 characters or less")
        .required("Required")
        .when("email", (email, schema) => {
          return !!email ? schema.required() : schema;
        }),
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
    <div>
      <div className="max-h-screen bg-gray-100 flex items-center p-4">
        <div className="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
          <form
            onSubmit={formik.handleSubmit}
            className="py-12 p-10 bg-white rounded-xl"
          >
            <div className="mb-6">
              <label className="mr-4 text-gray-700 font-bold inline-block mb-2">
                Job Title
              </label>
              <input
                type="text"
                className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                placeholder="Your name"
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
              <label className="mr-4 text-gray-700 font-bold inline-block mb-2">
                Position
              </label>
              <input
                type="text"
                className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                placeholder="Position You are applying for"
                id="position"
                name="position"
                onChange={formik.handleChange}
                value={formik.values.position}
              />
              {formik.errors.position ? (
                <div className="text-red-600">{formik.errors.position}</div>
              ) : null}
            </div>
            <div className="mb-6">
              <label className="mr-4 text-gray-700 font-bold inline-block mb-2">
              Job Description
              </label>
              <input
                id="email"
                name="email"
                type="text"
                className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                placeholder="@email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email ? (
                <div className="text-red-600">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="mb-6">
              <label className="mr-4 text-gray-700 font-bold inline-block mb-2">
                Portfolio Url
              </label>
              <input
                type="text"
                className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                placeholder="@github dribble behance personal project etc"
                id="url"
                name="url"
                onChange={formik.handleChange}
                value={formik.values.url}
              />
              {formik.errors.url ? (
                <div className="text-red-600">{formik.errors.url}</div>
              ) : null}
            </div>
            <div className="flex flex-wrap">
              <div className="w-6/12">
                <div className="">
                  <label className="mr-4 text-gray-700 font-bold inline-block mb-2">
                    Years of Experince
                  </label>
                  <input
                    type="number"
                    className="border bg-gray-100 py-2 px-4 w-40 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                    placeholder="Number of years"
                    id="experience"
                    name="experience"
                    onChange={formik.handleChange}
                    value={formik.values.experience}
                  />
                  {formik.errors.experience ? (
                    <div className="text-red-600">
                      {formik.errors.experience}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="w-6/12">
                <div className="">
                  <label className="mr-4 text-gray-700 font-bold inline-block mb-2">
                   Last Date
                  </label>
                  <input
                    type="text"
                    className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                    placeholder="@your stack here"
                    id="stack"
                    name="stack"
                    onChange={formik.handleChange}
                    value={formik.values.stack}
                  />
                  {formik.errors.stack ? (
                    <div className="text-red-600">{formik.errors.stack}</div>
                  ) : null}
                </div>
              </div>
            </div>
            <Link
            to="/success"
              type="submit"
              className="w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300 text-center"
            disabled={false}>
              Submit
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
export default PostJobsForm;
