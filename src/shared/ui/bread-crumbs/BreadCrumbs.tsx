'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import routingIcons, { IRoutingIcon } from '@/data/routingIcons'
import style from './style.module.scss'

const BreadCrumbs = () => {
  const pathname = usePathname()

  const findPathnameItem = () => {
    if (pathname !== undefined) {
      return routingIcons.find(({ path }) => {
        return new RegExp(`^\\/${path}(\\/|$)`).test(pathname)
      })
    }
  }

  const [pathnameItem, setPathnameItem] = useState<IRoutingIcon | undefined>(findPathnameItem())

  useEffect(() => {
    setPathnameItem(findPathnameItem())
  }, [pathname])

  return (
    <div className={style.crumbs}>
      <h2 className={style.title}>{pathnameItem?.title ? pathnameItem.title : '404'}</h2>
      {pathnameItem?.Icon && <pathnameItem.Icon fill="#fff" />}
    </div>
  )
}

export default BreadCrumbs
