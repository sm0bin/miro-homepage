import { FiGlobe } from "react-icons/fi";

const Header = () => {

    return (
        <div className="navbar bg-base-100 border-b">
            <div className="navbar-start w-max">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {/* Product v Solutions v Resources v Enterprise Pricing */}
                        <li>
                            <a>Product</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li>
                            <a>Solutions</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li>
                            <a>Resources</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Enterprise</a></li>
                        <li><a>Pricing</a></li>

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img src="/logo.svg"></img></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <details>
                            <summary>Product</summary>
                            <ul className="p-2">
                                <li><a>Submenu</a></li>
                                <li><a>Submenu</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Solutions</summary>
                            <ul className="p-2">
                                <li><a>Submenu</a></li>
                                <li><a>Submenu</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Resources</summary>
                            <ul className="p-2">
                                <li><a>Submenu</a></li>
                                <li><a>Submenu</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Enterprise</a></li>
                    <li><a>Pricing</a></li>
                </ul>
            </div>
            <div className="navbar-end w-2/3">
                <ul className="menu menu-horizontal px-1">
                    <li><a><FiGlobe className="text-lg" /></a></li>
                    <li><a>EN</a></li>
                    <li><a>Contact Sales</a></li>
                    <li><a>Login</a></li>
                </ul>

                <a className="btn btn-primary rounded-full">Sign up free →</a>
            </div>
        </div>
    );
};

export default Header;