import React from 'react'
import Header from "../../components/Header";
import Description from "../Home/scenes/Description";
import RecipeTopic from "../Home/scenes/RecipeTopic";



const Home = () => {
    return(
        <>
            <Header />
            <Description />
            <RecipeTopic />
        </>
        
    )
}

export default Home;