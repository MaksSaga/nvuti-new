import Dice from '@/shared/img/svg/games/dice.svg'
import Profile from '@/shared/img/svg/interface/user.svg'
import Bonus from '@/shared/img/svg/interface/gift.svg'
import Help from '@/shared/img/svg/interface/qa.svg'
import FairGame from '@/shared/img/svg/interface/info.svg'
import { ComponentType, FC, ReactNode, SVGProps } from 'react'

export interface IRoutingIcon {
  path: string
  title: string
  Icon: ComponentType<any>
}

type IRoutingIcons = IRoutingIcon[]

const routingIcons: IRoutingIcons = [
  { path: '', title: 'Dice', Icon: Dice },
  { path: 'profile', title: 'Profile', Icon: Profile },
  { path: 'bonus', title: 'Bonus', Icon: Bonus },
  { path: 'help', title: 'Help', Icon: Help },
  { path: 'fair-game', title: 'Fair game', Icon: FairGame },
]

export default routingIcons
