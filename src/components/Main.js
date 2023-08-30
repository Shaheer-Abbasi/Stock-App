import React from "react";

export default function Main()
{
    return (
        <div>
            <h4 className="main--text">What company's stock do you want to buy?</h4>
            <input
                className="main--search"
                type="search" 
                placeholder="Search"
            />
            <h4 className="how-much">What percent of the stock do you want to buy?</h4> 
            <input
                className="main--select"
                type="textbox" 
                placeholder="Enter precent"
            />         
            <h4 className="main--revenue">Your revenue:</h4>
        </div>
    )
}