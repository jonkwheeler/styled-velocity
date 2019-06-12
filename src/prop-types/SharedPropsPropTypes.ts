import { HTMLProps } from 'react'

type Omit<Type, Key extends keyof Type> = Pick<Type, Exclude<keyof Type, Key>>

type ReducedHTMLProps = Omit<HTMLProps<HTMLDivElement>, 'color' | 'wrap'>

export interface SharedPropsPropTypes extends ReducedHTMLProps {
  bg?: string | object
  bgImage?: string | object
  bgPosition?: string | object
  bgSize?: string | object
  borderRadius?: string | object
  boxShadow?: string | object
  display?: string | object
  css?: string | object
  m?: string | number | object
  mt?: string | number | object
  mb?: string | number | object
  ml?: string | number | object
  mr?: string | number | object
  mx?: string | number | object
  my?: string | number | object
  p?: string | number | object
  pt?: string | number | object
  pb?: string | number | object
  pl?: string | number | object
  pr?: string | number | object
  px?: string | number | object
  py?: string | number | object
  h?: string | number | object
  w?: string | number | object
  minh?: string | number | object
  minw?: string | number | object
  maxh?: string | number | object
  maxw?: string | number | object
  c?: string | number | object
  cw?: string | number | object
  ch?: string | number | object
  cm?: string | number | object
  cml?: string | number | object
  cmr?: string | number | object
  cmt?: string | number | object
  cmb?: string | number | object
  cmx?: string | number | object
  cmy?: string | number | object
  cp?: string | number | object
  cpl?: string | number | object
  cpr?: string | number | object
  cpt?: string | number | object
  cpb?: string | number | object
  cpx?: string | number | object
  cpy?: string | number | object
  ctransform?: object
  displayMode?: boolean
  columns?: string | number | object
  autoWidthColumns?: boolean
  direction?: object | 'row' | 'column'
  wrap?: object | 'wrap' | 'nowrap'
  align?: object | 'left' | 'center' | 'middle' | 'right' | 'space-between' | 'space-around'
  alignSelf?: object | 'top' | 'bottom' | 'center' | 'middle' | 'stretch'
  valign?: object | 'top' | 'middle' | 'center' | 'bottom' | 'baseline' | 'stretch' | 'space-between' | 'space-around'
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
  gridLines?: boolean
  grow?: boolean
  shrink?: boolean
  t?: string | number | object
  b?: string | number | object
  l?: string | number | object
  r?: string | number | object
  x?: string | number | object
  y?: string | number | object
  ct?: string | number | object
  cb?: string | number | object
  cl?: string | number | object
  cr?: string | number | object
  cx?: string | number | object
  cy?: string | number | object
  position?: string | object
  z?: string | number | object
  color?: string | object
  textAlign?: string | object
  textTransform?: string | object
  fontFamily?: string | object
  fontSize?: string | number | object
  fontStyle?: string | object
  fontWeight?: string | number | object
  lineHeight?: string | number | object
}
