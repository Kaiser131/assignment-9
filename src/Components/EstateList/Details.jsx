import { useLoaderData } from "react-router-dom";

const Details = () => {

    const estateData = useLoaderData();
    console.log(estateData);

    return (
        <div>
            <h1> </h1>
        </div>
    );
};

export default Details;