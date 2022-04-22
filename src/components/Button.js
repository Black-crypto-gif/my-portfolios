import React from 'react'
import swal from 'sweetalert';

function Button() {
    const HandleContact = () => {
        swal("Contact me at", "fethimellal@gmail.com", "success");
        }

  return (
    <button onClick={HandleContact}>
            <span class="shadow"></span>
            <span class="edge"></span>
            <span class="front text"> Contact me
            </span>
        </button>
  )
}

export default Button