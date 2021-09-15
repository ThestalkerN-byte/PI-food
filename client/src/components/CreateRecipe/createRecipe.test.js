import React from "react";
import { configure, shallow, } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { CreateRecipe } from "./createRecipe";


configure({ adapter: new Adapter() });

describe("<CreateRecipe />", () => {
  describe("Estructura", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<CreateRecipe />);
    });
    it("Renderiza un <form>", () => {
      expect(wrapper.find("form")).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "Name"', () => {
    
      expect(wrapper.find("label").at(0).text()).toEqual("Name");
    });

    it('Renderiza un input con la propiedad "name" igual a "name"', () => {
      expect(wrapper.find('input[name="name"]')).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "Resume"', () => {
    
      expect(wrapper.find("label").at(1).text()).toEqual("Resume");
    });

    it('Renderiza una textarea con la propiedad "name" igual a "description"', () => {
      expect(wrapper.find('textarea[name="resume"]')).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "Image"', () => {
    
      expect(wrapper.find("label").at(2).text()).toEqual("Image");
    });

    it('Renderiza un input con la propiedad "name" igual a "img"', () => {
      expect(wrapper.find('input[name="img"]')).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "Score"', () => {

      expect(wrapper.find("label").at(3).text()).toEqual("Score");
    });

    it('Renderiza un input con la propiedad "name" igual a "score"', () => {
      expect(wrapper.find('input[name="score"]')).toHaveLength(1);
    });
  });
});
