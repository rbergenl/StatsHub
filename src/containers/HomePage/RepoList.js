import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const RepoList = ({ repos }) => {

  if (!repos) return null;

  return (
    <React.Fragment>
      <Text>Repo List</Text>
      {repos &&
        <FlatList
          data={repos}
          renderItem={({item}) => <Text key={item.key} style={styles.item}>{item.key}</Text>}
        />
      }
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})


RepoList.propTypes = {
  repos: PropTypes.any
};

export default RepoList;
