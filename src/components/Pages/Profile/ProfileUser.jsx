import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import imgProfile from "../../../images/iron-man.jpg";
import styled from "styled-components";
import CardComunidadShow from "../../Layout/CardComunidadShow/CardComunidadShow"
import './Profile.css';


const MyStats = styled.div`
    width: 600px;
    max-width: 600px;
    height: 300px;
    margin: auto;
    background: #EFEFEF;
    border-radius: 3px;
    margin-bottom: 40px;

    display: flex;
    flex-direction: column;

    .MyStats__title {
        margin: 20px 50px;
        font-size: 1.5rem;      
    } 

    .MyStats__Cont2Box {
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        .Cont2Box__level {
            display:flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            button {
                    border: none;
                    background: none;
                    cursor: pointer;

                    :active {
                        transform: scale(.9)
                    }

                    div {
                        margin-bottom: 10px;
                        width: 120px;
                        height: 120px;
                        background: #fff;
                        border-radius: 3px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
            }

            

            h3 {
                margin: 10px;
                padding: 10px;
                background-color: #fff;
                text-align: center;
                width: 100%;
                font-size: 2rem;
                border-radius: 3px;
            }
        }

        .Cont2Box__Favors {
            display:flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background-color: none;

            button {
                border: none;
                background: none;
                cursor: pointer;

                :active {
                    transform: scale(.9)
                }

                div {
                    margin-bottom: 10px;
                    width: 120px;
                    height: 120px;
                    background-color: #fff;
                    border-radius: 3px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 4rem;
                }

            }

            
            h3 {
                margin: 10px;
                padding: 10px;            
                background-color: #fff;
                width: 100%;
                text-align: center;
                font-size: 2rem;
                border-radius: 3px;
            }

        }
    }


`;

const MyNetworks = styled.div`
    width: 600px;
    height: 300px;
    margin: auto;
    background: #EFEFEF;
    border-radius: 3px;
    margin-bottom: 40px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
        border: none;
        background: none;

        :active {
            transform: scale(.9);
        }
    }


    .MyNetworks__title {
        margin: 20px 50px;
        font-size: 1.5rem;
    }

    .MyNetworks__BoxNetworks {
        display: flex;
        justify-content: space-around;
        align-items: start;
        height: 65%;
    }


`;

const AboutMe = styled.div`
    width: 600px;
    height: 300px;
    margin: auto;
    background: #EFEFEF;
    border-radius: 3px;
    margin-bottom: 40px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .AboutMe__title {
        margin: 20px 50px;
        font-size: 1.5rem;
    }

    .AboutMe__Description {
        height: 70%;

        display: flex;
        justify-content: center;
        align-items: start;

        p {
            font-size: 2.3rem;
            padding: 30px;
            margin: 20px;
            border-radius: .5em;
            background-color: #fff;
        }
    }
`;

const MyCommunities = styled.div`
    width: 600px;
    height: 1000px;
    background: #EFEFEF;
    border-radius: 3px;
    margin: auto;
    margin-bottom: 40px;

    display: flex;
    flex-direction: column;

    .MyCommunities__title {
        margin-top: 20px;
        margin-left: 50px;
        margin-bottom: 50px;
        font-size: 1.5rem;
    }
`;



const ImgProfile = () => {
    return (
        <div className="Main__content">
            <div className='ImgProfile__content'>
                <div className="ImgProfile__img">
                    <img src={imgProfile} alt="Main_image" />
                </div>

            </div>
        </div>

    );

}

const ContNameUser = () => {

    const nameUser = 'Leonel Messi';

    return (
        <div className="ContNameUser">

            <button
                className="ContNameUser__ButtonLevel"
                onClick={() => {
                    alert('eres un Helper Nivel 3')
                }}
            >
                <div className="ContNameUser__Level">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="3" fill="white" />
                        <rect x="8.48438" y="10.7935" width="6.06061" height="22.2222" fill="#3E3F3A" />
                        <rect x="16.9688" y="5.71428" width="6.06061" height="22.2222" fill="#3E3F3A" />
                        <rect x="25.4541" y="10.7935" width="6.06061" height="22.2222" fill="#3E3F3A" />
                    </svg>

                </div>
            </button>

            <h2 className="ContNameUser__NameUs">
                {nameUser.toLocaleUpperCase()}
            </h2>


        </div>

    );
}


