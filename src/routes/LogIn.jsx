import React from 'react';
import { Logo, Card, LoginForm } from '../components';

export default function LogIn() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20% 0",
        height: "100%",
        width: "100%",
        background: "#691B33",
        margin: 0,
      }}
    >
      <div>
        <Logo />
      </div>
      <Card width="75%">
        <LoginForm />
      </Card>
    </div>
  );
}
