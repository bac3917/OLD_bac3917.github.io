var format_PA_Counties_clip0 = new ol.format.GeoJSON();
var features_PA_Counties_clip0 = format_PA_Counties_clip0.readFeatures(geojson_PA_Counties_clip0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PA_Counties_clip0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PA_Counties_clip0.addFeatures(features_PA_Counties_clip0);var lyr_PA_Counties_clip0 = new ol.layer.Vector({
                source:jsonSource_PA_Counties_clip0, 
                style: style_PA_Counties_clip0,
                title: "PA_Counties_clip"
            });var format_schools21 = new ol.format.GeoJSON();
var features_schools21 = format_schools21.readFeatures(geojson_schools21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_schools21 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_schools21.addFeatures(features_schools21);var lyr_schools21 = new ol.layer.Vector({
                source:jsonSource_schools21, 
                style: style_schools21,
                title: "schools2"
            });

lyr_PA_Counties_clip0.setVisible(true);lyr_schools21.setVisible(true);
var layersList = [lyr_PA_Counties_clip0,lyr_schools21];
lyr_PA_Counties_clip0.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'CNTYIDFP': 'CNTYIDFP', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'MTFCC': 'MTFCC', 'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'METDIVFP': 'METDIVFP', 'FUNCSTAT': 'FUNCSTAT', });
lyr_schools21.set('fieldAliases', {'cohort2': 'cohort2', 'LATCOD': 'LATCOD', 'LONCOD': 'LONCOD', 'Institution': 'Institution', });
lyr_PA_Counties_clip0.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUNTYNS': 'TextEdit', 'CNTYIDFP': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'LSAD': 'TextEdit', 'CLASSFP': 'TextEdit', 'MTFCC': 'TextEdit', 'CSAFP': 'TextEdit', 'CBSAFP': 'TextEdit', 'METDIVFP': 'TextEdit', 'FUNCSTAT': 'TextEdit', });
lyr_schools21.set('fieldImages', {'cohort2': 'TextEdit', 'LATCOD': 'TextEdit', 'LONCOD': 'TextEdit', 'Institution': 'TextEdit', });
lyr_PA_Counties_clip0.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'COUNTYNS': 'no label', 'CNTYIDFP': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'LSAD': 'no label', 'CLASSFP': 'no label', 'MTFCC': 'no label', 'CSAFP': 'no label', 'CBSAFP': 'no label', 'METDIVFP': 'no label', 'FUNCSTAT': 'no label', });
lyr_schools21.set('fieldLabels', {'cohort2': 'no label', 'LATCOD': 'no label', 'LONCOD': 'no label', 'Institution': 'no label', });
lyr_schools21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});