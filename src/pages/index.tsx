import  styled  from "styled-components";
import React from "react";
import Layout from "../components/templates/Layout";
import { Button } from "@material-ui/core";
import Link from 'next/link';

const Title = styled.h1<{ size: number }>`
color: red;
font-size: ${({ size }) => size}px;
`;

const IndexPage: React.FC = () => {
  return (
    <Layout title="Okarikicks | Home">
      <h1>What kind of favorite sneaker?</h1>
      <Title size={30}>NIKE? adidas? converse?</Title>
      <Button variant="contained" color="primary">
        <a>Choice</a>
      </Button>
      <p>
        {/* Link ⇒ page間の移動、変更部だけレンダリングされるメソッド */}
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  )
}

export default IndexPage;