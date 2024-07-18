import { FC } from 'react'
import clsx from 'clsx'
import styles from './style.module.scss'

interface INavButton {
  className?: string
}

const NavButton: FC<INavButton> = ({ className }) => {
  return <button className={clsx(styles.nav_button, className)}>Navigation Button</button>
}

export default NavButton
