import React, { Component } from 'react';
import Header from '../../../common/components/header';
import VerticalLayout from '../../../common/components/vertical-layout';
import HandleError from '../../../error/containers/handle-error';
import IndexBottomContainer from '../components/index-bottom-container';
import IndexBottomLayout from '../components/index-bottom-layout';

class Index extends Component {
  render() {
    return (
      <HandleError>
        <VerticalLayout>
          <Header>
            Encuesta Ecam
          </Header>
          <IndexBottomContainer>
            <IndexBottomLayout />
            {/* <Link to="/main">
            <Button>
              Main
            </Button>
          </Link> */}
          </IndexBottomContainer>
        </VerticalLayout>
      </HandleError>
    )
  }
}

export default Index;