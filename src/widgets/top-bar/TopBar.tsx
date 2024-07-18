import Link from 'next/link'
import styles from './style.module.scss'
import Logo from '@/shared/img/svg/interface/logo.svg'

const TopBar = () => {
  return (
    <div className={styles.top_bar}>
      <Link href="/">
        <Logo />
      </Link>
    </div>
  )
}

export default TopBar
