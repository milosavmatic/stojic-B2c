import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import logo from '../../assets/images/logo/logo.png';
import style from "./PagePreparation.module.scss";

export const PagePreparation = () => {
  return (
    <div className={style.pagePreparation}>
      Stranica je još uvek u pripremi, očekujemo uskoro njeno objavljivanje!
      <Link href={"/"} ><a className={style.link}>Vratite se na početnu stranicu</a></Link>
    </div>
  )
}
