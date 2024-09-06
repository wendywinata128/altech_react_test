import ReactDOM from "react-dom";
import TextField from "../TextField";
import { BsGoogle } from "react-icons/bs";

export default function LoginModal({ show = false, onCloseDialog }) {
  const onClickOverlay = (event) => {
    if(event.target.classList.contains("overlay")){
        onCloseDialog && onCloseDialog()
    }
  };

  return ReactDOM.createPortal(
    <div
      className={`overlay fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/40 backdrop-blur-sm transition ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClickOverlay}
    >
      <div className="bg-white w-[420px] rounded shadow max-w-full mx-4 overflow-hidden">
        <div className="p-3 bg-gray-800 text-white text-center">
          Login Pengguna
        </div>

        <div className="flex flex-col px-5 py-6">
          <TextField title="Email" className="mb-2" />
          <TextField title="Password" className="mb-6" type="password" />

          <button className="bg-accent text-white w-full p-2.5 rounded-full">
            Login
          </button>

          <p className="my-4 text-center">Atau</p>

          <button className="p-2.5 w-full border rounded-full flex items-center justify-center gap-3 hover:bg-gray-800 hover:text-white transition">
            <BsGoogle />
            <p>Login dengan Google</p>
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("overlay")
  );
}
