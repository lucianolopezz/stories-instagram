import React from 'react';
import { Container } from './styles';

const Profile = ({ user, hour, theme, border }) => (
  <Container theme={theme} border={border}>
    <li>
      <a href={`/stories/${user._id}`}>
        <img src={user.profileImage} alt='Profile Image' />
        <div className="profile-content">
          <span className="name">{user.name}</span>
          {hour && <span className="hour">{hour}</span>}
        </div>
      </a>
    </li>
  </Container>
);

export default Profile;
