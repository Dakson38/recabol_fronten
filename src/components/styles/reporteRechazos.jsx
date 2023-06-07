import { StyleSheet } from '@react-pdf/renderer';

const StyleReporteRechazo = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: '20px'
  },

  /*************PRIMERA SECCION***************/
  logo_reporte_rechazo:{
    height:'30px',
  },
  info_recabol_logo:{
    width:'50%',
    alignSelf:'center'
  },
  /*********************************************/



  /*************SEGUNDA SECCION***************/
  titulo_reporte_rechazo:{
    height:'30px',
    flexDirection:'row',
    fontSize:'10px',
    justifyContent:'space-between',
    alignItems:'center'
  },
  titulo_reporte_rechazo_titulo:{
    width:'70%',
  },
  nro_reporte_rechazo:{
    color:'red',
  },
  /*********************************************/



  /*************TERCERA SECCION***************/
  tabla_1_reporte_rechazo:{
    height:'154px',
    flexDirection:'column',
    fontSize:'10px'
  },
  tabla_1_titulo:{
    height:'19px',
    backgroundColor: '#0081DF',
    justifyContent:'center',
    alignItems:'center'
  },
  tabla_1_fila:{
    height:'45px',
    flexDirection:'row'
  },
  tabla_1_columna_titulo:{
    width:'80px',
    maxWidth:'80px',
    justifyContent:'center',
    padding:'5px',
    backgroundColor:'#B6DAFC'
  },
  tabla_1_columna:{
    width:'80px',
    maxWidth:'80px',
    justifyContent:'center',
    padding:'5px'
  },

  /*********************************************/



  /*************CUARTA SECCION***************/
  tabla_2_reporte_rechazo:{
    height:'242px',
    flexDirection:'column',
    fontSize:'10px'
  },
  tabla_2_columna:{
    width:'100%',
    justifyContent:'center',
    padding:'5px'
  },
  /*********************************************/
});

export default StyleReporteRechazo;
