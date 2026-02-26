function Button({

 children,

 onClick,

 variant,

 type = "button",

}) {

 return (

  <button

   type={type}

   onClick={onClick}

   className={`btn ${variant || ""}`}

  >

   {children}

  </button>

 );

}

export default Button;