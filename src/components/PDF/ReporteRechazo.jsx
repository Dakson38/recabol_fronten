import React from 'react';
import { Page, Document, Image, StyleSheet, Text, View } from '@react-pdf/renderer';
import StyleReporteRechazo from '../styles/reporteRechazos';
import logoRecabol from '../../assets/imgs/logo-recabol.png'

const PDFReporteRechazo = ({ reporte }) => (
    <Document>
        <Page size={[369, 679]} style={StyleReporteRechazo.page}>

            <View style={StyleReporteRechazo.logo_reporte_rechazo}>
                <Image src={logoRecabol} style={StyleReporteRechazo.info_recabol_logo} />
            </View>

            <View style={StyleReporteRechazo.titulo_reporte_rechazo}>
                <Text style={StyleReporteRechazo.titulo_reporte_rechazo_titulo}>REPORTE DE RECHAZO </Text>
                <Text style={StyleReporteRechazo.nro_reporte_rechazo_titulo}>Nro: </Text>
                <Text style={StyleReporteRechazo.nro_reporte_rechazo}>229032321</Text>
            </View>

            <View style={StyleReporteRechazo.tabla_1_reporte_rechazo}>
                <View style={StyleReporteRechazo.tabla_1_titulo}><Text>DATOS DE LA ORDEN</Text></View>
                <View style={StyleReporteRechazo.tabla_1_fila}>
                    <View style={StyleReporteRechazo.tabla_1_columna_titulo}>
                        <Text>FECHA RECHAZADA</Text>
                    </View>
                    <View style={StyleReporteRechazo.tabla_1_columna}>
                        <Text>15/05/2023</Text>
                    </View>
                    <View style={StyleReporteRechazo.tabla_1_columna_titulo}>
                        <Text>MARCA:</Text>
                    </View>
                    <View style={StyleReporteRechazo.tabla_1_columna}>
                        <Text>Yokohama</Text>
                    </View>
                </View>
                <View style={StyleReporteRechazo.tabla_1_fila}>
                    <View style={StyleReporteRechazo.tabla_1_columna_titulo}>
                        <Text>ORDEN-ALFA:</Text>
                    </View>
                    <View style={StyleReporteRechazo.tabla_1_columna}>
                        <Text>2831 B</Text>
                    </View>
                    <View style={StyleReporteRechazo.tabla_1_columna_titulo}>
                        <Text>MEDIDA:</Text>
                    </View>
                    <View style={StyleReporteRechazo.tabla_1_columna}>
                        <Text>11R225</Text>
                    </View>
                </View>
                <View style={StyleReporteRechazo.tabla_1_fila}>
                    <View style={StyleReporteRechazo.tabla_1_columna_titulo}>
                        <Text>CLIENTE:</Text>
                    </View>
                    <View style={StyleReporteRechazo.tabla_1_columna}>
                        <Text>Isabel Rocabado</Text>
                    </View>
                    <View style={StyleReporteRechazo.tabla_1_columna_titulo}>
                        <Text>SERIE:</Text>
                    </View>
                    <View style={StyleReporteRechazo.tabla_1_columna}>
                        <Text>YYY118</Text>
                    </View>
                </View>
            </View>

            <View style={StyleReporteRechazo.tabla_2_reporte_rechazo}>
                <View style={StyleReporteRechazo.tabla_1_titulo}><Text>DETALLE DEL RECHAZO</Text></View>
                <View style={StyleReporteRechazo.tabla_1_fila}>
                    <View style={StyleReporteRechazo.tabla_1_columna_titulo}>
                        <Text>MOMENTO DEL RECHAZO:</Text>
                    </View>
                    <View style={StyleReporteRechazo.tabla_2_columna}>
                        <Text>Isabel Rocabado</Text>
                    </View>
                </View>
                <View style={StyleReporteRechazo.tabla_1_fila}>
                    <View style={StyleReporteRechazo.tabla_1_columna_titulo}>
                        <Text>CAUSA DEL RECHAZO:</Text>
                    </View>
                    <View style={StyleReporteRechazo.tabla_2_columna}>
                        <Text>Isabel Rocabado</Text>
                    </View>
                </View>
                <View style={StyleReporteRechazo.tabla_1_fila}>
                    <View style={StyleReporteRechazo.tabla_1_columna_titulo}>
                        <Text>ESTADO:</Text>
                    </View>
                    <View style={StyleReporteRechazo.tabla_2_columna}>
                        <Text>Isabel Rocabado</Text>
                    </View>
                </View>
                <View style={StyleReporteRechazo.tabla_1_fila}>
                    <View style={StyleReporteRechazo.tabla_1_columna_titulo}>
                        <Text>TÉCNICO RESPONSABLE:</Text>
                    </View>
                    <View style={StyleReporteRechazo.tabla_2_columna}>
                        <Text>Isabel Rocabado</Text>
                    </View>
                </View>
            </View>
        </Page>
    </Document>
);

export default PDFReporteRechazo;
