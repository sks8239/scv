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

  //.box {
  //  position: relative;
  //  height: 150px;
  //  display: flex;
  //  align-items: center;
  //  justify-content: center;
  //  background-color: #f1f5f8; /* Custom light gray color */
  //  transition: background-color 0.3s ease-in-out;
  //}
  //
  //.box:hover {
  //  background-color: #cddcf9; /* Custom blue color */
  //}
  //
  //.default-content {
  //  font-size: 20px;
  //}
  //
  //.hover-content {
  //  position: absolute;
  //  bottom: -50px;
  //  left: 0;
  //  width: 100%;
  //  height: 30px;
  //  display: flex;
  //  align-items: center;
  //  justify-content: center;
  //  font-size: 18px;
  //  opacity: 0;
  //  transition: opacity 0.3s ease-in-out;
  //}
  //
  //.box:hover .hover-content {
  //  opacity: 1;
  //}
`;
