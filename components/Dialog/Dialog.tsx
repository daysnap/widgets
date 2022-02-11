
import React from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import Icon from '../Icon'
import { DialogProps } from './interface'

const Dialog: React.FC<DialogProps> = (props) => {
  const {
    className,
    title,
    children,
    showCancelButton= true,
    showConfirmButton= true,
    cancelButtonText= '取消',
    confirmButtonText= '确认',
    onConfirm,
    onCancel,
    visible,
    onAfterClose,
    ...restProps
  } = props

  if (!visible) return null

  const cls = createPrefixCls('dialog')
  const classes = classnames(
    `${cls}`,
    className,
  )

  const renderHeader = () => {
    const header = (
      <header className={`${cls}-header`}>
        <h2 className={`${cls}-title`}>{title}</h2>
        <Icon className={`${cls}-close`} icon="close"/>
      </header>
    )
    return title ? header : null
  }

  const handleConfirm = async () => {
    await onConfirm?.()
    await onAfterClose?.()
  }
  const handleCancel = async () => {
    await onCancel?.()
    await onAfterClose?.()
  }
  const renderFooter = () => {
    const footer = (
      <footer className={`${cls}-footer`}>
        {showCancelButton && <button className={`${cls}-button ${cls}-button-cancel`} onClick={handleCancel}>{cancelButtonText}</button>}
        {showConfirmButton && <button className={`${cls}-button ${cls}-button-confirm`} onClick={handleConfirm}>{confirmButtonText}</button>}
      </footer>
    )
    return showCancelButton || showConfirmButton ? footer : null
  }

  return (
    <div
      {...restProps}
      className={classes}
    >
      <div className={`${cls}-mask`}/>
      <div className={`${cls}-inner`}>
        {renderHeader()}
        <div className={`${cls}-content`}>{children}</div>
        {renderFooter()}
      </div>
    </div>
  )
}

type ApiType = typeof Dialog
interface ApiInterface extends ApiType {
  alert(options: DialogProps | React.ReactNode): Promise<any>
  confirm(options: DialogProps | React.ReactNode): Promise<any>
}

export interface DialogOptions extends Omit<DialogProps, 'onConfirm' | 'onCancel'>{}

;['alert', 'confirm'].forEach(type => {
  (Dialog as any)[type] = (options: DialogOptions | React.ReactNode) => {
    if (options && !(options as DialogOptions).children) {
      options = { children: options }
    }
    return createApi(Object.assign({ showCancelButton: type === 'confirm' }, options))
  }
})

export function createApi (config: DialogOptions) {
  const container = document.createElement('div')
  document.body.append(container)
  return new Promise<void>((resolve, reject) => {
    const props: DialogProps = {
      ...config,
      visible: true,
      onConfirm: resolve,
      onCancel: reject,
      onAfterClose: () => {
        const unmountResult = ReactDOM.unmountComponentAtNode(container)
        if (unmountResult && container.parentNode) {
          container.parentNode.removeChild(container)
        }
      }
    }
    return ReactDOM.render(<Dialog {...props}/>, container)
  })
}

export default Dialog as ApiInterface

