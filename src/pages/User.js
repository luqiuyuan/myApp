import React, { Component } from 'react';
import UserFetcher from '../component/UserFetcher';
import styles from './styles/User';
import defaultAvatar from '../imgs/avatar_default.jpg';
import TextCostume from '../component/TextCostume';
import {connect} from 'react-redux';
import firebase from 'firebase';



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC4woMnjeyLpVru50GId75zEFy0rK4EbFI",
    authDomain: "bigfish-10e95.firebaseapp.com",
    databaseURL: "https://bigfish-10e95.firebaseio.com",
    projectId: "bigfish-10e95",
    storageBucket: "bigfish-10e95.appspot.com",
    messagingSenderId: "1007560582985"
  };
  firebase.initializeApp(config);

class User extends Component{
  
  render(){
    const { id } = this.props.match.params;
    const { user_token, update } = this.props;
    console.log(id);
    return(
      <div style={styles.container}>
      <UserFetcher id={id}>
      {user=>{
        return(
          <div style={styles.panel_container}>
            <Avatar style={styles.avatar} 
            avatarURL={user.avatar_url}
            editable={user_token.user_id == id}
            onUploaded={update}
            />
            <div style={styles.info_container}>
              <TextCostume type='xl'>{user.name}</TextCostume>
              {/* <TextCostume ></TextCostume> */}
            </div>
          </div>
        )
      }}
      </UserFetcher>
      </div>
    );
  }
}
const mapState = state =>({
  user_token: state.user_token
})
const mapDispatch = ({ users:{ update } }) => ({
  update: user=> update({ user }),
})
export default connect (mapState, mapDispatch)(User);
class Avatar extends Component{
  fileInputRef = ref => {
    this._file_input = ref;
  }
  onClick = () =>{
    this._file_input && this._file_input.click();
  }
  stopBubble = e =>{
    e.stopPropagation();
  }
  onChange = e => {
    const file = e.target.files[0];
    this.uploadImage(file, this.props.userID)
  }
  uploadImage(image, user_id){
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child(`/avatars/${user_id}`);
    const uploadTask = imageRef.put(image);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, snapshot => {
    //Callbacks called during uploading
    }, () => {
    //Fail callback
    }, () => {//success callback
      uploadTask.snapshot.ref.getDownloadURL().then( downloadURL => {
        this.props.onUploaded && this.props.onUploaded({ avatar_url: downloadURL });
      });
    });
  }
  render(){
    const {avatarURL, style, editable}=this.props;
    // console.log(editable);
    return(
      <div style={{...style, backgroundImage:`url(${avatarURL||defaultAvatar})`, ...styles.avatar_image}}>
      {editable? 
      <div style={styles.overlay}
      onClick={this.onClick}>
        <img style={styles.icon_camera} src={require('../imgs/icons/photo-camera.svg')}/>
        <TextCostume type='white' style={styles.text_avatar}>Edit your avatar</TextCostume>
        <input onChange={this.onChange} onClick={this.stopBubble} type='file' style={{display:'none'}} ref={this.fileInputRef}/>
      </div>:null
      }
      </div>
    );
  }
} 