
const Footer = () => {
    return (
        <div className=''>
            <footer className="footer p-10 bg-base-200 text-base-content  text-white ">
            <div>
                <p>Melody Masters<br />Reliable  since 2010</p>
            </div>
            <div>
                <span className="footer-title">Products</span>
                <a className="link link-hover">Piano Course</a>
                <a className="link link-hover">Guitar Course</a>
                <a className="link link-hover">Guitar Course</a>
                <a className="link link-hover">Guitar Course</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Career</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
        </div>
    );
};

export default Footer;