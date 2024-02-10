


// const newMessage = () => {
//   return 4 + 4;
// }
// <h1>{ newMessage() }</h1>
// por consola sale el resultado de 4 + 8

// const newMessage = ( a, b ) => {
//   return a + b;
// }
// <h1>{ newMessage( 1,2 ) }</h1>


export const FirstApp = ( { title, subTitle } ) => {
  //console.log(props);
  return (
    <div>
      <h1>{ title }</h1>
      <h2>{ subTitle }</h2>
      <p>Soy Un Developer Full-Stack</p>
    </div> 
  )
}

