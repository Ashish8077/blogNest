import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
const RTE = ({ name, control, label, defaultValue = "" }) => {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      {/* 
        Using the Controller component from react-hook-form to bind TinyMCE to the form state.
        This allows TinyMCE to be part of your form and allows form submission, validation, and handling.
      */}
      <Controller
        name={name || "content"}
        control={control} // React Hook Form control passed from the parent component (useForm hook).
        render={({ field: { onChange } }) => (
          <Editor
            apiKey="8im9xa14ithgrgoomgp9nt2tz7s3hvs6s9zu0kvqyg3ycvng"
            initialValue={defaultValue}
            init={{
              height: 500,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
              ],
              toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
              resize: false,
              content_style:
                "body { font-family:Helvetica, Arial, sans-serif; font-size:14px }",
            }}
            // Whenever the content of the editor changes, call `onChange` to update the form state
            // React Hook Form's Controller will automatically track the content in the form field.
            onEditorChange={onChange} //it's commonly used to update the state of a form
          />
        )}
      />
    </div>
  );
};

export default RTE;
