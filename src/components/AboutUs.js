import Breadcrumb from "./Breadcrumb";
import Vacancies from "./Vacancies";

const AboutUs = () => {
    return (
        <>
            <header id="head" className="secondary"></header>
            <div className="container">

                <Breadcrumb root="Home" child="About Us" />

                <div className="row">

                    <article className="col-sm-8 maincontent">
                        <header className="page-header">
                            <h1 className="page-title">About us</h1>
                        </header>
                        <h3>Lorem ipsum</h3>
                        <p><img src="assets/images/mac.jpg" alt="" className="img-rounded pull-right" width="300" /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, consequuntur eius repellendus eos aliquid molestiae ea laborum ex quibusdam laudantium voluptates placeat consectetur quam aliquam beatae soluta accusantium iusto nihil nesciunt unde veniam magnam repudiandae sapiente.</p>
                        <p>Quos, aliquam nam velit impedit minus tenetur beatae voluptas facere sint pariatur! Voluptatibus, quisquam, error, est assumenda corporis inventore illo nesciunt iure aut dolor possimus repellat minima veniam alias eius!</p>
                        <h3>Necessitatibus</h3>
                        <p>Velit, odit, eius, libero unde impedit quaerat dolorem assumenda alias consequuntur optio quae maiores ratione tempore sit aliquid architecto eligendi pariatur ab soluta doloremque dicta aspernatur labore quibusdam dolore corrupti quod inventore. Maiores, repellat, consequuntur eius repellendus eos aliquid molestiae ea laborum ex quibusdam laudantium voluptates placeat consectetur quam aliquam!</p>
                        <h3>Fugit, laboriosam</h3>
                        <p>Eum, quasi, est, vitae, ipsam nobis consectetur ea aspernatur ad eos voluptatibus fugiat nisi perferendis impedit. Quam, nulla, excepturi, voluptate minus illo tenetur sint ab in culpa cumque impedit quibusdam. Saepe, molestias quia voluptatem natus velit fugiat omnis rem eos sapiente quasi quaerat aspernatur quisquam deleniti accusantium laboriosam odio id?</p>
                        <h3>Doloribus, illo ipsum</h3>
                        <p>Velit, odit, eius, libero unde impedit quaerat dolorem assumenda alias consequuntur optio quae maiores ratione tempore sit aliquid architecto eligendi pariatur ab soluta doloremque dicta aspernatur labore quibusdam dolore corrupti quod inventore. Maiores, repellat, consequuntur eius repellendus eos aliquid molestiae ea laborum ex quibusdam laudantium voluptates placeat consectetur quam aliquam!</p>
                        <p>Eum, quasi, est, vitae, ipsam nobis consectetur ea aspernatur ad eos voluptatibus fugiat nisi perferendis impedit. Quam, nulla, excepturi, voluptate minus illo tenetur sint ab in culpa cumque impedit quibusdam. Saepe, molestias quia voluptatem natus velit fugiat omnis rem eos sapiente quasi quaerat aspernatur quisquam deleniti accusantium laboriosam odio id?</p>

                    </article>

                    <Vacancies />
                </div>
            </div>

        </>
    );
};

export default AboutUs;