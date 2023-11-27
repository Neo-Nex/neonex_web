import Header from "@/components/header";
import styled from "@emotion/styled/macro";

export default function Layout(props: any) {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
}
