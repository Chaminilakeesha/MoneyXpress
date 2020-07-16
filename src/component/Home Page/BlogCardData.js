import React, { useState } from 'react';
import BlogCard from './BlogCard';



const Popproddata = (props) => {







    const [blogdet, setBlogDet] = useState([
        { title: "Things to consider when investing in a Fixed Deposit 1", day: "25", month: "May", year: "2020", time: "5", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit sed nunc quis ultricies. Mauris maximus, augue et pellentesque rhoncus, sem ipsum congue nunc, sed auctor turpis justo eget magna. Aliquam quis varius risus, at auctor ante. Ut iaculis diam at tellus feugiat placerat. Quisque viverra vehicula enim eget vestibulum. Etiam sodales, magna in efficitur sodales, erat diam lacinia odio, elementum sodales mauris eros non urna. Donec hendrerit at risus sed ullamcorper." },
        { title: "Things to consider when investing in a Fixed Deposit 2", day: "26", month: "June", year: "2021", time: "10", content: "Proin iaculis ante nec elit consequat, eget molestie lectus efficitur. Morbi congue sem sed mattis facilisis. Aenean finibus facilisis elementum. Suspendisse pretium non massa sit amet convallis. Praesent lacinia, diam vel tempor maximus, ante est volutpat dui, non sodales massa ligula et urna. Phasellus ultricies rutrum felis sed sagittis. Fusce porttitor interdum massa, nec dictum elit pretium eget. Nunc et lacus in leo molestie convallis. Etiam mi nulla, pretium vitae magna sit amet, vestibulum commodo nisl." },
        { title: "Things to consider when investing in a Fixed Deposit 3", day: "27", month: "July", year: "2022", time: "15", content: "Aenean est ligula, molestie vitae tellus at, fermentum hendrerit lorem. Ut et tristique est. Pellentesque sed consectetur ligula, facilisis mollis enim. Curabitur lacinia purus a dolor ultrices hendrerit. Duis non tellus ac erat mattis aliquet. Suspendisse feugiat in arcu in rutrum. Fusce a lectus." }

    ])








    return (
        <div>
            <div >


                <div className="row justify-content-center">
                    {blogdet.map(x => <BlogCard blogdet={{ ...x }} />)}
                </div>







            </div>
        </div >
    );
}

export default Popproddata;