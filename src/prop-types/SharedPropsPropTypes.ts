import { HTMLAttributes, HTMLProps } from 'react'

type Omit<Type, Key extends keyof Type> = Pick<Type, Exclude<keyof Type, Key>>

type PropsAndAttrs = HTMLAttributes<any> & HTMLProps<HTMLDivElement>

type ReducedHTMLProps = Omit<PropsAndAttrs, 'color' | 'wrap'>

export interface SharedPropsPropTypes extends ReducedHTMLProps {
  /**
   * bg
   * @returns background css property
   * @type string | object
   * @example
   * bg='red'
   * bg={{ 0: 'red', 768: 'blue' }}
   */
  bg?: string | object

  /**
   * bgColor
   * @returns background-color css property
   * @type string | object
   * @example
   * bg='red'
   * bg={{ 0: 'red', 768: 'blue' }}
   */
  bgColor?: string | object

  /**
   * bgImage
   * @returns background-image css property
   * @type string | object
   * @example
   * bgImage='url(image.jpg)'
   * bgImage={{ 768: 'url(image2.jpg)' }}
   * bgImage={{ 0: 'url(image1.jpg)', 768: 'url(image2.jpg)' }}
   */
  bgImage?: string | object

  /**
   * bgPosition
   * @returns background-position css property
   * @type string | object
   * @example
   * bgPosition='top left'
   * bgPosition={{ 0: 'top left', 768: 'bottom left' }}
   */
  bgPosition?: string | object

  /**
   * bgSize
   * @returns background-size css property
   * @type string | object
   * @example
   * bgSize='cover'
   * bgSize={{ 0: '300%', 768: 'cover' }}
   */
  bgSize?: string | object

  /**
   * border
   * @returns border css property
   * @type string | object
   * @example
   * border='solid 1px black'
   * border={{ 0: 'solid 1px black', 768: 'solid 2px black' }}
   */
  border?: string | object

  /**
   * borderRadius
   * @returns border-radius css property
   * @type string | object
   * @example
   * borderRadius='50px'
   * borderRadius={{ 0: '10px', 768: '25%' }}
   */
  borderRadius?: string | object

  /**
   * boxShadow
   * @returns box-shadow css property
   * @type string | object
   * @example
   * boxShadow='5px 10px 10px black'
   * boxShadow={{ 0: '2px 5px 5px black', 768: '5px 10px 10px black' }}
   */
  boxShadow?: string | object

  /**
   * display
   * @returns display css property
   * @type string | object
   * @example
   * display='block'
   * display={{ 0: 'none', 768: 'initial' }}
   */
  display?: string | object

  /**
   * css
   * @returns extra css, an extra media query, or child css
   * @type string | template literal
   * @example
   * css="margin: 100%;"
   * css={`
   *    .child {color: red;}
   * `}
   * css={`
   *    [at]media (min-width: 10em) { color: blue; }
   * `}
   */
  css?: string

  /**
   * m
   * @returns margin css property
   * @type string | number | object
   * @example
   * m={50}
   * m={{ 0: 50, 768: 75 }}
   * m={{ 0: '5px', 768: '50%', 1024: '5em' }}
   */
  m?: string | number | object

  /**
   * mt
   * @returns margin-top css property
   * @type string | number | object
   * @example
   * mt={50}
   * mt={{ 0: 50, 768: 75 }}
   * mt={{ 0: '5px', 768: '50%', 1024: '5em' }}
   */
  mt?: string | number | object

  /**
   * mb
   * @returns margin-bottom css property
   * @type string | number | object
   * @example
   * mb={50}
   * mb={{ 0: 50, 768: 75 }}
   * mb={{ 0: '5px', 768: '50%', 1024: '5em' }}
   */
  mb?: string | number | object

  /**
   * ml
   * @returns margin-left css property
   * @type string | number | object
   * @example
   * ml={50}
   * ml={{ 0: 50, 768: 75 }}
   * ml={{ 0: '5px', 768: '50%', 1024: '5em' }}
   */
  ml?: string | number | object

