import React, { useState, useEffect } from "react";
//mui components
import { Alert } from "@mui/material";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
//styled components
import styled from "styled-components";
//redux
import { useDispatch, useSelector } from "react-redux";
import { alertToggleFalse } from "../../store/alerts/alert";

const Alerts = () => {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alerts.alert);
  const [alertType, setAlertType] = useState("error");
  const [checked, setChecked] = useState();
  useEffect(() => {
    setAlertType(alert.type);
    setChecked(alert.state);
    if (alert.state) {
      setTimeout(() => {
        dispatch(alertToggleFalse());
      }, 3000);
    }
  }, [alert]);
  return (
    <AlertsStyle className="">
      <Box sx={{ display: "flex" }}>
        <Grow in={checked}>
          <Alert
            onClose={() => {
              dispatch(alertToggleFalse());
            }}
            variant="filled"
            severity={alertType || "error"}
          >
            {alert.message}
          </Alert>
        </Grow>
      </Box>
    </AlertsStyle>
  );
};

const AlertsStyle = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 1rem;
  margin-left: 50%;
  transform: translateX(-50%);
  z-index: 30;
`;
export default Alerts;
