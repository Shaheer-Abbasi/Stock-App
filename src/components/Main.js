import React from "react";

export default function Main()
{
    const [stockData, setStockData] = React.useState(null)
    
    const [formData, setFormData] = React.useState({
        inputValue: "",
        shares: "",
        revenue: 0
    })

    React.useEffect(() => {
        if(formData.inputValue.trim() !== ""){
            fetch(`https://finnhub.io/api/v1/quote?symbol=${formData.inputValue}&token=cjqdtapr01ql6aqcbir0cjqdtapr01ql6aqcbirg`)
                .then(res => res.json())
                .then(data => setStockData(data))
        } 
    }, [formData.inputValue])

    function handleInputChange(event)
    {
        const {name, value} = event.target
        setFormData({
            ...formData, 
            [name]: value
        })
    }

    function calculate()
    {
        const newRevenue = stockData.c * formData.shares
        setFormData({
            ...formData, 
            revenue: newRevenue.toFixed(2)
        })
    }
        
    return (
        <main className="main">
            <h4 className="main--text">Type in the stock symbol</h4>

            <input
                className="main--search"
                type="search" 
                placeholder="Tesla = TSLA"
                value={formData.inputValue}
                onChange={handleInputChange}
                name="inputValue"
            />
           
            <h4 className="how-much">How much stock do you want?</h4> 

            <input
                className="main--select"
                type="textbox" 
                placeholder="Enter a number"
                value={formData.shares}
                onChange={handleInputChange}
                name="shares"
            /> 

             <div className="go--container">
                <button className="main--go" onClick={calculate}>Go!</button>
            </div>

            <h4 className="main--revenue">Your revenue: ${formData.revenue}</h4>

        </main>
    )
}