  /**
   * mr
   * @returns margin-right css property
   * @type string | number | object
   * @example
   * mr={50}
   * mr={{ 0: 50, 768: 75 }}
   * mr={{ 0: '5px', 768: '50%', 1024: '5em' }}
   */
  mr?: string | number | object

  /**
   * mx (margin x-axis)
   * @returns margin-left & margin-right css properties
   * @type string | number | object
   * @example
   * mx={50}
   * mx={{ 0: 50, 768: 75 }}
   * mx={{ 0: '5px', 768: '50%', 1024: '5em' }}
   */
  mx?: string | number | object

  /**
   * my (margin y-axis)
   * @returns margin-top & margin-bottom css properties
   * @type string | number | object
   * @example
   * my={50}
   * my={{ 0: 50, 768: 75 }}
   * my={{ 0: '5px', 768: '50%', 1024: '5em' }}
   */
  my?: string | number | object

  /**
   * p
   * @returns padding css property
   * @type string | number | object
   * @example
   * p={50}
   * p={{ 0: 50, 768: 75 }}
   * p={{ 0: '5px', 768: '50%', 1024: '5em' }}
   */
  p?: string | number | object

  /**
   * pt
   * @returns padding-top css property
   * @type string | number | object
   * @example
   * pt={50}
   * pt={{ 0: 50, 768: 75 }}
   * pt={{ 0: '5px', 768: '50%', 1024: '5em' }}
   */
  pt?: string | number | object

  /**
   * pb
   * @returns padding-bottom css property
   * @type string | number | object
   * @example
   * pb={50}
   * pb={{ 0: 50, 768: 75 }}
   * pb={{ 0: '5px', 768: '50%', 1024: '5em' }}
   */
  pb?: string | number | object

  /**
   * pl
   * @returns padding-left css property
   * @type string | number | object
   * @example
   * pl={50}
   * pl={{ 0: 50, 768: 75 }}
   * pl={{ 0: '5px', 768: '50%', 1024: '5em' }}
   */
  pl?: string | number | object

  /**
   * pr
   * @returns padding-right css property
   * @type string | number | object
   * @example
   * pr={50}
   * pr={{ 0: 50, 768: 75 }}
   * pr={{ 0: '5px', 768: '50%', 1024: '5em' }}
   */
  pr?: string | number | object

  /**
   * px (padding x-axis)
   * @returns padding-left & padding-right css properties
   * @type string | number | object
   * @example
   * px={50}
   * px={{ 0: 50, 768: 75 }}
   * px={{ 0: '5px', 768: '50%', 1024: '5em' }}
   */
  px?: string | number | object

  /**
   * py (padding y-axis)
   * @returns padding-top & padding-bottom css properties
   * @type string | number | object
   * @example
   * py={50}
   * py={{ 0: 50, 768: '10%' }}
   * py={{ 0: 5, 768: '50%', 1024: '5em', 1440: 0 }}
   */
  py?: string | number | object

  /**
   * h
   * @returns height css property
   * @type string | number | object
   * @example
   * h={50}
   * h={{ 0: 50, 768: '10%' }}
   * h={{ 0: 5, 768: '50%', 1024: '5em', 1440: 0 }}
   */
  h?: string | number | object

  /**
   * w
   * @returns width & flex-basis css properties
   * @type string | number | object
   * @example
   * w={50}
   * w={{ 0: 50, 768: '10%' }}
   * w={{ 0: 5, 768: '50%', 1024: '5em', 1440: 0 }}
   */
  w?: string | number | object

  /**
   * minh
   * @returns min-height css property
   * @type string | number | object
   * @example
   * minh={50}
   * minh={{ 0: 50, 768: '10%' }}
   * minh={{ 0: 5, 768: '50%', 1024: '5em', 1440: 0 }}
   */
  minh?: string | number | object

  /**
   * minw
   * @returns min-width css property
   * @type string | number | object
   * @example
   * minw={50}
   * minw={{ 0: 50, 768: '10%' }}
   * minw={{ 0: 5, 768: '50%', 1024: '5em', 1440: 0 }}
   */
  minw?: string | number | object

