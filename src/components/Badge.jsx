function Badge({

 children,

 type,

}) {

 return (

  <span

   className={`badge ${type}`}

  >

   {children}

  </span>

 );

}

export default Badge;