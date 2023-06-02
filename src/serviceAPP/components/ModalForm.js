import Swal from "sweetalert2";
import { useForm, useServiceStore } from "../../hooks"
import Modal from "react-modal";
import { useEffect } from "react";
import { getEnvVariables } from "../../helpers";


const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        width: "100%",
    },
};

//Modal.setAppElement('#root');
const appElement = getEnvVariables().REACT_APP_MODE !== 'test' ? '#root' : null;
Modal.setAppElement(appElement);
export const ModalForm = () => {

    const { createNewRunner, activeRunner, modal, closeModal } = useServiceStore();
    const { formState, formState: {
        name,
    }, onInputChange, is_global, setFormState, onResetForm } = useForm({
        name: "",
    });

    const handleCreateRunner = (e) => {
        e.preventDefault();
        formState.is_global = is_global.current.checked;
        createNewRunner(formState);
        if (activeRunner === null) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Runner creado correctamente',
                showConfirmButton: false,
                timer: 1500,
            });
        } else {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Runner actualizado correctamente',
                showConfirmButton: false,
                timer: 1500,
            });
        }

        onResetForm();
        closeModal();
    }

    const handleCloseModal = () => {
        closeModal();
        onResetForm();
    }

    useEffect(() => {
        if (activeRunner !== null) {
            setFormState({ ...activeRunner });
        }
    }, [activeRunner])




    return (
        <Modal
            isOpen={modal}
            onRequestClose={handleCloseModal}
            style={customStyles}
            className="modal-runner"
            overlayClassName="modal-fondo"
            closeTimeoutMS={200}
        >
            <div className="flex justify-between p-2">
                <h1 className="text-2xl font-bold">
                    {
                        activeRunner !== null ? "Actualizar runner" : "Crear nuevo runner"
                    }
                </h1>
                <button className="bg-red-800 text-white rounded-md" onClick={handleCloseModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <hr />
            <form action="" className="mt-5 flex flex-col p-4" onSubmit={handleCreateRunner}>
                <div className="relative">
                    <input
                        id="id-b14"
                        type="text"
                        placeholder="Nombre de runner"
                        className="peer relative h-10 w-full border-b border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-sky-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                        name="name"
                        value={name}
                        onChange={onInputChange}

                    />
                    <label
                        htmlFor="id-b14"
                        className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\u*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-sky-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                    >
                        Nombre de runner
                    </label>
                </div>
                <div className="relative mt-5 flex flex-wrap gap-2 items-center">
                    <label
                        className="cursor-pointer pl-2 text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
                        htmlFor="id-c01"
                    >
                        Global
                    </label>
                    <input
                        className="peer relative h-4 w-8 cursor-pointer appearance-none rounded-lg bg-slate-300 transition-colors after:absolute after:top-0 after:left-0 after:h-4 after:w-4 after:rounded-full after:bg-slate-500 after:transition-all checked:bg-blue-200 checked:after:left-4 checked:after:bg-blue-500 hover:bg-slate-400 after:hover:bg-slate-600 checked:hover:bg-blue-300 checked:after:hover:bg-blue-600 focus:outline-none checked:focus:bg-blue-400 checked:after:focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-200 disabled:after:bg-slate-300"
                        type="checkbox"
                        name="is_global"
                        ref={is_global}
                        value=""
                        id="id-c01"
                    />
                </div>
                <button type="submit" className="btn mt-8 self-center hover:bg-blue-500 hover:text-white">
                    {
                        activeRunner !== null ? "Actualizar" : "Crear"
                    }
                </button>
            </form>
        </Modal>
    )
}
