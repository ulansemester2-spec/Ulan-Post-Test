var wms_layers = [];


        var lyr_Positronretina_0 = new ol.layer.Tile({
            'title': 'Positron (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_AreaTerjangkauKetabang_1 = new ol.format.GeoJSON();
var features_AreaTerjangkauKetabang_1 = format_AreaTerjangkauKetabang_1.readFeatures(json_AreaTerjangkauKetabang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaTerjangkauKetabang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaTerjangkauKetabang_1.addFeatures(features_AreaTerjangkauKetabang_1);
var lyr_AreaTerjangkauKetabang_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaTerjangkauKetabang_1, 
                style: style_AreaTerjangkauKetabang_1,
                popuplayertitle: 'Area Terjangkau Ketabang',
                interactive: true,
                title: '<img src="styles/legend/AreaTerjangkauKetabang_1.png" /> Area Terjangkau Ketabang'
            });
var format_AreaTerjangkauPeneleh_2 = new ol.format.GeoJSON();
var features_AreaTerjangkauPeneleh_2 = format_AreaTerjangkauPeneleh_2.readFeatures(json_AreaTerjangkauPeneleh_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaTerjangkauPeneleh_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaTerjangkauPeneleh_2.addFeatures(features_AreaTerjangkauPeneleh_2);
var lyr_AreaTerjangkauPeneleh_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaTerjangkauPeneleh_2, 
                style: style_AreaTerjangkauPeneleh_2,
                popuplayertitle: 'Area Terjangkau Peneleh',
                interactive: true,
                title: '<img src="styles/legend/AreaTerjangkauPeneleh_2.png" /> Area Terjangkau Peneleh'
            });
var format_AreaTerjangkauKapasari_3 = new ol.format.GeoJSON();
var features_AreaTerjangkauKapasari_3 = format_AreaTerjangkauKapasari_3.readFeatures(json_AreaTerjangkauKapasari_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaTerjangkauKapasari_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaTerjangkauKapasari_3.addFeatures(features_AreaTerjangkauKapasari_3);
var lyr_AreaTerjangkauKapasari_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaTerjangkauKapasari_3, 
                style: style_AreaTerjangkauKapasari_3,
                popuplayertitle: 'Area Terjangkau Kapasari',
                interactive: true,
                title: '<img src="styles/legend/AreaTerjangkauKapasari_3.png" /> Area Terjangkau Kapasari'
            });
var format_AreaTerjangkauGenteng_4 = new ol.format.GeoJSON();
var features_AreaTerjangkauGenteng_4 = format_AreaTerjangkauGenteng_4.readFeatures(json_AreaTerjangkauGenteng_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaTerjangkauGenteng_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaTerjangkauGenteng_4.addFeatures(features_AreaTerjangkauGenteng_4);
var lyr_AreaTerjangkauGenteng_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaTerjangkauGenteng_4, 
                style: style_AreaTerjangkauGenteng_4,
                popuplayertitle: 'Area Terjangkau Genteng',
                interactive: true,
                title: '<img src="styles/legend/AreaTerjangkauGenteng_4.png" /> Area Terjangkau Genteng'
            });
var format_AreaTerjangkauEmbongKaliasinan_5 = new ol.format.GeoJSON();
var features_AreaTerjangkauEmbongKaliasinan_5 = format_AreaTerjangkauEmbongKaliasinan_5.readFeatures(json_AreaTerjangkauEmbongKaliasinan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaTerjangkauEmbongKaliasinan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaTerjangkauEmbongKaliasinan_5.addFeatures(features_AreaTerjangkauEmbongKaliasinan_5);
var lyr_AreaTerjangkauEmbongKaliasinan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaTerjangkauEmbongKaliasinan_5, 
                style: style_AreaTerjangkauEmbongKaliasinan_5,
                popuplayertitle: 'Area Terjangkau Embong Kaliasinan',
                interactive: true,
                title: '<img src="styles/legend/AreaTerjangkauEmbongKaliasinan_5.png" /> Area Terjangkau Embong Kaliasinan'
            });
var format_jalan_clean_6 = new ol.format.GeoJSON();
var features_jalan_clean_6 = format_jalan_clean_6.readFeatures(json_jalan_clean_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_clean_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_clean_6.addFeatures(features_jalan_clean_6);
var lyr_jalan_clean_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_clean_6, 
                style: style_jalan_clean_6,
                popuplayertitle: 'jalan_clean',
                interactive: true,
                title: '<img src="styles/legend/jalan_clean_6.png" /> jalan_clean'
            });
