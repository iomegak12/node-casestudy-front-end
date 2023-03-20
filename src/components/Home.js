import FAQ from "./FAQ";
import HomeBanner from "./HomeBanner";
import Reasons from "./Reasons";
import Social from "./Social";

const Home = () => {
    return (
        <>
            <HomeBanner />

            <div className="container text-center">
                <br /> <br />
                <h2 className="thin">The best place to tell people why they are here</h2>
                <p className="text-muted">
                    The difference between involvement and commitment is like an eggs-and-ham breakfast:<br />
                    the chicken was involved; the pig was committed.
                </p>
            </div>

            <Reasons />
            <FAQ />
            <Social />
        </>
    );
};

export default Home;