import styled from 'styled-components';

export const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
`;

export const ImageWrapper = styled.div`
  margin-right: 100px;
  margin-bottom: -250px;

  position: relative;
  width: 300px;
  height: 300px;
  overflow: hidden;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
    z-index: 100;
  }

  img {
    width: 100%;
    height: 100%;
    transition: opacity 0.2s ease-in-out;
  }

  .hover-content {
    position: absolute;

    font-size: 50px;
    color: black;
    opacity: 0;
    z-index: 2;
    pointer-events: none; /* 텍스트가 마우스 이벤트를 차단하도록 설정 */
  }

  &:hover img {
    opacity: 0.1;
  }

  &:hover .hover-content {
    opacity: 1;
    top:15%;
    font-size: 1.55em;
    font-weight: bold;
  }
`;

export const ButtonWrapper = styled.div`
  width: 300px;
  margin-right: 100px;
`;
