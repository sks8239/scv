// import axios from "axios";
//
// const handleButtonClick = async (language) => {
//     try {
//         // 서버에 선택한 언어 정보 전송
//         await axios.post("/api/language", { language });
//
//         // 서버로부터 해당 언어에 대한 내용 요청
//         const response = await axios.get(`/api/language/${language}`);
//
//         // 받아온 내용을 컴포넌트에 반영
//         const content = response.data.content;
//         // ...
//     } catch (error) {
//         console.error("Error:", error);
//     }
// };
//
// export default handleButtonClick;