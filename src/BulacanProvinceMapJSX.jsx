import React, { useState } from "react";

const MapTooltip = ({ visible, position, content }) => {
   if (!visible) return null;

   const tooltipStyle = {
      top: position.y,
      left: position.x,
   };

   return <span style={tooltipStyle} className="map-tooltip">{content}</span>;
};

const BulacanProvinceMapJSX = ({
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
                  id="San Jose Del Monte">
                  <path
                     d="m 450.08109,824.36887 7.99135,-2.93016 6.39308,3.7293 4.52844,-4.26205 7.19221,5.32756 7.72497,4.52843 3.99567,-0.53275 5.32757,2.66378 4.52843,-3.46292 3.46292,5.32757 6.39308,-2.66379 1.33189,5.06119 4.26206,2.13103 3.46291,-2.3974 1.21,2.17134 2.2603,-2.44865 10.26551,-1.97776 0.75343,-4.42641 4.80313,-1.7894 23.58903,-28.47929 h 9.98297 l 2.637,-6.21581 19.21251,-2.26029 -5.88028,-13.13506 -13.09088,-15.35117 -6.21581,6.78088 -8.09939,-3.01372 -6.59253,-7.91104 -12.43162,2.44866 -17.894,-5.8391 -12.80834,1.31851 -10.7364,-6.21581 -4.89731,-12.24327 -18.83579,-0.18835 -7.72268,10.92475 -15.44534,3.39044 -0.37672,12.05491 -3.76716,19.58923 -8.66446,9.22953 -4.14388,6.21581 1.31851,4.70896 6.78089,2.07193 0.94178,10.35969 z"
                     id="San Jose Del Monte"
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
                  id="Marilao">
                  <path
                     d="m 450.08109,824.36887 -7.25295,-7.7107 -0.94178,-10.35969 -6.78089,-2.07193 -8.10431,0.0848 -9.98919,11.85384 -13.58529,-1.86465 -12.78616,1.06551 -14.25124,12.12021 -14.11805,4.928 -6.39308,5.06119 -5.59395,-2.93016 -7.45859,7.99135 11.18789,2.13102 1.46508,7.59178 -5.06119,4.26206 5.72714,7.99135 8.5907,4.12886 8.25772,-9.92259 10.05579,-1.93124 4.7948,-6.52627 10.85492,-6.06011 4.00945,-7.20069 5.27402,-2.26029 -1.50686,-4.33223 6.21581,-1.69523 9.98297,-5.83909 12.80834,3.76716 0.94178,3.5788 -4.52058,4.52059 3.5788,0.37671 10.83057,0.0942 0.30542,-3.65033 z"
                     id="Marilao"
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
                  id="Meycauayan">
                  <path
                     d="m 342.82561,842.53665 11.18789,2.13102 1.46508,7.59178 -5.06119,4.26206 5.72714,7.99135 8.5907,4.12886 8.25772,-9.92259 10.05579,-1.93124 4.7948,-6.52627 10.85492,-6.06011 4.00945,-7.20069 5.27402,-2.26029 -1.50686,-4.33223 6.21581,-1.69523 9.98297,-5.83909 12.80834,3.76716 0.94178,3.5788 -4.52058,4.52059 3.5788,0.37671 10.83057,0.0942 -1.29286,9.13583 -24.24042,9.58962 -5.17215,2.64042 -1.69523,6.30999 -8.94699,2.82537 -6.30999,17.61147 -16.38714,5.55655 -10.35969,-14.78609 -5.93327,-0.0942 -1.7894,-3.01373 -5.3682,-0.28254 -1.50687,3.67298 -8.57028,-2.54283 -8.71163,-3.72531 -0.26638,-5.86033 -6.74678,-2.07979 -2.44866,-12.80834 6.02746,-6.96924 z"
                     id="Meycauayan"
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
                  id="Obando">
                  <path
                     d="m 333.01548,860.16885 6.74678,2.07979 0.26638,5.86033 8.71163,3.72531 0.37671,5.65074 8.57029,15.35117 13.75012,18.74161 -5.08566,9.13536 -17.51728,-16.48132 -6.90296,-9.27271 -6.52627,0.39956 v 6.39308 l -7.05902,6.52627 -6.56448,-9.66876 3.32973,-15.44994 -1.86465,-21.84302 0.79914,-5.99351 z"
                     id="Obando"
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
                  id="Bocaue">
                  <path
                     d="m 336.59428,840.39127 6.23133,2.14538 7.45859,-7.99135 5.59395,2.93016 6.39308,-5.06119 14.11805,-4.928 5.99351,-5.19438 -10.78832,-12.65296 -4.66162,-8.52411 -2.5306,-9.05687 5.72714,-11.58745 3.72929,-8.92368 v -9.45643 l -8.39091,-0.26638 -7.99135,8.92368 -7.32541,5.19437 -5.86032,9.05687 -5.19438,11.98703 -6.25989,13.4521 3.86249,8.79048 -9.19006,3.99568 3.06336,9.32324 5.06119,4.39524 z"
                     id="Bocaue"
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
                     d="m 373.85868,762.09039 v 9.45643 l -9.45643,20.51113 2.5306,9.05687 4.66162,8.52411 10.78832,12.65296 8.25773,-6.92583 12.78616,-1.06551 13.58529,1.86465 9.98919,-11.85384 8.10431,-0.0848 -1.31851,-4.70896 4.14388,-6.21581 8.66446,-9.22953 3.76716,-19.58923 0.37672,-12.05491 -3.95552,-15.82206 1.50687,-19.96594 -5.27403,-6.40417 1.50687,-4.8973 -19.21251,-0.18836 -7.72268,7.72267 -17.32893,31.64413 -26.93518,8.85282 z"
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
                  id="Norzagaray">
                  <path
                     d="m 444.52337,705.33864 -1.50687,4.8973 5.27403,6.40417 -1.50687,19.96594 3.95552,15.82206 15.44534,-3.39044 7.72268,-10.92475 18.83579,0.18835 4.89731,12.24327 10.7364,6.21581 12.80834,-1.31851 17.894,5.8391 12.43162,-2.44866 6.59253,7.91104 8.09939,3.01372 6.21581,-6.78088 13.09088,15.35117 5.88028,13.13506 34.4695,-14.3152 43.13396,-5.65074 28.63041,-12.80834 10.92476,-17.51728 53.87036,-31.83249 3.41586,-24.09809 -94.56431,-1.06552 -109.4815,-7.99134 -58.07047,2.66378 -16.78184,-14.91719 -20.51113,18.3801 z"
                     id="Norzagaray"
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
                  id="Bulakan">
                  <path
                     d="m 321.78172,898.60928 3.32973,-15.44994 -1.86465,-21.84302 0.79914,-5.99351 8.96954,4.84604 -2.44866,-12.80834 6.02746,-6.96924 -0.96088,-3.44857 -5.06119,-4.39524 -3.06336,-9.32324 -6.17157,-9.39142 -4.8973,-3.01373 v -10.92476 l -3.5788,-8.4761 -6.96924,-0.18836 -4.89731,-8.85283 -16.5755,6.59253 -3.76715,8.66447 -12.62398,6.83499 3.39444,5.03155 -3.39044,3.76716 -10.92476,-8.4761 -8.85283,1.50686 -1.13014,10.7364 5.08566,1.88358 -1.69522,6.59253 -1.88358,5.27402 4.33223,13.37341 5.27402,8.85283 -0.18835,6.78088 6.02745,9.79461 19.40087,14.69192 0.56507,2.44865 4.14387,3.01373 5.8391,-3.76716 1.69522,2.07193 -1.50686,5.8391 7.72267,1.50687 4.89731,4.42641 7.53431,-2.63701 z"
                     id="Bulakan"
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
                  id="Balagtas">
                  <path
                     d="m 312.86118,791.41821 3.5788,8.4761 v 10.92476 l 4.8973,3.01373 6.17157,9.39142 9.19006,-3.99568 -3.86249,-8.79048 11.45427,-25.43913 5.86032,-9.05687 -5.72713,-10.12237 -2.26421,-9.98919 2.26421,-8.79048 -4.66162,-4.928 -2.39741,-6.1267 -13.4521,3.06335 2.53059,9.32324 -4.12886,13.71848 -1.06552,6.52627 1.19871,9.856 -7.05903,2.13103 -2.64914,3.97099 z"
                     id="Balagtas"
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
                  id="Guiguinto">
                  <path
                     d="m 289.01719,786.99677 11.97744,-4.61975 4.89731,8.85283 6.96924,0.18836 -0.12168,-6.84353 2.64914,-3.97099 7.05903,-2.13103 -1.19871,-9.856 1.06552,-6.52627 4.12886,-13.71848 -2.53059,-9.32324 -9.72281,-0.66595 -10.25557,2.39741 -5.86032,-3.86249 -5.99351,0.39957 -12.91935,0.53276 -3.32973,5.32756 5.32757,8.25773 -1.33189,9.19005 3.86248,11.32108 0.93232,5.99351 z"
                     id="Guiguinto"
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
                  id="Pandi">
                  <path
                     d="m 337.36485,735.98532 2.39741,6.1267 4.66162,4.928 -2.26421,8.79048 2.26421,9.98919 5.72713,10.12237 7.32541,-5.19437 7.99135,-8.92368 8.39091,0.26638 -0.53461,-8.72049 26.93518,-8.85282 17.32893,-31.64413 2.88671,-15.11292 -1.73146,-12.38659 -18.77967,18.11372 -6.52627,-9.72281 -3.59611,-8.12454 -9.85599,-3.06335 -3.19654,11.45427 -19.44562,3.46292 -5.59394,5.99351 -13.71849,1.59827 -4.66162,5.06119 h -5.59395 l -2.53059,7.59178 4.39524,14.38443 z"
                     id="Pandi"
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
                  id="Angat">
                  <path
                     d="m 379.98539,682.57646 9.85599,3.06335 3.59611,8.12454 6.52627,9.72281 18.77967,-18.11372 1.73146,12.38659 -2.88671,15.11292 7.72268,-7.72267 19.21251,0.18836 21.90178,-23.02856 20.51113,-18.3801 2.41627,-5.68083 -7.1576,-12.61997 -4.89731,-3.95552 3.01373,-13.18506 5.83909,-17.894 -26.93518,4.70895 -12.0549,24.10982 -9.60626,2.44865 -12.0549,0.18835 -10.35969,2.2603 -3.5788,9.04118 h -4.33223 l -3.76716,-3.39044 -19.96594,0.18836 -5.27402,12.24326 -1.50687,15.63371 z"
                     id="Angat"
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
                  id="Plaridel">
                  <path
                     d="m 279.16119,737.84997 18.91286,-0.93233 5.86032,3.86249 10.25557,-2.39741 9.72281,0.66595 13.4521,-3.06335 -7.72497,-3.86249 -4.39524,-14.38443 2.53059,-7.59178 -3.42422,-6.31485 9.4179,-10.54804 -0.94179,-8.47611 -4.33223,-5.08566 -16.5755,0.18836 3.5788,12.80834 -5.27402,5.83909 -9.4179,2.44865 -2.63701,9.22954 -19.58922,5.27402 -1.31851,-4.70895 4.89731,-8.66446 -3.95552,-0.94179 -10.35968,3.01373 -12.9967,-0.56508 -8.09939,-6.78088 -8.47611,5.27402 -12.61998,-0.56507 2.63701,12.43162 9.4179,7.34596 9.4179,-0.18836 4.8973,-3.5788 11.48984,9.60625 3.76715,6.40417 z"
                     id="Plaridel"
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
                  id="Malolos">
                  <path
                     d="m 228.28847,714.0031 9.4179,7.34596 9.4179,-0.18836 4.8973,-3.5788 11.48984,9.60625 3.76715,6.40417 11.88263,4.25765 -3.32973,5.32756 5.32757,8.25773 -1.33189,9.19005 3.86248,11.32108 0.93232,5.99351 4.39525,9.05687 -4.59806,1.97278 -3.76715,8.66447 -12.62398,6.83499 3.39444,5.03155 -3.39044,3.76716 -10.92476,-8.4761 -8.85283,1.50686 -1.13014,10.7364 5.08566,1.88358 -3.5788,11.86655 4.33223,13.37341 5.27402,8.85283 -19.5657,-3.68196 -12.2534,1.59827 2.39741,-15.18356 -4.79481,-5.59394 2.66378,-12.51979 -3.7293,-7.19221 7.19222,-7.19221 1.59827,-18.91287 -5.86033,-3.19654 -2.13102,-10.12237 0.26638,-8.25773 -9.856,-2.93016 -0.96073,-5.73563 1.49349,-14.50912 -7.99135,-4.52844 2.8936,-8.85766 9.09342,-5.52677 5.32757,-1.86465 z"
                     id="Malolos"
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
                  id="Paombong">
                  <path
                     d="m 206.70629,735.05299 7.99135,4.52844 -1.49349,14.50912 0.96073,5.73563 9.856,2.93016 -0.26638,8.25773 2.13102,10.12237 5.86033,3.19654 -1.59827,18.91287 -7.19222,7.19221 3.7293,7.19221 -2.66378,12.51979 4.79481,5.59394 -2.39741,15.18356 -13.95187,-4.32048 -11.11312,2.07193 -10.92476,-4.33223 -11.30147,2.07194 3.39044,-19.96594 0.75343,-37.85994 6.59253,-43.32232 6.59253,-3.5788 1.50686,-8.66447 z"
                     id="Paombong"
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
                  id="Hagonoy">
                  <path
                     d="m 197.96285,733.02725 -1.50686,8.66447 -6.59253,3.5788 -6.59253,43.32232 -0.75343,37.85994 -3.39044,19.96594 -8.09939,-6.40417 -3.39044,-5.65074 -8.66447,1.13014 -15.44535,4.5206 -16.19878,-0.37672 -12.61998,-5.83909 -8.28775,-12.80834 -14.880275,3.39044 -5.274019,13.18506 -6.404169,0.56507 5.462378,-22.4146 10.548043,-12.99669 14.503562,-1.3185 8.47611,-10.73641 -7.53432,-8.85282 9.04117,-5.46238 v -4.70895 l 17.32893,-32.96263 8.85283,0.18836 13.93848,-8.28775 22.22624,-4.89731 13.56177,-1.13015 z"
                     id="Hagonoy"
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
                  id="Calumpit">
                  <path
                     d="m 137.68831,738.67799 8.85283,0.18836 13.93848,-8.28775 22.22624,-4.89731 13.56177,-1.13015 1.69522,8.47611 8.74344,2.02574 2.8936,-8.85766 9.09342,-5.52677 5.32757,-1.86465 4.26759,-4.80081 -2.63701,-12.43162 -3.39044,-23.92146 -0.94179,-6.78089 -3.39044,-2.26029 -23.7331,9.04118 -15.25699,-4.70895 -12.80834,0.18836 -3.20208,8.66447 0.56507,14.3152 -11.48983,10.17132 -10.54804,11.48984 -4.70896,12.43162 z"
                     id="Calumpit"
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
                  id="Pulilan">
                  <path
                     d="m 217.92879,668.60884 3.39044,2.26029 4.33223,30.70235 12.61998,0.56507 8.47611,-5.27402 8.09939,6.78088 12.9967,0.56508 10.35968,-3.01373 3.95552,0.94179 -4.89731,8.66446 1.31851,4.70895 19.58922,-5.27402 2.63701,-9.22954 9.4179,-2.44865 5.27402,-5.83909 -9.98297,-0.56508 -12.61998,-7.53432 -4.70895,-6.21581 h -10.35968 l -5.46238,-10.17133 -1.69522,-21.09608 -8.28775,-1.69522 h -8.66447 l -9.79461,3.20208 -3.95551,5.65074 -0.56508,16.19878 -12.0549,-4.33223 z"
                     id="Pulilan"
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
                  id="Bustos">
                  <path
                     d="m 311.91939,679.91032 16.5755,-0.18836 4.33223,5.08566 0.94179,8.47611 -9.4179,10.54804 3.42422,6.31485 h 5.59395 l 4.66162,-5.06119 13.71849,-1.59827 5.59394,-5.99351 19.44562,-3.46292 3.19654,-11.45427 -3.27088,-4.54972 1.50687,-15.63371 5.27402,-12.24326 -11.1018,-7.53006 -18.91286,-5.86032 -6.92583,-3.19654 -3.7293,5.59395 -9.05686,-2.93017 -7.4586,13.31892 -1.06551,6.65946 -5.32757,6.92584 -1.06551,5.86032 -5.61366,3.00812 -2.82537,4.33223 z"
                     id="Bustos"
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
                  id="Baliwag">
                  <path
                     d="m 270.66901,647.13604 1.69522,21.09608 5.46238,10.17133 h 10.35968 l 4.70895,6.21581 12.61998,7.53432 9.98297,0.56508 -3.5788,-12.80834 -1.50686,-3.5788 2.82537,-4.33223 5.61366,-3.00812 1.06551,-5.86032 5.32757,-6.92584 1.06551,-6.65946 7.4586,-13.31892 9.05686,2.93017 3.7293,-5.59395 -9.45644,-2.66378 -8.25772,-9.45643 -4.66162,-19.44562 8.65729,-8.5241 -3.46292,-2.93017 -4.79481,1.46508 -3.32973,-6.1267 -3.99567,-3.99567 -7.05903,2.53059 -10.92151,2.26422 2.93017,10.12238 4.39524,6.65945 0.53275,5.59394 -5.72713,1.99784 -0.26638,7.19222 -6.1267,7.72497 -12.91935,-0.66595 h -8.12454 l -2.3974,9.45643 -2.13103,8.39092 z"
                     id="Baliwag"
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
                  id="San Rafael">
                  <path
                     d="m 317.25329,581.88546 3.99567,3.99567 3.32973,6.1267 4.79481,-1.46508 3.46292,2.93017 -8.65729,8.5241 4.66162,19.44562 8.25772,9.45643 9.45644,2.66378 6.92583,3.19654 18.91286,5.86032 11.1018,7.53006 19.96594,-0.18836 3.76716,3.39044 h 4.33223 l 3.5788,-9.04118 10.35969,-2.2603 12.0549,-0.18835 9.60626,-2.44865 12.0549,-24.10982 26.93518,-4.70895 -2.82536,-15.63371 -12.9967,3.5788 -10.17133,-2.26029 -12.99669,7.91103 -6.59253,-11.67819 -2.63701,-9.22953 -8.09939,5.83909 -10.54804,1.31851 -3.39045,4.52058 -9.41789,0.75344 -10.35969,-10.73641 -8.66447,-14.3152 -5.46237,1.50686 -4.33224,-12.24326 -4.8973,-1.13015 -16.01042,-0.18836 -7.1576,3.76716 -12.24327,-2.82536 -3.95552,7.91103 -0.56507,8.28775 h -7.1576 l -8.66446,-7.34596 -5.27403,2.07194 z"
                     id="San Rafael"
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
                  id="Doña Remedios Trinidad">
                  <path
                     d="m 483.3251,594.96089 2.82536,15.63371 -5.83909,17.894 -3.01373,13.18506 4.89731,3.95552 7.1576,12.61997 -2.41627,5.68083 16.78184,14.91719 58.07047,-2.66378 108.94873,7.85816 95.09708,1.1987 1.72282,-68.99491 -14.31523,-79.11032 -5.27401,-70.06915 9.79461,-7.53432 -2.2603,-18.08236 -15.06863,-8.28775 -10.54805,-32.39756 -21.09608,-8.28775 -173.28929,-70.82258 h -35.41129 l 11.30148,97.19269 -27.87698,62.53483 12.54234,59.40942 z"
                     id="Doña Remedios Trinidad"
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
                  id="San Ildefonso">
                  <path
                     d="m 337.34771,559.54961 12.24327,2.82536 7.1576,-3.76716 16.01042,0.18836 4.8973,1.13015 4.33224,12.24326 5.46237,-1.50686 8.66447,14.3152 10.35969,10.73641 9.41789,-0.75344 3.39045,-4.52058 10.54804,-1.31851 8.09939,-5.83909 2.63701,9.22953 6.59253,11.67819 12.99669,-7.91103 10.17133,2.26029 12.9967,-3.5788 12.73069,-54.1704 -12.54234,-59.40942 -28.00981,1.14527 -13.85168,5.86033 -17.84734,8.25773 -11.18789,1.33189 -8.25773,-11.72065 -17.58097,-5.59394 -18.64648,-3.99568 -4.79481,6.65946 -17.84735,14.91718 -19.71199,14.38443 -4.79481,14.11806 21.84302,21.57664 6.76537,14.05318 v 0 0"
                     id="San Ildefonso"
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
                  id="San Miguel">
                  <path
                     d="m 368.13155,476.66602 18.64648,3.99568 17.58097,5.59394 8.25773,11.72065 11.18789,-1.33189 31.69902,-14.11806 28.00981,-1.14527 27.87698,-62.53483 -11.30148,-97.19269 -34.19655,6.63974 -22.90854,11.72065 -20.24475,7.99135 -6.92584,12.78616 -14.91719,6.92583 -9.05686,-6.39307 -25.03956,2.66378 -6.39308,10.65513 -10.12238,7.99135 -2.66378,26.63783 -7.99135,3.7293 2.13103,20.77751 11.72064,15.9827 18.11373,10.65513 z"
                     id="San Miguel"
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
                     Bulacan Province Level {totalLevel}
                  </tspan>
               </text>
            </g>
         </svg>
      </>
   );
};

export default BulacanProvinceMapJSX;
