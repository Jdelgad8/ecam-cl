import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../common/components/buttton';
import CenterFormLayout from '../../../common/components/center-form-layout';
import Image from '../../../common/components/image';
import uccLogo from '../../../images/ucc-logo.png';
import '../styles/index-bottom-layout.css';

function IndexBottomLayout(props) {
  return (
    <div className="Index-bottom-layout">
      <CenterFormLayout>
        <Image src={uccLogo} width={150} height={150} />
        <div className="Index-buttons">
          {/*           <Link to="/registro">
            <Button>
              Registro
            </Button>
          </Link> */}
          <Link to="/recolectar">
            <Button>
              Ingreso
            </Button>
          </Link>
        </div>
      </CenterFormLayout>
    </div>
  )
}

export default IndexBottomLayout;