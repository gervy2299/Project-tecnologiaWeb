import { useEffect } from 'react';
import { useForm, useServiceStore } from '../../hooks';
import { BasicTemplate } from '../components/BasicTemplate';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
export const UpdateCheck = () => {

    const { activeCheck, createNewCheck } = useServiceStore();
    const navigate = useNavigate();

    const { formState, formState: {
        interval,
        max_redirects,
        max_retries,
        method,
        name,
        retry_interval,
        url,
        check_type,

    }, onInputChange, enabled, ignore_tls, onResetForm } = useForm({
        interval: activeCheck.interval,
        max_redirects: activeCheck.max_redirects,
        max_retries: activeCheck.max_retries,
        method: activeCheck.method,
        name: activeCheck.name,
        retry_interval: activeCheck.retry_interval,
        upside_down: true,
        url: activeCheck.url,
        check_type: activeCheck.check_type
    });

    useEffect(() => {
        enabled.current.checked = activeCheck.enabled;
        ignore_tls.current.checked = activeCheck.ignore_tls;
    }, []);



    const onUpdateSubmit = (e) => {
        e.preventDefault();
        formState.id = activeCheck.id;
        formState.created_date = activeCheck.created_date;
        formState.enabled = enabled.current.checked;
        formState.ignore_tls = ignore_tls.current.checked;  
        formState.interval = Number(formState.interval);
        formState.max_redirects = Number(formState.max_redirects);
        formState.max_retries = Number(formState.max_retries);
        formState.retry_interval = Number(formState.retry_interval);

        createNewCheck(formState);

        onResetForm();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Check actualizado correctamente',
            showConfirmButton: false,
            timer: 1500,
        });
        navigate(-1);

    }


    return (
        <>
            <BasicTemplate />
            <main className='container mx-auto'>
                <div className="mt-5 mb-10 p-4 overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                    <form action="" className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={onUpdateSubmit}>
                        <div>
                            <div className="relative flex flex-wrap gap-2 items-center">
                                <label
                                    className="cursor-pointer pl-2 text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
                                    htmlFor="id-c01"
                                >
                                    Habilitado
                                </label>
                                <input
                                    className="peer relative h-4 w-8 cursor-pointer appearance-none rounded-lg bg-slate-300 transition-colors after:absolute after:top-0 after:left-0 after:h-4 after:w-4 after:rounded-full after:bg-slate-500 after:transition-all checked:bg-blue-200 checked:after:left-4 checked:after:bg-blue-500 hover:bg-slate-400 after:hover:bg-slate-600 checked:hover:bg-blue-300 checked:after:hover:bg-blue-600 focus:outline-none checked:focus:bg-blue-400 checked:after:focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-200 disabled:after:bg-slate-300"
                                    type="checkbox"
                                    name="enabled"
                                    ref={enabled}
                                    id="id-c01"
                                />
                            </div>
                            <div className="relative flex flex-wrap gap-2 items-center">
                                <label
                                    className="cursor-pointer pl-2 text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
                                    htmlFor="id-c01"
                                >
                                    Ignorar TLS
                                </label>
                                <input
                                    className="peer relative h-4 w-8 cursor-pointer appearance-none rounded-lg bg-slate-300 transition-colors after:absolute after:top-0 after:left-0 after:h-4 after:w-4 after:rounded-full after:bg-slate-500 after:transition-all checked:bg-blue-200 checked:after:left-4 checked:after:bg-blue-500 hover:bg-slate-400 after:hover:bg-slate-600 checked:hover:bg-blue-300 checked:after:hover:bg-blue-600 focus:outline-none checked:focus:bg-blue-400 checked:after:focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-200 disabled:after:bg-slate-300"
                                    type="checkbox"
                                    name="ignore_tls"
                                    ref={ignore_tls}
                                    id="id-c01"
                                />
                            </div>
                            <div className="flex flex-col gap-2 my-5">
                                <select className="select select-bordered w-full max-w-xs" name="method"
                                    value={method} onChange={onInputChange}
                                    required >
                                    <option value="" disabled defaultValue>Método</option>
                                    <option value="Get">Get</option>
                                    <option value="Post">Post</option>
                                </select>
                                <select className="select select-bordered w-full max-w-xs"
                                    name="check_type"
                                    value={check_type} onChange={onInputChange}
                                    required
                                >
                                    <option value="" defaultValue disabled>Tipo de check</option>
                                    <option value="Dns">Dns</option>
                                    <option value="Http">Http</option>
                                    <option value="Ping">Ping</option>
                                    <option value="Tcp">Tcp</option>
                                    <option value="Udp">Udp</option>
                                </select>

                            </div>
                        </div>
                        <div>
                            <div className="form-control my-2">
                                <label className="input-group input-group-md">
                                    <span>Nombre</span>
                                    <input type="text" placeholder="Nuevo check" className="input input-bordered input-md"
                                        name="name" value={name} onChange={onInputChange} required />
                                </label>
                            </div>
                            <div className="form-control my-2">
                                <label className="input-group input-group-md">
                                    <span>Retry interval</span>
                                    <input type="number" placeholder="10" className="input input-bordered input-md"
                                        name="retry_interval"
                                        value={retry_interval}
                                        onChange={onInputChange}
                                        required

                                    />
                                </label>
                            </div>

                            <div className="form-control my-2">
                                <label className="input-group input-group-md">
                                    <span>URL</span>
                                    <input type="text" placeholder="https://www.youtube.com" className="input input-bordered input-md w-full"
                                        name="url"
                                        value={url}
                                        onChange={onInputChange}
                                        required

                                    />
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className="form-control my-2">
                                <label className="input-group input-group-md my-2">
                                    <span>Intervalo {interval}</span>
                                </label>
                                <input type="range" min="20" max="100" name="interval" value={interval} onChange={onInputChange} className="range range-primary" />
                            </div>
                            <div className="form-control my-2">
                                <label className="input-group input-group-md">
                                    <span>Máximo red.</span>
                                    <input type="number" placeholder="1" className="input input-bordered input-md"
                                        name="max_redirects"
                                        value={max_redirects}
                                        onChange={onInputChange}
                                        required

                                    />
                                </label>
                            </div>
                            <div className="form-control my-2">
                                <label className="input-group input-group-md">
                                    <span>Máximo ret.</span>
                                    <input type="number" placeholder="1" className="input input-bordered input-md"
                                        name="max_retries"
                                        value={max_retries}
                                        onChange={onInputChange}
                                        required

                                    />
                                </label>
                            </div>
                        </div>

                        <button type="submit" className="btn self-end hover:bg-blue-800 hover:text-white">
                            <p>Actualizar Check</p>
                        </button>

                    </form>
                </div>
            </main>
        </>
    )
}
