import React, { useState, useEffect } from "react";
// import "../../Style/Content.scss";
import "../../Style/Content.scss";
import { useParams } from "react-router-dom";
const Content = () => {
  const params = useParams();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [height, setHeight] = useState(0);
  const updateScrollPosition = () => {
    setScrollPosition(
      document.body.scrollTop || document.documentElement.scrollTop
    );
  };
  // console.log(
  //   "document.body.scrollHeight :",
  //   document.documentElement.scrollHeight -
  //     document.documentElement.clientHeight
  // );
  console.log("clientHeight :", document.documentElement.offsetHeight);
  console.log("scrollHeight :", document.documentElement.scrollHeight);
  console.log("scrollPosition :", scrollPosition);

  useEffect(() => {
    window.addEventListener("scroll", updateScrollPosition);
  });
  useEffect(() => {
    const winHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setHeight(winHeight);
  });

  return (
    <div className="content-page-container">
      <div className="content-page-wrapper">
        <div className="content-page-header-wrapper">
          <div className="title">[Research] Pricing Everlasting Options</div>
          <div className="subtitle">
            This post explores ways to price everlasting options.
          </div>
          <div className="content-info-box">
            <div className="author">Author Steve Kim</div>
            <div className="date">Dec 24, 2021</div>
          </div>
        </div>
        <div className="content-page-progress-bar-wrapper">
          <div className="test">
            <div
              className="content-page-progress-bar"
              style={{ width: `${(scrollPosition / height) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="content-page-content-wrapper">
          <div className="disclaimer">
            Disclaimer: This post is for informational purposes only, and the
            author will not be liable for the consequences arising from any
            investment or legal decision based on information contained in this
            post. Nothing contained in this post suggests or recommends
            investing in any particular asset. Making any decisions based only
            on the information or content of this post is NOT advised.
          </div>
          <div className="thumbnail"></div>
          <div className="content-box">
            <div className="title">1. How to hold everlasting rights </div>
            <div className="content">
              How can you hold a right to sell or buy a certain asset for a
              price you want for the desired period or even forever? The first
              way is to utilize an option with a fixed maturity date. This
              enables you to sell off an option on its expiration date and buy
              an option of the same kind with a specific expiration date,
              updating your position. In this case, the investor must find
              market makers who will make such transactions take place every
              time the option is sold to roll the investor’s position. And this
              requirement could entail risks that must be borne by investors
              themselves, such as undesired transaction prices and the risk of
              not being able to find market makers. There is another way to
              allow you to buy or sell an asset at a price you want: purchasing
              perpetual American options. An American option allows the holder
              to exercise the option rights at any time before its expiration
              date. As a perpetual American option has no specified expiration
              date, the right to sell the option rights can be exercised at any
              time the holder wants. However, here is the challenge. Pricing an
              American with a fixed expiration date is already extremely
              difficult. Naturally, it is even more challenging to calculate the
              price of an American option with no fixed expiration date.
              Paradigm, a well-known crypto-native venture capital firm,
              introduces a new type of option called the everlasting option as
              an alternative to address the shortcoming of the two ways
              mentioned above. The risks associated with the two ways are
              explained more in detail in the linked post. You can refer to the
              linked post by Paradigm to learn more. Everlasting options, which
              were derived from the concept of perpetual futures, allow the
              holders to “purchase” the everlasting rights as long as they pay
              “fees” for the everlasting rights on a regular basis. In other
              words, everlasting options offer the right to sell or buy a
              certain asset for the desired period and regularly charge fees
              called “funding fees” in exchange for the right. Please refer to
              the link above for a detailed explanation about the everlasting
              option’s mechanism. For the purpose of simplifying, Paradigm’s
              post about the everlasting option will be hereinafter referred to
              as “the original post.
            </div>
            <div className="title">2. Pricing everlasting options </div>
            <div className="content">
              Let us now discuss how to determine the appropriate prices of
              everlasting options. In the original post, the basket whose price
              is the same as the payoff of the everlasting option was employed
              in order to apply the no-arbitrage model. In this basket, an
              unlimited number of options whose expiration dates are the same as
              each of the funding fee payment dates of the everlasting option
              are included. The share of each option in the basket is set to be
              the same as the common ratio of the geometric sequence which
              starts from the option with the nearest expiration date.
            </div>
          </div>
        </div>
        <div className="content-page-content-wrapper">
          <div>
            <div className="prev-content">
              <div className="column1">arrow</div>
              <div className="column2">
                <div>이전글</div>
                <div className="title">Pre Content Title</div>
              </div>
            </div>
            <div className="next-content">
              <div className="column2">
                <div>다음글</div>
                <div className="title">Next Content Title</div>
              </div>
              <div className="column1">arrow</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
