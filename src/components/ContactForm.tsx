import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ErrorMessage } from "@hookform/error-message";
import { toast } from "react-hot-toast";
import { zoomIn } from "@/utils/motions";

const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta.env;

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: Record<string, unknown>) => {
    try {
      const { status } = await emailjs.send(
        VITE_SERVICE_ID!,
        VITE_TEMPLATE_ID!,
        data,
        VITE_PUBLIC_KEY
      );

      if (status === 200) {
        toast.success("Submitted successfully!");
        reset();
      }
    } catch (e) {
      toast.error("Something went wrong! Please try again.");
    }
  };

  return (
    <motion.form
      variants={zoomIn(0, 0.8)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 md:gap-6 p-6 bg-white rounded-xl shadow-lg w-[600px] max-w-[90%]"
    >
      <div className="w-full">
        <h2 className="font-bold mb-2 text-md">
          Name <span className="text-red-500 text-2xl">*</span>
        </h2>
        <input
          type="text"
          placeholder="Name"
          {...register("name", {
            required: "Please enter your name!",
          })}
          className="px-4 py-2 border-[1px] rounded-lg w-full text-base"
        />
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }: { message: string }) => (
            <p className="text-red-400 mt-2">{message}</p>
          )}
        />
      </div>
      <div className="w-full">
        <h2 className="font-bold mb-2 text-md">
          Email <span className="text-red-500 text-2xl">*</span>
        </h2>
        <input
          type="text"
          placeholder="Email"
          {...register("email", {
            required: "Please enter your email!",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Please enter a valid email!",
            },
          })}
          className="px-4 py-2 border-[1px] rounded-lg w-full text-base"
        />
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }: { message: string }) => (
            <p className="text-red-400 mt-2">{message}</p>
          )}
        />
      </div>
      <div className="w-full">
        <h2 className="font-bold mb-2 text-md">
          Message <span className="text-red-500 text-2xl">*</span>
        </h2>
        <textarea
          placeholder="Message"
          {...register("message", {
            required: "Please leave a message!",
          })}
          rows={6}
          className="px-4 py-2 border-[1px] rounded-lg w-full resize-y text-base"
        />
        <ErrorMessage
          errors={errors}
          name="message"
          render={({ message }: { message: string }) => (
            <p className="text-red-400 mt-2">{message}</p>
          )}
        />
      </div>
      <div className="flex justify-end">
        <motion.button
          whileHover={{ opacity: 0.9 }}
          whileTap={{ opacity: 1 }}
          type="submit"
          className="w-full sm:w-auto py-3 px-12 bg-primary-black text-white rounded-xl whitespace-nowrap"
        >
          Submit
        </motion.button>
      </div>
    </motion.form>
  );
}
