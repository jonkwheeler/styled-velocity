import {
  ChildrenPropTypes,
  ClassNamePropTypes,
  ElementPropTypes,
  IdPropTypes,
  RolePropTypes,
  SharedPropsPropTypes,
} from '@propTypes'

export interface BoxProps
  extends ChildrenPropTypes,
    ClassNamePropTypes,
    ElementPropTypes,
    IdPropTypes,
    RolePropTypes,
    SharedPropsPropTypes {}
