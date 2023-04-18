import React, { useState } from "react";

const MapTooltip = ({ visible, position, content }) => {
   if (!visible) return null;

   const tooltipStyle = {
      top: position.y,
      left: position.x,
   };

   return <span style={tooltipStyle} className="map-tooltip">{content}</span>;
};

const RizalProvinceMapJSX = ({
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


            <g transform="translate(-150,100)">
               <g
                  className="province-layer"
                  id="Antipolo">
                  <path
                     d="m 227.9623,576.01905 1.25705,-2.69986 8.43959,-3.20705 10.46508,0.84396 8.77717,2.36309 V 554.5833 l 8.59788,-1.06243 2.62578,3.93867 20.97444,-11.71234 3.71342,-5.73892 11.14025,-9.11476 25.99393,1.01275 5.40133,-5.40133 -5.73892,-15.19126 7.08926,-5.06375 18.90467,9.11475 -0.67517,-56.37643 53.33819,-38.8221 10.80267,20.93018 3.03825,11.14025 13.16575,8.102 20.59259,-3.71341 5.73892,-7.76443 3.03825,-19.91742 7.42684,-8.43959 19.57984,8.43959 15.52884,-39.83485 h 12.82817 l 18.90468,-3.37583 2.02549,22.95568 31.83464,51.081 5.89521,60.05833 -33.67884,19.84305 -99.05178,74.85459 -16.14607,6.42913 -14.4342,13.23964 -45.23619,11.47784 -27.00667,25.65635 -31.73285,8.43958 -5.40133,-13.16576 -8.77717,-12.82817 3.37583,-14.85367 -24.306,-8.102 -12.82817,-6.75167 v 0 l -3.16628,-6.23097 v 0 l -1.10335,-7.86039 v 0 l 0.95483,-8.59347 -13.84504,-2.38708 -11.45796,5.25157 -6.65968,-7.8615 1.68792,-7.59563 3.71341,-10.97146 z"
                     id="Antipolo"
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
                  id="Rodriguez">
                  <path
                     d="m 245.08957,467.4668 31.62875,12.41279 13.24827,-5.01286 12.53215,7.63864 10.86119,3.93867 21.84174,14.08375 1.49689,5.72214 18.90467,9.11475 -0.67517,-56.37643 53.33819,-38.8221 10.80267,20.93018 3.03825,11.14025 13.16575,8.102 20.59259,-3.71341 5.73892,-7.76443 3.03825,-19.91742 7.42684,-8.43959 19.57984,8.43959 15.52884,-39.83485 h 12.82817 l 18.90468,-3.37583 -10.95303,-20.91009 -5.25157,-36.99967 -1.19354,-67.55424 3.10321,-23.63205 -68.27036,40.34158 -13.84504,22.1998 -36.28355,16.23212 -54.66403,7.16122 -43.68348,18.14177 -24.34817,2.86449 -3.34191,7.87735 h -12.6515 l -16.47082,20.52885 -13.42375,15.56319 13.36762,3.3419 12.41279,-4.17738 -2.26772,8.23541 -9.19024,8.23541 -2.62578,10.8612 -6.56446,12.41279 0.35806,10.86119 5.25157,3.58062 -3.58061,11.3386 2.38707,6.08704 z"
                     id="Rodriguez"
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
                  id="Angono">
                  <path
                     d="m 268.96033,707.96465 5.96768,7.51929 2.14837,13.84504 14.56116,-9.5483 7.17613,-11.76574 46.29436,-3.03413 -2.38707,-17.66436 -5.96769,-14.56116 -25.37348,7.01254 -22.48738,11.96471 z"
                     id="Angono"
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
                  id="Binangonan">
                  <path
                     d="m 345.10847,704.98058 -46.29528,3.03397 -7.17604,11.7656 -14.56118,9.54941 11.21955,-0.47814 13.84464,10.50301 1.90988,14.32277 11.45795,2.86482 14.32277,25.77939 -5.25151,13.36783 15.27772,8.59446 11.03442,24.73921 8.06172,5.33675 -5.72965,8.11632 15.75585,25.78072 2.38668,-12.88969 -17.66439,-64.68954 -1.43174,-31.74877 z m 31.74743,173.77913 -4.53497,8.35473 1.43175,21.24575 -5.96804,35.56718 0.47813,19.33452 11.93475,19.0975 1.90989,14.79955 3.34163,9.78646 10.0262,21.4842 0.71653,-16.7095 8.83154,-14.56116 -5.96672,-11.93608 -8.11632,-0.47679 -4.05816,-7.8779 z m 26.73566,128.66389 -0.71654,7.1613 6.92299,-0.9549 z"
                     id="Binangonan"
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
                  id="Cardona">
                  <path
                     d="m 371.97598,744.92158 -20.97272,4.34585 1.2666,9.66127 1.43174,31.74877 17.66439,64.68954 2.63575,-14.06572 v -25.99383 l -3.71322,-27.00602 5.06371,-7.93386 9.11389,4.72675 5.23286,2.02442 3.20711,-7.42642 -2.02575,-14.17893 5.90811,-15.8664 z m 7.93387,108.02677 -3.05395,25.81136 10.02621,98.10846 4.05816,7.8779 8.11632,0.47679 1.10811,-11.41933 8.77693,-4.72673 14.51589,3.03798 7.08946,-7.76477 -8.43996,-4.72536 -1.35051,-8.43999 -19.5796,-0.67522 -6.75117,-23.63111 -3.37625,-33.75723 -5.40068,-15.19113 z"
                     id="Cardona"
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
                  id="Teresa">
                  <path
                     d="m 345.10803,704.98081 -2.38707,-17.66436 -5.96769,-14.56116 6.35937,-1.42704 27.00667,-25.65635 45.23619,-11.47784 14.85367,16.20401 -26.85649,13.28633 -25.78042,29.59974 z"
                     id="Teresa"
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
                  id="Morong">
                  <path
                     d="m 396.78845,749.647 -24.81247,-4.72542 -20.97272,4.34585 -5.89479,-44.28685 32.46379,-11.69644 25.78042,-29.59974 26.85649,-13.28633 4.89161,3.73803 -4.77415,26.01912 -15.27728,34.6126 0.95483,16.94824 4.05803,13.60633 -3.58062,9.5483 -9.30959,-3.81933 -6.2064,-5.72897 z"
                     id="Morong"
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
                  id="Baras">
                  <path
                     d="m 420.06221,745.32239 -4.05803,-13.60633 -0.95483,-16.94824 15.27728,-34.6126 4.77415,-26.01912 15.51599,-1.43224 10.74184,25.78041 3.34191,42.48995 -14.32246,22.43851 -7.87734,8.59346 3.1032,-15.51599 -6.2064,-6.4451 -8.35476,6.2064 -0.95484,10.50313 z"
                     id="Baras"
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
                  id="Tanay">
                  <path
                     d="m 415.3555,634.19406 14.85367,16.20401 4.89161,3.73803 15.51599,-1.43224 10.74184,25.78041 3.34191,42.48995 -14.32246,22.43851 -7.87734,8.59346 10.32655,23.29776 11.47783,-4.72617 21.26776,-23.63084 45.23618,-22.28051 46.9241,-2.0255 19.24226,-21.94293 75.61869,-33.75834 -58.40193,-83.7207 -35.52577,-63.39131 -33.67884,19.84305 -99.05178,74.85459 -16.14607,6.42913 z"
                     id="Tanay"
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
                  id="Pililla">
                  <path
                     d="m 464.3051,770.57778 21.26776,-23.63084 45.23618,-22.28051 46.9241,-2.0255 -23.03988,54.42956 4.29674,45.35443 3.34191,62.06397 -7.63865,34.37389 -48.21892,-3.34191 7.63864,-17.18694 1.43225,-16.23212 8.11606,-28.64491 -12.89021,-21.48368 -3.81933,-22.91592 -11.45796,-15.27728 -17.18694,-2.38708 1.90966,-12.8902 z"
                     id="Pililla"
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
                  id="Jalajala">
                  <path
                     d="m 506.47434,915.52087 48.21892,3.34191 3.62883,15.44298 24.13722,21.9429 -8.60838,6.4141 -8.94596,-3.54464 -23.96843,13.33455 -14.85366,19.57988 -10.2963,3.20702 -12.15301,22.28053 -15.36004,10.4651 -12.99697,-12.8282 5.57013,-25.15 v -14.34731 l 17.21676,-18.56703 0.84396,-23.96845 z"
                     id="Jalajala"
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
                  id="Cainta">
                  <path
                     d="m 227.9623,576.01905 5.6045,1.79858 -3.71341,10.97146 -1.68792,7.59563 6.65968,7.8615 11.45796,-5.25157 13.84504,2.38708 -0.95483,8.59347 1.10335,7.86039 3.16628,6.23097 12.82817,6.75167 5.93747,2.0729 -18.85789,5.96769 -11.0999,13.36762 -11.93538,21.9611 -8.53025,14.72769 -13.36762,-8.71282 -3.3419,-15.03857 13.24826,1.90966 -6.92251,-14.68052 9.5483,-6.08704 -0.47742,-6.32575 3.46126,-8.11606 -5.60963,-13.96439 -6.08704,-18.97725 3.26906,-5.68588 -1.68791,-7.76442 z"
                     id="Cainta"
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
                  id="Taytay">
                  <path
                     d="m 230.9497,717.56014 -2.14837,-7.39993 -3.81932,-4.29674 6.80316,-16.94824 20.46563,-36.68879 11.0999,-13.36762 18.85789,-5.96769 18.36853,6.0291 -3.37583,14.85367 8.77717,12.82817 5.40133,13.16576 -22.48738,11.96471 -19.93208,16.23211 -7.99671,-5.96769 -4.53544,10.02572 -7.16123,-9.07088 -9.19024,4.53544 z"
                     id="Taytay"
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
                  id="San Mateo">
                  <path
                     d="m 336.69856,506.24993 -7.08926,5.06375 5.73892,15.19126 -5.40133,5.40133 -25.99393,-1.01275 -11.14025,9.11476 -3.71342,5.73892 -20.97444,11.71234 -2.62578,-3.93867 -8.59788,1.06243 5.40134,-5.23254 -3.37583,-11.47784 v -5.06375 l -6.58288,-3.88221 -4.89496,3.88221 -2.70067,-5.23255 -3.71342,-3.20704 -5.57012,1.51913 -3.37584,-2.36309 -7.02869,-2.20365 9.47019,-10.95998 5.01286,-16.47082 5.5464,-26.42437 31.62875,12.41279 13.24827,-5.01286 12.53215,7.63864 10.86119,3.93867 7.28058,4.53544 14.56116,9.54831 z"
                     id="San Mateo"
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
               transform="matrix(1.63481 0 0 1.6089 -381.296 -140.998)"
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
                     Rizal Province Level {totalLevel}
                  </tspan>
               </text>
            </g>
         </svg>
      </>
   );
};

export default RizalProvinceMapJSX;
