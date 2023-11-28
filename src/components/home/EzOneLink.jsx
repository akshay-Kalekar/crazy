import { Collapse } from "antd";
import "antd";
import classNames from "classnames";
import onetooneconsultation from "../../assets/onetooneConsultation.png";
import addAccordianIcon from "../../assets/addAccordianIcon.svg";
// import "./ezonelink.css";
import { useState } from "react";

const { Panel } = Collapse;

const text1 = `No more managing multiple links or portfolios. With eZ One-Link, consolidate all your profiles –Easily connect social media, work platforms, and more – into a single, high-converting landing page..
`;

const text2 = `No more managing multiple links or portfolios. With eZ One-Link, consolidate all your profiles –Easily connect social media, work platforms, and more – into a single, high-converting landing page.
`;
const text3 = `No more managing multiple links or portfolios. With eZ One-Link, consolidate all your profiles –Easily connect social media, work platforms, and more – into a single, high-converting landing page.
`;

const text4 = `No more managing multiple links or portfolios. With eZ One-Link, consolidate all your profiles –Easily connect social media, work platforms, and more – into a single, high-converting landing page.
`;
const text5 = `No more managing multiple links or portfolios. With eZ One-Link, consolidate all your profiles –Easily connect social media, work platforms, and more – into a single, high-converting landing page.
`;

const panelClasses = "bg-white border-b-4 text-bold text-md lg:text-lg border-black-200 rounded shadow-md hover:shadow-lg mb-4 p-4 font-bold"
const desStyle = "text-gray-600 text-sm lg:text-md inside-content text-left pl-2"
const iconStyle = {
  width: "19.51px",
  height: "19.51px",
};


const EzOneLink = () => {
  const accordiandata = [
    {
      title: "the Power of eZ One-Link",
      description:
        "No more managing multiple links or portfolios. With eZ One-Link, consolidate all your profiles –Easily connect social media, work platforms, and more – into a single, high-converting landing page.. ",
    },
    {
      title: "Sell Your Service",
      description:
        "No more managing multiple links or portfolios. With eZ One-Link, consolidate all your profiles –Easily connect social media, work platforms, and more – into a single, high-converting landing page.. ",
    },
    {
      title: "Create Your Proof of Work",
      description:
        "No more managing multiple links or portfolios. With eZ One-Link, consolidate all your profiles –Easily connect social media, work platforms, and more – into a single, high-converting landing page.. ",
    },
    {
      title: "No need of cv anymore",
      description:
        "No more managing multiple links or portfolios. With eZ One-Link, consolidate all your profiles –Easily connect social media, work platforms, and more – into a single, high-converting landing page.. ",
    },
    {
      title: "Create Your own brand",
      description:
        "No more managing multiple links or portfolios. With eZ One-Link, consolidate all your profiles –Easily connect social media, work platforms, and more – into a single, high-converting landing page.. ",
    },
  ];

  return (
    <div
      className="bg-white  px-[0rem]  w-full "
    >
      <div className="text-center">
        <h3>
          eZ One-Link:
        </h3>
        <h3 className="text-3xl font-bold text-black">
          ShowCase everything You are and More!
        </h3>
        <h5 className="text-md px-2 pt-2 ">
          Join Professionals Using eZ For Their Link in Bio
        </h5>
      </div>

      <div className="flex flex-row  justify-around main-sec mt-5 px-4">
        <div className="w-4/5 mt-5 accordian-sec">
          <Collapse accordion ActiveKey={["1", "2", "3", "4", "5", "6"]} ghost>
            <Panel
              header="the Power of eZ One-Link"
              key="1"
              style={{
                backgroundColor: "#DEFFFD",
                borderRadius: "8px",
                color: "#003902",
              }}
              className={`${panelClasses} panel-sec`}
              expandiconposition="right"
              extra={
                <img
                  src={addAccordianIcon}
                  alt="one-to-one-consultation"
                  style={iconStyle}
                />
              }
            >
              <p className={desStyle}>{text1}</p>
            </Panel>
            <Panel
              header="Sell Your Service"
              key="2"
              style={{
                backgroundColor: "#83FAAC",
                borderRadius: "8px",
                color: "#003902",
              }}
              extra={
                <img
                  src={addAccordianIcon}
                  alt="one-to-one-consultation"
                  style={iconStyle}
                />
              }
              className={`${panelClasses} panel-sec`}
            >
              <p className={desStyle}>{text2}</p>
            </Panel>
            <Panel
              header="Create Your Proof of Work"
              key="3"
              style={{
                backgroundColor: "#F7E384",
                borderRadius: "8px",
                color: "#003902",
              }}
              extra={
                <img
                  src={addAccordianIcon}
                  alt="one-to-one-consultation"
                  style={iconStyle}
                />
              }
              className={`${panelClasses} panel-sec`}
            >
              <p className={desStyle}>{text3}</p>
            </Panel>
            <Panel
              header="No need of CV anymore"
              key="4"
              style={{
                backgroundColor: "#83FAEB",
                borderRadius: "8px",
                color: "#003902",
              }}
              extra={
                <img
                  src={addAccordianIcon}
                  alt="one-to-one-consultation"
                  style={iconStyle}
                />
              }
              className={`${panelClasses} panel-sec`}
            >
              <p className={desStyle}>{text4}</p>
            </Panel>
            <Panel
              header="Create Your own Brand"
              key="5"
              style={{
                backgroundColor: "#F9D8EE",
                borderRadius: "8px",
                color: "#003902",
              }}
              extra={
                <img
                  src={addAccordianIcon}
                  alt="one-to-one-consultation"
                  style={iconStyle}
                />
              }
              className={`${panelClasses} panel-sec`}
            >
              <p className={desStyle}>{text5}</p>
            </Panel>
          </Collapse>
        </div>
        <div className="image-sec mt-[0rem] hidden  md:flex justify-center align-center">
          <div className="flex justify-center">
            <img
              src={onetooneconsultation}
              alt="Placeholder"
              className="object-contain"
            style={{width:"70%"}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default EzOneLink;

