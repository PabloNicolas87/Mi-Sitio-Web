import React from 'react';
import Image from '../Image/Image';
import { useTranslation } from 'react-i18next';
import SkillItem from '../SkillItem/SkillItem';
import './Quarters.css';

const Quarters = () => {
    const [t] = useTranslation("global");

    const arrayDeObjetos = [
        { 
            id: 1, 
            imagen: <Image srcImg={'/images/Perfil.webp'} nameImg={'Perfil'} className="perfil-image" />,
            descripcion: t("aboutUs.paragraph1")
        },
        { 
            id: 2, 
            imagen: <Image srcImg={'/images/imagen2.webp'} nameImg={'Imagen2'} />,
            descripcion: t("aboutUs.paragraph2")
        },
        { 
            id: 3, 
            habilidades: [
                <SkillItem key="HTML" imageSrc={'/images/html.webp'} title={'HTML5'} />,
                <SkillItem key="CSS" imageSrc={'/images/css.webp'} title={'CSS3'} />,
                <SkillItem key="JS" imageSrc={'/images/javascript.webp'} title={'JavaScript'} />,
                <SkillItem key="Bootstrap" imageSrc={'/images/bootstrap.webp'} title={'Bootstrap'} />,
                <SkillItem key="JQuery" imageSrc={'/images/jquery.webp'} title={'JQuery'} />
            ],
            descripcion: t("aboutUs.paragraph3")
        },
        { 
            id: 4, 
            habilidades: [
                <SkillItem key="ReactJS" imageSrc={'/images/react.webp'} title={'ReactJS'} />,
                <SkillItem key="Angular" imageSrc={'/images/angular.webp'} title={'Angular'} />,
                <SkillItem key="Firebase" imageSrc={'/images/firebase.webp'} title={'Firebase'} />,
                <SkillItem key="GitHub" imageSrc={'/images/github.webp'} title={'GitHub'} />
            ],
            descripcion: t("aboutUs.paragraph4")
        },
        { 
            id: 5, 
            habilidades: [
                <SkillItem key="Webflow" imageSrc={'/images/webflow.webp'} title={'Webflow'} />,
                <SkillItem key="Wordpress" imageSrc={'/images/wordpress.webp'} title={'Wordpress'} />
            ],
            descripcion: t("aboutUs.paragraph5")
        },
        { 
            id: 6, 
            habilidades: [
                <SkillItem key="Meta Ads" imageSrc={'/images/metaads.webp'} title={'Meta Ads'} />,
                <SkillItem key="Google Ads" imageSrc={'/images/googleads.webp'} title={'Google Ads'} />,
                <SkillItem key="Google Tag Manager" imageSrc={'/images/tagmanager.webp'} title={'Google Tag Manager'} />,
                <SkillItem key="Google Analytics" imageSrc={'/images/googleanalytics.webp'} title={'Google Analytics'} />,
            ],
            descripcion: t("aboutUs.paragraph6")
        }
    ];

    return (
        <div className="d-flex row px-1 py-5">
            {arrayDeObjetos.map(objeto => (
                <div key={objeto.id} className="col-12 col-md-6 p-0">
                    <div className="quarters m-2 p-3 p-lg-5">
                        {objeto.habilidades && (
                            <div className='d-flex row'>
                                <div className='primera d-flex justify-content-around align-items-center py-5 py-md-0'>
                                    {objeto.habilidades.map(habilidad => (
                                        <div className='col-2' key={habilidad.key}>
                                            {habilidad}
                                        </div>
                                    ))}
                                </div>
                                <div className='segunda'>
                                    <p className='text-md-start text-center m-0 fw-light'>{objeto.descripcion}</p>
                                </div>
                            </div>
                        )}
                        {objeto.imagen && (
                            <>
                            <div className='d-flex row'>
                                <div className='primera d-flex justify-content-around align-items-center py-5 py-md-0'>
                                    {objeto.imagen}
                                </div>
                                <div className='segunda'> 
                                    <p className='text-md-start text-center m-0 fw-light'>{objeto.descripcion}</p>
                                </div>
                            </div>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Quarters;
