
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import { RadioGroupContext } from './RadioGroup'

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement>{
  children?: React.ReactNode
  value?: any
}

const Radio: React.FC<RadioProps> = ({
  className,
  disabled,
  children,
  value,
  defaultChecked= false,
  ...restProps
}) => {

  const [checked, setChecked] = React.useState<Boolean>(defaultChecked)
  const radioGroupContext = React.useContext(RadioGroupContext)

  const cls = createPrefixCls('radio')
  const classes = classnames(
    `${cls}`,
    {
      [`is-checked`]: checked,
      [`is-disabled`]: disabled,
    },
    className,
  )

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    if (disabled) {
      return
    }
    setChecked(e.target.checked)
    restProps.onChange?.(e)
  }

  const radioProps: RadioProps = {
    ...restProps,
    value,
    onChange: handleChange,
  }
  if (radioGroupContext) {
    Object.assign(radioProps, {
      name: radioGroupContext.name,
      disabled: disabled || radioGroupContext.disabled,
      checked: radioGroupContext.value.includes(value),
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(e)
        radioGroupContext.toggleOption({ value })
      }
    })
  }

  return (
    <label
      className={classes}
    >
      <span className={`${cls}-value`}>
        <input
          {...radioProps}
          type="radio"
        />
      </span>
      {children !== undefined && <span className={`${cls}-text`}>{children}</span>}
    </label>
  )
}

export default Radio

