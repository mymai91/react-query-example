import React, { FC, memo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LoginParams } from "../models/login";
import useLogin from "../hooks/useLogin";

const LoginSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

const Login: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginParams>({
    resolver: yupResolver(LoginSchema),
  });

  const { mutate: loginMutate } = useLogin();
  const onSubmit = useCallback(
    (data: LoginParams) => {
      // loginMutate(data, {
      //   onSuccess: (res: any) => {
      //     // console.log("res", res);
      //     // router.push(`/cards/${res.card.slug}`);
      //   },
      // });
      loginMutate(data);
    },
    [loginMutate]
  );

  return (
    <div>
      <p>Login</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
          <input {...register("email")} />
          {errors.email && <p>{errors.email?.message}</p>}
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Password</label>
          <input {...register("password")} type="password" />
          {errors.password && <p>{errors.password?.message}</p>}
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default memo(Login);