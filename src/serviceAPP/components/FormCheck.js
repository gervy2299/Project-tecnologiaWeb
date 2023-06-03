import Swal from "sweetalert2";
import { useForm, useServiceStore } from "../../hooks";
import { BasicTemplate } from "./BasicTemplate"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const FormCheck = () => {

  const { createNewCheck, errorMessage } = useServiceStore();



  const { formState, formState: {
    interval,
    max_redirects,
    max_retries,
    method,
    name,
    retry_interval,
    url,
    check_type

  }, onInputChange, enabled, ignore_tls, onResetForm } = useForm({
    interval: Number(45),
    max_redirects: Number(1),
    max_retries: Number(1),
    method: "",
    name: "",
    retry_interval: Number(10),
    upside_down: true,
    url: "",
    check_type: ""
  });



  const navigate = useNavigate();
  const onSubmitForm = (e) => {
    e.preventDefault();
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
      title: 'Check creado correctamente',
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");

  }

  useEffect(() => {
    if (errorMessage !== undefined) {

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: errorMessage,
      })
    }
  }, [errorMessage]);


  return (
    <>
      <BasicTemplate />
      <main className="container mx-auto">
        <div className="mt-5 mb-10 p-4 overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
          <form action="" aria-label="formCheck" className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={onSubmitForm}>
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
                  value=""
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
                  value={method} onChange={onInputChange} required>
                  <option value="" disabled defaultValue>Método</option>
                  <option value="GET">Get</option>
                  <option value="POST">Post</option>
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
                    required
                    name="retry_interval"
                    value={retry_interval}
                    onChange={onInputChange}
                  />
                </label>
              </div>

              <div className="form-control my-2">
                <label className="input-group input-group-md">
                  <span>URL</span>
                  <input type="text" placeholder="https://www.youtube.com" className="input input-bordered input-md w-full"
                    required
                    name="url"
                    value={url}
                    onChange={onInputChange}
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
                    required
                    name="max_redirects"
                    value={max_redirects}
                    onChange={onInputChange}
                  />
                </label>
              </div>
              <div className="form-control my-2">
                <label className="input-group input-group-md">
                  <span>Máximo ret.</span>
                  <input type="number" placeholder="1" className="input input-bordered input-md"
                    required
                    name="max_retries"
                    value={max_retries}
                    onChange={onInputChange}
                  />
                </label>
              </div>
            </div>
            <button type="submit" className="btn self-end hover:bg-blue-500 hover:text-white">
              <p>Crear Check</p>
            </button>
          </form>
        </div>
      </main>
    </>
  )
}



