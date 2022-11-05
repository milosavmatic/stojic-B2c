import classes from "./BlogPostPage.module.scss";

const BlogPostPage = () => {
  return (
    <div className={classes["container"]}>
      <div className={classes["img-heading"]}>
        <img
          alt="img-head"
          src={
            "https://static.pexels.com/photos/111788/pexels-photo-111788-large.jpeg"
          }
        />
        <div className={classes["heading-gray"]}></div>
        <span>
          Uz Nintendo Switch konzolu uživajte u igrama gde god da se nalazite
        </span>
      </div>
      <div className={classes["content"]}>
        <span className={classes["date"]}>05.11.2021</span>
        <p className={classes["post-paragraph"]}>
          Želite da svoju omiljenu igru možete da igrate dok čekate red, tokom
          pauze na faksu ili poslu, kod kuće na velikom TV ekranu ili da društvu
          napolju pokažete do kog ste nivoa stigli, kakva je grafika igre?
          Ukoliko se pronalazite u svemu prethodno spomenutom, Nintendo Switch
          konzola je savršeno rešenje za vas.
        </p>
        <p className={classes["post-paragraph"]}>
          Najveći fanovi Nintenda sigurno već znaju mnogo toga o ovoj konzoli, a
          ukoliko se vi nalazite među onima koji još uvek nisu sigurni po čemu
          je ona drugačija od ostalih, tu smo da vam predstavimo sve njene
          prednosti i uvedemo vas u Switch svet.
        </p>
        <h2 className={classes["post-subheading"]}>
          Šta je Nintendo Switch i kako funkcioniše?
        </h2>
        <p className={classes["post-paragraph"]}>
          Ako želite konzolu za igrice sa kojom ćete moći da se prepustite
          gaming avanturama bilo kada i bilo gde, Switch će ispuniti sva vaša
          očekivanja.
        </p>
        <p className={classes["post-paragraph"]}>
          Zahvaljujući ugrađenoj punjivoj bateriji, možete je poneti sa sobom
          svuda. Ima nekoliko verzija, a svaka od njih vam pruža mogućnost
          igranja na bilo kom mestu da se nalazite, bilo da ste van kuće ili u
          svom domu.
        </p>
        <p className={classes["post-paragraph"]}>
          Kreirana je tako da vam bude na dohvat ruke, praktična za prenošenje,
          da omogućava kako individualno igranje tako i igranje u paru, kao i
          povezivanje više konzola i pravo multyplayer iskustvo. Switch
          predstavlja pravo osveženje u gaming svetu nudeći različite opcije
          koje su prilagođene vašem komforu.
        </p>
        <img
          src={
            "https://sm.ign.com/ign_sr/news/n/new-ninten/new-nintendo-switch-with-larger-screen-4k-output-in-the-work_5yfs.jpg"
          }
          className={classes["post-img"]}
          alt="post-img"
        />
        <p className={classes["post-paragraph"]}>
          Kreirana je tako da vam bude na dohvat ruke, praktična za prenošenje,
          da omogućava kako individualno igranje tako i igranje u paru, kao i
          povezivanje više konzola i pravo multyplayer iskustvo. Switch
          predstavlja pravo osveženje u gaming svetu nudeći različite opcije
          koje su prilagođene vašem komforu.
        </p>
      </div>
    </div>
  );
};

export default BlogPostPage;
