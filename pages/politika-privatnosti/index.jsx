import React from 'react';
import classes from "../../assets/css/StaticPages.module.scss"

function PrivacyPolicy() {
  return (
    <div className={`${classes.staticPages}`}>
      <div className="container">
        <h3>Politika privatnosti</h3>
        <div className={`${classes.staticPagesContent}`}>
          <p>
            Ukoliko se interesujete za obradu i zaštitu Vaših podataka o
            ličnosti u okviru privrednog društva Tehomanija d.o.o., DOBRO DOŠLI,
            ovaj odeljak je pravo mesto za Vas!
          </p>
          <p>
            Mi cenimo Vašu privatnost i posebno vodimo računa o bezbednosti
            Vaših podataka o ličnosti. Upravo iz tih razloga ovom Politikom
            privatnosti na transparentan i lako razumljiv način želimo da Vas
            informišemo o prikupljanju, upotrebi, prirodi i obimu obrade Vaših
            ličnih podataka od strane Tehnomanija d.o.o. Beograd, ul. Tošin
            bunar 179G, MB: 17233041, koja se nalazi u položaju rukovaoca Vaših
            podatka o ličnosti.
          </p>
          <p>
            Ovde se nalaze informacije o svim podacima koje prikupljamo o Vama,
            prilikom različitih vidova saradnje, posebno podaci koje prikupljamo
            kada pristupite našoj internet stranici www.tehnomanija.rs, kada se
            registrujete i napravite profil ili kada samo odlučite da kupujete
            online naše proizvode kao gost.
          </p>
          <p>
            Podaci o ličnosti su svi podaci koji se neposredno ili posredno
            odnose ili mogu da se odnose na Vas kao fizičko lice. Kao zakonski
            osnov koji uređuje zaštitu podataka i uslove za obradu Vaših ličnih
            podataka primenjujemo Zakon o zaštiti podataka o ličnosti
          </p>
          <p>
            U slučaju da naš sajt sadrži likove ka drugim internet stranicama,
            molimo Vas da se adekvatno upoznate sa politikama privatnosti koje
            se nalaze na tim internet stranicama i načinom na koji ta lica
            obrađuju podatke o Vama. Imajte u vidu da Tehnomanija nema nikakvu
            kontrolu nad sadržajem drugih internet stranica, te zbog toga ne
            možemo biti odgovorni za zaštitu Vaše privatnosti kada posećujete
            druge sajtove.
          </p>
          <ul>
            <li>
              Na koji način prikupljamo Vaše lične podatke i po kom pravnom
              osnovu?
            </li>
            <li>
              Koje podatke prikupljamo od Vas?
              <ul>
                <li>
                  Kupovina/porudžbina u Tehnomanija prodavnici/web
                  sajtu/aplikaciji
                </li>
                <li>Plaćanje preko administrativne zabrane</li>
                <li>Reklamacije</li>
                <li>
                  Kupovina/porudžbina u Tehnomanija prodavnici/web
                  sajtu/aplikaciji
                </li>
                <li>Plaćanje preko administrativne zabrane</li>
                <li>Reklamacije</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
