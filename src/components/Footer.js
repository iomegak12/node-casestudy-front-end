import CompanyContact from "./CompanyContact";
import Copyright from "./Copyright";
import FollowMe from "./FollowMe";
import SiteFooterLinks from "./SiteFooterLinks";
import SiteSummary from "./SiteSummary";

const Footer = () => {
    return (
        <footer id="footer" className="top-space">

            <div className="footer1">
                <div className="container">
                    <div className="row">
                        <CompanyContact />
                        <FollowMe />
                        <SiteSummary />
                    </div>
                </div>
            </div>

            <div className="footer2">
                <div className="container">
                    <div className="row">
                        <SiteFooterLinks />
                        <Copyright />
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;