  /**
   * maxh
   * @returns max-height css property
   * @type string | number | object
   * @example
   * maxh={50}
   * maxh={{ 0: 50, 768: '10%' }}
   * maxh={{ 0: 5, 768: '50%', 1024: '5em', 1440: 0 }}
   */
  maxh?: string | number | object

  /**
   * maxw
   * @returns max-width css property
   * @type string | number | object
   * @example
   * maxw={50}
   * maxw={{ 0: 50, 768: '10%' }}
   * maxw={{ 0: 5, 768: '50%', 1024: '5em', 1440: 0 }}
   */
  maxw?: string | number | object

  /**
   * c
   * @returns cells tall (height) & cells wide (width)
   * @type string | number | object
   * @example
   * c={5}
   * c={{ 0: 10, 768: 8 }}
   * c={{ 0: '50px', 768: 8 }}
   */
  c?: string | number | object

  /**
   * cw
   * @returns cells wide (width)
   * @type string | number | object
   * @example
   * cw={5}
   * cw={{ 0: 10, 768: 8 }}
   * cw={{ 0: '50px', 768: 8 }}
   */
  cw?: string | number | object

  /**
   * ch
   * @returns cells tall (height)
   * @type string | number | object
   * @example
   * ch={5}
   * ch={{ 0: 10, 768: 8 }}
   * ch={{ 0: '50px', 768: 8 }}
   */
  ch?: string | number | object

  /**
   * mincw
   * @returns min-cells tall (height) & min-cells wide (width)
   * @type string | number | object
   * @example
   * minc={5}
   * minc={{ 0: 10, 768: 8 }}
   * minc={{ 0: '50px', 768: 8 }}
   */
  minc?: string | number | object

  /**
   * mincw
   * @returns min-cells wide (width)
   * @type string | number | object
   * @example
   * mincw={5}
   * mincw={{ 0: 10, 768: 8 }}
   * mincw={{ 0: '50px', 768: 8 }}
   */
  mincw?: string | number | object

  /**
   * minch
   * @returns min-cells tall (height)
   * @type string | number | object
   * @example
   * minch={5}
   * minch={{ 0: 10, 768: 8 }}
   * minch={{ 0: '50px', 768: 8 }}
   */
  minch?: string | number | object

  /**
   * maxcw
   * @returns max-cells wide (width)
   * @type string | number | object
   * @example
   * maxcw={5}
   * maxcw={{ 0: 10, 768: 8 }}
   * maxcw={{ 0: '50px', 768: 8 }}
   */
  maxcw?: string | number | object

  /**
   * maxch
   * @returns max-cells tall (height)
   * @type string | number | object
   * @example
   * maxch={5}
   * maxch={{ 0: 10, 768: 8 }}
   * maxch={{ 0: '50px', 768: 8 }}
   */
  maxch?: string | number | object

  /**
   * cm
   * @returns cells margin
   * @type string | number | object
   * @example
   * cm={5}
   * cm={{ 0: 4, 768: 3 }}
   * cm={{ 0: '50px', 768: 5 }}
   */
  cm?: string | number | object

  /**
   * cml
   * @returns cells margin-left
   * @type string | number | object
   * @example
   * cm={5}
   * cm={{ 0: 4, 768: 3 }}
   * cm={{ 0: '50px', 768: 5 }}
   */
  cml?: string | number | object

  /**
   * @returns cells margin-right
   * @type string | number | object
   * @example
   * cmr={5}
   * cmr={{ 0: 4, 768: 3 }}
   * cmr={{ 0: '50px', 768: 5 }}
   */
  cmr?: string | number | object

  /**
   * cmt
   * @returns cells margin-top
   * @type string | number | object
   * @example
   * cmt={5}
   * cmt={{ 0: 4, 768: 3 }}
   * cmt={{ 0: '50px', 768: 5 }}
   */
  cmt?: string | number | object

  /**
   * cmb
   * @returns cells margin-bottom
   * @type string | number | object
   * @example
   * cmb={5}
   * cmb={{ 0: 4, 768: 3 }}
   * cmb={{ 0: '50px', 768: 5 }}
   */
  cmb?: string | number | object

