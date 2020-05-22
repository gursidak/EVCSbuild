import React, { Component } from 'react'
import {Layout, Navigation, Header, Drawer, Content} from 'react-mdl';

class MainView extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='MainView'>
                <div className="demo-big-content">
                     <Layout>
                         <Header title="EVCS" scroll>
                             <Navigation>
                                 <a href="#">Link</a>
                                 <a href="#">Link</a>
                                 <a href="#">Link</a>
                                 <a href="#">Link</a>
                             </Navigation>
                         </Header>
                         <Drawer title="EVCS">
                             <Navigation>
                                 <a href="#">Link</a>
                                 <a href="#">Link</a>
                                 <a href="#">Link</a>
                                 <a href="#">Link</a>
                             </Navigation>
                         </Drawer>
                         <Content>
                             <div className="page-content" />
                         </Content>
                     </Layout>
                </div>
            </div>
         );
    }
}
 
export default MainView;