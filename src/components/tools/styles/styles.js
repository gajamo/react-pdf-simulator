  export const stylesContainerView = ( ) =>{

    return {
    stylesContainerView: {
        backgroundColor: '#525659',
        width:'990px',
        height: '99vh',
        minWidth:'400px', 
        margin: '8px',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'scroll',
        resize: 'both',
        display: 'block',
    },
    zoom:{
      zoom: '1',
    },
    // Styles button
    buttonConmon: {
      marginBottom:'20px',
    },
    buttonContent:{
      marginTop: '10vh',
      marginBottom: '10vh',
      position: 'fixed',
    },
    extendedIcon: {
      marginRight: 8,
    },
    sidebar: {
      position: 'sticky',
      top: '15px',
    },

}};
 
  export const stylesDataView = (  ) => ({
    marginText : {
      /*  Contenido  */
      backgroundColor: 'white',
       /*  Tamaño  */
      margin:'39px auto' ,
      marginBottom:'2vh' ,
      minWidth:'818px', 
      maxWidth:'818px',
      // height: '1055px', 
      // maxHeight: '1055px',
      // /* Forma  */
      // display: 'static',
      // position: 'relative',
      // Shadow
      WebkitBoxShadow: '1px 1px 11px 1px rgba(0,0,0,0.66)',
      MozBoxShadow: '1px 1px 11px 1px rgba(0,0,0,0.66)',
      BoxShadow: '1px 1px 11px 1px rgba(0,0,0,0.66)',
      overflow: 'hidden',
      
    },
    stylesText : {
      /*  Contenido  */
      backgroundColor: 'white',
       /*  Tamaño  */
      margin:'39px auto' ,
      marginBottom:'7.5vh' ,
      minWidth:'818px', 
      maxWidth:'818px',
      // height: '975px', 
      // maxHeight: '975px',//Esto es el alto maximo de la pagina
      // /* Forma  */
      // position: 'relative',
      // Shadow
      overflow: 'hidden',
      
    },
});

export const zoomCss = (num) => (
    {
      // zoom: `${num}`,
      transform: `scale(${num})`,
      margin:'59px auto',
      /* Posicionamiento al momento de transformar */
      WebkitTransformOrigin: '0% 0',
      MozTransformOrigin: '0 0',
      TransformOrigin: '0 0',
    }
)