  /**
   * cmx (cells margin x-axis)
   * @returns cells margin-left & cells margin-right
   * @type string | number | object
   * @example
   * cmx={5}
   * cmx={{ 0: 4, 768: 3 }}
   * cmx={{ 0: '50px', 768: 5 }}
   */
  cmx?: string | number | object

  /**
   * cmy (cells margin y-axis)
   * @returns cells margin-top & cells margin-bottom
   * @type string | number | object
   * @example
   * cmy={5}
   * cmy={{ 0: 4, 768: 3 }}
   * cmy={{ 0: '50px', 768: 5 }}
   */
  cmy?: string | number | object

  /**
   * cp
   * @returns cells padding
   * @type string | number | object
   * @example
   * cp={5}
   * cp={{ 0: 4, 768: 3 }}
   * cp={{ 0: '50px', 768: 5 }}
   */
  cp?: string | number | object

  /**
   * cpl
   * @returns cells padding-left
   * @type string | number | object
   * @example
   * cpl={5}
   * cpl={{ 0: 4, 768: 3 }}
   * cpl={{ 0: '50px', 768: 5 }}
   */
  cpl?: string | number | object

  /**
   * cpr
   * @returns cells padding-right
   * @type string | number | object
   * @example
   * cpr={5}
   * cpr={{ 0: 4, 768: 3 }}
   * cpr={{ 0: '50px', 768: 5 }}
   */
  cpr?: string | number | object

  /**
   * cpt
   * @returns cells padding-top
   * @type string | number | object
   * @example
   * cpt={5}
   * cpt={{ 0: 4, 768: 3 }}
   * cpt={{ 0: '50px', 768: 5 }}
   */
  cpt?: string | number | object

  /**
   * cpb
   * @returns  cells padding-bottom
   * @type string | number | object
   * @example
   * cpb={5}
   * cpb={{ 0: 4, 768: 3 }}
   * cpb={{ 0: '50px', 768: 5 }}
   */
  cpb?: string | number | object

  /**
   * cpx
   * @returns cells padding-left & cells padding-right
   * @type string | number | object
   * @example
   * cpx={5}
   * cpx={{ 0: 4, 768: 3 }}
   * cpx={{ 0: '50px', 768: 5 }}
   */
  cpx?: string | number | object

  /**
   * cpy
   * @returns cells padding-top & cells padding-bottom
   * @type string | number | object
   * @example
   * cpy={5}
   * cpy={{ 0: 4, 768: 3 }}
   * cpy={{ 0: '50px', 768: 5 }}
   */
  cpy?: string | number | object

  /**
   * ctransform
   * @returns cells transform translate for x and y coords
   * @type object
   * @desc A breakpoint is required, even if it's "0"
   * @example
   * ctransform={{ 0: { x: 1, y: 3 } }}
   * ctransform={{ 0: { x: 1, y: 3 }, 600: { x: 3, y: 6 } }}
   */
  ctransform?: object

  /**
   * displayMode
   * @desc Show bounding boxes of an element and it's children
   * @type boolean
   */
  displayMode?: boolean

  /**
   * columns
   * @desc Number of columns in a flex container
   * @type number | object
   * @example
   * columns={5}
   * columns={{ 0: 1, 768: 2, 1440: 3 }}
   */
  columns?: number | object

  /**
   * autoWidthColumns
   * @desc Have the number of columsn in a flex container match the number of children
   * @type boolean
   * @example autoWidthColumns={true}
   */
  autoWidthColumns?: boolean

  /**
   * direction
   * @returns flex-direction css property
   * @type object | 'row' | 'column'
   * @example
   * direction='row'
   * direction={{ 0: 'row', 768: 'column' }}
   */
  direction?: object | 'row' | 'column'

  /**
   * wrap
   * @returns flex-wrap css property
   * @type object | 'wrap' | 'nowrap'
   * @example
   * wrap='wrap'
   * wrap={{ 0: 'wrap', 768: 'nowrap' }}
   */
  wrap?: object | 'wrap' | 'nowrap'