var format_halte_pt_7 = new ol.format.GeoJSON();
var features_halte_pt_7 = format_halte_pt_7.readFeatures(json_halte_pt_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_halte_pt_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_halte_pt_7.addFeatures(features_halte_pt_7);
var lyr_halte_pt_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_halte_pt_7, 
                style: style_halte_pt_7,
                popuplayertitle: 'halte_pt',
                interactive: true,
    title: 'halte_pt<br />\
    <img src="styles/legend/halte_pt_7_0.png" /> Halte Balai Kota<br />\
    <img src="styles/legend/halte_pt_7_1.png" /> Halte Bambu Runcing<br />\
    <img src="styles/legend/halte_pt_7_2.png" /> Halte Basra<br />\
    <img src="styles/legend/halte_pt_7_3.png" /> Halte Cak Durasim A<br />\
    <img src="styles/legend/halte_pt_7_4.png" /> Halte Cak Durasim B<br />\
    <img src="styles/legend/halte_pt_7_5.png" /> Halte Embong Kemiri<br />\
    <img src="styles/legend/halte_pt_7_6.png" /> Halte Embong Malang<br />\
    <img src="styles/legend/halte_pt_7_7.png" /> Halte Embong Malang 2<br />\
    <img src="styles/legend/halte_pt_7_8.png" /> Halte Embong Wungu<br />\
    <img src="styles/legend/halte_pt_7_9.png" /> Halte Genteng Kali A<br />\
    <img src="styles/legend/halte_pt_7_10.png" /> Halte Genteng Kali B<br />\
    <img src="styles/legend/halte_pt_7_11.png" /> Halte Gondosuli<br />\
    <img src="styles/legend/halte_pt_7_12.png" /> Halte Grand City<br />\
    <img src="styles/legend/halte_pt_7_13.png" /> Halte Gubernur Suryo<br />\
    <img src="styles/legend/halte_pt_7_14.png" /> Halte Jaksa Agung Suprapto<br />\
    <img src="styles/legend/halte_pt_7_15.png" /> Halte Jimerto<br />\
    <img src="styles/legend/halte_pt_7_16.png" /> Halte Kaliasin<br />\
    <img src="styles/legend/halte_pt_7_17.png" /> Halte Kantor Dinas Pendidikan<br />\
    <img src="styles/legend/halte_pt_7_18.png" /> Halte Kayoon 1A<br />\
    <img src="styles/legend/halte_pt_7_19.png" /> Halte Kayoon 1B<br />\
    <img src="styles/legend/halte_pt_7_20.png" /> Halte Kayoon 2A<br />\
    <img src="styles/legend/halte_pt_7_21.png" /> Halte Kayoon 2B<br />\
    <img src="styles/legend/halte_pt_7_22.png" /> Halte Ketabang Ngemplak<br />\
    <img src="styles/legend/halte_pt_7_23.png" /> Halte MMPA SIOLA A<br />\
    <img src="styles/legend/halte_pt_7_24.png" /> Halte Monkasel<br />\
    <img src="styles/legend/halte_pt_7_25.png" /> Halte Monumen Sudirman<br />\
    <img src="styles/legend/halte_pt_7_26.png" /> Halte MPP SIOLA B<br />\
    <img src="styles/legend/halte_pt_7_27.png" /> Halte Ngemplak<br />\
    <img src="styles/legend/halte_pt_7_28.png" /> Halte Pangsud<br />\
    <img src="styles/legend/halte_pt_7_29.png" /> Halte Pemuda<br />\
    <img src="styles/legend/halte_pt_7_30.png" /> Halte PMI<br />\
    <img src="styles/legend/halte_pt_7_31.png" /> Halte Simpang Dukuh<br />\
    <img src="styles/legend/halte_pt_7_32.png" /> Halte Sindoro<br />\
    <img src="styles/legend/halte_pt_7_33.png" /> Halte SIOLA<br />\
    <img src="styles/legend/halte_pt_7_34.png" /> Halte Slamet<br />\
    <img src="styles/legend/halte_pt_7_35.png" /> Halte SMPN 3<br />\
    <img src="styles/legend/halte_pt_7_36.png" /> Halte Sono Kembang<br />\
    <img src="styles/legend/halte_pt_7_37.png" /> Halte Sono Kembang 2<br />\
    <img src="styles/legend/halte_pt_7_38.png" /> Halte Taman Apsari<br />\
    <img src="styles/legend/halte_pt_7_39.png" /> Halte Taman Prestasi<br />\
    <img src="styles/legend/halte_pt_7_40.png" /> Halte Tunjungan<br />\
    <img src="styles/legend/halte_pt_7_41.png" /> Halte Urip Sumoharjo 1<br />\
    <img src="styles/legend/halte_pt_7_42.png" /> Halte Wuni<br />\
    <img src="styles/legend/halte_pt_7_43.png" /> Halte Yos Sudarso<br />' });
var format_ServiceArea400m_8 = new ol.format.GeoJSON();
var features_ServiceArea400m_8 = format_ServiceArea400m_8.readFeatures(json_ServiceArea400m_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceArea400m_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceArea400m_8.addFeatures(features_ServiceArea400m_8);
var lyr_ServiceArea400m_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiceArea400m_8, 
                style: style_ServiceArea400m_8,
                popuplayertitle: 'Service Area 400m',
                interactive: true,
                title: '<img src="styles/legend/ServiceArea400m_8.png" /> Service Area 400m'
            });

