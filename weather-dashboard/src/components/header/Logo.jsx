import LogoImage from '../../../public/logo.svg'

const Logo = () => {
    return (
        <a href="/">
            <img className="h-9" src={LogoImage} alt="" />
        </a>
    );
};

export default Logo;