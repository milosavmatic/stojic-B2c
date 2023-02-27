import { useState } from 'react';
import Link from 'next/link';
import classes from '../../assets/css/ContactPage.module.scss';
import cacakMap from '../../assets/images/banners/contact_pic.jpg';
import ReCAPTCHA from 'react-google-recaptcha';
import Image from 'next/image';
import { ApiHandler } from '../api/api';
import { openAlertBox } from '../../helpers/tostify';
import { useRouter } from 'next/router';
import logo from '../../assets/images/logo/logo.png';
import Stores from '../../components/Stores/Stores';

const ContactPage = () => {
  const [selectContact, setSelectContact] = useState('');
  const onCaptchaChange = (e) => {
    setFormData({ ...formData, recaptcha: 'Recaptcha' });
    setErrors(errors.filter((item) => item != 'recaptcha'));
  };

  const { push: navigate } = useRouter();

  const router = useRouter();

  const { id, name } = router.query;

  const [formData, setFormData] = useState({
    customer_name: '',
    email: '',
    phone: '',
    message: '',
    city: '',
    recaptcha: null,
    agreed: null,
  });

  const required = [
    'customer_name',
    'email',
    'phone',
    'agreed',
    'message',
    'city',
  ];

  const errorMsg = 'Polje je obavezno.';

  const [errors, setErrors] = useState([]);

  const formChangeHandler = ({ target }) => {
    setErrors(errors.filter((item) => item != target.name));
    if (
      (target.type === 'checkbox' && target.checked) ||
      (target.type === 'radio' && target.checked) ||
      (target.type === 'text' && target.value.length > 0) ||
      (target.type === 'textarea' && target.value.length > 0)
    ) {
      setFormData({ ...formData, [target.name]: target.value });
    } else {
      if (target.type === 'text' || target.type === 'checkbox') {
        setFormData({ ...formData, [target.name]: target.value });
      }
      if (target.type === 'textarea') {
        setFormData({ ...formData, [target.name]: target.value });
        return;
      }
      setErrors([...errors, target.name]);
    }
  };

  const formSubmitHandler = () => {
    const err = [];
    for (const key in formData) {
      const item = formData[key];
      if (key !== 'note') {
        if (
          item === '' ||
          item == null ||
          (required.includes(key) && (item === '' || item == null))
        ) {
          err.push(key);
        }
      }
    }

    if (err.length > 0) {
      setErrors(err);
    } else {
      const api = ApiHandler();
      const { recaptcha, agreed, ...feldsForRet } = formData;
      const ret = {
        page_section: 'contact_page',
        ...feldsForRet,
      };
      console.log(ret);
      if (!id && !name) {
        api
          .post('/contact/contact_page', ret)
          .then((response) => {
            openAlertBox('Uspešno ste poslali poruku', 'success');
            setFormData({
              customer_name: '',
              email: '',
              phone: '',
              message: '',
              city: '',
              recaptcha: null,
              agreed: null,
            });
            setTimeout(() => {
              navigate('/');
            }, 2000);
          })
          .catch((error) => openAlertBox(error.message, 'error'));
      } else {
        api
          .post('contact/product_request', {
            ...ret,
            id_product: +id,
            product_name: name,
          })
          .then((response) => {
            openAlertBox(
              'Uspešno ste poslali zahtev za proveru proizvoda na stanju.',
              'success'
            );
            setFormData({
              customer_name: '',
              email: '',
              phone: '',
              message: '',
              city: '',
              recaptcha: null,
              agreed: null,
            });
            setTimeout(() => {
              navigate('/');
            }, 2000);
          })
          .catch((error) => openAlertBox(error.message, 'error'));
      }
    }
  };

  return (
    <>
      <div className={classes['map-container-container']}>
        <div className={classes['map-container']}>
          <Image src={cacakMap} alt="Mapa" />
        </div>
      </div>
      <div className={classes['content-container']}>
        <div className={classes['contact'] + ' row'}>
          <div className={classes['contact-info'] + ' col-md-4'}>
            <h4 className={classes['contact-info-heading']}>Kontakt</h4>
            <div className={classes['call-center']}>
              <h5
                className={`${classes['call-center-heading']} ${classes['line']}`}
              >
                Call centar
              </h5>
              <span className={classes['bolded-faces']}>Fizička lica</span>
              <span className={classes['phone-numbers']}>+381 65 377 330 0</span>
              <span className={classes['bolded-faces']}>Pravna lica</span>
              <span className={classes['phone-numbers']}>
                +381 32 515 52 99
              </span>
              <span className={classes['bolded-faces']}>ili e-mailom na:</span>
              <span className={classes['phone-numbers']}>
                prodaja@stojic.rs
              </span>
            </div>
            <div className={classes['working-hours']}>
              <Link href="/">
                <Image src={logo} alt="Stojic-elektrik-logo" />
              </Link>
              <h5
                className={`${classes['working-hours-heading']} ${classes['line']}`}
              >
                Radno vreme prodajnog centra
              </h5>
              <span className={classes['working-hours-day']}>
                <span className={classes['working-hours-hour']}>
                  od 08h do 20h
                </span>
              </span>
            </div>
          </div>
          {/* ******* */}
          <form className={classes['contact-form'] + ' col-md-8'}>
            <div className={classes['inputError']}>
              <input
                type="text"
                placeholder="Ime i prezime *"
                className={classes['contact-form-input']}
                name="customer_name"
                value={formData.customer_name}
                onChange={formChangeHandler}
              />
              {errors.includes('customer_name') && (
                <span className={classes.errorMsg}>{errorMsg}</span>
              )}
            </div>

            <div className={classes['inputError']}>
              <input
                type="text"
                placeholder="Email *"
                name="email"
                className={classes['contact-form-input']}
                value={formData.email}
                onChange={formChangeHandler}
              />
              {errors.includes('email') && (
                <span className={classes.errorMsg}>{errorMsg}</span>
              )}
            </div>

            <div className={classes['inputError']}>
              <input
                type="text"
                placeholder="Telefon *"
                name="phone"
                className={classes['contact-form-input']}
                value={formData.phone}
                onChange={formChangeHandler}
              />
              {errors.includes('phone') && (
                <span className={classes.errorMsg}>{errorMsg}</span>
              )}
            </div>

            <div className={classes['inputError']}>
              <input
                type="text"
                placeholder="Grad *"
                name="city"
                className={classes['contact-form-input']}
                value={formData.city}
                onChange={formChangeHandler}
              />
              {errors.includes('city') && (
                <span className={classes.errorMsg}>{errorMsg}</span>
              )}
            </div>

            <div className={classes['inputError']}>
              <textarea
                placeholder="Poruka *"
                className={classes['contact-form-textarea']}
                rows="7"
                name="message"
                value={formData.message}
                onChange={formChangeHandler}
              />
              {errors.includes('message') && (
                <span className={classes.errorMsg}>{errorMsg}</span>
              )}
            </div>

            {/* <button type="button" className={classes['contact-button']}>
              Dodajte fajlove
            </button>
            <span className={classes['contact-form-text']}>
              *Maksimalna veličina dokumenta je 10MB.
            </span>
            <span className={classes['contact-form-text']}>
              *Dokument može biti .jpg i .pdf.
            </span> */}
            <div className={classes['inputError']}>
              <div className={classes['g-recaptcha']}>
                <ReCAPTCHA
                  className={classes['captcha']}
                  sitekey="6Ld9cj4gAAAAANDQjVmIJUDcOU79VnU9u_Qr1jDL"
                  onChange={onCaptchaChange}
                  name="recaptcha"
                />
              </div>
              {errors.includes('recaptcha') && (
                <span className={classes.errorMsg}>{errorMsg}</span>
              )}
            </div>

            <div
              className={
                classes['checkbox-container'] + ' basic-checkbox-container'
              }
            >
              <div className="d-flex">
                <input
                  id="acceptance"
                  type="checkbox"
                  className={classes['checkbox']}
                  name="agreed"
                  onChange={formChangeHandler}
                  value={formData.agreed === '1' ? '' : '1'}
                />
                <label
                  className={classes['checkbox-label']}
                  htmlFor="acceptance"
                >
                  Upoznat sam i slažem se sa sadržajem disklejmera.
                  <br />
                  Sadržaj disklejmera možete pogledati na{' '}
                  <Link href="/uslovi">Pročitaj uslove</Link>
                </label>
              </div>

              {errors.includes('agreed') && (
                <span className={classes.errorMsg}>{errorMsg}</span>
              )}
            </div>

            <button
              type="button"
              className={classes['contact-submit']}
              onClick={formSubmitHandler}
            >
              Pošalji
            </button>
            {errors.length > 0 && (
              <p className={classes.errorMsg}>
                Nisu popunjena sva obavezna polja.
              </p>
            )}
          </form>
        </div>
      </div>
      <Stores />
    </>
  );
};

export default ContactPage;
