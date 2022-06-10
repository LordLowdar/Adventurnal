import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_JOURNALENTRY } from '../utils/mutations';
import {
  useNavigate,
  useLocation,
  Navigate,
  useParams,
} from 'react-router-dom';

const Journal = () => {
  const [journalDetails, setDetails] = useState({
    title: '',
    session: '',
    contents: '',
    tags: [],
  });
  const [addJournalEntry, { error, data, loading }] =
    useMutation(ADD_JOURNALENTRY);
  const { characterId } = useParams();
  const onChange = (e) =>
    setDetails({ ...journalDetails, [e.target.name]: e.target.value });
  const entryProcess = async () => {
    if (
      characterId &&
      journalDetails.title &&
      journalDetails.session &&
      journalDetails.contents
    ) {
      console.log('Click');
      const { title, session, contents, tags } = journalDetails;
      const { data } = await addJournalEntry({
        variables: {
          characterId,
          title,
          session,
          contents,
          tags,
        },
      });
    }
  };

  return (
    <div className="base">
      <div className="journalHeader">Journal</div>
      <div className="content">
        <div className="JournalForm">
          <div className="form-group">
            <label className="journalTitle" htmlFor="title">
              Title:
            </label>
            <input
              onChange={onChange}
              type="text"
              name="title"
              value={journalDetails.title}
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <label className="session" htmlFor="session">
              Session:
            </label>
            <input
              onChange={onChange}
              type="text"
              name="session"
              value={journalDetails.session}
              placeholder="Session"
            />
          </div>
          <div className="form-group">
            <label className="contents" htmlFor="contents">
              Contents:
            </label>
            <input
              onChange={onChange}
              type="text"
              name="contents"
              value={journalDetails.contents}
              placeholder="Write away"
            />
          </div>
        </div>
      </div>
      <div className="submitFooter">
        <button type="submit" onClick={entryProcess} className="btn">
          Entry
        </button>
      </div>
    </div>
  );
};

export default Journal;
