import { useState, useRef, useEffect } from "react";
import dpAlt from "../../img/profile props/profile picture placeholder.svg";
//styled-components
import styled from "styled-components";
//components
import Loadingpulse from "../loaders/Loadingpulse";
//function
import { encodingImage } from "../../functions/generalFunc";
//redux
import { useSelector, useDispatch } from "react-redux";
//reducer
import { uploadPicture } from "../../store/user";
import { alertToggleTrue } from "../../store/alerts/alert";
const Profilepicture = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.entities.user);
  const hiddenFileInput = useRef(null);
  const [dp, setDp] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [uploadBtn, setUploadBtn] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [changeBtn, setChangeBtn] = useState(false);

  //useEffect
  useEffect(() => {
    if (!dp) {
      setDp(dpAlt);
    }
  }, []);
  useEffect(() => {
    if (userInfo.profilepic) setDp(userInfo.profilepic);
    if (userInfo.profilepic && uploadBtn) {
      setDp(userInfo.profilepic);
      dispatch(
        alertToggleTrue({
          type: "success",
          message: "Profile Picture Has Been Updated.",
        })
      );
      setUploading(false);
      setUploadBtn(false);
    }
  }, [userInfo.profilepic]);
  const onFileChangeHandler = async (e) => {
    setSelectedFile(await encodingImage(e.target.files[0]));
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setDp(objectUrl);
    setUploadBtn(true);
    return () => URL.revokeObjectURL(objectUrl);
  };
  const changeDpHandler = () => {
    hiddenFileInput.current.click();
  };
  const newDpUploadHandler = () => {
    const username = userInfo.username;
    const jsonData = JSON.stringify(selectedFile);
    setUploading(true);
    dispatch(uploadPicture({ username, jsonData }));
  };

  return (
    <DpStyle onMouseLeave={() => setChangeBtn(false)}>
      {changeBtn || uploadBtn ? (
        <div className="changeDp">
          <input
            type="file"
            ref={hiddenFileInput}
            onChange={onFileChangeHandler}
          />
          {!uploadBtn ? (
            <button onClick={changeDpHandler}>Change</button>
          ) : (
            <button onClick={newDpUploadHandler}>Upload</button>
          )}
        </div>
      ) : (
        ""
      )}
      {uploading ? <Loadingpulse body="uploading..." /> : ""}
      <img onMouseOver={() => setChangeBtn(true)} src={dp} alt="" />
    </DpStyle>
  );
};

const DpStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12rem;
  width: 12rem;
  border-radius: 8px;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: cover;
    transition: 0.3s;
  }
  .changeDp {
    input {
      position: absolute;
      display: none;
    }
    button {
      position: absolute;
      bottom: 0;
      left: 0;
      font-size: 1.5;
      color: white;
      outline: none;
      border: none;
      background-color: rgba(0, 0, 0, 0.7);
      width: 100%;
      height: 3rem;
      transition: 0.3s;
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 1030px) {
    height: 10rem;
    width: 10rem;
  }
  @media only screen and (max-width: 680px) {
    height: 8rem;
    width: 8rem;
  }
`;
export default Profilepicture;