  /**
   * align
   * @returns justify-content css property (horizontal justification)
   * @type object | 'left' | 'center' | 'middle' | 'right' | 'space-between' | 'space-around'
   * @example
   * align='left'
   * align={{ 0: 'left', 768: 'center' }}
   */
  align?: object | 'left' | 'center' | 'middle' | 'right' | 'space-between' | 'space-around'

  /**
   * @returns align-self css property
   * @type object | 'top' | 'bottom' | 'center' | 'middle' | 'stretch'
   * @example
   * alignSelf='top'
   * alignSelf={{ 0: 'top', 768: 'bottom' }}
   */
  alignSelf?: object | 'top' | 'bottom' | 'center' | 'middle' | 'stretch'

  /**
   * valign
   * @returns align-items css property (vertical justification)
   * @type object | 'top' | 'middle' | 'center' | 'bottom' | 'baseline' | 'stretch' | 'space-between' | 'space-around'
   * @desc 'center' and 'middle' return the same thing
   * @example
   * valign='center'
   * valign={{ 0: 'middle', 768: 'space-between' }}
   */
  valign?: object | 'top' | 'middle' | 'center' | 'bottom' | 'baseline' | 'stretch' | 'space-between' | 'space-around'

  /**
   * valignContent
   * @returns align-content css property (vertical justification when flex container has height greater than children)
   * @type string | object | 'top' | 'middle'| 'center' | 'bottom' | 'baseline' | 'stretch' | 'space-between' | 'space-around'
   * @example
   * valignContent='center'
   * valignContent={{ 0: 'middle', 768: 'space-between' }}
   */
  valignContent?:
    | string
    | object
    | 'top'
    | 'middle'
    | 'center'
    | 'bottom'
    | 'baseline'
    | 'stretch'
    | 'space-between'
    | 'space-around'

  /**
   * gridLines
   * @desc display grid lines for helpful design matching
   * @type boolean
   * @example gridLines={true}
   */
  gridLines?: boolean

  /**
   * grow
   * @returns flex-grow css property
   * @type boolean | object
   * @example
   * grow={true}
   * grow={{ 0: true, 768: false }}
   */
  grow?: boolean | object

  /**
   * shrink
   * @returns flex-shrink css property
   * @type boolean | object
   * @example
   * shrink={true}
   * shrink={{ 0: true, 768: false }}
   */
  shrink?: boolean | object

  /**
   * t
   * @returns top css property
   * @type string | number | object
   * @example
   * t={50}
   * t={{ 0: 50, 768: '10%' }}
   * t={{ 0: 5, 768: '50%', 1024: '5em', 1440: 0 }}
   */
  t?: string | number | object

  /**
   * b
   * @returns bottom css property
   * @type string | number | object
   * @example
   * b={50}
   * b={{ 0: 50, 768: '10%' }}
   * b={{ 0: 5, 768: '50%', 1024: '5em', 1440: 0 }}
   */
  b?: string | number | object

  /**
   * l
   * @returns left css property
   * @type string | number | object
   * @example
   * l={50}
   * l={{ 0: 50, 768: '10%' }}
   * l={{ 0: 5, 768: '50%', 1024: '5em', 1440: 0 }}
   */
  l?: string | number | object

  /**
   * r
   * @returns right css property
   * @type string | number | object
   * @example
   * r={50}
   * r={{ 0: 50, 768: '10%' }}
   * r={{ 0: 5, 768: '50%', 1024: '5em', 1440: 0 }}
   */
  r?: string | number | object

  /**
   * x
   * @returns left & right css properties
   * @type string | number | object
   * @example
   * x={50}
   * x={{ 0: 50, 768: '10%' }}
   * x={{ 0: 5, 768: '50%', 1024: '5em', 1440: 0 }}
   */
  x?: string | number | object

  /**
   * y
   * @returns top & bottom css properties
   * @type string | number | object
   * @example
   * y={50}
   * y={{ 0: 50, 768: '10%' }}
   * y={{ 0: 5, 768: '50%', 1024: '5em', 1440: 0 }}
   */
  y?: string | number | object

