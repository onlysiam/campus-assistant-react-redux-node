import { useState, useRef, useEffect } from "react";
import dpAlt from "../../img/profile props/profile picture placeholder.svg";
//components
import Loadingpulse from "../loaders/Loadingpulse";
//function
import { encodingImage } from "../../functions/functions";
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
    <div className="flex flex-col justify-start items-center w-full h-full sm:w-25p">
      <div
        onMouseLeave={() => setChangeBtn(false)}
        className="relative flex justify-center w-52 h-52 rounded-full overflow-hidden"
      >
        {changeBtn || uploadBtn ? (
          <div>
            <input
              className="hidden absolute"
              type="file"
              ref={hiddenFileInput}
              onChange={onFileChangeHandler}
            />
            {!uploadBtn ? (
              <button
                onClick={changeDpHandler}
                className="absolute bottom-0 text-lg text-white bg-black bg-opacity-70 w-full h-10 duration-150 cursor-pointer"
              >
                Change
              </button>
            ) : (
              <button
                onClick={newDpUploadHandler}
                className="absolute bottom-0 text-lg text-white bg-black bg-opacity-70 w-full h-10 duration-150 cursor-pointer"
              >
                Upload
              </button>
            )}
          </div>
        ) : (
          ""
        )}
        {uploading ? (
          <div className="absolute h-full w-full flex">
            <Loadingpulse body="uploading..." />
          </div>
        ) : (
          ""
        )}
        <img
          onMouseOver={() => setChangeBtn(true)}
          className="w-52 duration-150 object-cover"
          src={dp}
          alt=""
        />
      </div>
      <h1 className="text-2xl font-bold mt-3">{userInfo.name}</h1>
    </div>
  );
};

export default Profilepicture;
