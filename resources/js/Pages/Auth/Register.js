import React, { useEffect } from "react";
import Button from "@/Components/Button";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        // <Guest>
        //     <Head title="Register" />

        //     <ValidationErrors errors={errors} />

        //     <form onSubmit={submit}>
        //         <div>
        //             <Label forInput="name" value="Name" />

        //             <Input
        //                 type="text"
        //                 name="name"
        //                 value={data.name}
        //                 className="mt-1 block w-full"
        //                 autoComplete="name"
        //                 isFocused={true}
        //                 handleChange={onHandleChange}
        //                 required
        //             />
        //         </div>

        //         <div className="mt-4">
        //             <Label forInput="username" value="Username" />

        //             <Input
        //                 type="text"
        //                 name="username"
        //                 value={data.username}
        //                 className="mt-1 block w-full"
        //                 autoComplete="username"
        //                 handleChange={onHandleChange}
        //                 required
        //             />
        //         </div>

        //         <div className="mt-4">
        //             <Label forInput="email" value="Email" />

        //             <Input
        //                 type="email"
        //                 name="email"
        //                 value={data.email}
        //                 className="mt-1 block w-full"
        //                 autoComplete="username"
        //                 handleChange={onHandleChange}
        //                 required
        //             />
        //         </div>

        //         <div className="mt-4">
        //             <Label forInput="password" value="Password" />

        //             <Input
        //                 type="password"
        //                 name="password"
        //                 value={data.password}
        //                 className="mt-1 block w-full"
        //                 autoComplete="new-password"
        //                 handleChange={onHandleChange}
        //                 required
        //             />
        //         </div>

        //         <div className="mt-4">
        //             <Label forInput="password_confirmation" value="Confirm Password" />

        //             <Input
        //                 type="password"
        //                 name="password_confirmation"
        //                 value={data.password_confirmation}
        //                 className="mt-1 block w-full"
        //                 handleChange={onHandleChange}
        //                 required
        //             />
        //         </div>

        //         <div className="flex items-center justify-end mt-4">
        //             <Link href={route('login')} className="underline text-sm text-gray-600 hover:text-gray-900">
        //                 Already registered?
        //             </Link>

        //             <Button className="ml-4" processing={processing}>
        //                 Register
        //             </Button>
        //         </div>
        //     </form>
        // </Guest>

        <Guest>
            <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
                <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
                    <div className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
                        <div className="my-3 text-4xl font-bold tracking-wider text-center">
                            <a href="#">Chatan</a>
                        </div>
                        <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Nulla, architecto.
                        </p>
                        <p className="flex flex-col items-center justify-center mt-10 text-center">
                            <span>Sudah Memiliki Akun ?</span>
                            <Link
                                href={route("login")}
                                className="underline"
                            >
                                Masuk Disini
                            </Link>
                        </p>
                    </div>
                    <div className="p-5 bg-white md:flex-1">
                        <h3 className="my-4 text-2xl font-semibold text-gray-700">
                            Daftar Akun
                        </h3>
                        <form onSubmit={submit}>
                            <div className="flex flex-col space-y-1">
                                <Label forInput="name" value="Nama" />
                                <Input
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    className="mt-1 block w-full"
                                    autoComplete="name"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    required
                                />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <Label
                                    className={"mt-2"}
                                    forInput="username"
                                    value="Username"
                                />
                                <Input
                                    type="text"
                                    name="username"
                                    value={data.username}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    handleChange={onHandleChange}
                                    required
                                />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <Label
                                    className={"mt-2"}
                                    forInput="email"
                                    value="Email"
                                />
                                <Input
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    handleChange={onHandleChange}
                                    required
                                />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <Label
                                    className={"mt-2"}
                                    forInput="password"
                                    value="Password"
                                />
                                <Input
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    handleChange={onHandleChange}
                                    required
                                />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <Label
                                    className={'mt-2'}
                                    forInput="password_confirmation"
                                    value="Confirm Password"
                                />
                                <Input
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="my-2 block w-full"
                                    handleChange={onHandleChange}
                                    required
                                />
                            </div>
                            <div>
                                <button
                                    processing={processing}
                                    className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                                >
                                    Daftar
                                </button>
                            </div>
                            <div className="flex flex-col space-y-5 mt-2">
                                <span className="flex items-center justify-center space-x-2">
                                    <span className="h-px bg-gray-400 w-14"></span>
                                    <span className="font-normal text-gray-500">
                                        Atau
                                    </span>
                                    <span className="h-px bg-gray-400 w-14"></span>
                                </span>
                                <div className="flex flex-col space-y-4">
                                    <a
                                        href={route("google.login")}
                                        className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                                    >
                                        <span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-google text-red-500"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                            </svg>
                                        </span>
                                        <span className="text-sm font-medium text-gray-800 group-hover:text-white">
                                            Google
                                        </span>
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none"
                                    >
                                        <span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-facebook text-blue-600 group-hover:text-white"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                            </svg>
                                        </span>
                                        <span className="text-sm font-medium text-blue-500 group-hover:text-white">
                                            Facebook
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Guest>
    );
}
