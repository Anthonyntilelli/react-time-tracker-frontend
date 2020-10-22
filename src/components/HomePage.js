import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const HomePage = () => {
  return (
    <>
      <Row as='article' className='my-2'>
        <Col as='p'>
          Curabitur dictum tortor eu cursus faucibus. Curabitur eu auctor sem.
          In finibus laoreet massa, eget ultrices purus mattis at. Ut ipsum sem, imperdiet a nulla sit amet, malesuada auctor turpis.
          Mauris ultrices eu odio a placerat. Vivamus quis neque diam. Ut magna nunc, pharetra id iaculis at, sollicitudin sit amet nisi.
        </Col>
      </Row>
      <Row as='article' className='my-2'>
        <Col as='p'>
          Quisque vel ultricies nunc. Donec eu justo accumsan, luctus sem eget, vehicula justo. Donec iaculis tristique sollicitudin.
          Fusce mattis eros et sapien venenatis vestibulum et et ipsum. Proin ligula leo, faucibus ut sapien eget, placerat sagittis nibh.
          In lobortis nunc ac tortor iaculis ultrices. Suspendisse condimentum orci ut pellentesque hendrerit. Nunc eget pharetra ligula.
          Sed id dictum ante.
        </Col>
      </Row>
      <Row as='article' className='my-2'>
        <Col as='p'>
          Cras dapibus felis arcu, vel luctus nibh lacinia pharetra. Proin sed accumsan nisi, vitae commodo quam.
          Vivamus a ante vitae odio efficitur consectetur vitae ac magna. Fusce hendrerit, massa non sollicitudin porta, lorem quam viverra risus.
          Egestas pellentesque sem eros sit amet ligula. Vestibulum augue turpis, vulputate interdum erat vitae, maximus pulvinar nisi.
          Donec malesuada nulla vel tempor ornare. In eget urna mauris. Sed in lectus elementum, consequat enim eu, dictum metus.
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
