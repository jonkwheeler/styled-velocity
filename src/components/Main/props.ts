import {
  ChildrenPropTypes,
  ClassNamePropTypes,
  ElementPropTypes,
  IdPropTypes,
  RolePropTypes,
  SharedPropsPropTypes,
} from '@propTypes'

export interface MainProps
  extends ChildrenPropTypes,
    ClassNamePropTypes,
    ElementPropTypes,
    IdPropTypes,
    RolePropTypes,
    SharedPropsPropTypes {}
