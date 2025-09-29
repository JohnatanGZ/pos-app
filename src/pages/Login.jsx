import logo from "../assets/react.svg";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { Formik } from "formik";

const validate = (values) => {
    const errors = {}

    if(!values.username) {
        errors.username = 'Requerido'
    }

    if(!values.password) {
        errors.password = 'Requerido'
    } else if(values.password.length < 6){
        errors.password = 'La contraseña debe tener al menos 6 caracteres.'
    }

    return errors
}

const validateRegister = (values) => {
    const errors = {}

    if(!values.name) {
        errors.name = 'Requerido'
    }

    if(!values.username) {
        errors.username = 'Requerido'
    }

    if(!values.password) {
        errors.password = 'Requerido'
    } else if(values.password.length < 6){
        errors.password = 'La contraseña debe tener al menos 6 caracteres.'
    }

    if(!values.confirmPassword) {
        errors.confirmPassword = 'Requerido'
    } else if(values.confirmPassword != values.password){
        errors.confirmPassword = 'Las contraseñas no coinciden.'
    }

    return errors
}

const Login = () => {
    const [visible, setVisible] = useState(true)
    
    return (
        <main className={visible ? 'bg-main-light' : 'bg-main-blue'}>
            <Formik initialValues={{ username: '', password: '' }} validate={validate} onSubmit={values => console.log(values)}>
                {formik =>
                    <form onSubmit={formik.handleSubmit} className={visible ? "absolute card-login" : 'absolute card-login-hide'}>
                        <h1 className="text-3xl font-semibold text-white">Inicio de sesión</h1>

                        <img src={logo} className="w-25 h-25 my-7 drop-shadow-xl drop-shadow-cyan-300" alt="Logo" />

                        <h2 className="text-lg font-light text-white mb-5">Ingresa tus datos para acceder</h2>

                        <div className="relative group mt-6">
                            <input id="inputUser" {...formik.getFieldProps('username')} type="text" className={formik.touched.username && formik.errors.username ? "peer w-[300px] h-10 border border-red-500 rounded-md shadow-lg shadow-black/20 px-3 bg-white placeholder-transparent focus:outline-none" : "peer w-[300px] h-10 border border-transparent rounded-md shadow-lg shadow-black/20 px-3 bg-white placeholder-transparent focus:outline-none"} placeholder=" " />

                            <label htmlFor="inputUser" className="absolute flex gap-2 left-3 -top-7 items-center text-white font-semibold peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-7 peer-focus:text-white peer-focus:font-semibold transition-all duration-300 ease-in-out">
                                <Icon icon="material-symbols:person-rounded" width="25" height="25" /> Usuario
                            </label>
                        </div>

                        {formik.touched.username && formik.errors.username ? <div className="text-red-600">{formik.errors.username}</div> : <div className="text-red-500 h-4"></div>}

                        <div className="relative group mt-6">
                            <input id="inputPass" {...formik.getFieldProps('password')} type="password" className={formik.touched.password && formik.errors.password ? "peer w-[300px] h-10 border border-red-500 rounded-md shadow-lg shadow-black/20 px-3 bg-white placeholder-transparent focus:outline-none" : "peer w-[300px] h-10 border border-transparent rounded-md shadow-lg shadow-black/20 px-3 bg-white placeholder-transparent focus:outline-none"} placeholder=" " />

                            <label htmlFor="inputPass" className="absolute flex gap-2 left-3 -top-7 items-center text-white font-semibold peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-7 peer-focus:text-white peer-focus:font-semibold transition-all duration-300 ease-in-out">
                                <Icon icon="material-symbols:vpn-key-outline-rounded" width="25" height="25" /> Contraseña
                            </label>
                        </div>

                        {formik.touched.password && formik.errors.password ? <div className="text-red-600">{formik.errors.password}</div> : <div className="text-red-500 h-4"></div>}

                        <button type="submit" className="w-40 h-10 my-7 rounded-lg border-2 shadow-lg shadow-black/40 border-white dark:border-blue-high bg-white dark:bg-blue-high font-semibold text-blue-high dark:text-white cursor-pointer hover:scale-110 transition duration-400 ease-in-out">
                            Ingresar
                        </button>

                        <button type="button" className="text-md text-white dark:text-blue-medium cursor-pointer hover:underline" onClick={() => setVisible(prev => !prev)}>¿Aun no tienes una cuenta?</button>
                    </form>
                }
            </Formik>
            
            <Formik initialValues={{ name: '', username: '', password: '', confirmPassword: '' }} validate={validateRegister} onSubmit={values => console.log(values)}>
                {formik => 
                    <form onSubmit={formik.handleSubmit} className={visible ? 'absolute card-register-hide' : 'absolute card-register'}>
                        <h1 className="text-3xl text-blue-high dark:text-white font-semibold">Formulario de Registro</h1>

                        <img src={logo} className="w-25 h-25 my-5 drop-shadow-xl drop-shadow-cyan-300" alt="Logo" />

                        <div className="relative group mt-6">
                            <input id="inputName" {...formik.getFieldProps('name')} type="text" className={formik.touched.name && formik.errors.name ? "peer w-[300px] h-10 border border-red-500 rounded-md shadow-lg shadow-black/20 px-3 bg-white placeholder-transparent focus:outline-none" : "peer w-[300px] h-10 border border-gray-200 rounded-md shadow-lg shadow-black/20 px-3 bg-white placeholder-transparent focus:outline-none"} placeholder=" " />

                            <label htmlFor="inputName" className="absolute flex gap-2 left-3 -top-7 items-center text-blue-high dark:text-white font-semibold peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-7 peer-focus:text-blue-high dark:peer-focus:text-white peer-focus:font-semibold transition-all duration-300 ease-in-out">
                                <Icon icon="material-symbols:inbox-text-person" width="25" height="25" /> Nombre completo
                            </label>

                        </div>
                        
                        {formik.touched.name && formik.errors.name ? <div className="text-red-600">{formik.errors.name}</div> : <div className="text-red-500 h-4"></div>}

                        <div className="relative group mt-6">
                            <input id="inputUserRegister" {...formik.getFieldProps('username')} type="text" className={formik.touched.username && formik.errors.username ? "peer w-[300px] h-10 border border-red-500 rounded-md shadow-lg shadow-black/20 px-3 bg-white placeholder-transparent focus:outline-none" : "peer w-[300px] h-10 border border-gray-200 rounded-md shadow-lg shadow-black/20 px-3 bg-white placeholder-transparent focus:outline-none"} placeholder=" " />

                            <label htmlFor="inputUserRegister" className="absolute flex gap-2 left-3 -top-7 items-center text-blue-high dark:text-white font-semibold peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-7 peer-focus:text-blue-high dark:peer-focus:text-white peer-focus:font-semibold transition-all duration-300 ease-in-out">
                                <Icon icon="material-symbols:person-rounded" width="25" height="25" /> Usuario
                            </label>
                        </div>

                        {formik.touched.username && formik.errors.username ? <div className="text-red-600">{formik.errors.username}</div> : <div className="text-red-500 h-4"></div>}

                        <div className="relative group mt-6">
                            <input id="inputPassRegister" {...formik.getFieldProps('password')} type="password" className={formik.touched.password && formik.errors.password ? "peer w-[300px] h-10 border border-red-500 rounded-md shadow-lg shadow-black/20 px-3 bg-white placeholder-transparent focus:outline-none" : "peer w-[300px] h-10 border border-gray-200 rounded-md shadow-lg shadow-black/20 px-3 bg-white placeholder-transparent focus:outline-none"} placeholder=" " />

                            <label htmlFor="inputPassRegister" className="absolute flex gap-2 left-3 -top-7 items-center text-blue-high dark:text-white font-semibold peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-7 peer-focus:text-blue-high dark:peer-focus:text-white peer-focus:font-semibold transition-all duration-300 ease-in-out">
                                <Icon icon="material-symbols:vpn-key-outline-rounded" width="25" height="25" /> Contraseña
                            </label>
                        </div>

                        {formik.touched.password && formik.errors.password ? <div className="text-red-600">{formik.errors.password}</div> : <div className="text-red-500 h-4"></div>}

                        <div className="relative group mt-6">
                            <input id="inputPassConfirm" {...formik.getFieldProps('confirmPassword')} type="password" className={formik.touched.confirmPassword && formik.errors.confirmPassword ? "peer w-[300px] h-10 border border-red-500 rounded-md shadow-lg shadow-black/20 px-3 bg-white placeholder-transparent focus:outline-none" : "peer w-[300px] h-10 border border-gray-200 rounded-md shadow-lg shadow-black/20 px-3 bg-white placeholder-transparent focus:outline-none"} placeholder=" " />

                            <label htmlFor="inputPassConfirm" className="absolute flex gap-2 left-3 -top-7 items-center text-blue-high dark:text-white font-semibold peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-7 peer-focus:text-blue-high dark:peer-focus:text-white peer-focus:font-semibold transition-all duration-300 ease-in-out">
                                <Icon icon="material-symbols:vpn-key-outline-rounded" width="25" height="25" /> Confirmar contraseña
                            </label>
                        </div>

                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className="text-red-600">{formik.errors.confirmPassword}</div> : <div className="text-red-500 h-4"></div>}

                        <button type="submit" className="w-40 h-10 my-5 rounded-lg border-2 shadow-lg shadow-black/40 border-blue-high bg-blue-high dark:bg-white dark:border-white font-semibold text-white dark:text-blue-high cursor-pointer hover:scale-110 transition duration-400 ease-in-out">
                            Registrar
                        </button>

                        <button type="button" className="text-md text-blue-high dark:text-blue-light cursor-pointer hover:underline" onClick={() => setVisible(prev => !prev)}>¿Ya tienes una cuenta?</button>
                    </form>
                }
            </Formik>
        </main>
    )
}

export default Login;