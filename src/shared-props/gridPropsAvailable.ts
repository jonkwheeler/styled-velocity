export const gridTemplateProps = [
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
    prop: 'gcm',
    property: 'margin',
    conversionType: 'gridCells',
  },
  {
    prop: 'gcml',
    property: 'margin-left',
    conversionType: 'gridCells',
  },
  {
    prop: 'gcmr',
    property: 'margin-right',
    conversionType: 'gridCells',
  },
  {
    prop: 'gcmx',
    property: 'margin-left',
    propertyTwo: 'margin-right',
    conversionType: 'gridCells',
  },
  {
    prop: 'gcmt',
    property: 'margin-top',
    conversionType: 'gridCells',
  },
  {
    prop: 'gcmb',
    property: 'margin-bottom',
    conversionType: 'gridCells',
  },
  {
    prop: 'gcmy',
    property: 'margin-top',
    propertyTwo: 'margin-bottom',
    conversionType: 'gridCells',
  },
  {
    prop: 'gcp',
    property: 'padding',
    conversionType: 'gridCells',
  },
  {
    prop: 'gcpl',
    property: 'padding-left',
    conversionType: 'gridCells',
  },
  {
    prop: 'gcpr',
    property: 'padding-right',
    conversionType: 'gridCells',
  },
  {
    prop: 'gcpx',
    property: 'padding-left',
    propertyTwo: 'padding-right',
    conversionType: 'gridCells',
  },
  {
    prop: 'gcpt',
    property: 'padding-top',
    conversionType: 'gridCells',
  },
  {
    prop: 'gcpb',
    property: 'padding-bottom',
    conversionType: 'gridCells',
  },
  {
    prop: 'gcpy',
    property: 'padding-top',
    propertyTwo: 'padding-bottom',
    conversionType: 'gridCells',
  },
  {
    prop: 'gctransform',
    property: 'transform',
    conversionType: 'getCellTranslate',
  },
]

export const gridPropsAvailable = [...gridTemplateProps, ...gridCellProps]
