import React, {useState} from 'react';

function AutoLoanCalculator() {

    const [hidden, setHidden] = useState(true)

    const [inputValues,setInputValues] = useState({
        "auto-price": 0,
        "loan-term": 0,
        "interest-rate": 0,
        "down-payment": 0,
        "trade-in-value": 0,
        "sales-tax": 0
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setInputValues({...inputValues, [name]: Number(value)})
    }

    const [outputValues,setOutputValues] = useState({
        "Monthly-Payment": 0,
        "Auto-Price": 0,
        "Sales-Tax": 0,
        "Loan-Amount": 0,
        "Loan-Length": 0,
        "Loan-Total-Amount": 0,
        "Loan-Interest-Total": 0,
    })
    
    const calcOutput = (e) =>{
        
        e.preventDefault()
        setHidden(false)
        
        let inputAutoPrice = inputValues["auto-price"];
        let inputLoanTerm = inputValues["loan-term"];
        let inputInterestRate = (inputValues["interest-rate"]/100);
        let inputDownPayment = inputValues["down-payment"];
        let inputTadeInValue = inputValues["trade-in-value"];
        let inputSalesTaxRate = (inputValues["sales-tax"]/100);
        console.log(inputAutoPrice + " " + inputLoanTerm + " " + inputInterestRate + " " + inputDownPayment + " " + inputTadeInValue)

        let apr = (inputInterestRate/12);
        console.log("APR: " + apr)
        
        let autoPrice = inputAutoPrice;
        let loanAmount = inputAutoPrice;
        let downPayment = inputDownPayment;
        let tradeIn = inputTadeInValue;
        loanAmount -= (downPayment+tradeIn);
        console.log("Loan: " + loanAmount)
        
        let loanTerm = inputLoanTerm;
        
        let salesTax = (loanAmount*(inputSalesTaxRate));
        loanAmount += salesTax;
        console.log("SalesTax: " + salesTax)
        console.log("Loan(afterTaxes)" + loanAmount)
        
        let x = Math.pow((1+apr),loanTerm);
        let monthlyPayments=(loanAmount*((apr*x)/(x-1)));
        console.log("MonthlyPayments: " + monthlyPayments)

        let loanAmountTotal = (monthlyPayments * loanTerm);
        console.log("LoanAmountTotal: " + loanAmountTotal)

        let loanInterestTotal = (loanAmountTotal-loanAmount);
        console.log("LoanInterestTotal: " + loanInterestTotal)

        setOutputValues({
            "Monthly-Payment": monthlyPayments,
            "Auto-Price": autoPrice,
            "Sales-Tax": salesTax,
            "Loan-Amount": loanAmount,
            "Loan-Length": loanTerm,
            "Loan-Total-Amount": loanAmountTotal,
            "Loan-Interest-Total": loanInterestTotal,
        })
    }
    

    console.log(inputValues)
    console.log(outputValues)

    function Output() {
        if(hidden===false){
        return(
            <div className="Output-Container">
                <p>Monthly Payment: {outputValues["Monthly-Payment"]}</p>
                <p>Auto Price: {outputValues["Auto-Price"]}</p>
                <p>Sales Tax: {outputValues["Sales-Tax"]}</p>
                <p>Loan Amount: {outputValues["Loan-Amount"]}</p>
                <p>Total Cost After {outputValues["Loan-Length"]} Loan Payments: {outputValues["Loan-Total-Amount"]}</p>
                <p>Total Interest on loan: {outputValues["Loan-Interest-Total"]}</p>
            </div>
        );
        }
        else{return(<div>l</div>);}
    }

    return(
        <div className="AutoLoanCalulator">
            <form className="Input-Container" onSubmit={calcOutput}>  
                <h1>Auto Loan Calculator</h1>
                <div className = "Auto-Price">
                    <p>Auto Price</p>
                    <input type="number" placeholder="0" name="auto-price" onChange={handleInputChange}/>
                </div>
                <div className = "Loan-Term">
                    <p>Loan Term</p>
                    <input type="number" placeholder="0" name="loan-term" onChange={handleInputChange}/>
                </div>
                <div className = "Interest-Rate">
                    <p>Interest Rate</p>
                    <input type="number" step="any" placeholder="0" name="interest-rate" onChange={handleInputChange}/>
                </div>
                <div className = "Down-Payment">
                    <p>Down Payment</p>
                    <input type="number" placeholder="0" name="down-payment" onChange={handleInputChange}/>
                </div>
                <div className = "Trade-In-Value">
                    <p>Trade-in Value</p>
                    <input type="number" placeholder="0" name="trade-in-value" onChange={handleInputChange}/>
                </div>      
                <div className = "Sales-Tax">
                    <p>Sales Tax</p>
                    <input type="number" placeholder="0" name="sales-tax" onChange={handleInputChange}/>
                </div>
                <button className = "Calculate" type='submit'>Calculate</button>
            </form>  
            <Output/>
        </div>
    );
}

export default AutoLoanCalculator;