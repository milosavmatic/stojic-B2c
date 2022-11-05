import classes from "./AboutUsPage.module.scss";

const AboutUsPage = () => {
  return (
    <>
      <h3 className={classes["about-us"]}>O kompaniji Stojić Elektrik</h3>
      <div className={classes["about-us-container"]}>
        <img
          src={
            "https://img.gigatron.rs/img/promotions/pages/110121_custom_kompanija.jpg"
          }
          alt="aboutus"
          className={classes["about-us-image-100"]}
        />
        <h2 className={classes["about-us-heading"]}>
          O nama, o Gigatronu, o ljudima, o vrednostima...
        </h2>
        <p className={classes["about-us-paragraph"]}>
          Od svog osnivanja 2003. godine, kompanija Gigatron je jedan od lidera
          na tržištu tehnike u Srbiji. Od male prodavnice na Banovom brdu,
          kompanija je izrasla u jedan od najprestižnijih lanaca maloprodajnih
          objekata u Srbiji, sa sveobuhvatnom ponudom IT uređaja, potrošačke
          elektronike i bele tehnike.
        </p>
        <p className={classes["about-us-paragraph"]}>
          Tokom poslednje decenije, Gigatron je uspeo da se pozicionira kao
          kompanija koja je među prvima predstavila maloprodajne objekte po
          ugledu na prestižne prodavnice na zapadu, ponudila najpotpuniji
          asortiman proizvoda, definisala unapređene oblike komunikacije sa
          kupcima i pokrenula online kupovinu. Kompanija trenutno broji preko
          1000 zaposlenih.
        </p>

        <img
          src={"https://img.gigatron.rs/img/promotions/pages/srb_3.png"}
          alt="aboutus"
          className={classes["about-us-image-100"]}
        />
        <h2 className={classes["about-us-heading"]}>Vizija</h2>
        <p className={classes["about-us-paragraph"]}>
          Vizija kompanije Gigatron je da pruži najviši nivo usluge na domaćem
          tržištu uz stalne inovacije i obogaćivanje proizvodnog asortimana. Tu
          viziju će ostvariti u saradnji sa svojim partnerima, koji dele istu
          viziju.
        </p>
        <h2 className={classes["about-us-heading"]}>Misija</h2>
        <p className={classes["about-us-paragraph"]}>
          Gigatron je na tržištu prepoznat kao kompanija koja podstiče primenu
          novih tehnologija, usmeravajući kupca da za svoj novac dobije najviše,
          posebno vodivši računa da takva kupovina ima svoju vrednost i u
          budućnosti.
        </p>
      </div>
    </>
  );
};

export default AboutUsPage;
