import Link from 'next/link'
import classes from '../NavbarMenu.module.scss'

const NavSubmenu = ({ menu }) => {
  return (
    <ul className={classes['nav-submenu']}>
      {menu.map((item) => (
        <li key={item.id} className={classes['nav-submenu-item']}>
          <div className={classes['submenu-item-holder']}>
            <Link href={item.path}>
              <a className={`${classes['category-name']} `}>{item.name}</a>
            </Link>
            {item.children.length > 0 && (
              <div className={classes.children}>
                <NavSubmenu menu={item.children} />
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default NavSubmenu