lyr_Positronretina_0.setVisible(true);lyr_AreaTerjangkauKetabang_1.setVisible(true);lyr_AreaTerjangkauPeneleh_2.setVisible(true);lyr_AreaTerjangkauKapasari_3.setVisible(true);lyr_AreaTerjangkauGenteng_4.setVisible(true);lyr_AreaTerjangkauEmbongKaliasinan_5.setVisible(true);lyr_jalan_clean_6.setVisible(true);lyr_halte_pt_7.setVisible(true);lyr_ServiceArea400m_8.setVisible(true);
var layersList = [lyr_Positronretina_0,lyr_AreaTerjangkauKetabang_1,lyr_AreaTerjangkauPeneleh_2,lyr_AreaTerjangkauKapasari_3,lyr_AreaTerjangkauGenteng_4,lyr_AreaTerjangkauEmbongKaliasinan_5,lyr_jalan_clean_6,lyr_halte_pt_7,lyr_ServiceArea400m_8];
lyr_AreaTerjangkauKetabang_1.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', 'LUAS JANGKAUAN': 'LUAS JANGKAUAN', });
lyr_AreaTerjangkauPeneleh_2.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', 'LUAS JANGKAUAN': 'LUAS JANGKAUAN', });
lyr_AreaTerjangkauKapasari_3.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', });
lyr_AreaTerjangkauGenteng_4.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', 'LUAS JANGKAUAN': 'LUAS JANGKAUAN', });
lyr_AreaTerjangkauEmbongKaliasinan_5.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', 'LUAS JANGKAUAN': 'LUAS JANGKAUAN', });
lyr_jalan_clean_6.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'bridge': 'bridge', 'tunnel': 'tunnel', 'width': 'width', 'highway': 'highway', 'surface': 'surface', 'railway': 'railway', 'layer': 'layer', 'oneway': 'oneway', 'name': 'name', 'smoothness': 'smoothness', });
lyr_halte_pt_7.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', });
lyr_ServiceArea400m_8.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', });
lyr_AreaTerjangkauKetabang_1.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'LUAS JANGKAUAN': 'TextEdit', });
lyr_AreaTerjangkauPeneleh_2.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'LUAS JANGKAUAN': 'TextEdit', });
lyr_AreaTerjangkauKapasari_3.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'type': '', 'start': '', });
lyr_AreaTerjangkauGenteng_4.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'LUAS JANGKAUAN': 'TextEdit', });
lyr_AreaTerjangkauEmbongKaliasinan_5.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'LUAS JANGKAUAN': 'TextEdit', });
lyr_jalan_clean_6.set('fieldImages', {'fid': '', 'osm_id': '', 'bridge': '', 'tunnel': '', 'width': '', 'highway': '', 'surface': '', 'railway': '', 'layer': '', 'oneway': '', 'name': '', 'smoothness': '', });
lyr_halte_pt_7.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', });
lyr_ServiceArea400m_8.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'type': '', 'start': '', });
lyr_AreaTerjangkauKetabang_1.set('fieldLabels', {'Nama_Halte': 'inline label - visible with data', 'Keterangan': 'hidden field', 'Sumber': 'hidden field', 'type': 'hidden field', 'start': 'hidden field', 'LUAS JANGKAUAN': 'inline label - visible with data', });
lyr_AreaTerjangkauPeneleh_2.set('fieldLabels', {'Nama_Halte': 'inline label - visible with data', 'Keterangan': 'hidden field', 'Sumber': 'hidden field', 'type': 'hidden field', 'start': 'hidden field', 'LUAS JANGKAUAN': 'inline label - visible with data', });
lyr_AreaTerjangkauKapasari_3.set('fieldLabels', {'Nama_Halte': 'inline label - visible with data', 'Keterangan': 'hidden field', 'Sumber': 'hidden field', 'type': 'hidden field', 'start': 'hidden field', });
lyr_AreaTerjangkauGenteng_4.set('fieldLabels', {'Nama_Halte': 'header label - visible with data', 'Keterangan': 'hidden field', 'Sumber': 'hidden field', 'type': 'hidden field', 'start': 'hidden field', 'LUAS JANGKAUAN': 'inline label - visible with data', });
lyr_AreaTerjangkauEmbongKaliasinan_5.set('fieldLabels', {'Nama_Halte': 'inline label - visible with data', 'Keterangan': 'hidden field', 'Sumber': 'hidden field', 'type': 'hidden field', 'start': 'hidden field', 'LUAS JANGKAUAN': 'inline label - visible with data', });
lyr_jalan_clean_6.set('fieldLabels', {'fid': 'hidden field', 'osm_id': 'hidden field', 'bridge': 'hidden field', 'tunnel': 'hidden field', 'width': 'hidden field', 'highway': 'hidden field', 'surface': 'hidden field', 'railway': 'hidden field', 'layer': 'hidden field', 'oneway': 'hidden field', 'name': 'inline label - visible with data', 'smoothness': 'hidden field', });
lyr_halte_pt_7.set('fieldLabels', {'Nama_Halte': 'inline label - visible with data', 'Keterangan': 'hidden field', 'Sumber': 'hidden field', });
lyr_ServiceArea400m_8.set('fieldLabels', {'Nama_Halte': 'inline label - visible with data', 'Keterangan': 'hidden field', 'Sumber': 'hidden field', 'type': 'hidden field', 'start': 'hidden field', });
lyr_ServiceArea400m_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});