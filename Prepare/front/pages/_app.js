import PropTypes from "prop-types";
import React from "react";
import Head from "next/head";
import "antd/dist/antd.css";

import wrapper from "../store/configureStore";

const NodeBird = ({ Component }) => {
  return (
    <>
      {/* <Head>
        <meta charSet="UTF-8" />
        <title>NodeBird</title>
      </Head> */}
      <div>노드버드</div>
      <Component />
    </>
  )

}

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(NodeBird);