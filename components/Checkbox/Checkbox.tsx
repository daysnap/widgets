
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement>{
  className?: string
  disabled?: boolean
  label?: any
  children?: React.ReactNode
  value?: undefined
}

const Checkbox: React.FC<CheckboxProps> = ({
  className,
  disabled,
  label = true,
  children,
  value,
  ...restProps
}) => {

  const cls = createPrefixCls('checkbox')
  const classes = classnames(
    `${cls}`,
    className,
  )

  return (
    <label
      className={classes}>
      <span className={`${cls}-value`}>
        <input
          type="checkbox"
          disabled={disabled}
        />
      </span>
      <span className={`${cls}-text`}>{children || label}</span>
    </label>
  )
}

export default Checkbox

