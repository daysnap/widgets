
import React from 'react'
import {AlignType, OnAlign} from "../Align";

export type ActionType = 'click' | 'hover' | 'focus' | 'blur'

export type BuildInPlacements = Record<string, AlignType>

export interface TriggerProps {
  prefixCls?: string
  className?: string
  children: React.ReactNode | React.ReactNode []
  action?: ActionType | ActionType []
  showAction?: ActionType | ActionType[]
  hideAction?: ActionType | ActionType[]
  align?: AlignType
  onAlign?: OnAlign
  autoDestroy?: boolean
  placements?: BuildInPlacements
  placement?: string
}

export interface TriggerRef {
  forceAlign: () => void
}
