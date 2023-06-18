import styled from "styled-components";
import backgroundImage from "../../../../images/session1background.png";

const Section1Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${backgroundImage});
    background-size: 120%; 
    background-position: center center;
    opacity: 0.2; /* 배경 이미지의 투명도 설정 */
    z-index: -1;
  }

  .scroll-to-section2 {
    position: absolute;
    bottom: 5%;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    transition: transform 1s ease-in-out;
    animation: scrollAnimation 1.5s infinite;
    font-size: 30px;
  }

  @keyframes scrollAnimation {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const Section2Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50%;
`;

const Section3Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Section4Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export { Section1Wrapper, Section2Wrapper, Section3Wrapper, Section4Wrapper };
