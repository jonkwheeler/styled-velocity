export const cssVarPropsAvailable = [
  {
    prop: 'gcs',
    property: 'grid-column-start',
    conversionType: 'gridMeasurement',
  },
  {
    prop: 'gcl',
    property: 'grid-column-start',
    conversionType: 'gridMeasurement',
  },
  {
    prop: 'grs',
    property: 'grid-row-start',
    conversionType: 'gridMeasurement',
  },
  {
    prop: 'gct',
    property: 'grid-row-start',
    conversionType: 'gridMeasurement',
  },
  {
    prop: 'gc',
    property: 'grid-column-end',
    propertyTwo: 'grid-row-end',
    conversionType: 'gridSpan',
  },
  {
    prop: 'gcw',
    property: 'grid-column-end',
    conversionType: 'gridSpan',
  },
  {
    prop: 'gch',
    property: 'grid-row-end',
    conversionType: 'gridSpan',
  },
  {
    prop: 'gridRows',
    property: 'grid-template-rows',
    conversionType: 'gridTemplateRows',
  },
]

const gridCellProps = [
  {
    prop: 'vc',
    property: 'width',
    propertyTwo: 'height',
    conversionType: 'gridCells',
  },
  {
    prop: 'vcw',
    propertyTwo: 'width',
    conversionType: 'gridCells',
  },
  {
    prop: 'vch',
    property: 'height',
    conversionType: 'gridCells',
  },
  {
    prop: 'vmincw',
    property: 'min-width',
    conversionType: 'gridCells',
  },
  {
    prop: 'vminch',
    property: 'min-height',
    conversionType: 'gridCells',
  },
  {
    prop: 'vmaxcw',
    property: 'max-width',
    conversionType: 'gridCells',
  },
  {
    prop: 'vmaxch',
    property: 'max-height',
    conversionType: 'gridCells',
  },
  {
    prop: 'vcm',
    property: 'margin',
    conversionType: 'gridCells',
  },
  {
    prop: 'vcml',
    property: 'margin-left',
    conversionType: 'gridCells',
  },
  {
    prop: 'vcmr',
    property: 'margin-right',
    conversionType: 'gridCells',
  },
  {
    prop: 'vcmx',
    property: 'margin-left',
    propertyTwo: 'margin-right',
    conversionType: 'gridCells',
  },
  {
    prop: 'vcmt',
    property: 'margin-top',
    conversionType: 'gridCells',
  },
  {
    prop: 'vcmb',
    property: 'margin-bottom',
    conversionType: 'gridCells',
  },
  {
    prop: 'vcmy',
    property: 'margin-top',
    propertyTwo: 'margin-bottom',
    conversionType: 'gridCells',
  },
  {
    prop: 'vcp',
    property: 'padding',
    conversionType: 'gridCells',
  },
  {
    prop: 'vcpl',
    property: 'padding-left',
    conversionType: 'gridCells',
  },
  {
    prop: 'vcpr',
    property: 'padding-right',
    conversionType: 'gridCells',
  },
  {
    prop: 'vcpx',
    property: 'padding-left',
    propertyTwo: 'padding-right',
    conversionType: 'gridCells',
  },
  {
    prop: 'vcpt',
    property: 'padding-top',
    conversionType: 'gridCells',
  },
  {
    prop: 'vcpb',
    property: 'padding-bottom',
    conversionType: 'gridCells',
  },
  {
    prop: 'vcpy',
    property: 'padding-top',
    propertyTwo: 'padding-bottom',
    conversionType: 'gridCells',
  },
  {
    prop: 'vctransform',
    property: 'transform',
    conversionType: 'getCellTranslate',
  },
]
