
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import Input, { InputProps } from './Input'
import Icon from '../Icon'

export interface PasswordProps extends Omit<InputProps, 'type'> {
  showPassword?: boolean
}

const Password: React.FC<PasswordProps> = ({
  className,
  showPassword= false,
  ...restProps
}) => {

  const [visible, setVisible] = React.useState<boolean>(false)
  const cls = createPrefixCls('input-password')
  const classes = classnames(
    `${cls}`,
    className,
  )
  const handleSwitch: React.MouseEventHandler<HTMLElement> = e => {
    setVisible(v => !v)
  }
  const suffix = (
    showPassword
      ? <Icon
          className={`${cls}-eye-${visible ? 'on' : 'off'}`}
          onClick={handleSwitch}
          onMouseDown={e => e.preventDefault()}
          onMouseUp={e => e.preventDefault()}
          icon={visible ? 'icon-yanjing' : 'icon-biyan'}
        />
      : null
  )

  return (
    <Input
      {...restProps}
      className={classes}
      type={visible ? 'text' : 'password'}
      suffix={suffix}
    />
  )
}

export default Password
