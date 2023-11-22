"use client";
import ScrollToTop from "react-scroll-to-top";
import { Scroll } from "./svg";
import Container from "./Container";

export const ScrollTop = () => {
  return (
    <Container>
      <ScrollToTop
        component={<Scroll className="h-6 w-6 " />}
        top={200}
        className="!w-10 !h-10 !flex !justify-center !items-center !rounded-xl !bg-myBlue !text-myBlack  "
      />
    </Container>
  );
};
