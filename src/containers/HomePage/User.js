import React from 'react';
import PropTypes from 'prop-types';
import List from '../../components/List';
import Card from '../../components/Card';

import { Text, Image } from 'react-native';

const User = ({ user }) => {

  if (!user) return null;

  return (
    <Card>
      <Text style={{fontSize: 30}}>{user.name}</Text>
      <Image
          style={{width: 100, height: 100}}
          source={{uri: user.profile_image_url}}
        />
      <Text>Tweets: {user.tweets_count}</Text>
    </Card>
  )
}

User.propTypes = {
  user: PropTypes.any
};

export default User;
