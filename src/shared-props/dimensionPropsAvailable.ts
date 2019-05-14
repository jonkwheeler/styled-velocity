// m: margin
// mt: margin-top
// mr: margin-right
// mb: margin-bottom
// ml: margin-left
// mx: margin-left and margin-right
// my: margin-top and margin-bottom
const marginPropsAvailable = [
  {
    prop: 'm',
    property: 'margin',
    conversionType: 'percentageOrPixel',
  },
  {
    prop: 'mt',
    property: 'margin-top',
    conversionType: 'percentageOrPixel',
  },
  {
    prop: 'mb',
    property: 'margin-bottom',
    conversionType: 'percentageOrPixel',
  },
  {
    prop: 'ml',
    property: 'margin-left',
    conversionType: 'percentageOrPixel',
  },
  {
    prop: 'mr',
    property: 'margin-right',
    conversionType: 'percentageOrPixel',
  },
  {
    prop: 'mx',
    property: 'margin-left',
    propertyTwo: 'margin-right',
    conversionType: 'percentageOrPixel',
  },
  {
    prop: 'my',
    property: 'margin-top',
    propertyTwo: 'margin-bottom',
    conversionType: 'percentageOrPixel',
  },
]

// p : padding
// pt: padding-top
// pr: padding-right
// pb: padding-bottom
// pl: padding-left
// px: padding-left and padding-right
// py: padding-top and padding-bottom
const paddingPropsAvailable = [
  {
    prop: 'p',
    property: 'padding',
    conversionType: 'percentageOrPixel',
  },
  {
    prop: 'pt',
    property: 'padding-top',
    conversionType: 'percentageOrPixel',
  },
  {
    prop: 'pb',
    property: 'padding-bottom',
    conversionType: 'percentageOrPixel',
  },
  {
    prop: 'pl',
    property: 'padding-left',
    conversionType: 'percentageOrPixel',
  },
  {
    prop: 'pr',
    property: 'padding-right',
    conversionType: 'percentageOrPixel',
  },

  {
    prop: 'px',
    property: 'padding-left',
    propertyTwo: 'padding-right',
    conversionType: 'percentageOrPixel',
  },
  {
    prop: 'py',
    property: 'padding-top',
    propertyTwo: 'padding-bottom',
    conversionType: 'percentageOrPixel',
  },
]

// c : cw and ch
// cw : cells width
// ch : cells height (cells tall)
// cm : cells margin
// cml : cells margin-left
// cmr : cells margin-right
// cmx: cells margin-left and cells margin-right
// cmy: cells margin-top and cells margin-bottom
// ct: cells offset via translateX and Y
const cellPropsAvailable = [
  {
    prop: 'c',
    property: 'width',
    propertyTwo: 'height',
    propertyThree: 'flex-basis',
    conversionType: 'getCells',
  },
  {
    prop: 'cw',
    property: 'flex-basis',
    propertyTwo: 'width',
    conversionType: 'getCells',
  },
  {
    prop: 'ch',
    property: 'height',
    conversionType: 'getCells',
  },
  {
    prop: 'cm',
    property: 'margin',
    conversionType: 'getCells',
  },
  {
    prop: 'cml',
    property: 'margin-left',
    conversionType: 'getCells',
  },
  {
    prop: 'cmr',
    property: 'margin-right',
    conversionType: 'getCells',
  },
  {
    prop: 'cmx',
    property: 'margin-left',
    propertyTwo: 'margin-right',
    conversionType: 'getCells',
  },
  {
    prop: 'cmt',
    property: 'margin-top',
    conversionType: 'getCells',
  },
  {
    prop: 'cmb',
    property: 'margin-bottom',
    conversionType: 'getCells',
  },
  {
    prop: 'cmy',
    property: 'margin-top',
    propertyTwo: 'margin-bottom',
    conversionType: 'getCells',
  },
  {
    prop: 'cp',
    property: 'padding',
    conversionType: 'getCells',
  },
  {
    prop: 'cpl',
    property: 'padding-left',
    conversionType: 'getCells',
  },
  {
    prop: 'cpr',
    property: 'padding-right',
    conversionType: 'getCells',
  },
  {
    prop: 'cpx',
    property: 'padding-left',
    propertyTwo: 'padding-right',
    conversionType: 'getCells',
  },
  {
    prop: 'cpt',
    property: 'padding-top',
    conversionType: 'getCells',
  },
  {
    prop: 'cpb',
    property: 'padding-bottom',
    conversionType: 'getCells',
  },
  {
    prop: 'cpy',
    property: 'padding-top',
    propertyTwo: 'padding-bottom',
    conversionType: 'getCells',
  },
  {
    prop: 'ctransform',
    property: 'transform',
    conversionType: 'getCellTranslate',
  },
]

const boundingBoxPropsAvailable = [
  {
    prop: 'h',
    property: 'height',
    conversionType: 'percentageOrPixel',
  },
  {
    prop: 'w',
    property: 'width',
    propertyTwo: 'flex-basis',
    conversionType: 'percentageOrPixel',
  },
  {
    prop: 'minh',
    property: 'min-height',
    conversionType: 'percentageOrPixel',
  },
  {
    prop: 'minw',
    property: 'min-width',
    conversionType: 'percentageOrPixel',
  },
  {
    prop: 'maxh',
    property: 'max-height',
    conversionType: 'percentageOrPixel',
  },
  {
    prop: 'maxw',
    property: 'max-width',
    conversionType: 'percentageOrPixel',
  },
]

export const dimensionPropsAvailable = [
  ...boundingBoxPropsAvailable,
  ...marginPropsAvailable,
  ...paddingPropsAvailable,
  ...cellPropsAvailable,
]
