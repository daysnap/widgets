
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement>{
  className?: string
  disabled?: boolean
  children?: React.ReactNode
  value?: any
}

const Checkbox: React.FC<CheckboxProps> = ({
  className,
  disabled,
  children,
  value,
  defaultChecked= false,
  ...restProps
}) => {

  const [checked, setChecked] = React.useState<Boolean>(defaultChecked)

  const cls = createPrefixCls('checkbox')
  const classes = classnames(
    `${cls}`,
    {
      [`is-checked`]: checked,
      [`is-disabled`]: disabled,
    },
    className,
  )

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (disabled) {
      return
    }
    setChecked(e.target.checked)
    restProps.onChange?.(e)
  }

  return (
    <label
      className={classes}>
      <span className={`${cls}-value`}>
        <input
          type="checkbox"
          disabled={disabled}
          checked={!!checked}
          onChange={handleChange}
          value={value}
        />
      </span>
      {children !== undefined && <span className={`${cls}-text`}>{children}</span>}
    </label>
  )
}

export default Checkbox

