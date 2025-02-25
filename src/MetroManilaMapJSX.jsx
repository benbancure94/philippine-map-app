import React, { useState } from "react";

const MapTooltip = ({ visible, position, content }) => {
  if (!visible) return null;

  const tooltipStyle = {
    top: position.y,
    left: position.x,
  };

  return <span style={tooltipStyle} className="map-tooltip">{content}</span>;
};

const MetroManilaMapJSX = ({
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
        

        <g transform="translate(-200,100)">
          <g
            className="province-layer"
            id="Caloocan">
            <path
              d="m 421.46904,342.00602 -11.20184,-3.6756 -5.25086,3.6756 0.17503,13.82727 -4.20069,3.15051 -12.60206,-9.97663 -11.37687,8.40137 -5.95097,19.95327 5.60092,7.35121 -25.90425,15.75258 -17.50286,-4.20069 -14.35235,8.40137 -9.9874,0.78445 0.99011,13.86156 -0.49505,14.85168 15.34673,17.82201 16.33684,-5.44561 22.77257,-1.48517 -1.48517,-6.93078 16.33685,-34.65391 -0.99012,-12.87145 42.07975,-43.56492 z m -10.87364,-54.23379 14.65756,-14.00635 21.78246,-26.73302 57.92153,-7.92089 22.77257,-1.98022 11.38629,-13.36651 1.98022,-10.89123 11.88134,-3.46539 9.40606,-6.43573 -5.94067,-12.37639 -6.43572,4.4555 -7.9209,-3.96045 -2.47528,-9.40606 -11.88134,4.95056 -6.43572,-9.90112 -8.41595,6.43573 -9.90112,-4.95056 -7.42584,0.99011 -14.35662,-8.41595 -13.3665,-9.90111 -8.41595,7.92089 -11.88134,-6.93078 -14.85168,5.44561 -6.43572,13.36651 -2.97034,23.76268 -45.05008,17.82201 13.36651,15.84179 -10.89123,60.89187 25.89366,7.81153 z"
              id="Caloocan"
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
            id="Valenzuela">
            <path
              d="m 378.22266,222.28007 13.36651,15.84179 -10.89123,60.89187 25.89366,7.81153 2.10034,5.42589 -4.9008,8.5764 h 7.52623 l 11.21279,15.1916 -1.06112,5.98687 -11.20184,-3.6756 -5.25086,3.6756 0.17503,13.82727 -4.20069,3.15051 -12.60206,-9.97663 -11.37687,8.40137 -5.95097,19.95327 -17.09586,8.47233 -17.82201,-12.80957 -4.98867,-6.33951 -10.32669,-2.10034 -6.82612,8.40138 -3.85063,-17.6779 -15.57755,-28.35464 -8.05132,2.4504 -25.55418,-34.83071 -15.92761,-28.52967 -0.70012,-10.50172 15.92761,4.72577 2.80046,-6.82612 9.97664,0.52509 3.32554,5.60092 11.02681,0.17503 3.50057,5.77594 15.75258,21.70356 30.45499,-10.32669 11.72692,-32.73037 16.62772,-5.25086 3.15052,-11.72692 z"
              id="Valenzuela"
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
            id="Malabon">
            <path
              d="m 286.52193,329.40396 8.05132,-2.4504 15.57755,28.35464 3.85063,17.6779 6.82612,-8.40138 10.32669,2.10034 4.98867,6.33951 17.82201,12.80957 17.09586,-8.47233 5.60092,7.35121 -25.90425,15.75258 -17.50286,-4.20069 -14.35235,8.40137 -9.9874,0.78445 0.99011,13.86156 -0.49505,14.85168 -10.11087,-13.39505 2.4504,-3.6756 -5.42589,-4.9008 -6.65109,2.4504 -12.77709,-29.9299 -15.2275,-29.22979 -24.85407,-25.72922 -1.40023,-8.22634 9.10149,-5.77595 32.55533,30.63002 z"
              id="Malabon" 
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
            id="Navotas">
            <path
              d="m 236.81379,329.75401 24.85407,25.72922 15.2275,29.22979 12.77709,29.9299 6.65109,-2.4504 5.42589,4.9008 -2.4504,3.6756 10.11087,13.39505 12.2928,14.08445 -2.45041,2.45041 -9.8016,-2.80046 -9.62658,1.92531 -20.1283,-24.15395 1.22521,-13.30218 -23.62888,-31.33014 -7.52623,-15.40252 -43.32763,-42.36343 13.11898,-12.12887 v -11.88134 l 12.12887,-0.74258 12.82892,17.23305 -9.10149,5.77595 z"
              id="Navotas" 
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
            id="Quezon City">
            <path
              d="m 558.69151,194.63188 4.20069,-4.55074 19.07813,-3.67561 1.40023,-8.22634 8.92646,-3.32555 19.60321,4.9008 18.20298,-6.126 -3.32554,12.07698 -13.47721,12.07698 -3.85063,15.92761 -9.62658,18.20298 0.52509,15.92761 7.70126,5.25086 -5.25086,16.62772 3.50057,8.92646 -11.20183,52.15855 -7.35121,24.15395 -36.0559,41.65683 -9.45155,32.20527 -19.95327,18.9031 -1.75029,22.40367 10.15167,23.45384 17.85292,17.50287 -10.50172,0.70011 -5.95097,5.95098 -0.70012,15.05246 -24.15395,-2.4504 -19.95327,3.15052 4.9008,-18.20299 -8.40138,-12.252 -6.65109,3.15051 -6.30103,-8.05132 -14.00229,-0.70011 -5.95098,5.95097 -9.45154,-10.85177 -11.20184,0.70011 -7.3512,-3.15051 -3.85063,7.70126 -4.20069,10.50172 -54.25889,-43.05706 4.66838,-13.61151 -1.3614,-6.55949 -1.48517,-6.93078 16.33685,-34.65391 -0.99012,-12.87145 42.07975,-43.56492 1.66169,-5.02812 1.06112,-5.98687 -11.21279,-15.1916 h -7.52623 l 4.9008,-8.5764 -2.10034,-5.42589 4.0038,-19.05303 14.65756,-14.00635 21.78246,-26.73302 58.27235,-7.9437 22.42175,-1.95741 11.38629,-13.36651 1.98022,-10.89123 11.88134,-3.46539 9.40606,-6.43573 z"
              id="Quezon City" 
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
            id="Marikina">
            <path
              d="m 573.85852,371.03062 10.30737,3.23159 4.95056,3.46539 8.16842,-2.22775 5.44561,4.70303 3.96045,7.67337 7.17831,-5.69314 9.65359,5.69314 v 7.42584 l 4.95056,16.83189 -7.9209,7.67337 v 27.4756 l -12.87145,-3.46539 -15.34673,-1.23764 -12.3764,4.70303 -7.92089,17.82201 2.47528,11.38628 -36.13908,-4.4555 -11.13875,8.41595 -1.7984,1.57727 -4.90081,-11.90195 1.75029,-22.40367 19.95327,-18.9031 9.45155,-32.20527 z"
              id="Marikina"
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
            id="San Juan">
            <path
              d="m 414.81795,508.28326 4.20069,-10.50172 3.85063,-7.70126 7.3512,3.15051 11.20184,-0.70011 9.45154,10.85177 5.95098,-5.95097 14.00229,0.70011 6.30103,8.05132 6.65109,-3.15051 6.12601,8.92646 -4.37572,3.32554 -8.92646,-1.57525 -15.05247,13.30218 -10.50172,3.50057 -7.00114,2.97549 -12.25201,-9.62658 -5.25086,-2.62543 -6.47606,-7.52623 z"
              id="San Juan"
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
            id="Mandaluyong">
            <path
              d="m 412.54258,552.56551 8.05131,8.75143 22.22865,16.62773 21.00344,-1.40023 h 12.60206 l 11.20183,-11.55189 0.70012,-10.15167 3.32554,-22.57869 -4.37571,1.2252 4.9008,-18.20299 -2.27537,-3.32554 -4.37572,3.32554 -8.92646,-1.57525 -15.05247,13.30218 -10.50172,3.50057 -7.00114,2.97549 -12.25201,-9.62658 -5.25086,-2.62543 2.91607,7.73178 z"
              id="Mandaluyong"
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
            id="Pasig">
            <path
              d="m 476.42804,576.54444 11.20183,-11.55189 0.70012,-10.15167 3.32554,-22.57869 15.57756,-1.92532 24.15395,2.4504 0.70012,-15.05246 5.95097,-5.95098 10.50172,-0.70011 -17.85292,-17.50287 -5.25086,-11.55189 12.93715,-9.99322 36.13908,4.4555 -4.79398,8.33818 8.92646,27.82955 8.22635,20.47836 -5.07583,11.90195 0.70011,9.27652 -14.00229,8.92646 10.15166,21.52853 -19.42818,-2.80046 4.9008,22.05361 19.60321,12.77709 -9.97663,24.85407 -13.82726,-11.20183 -1.75029,-8.92646 -26.77939,3.15051 -6.126,-13.65223 -18.20298,-9.27652 -3.85063,-9.97664 -15.40253,-9.27652 z"
              id="Pasig" 
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
            id="Makati">
            <path
              d="m 377.48008,589.11645 28.96076,-28.71324 6.10174,-7.8377 8.05131,8.75143 22.22865,16.62773 21.00344,-1.40023 h 12.60206 l 11.37686,5.95097 15.40253,9.27652 2.27537,6.30104 -4.37572,9.97663 6.82612,3.50057 -3.85063,7.52624 -5.95098,-1.05018 -1.2252,10.85178 7.87629,8.57641 -3.6756,2.80045 -5.95097,1.05018 -3.85063,9.45155 -5.42589,-1.05018 3.15051,-13.12715 -8.05131,-10.50172 -0.52509,-4.37571 6.30103,-6.47606 4.55075,-7.52624 0.87514,-9.8016 -11.37686,-9.45155 -7.52624,10.85178 -13.12715,2.10034 5.77595,27.12944 -2.97549,2.62543 -7.70126,-0.52508 -4.55074,8.75143 -13.82727,1.57526 -14.17732,7.52623 H 405.3664 l -1.2252,-15.92761 -7.17618,-3.85063 1.05018,-12.42703 -11.20184,-9.10149 -6.126,-4.72578 z"
              id="Makati" 
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
            id="Pateros">
            <path
              d="m 505.4828,598.07297 1.57526,3.6756 18.20298,9.27652 3.45859,6.8046 -2.97033,3.46539 -10.39617,5.94067 2.47528,4.4555 -13.04573,5.76317 -7.87629,-8.57641 1.2252,-10.85178 5.95098,1.05018 3.85063,-7.52624 -6.82612,-3.50057 z"
              id="Pateros" 
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
            id="Pasay">
            <path
              d="m 341.58853,604.21565 35.89155,-15.0992 3.20728,13.33223 17.32784,13.82727 -1.05018,12.42703 7.17618,3.85063 1.2252,15.92761 h 17.32784 l 22.85601,47.07223 -39.60446,9.40606 -4.95056,-15.34673 -20.04976,1.48517 -1.23764,-17.32695 -1.23764,-21.53493 -3.21787,-9.15854 -8.41594,0.24753 v 4.20798 l -25.24785,2.22775 -2.22775,-21.53493 6.43572,-3.21786 z"
              id="Pasay" 
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
            id="Manila">
            <path
              id="Manila"
              d="M 363.86523 445.05469 L 341.09375 446.54102 L 324.75586 451.98633 L 321.70312 448.24805 L 319.25195 450.69922 L 309.45117 447.89844 L 299.82422 449.82422 L 271.78516 450.00586 L 275.99414 458.91602 L 292.57812 460.1543 L 301.98438 493.81836 L 299.50781 510.40234 L 287.38086 494.06641 L 282.18164 495.55078 L 293.81641 513.62109 L 274.01367 515.84766 L 273.51758 524.75977 L 297.5293 524.51172 L 298.27148 529.70898 L 291.33984 531.19531 L 302.72656 544.06641 L 307.92383 542.33398 L 319.31055 551.98633 L 327.97461 550.25391 L 328.7168 555.94727 L 340.35156 562.63086 L 353.4707 593.57227 L 340.59766 599.26562 L 341.58789 604.21484 L 377.48047 589.11719 L 406.44141 560.40234 L 425.25391 534.9082 L 429.46094 528.9668 L 426.54492 521.23633 L 414.81836 508.2832 L 360.55859 465.22656 L 365.22656 451.61523 L 363.86523 445.05469 z M 414.36133 575.50195 L 410.89648 584.66016 L 420.30273 587.63086 L 423.76758 578.22461 L 414.36133 575.50195 z " 
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
            id="Taguig">
            <path
              d="m 445.55025,695.55345 -22.85601,-47.07223 14.17732,-7.52623 13.82727,-1.57526 4.55074,-8.75143 7.70126,0.52508 2.97549,-2.62543 -5.77595,-27.12944 13.12715,-2.10034 7.52624,-10.85178 11.37686,9.45155 -0.87514,9.8016 -4.55075,7.52624 -6.30103,6.47606 0.52509,4.37571 8.05131,10.50172 -3.15051,13.12715 5.42589,1.05018 3.85063,-9.45155 5.95097,-1.05018 3.6756,-2.80045 13.04573,-5.76317 -2.47528,-4.4555 10.39617,-5.94067 2.97033,-3.46539 2.66741,6.84763 26.77939,-3.15051 1.75029,8.92646 13.82726,11.20183 5.60092,6.30104 3.15051,10.85177 -9.45154,0.70012 -10.85178,-10.50172 -17.85293,8.05132 1.05018,16.10263 -5.32818,11.03481 -9.02418,7.86829 -13.30217,-8.05132 -12.60207,16.80275 -9.45155,36.75602 -1.05017,20.65339 -9.10149,13.65223 -11.90195,3.15052 -4.9008,-10.50172 -3.15052,-17.85292 2.4504,-28.00459 -0.70011,-12.25201 -12.95212,-7.70126 z"
              id="Taguig" 
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
            id="Parañaque">
            <path
              d="m 341.58853,649.76079 25.24785,-2.22775 v -4.20798 l 8.41594,-0.24753 3.21787,9.15854 2.47528,38.86188 20.04976,-1.48517 4.95056,15.34673 39.60446,-9.40606 8.82418,3.161 12.95212,7.70126 0.70011,12.25201 -2.4504,28.00459 3.15052,17.85292 4.9008,10.50172 -8.22635,13.82727 -13.12715,16.80275 2.27538,9.27652 -7.70127,7.00114 -12.42703,-1.57525 -11.37686,9.27652 -13.65224,-3.85063 -13.12715,-26.95442 -13.82727,-5.42589 1.40023,-23.8039 -11.20183,-14.17732 -9.10149,-4.37572 1.40023,-11.90195 -15.05247,-3.32554 -6.65109,-5.95098 3.32555,-28.17961 0.35005,-3.6756 -14.00229,-6.12601 8.92646,-19.95327 z"
              id="Parañaque" 
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
            id="Las Piñas">
            <path
              d="m 343.23122,729.86955 6.65109,5.95098 15.05247,3.32554 -1.40023,11.90195 9.10149,4.37572 11.20183,14.17732 -1.40023,23.8039 13.82727,5.42589 13.12715,26.95442 13.65224,3.85063 -0.17503,26.2543 -19.60321,29.40481 -4.90081,29.05476 -11.55189,-3.50057 -9.80161,-21.3535 -8.05131,-4.9008 2.10034,-4.55075 -10.15166,-23.8039 -11.20184,-21.00344 -18.90309,-13.30218 -6.65109,-12.95212 1.05017,-15.40252 -8.05132,-19.95327 8.40138,-18.20298 z"
              id="Las Piñas" 
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
            id="Muntinlupa">
            <path
              d="m 398.36525,914.34977 4.90081,-29.05476 19.60321,-29.40481 0.17503,-26.2543 11.37686,-9.27652 12.42703,1.57525 7.70127,-7.00114 -2.27538,-9.27652 13.12715,-16.80275 8.22635,-13.82727 11.90195,-3.15052 -7.05806,35.31211 0.24753,45.79267 -1.23764,56.18884 7.92089,28.46571 -9.90112,18.81212 -9.65359,2.47528 -6.43572,-3.46539 -24.01021,8.16842 -8.66348,12.87145 -25.7429,22.02998 -7.42584,-1.48516 3.96045,-36.13908 8.16842,-21.53493 z"
              id="Muntinlupa" 
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
              Metro Manila Level {totalLevel}
            </tspan>
          </text>
        </g>
      </svg>
    </>
  );
};

export default MetroManilaMapJSX;
