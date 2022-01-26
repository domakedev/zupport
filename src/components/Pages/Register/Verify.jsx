import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
// Import Register from Redux
import actions from '../../../store/action';

function Verify() {
  // Redux
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const vertoken = useParams();
  useEffect(async () => {
    await dispatch(actions.validateUser(vertoken));
    navigate('/');
  });
  return <div />;
}

export default Verify;
