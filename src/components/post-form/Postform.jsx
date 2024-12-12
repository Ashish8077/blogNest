import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { CustomInput, CustomBtn, Select, RTE } from "../index";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import appwriteService from "../../appwrite/config";

const Postform = ({ post }) => {
  const { register, handleSubmit, watch, control, setValue, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });
  const navigate = useNavigate;
  const userData = useSelector((state) => state.auth.status);

  const submit = async (data) => {
    //if an existing post is being edited
    if (post) {
      //data.image This will log the FileList object
      //data.image[0] Access the first selected file
      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;
      if (file) {
        // Delete the old featured image
        appwriteService.deleteFile(post.featuredImage);
      }
      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      if (dbPost) {
        // If the update is successful, navigate to the updated post
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      //if post is not exist
      const file = await appwriteService.uploadFile(data.image[0]);
      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        // Create a new post with the data, including the user ID
        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData.$id,
        });
        // If the new post is successfully created
        if (dbPost) {
          // Navigate to the newly created post
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransfrom = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim() // Removes leading/trailing whitespace
        .toLowerCase() // Converts to lowercase
        .replace(/[^a-z0-9\s-]/g, "") // Removes non-alphanumeric characters except spaces and hyphens
        .replace(/\s+/g, "-") // Replaces one or more spaces with a single hyphen
        .replace(/--+/g, "-"); // Replaces multiple consecutive hyphens with a single one
    }
  }, []);

  //hook to watch for changes in the form fields and update the "slug" field based on the "title" field.
  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      // Check if the field that was changed is the "title" field
      if (name === "title") {
        // When the "title" field changes, generate a "slug" using the title value
        // The "slugTransfrom" function is used to convert the title into a URL-friendly string
        // The "setValue" function updates the value of the "slug" field
        // The "{ shouldValidate: true }" ensures that validation for the "slug" field is triggered after updating it
        setValue("slug", slugTransfrom(value.title, { shouldValidate: true }));
      }
    });
    return () => {
      // Cleanup function to unsubscribe from the watch when the component is unmounted or dependencies change
      subscription.unsubscribe();
    };
  }, [watch, slugTransfrom, setValue]);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className=" sm:flex sm:flex-wrap border-2 border-blackal ">
      <div className=" w-full mt-10 p-5 sm:w-2/3 px-2 sm:mt-5 ">
        <CustomInput
          label="Title"
          placeholder="Title :"
          className="mb-4 pl-2"
          {...register("title", { required: true })}
        />
        <CustomInput
          label="Slug"
          placeholder="Slug :"
          className="mb-4 pl-2"
          {...register("slug", { required: true })}
        />
        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="sm:w-1/3 px-2 sm:mt-9">
        <CustomInput
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <CustomBtn
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full">
          {post ? "Update" : "Submit"}
        </CustomBtn>
      </div>
    </form>
  );
};

export default Postform;
