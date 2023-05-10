import { useEffect, useState } from "react"
import Swal from "sweetalert2";
import { useForm } from "../../hooks";
import { useAuthStore } from "../../hooks";
import { Link } from "react-router-dom";
import * as LottiePlayer from "@lottiefiles/lottie-player";

export const LoginPage = () => {

    const { startLogin, errorMessage } = useAuthStore();

    const [showPassword, setShowPassword] = useState(false);

    const { formState, formState: { username, password }, onInputChange, onResetForm } = useForm({
        username: "",
        password: "",
        remember_me: false,
    });

    const [checked, setChecked] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        formState.remember_me = checked;
        startLogin(formState);

        onResetForm();
    }

    useEffect(() => {
        if (errorMessage !== undefined) {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: errorMessage,
            })
        }
    }, [errorMessage])


    return (
        <>
            {/*    <!-- Component: Plain basic input  --> */}
            <div className="h-full mx-auto my-20 w-4/5 animate__animated animate__fadeIn">
                <main className="grid gap-8 items-center md:grid-cols-2">
                    <section className="animation hidden md:block">
                        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                        <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_B2qAl3/data.json" loop autoplay></lottie-player>
                    </section>
                    <section className="form">
                        <h1 className="my-2 text-3xl text-center font-medium">Login</h1>
                        <form action="" className="my-6 flex flex-col gap-10" onSubmit={handleSubmit}>
                            <div className="">
                                <div className="relative">
                                    <input
                                        id="id-b04"
                                        type="text"
                                        placeholder="Nombre de usuario"
                                        className="peer relative h-10 w-full border-b border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-sky-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                        name="username"
                                        value={username}
                                        onChange={onInputChange}
                                    />
                                    <label
                                        htmlFor="id-b04"
                                        className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\u*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-sky-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                    >
                                        Nombre de usuario
                                    </label>
                                </div>
                            </div>
                            <div className="">
                                <div className="relative">
                                    <input
                                        id="id-b14"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        className="peer relative h-10 w-full border-b border-slate-200 px-4 pr-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-sky-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                        name="password"
                                        value={password}
                                        onChange={onInputChange}
                                    />
                                    <label
                                        htmlFor="id-b14"
                                        className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\u*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-sky-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                    >
                                        Password
                                    </label>
                                    {showPassword ? (
                                        <svg
                                            onClick={() => setShowPassword(!showPassword)}
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="absolute top-2.5 right-4 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            aria-labelledby="title-2 description-2"
                                            role="graphics-symbol"
                                        >
                                            <title id="title-2">Check mark icon</title>
                                            <desc id="description-2">Icon description here</desc>
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            onClick={() => setShowPassword(!showPassword)}
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="absolute top-2.5 right-4 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            aria-labelledby="title-2d description-2d"
                                            role="graphics-symbol"
                                        >
                                            <title id="title-2d">Check mark icon</title>
                                            <desc id="description-2d">Icon description here</desc>
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                                            />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            <div className="relative flex flex-wrap items-center">
                                <input
                                    className="w-4 h-4 transition-colors bg-white border-2 rounded appearance-none cursor-pointer peer border-slate-500 checked:border-sky-500 checked:bg-sky-200 checked:hover:border-sky-600 checked:hover:bg-sky-300 focus:outline-none checked:focus:border-sky-700 checked:focus:bg-sky-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
                                    type="checkbox"
                                    value={checked}
                                    checked={checked}
                                    onChange={() => setChecked(!checked)}
                                    id="id-c04"
                                />
                                <label
                                    className="pl-2 cursor-pointer text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
                                    htmlFor="id-c04"
                                >
                                    Recuérdame
                                </label>
                                <svg
                                    className="absolute left-0 w-4 h-4 transition-all duration-300 -rotate-90 opacity-0 pointer-events-none top-1 fill-sky-500 stroke-sky-500 peer-checked:rotate-0 peer-checked:opacity-100 peer-hover:fill-sky-600 peer-hover:stroke-sky-600 peer-focus:fill-sky-700 peer-focus:stroke-sky-700 peer-disabled:cursor-not-allowed"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    aria-labelledby="title-01 description-01"
                                    role="graphics-symbol"
                                >
                                    <title id="title-01">Check mark icon</title>
                                    <desc id="description-01">
                                        Check mark icon to indicate whether the radio input is checked or
                                        not.
                                    </desc>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12.8116 5.17568C12.9322 5.2882 13 5.44079 13 5.5999C13 5.759 12.9322 5.91159 12.8116 6.02412L7.66416 10.8243C7.5435 10.9368 7.37987 11 7.20925 11C7.03864 11 6.87501 10.9368 6.75435 10.8243L4.18062 8.42422C4.06341 8.31105 3.99856 8.15948 4.00002 8.00216C4.00149 7.84483 4.06916 7.69434 4.18846 7.58309C4.30775 7.47184 4.46913 7.40874 4.63784 7.40737C4.80655 7.406 4.96908 7.46648 5.09043 7.57578L7.20925 9.55167L11.9018 5.17568C12.0225 5.06319 12.1861 5 12.3567 5C12.5273 5 12.691 5.06319 12.8116 5.17568Z"
                                    />
                                </svg>
                            </div>
                            <button type="submit" className="btn p-2 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-sky-500 hover:bg-sky-600 focus:bg-sky-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-300 disabled:shadow-none">
                                <span>Ingresar</span>
                            </button>
                        </form>

                        <p className="flex gap-2">
                            ¿No tienes cuenta?
                            <Link to={"/register"} className="font-semibold hover:underline flex">
                                Registrate
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </Link>
                        </p>
                    </section>

                </main>

            </div>
        </>
    )
}



