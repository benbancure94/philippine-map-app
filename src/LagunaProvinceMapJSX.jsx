import React, { useState } from "react";

const MapTooltip = ({ visible, position, content }) => {
   if (!visible) return null;

   const tooltipStyle = {
      top: position.y,
      left: position.x,
   };

   return <span style={tooltipStyle} className="map-tooltip">{content}</span>;
};

const LagunaProvinceMapJSX = ({
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


            <g transform="translate(0,-120)">
               <g
                  className="province-layer"
                  id="San Pedro">
                  <path
                     d="m 99.953616,497.466 -14.7029,5.00202 -5.305173,7.88201 -15.763935,13.49024 -4.547292,-0.90942 -1.104517,35.68193 6.517779,-5.60833 12.732413,-4.69882 8.185123,-8.79141 6.366196,-5.30523 -1.970486,4.69891 6.214635,2.12203 11.550951,-4.41395 14.3622,-7.07395 5.5734,-1.92924 5.14467,-5.78772 5.5734,-2.78666 0.42872,-4.50159 -12.43296,-3.64418 -1.07181,-9.64631 6.85956,-4.50159 -10.28934,-2.35795 -6.40513,-7.83423 -6.06305,11.51975 -5.91148,1.51582 z"
                     id="San Pedro"
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
                  id="Biñan">
                  <path
                     d="m 96.575459,541.02993 -2.425224,3.03155 2.122059,6.82094 9.397736,-4.85047 10.15561,4.54726 3.94098,3.1831 8.94301,-9.09453 10.3072,0.75786 v 4.09251 l -7.1241,0.90951 -6.06305,14.5513 -3.33468,-0.3031 -5.60833,16.06712 -4.09256,5.30512 -6.21463,-0.30321 -1.97048,7.88201 0.45472,4.09261 -7.275656,12.27761 -0.151582,14.8545 -5.15359,10.61035 2.87995,9.85249 9.852468,3.33464 8.48826,-5.60833 -1.07558,-12.32011 7.717,-10.07502 11.57552,-12.64736 13.29041,-7.07395 4.07286,-9.2175 4.50159,-1.50053 0.64308,-4.9303 4.9303,-4.71589 -2.14362,-11.14684 -1.50052,-3.42977 1.39335,-9.6462 11.68269,-7.71707 -0.53591,-5.89498 3.75133,-5.1446 -4.82314,-0.10726 -8.36008,-7.28825 -3.10824,-9.00308 3.3226,-7.93136 -12.00422,-0.21441 -7.82419,1.50053 -0.42872,4.50159 -5.5734,2.78666 -5.14467,5.78772 -5.5734,1.92924 -14.3622,7.07395 z"
                     id="Biñan"
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
                  id="Santa Rosa">
                  <path
                     d="m 172.00607,537.58065 -3.75133,5.1446 0.53591,5.89498 -11.68269,7.71707 -1.39335,9.6462 1.50052,3.42977 2.14362,11.14684 -4.9303,4.71589 -0.64308,4.9303 -4.50159,1.50053 -4.07286,9.2175 -13.29041,7.07395 -19.29252,22.72238 1.07558,12.32011 -4.39571,13.49023 -4.85045,6.06309 5.15361,14.70295 21.67541,-13.18713 15.76393,-3.63785 -2.72837,-21.827 10.9135,-7.2757 12.73241,-5.45667 13.03556,-10.61045 1.2126,-7.8819 10.61035,-6.66929 3.94098,-12.12617 3.94099,-7.5788 -6.06306,-10.91355 -0.90946,-12.73237 -3.94097,-0.60631 -9.39774,-12.73237 z"
                     id="Santa Rosa"
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
                  id="Cabuyao">
                  <path
                     d="m 200.70838,581.04608 -3.94099,7.5788 -3.94098,12.12617 -10.61035,6.66929 -1.2126,7.8819 -13.03556,10.61045 -12.73241,5.45667 -10.9135,7.2757 2.72837,21.827 -15.76393,3.63785 -21.67541,13.18713 -13.490298,6.06308 -0.454726,5.60823 -6.517779,1.51582 0.606298,4.54726 12.732405,-1.36416 17.00064,-8.49897 9.00317,-9.00309 8.57445,-0.85753 20.14995,-10.71801 9.00319,-1.71484 17.57762,-10.28942 8.14573,3.00106 h 9.00317 l 4.28722,6.43084 -0.85744,5.14471 46.73074,-15.86274 -6.43082,-17.14885 -3.85852,-14.1479 -9.00317,-10.28931 -6.85955,-3.00107 -8.14573,-8.57448 -8.57445,-9.4319 z"
                     id="Cabuyao"
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
                  id="Calamba">
                  <path
                     d="m 251.10536,651.29928 -46.73074,15.86274 0.85744,-5.14471 -4.28722,-6.43084 h -9.00317 l -8.14573,-3.00106 -17.57762,10.28942 -9.00319,1.71484 -20.14995,10.71801 -8.57445,0.85753 -9.00317,9.00309 -17.00064,8.49897 -0.15156,13.18712 -1.21262,9.70094 0.45473,14.09653 -4.698868,10.76201 11.676528,21.99637 7.93136,-10.93243 16.72019,-3.00106 7.28829,5.14461 25.72335,10.71812 8.14573,4.28719 9.8606,-9.4319 15.86275,-0.42871 4.28722,2.57236 21.86484,-0.42871 22.7223,6.00212 18.00634,-25.72333 10.28934,-12.43297 4.28723,-13.29047 -9.86062,-1.28613 -6.00212,-4.7159 -6.85956,1.28613 v -5.14461 l 5.54205,-8.29837 -4.25587,-12.28036 5.14467,-7.71707 1.28616,-11.57544 -2.14361,-11.57554 z"
                     id="Calamba" 
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
                  id="Los Baños">
                  <path
                     d="m 281.54467,716.46506 -4.28723,13.29047 -10.28934,12.43297 -18.00634,25.72333 19.34964,2.90773 10.30719,15.15772 7.88197,14.55129 29.70896,-32.74054 h 12.1261 l 21.22069,-13.33869 4.24412,-15.1576 -2.58835,-8.25008 3.00105,-7.28825 -3.42978,-6.21653 -3.8585,-9.4319 -7.717,-0.85742 -12.00422,-6.21643 -5.35905,-2.57235 -5.14466,11.14673 -4.50159,1.07182 -3.64413,6.00213 -10.71807,4.71589 -3.8585,-1.07182 -5.78776,-8.14567 z"
                     id="Los Baños"
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
                  id="Bay">
                  <path
                     d="m 346.92485,708.10498 3.8585,9.4319 3.42978,6.21653 -3.00105,7.28825 2.58835,8.25008 -4.24412,15.1576 -21.22069,13.33869 h -12.1261 l -29.70896,32.74054 4.47601,27.83314 8.57445,2.57225 6.85956,-8.57438 7.28829,-18.8638 18.86378,-12.86167 12.43295,2.14355 4.28723,-3.42978 3.42978,-9.00308 21.00741,-16.72025 3.42977,-4.28719 8.57445,-7.28825 5.5734,-9.0032 1.28617,-5.1447 -4.39441,-6.21643 4.71594,-2.89391 2.35798,-8.57449 -7.93137,-21.54319 -8.14572,4.18003 -7.18111,-1.50053 -8.2529,2.78666 -7.07392,-1.60768 -1.07182,3.85847 z"
                     id="Bay"
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
                  id="Calauan">
                  <path
                     d="m 387.33195,698.67319 7.93137,21.54319 -2.35798,8.57449 -4.71594,2.89391 4.39441,6.21643 -1.28617,5.1447 -5.5734,9.0032 -8.57445,7.28825 -3.42977,4.28719 -21.00741,16.72025 -3.42978,9.00308 -4.28723,3.42978 -12.43295,-2.14355 -18.86378,12.86167 -7.28829,18.8638 -6.85956,8.57438 11.14678,7.71706 5.14468,6.85954 6.43083,-0.4287 6.85956,0.85751 5.57339,-6.85964 5.57339,3.00107 7.71702,-4.7159 5.14467,-9.00319 -3.42979,-5.57343 -3.8585,-5.1446 6.85956,-3.42977 9.86061,3.00096 4.71596,6.00213 3.00105,-8.14568 11.40024,-14.54275 11.21666,-6.66939 15.46078,9.39773 9.39773,-7.2756 -1.81892,-12.42926 14.24818,-0.90942 10.91347,-22.73652 7.88201,-2.42523 17.58282,-2.42523 -13.64187,-20.61438 -17.27969,-25.16164 -9.39773,4.54726 -8.18512,2.12213 -4.85044,-3.94105 -2.72838,-9.39774 -4.24413,-0.30309 h -8.48828 l -4.85043,-6.6694 z"
                     id="Calauan" 
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
                  id="Alaminos">
                  <path
                     d="m 290.97657,828.36171 8.57445,2.57225 11.14678,7.71706 5.14468,6.85954 6.43083,-0.4287 6.85956,0.85751 5.57339,-6.85964 5.57339,3.00107 7.71702,-4.7159 5.14467,-9.00319 -3.42979,-5.57343 -3.8585,-5.1446 6.85956,-3.42977 9.86061,3.00096 4.71596,6.00213 -4.24259,8.8394 1.36419,12.88402 3.1831,3.94096 12.73242,-2.72834 0.75788,10.7619 -0.75788,18.0376 -13.79345,-4.24416 -4.5473,2.87999 5.1536,1.81882 3.18311,6.82094 0.75787,4.54737 -6.06304,7.88191 -3.03154,2.72843 2.12208,8.18512 -6.51778,5.15356 -2.42522,3.7894 h -2.72837 l -3.18311,8.48832 -8.48828,2.27358 -4.39571,10.4588 -10.61034,5.15356 -13.49029,-15.61236 -13.64187,-28.64783 -2.12205,-6.6694 -1.81893,-8.79141 -0.30315,-26.98068 -3.63783,-11.82286 z"
                     id="Alaminos" 
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
                  id="San Pablo">
                  <path
                     d="m 325.75882,940.88818 10.61034,-5.15356 4.39571,-10.4588 8.48828,-2.27358 3.18311,-8.48832 h 2.72837 l 2.42522,-3.7894 6.51778,-5.15356 -2.12208,-8.18512 3.03154,-2.72843 6.06304,-7.88191 -0.75787,-4.54737 -3.18311,-6.82094 -5.1536,-1.81882 4.5473,-2.87999 13.79345,4.24416 0.75788,-18.0376 -0.75788,-10.7619 -12.73242,2.72834 -3.1831,-3.94096 -1.36419,-12.88402 4.24259,-8.8394 3.00105,-8.14568 11.40024,-14.54275 11.21666,-6.66939 15.46078,9.39773 9.39773,-7.2756 -1.81892,-12.42926 14.24818,-0.90942 10.91347,-22.73652 3.18311,-1.21261 -0.75785,6.36619 5.6083,1.81893 3.48628,6.82093 4.85045,0.45476 3.94097,7.2756 14.24816,11.97452 6.51778,5.15366 3.7894,19.09856 3.78942,2.27369 2.12206,-3.63785 3.18313,4.24415 14.09659,27.58688 30.92156,5.75988 -5.00206,13.18713 -3.63779,7.12414 -13.4903,9.09453 -6.97251,3.7894 -7.73038,-0.90941 -36.68149,18.18915 -16.37023,8.48821 -10.45876,12.73248 -13.03557,21.37224 -16.21867,1.81893 -17.88599,14.55129 -8.94301,-1.97047 -14.24818,3.7894 -6.97251,7.2757 -7.12408,-2.42523 -5.45674,0.6063 -3.78941,-5.75998 2.57679,-24.25212 -12.1261,0.30309 z"
                     id="San Pablo"
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
                  id="Rizal">
                  <path
                     d="m 540.08773,853.8834 -30.92156,-5.75988 -14.09659,-27.58688 -3.18313,-4.24415 -2.12206,3.63785 -3.78942,-2.27369 -3.7894,-19.09856 -13.18712,-10.45878 9.39772,-4.24417 5.00199,-6.66928 6.36623,-1.81893 7.27564,5.00192 6.21466,1.66737 6.2146,7.5788 5.15362,3.4863 3.78941,8.48832 6.66934,5.00201 3.33468,2.57668 4.54732,14.70296 11.36823,20.61438 6.8209,10.45879 z"
                     id="Rizal"
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
                  id="Nagcarlan">
                  <path
                     d="m 435.65164,709.27963 14.59535,5.04188 9.64627,-2.78676 11.78984,-8.78878 12.00422,-7.50266 12.64733,-6.85955 -3.64416,-6.64524 17.14891,-9.8606 1.71492,4.07288 -2.14364,9.4319 5.06067,7.52671 3.03149,2.27357 -7.73038,9.39784 -2.27363,8.94296 -5.15362,2.72834 2.87993,5.91143 16.37029,0.3032 0.60631,5.45678 2.42518,6.21464 -1.2126,8.48821 1.51578,6.66939 4.41622,5.32559 12.86165,24.86602 4.28719,13.07597 11.14681,14.57661 9.64627,10.93243 20.57867,18.86369 10.93242,10.50382 -2.35797,4.28719 -30.65365,-1.28612 -14.63492,4.50349 -6.8209,-10.45879 -11.36823,-20.61438 -4.54732,-14.70296 -10.00402,-7.57869 -3.78941,-8.48832 -5.15362,-3.4863 -6.2146,-7.5788 -6.21466,-1.66737 -7.27564,-5.00192 -6.36623,1.81893 -5.00199,6.66928 -9.39772,4.24417 -7.57882,-6.6694 -3.94097,-7.2756 -4.85045,-0.45476 -3.48628,-6.82093 -5.6083,-1.81893 0.75785,-6.36619 4.6989,-1.21262 17.58282,-2.42523 z"
                     id="Nagcarlan"
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
                  id="Victoria">
                  <path
                     d="m 392.90713,695.63774 4.85043,6.6694 h 8.48828 l 4.24413,0.30309 2.72838,9.39774 4.85044,3.94105 8.18512,-2.12213 9.39773,-4.54726 14.59535,5.04188 9.64627,-2.78676 11.78984,-8.78878 2.35801,-7.07385 -4.07286,-6.85964 -13.50476,-4.93031 -5.78778,-2.14365 0.85743,-6.10928 -5.78773,-3.10821 -5.14468,-8.46722 -1.82207,-9.86061 -4.50158,-4.93041 -9.53909,3.96574 -9.64625,6.9668 -2.89388,8.36007 -4.28722,2.35795 -6.53803,16.07704 z"
                     id="Victoria"
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
                  id="Pila">
                  <path
                     d="m 434.27708,649.26279 4.50158,4.93041 1.82207,9.86061 5.14468,8.46722 5.78773,3.10821 -0.85743,6.10928 19.29254,7.07396 4.07286,6.85964 -2.35801,7.07385 11.57551,-7.50266 13.07604,-6.85955 -3.64416,-6.64524 17.14891,-9.8606 -0.85743,-6.85955 -10.71808,-2.35794 -7.93136,-8.78878 -7.47465,-15.15371 -9.45987,-8.21169 -4.71597,-14.57661 -13.29036,5.14471 -9.21756,9.2175 -5.78773,14.7909 z"
                     id="Pila"
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
                  id="Liliw">
                  <path
                     d="m 509.77246,704.58082 -2.27363,8.94296 -5.15362,2.72834 2.87993,5.91143 16.37029,0.3032 0.60631,5.45678 2.42518,6.21464 -1.2126,8.48821 1.51578,6.66939 4.41622,5.32559 12.86165,24.86602 4.28719,13.07597 11.14681,14.57661 9.64627,10.93243 31.51109,29.36751 12.07451,-5.07626 -2.27363,-8.33676 -3.7894,-6.36608 -0.45475,-9.09463 -3.94096,-4.85046 -5.91148,-1.66738 -7.12409,-9.24607 -5.91148,-9.24618 -6.36622,-5.30523 -6.06304,-17.73438 -8.79141,-15.61237 -2.42525,-10.00403 -8.63986,-13.79344 -12.88394,-10.7619 -8.33674,-5.45677 -0.90941,-6.82095 -6.21467,-4.85047 z"
                     id="Liliw" 
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
                  id="Santa Cruz">
                  <path
                     d="m 468.68204,615.92964 4.71597,14.57661 9.45987,8.21169 7.47465,15.15371 7.93136,8.78878 10.71808,2.35794 4.5799,2.27464 4.39571,-2.87999 7.57882,-8.33667 0.15155,-6.36618 4.85045,-9.85249 9.0946,-10.15559 4.39571,-25.16163 -2.27364,-13.49035 -13.03556,-2.42523 -7.12408,-0.15155 -0.30318,-5.45677 1.51578,-4.24416 -7.73037,-1.97048 -8.4883,-0.15155 -2.12208,13.03558 -1.97051,6.06298 -6.36616,5.15368 -7.73044,2.72832 -5.15356,3.94096 -0.45475,2.72844 -7.12407,2.72833 -3.63785,-1.81892 z"
                     id="Santa Cruz" 
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
                  id="Magdalena">
                  <path
                    d="m 517.95758,664.41302 -4.39571,2.87999 -4.5799,-2.27464 0.85743,6.85955 1.71492,4.07288 -2.14364,9.4319 5.06067,7.52671 3.03149,2.27357 -7.73038,9.39784 11.06505,-1.36428 6.21467,4.85047 0.90941,6.82095 8.33674,5.45677 12.88394,10.7619 2.87999,5.15356 5.45675,-7.8819 0.75786,-17.12818 15.15763,-18.94702 0.75791,-13.49033 -0.45473,-20.15963 -20.15964,-0.90941 -19.55334,1.51573 z"
                    id="Magdalena"
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
                  id="Majayjay">
                  <path
                   d="m 573.4345,692.30309 -15.15763,18.94702 -0.75786,17.12818 -5.45675,7.8819 5.75987,8.63988 2.42525,10.00403 8.79141,15.61237 6.06304,17.73438 6.36622,5.30523 5.91148,9.24618 7.12409,9.24607 5.91148,1.66738 3.94096,4.85046 0.45475,9.09463 3.7894,6.36608 2.27363,8.33676 14.85446,-20.61438 11.21667,-22.7364 11.51978,-31.83115 -4.85044,-11.21665 -16.37024,-4.85036 -10.91349,-14.85451 -20.61436,-25.46484 -6.97253,-5.75989 z"
                   id="Majayjay"
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
                  id="Luisiana">
                  <path
                     d="m 573.4345,692.30309 22.28172,18.49226 31.52785,40.31935 16.37024,4.85036 14.34876,-14.63398 15.43399,-13.29048 11.57552,4.716 9.8606,-2.57235 24.00844,-29.15312 -33.44032,-15.43402 -27.57583,-11.71233 -31.58786,-0.29192 -27.867,3.42976 -24.1782,1.79014"
                     id="Luisiana"
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
                  id="Pagsanjan">
                  <path
                     d="m 544.02871,604.54046 -4.39571,25.16163 -9.0946,10.15559 -4.85045,9.85249 -0.15155,6.36618 -7.57882,8.33667 16.06712,-5.15357 19.55334,-1.51573 20.15964,0.90941 0.45473,20.15963 23.03958,-1.66737 -6.06305,-25.16165 0.1482,-13.24714 10.46211,-17.37127 15.46082,-15.76392 6.06304,-6.06308 -3.33468,-3.63775 -12.73243,4.54726 -13.03557,0.90952 -9.09453,3.03144 -10.30719,-7.88191 -17.88601,3.94095 z"
                     id="Pagsanjan"
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
                  id="Cavinti">
                  <path
                     d="m 623.30311,599.53833 -21.52386,21.827 -10.46211,17.37127 -0.1482,13.24714 6.06305,25.16165 29.00562,-3.55253 31.58786,0.29192 27.14711,11.28352 33.86904,15.86283 16.7202,-30.86805 15.43399,-29.58192 18.43511,-20.57863 -0.42871,-39.44242 -24.86594,14.14779 -41.15735,9.00318 -38.1563,8.14568 -18.00634,-6.85955 z"
                     id="Cavinti"
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
                  id="Lumban">
                  <path
                      d="m 763.8577,522.2541 -29.58227,8.57426 -29.15289,14.57703 -12.43263,12.86083 -23.58065,6.86028 -28.7235,-9.86113 -18.00726,-0.85753 -19.72112,6.43094 -16.72026,-3.00074 -5.83297,0.92681 -6.21455,4.69797 -0.15187,-6.66897 3.48636,-5.15358 -5.75999,-3.78897 -5.30555,-0.15197 -1.21272,-4.09272 2.7293,-2.87999 -10.00469,-7.57912 -4.69913,-1.96984 -2.12176,-5.60812 -4.69914,8.33613 -4.24347,-4.54714 -3.18378,4.24457 -10.15539,2.87999 2.1217,3.94096 8.94384,-0.60642 3.78897,5.00171 7.57919,4.84983 3.18256,5.76009 -3.78897,3.79014 -0.75824,9.70082 -1.51541,5.91081 -4.85099,3.33569 1.21272,5.91069 4.54726,0.15187 4.69914,4.39539 -3.78893,4.24468 -8.18554,-1.81912 2.27364,13.4898 12.88345,-4.09272 17.88644,-3.94084 10.30724,7.88285 9.09453,-3.03186 13.03537,-0.91015 12.73283,-4.54726 3.33448,3.63828 23.51366,5.45856 18.00603,6.8604 79.31384,-17.14971 24.8652,-14.14769 -4.71591,-16.72025 z m -226.80182,46.9688 -3.18256,1.06086 0.4545,1.971 2.1217,5.45626 -1.36348,4.09281 3.56173,0.53101 2.65281,-4.54726 -1.21278,-3.86555 z"
                     id="Lumban"
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
                  id="Kalayaan">
                  <path
                     d="m 763.85753,522.25378 -29.58186,8.57448 -29.15313,14.57661 -12.43294,12.86166 -23.57978,6.85955 -28.72437,-9.86061 -18.0064,-0.85741 -19.72118,6.43072 -16.7202,-3.00095 0.85742,-10.71813 5.5734,-6.00213 v -9.00319 l 4.71598,-5.57331 -0.85749,-5.57342 38.58508,-0.85742 57.87754,-3.85847 27.86694,-2.57236 41.58606,-4.716 z"
                     id="Kalayaan"
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
                  id="Pakil">
                  <path
                     d="m 675.14198,434.62322 -29.70902,13.94552 -21.52355,11.51886 -28.80005,11.21739 -17.58264,7.27539 6.6702,9.09452 3.63705,9.39825 14.24815,-6.36639 21.22093,-8.18554 22.43364,-15.15707 27.88996,-16.67365 15.15707,-0.30263 z m -193.10761,29.70907 -9.12563,1.38019 -6.85911,30.86795 3.25794,13.86779 21.67542,19.7056 3.17661,-6.10084 9.0957,-7.27539 4.24347,-12.42906 6.36635,-11.82264 -16.97622,-6.36639 -6.36641,-8.18543 v -9.3972 z"
                      id="Pakil"
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
                  id="Paete">
                  <path
                     d="m 703.94204,440.68699 -11.21741,4.84983 -3.94091,4.85105 -15.15707,0.30263 -26.67718,16.06723 -23.64642,15.76349 -23.94905,9.39836 -11.52003,5.15357 4.54727,10.30724 3.84519,13.58684 41.15852,-1.28571 57.46261,-3.51034 67.29504,-7.20715 -1.20801,-19.46999 -0.91014,-20.61449 -34.2563,-4.24353 -4.84984,-17.28 -12.12638,1.21272 z"
                     id="Paete"
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
                  id="Pangil">
                  <path
                     d="m 658.46834,404.76226 -21.37164,9.09569 -23.04005,10.60988 -27.73803,15.30901 -16.21917,12.2783 -8.18437,11.8226 3.63711,3.03196 -2.12177,5.91069 7.57919,0.30374 6.51711,5.45625 16.21915,-6.66898 30.16354,-11.8238 21.67541,-11.51886 29.55716,-13.94552 -8.94259,-15.30902 z m -167.94585,63.81461 v 9.3972 l 6.36641,8.18543 16.97622,6.36639 3.63828,-7.88285 -3.63828,-7.27539 v -3.33454 z"
                     id="Pangil"
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
                  id="Mabitac">
                  <path
                     d="m 513.86499,474.03322 -23.34274,-5.45678 -8.48823,-4.24415 -9.12504,1.38041 -3.15512,-54.0693 -2.57235,-31.93986 60.2355,14.79096 31.93987,9.21749 -5.14468,13.29043 -8.57446,6.0021 0.42872,12.86167 2.78673,16.07714 -2.78673,5.35902 -3.85849,-4.71598 -1.92924,3.42977 1.07181,5.14465 -5.78778,3.42977 1.07181,7.50266 3.85849,5.35912 -2.14357,1.07182 -5.5734,-6.85964 1.71486,-8.14578 -5.5734,-0.85742 -4.7159,-3.42976 -7.28832,6.85954 z"
                     id="Mabitac" 
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
                  id="Santa Maria">
                  <path
                     d="m 467.18151,379.70354 63.66007,15.51 13.18713,4.24413 3.7894,-8.63984 9.09459,-8.79143 10.45876,-30.01215 12.2777,-24.85852 7.57882,-14.39971 14.55127,-4.85045 2.2737,-5.6083 -14.24821,-14.39978 -13.18714,-13.03556 -4.69232,-4.51016 -67.90619,30.31527 -17.2797,19.70491 -20.68995,48.87817 z"
                     id="Santa Maria" 
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
                  id="Famy">
                  <path
                     d="m 604.05295,302.29727 -2.2737,5.6083 -14.55127,4.85045 -19.85652,39.25823 -10.45876,30.01215 -9.09459,8.79143 -3.7894,8.63984 15.32817,4.25432 -5.14468,13.29043 -8.57446,6.0021 0.42872,12.86167 2.78673,16.07714 -2.78673,5.35902 5.14468,10.93239 2.14363,-7.28824 v -8.14574 l -0.6431,-7.93135 4.28725,-6.4309 -1.50058,-9.64619 7.93141,-5.7878 5.78772,-15.43399 1.71492,-11.36118 9.64627,-8.78878 28.72436,-8.14575 16.72019,-13.93346 9.00317,-4.71597 8.36012,-3.42977 -14.57656,-13.50475 -3.64416,-14.36224 -11.5755,-15.43399 -9.53733,-11.59737"
                     id="Famy" 
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
                  id="Siniloan">
                  <path
                     d="m 553.35477,460.9465 -0.6431,-16.07709 4.28725,-6.4309 -1.50058,-9.64619 7.93141,-5.7878 5.78772,-15.43399 1.71492,-11.36118 9.64627,-8.78878 28.72436,-8.14575 16.72019,-13.93346 17.36329,-8.14574 7.28825,21.86488 7.79407,25.7023 -44.41187,19.70497 -27.73845,15.30918 -16.21867,12.27772 -8.18511,11.82286 -2.98662,2.42797 -2.35795,-7.50265 z"
                     id="Siniloan"
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
               transform="matrix(1.63481 -0 0 1.6089 -810.296 -140.998)"
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
                     Laguna Province Level {totalLevel}
                  </tspan>
               </text>
            </g>
         </svg>
      </>
   );
};

export default LagunaProvinceMapJSX;