const ProfileUser = () => {
    return (
        <>
            <Header />

            <ImgProfile />
            <ContNameUser />

            <MyStats>
                <div className="MyStats__title">
                    <h2>Mis Estadisticas</h2>
                </div>
                <div className="MyStats__Cont2Box">

                    <div className="Cont2Box__level">
                        <button
                            onClick={() => { console.log('click') }}
                        >
                            <div>

                                <svg width="38" height="43" viewBox="0 0 38 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="8" width="10" height="35" fill="#3E3F3A" />
                                    <rect x="14" width="10" height="35" fill="#3E3F3A" />
                                    <rect x="28" y="8" width="10" height="35" fill="#3E3F3A" />
                                </svg>

                            </div>
                        </button>
                        <h3>Nivel</h3>
                    </div>

                    <div className="Cont2Box__Favors">
                        <button
                            onClick={() => { console.log('click') }}
                        >
                            <div>
                                45
                            </div>
                        </button>
                        <h3>Favores Realizados</h3>
                    </div>
                </div>
            </MyStats>

            <MyNetworks>
                <div className="MyNetworks__title">
                    <h2>Mis Redes</h2>
                </div>
                <div className="MyNetworks__BoxNetworks">
                    <button
                        onClick={() => { console.log('click') }}
                    >
                        <div className="GitHub">
                            <svg width="100" height="100" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="32.5" cy="32.5" r="32.5" fill="#3E3F3A" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M32.43 12.9998C21.6949 12.9998 13 21.9146 13 32.9212C13 41.7365 18.5618 49.1821 26.2853 51.8217C27.2568 51.996 27.6211 51.3984 27.6211 50.8754C27.6211 50.4023 27.5968 48.8335 27.5968 47.1651C22.715 48.0864 21.4521 45.9449 21.0635 44.8243C20.8449 44.2515 19.8977 42.4835 19.0719 42.0104C18.3918 41.6369 17.4203 40.7155 19.0476 40.6906C20.5777 40.6657 21.6706 42.1349 22.035 42.7325C23.7837 45.7457 26.5767 44.899 27.6939 44.3761C27.864 43.0812 28.374 42.2096 28.9326 41.7116C24.6094 41.2135 20.092 39.4953 20.092 31.8753C20.092 29.7089 20.8449 27.9159 22.0835 26.5214C21.8892 26.0234 21.2092 23.9815 22.2778 21.2423C22.2778 21.2423 23.9051 20.7193 27.6211 23.2842C29.1755 22.836 30.827 22.6119 32.4786 22.6119C34.1301 22.6119 35.7817 22.836 37.3361 23.2842C41.0521 20.6944 42.6793 21.2423 42.6793 21.2423C43.748 23.9815 43.0679 26.0234 42.8736 26.5214C44.1123 27.9159 44.8652 29.684 44.8652 31.8753C44.8652 39.5202 40.3234 41.2135 36.0003 41.7116C36.7046 42.3341 37.3118 43.5294 37.3118 45.397C37.3118 48.0615 37.2875 50.2031 37.2875 50.8754C37.2875 51.3984 37.6518 52.0209 38.6233 51.8217C42.4805 50.4865 45.8321 47.9448 48.2066 44.5543C50.5811 41.1638 51.8588 37.0952 51.86 32.9212C51.86 21.9146 43.1651 12.9998 32.43 12.9998Z" fill="white" />
                            </svg>

                        </div>
                    </button>

                    <button
                        onClick={() => { console.log('click') }}
                    >
                        <div className="Google">
                            <svg width="100" height="100" viewBox="0 0 66 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M66 31.5C66 48.897 51.2254 63 33 63C14.7746 63 0 48.897 0 31.5C0 14.103 14.7746 0 33 0C51.2254 0 66 14.103 66 31.5Z" fill="white" />
                                <path d="M50.2641 27.3395H48.9148V27.27H33.8398V33.97H43.3061C41.9251 37.8703 38.2141 40.67 33.8398 40.67C28.2897 40.67 23.7898 36.1701 23.7898 30.62C23.7898 25.0699 28.2897 20.57 33.8398 20.57C36.4018 20.57 38.7325 21.5365 40.5072 23.1152L45.2449 18.3775C42.2534 15.5894 38.2518 13.87 33.8398 13.87C24.5897 13.87 17.0898 21.3698 17.0898 30.62C17.0898 39.8702 24.5897 47.37 33.8398 47.37C43.09 47.37 50.5898 39.8702 50.5898 30.62C50.5898 29.4969 50.4743 28.4007 50.2641 27.3395Z" fill="#FFC107" />
                                <path d="M19.0215 22.8237L24.5247 26.8597C26.0138 23.173 29.62 20.57 33.8402 20.57C36.4021 20.57 38.7329 21.5365 40.5075 23.1152L45.2453 18.3775C42.2537 15.5894 38.2522 13.87 33.8402 13.87C27.4065 13.87 21.8271 17.5023 19.0215 22.8237Z" fill="#FF3D00" />
                                <path d="M33.8404 47.3701C38.1669 47.3701 42.0982 45.7143 45.0704 43.0218L39.8863 38.6349C38.1481 39.9568 36.0241 40.6718 33.8404 40.6701C29.4837 40.6701 25.7845 37.8921 24.3909 34.0153L18.9287 38.2237C21.7008 43.6482 27.3305 47.3701 33.8404 47.3701Z" fill="#4CAF50" />
                                <path d="M50.2641 27.3395H48.9148V27.27H33.8398V33.97H43.3061C42.6455 35.8263 41.4555 37.4483 39.8832 38.6357L39.8858 38.6341L45.0699 43.0209C44.7031 43.3542 50.5898 38.995 50.5898 30.62C50.5898 29.4969 50.4743 28.4006 50.2641 27.3395Z" fill="#1976D2" />
                            </svg>

                        </div>
                    </button>

                    <button
                        onClick={() => { console.log('click') }}
                    >
                        <div className="Facebook">
                            <svg width="100" height="100" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M65 32.5C65 50.4493 50.4493 65 32.5 65C14.5507 65 0 50.4493 0 32.5C0 14.5507 14.5507 0 32.5 0C50.4493 0 65 14.5507 65 32.5Z" fill="#325D88" />
                                <g clip-path="url(#clip0_208_929)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M48.3672 16.5079H18.1172C17.7525 16.5079 17.4028 16.6528 17.1449 16.9107C16.8871 17.1685 16.7422 17.5183 16.7422 17.8829V48.1329C16.7422 48.4976 16.8871 48.8473 17.1449 49.1052C17.4028 49.3631 17.7525 49.5079 18.1172 49.5079H34.2734V37.1329H30.1484V31.9767H34.2734V27.8517C34.2734 23.5892 36.9726 21.4923 40.7744 21.4923C42.5949 21.4923 44.1611 21.6284 44.6162 21.6876V26.1426L41.9803 26.1439C39.9123 26.1439 39.4297 27.1271 39.4297 28.5681V31.9767H44.5859L43.5547 37.1329H39.4297L39.5122 49.5079H48.3672C48.7319 49.5079 49.0816 49.3631 49.3395 49.1052C49.5973 48.8473 49.7422 48.4976 49.7422 48.1329V17.8829C49.7422 17.5183 49.5973 17.1685 49.3395 16.9107C49.0816 16.6528 48.7319 16.5079 48.3672 16.5079" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_208_929">
                                        <rect width="33" height="33" fill="white" transform="translate(16.7422 16.5079)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                    </button>
                </div>
            </MyNetworks>
                
            <AboutMe>
                <div className="AboutMe__title">
                    <h2>Algo Sobre Mi</h2>
                </div>
                <div className="AboutMe__Description">
                    <p>Soy un gato, que se cree loro. pero Ademas como Croquetas Ricocan. Emoji</p>
                </div>
            </AboutMe>


            <MyCommunities>
                <div className="MyCommunities__title">
                    <h2>Mis Comunidades</h2>
                </div>
                <CardComunidadShow image={imgProfile} title="Javascript" users="50" checks="20" />
                <CardComunidadShow image={imgProfile} title="Javascript" users="50" checks="20" />
            </MyCommunities>

            <Footer />
        </>
    )
}

export default ProfileUser