  /**
   * ct
   * @returns cells top
   * @type string | number | object
   * @example
   * ct={5}
   * ct={{ 0: 4, 768: 3 }}
   * ct={{ 0: '50px', 768: 5 }}
   */
  ct?: string | number | object

  /**
   * cb
   * @returns cells bottom
   * @type string | number | object
   * @example
   * cb={5}
   * cb={{ 0: 4, 768: 3 }}
   * cb={{ 0: '50px', 768: 5 }}
   */
  cb?: string | number | object

  /**
   * cl
   * @returns cells left
   * @type string | number | object
   * @example
   * cl={5}
   * cl={{ 0: 4, 768: 3 }}
   * cl={{ 0: '50px', 768: 5 }}
   */
  cl?: string | number | object

  /**
   * cr
   * @returns cells right
   * @type string | number | object
   * @example
   * cr={5}
   * cr={{ 0: 4, 768: 3 }}
   * cr={{ 0: '50px', 768: 5 }}
   */
  cr?: string | number | object

  /**
   * cx
   * @returns cells left & cells right
   * @type string | number | object
   * @example
   * cx={5}
   * cx={{ 0: 4, 768: 3 }}
   * cx={{ 0: '50px', 768: 5 }}
   */
  cx?: string | number | object

  /**
   * cy
   * @returns cells top & cells bottom
   * @type string | number | object
   * @example
   * cy={5}
   * cy={{ 0: 4, 768: 3 }}
   * cy={{ 0: '50px', 768: 5 }}
   */
  cy?: string | number | object

  /**
   * position
   * @returns position css propert
   * @type string | object
   * @example
   * position='relative'
   * position={{ 0: 'fixed', 768: 'relative' }}
   */
  position?: string | object

  /**
   * z
   * @returns z-index css property
   * @type string | number | object
   * @example
   * z={5}
   * z={{ 0: 50, 768: 5 }}
   */
  z?: string | number | object

  /**
   * order
   * @returns order css property
   * @type string | number | object
   * @example
   * order={0}
   * order={{ 0: 1, 768: -1 }}
   */
  order?: string | number | object

  /**
   * color
   * @returns color css property
   * @type string | object
   * @example
   * color='blue'
   * color={{ 0: 'red', 768: 'blue' }}
   */
  color?: string | object

  /**
   * textAlign
   * @returns text-align css property
   * @type string | object
   * @example
   * textAlign='center'
   * textAlign={{ 0: 'left', 768: 'center' }}
   */
  textAlign?: string | object

  /**
   * textTransform
   * @returns text-transform css property
   * @type string | object
   * @example
   * textAlign='uppercase'
   * textAlign={{ 0: 'capitalize', 768: 'uppercase' }}
   */
  textTransform?: string | object

  /**
   * fontFamily
   * @returns font-family css property
   * @type string | object
   * @example
   * fontFamily='Arial'
   * fontFamily={{ 0: 'Arial', 768: 'Comic Sans' }}
   */
  fontFamily?: string | object

  /**
   * fontSize
   * @returns font-size css property
   * @type string | object
   * @example
   * fontSize={12}
   * fontSize={{ 0: 12, 768: 14, 1440: 16 }}
   */
  fontSize?: string | number | object

  /**
   * fontStyle
   * @returns font-style css property
   * @type string | object
   * @example
   * fontStyle='italic'
   * fontStyle={{ 0: 'italic', 768: 'none' }}
   */
  fontStyle?: string | object

  /**
   * fontWeight
   * @returns font-weight css property
   * @type string | object
   * @example
   * fontStyle='500'
   * fontStyle={{ 0: '700', 768: '500' }}
   */
  fontWeight?: string | number | object

  /**
   * lineHeight
   * @returns line-height css property
   * @type string | object
   * @example
   * lineHeight='1.5'
   * lineHeight={{ 0: '2.5', 768: '2' }}
   */
  lineHeight?: string | number | object

  /**
   * gridRows
   * @returns grid-template-rows: repeat(${ value }, var(--grid-cell-size))
   * @type string | number | object
   * @example
   * gridRows={5}
   * gridRows={{ 0: 10, 768: 8 }}
   */
  gridRows?: number | object
}
