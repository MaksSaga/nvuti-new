import style from './style.module.scss'
import BreadCrumbs from '@/shared/ui/bread-crumbs/BreadCrumbs'
import clsx from 'clsx'

const Header = () => {
  return (
    <div className={style.background_line}>
      <header className={clsx('wrapper_content', style.header)}>
        <div className={style.left_header}>
          <BreadCrumbs />
        </div>
        <div className={style.right_header}></div>
      </header>
    </div>
  )
}

export default Header
