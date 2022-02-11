import React from 'react'

export interface BounceLoadingProps extends React.HTMLAttributes<HTMLUListElement>{
  prefixCls?: string
  className?: string
  count?: number
}
