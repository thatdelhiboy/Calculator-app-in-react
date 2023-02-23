import React, { useState } from 'react'
import Button from './Button';
import classes from './Home.module.css';


function Home() {

    const [res, setRes] = useState("")

    const buttons = ["C","9","/","8","7","6","*","5","4","3","+","2","1","0","-",".","Del","="]

    const findVal = () => {
        let result = Function("return "+res)();
        setRes(result.toString())
    }
    const handleClick = (arg)=>{
        console.log(arg);

        if(res === "Infinity"){
            setRes("");
            return;
        };
        if(arg === "C") setRes("");
        else if( arg === "=") findVal();
        else if(arg === "Del"){
            let n = res.length;
            if(n>0)
            setRes(res.slice(0,n-1))
        }
        else setRes(res.concat(arg))

    }
  return (
    <div className={classes.home}>
        <div className={classes.inner}>
            <div className={classes.result}>
                <div className={classes.resbox}>
                    {res}
                </div>
            </div>
            <div className={classes.btns}>
                {buttons.map((ele,index)=>{return <Button handleClick = {handleClick} value={ele} key={index}/>})}
            </div>
        </div>

    </div>
    
  )
}

export default Home 