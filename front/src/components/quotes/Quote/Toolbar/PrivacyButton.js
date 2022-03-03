import React from "react";
import { connect, useDispatch } from "react-redux";
import { BsLock, BsUnlock } from "react-icons/bs";
import { updateQuoteInput } from "reducers/quotes/actions";
import "./styles/PrivacyButton.css";
import { selectLoading, selectPrivacy } from "reducers/quotes/selectors";

const PrivacyButton = ({ loading, privacy }) => {
  const dispatch = useDispatch();

  const togglePrivacy = e => {
    dispatch(updateQuoteInput("privacy_level", privacy === 1 ? 0 : 1));
  };

  return (
    <div>
      <button
        className="btn privacy-button"
        onClick={togglePrivacy}
        disabled={loading}
      >
        {privacy ? <BsLock size="1.2rem" /> : <BsUnlock size="1.2rem" />}
      </button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  loading: selectLoading(state),
  privacy: selectPrivacy(state),
  ...ownProps,
});

export default connect(mapStateToProps)(PrivacyButton);
