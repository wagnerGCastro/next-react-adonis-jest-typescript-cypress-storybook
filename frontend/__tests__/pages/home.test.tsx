import React from "react";
import { mount } from "enzyme";
import Home from "@/pages/home";

describe("Pages", () => {
  describe("Home", () => {
    it("should render without throwing an error", () => {
      const wrap = mount(<Home />);
      expect(wrap.find("h1").text()).toBe("React Avançado");
    });
  });
});
