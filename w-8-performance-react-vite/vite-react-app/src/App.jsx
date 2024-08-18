import Button from "./components/StyledComponents";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
    const handleError = () => {
        toast.error("Clicked Error Button", { theme: "dark" });
    };

    const handleSuccess = () => {
        toast.success("Clicked Success Button");
    };

    return (
        <>
            <h1>This is a react app developed using Vite!!!</h1>
            <Button onClick={handleError}>Error</Button>
            <Button onClick={handleSuccess}>Success</Button>;
            <ToastContainer position='top-center' />
        </>
    );
}

export default App;
