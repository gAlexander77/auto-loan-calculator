import React from 'react';

function AutoLoanCalculator() {
    return(
        <div className="AutoLoanCalulator">
            <div className="Input-Container">  
                <h1>Auto Loan Calculator</h1>
                <div className = "Auto-Price">
                    <p>Auto Price</p>
                    <input type="number" placeholder="0"/>
                </div>
                <div className = "Loan-Term">
                    <p>Loan Term</p>
                    <input type="number" placeholder="0"/>
                </div>
                <div className = "Interest-Rate">
                    <p>Interest Rate</p>
                    <input type="number" placeholder="0"/>
                </div>
                <div className = "Down-Payment">
                    <p>Down Payment</p>
                    <input type="number" placeholder="0"/>
                </div>
                <div className = "Trade-In-Value">
                    <p>Down Payment</p>
                    <input type="number" placeholder="0"/>
                </div>      
                <div className = "Sales-Tax">
                    <p>Sales Tax</p>
                    <input type="number" placeholder="0"/>
                </div>
            </div>  
        </div>
    );
}

export default AutoLoanCalculator;