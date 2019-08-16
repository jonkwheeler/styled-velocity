export const gridPropsAvailable = [
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
  {
    prop: 'gap',
    property: 'grid-gap',
    conversionType: 'gridCells',
  },
]
