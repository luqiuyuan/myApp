import {
  COLOR_LEAD_WHITE,
} from '../../constants';

const styles = {

  container: {
    // styling self
    width: '100vw',
    height: '100vh',
    backgroundColor: COLOR_LEAD_WHITE,
    // styling children
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  scrollable: {
    // styling self
    flex: 1,
    alignSelf: 'stretch',
    overflow: 'auto',
    // styling children
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  question_list_container: {
    // styling self
    width: 900,
    backgroundColor: 'white',
    // styling children
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 23,
    paddingBottom: 23,
    flexShrink: 0,
  },
  questionListContainer:{
    width:'55vw',
    marginTop:'5vh',
    marginBottom:'5vh',
    marginLeft:'auto',
    marginRight:'auto',
    borderRadius:15,
    backgroundColor:'white',
  },
  AnswerListContainer:{
    //styling self
    width:'55vw',
    marginTop:'5vh',
    marginBottom:'5vh',
    marginLeft:'auto',
    marginRight:'auto',
    // backgroundColor:'white',
    //styling children
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
  },

  question: {
    marginLeft: 29,
    marginRight: 29,
  },

  container_create_question: {
    // styling self
    backgroundColor: 'rgba(216, 216, 216, 0.5)',
    position: 'absolute',
    top: 0, right: 0, bottom: 0, left: 0,
    // styling children
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  panel_create_question: {
    // styling self
    width: 900,
    height: 400,
    backgroundColor: 'white',
    // styling children
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  title_create_question: {
    width: 700,
    marginTop: 36,
  },

  content_create_question: {
    width: 700,
  },

  blank: {
    flex: 1,
  },

  button_create_question: {
    alignSelf: 'flex-end',
    marginBottom: 25,
    marginRight: 100,
    width: 350
  },

};

export default styles;
