import React from 'react'
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar'
import '../css/main.css';
import DetailContent from './detailContent';
import ListsStory from './listsStory';
import ListsSuggestions from './listsSuggestions';
import { Redirect, Link} from 'react-router-dom';

export default class Content extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          propsan_bro: "",
          result:[],
          pageNow: 1,
          halaman: 1,
          purpose: "list"
        }
      }
    
      componentWillMount() {
        this.fetching(1);
        console.log('Aku will mount');
      }
    
      fetching(def=1){
        let opt={
          method:'GET',
          //url:this.state.next
          // url:`https://swapi.co/api/people/?page=${def}`
          url:'https://my-json-server.typicode.com/arumkw/API_for_task/posts'
        }
        axios(opt)
        .then(({data}) => {
          this.setState({
            result: data,
            pageNow: def
          });
        })
        .catch(error => {
          console.log(error)
        })
      }
    
      setThePage(newPage){
        this.fetching(newPage)
      }

      insideAvatarFunction(e) {
        e.stopPropagation();
        console.log('Fired insideAvatarFunction()!');
        return <Redirect to="/Profile"/>
       
      }

    render() {
        return (
            <div className = 'Content'>
                <section className='Section-Left'>
                    <DetailContent 
                        props_list={this.state.propsan_bro}
                        result={this.state.result}
                        props_page_main={(e) => this.setThePage(e)}
                        currentpage={this.state.pageNow}
                        purpose="list"
                    ></DetailContent>
                </section>
                <section className='Section-Right'>
                  <div className='first-row'>
                  {/* <div onClick={this.insideAvatarFunction}> */}
                  <Link to='/Profile'>
                    {/* <Avatar alt="Avatar" src='https://icon-icons.com/icons2/582/PNG/512/girl_icon-icons.com_55043.png' style={{width:60, height:60, marginRight:20}}/> */}
                    <Avatar alt="Avatar" src='https://cdn.imgbin.com/5/16/1/imgbin-face-avatar-man-sunglasses-face-s-itjjzi0h9kxU6m2SB7nRHdvZS.jpg' style={{width:60, height:60, marginRight:20}}/>
                    </Link>{/* </div> */}
                    <div style={{height:'30px'}}>
                      <p style={{marginBlockStart:'8px'}}> <Link to='/Profile' style={{textDecoration:'none'}}><b>Orriku</b></Link><br />Arum Kusuma Wardani</p>
                    </div>
                  </div>
                  <div className='second-row'>
                  <DetailContent 
                        props_list={this.state.propsan_bro}
                        result={this.state.result}
                        props_page_main={(e) => this.setThePage(e)}
                        currentpage={this.state.pageNow}
                        purpose="story"
                  ></DetailContent>
                  <DetailContent 
                        props_list={this.state.propsan_bro}
                        result={this.state.result}
                        props_page_main={(e) => this.setThePage(e)}
                        currentpage={this.state.pageNow}
                        purpose="suggestion"
                    ></DetailContent>
                  </div>
                </section>
            </div>
        )
    }
}