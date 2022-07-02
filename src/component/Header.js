import { useForm } from "react-hook-form";
const Header = () => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    resetField("email");
  };

  return (
    <section className="card card--home">
      <h1 className="card__header">NeFT is coming soon</h1>
      <p className="card__subtitle">
        NeFT is a platform to buy, sell, hold and stake cryptocurrency. To get
        notified at launch, please enter your email below.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="email"
          className="form__input"
          placeholder="Email address"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid email",
            },
          })}
        />
        {errors.email && <p className="form__error">{errors.email.message}</p>}
        <input
          className="btn btn--secondary"
          type="submit"
          value="Get notified"
        />
      </form>
    </section>
  );
};

export default Header;
