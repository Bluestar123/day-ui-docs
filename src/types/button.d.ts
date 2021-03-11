/** Component size definition for button, input, etc */
export type ComponentSize = 'large' | 'medium' | 'small' | 'mini'
/** Button type */
export type ButtonType =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'text'

/** Same as native button's type */
export type ButtonNativeType = 'button' | 'submit' | 'reset' | 'menu'

interface IButton {
  /** Button size */
  size: ComponentSize

  /** Button type */
  type: ButtonType

  /** Determine whether it's a plain button */
  plain: boolean

  /** Determine whether it's a round button */
  round: boolean

  /** Determine whether it's loading */
  loading: boolean

  circle: boolean

  /** Disable the button */
  disabled: boolean

  /** Button icon, accepts an icon name of Element icon component */
  icon: string

  /** Same as native button's autofocus */
  autofocus: boolean

  /** Same as native button's type */
  nativeType: ButtonNativeType
}

/** Button Component */
export const DButton: IButton
