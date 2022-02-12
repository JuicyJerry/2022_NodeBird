
import React from 'react';
import propTypes from "prop-types";
import Link from "next/link";

const AppLayout = ({ children }) => {


  return (
    <div>
      <div>
        <Link href="/"><a>노드버드</a></Link>
        <Link href="/profile"><a>프로필</a></Link>
        <Link href="/signup"><a>회원가입</a></Link>
      </div>
      {children}
    </div>
  )

}

AppLayout.propTypes = {
  children: propTypes.node.isRequired,
  // children은 노트타입: 리액트의 노드 (화면에 그릴 수 있는  모든것;리턴에 넣을 수 있는 모든 것)
}

export default AppLayout;