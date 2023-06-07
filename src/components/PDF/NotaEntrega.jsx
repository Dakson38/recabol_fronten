import React from 'react';
import { Page, Document, Image, StyleSheet, Text, View } from '@react-pdf/renderer';
import StyleNotaEntrega from '../styles/notaEntregas';
import logoRecabol from '../../assets/imgs/logo-recabol.png'

const PDFNotaEntrega = ({ notaEntrega }) => (
    <Document>
        <Page size={[619, 477]} style={StyleNotaEntrega.page}>

            <View style={StyleNotaEntrega.section_1}>
                <View style={StyleNotaEntrega.info_recabol}>
                    <Image src={logoRecabol} style={StyleNotaEntrega.info_recabol_logo} />
                    <View>
                        <Text style={StyleNotaEntrega.info_recabol_texto}>
                            RECAUCHUTADORA Y VULCANIZADORA DE LLANTAS
                        </Text>
                        <Text style={StyleNotaEntrega.info_recabol_texto}>
                            Av.  Circumvalación entre C. Beni y C. S/N. Zona Noreste
                        </Text>
                        <Text style={StyleNotaEntrega.info_recabol_texto}>
                            Telf. 5287714 - Cels. 72459881 -  72459882
                        </Text>
                        <Text style={StyleNotaEntrega.info_recabol_texto}>
                            Oruro - Bolivia
                        </Text>
                    </View>
                </View>

                <View style={StyleNotaEntrega.nro_fecha}>
                    <View>
                        <Text style={StyleNotaEntrega.nro_fecha_texto}>NOTA DE ENTREGA</Text>
                        <View style={StyleNotaEntrega.nro_orden_cont}>
                            <Text style={StyleNotaEntrega.nro_orden_texto}>N-°</Text><Text style={StyleNotaEntrega.nro_orden_dato}>390123</Text>
                        </View>
                        <View style={StyleNotaEntrega.fecha_cont}>
                            <Text style={StyleNotaEntrega.fecha_cont_texto}>MIDAS:</Text><Text style={StyleNotaEntrega.fecha_cont_dato}>04/06/2023</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={StyleNotaEntrega.section_2}>

                <View style={StyleNotaEntrega.senior}>
                    <Text>Señor(es): </Text><Text>Juan Benitez de la riva y bosques del llano</Text>
                </View>

                <View style={StyleNotaEntrega.senior_datos}>
                    <View style={StyleNotaEntrega.senior_datos_ref}>
                        <Text>Ref:</Text><Text>76543210</Text>
                    </View>
                </View>

            </View>

            <View style={StyleNotaEntrega.section_3}>

                <View style={StyleNotaEntrega.table_header}>
                    <View style={StyleNotaEntrega.table_column_cant}><Text>Cant.</Text></View>
                    <View style={StyleNotaEntrega.table_column_orden}><Text>No. Órden</Text></View>
                    <View style={StyleNotaEntrega.table_column_alfa}><Text>No. ALFA</Text></View>
                    <View style={StyleNotaEntrega.table_column_marca}><Text>Marca</Text></View>
                    <View style={StyleNotaEntrega.table_column_medida}><Text>Medida</Text></View>
                    <View style={StyleNotaEntrega.table_column_serie}><Text>Serie</Text></View>
                    <View style={StyleNotaEntrega.table_column_trabajo}><Text>Trabajo</Text></View>
                    <View style={StyleNotaEntrega.table_column_total}><Text>Total</Text></View>
                </View>

                {notaEntrega.map((item, index) => (
                    <View
                        key={item.id}
                        style={[
                            StyleNotaEntrega.table_data,
                            index % 2 === 0 ? StyleNotaEntrega.evenRow : StyleNotaEntrega.oddRow,
                        ]}
                    >
                        <View style={StyleNotaEntrega.table_column_cant}>
                            <Text>{item.id}</Text>
                        </View>
                        <View style={StyleNotaEntrega.table_column_orden}>
                            <Text>{item.orden}</Text>
                        </View>
                        <View style={StyleNotaEntrega.table_column_alfa}>
                            <Text>{item.alfa}</Text>
                        </View>
                        <View style={StyleNotaEntrega.table_column_marca}>
                            <Text>{item.marca}</Text>
                        </View>
                        <View style={StyleNotaEntrega.table_column_medida}>
                            <Text>{item.medida}</Text>
                        </View>
                        <View style={StyleNotaEntrega.table_column_serie}>
                            <Text>{item.serie}</Text>
                        </View>
                        <View style={StyleNotaEntrega.table_column_trabajo}>
                            <Text>{item.trabajo}</Text>
                        </View>
                        <View style={StyleNotaEntrega.table_column_total}>
                            <Text>{item.total}</Text>
                        </View>
                    </View>
                ))},

                <View style={StyleNotaEntrega.table_footer}>
                    <View style={StyleNotaEntrega.table_column_cant}><Text></Text></View>
                    <View style={StyleNotaEntrega.table_column_orden}><Text></Text></View>
                    <View style={StyleNotaEntrega.table_column_alfa}><Text></Text></View>
                    <View style={StyleNotaEntrega.table_column_marca}><Text></Text></View>
                    <View style={StyleNotaEntrega.table_column_medida}><Text></Text></View>
                    <View style={StyleNotaEntrega.table_column_serie}><Text></Text></View>
                    <View style={StyleNotaEntrega.table_column_trabajo}><Text>Total Bs.</Text></View>
                    <View style={StyleNotaEntrega.table_column_total}><Text>600</Text></View>
                </View>

            </View>

            <View style={StyleNotaEntrega.section_4}>
                <View style={StyleNotaEntrega.lugar_entrega}>
                    <Text>Lugar de Recepción:</Text><Text>Recabol</Text>
                </View>

                <View style={StyleNotaEntrega.contratante}>
                    <Text>..........................................</Text>
                    <Text>CONTRATANTE</Text>
                </View>
                <View style={StyleNotaEntrega.despachado_por_entrega}>
                    <Text>..........................................</Text>
                    <Text>DESPACHADO POR</Text>
                </View>
            </View>
        </Page>
    </Document>
);

export default PDFNotaEntrega;
