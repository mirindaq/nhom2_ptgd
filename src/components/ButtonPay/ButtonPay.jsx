import React from "react";
import "./ButtonPay.css"

export default function ButtonPay(props) {
  const {src, text, pay, after} = props;
  return (
    <>
      <div>
        <button className={(pay ? "pay" : "notpay") + (after ? " after" : "")}>
            <img src={src} alt="" />
            {text}
        </button>
      </div>
    </>
  );
}