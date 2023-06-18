    import styled from 'styled-components';

    export const BoxWrapper = styled.div`
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    `;

    export const BoxContent = styled.div`
      flex-basis: 30%;
      border: 1px solid black;
      padding: 20px;
      margin-right: 10px;
      cursor: pointer;
    
      .box {
        position: relative;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: lightgray;
        transition: background-color 0.3s ease-in-out;
      }
    
      .box:hover {
        background-color: darkgray;
      }
    
      .default-content {
        font-size: 20px;
      }
    
      .hover-content {
        position: absolute;
        bottom: -50px; /* 아래쪽 바깥에 위치시키기 위해 음수 값을 주세요 */
        left: 0;
        width: 100%;
        height: 30px; /* 원하는 높이로 설정해주세요 */
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
      }
    
      .box:hover .hover-content {
        opacity: 1;
      }
    `;