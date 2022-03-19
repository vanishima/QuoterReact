import React from "react";
import { connect, useDispatch } from "react-redux";
import { BsLock, BsUnlock } from "react-icons/bs";
import { setQuoteInput } from "reducers/quotes/quoteActions";
import "./styles/PrivacyButton.css";
import { selectLoading, selectPrivacy } from "reducers/quotes/selectors";

const PrivacyButton = ({ loading, privacy, quoteId, handleEdit }) => {
  const dispatch = useDispatch();

  const togglePrivacy = e => {
    handleEdit();
    dispatch(setQuoteInput("privacy_level", privacy === 1 ? 0 : 1, quoteId));
  };

  return (
    <div>
      <button
        className="btn privacy-button"
        onClick={togglePrivacy}
        disabled={loading}
      >
        {privacy === 1 ? <BsLock size="1.2rem" /> : <BsUnlock size="1.2rem" />}
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
