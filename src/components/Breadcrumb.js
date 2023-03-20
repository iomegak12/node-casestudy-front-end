const Breadcrumb = (props) => {
    return (
        <ol className="breadcrumb">

            <li>
                <a href="index.html">
                    {
                        props.root
                    }
                </a>
            </li>

            <li className="active">
                {
                    props.child
                }
            </li>
        </ol>
    );
};

export default Breadcrumb;