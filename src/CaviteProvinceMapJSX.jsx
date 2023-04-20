import React, { useState } from "react";

const MapTooltip = ({ visible, position, content }) => {
   if (!visible) return null;

   const tooltipStyle = {
      top: position.y,
      left: position.x,
   };

   return <span style={tooltipStyle} className="map-tooltip">{content}</span>;
};

const CaviteProvinceMapJSX = ({
   setSelectedProvince,
   setMenuPosition,
   setMenuVisible,
   setSelectedProvinceLayer,
   totalLevel,
}) => {
   const [tooltipVisible, setTooltipVisible] = useState(false);
   const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
   const [tooltipContent, setTooltipContent] = useState("");

   const handleProvinceClick = (event) => {
      const offsetY =
         event.target.getBoundingClientRect().y + 210 - window.innerHeight < 0
            ? 0
            : event.target.getBoundingClientRect().y + 210 - window.innerHeight;
      const offsetX =
         event.target.getBoundingClientRect().x + 200 - window.innerWidth < 0
            ? 0
            : event.target.getBoundingClientRect().x + 200 - window.innerWidth;
      setSelectedProvince(event.target.getAttribute("id"));
      setSelectedProvinceLayer(event.target);
      setMenuPosition({
         x: event.target.getBoundingClientRect().x + window.pageXOffset - offsetX,
         y: event.target.getBoundingClientRect().y + window.pageYOffset - offsetY,
      });
      setMenuVisible(true);
   };

   const handleMouseEnter = (event) => {
      event.target.setAttribute("fill", "#CCCCCC");
      const targetElement = event.target.parentNode;
      const position = targetElement.getBoundingClientRect();
      setTooltipPosition({
         x: position.x + window.pageXOffset,
         y: position.y + window.pageYOffset,
      });
      const tooltipContent = targetElement.getAttribute("id").replace(/_/g, " ");
      setTooltipContent(tooltipContent);
      setTooltipVisible(true);
   };

   const handleMouseLeave = (event) => {
      event.target.setAttribute("fill", "#fff");
      setTooltipVisible(false);
   };

   const handleOutsideClick = () => {
      setMenuVisible(false);
   };

   return (
      <>
         <MapTooltip
            visible={tooltipVisible}
            position={tooltipPosition}
            content={tooltipContent}
         />
         <svg
            xmlns="http://www.w3.org/2000/svg"
            id="svg574"
            version="1.1"
            viewBox="0 0 840 1221"
            xmlSpace="preserve"
         >
            <g id="Background">
               <path
                  id="rect11351"
                  fill="#9dc3fb"
                  fillOpacity="1"
                  strokeWidth="0.75"
                  d="M-1.031 1.031H841.288V1223.7849999999999H-1.031z"
                  onClick={(event) => handleOutsideClick(event)}
               ></path>
            </g>


            <g transform="translate(0,100)">
               <g
                  className="province-layer"
                  id="Bacoor">
                  <path
                     d="m 633.63072,377.42607 -6.27621,13.59839 6.0147,14.90601 -0.78453,11.50636 4.96867,9.6758 14.12145,9.93734 15.95203,33.47314 -1.56905,3.39958 6.01469,3.66112 7.32224,15.95202 8.62978,2.61511 5.47809,18.69009 -6.10218,16.08754 -1.71727,15.79275 -44.74931,-6.28705 5.1776,-18.12167 -12.94401,-33.28459 -9.24572,-12.57418 -4.43795,-0.73965 -2.95863,-6.65692 -16.27247,-19.2311 -13.31385,-17.01216 -8.50607,-13.68362 -4.06811,-17.38202 v -4.80776 l 15.53281,-5.17762 28.10701,-6.65691 z"
                     id="Bacoor"
                     fill="#ffffff"
                     fillRule="nonzero"
                     stroke="#000000"
                     strokeDasharray="none"
                     strokeDashoffset="0"
                     strokeLinecap="butt"
                     strokeLinejoin="miter"
                     strokeMiterlimit="4"
                     strokeWidth="1"
                     opacity="1"
                     vectorEffect="non-scaling-stroke"
                     onClick={(event) => handleProvinceClick(event)}
                     onMouseEnter={(event) => handleMouseEnter(event)}
                     onMouseLeave={(event) => handleMouseLeave(event)}
                  />
               </g>
               <g
                  className="province-layer"
                  id="Imus">
                  <path
                     d="m 574.36461,396.9406 v 4.80776 l 4.06811,17.38202 8.50607,13.68362 29.58632,36.24326 2.95863,6.65692 4.43795,0.73965 9.24572,12.57418 12.94401,33.28459 -5.1776,18.12167 -43.63982,-1.84916 -30.69581,10.35523 -3.69828,-7.39664 -5.91727,-2.21895 1.51721,-13.76751 -15.57071,-25.43434 1.10949,-7.76643 -13.68367,-19.97075 31.06563,-8.87587 -6.28709,-14.05356 1.47932,-11.46467 -10.35522,-21.45005 -4.43794,-7.76643 5.91726,-8.87586 7.76641,9.98537 5.91726,-9.98537 -0.36982,-9.24573 6.28709,-2.95867 z"
                     id="Imus"
                     fill="#ffffff"
                     fillRule="nonzero"
                     stroke="#000000"
                     strokeDasharray="none"
                     strokeDashoffset="0"
                     strokeLinecap="butt"
                     strokeLinejoin="miter"
                     strokeMiterlimit="4"
                     strokeWidth="1"
                     opacity="1"
                     vectorEffect="non-scaling-stroke"
                     onClick={(event) => handleProvinceClick(event)}
                     onMouseEnter={(event) => handleMouseEnter(event)}
                     onMouseLeave={(event) => handleMouseLeave(event)}
                  />
               </g>
               <g
                  className="province-layer"
                  id="Kawit">
                  <path
                     d="m 541.81966,408.77514 14.79316,29.21648 -1.47932,11.46467 6.28709,14.05356 -31.06563,8.87587 -13.31384,-12.57419 -5.78708,-14.99058 8.00605,-22.73198 0.73966,-10.35523 10.35521,7.39664 z"
                     id="Kawit"
                     fill="#ffffff"
                     fillRule="nonzero"
                     stroke="#000000"
                     strokeDasharray="none"
                     strokeDashoffset="0"
                     strokeLinecap="butt"
                     strokeLinejoin="miter"
                     strokeMiterlimit="4"
                     strokeWidth="1"
                     opacity="1"
                     vectorEffect="non-scaling-stroke"
                     onClick={(event) => handleProvinceClick(event)}
                     onMouseEnter={(event) => handleMouseEnter(event)}
                     onMouseLeave={(event) => handleMouseLeave(event)}
                  />
               </g>
               <g
                  className="province-layer"
                  id="Noveleta">
                  <path
                     d="m 519.99975,411.73374 -0.73966,10.35523 -8.00605,22.73198 5.78708,14.99058 -7.49192,6.54516 -7.06074,-3.13811 -4.96866,-5.75322 4.44565,-5.23013 -0.26151,-8.10679 -6.2762,-4.18412 7.32223,-17.52112 5.23018,-19.3516 9.93732,0.52301 z"
                     id="Noveleta"
                     fill="#ffffff"
                     fillRule="nonzero"
                     stroke="#000000"
                     strokeDasharray="none"
                     strokeDashoffset="0"
                     strokeLinecap="butt"
                     strokeLinejoin="miter"
                     strokeMiterlimit="4"
                     strokeWidth="1"
                     opacity="1"
                     vectorEffect="non-scaling-stroke"
                     onClick={(event) => handleProvinceClick(event)}
                     onMouseEnter={(event) => handleMouseEnter(event)}
                     onMouseLeave={(event) => handleMouseLeave(event)}
                  />
               </g>
               <g
                  className="province-layer"
                  id="Cavite City">
                  <path
                     d="m 546.94528,341.87861 -19.35168,9.67513 -2.87728,14.38353 -5.49195,9.67655 -7.06045,15.1671 -4.18316,12.2912 9.93628,0.52234 -0.26117,-11.50621 7.32162,-5.75314 9.4154,-9.93772 h 10.98243 l 3.66227,-2.87582 -8.10806,-3.92348 13.33737,-0.7835 8.36924,2.35349 3.39819,-3.66232 -4.18316,-4.18315 -20.92164,0.78358 8.36923,-13.07479 14.12091,-4.44581 -1.04616,-4.18457 z m -417.10642,150.10643 -6.5381,4.44581 -6.01429,-2.35491 -3.66081,3.66224 -6.01575,-2.87732 -6.27547,4.70698 -6.014304,-3.13699 -10.461543,-2.09232 -4.706966,4.18315 -6.014302,0.785 -4.96814,4.96815 3.660812,12.2912 9.937744,5.23081 7.321623,2.09232 8.891583,-4.18464 1.307333,-11.76738 8.63041,-3.13849 5.22932,-4.18464 8.36923,3.13848 7.06046,-4.44581 9.41393,-2.09233 10.19891,5.49198 -6.01429,-7.06047 z m 23.79747,33.99495 -4.18462,4.96957 -10.19891,1.82974 6.27693,2.87724 6.79927,-2.35349 z"
                     id="Cavite City"
                     fill="#ffffff"
                     fillRule="nonzero"
                     stroke="#000000"
                     strokeDasharray="none"
                     strokeDashoffset="0"
                     strokeLinecap="butt"
                     strokeLinejoin="miter"
                     strokeMiterlimit="4"
                     strokeWidth="1"
                     opacity="1"
                     vectorEffect="non-scaling-stroke"
                     onClick={(event) => handleProvinceClick(event)}
                     onMouseEnter={(event) => handleMouseEnter(event)}
                     onMouseLeave={(event) => handleMouseLeave(event)}
                  />
               </g>
               <g
                  className="province-layer"
                  id="Rosario">
                  <path
                     d="m 495.42774,439.94432 6.2762,4.18412 0.26151,8.10679 -4.44565,5.23013 4.96866,5.75322 7.06074,3.13811 -6.7465,13.05581 -7.76641,4.253 -8.7125,-6.9195 -5.71083,5.80999 -7.95132,-3.69825 -8.69098,-4.25307 -2.40389,-7.39657 3.66601,-14.12184 9.83275,-1.41094 16.82721,-7.39657 z"
                     id="Rosario"
                     fill="#ffffff"
                     fillRule="nonzero"
                     stroke="#000000"
                     strokeDasharray="none"
                     strokeDashoffset="0"
                     strokeLinecap="butt"
                     strokeLinejoin="miter"
                     strokeMiterlimit="4"
                     strokeWidth="1"
                     opacity="1"
                     vectorEffect="non-scaling-stroke"
                     onClick={(event) => handleProvinceClick(event)}
                     onMouseEnter={(event) => handleMouseEnter(event)}
                     onMouseLeave={(event) => handleMouseLeave(event)}
                  />
               </g>
               <g
                  className="province-layer"
                  id="Dasmariñas">
                  <path
                     d="m 566.59819,548.94034 30.69581,-10.35523 43.63982,1.84916 44.74931,6.28705 -1.24136,11.20478 -1.34744,43.52993 -8.13624,14.42335 -1.47932,18.49145 -11.4647,18.49146 2.5888,15.16292 -1.81397,14.54586 -39.23704,-4.56041 -11.4647,-0.73972 -21.81991,-8.87587 -4.43794,6.28706 -4.80778,-9.24566 2.5888,-6.65699 -4.43795,-4.06811 -0.73966,-24.77851 1.84915,-6.65691 -8.50606,-14.79314 4.80777,-22.55963 -8.13624,-12.57419 z"
                     id="path1135"
                     fill="#ffffff"
                     fillRule="nonzero"
                     stroke="#000000"
                     strokeDasharray="none"
                     strokeDashoffset="0"
                     strokeLinecap="butt"
                     strokeLinejoin="miter"
                     strokeMiterlimit="4"
                     strokeWidth="1"
                     opacity="1"
                     vectorEffect="non-scaling-stroke"
                     onClick={(event) => handleProvinceClick(event)}
                     onMouseEnter={(event) => handleMouseEnter(event)}
                     onMouseLeave={(event) => handleMouseLeave(event)}
                  />
               </g>
               <g
                  className="province-layer"
                  id="General Mariano Alvarez">
                  <path
                     d="m 683.09433,601.45603 -8.13624,14.42335 -1.47932,18.49145 -7.95133,13.12887 12.75911,4.25308 9.24572,-17.01216 11.09487,-17.38194 16.27247,-9.61559 2.77372,-11.83446 11.4647,-3.88322 -2.5888,-8.32118 2.95863,-3.69825 -7.5815,-2.58881 2.40389,-5.73237 -7.76641,6.47202 -9.98538,10.72503 -15.53281,5.73237 z"
                     id="General Mariano Alvarez"
                     fill="#ffffff"
                     fillRule="nonzero"
                     stroke="#000000"
                     strokeDasharray="none"
                     strokeDashoffset="0"
                     strokeLinecap="butt"
                     strokeLinejoin="miter"
                     strokeMiterlimit="4"
                     strokeWidth="1"
                     opacity="1"
                     vectorEffect="non-scaling-stroke"
                     onClick={(event) => handleProvinceClick(event)}
                     onMouseEnter={(event) => handleMouseEnter(event)}
                     onMouseLeave={(event) => handleMouseLeave(event)}
                  />
               </g>
               <g
                  className="province-layer"
                  id="Carmona">
                  <path
                     d="m 678.28655,651.75278 9.24572,-17.01216 11.09487,-17.38194 16.27247,-9.61559 2.77372,-11.83446 11.4647,-3.88322 11.4647,-5.91727 12.38927,5.54741 4.80778,3.88322 4.80777,-4.99273 6.10218,-6.10216 12.57418,0.92462 v 4.99265 l -8.69098,1.10951 -7.39658,17.7518 -4.06812,-0.36986 -6.84183,19.60097 -4.99269,6.47194 -7.5815,-0.36978 -2.40388,9.61551 0.55474,4.99273 -4.06812,6.47202 -4.80778,8.50608 -19.23111,-2.21902 -11.83452,0.36986 -9.61555,-4.43797 -6.47201,2.21895 -5.73235,-2.77371 z"
                     id="Carmona"
                     fill="#ffffff"
                     fillRule="nonzero"
                     stroke="#000000"
                     strokeDasharray="none"
                     strokeDashoffset="0"
                     strokeLinecap="butt"
                     strokeLinejoin="miter"
                     strokeMiterlimit="4"
                     strokeWidth="1"
                     opacity="1"
                     vectorEffect="non-scaling-stroke"
                     onClick={(event) => handleProvinceClick(event)}
                     onMouseEnter={(event) => handleMouseEnter(event)}
                     onMouseLeave={(event) => handleMouseLeave(event)}
                  />
               </g>
               <g
                  className="province-layer"
                  id="Silang">
                  <path
                     d="m 585.82931,674.68213 4.43794,-6.28706 21.81991,8.87587 9.98538,0.55475 40.71636,4.74538 1.81397,-14.54586 -2.5888,-15.16292 3.51337,-5.36259 12.75911,4.25308 -0.18492,5.5474 5.73235,2.77371 6.47201,-2.21895 9.61555,4.43797 11.83452,-0.36986 19.23111,2.21902 -0.18491,18.12159 -6.28709,12.94397 3.51337,12.01951 12.01945,4.06811 10.3552,-6.84189 -5.36252,16.4574 -5.91726,7.39657 6.2871,17.93677 -16.4574,7.39657 -0.55474,6.84181 -7.95132,1.84916 0.73966,5.54741 15.53281,-1.6642 -0.18491,16.08754 -1.47932,11.83454 0.55475,17.19705 -5.73235,13.12894 -85.91309,29.18794 -32.42706,11.50636 -1.56905,-13.59846 -2.09207,-24.58181 2.09207,-23.53573 -14.64448,-14.64447 -4.18414,-29.81202 -14.64448,-35.56517 -9.41431,-22.48971 7.32224,-9.6758 v -10.19888 z"
                     id="Silang"
                     fill="#ffffff"
                     fillRule="nonzero"
                     stroke="#000000"
                     strokeDasharray="none"
                     strokeDashoffset="0"
                     strokeLinecap="butt"
                     strokeLinejoin="miter"
                     strokeMiterlimit="4"
                     strokeWidth="1"
                     opacity="1"
                     vectorEffect="non-scaling-stroke"
                     onClick={(event) => handleProvinceClick(event)}
                     onMouseEnter={(event) => handleMouseEnter(event)}
                     onMouseLeave={(event) => handleMouseLeave(event)}
                  />
               </g>
               <g
                  className="province-layer"
                  id="General Trias">
                  <path
                     d="m 480.61296,482.55599 5.71083,-5.80999 8.7125,6.9195 7.76641,-4.253 6.7465,-13.05581 7.49192,-6.54516 13.31384,12.57419 13.68367,19.97075 -1.10949,7.76643 15.57071,25.43434 -1.51721,13.76751 5.91727,2.21895 3.69828,7.39664 1.84915,24.40865 8.13624,12.57419 -4.80777,22.55963 8.50606,14.79314 -1.84915,6.65691 0.73966,24.77851 4.43795,4.06811 -2.5888,6.65699 4.80778,9.24566 -11.42599,6.37304 v 10.19888 l -7.32224,9.6758 9.13267,21.46028 -22.55957,7.95133 -7.95132,-5.17762 -1.47931,-13.86859 -9.61556,-14.79321 -0.18491,-16.27243 -3.32846,-11.27978 6.10217,-6.47203 -5.54743,-19.60096 -6.47201,-6.10216 4.25304,-10.17027 -6.65692,-18.1216 -5.54744,-12.75915 -6.28709,6.10216 -10.90996,4.25308 -7.95132,-12.75908 7.95132,-17.9367 -2.21897,-11.09489 -3.69829,-6.47202 6.65692,-20.7104 2.5888,-18.30656 -4.06811,-13.86859 -11.09488,-3.88322 -5.73234,-12.38922 z"
                     id="General Trias"
                     fill="#ffffff"
                     fillRule="nonzero"
                     stroke="#000000"
                     strokeDasharray="none"
                     strokeDashoffset="0"
                     strokeLinecap="butt"
                     strokeLinejoin="miter"
                     strokeMiterlimit="4"
                     strokeWidth="1"
                     opacity="1"
                     vectorEffect="non-scaling-stroke"
                     onClick={(event) => handleProvinceClick(event)}
                     onMouseEnter={(event) => handleMouseEnter(event)}
                     onMouseLeave={(event) => handleMouseLeave(event)}
                  />
               </g>
               <g
                  className="province-layer"
                  id="Amadeo">
                  <path
                     d="m 539.23085,703.34392 4.9927,7.95133 1.47931,13.86859 7.95132,5.17762 22.55957,-7.95133 14.92612,36.5946 4.18414,29.81202 14.64448,14.64447 -2.09207,23.53573 3.66112,38.18027 -35.87853,17.55376 v -10.35523 l -3.8832,-9.61559 -0.73967,-16.08754 -3.32846,-7.95132 3.88321,-10.54014 -12.7591,-17.38194 -8.32116,-18.12159 1.84915,-7.58154 -9.61555,-13.68362 -4.43795,-11.83453 -4.80777,-15.53286 6.10218,-3.69825 -7.02675,-13.86859 -6.47201,-12.94405 -0.73966,-9.24572 z"
                     id="Amadeo"
                     fill="#ffffff"
                     fillRule="nonzero"
                     stroke="#000000"
                     strokeDasharray="none"
                     strokeDashoffset="0"
                     strokeLinecap="butt"
                     strokeLinejoin="miter"
                     strokeMiterlimit="4"
                     strokeWidth="1"
                     opacity="1"
                     vectorEffect="non-scaling-stroke"
                     onClick={(event) => handleProvinceClick(event)}
                     onMouseEnter={(event) => handleMouseEnter(event)}
                     onMouseLeave={(event) => handleMouseLeave(event)}
                  />
               </g>
               <g
                  className="province-layer"
                  id="Trece Martires">
                  <path
                     d="m 500.02898,606.0789 10.90996,-4.25308 6.28709,-6.10216 12.20436,30.88075 -4.25304,10.17027 6.47201,6.10216 5.54743,19.60096 -6.10217,6.47203 3.32846,11.27978 0.18491,16.27243 4.62286,6.84188 -13.86858,0.92455 0.73966,9.24572 13.49876,26.81264 -6.10218,3.69825 -7.86653,-13.02174 -12.0294,-15.82129 -25.10482,-0.26147 -9.54903,-19.15819 -14.79316,-16.64229 -14.79315,-7.76643 11.83452,-9.24566 -10.72504,-16.64236 1.84915,-17.38195 12.94401,-18.49145 18.12162,-4.43797 z"
                     id="Trece Martires"
                     fill="#ffffff"
                     fillRule="nonzero"
                     stroke="#000000"
                     strokeDasharray="none"
                     strokeDashoffset="0"
                     strokeLinecap="butt"
                     strokeLinejoin="miter"
                     strokeMiterlimit="4"
                     strokeWidth="1"
                     opacity="1"
                     vectorEffect="non-scaling-stroke"
                     onClick={(event) => handleProvinceClick(event)}
                     onMouseEnter={(event) => handleMouseEnter(event)}
                     onMouseLeave={(event) => handleMouseLeave(event)}
                  />
               </g>
               <g
                  className="province-layer"
                  id="Tanza">
                  <path
                     d="m 461.56677,467.2081 2.40389,7.39657 16.6423,7.95132 1.84915,6.10223 5.73234,12.38922 11.09488,3.88322 4.06811,13.86859 -2.5888,18.30656 -6.65692,20.7104 3.69829,6.47202 2.21897,11.09489 -7.95132,17.9367 7.95132,12.75908 -16.6423,-0.92462 -18.12162,4.43797 -12.94401,18.49145 -1.84915,17.38195 10.72504,16.64236 -11.83452,9.24566 -15.16299,-18.49138 -8.13624,-18.12167 4.43795,-12.20432 4.06812,-9.24573 -12.57419,-27.36739 -23.66905,-22.55957 -22.55957,-2.21894 -5.91726,-3.69832 15.53281,-17.75173 20.3406,-16.6423 10.72504,-4.06818 22.92939,-24.03886 12.21222,-1.89757 z"
                     id="Tanza"
                     fill="#ffffff"
                     fillRule="nonzero"
                     stroke="#000000"
                     strokeDasharray="none"
                     strokeDashoffset="0"
                     strokeLinecap="butt"
                     strokeLinejoin="miter"
                     strokeMiterlimit="4"
                     strokeWidth="1"
                     opacity="1"
                     vectorEffect="non-scaling-stroke"
                     onClick={(event) => handleProvinceClick(event)}
                     onMouseEnter={(event) => handleMouseEnter(event)}
                     onMouseLeave={(event) => handleMouseLeave(event)}
                  />
               </g>
               <g
                  className="province-layer"
                  id="Naic">
                  <path
                     d="m 369.84919,557.44635 5.91726,3.69832 22.55957,2.21894 23.66905,22.55957 12.57419,27.36739 -8.50607,21.45005 8.13624,18.12167 15.16299,18.49138 14.79315,7.76643 14.79316,16.64229 4.44961,8.56704 -34.51913,9.15287 -27.98142,5.75314 -18.04409,-24.84328 -5.49168,0.78447 -5.75319,-3.66112 3.13811,-7.32223 -12.29091,-13.07538 -28.76594,-12.55245 -30.5965,-27.45838 -24.58181,-19.09014 5.75319,-8.10678 18.04409,-1.04601 14.12146,-12.02937 7.84526,-8.36832 9.67582,0.78455 z"
                     id="Naic"
                     fill="#ffffff"
                     fillRule="nonzero"
                     stroke="#000000"
                     strokeDasharray="none"
                     strokeDashoffset="0"
                     strokeLinecap="butt"
                     strokeLinejoin="miter"
                     strokeMiterlimit="4"
                     strokeWidth="1"
                     opacity="1"
                     vectorEffect="non-scaling-stroke"
                     onClick={(event) => handleProvinceClick(event)}
                     onMouseEnter={(event) => handleMouseEnter(event)}
                     onMouseLeave={(event) => handleMouseLeave(event)}
                  />
               </g>
               <g
                  className="province-layer"
                  id="Indang">
                  <path
                     d="m 420.89779,719.23544 28.0948,-5.90614 34.40575,-8.99987 5.09942,10.59115 25.10482,0.26147 12.0294,15.82129 7.86653,13.02174 4.99269,15.71775 4.25303,11.64964 9.61555,13.68362 -1.84915,7.58154 8.32116,18.12159 12.7591,17.38194 -3.88321,10.54014 3.32846,7.95132 0.73967,16.08754 3.8832,9.61559 v 10.35523 l -15.90265,3.69825 1.29441,-9.24573 -4.9927,-8.50608 0.92457,-11.83446 -13.68366,-24.22383 -7.02676,0.92455 -3.51338,17.7518 -26.07293,6.84189 -11.09487,5.17754 -8.50607,-11.46467 -2.5888,-8.87587 -13.68367,-7.58153 -7.02675,-11.83454 -11.27979,-15.16299 -9.24572,-11.64957 -7.76641,-26.44278 -0.73966,-16.4574 -8.13624,-17.9367 z"
                     id="Indang"
                     fill="#ffffff"
                     fillRule="nonzero"
                     stroke="#000000"
                     strokeDasharray="none"
                     strokeDashoffset="0"
                     strokeLinecap="butt"
                     strokeLinejoin="miter"
                     strokeMiterlimit="4"
                     strokeWidth="1"
                     opacity="1"
                     vectorEffect="non-scaling-stroke"
                     onClick={(event) => handleProvinceClick(event)}
                     onMouseEnter={(event) => handleMouseEnter(event)}
                     onMouseLeave={(event) => handleMouseLeave(event)}
                  />
               </g>
               <g
                  className="province-layer"
                  id="Mendez">
                  <path
                     d="m 495.59104,863.29491 11.09487,-5.17754 26.07293,-6.84189 3.51338,-17.7518 7.02676,-0.92455 13.68366,24.22383 -0.92457,11.83446 4.9927,8.50608 -1.29441,9.24573 -23.66905,12.57419 -15.16299,4.99272 -10.35521,-22.18977 -7.95133,-5.17762 z"
                     id="Mendez"
                     fill="#ffffff"
                     fillRule="nonzero"
                     stroke="#000000"
                     strokeDasharray="none"
                     strokeDashoffset="0"
                     strokeLinecap="butt"
                     strokeLinejoin="miter"
                     strokeMiterlimit="4"
                     strokeWidth="1"
                     opacity="1"
                     vectorEffect="non-scaling-stroke"
                     onClick={(event) => handleProvinceClick(event)}
                     onMouseEnter={(event) => handleMouseEnter(event)}
                     onMouseLeave={(event) => handleMouseLeave(event)}
                  />
               </g>
               <g
                  className="province-layer"
                  id="Tagaytay">
                  <path
                     d="m 520.92432,903.97614 15.16299,-4.99272 23.66905,-12.57419 15.90265,-3.69825 35.87853,-17.55376 118.34015,-40.6943 14.24469,26.83438 -93.35855,54.6553 -47.85608,25.88929 -65.63864,13.59846 z"
                     id="Tagaytay"
                     fill="#ffffff"
                     fillRule="nonzero"
                     stroke="#000000"
                     strokeDasharray="none"
                     strokeDashoffset="0"
                     strokeLinecap="butt"
                     strokeLinejoin="miter"
                     strokeMiterlimit="4"
                     strokeWidth="1"
                     opacity="1"
                     vectorEffect="non-scaling-stroke"
                     onClick={(event) => handleProvinceClick(event)}
                     onMouseEnter={(event) => handleMouseEnter(event)}
                     onMouseLeave={(event) => handleMouseLeave(event)}
                  />
               </g>
               <g
                  className="province-layer"
                  id="Alfonso">
                  <path
                     d="m 463.78575,823.5383 7.02675,11.83454 13.68367,7.58153 2.5888,8.87587 8.50607,11.46467 7.02674,13.31384 7.95133,5.17762 10.35521,22.18977 11.64962,30.32599 -22.00483,2.9586 -30.14106,15.34789 -19.78585,16.64229 0.18491,-15.71768 -4.80777,-19.78585 -23.48414,-15.163 -19.41602,-17.19705 4.43794,-31.25053 14.97808,-23.85397 16.82722,-15.90264 z"
                     id="Alfonso"
                     fill="#ffffff"
                     fillRule="nonzero"
                     stroke="#000000"
                     strokeDasharray="none"
                     strokeDashoffset="0"
                     strokeLinecap="butt"
                     strokeLinejoin="miter"
                     strokeMiterlimit="4"
                     strokeWidth="1"
                     opacity="1"
                     vectorEffect="non-scaling-stroke"
                     onClick={(event) => handleProvinceClick(event)}
                     onMouseEnter={(event) => handleMouseEnter(event)}
                     onMouseLeave={(event) => handleMouseLeave(event)}
                  />
               </g>
               <g
                  className="province-layer"
                  id="Ternate">
                  <path
                     d="m 298.51178,612.01693 24.58181,19.09014 2.74595,2.52411 -26.07294,27.73711 -7.21167,-6.65692 -13.31384,-0.18489 -60.46703,55.1045 -10.72504,15.163 -11.64962,4.62286 -7.7664,-5.36251 -9.61556,-12.57419 -10.35521,-2.21895 -2.95864,-5.36251 -1.84913,-8.32118 -8.50607,-5.54741 1.2944,-4.99273 -4.62286,-1.66419 1.2944,-9.98537 5.36252,-1.84916 4.62286,-4.80784 4.80778,7.95133 5.54743,-2.03406 0.36983,-8.506 6.84183,-7.76643 3.14355,8.13622 h 5.91726 l 0.92458,-9.06084 8.50607,-8.506 0.55474,7.95132 3.8832,0.92454 3.51338,-7.76642 2.77372,7.21167 5.1776,-0.18489 2.03406,-7.02678 7.39658,0.55475 3.14355,6.65692 h 6.65691 l 4.06813,-5.7323 5.91726,-0.73972 3.69829,4.43797 5.91726,-1.29441 2.95863,-3.51335 8.69098,-1.10951 8.8759,-12.57419 8.69098,-1.2944 7.39658,-8.87587 z"
                     id="Ternate"
                     fill="#ffffff"
                     fillRule="nonzero"
                     stroke="#000000"
                     strokeDasharray="none"
                     strokeDashoffset="0"
                     strokeLinecap="butt"
                     strokeLinejoin="miter"
                     strokeMiterlimit="4"
                     strokeWidth="1"
                     opacity="1"
                     vectorEffect="non-scaling-stroke"
                     onClick={(event) => handleProvinceClick(event)}
                     onMouseEnter={(event) => handleMouseEnter(event)}
                     onMouseLeave={(event) => handleMouseLeave(event)}
                  />
               </g>
               <g
                  className="province-layer"
                  id="Maragondon">
                  <path
                     d="m 155.34839,690.03009 8.50607,5.54741 1.84913,8.32118 2.95864,5.36251 10.35521,2.21895 9.61556,12.57419 7.7664,5.36251 11.64962,-4.62286 10.72504,-15.163 60.46703,-55.1045 13.31384,0.18489 7.21167,6.65692 26.07294,-27.73711 27.85055,24.93427 28.76594,12.55245 12.29091,13.07538 -3.13811,7.32223 5.75319,3.66112 5.49168,-0.78447 18.04409,24.84328 5.72014,16.65342 8.13624,17.9367 0.73966,16.4574 7.76641,26.44278 8.59852,10.81751 11.92699,15.99505 -14.42333,6.84189 -8.50607,-14.60824 -12.7591,-19.78586 -14.60824,-32.72991 -15.90265,-21.63494 -12.7591,-9.06084 -9.06081,-16.64229 -3.8832,14.97803 -3.14355,12.94404 -7.39658,4.99266 -13.68367,3.32853 -6.47201,6.65692 -8.32115,1.2944 -14.79316,14.60824 -12.38927,-0.55475 -12.01944,7.95132 -7.5815,9.61551 -2.77371,13.12894 -6.2871,14.79314 -10.90995,3.14356 -17.01213,10.35524 -12.94402,-10.90999 -17.19704,-19.416 -1.2944,-8.32119 8.69098,-15.34788 7.39658,-17.38195 -23.11431,-8.87586 -18.86128,-4.25308 -35.6885,-13.68362 -2.77371,-15.163 -0.73966,-13.12894 -1.2944,-14.42334 z"
                     id="Maragondon"
                     fill="#ffffff"
                     fillRule="nonzero"
                     stroke="#000000"
                     strokeDasharray="none"
                     strokeDashoffset="0"
                     strokeLinecap="butt"
                     strokeLinejoin="miter"
                     strokeMiterlimit="4"
                     strokeWidth="1"
                     opacity="1"
                     vectorEffect="non-scaling-stroke"
                     onClick={(event) => handleProvinceClick(event)}
                     onMouseEnter={(event) => handleMouseEnter(event)}
                     onMouseLeave={(event) => handleMouseLeave(event)}
                  />
               </g>
               <g
                  className="province-layer"
                  id="General Emilio Aguinaldo">
                  <path
                     d="m 361.34312,748.83284 7.39658,-4.99266 7.02675,-27.92207 9.06081,16.64229 12.7591,9.06084 15.90265,21.63494 14.60824,32.72991 12.41369,19.09223 8.85148,15.30187 -16.82722,15.90264 -14.97808,23.85397 -12.34984,-10.73272 -3.92263,-7.19151 -15.95202,-9.02206 -1.83056,-7.71451 -5.09942,-6.66849 -2.74584,-15.03667 -5.75319,-9.41434 -3.66112,-15.42902 -5.49168,-15.29828 -0.39226,-13.07538 2.35358,-5.88395 z"
                     id="General Emilio Aguinaldo"
                     fill="#ffffff"
                     fillRule="nonzero"
                     stroke="#000000"
                     strokeDasharray="none"
                     strokeDashoffset="0"
                     strokeLinecap="butt"
                     strokeLinejoin="miter"
                     strokeMiterlimit="4"
                     strokeWidth="1"
                     opacity="1"
                     vectorEffect="non-scaling-stroke"
                     onClick={(event) => handleProvinceClick(event)}
                     onMouseEnter={(event) => handleMouseEnter(event)}
                     onMouseLeave={(event) => handleMouseLeave(event)}
                  />
               </g>
               <g
                  className="province-layer"
                  id="Magallanes">
                  <path
                     d="m 249.10003,833.15389 17.01213,-10.35524 10.90995,-3.14356 6.2871,-14.79314 2.77371,-13.12894 7.5815,-9.61551 12.01944,-7.95132 12.38927,0.55475 14.79316,-14.60824 8.32115,-1.2944 6.47201,-6.65692 13.68367,-3.32853 1.36902,5.83703 -2.35358,5.88395 0.39226,13.07538 5.49168,15.29828 3.66112,15.42902 5.75319,9.41434 2.74584,15.03667 5.09942,6.66849 1.83056,7.71451 15.95202,9.02206 3.92263,7.19151 12.34984,10.73272 -4.43794,31.25053 -9.02331,-0.73031 -7.84526,2.2882 -37.72261,-26.60847 -4.64178,-14.25228 -9.87195,-4.38022 -24.18954,10.52572 -40.40307,-5.68786 -15.1675,-10.06807 z"
                     id="Magallanes"
                     fill="#ffffff"
                     fillRule="nonzero"
                     stroke="#000000"
                     strokeDasharray="none"
                     strokeDashoffset="0"
                     strokeLinecap="butt"
                     strokeLinejoin="miter"
                     strokeMiterlimit="4"
                     strokeWidth="1"
                     opacity="1"
                     vectorEffect="non-scaling-stroke"
                     onClick={(event) => handleProvinceClick(event)}
                     onMouseEnter={(event) => handleMouseEnter(event)}
                     onMouseLeave={(event) => handleMouseLeave(event)}
                  />
               </g>
            </g>


            <g
               id="g1953"
               strokeDasharray="none"
               strokeDashoffset="0"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeMiterlimit="10"
               strokeOpacity="1"
               paintOrder="markers fill stroke"
               transform="matrix(1.63481 -0 0 1.6089 -381.296 -140.998)"
            >
               <rect
                  id="rect385"
                  width="176.299"
                  height="132.998"
                  x="544.363"
                  y="159.803"
                  fill="#fff"
                  stroke="#000"
                  strokeWidth="1.5"
                  display="inline"
                  ry="6.754"
               ></rect>
               <rect
                  id="rect1963"
                  width="25.835"
                  height="17.926"
                  x="530.263"
                  y="145.262"
                  fill="#e84c3d"
                  fillOpacity="1"
                  stroke="#000"
                  strokeWidth="0.525"
                  ry="4.118"
                  transform="matrix(.6117 0 0 .62154 230.623 86.575)"
               ></rect>
               <rect
                  id="rect1963-1"
                  width="25.835"
                  height="17.926"
                  x="530.263"
                  y="175.262"
                  fill="#d58337"
                  fillOpacity="1"
                  stroke="#000"
                  strokeWidth="0.525"
                  ry="4.118"
                  transform="matrix(.6117 0 0 .62154 230.623 86.575)"
               ></rect>
               <rect
                  id="rect1963-1-2"
                  width="25.835"
                  height="17.926"
                  x="530.263"
                  y="205.262"
                  fill="#f3c218"
                  fillOpacity="1"
                  stroke="#000"
                  strokeWidth="0.525"
                  ry="4.118"
                  transform="matrix(.6117 0 0 .62154 230.623 86.575)"
               ></rect>
               <rect
                  id="rect1963-3"
                  width="25.835"
                  height="17.926"
                  x="530.676"
                  y="235.262"
                  fill="#30cc70"
                  fillOpacity="1"
                  stroke="#000"
                  strokeWidth="0.525"
                  ry="4.118"
                  transform="matrix(.6117 0 0 .62154 230.623 86.575)"
               ></rect>
               <rect
                  id="rect1963-1-8"
                  width="25.835"
                  height="17.926"
                  x="530.676"
                  y="265.263"
                  fill="#3598db"
                  fillOpacity="1"
                  stroke="#000"
                  strokeWidth="0.525"
                  ry="4.118"
                  transform="matrix(.6117 0 0 .62154 230.623 86.575)"
               ></rect>
               <rect
                  id="rect1963-1-2-1"
                  width="25.835"
                  height="17.926"
                  x="530.676"
                  y="295.263"
                  fill="#fff"
                  stroke="#000"
                  strokeWidth="0.525"
                  ry="4.118"
                  transform="matrix(.6117 0 0 .62154 230.623 86.575)"
               ></rect>
               <text
                  id="text2045-3-8"
                  x="723.828"
                  y="189.117"
                  fill="#fff"
                  stroke="#000"
                  strokeWidth="0.525"
                  fontSize="16"
                  transform="matrix(.6117 0 0 .62154 230.623 86.575)"
                  xmlSpace="preserve"
               >
                  <tspan
                     id="tspan2047-4-6"
                     x="723.828"
                     y="189.117"
                     fill="#000"
                     fillOpacity="1"
                     stroke="none"
                     strokeDasharray="none"
                     strokeWidth="0.75"
                     fontSize="16"
                  >
                     Level: 4
                  </tspan>
               </text>
               <text
                  id="text2045-3-8-4"
                  x="723.828"
                  y="159.117"
                  fill="#fff"
                  stroke="#000"
                  strokeWidth="0.525"
                  fontSize="16"
                  transform="matrix(.6117 0 0 .62154 230.623 86.575)"
                  xmlSpace="preserve"
               >
                  <tspan
                     id="tspan2047-4-6-1"
                     x="723.828"
                     y="159.117"
                     fill="#000"
                     fillOpacity="1"
                     stroke="none"
                     strokeDasharray="none"
                     strokeWidth="0.75"
                     fontSize="16"
                  >
                     Level: 5
                  </tspan>
               </text>
               <text
                  id="text2045-3-7"
                  x="723.828"
                  y="219.117"
                  fill="#fff"
                  stroke="#000"
                  strokeWidth="0.525"
                  fontSize="16"
                  transform="matrix(.6117 0 0 .62154 230.623 86.575)"
                  xmlSpace="preserve"
               >
                  <tspan
                     id="tspan2047-4-1"
                     x="723.828"
                     y="219.117"
                     fill="#000"
                     fillOpacity="1"
                     stroke="none"
                     strokeDasharray="none"
                     strokeWidth="0.75"
                     fontSize="16"
                  >
                     Level: 3
                  </tspan>
               </text>
               <text
                  id="text2045-3-84"
                  x="723.828"
                  y="249.117"
                  fill="#fff"
                  stroke="#000"
                  strokeWidth="0.525"
                  fontSize="16"
                  transform="matrix(.6117 0 0 .62154 230.623 86.575)"
                  xmlSpace="preserve"
               >
                  <tspan
                     id="tspan2047-4-9"
                     x="723.828"
                     y="249.117"
                     fill="#000"
                     fillOpacity="1"
                     stroke="none"
                     strokeDasharray="none"
                     strokeWidth="0.75"
                     fontSize="16"
                  >
                     Level: 2
                  </tspan>
               </text>
               <text
                  id="text2045-3-73"
                  x="723.828"
                  y="279.117"
                  fill="#fff"
                  stroke="#000"
                  strokeWidth="0.525"
                  fontSize="16"
                  transform="matrix(.6117 0 0 .62154 230.623 86.575)"
                  xmlSpace="preserve"
               >
                  <tspan
                     id="tspan2047-4-10"
                     x="723.828"
                     y="279.117"
                     fill="#000"
                     fillOpacity="1"
                     stroke="none"
                     strokeDasharray="none"
                     strokeWidth="0.75"
                     fontSize="16"
                  >
                     Level: 1
                  </tspan>
               </text>
               <text
                  id="text2045-3-2"
                  x="723.828"
                  y="309.117"
                  fill="#fff"
                  stroke="#000"
                  strokeWidth="0.525"
                  fontSize="16"
                  transform="matrix(.6117 0 0 .62154 230.623 86.575)"
                  xmlSpace="preserve"
               >
                  <tspan
                     id="tspan2047-4-3"
                     x="723.828"
                     y="309.117"
                     fill="#000"
                     fillOpacity="1"
                     stroke="none"
                     strokeDasharray="none"
                     strokeWidth="0.75"
                     fontSize="16"
                  >
                     Level: 0
                  </tspan>
               </text>
               <text
                  id="text2045-5"
                  x="569.215"
                  y="189.117"
                  fill="#fff"
                  stroke="#000"
                  strokeWidth="0.525"
                  fontSize="16"
                  transform="matrix(.6117 0 0 .62154 230.623 86.575)"
                  xmlSpace="preserve"
               >
                  <tspan
                     id="tspan2047-8"
                     x="569.215"
                     y="189.117"
                     fill="#000"
                     fillOpacity="1"
                     stroke="none"
                     strokeDasharray="none"
                     strokeWidth="0.75"
                     fontSize="16"
                  >
                     Stayed there
                  </tspan>
               </text>
               <text
                  id="text2045-5-9"
                  x="569.215"
                  y="159.117"
                  fill="#fff"
                  stroke="#000"
                  strokeWidth="0.525"
                  fontSize="16"
                  transform="matrix(.6117 0 0 .62154 230.623 86.575)"
                  xmlSpace="preserve"
               >
                  <tspan
                     id="tspan2047-8-2"
                     x="569.215"
                     y="159.117"
                     fill="#000"
                     fillOpacity="1"
                     stroke="none"
                     strokeDasharray="none"
                     strokeWidth="0.75"
                     fontSize="16"
                  >
                     Lived there
                  </tspan>
               </text>
               <text
                  id="text2045-2"
                  x="569.848"
                  y="219.117"
                  fill="#fff"
                  stroke="#000"
                  strokeWidth="0.525"
                  fontSize="16"
                  transform="matrix(.6117 0 0 .62154 230.623 86.575)"
                  xmlSpace="preserve"
               >
                  <tspan
                     id="tspan2047-9"
                     x="569.848"
                     y="219.117"
                     fill="#000"
                     fillOpacity="1"
                     stroke="none"
                     strokeDasharray="none"
                     strokeWidth="0.75"
                     fontSize="16"
                  >
                     Visited there
                  </tspan>
               </text>
               <text
                  id="text2045-8"
                  x="569.848"
                  y="249.117"
                  fill="#fff"
                  stroke="#000"
                  strokeWidth="0.525"
                  fontSize="16"
                  transform="matrix(.6117 0 0 .62154 230.623 86.575)"
                  xmlSpace="preserve"
               >
                  <tspan
                     id="tspan2047-2"
                     x="569.848"
                     y="249.117"
                     fill="#000"
                     fillOpacity="1"
                     stroke="none"
                     strokeDasharray="none"
                     strokeWidth="0.75"
                     fontSize="16"
                  >
                     Alighted there
                  </tspan>
               </text>
               <text
                  id="text2045-0"
                  x="568.828"
                  y="279.117"
                  fill="#fff"
                  stroke="#000"
                  strokeWidth="0.525"
                  fontSize="16"
                  transform="matrix(.6117 0 0 .62154 230.623 86.575)"
                  xmlSpace="preserve"
               >
                  <tspan
                     id="tspan2047-7"
                     x="568.828"
                     y="279.117"
                     fill="#000"
                     fillOpacity="1"
                     stroke="none"
                     strokeDasharray="none"
                     strokeWidth="0.75"
                     fontSize="16"
                  >
                     Passed there
                  </tspan>
               </text>
               <text
                  id="text2045-4"
                  x="568.828"
                  y="309.117"
                  fill="#fff"
                  stroke="#000"
                  strokeWidth="0.525"
                  fontSize="16"
                  transform="matrix(.6117 0 0 .62154 230.623 86.575)"
                  xmlSpace="preserve"
               >
                  <tspan
                     id="tspan2047-85"
                     x="568.828"
                     y="309.117"
                     fill="#000"
                     fillOpacity="1"
                     stroke="none"
                     strokeDasharray="none"
                     strokeWidth="0.75"
                     fontSize="16"
                  >
                     Never been there
                  </tspan>
               </text>
               <text
                  xmlSpace="preserve"
                  style={{ WebkitTextAlign: "center", textAlign: "center" }}
                  id="text3282"
                  x="637.208"
                  y="147.041"
                  fill="#000"
                  fillOpacity="1"
                  stroke="none"
                  strokeWidth="0.462"
                  fontSize="20"
                  textAnchor="middle"
                  transform="scale(.99204 1.00802)"
               >
                  <tspan
                     id="tspan3280"
                     style={{ WebkitTextAlign: "center", textAlign: "center" }}
                     x="637.208"
                     y="147.041"
                     strokeWidth="0.462"
                     textAnchor="middle"
                  >
                     Cavite Province Level {totalLevel}
                  </tspan>
               </text>
            </g>
         </svg>
      </>
   );
};

export default CaviteProvinceMapJSX;
