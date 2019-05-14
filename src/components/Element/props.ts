import {
  ChildrenPropTypes,
  ClassNamePropTypes,
  ElementPropTypes,
  IdPropTypes,
  RolePropTypes,
  SharedPropsPropTypes,
} from '@propTypes'

export interface ElementProps
  extends ChildrenPropTypes,
    ClassNamePropTypes,
    ElementPropTypes,
    IdPropTypes,
    RolePropTypes,
    SharedPropsPropTypes {}
