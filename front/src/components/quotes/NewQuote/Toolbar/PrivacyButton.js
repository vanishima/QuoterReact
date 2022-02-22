import React from "react";
import { connect, useDispatch } from "react-redux";
import { BiLock, BiLockOpen } from "react-icons/bi";
import { updateInput } from "reducers/quotes/actions";
import "./styles/PrivacyButton.css";

const PrivacyButton = ({ loading, privacy }) => {
  const dispatch = useDispatch();
  console.log("privacy", privacy);

  const privacyText = privacy === 1 ? "Private" : "Public";

  const togglePrivacy = e => {
    dispatch(updateInput("privacy_level", privacy === 1 ? 0 : 1));
  };

  return (
    <div>
      <button className="btn privacy-button" onClick={togglePrivacy}>
        {privacy ? <BiLock size="1.2rem" /> : <BiLockOpen size="1.2rem" />}
        {/* <span className="button-name">{privacyText}</span> */}
      </button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  loading: state.quotes.loading,
  privacy: state.quotes.newQuote.privacy_level,
  ...ownProps,
});

export default connect(mapStateToProps)(PrivacyButton);
