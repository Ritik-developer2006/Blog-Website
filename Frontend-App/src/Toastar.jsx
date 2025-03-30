import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the styles

function Toastr() {
    return (
        <div className="Toastr">
            <ToastContainer
                position="top-right" // Position of the toast
                autoClose={5000} // Toast duration (in ms)
                hideProgressBar={false} // Show progress bar
                newestOnTop={true} // Newest toasts will appear on top
                closeOnClick={true} // Close toast on click
                pauseOnHover={true} // Pause on hover
                draggable={true} // Draggable to reposition the toast
                pauseOnFocusLoss={false} // Whether to pause on focus loss
            />
        </div>
    );
}

export default Toastr;